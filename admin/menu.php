<?php
/**
 * Admin panel.
 *
 * @package WP_Block_Essentials
 * @since x.x.x
 */

namespace WP_BESS\Admin;

use WP_BESS\Core\Helper;
use WP_BESS\Core\Traits\Get_Instance;

/**
 * Admin menu
 *
 * @since x.x.x
 */
class Menu {

	use Get_Instance;

	/**
	 * Tailwind assets base url
	 *
	 * @var string
	 * @since x.x.x
	 */
	private $tailwind_asset_path = WP_BESS_URL . 'admin/assets/build/';

	/**
	 * Instance of Helper class
	 *
	 * @var object helper
	 * @since x.x.x
	 */
	private $helper;

	/**
	 * Constructor
	 *
	 * @since x.x.x
	 */
	public function __construct() {
		$this->helper = Helper::get_instance();
		add_action( 'admin_menu', [ $this, 'settings_page' ], 99 );
		add_action( 'admin_enqueue_scripts', [ $this, 'settings_page_scripts' ] );
		add_action( 'wp_ajax_wp_bess_update_settings', [ $this, 'wp_bess_update_settings' ] );
	}

	/**
	 * Adds admin menu for settings page.
	 *
	 * @return void
	 * @since x.x.x
	 */
	public function settings_page() {
		add_submenu_page(
			'options-general.php',
			__( 'Settings - BlockEssentials', 'wp-bess' ),
			__( 'Block Essentials', 'wp-bess' ),
			'administrator',
			'wp_bess_settings',
			[ $this, 'render_wp_block_essentials' ],
			57
		);

		?>
			<style type="text/css">
				#menu-settings .wp-submenu li a[href="options-general.php?page=wp_bess_settings"]:before {
					content: "\f324";
					font-family: Dashicons;
					margin-right: 10px;
					vertical-align: middle;
					font-size: 16px;
				}
				#menu-settings.wp-has-current-submenu .wp-submenu {
					padding-bottom: 0;
				}
				</style>
		<?php
	}

	/**
	 * Renders main div to implement tailwind UI.
	 *
	 * @return void
	 * @since x.x.x
	 */
	public function render_wp_block_essentials() {
		?>
			<div class="wp-bess-settings" id="wp-bess-settings"></div>
		<?php
	}

	/**
	 * Enqueue settings page script and style
	 *
	 * @return void
	 * @since X.X.X
	 */
	public function settings_page_scripts() {

		if ( isset( $_GET['page'] ) && 'wp_bess_settings' === wp_unslash( $_GET['page'] ) ) { // phpcs:ignore
			$version           = defined( 'SCRIPT_DEBUG' ) && SCRIPT_DEBUG ? time() : WP_BESS_VER;
			$script_asset_path = WP_BESS_DIR . 'admin/assets/build/settings.asset.php';
			$script_info       = file_exists( $script_asset_path ) ? include $script_asset_path : array(
				'dependencies' => [],
				'version'      => $version,
			);
			$script_deps       = $script_info['dependencies'];

			wp_enqueue_script(
				'wp_bess_settings',
				$this->tailwind_asset_path . 'settings.js',
				$script_deps,
				$version,
				true
			);

			wp_localize_script(
				'wp_bess_settings',
				'wp_bess_settings',
				[
					'ajax_url'               => admin_url( 'admin-ajax.php' ),
					'update_nonce'           => wp_create_nonce( 'wp_bess_update_settings' ),
					WP_BESS_SETTINGS         => $this->helper->get_option( WP_BESS_SETTINGS ),
					WP_BESS_SUPPORT_SETTINGS => $this->helper->get_option( WP_BESS_SUPPORT_SETTINGS ),
				]
			);

			wp_enqueue_style( 'wp_bess_settings', $this->tailwind_asset_path . 'settings.css', [], $version );

			wp_enqueue_style( 'wp_bess_admin_style', WP_BESS_URL . 'admin/assets/css/admin-style.css', [], $version );
		}
	}

	/**
	 * Ajax handler for submit action on settings page.
	 * Updates settings data in database.
	 *
	 * @return void
	 * @since x.x.x
	 */
	public function wp_bess_update_settings() {
		check_ajax_referer( 'wp_bess_update_settings', 'security' );
		$key = '';

		if ( ! empty( $_POST[ WP_BESS_SETTINGS ] ) && is_array( $_POST[ WP_BESS_SETTINGS ] ) ) {
			$key = WP_BESS_SETTINGS;
		}

		if ( ! empty( $_POST[ WP_BESS_SUPPORT_SETTINGS ] ) && is_array( $_POST[ WP_BESS_SUPPORT_SETTINGS ] ) ) {
			$key = WP_BESS_SUPPORT_SETTINGS;
		}

		if ( empty( $key ) ) {
			wp_send_json_error( [ 'message' => __( 'No valid setting keys found.', 'wp-bess' ) ] );
		}

		if ( $this->update_settings( $key, $_POST[ $key ] ) ) {
			wp_send_json_success( [ 'message' => __( 'Settings saved successfully.', 'wp-bess' ) ] );
		}

		wp_send_json_error( [ 'message' => __( 'Failed to save settings.', 'wp-bess' ) ] );
	}

	/**
	 * Update dettings data in database
	 *
	 * @param string $key options key.
	 * @param array  $data user input to be saved in database.
	 * @return boolean
	 * @since x.x.x
	 */
	public function update_settings( $key, $data ) {
		$data         = $this->sanitize_data( $data );
		$default_data = $this->helper->get_option( $key );
		if ( $data === $default_data ) {
			return true;
		}
		$data = wp_parse_args( $data, $default_data );
		return update_option( $key, $data );
	}

	/**
	 * Sanitize data as per data type
	 *
	 * @param array $data raw input received from user.
	 * @return array
	 * @since x.x.x
	 */
	public function sanitize_data( $data ) {
		$filtered_data = [];
		$booleans      = [
			'enable_custom_css',
			'enable_display',
			'enable_spacings',
			'enable_width',
			'enable_layout',
			'enable_background',
			'enable_border',
			'enable_transform',
			'enable_motion_effects',
		];

		foreach ( $data as $key => $value ) {
			if ( in_array( $key, $booleans, true ) ) {
				$filtered_data[ $key ] = ( 'true' === sanitize_text_field( $value ) ) ? true : false;
			} else {
				$filtered_data[ $key ] = sanitize_text_field( $value );
			}
		}

		return $filtered_data;
	}
}
