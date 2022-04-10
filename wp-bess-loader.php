<?php
/**
 * Plugin Loader.
 *
 * @package WP_Block_Essentials
 * @since 1.0.0
 */

namespace WP_BESS;

use WP_BESS\Admin\Menu;

/**
 * WP_BESS_Loader
 *
 * @since 1.0.0
 */
class WP_BESS_Loader {

	/**
	 * Instance
	 *
	 * @access private
	 * @var object Class Instance.
	 * @since 1.0.0
	 */
	private static $instance;

	/**
	 * Initiator
	 *
	 * @since 1.0.0
	 * @return object initialized object of class.
	 */
	public static function get_instance() {
		if ( ! isset( self::$instance ) ) {
			self::$instance = new self;
		}
		return self::$instance;
	}

	/**
	 * Autoload classes.
	 *
	 * @param string $class class name.
	 */
	public function autoload( $class ) {
		if ( 0 !== strpos( $class, __NAMESPACE__ ) ) {
			return;
		}

		$class_to_load = $class;

		$filename = strtolower(
			preg_replace(
				[ '/^' . __NAMESPACE__ . '\\\/', '/([a-z])([A-Z])/', '/_/', '/\\\/' ],
				[ '', '$1-$2', '-', DIRECTORY_SEPARATOR ],
				$class_to_load
			)
		);

		$file = WP_BESS_DIR . $filename . '.php';

		// if the file redable, include it.
		if ( is_readable( $file ) ) {
			require_once $file;
		}
	}

	/**
	 * Constructor
	 *
	 * @since 1.0.0
	 */
	public function __construct() {

		spl_autoload_register( [ $this, 'autoload' ] );

		add_action( 'plugins_loaded', [ $this, 'load_textdomain' ] );

		add_action( 'plugins_loaded', [ $this, 'setup_classes' ] );

		add_filter( 'plugin_action_links_' . WP_BESS_BASE, [ $this, 'action_links' ] );

		add_action( 'enqueue_block_editor_assets', [ $this, 'enqueue_block_editor_assets' ], 9 );
	}

	/**
	 * Include required classes.
	 */
	public function setup_classes() {

		if ( is_admin() ) {
			/* Setup Menu */
			Menu::get_instance();
		}
	}

	/**
	 * Enqueue editor assets.
	 *
	 * @since 1.0.0
	 * @return void
	 */
	public function enqueue_block_editor_assets() {

		$version           = defined( 'SCRIPT_DEBUG' ) && SCRIPT_DEBUG ? time() : WP_BESS_VER;
		$script_asset_path = WP_BESS_DIR . 'build/index.asset.php';
		$script_info       = file_exists( $script_asset_path ) ? include $script_asset_path : array( 'dependencies' => [], 'version' => $version );
		$script_deps 	   = $script_info['dependencies'];

		wp_enqueue_script(
			'wp-bess-editor',
			WP_BESS_URL . 'build/index.js',
			$script_deps,
			$version,
			true
		);
	}

	/**
	 * Load Plugin Text Domain.
	 * This will load the translation textdomain depending on the file priorities.
	 *      1. Global Languages /wp-content/languages/wp-bess/ folder
	 *      2. Local dorectory /wp-content/plugins/wp-bess/languages/ folder
	 *
	 * @since 1.0.0
	 * @return void
	 */
	public function load_textdomain() {
		// Default languages directory.
		$lang_dir = WP_BESS_DIR . 'languages/';

		/**
		 * Filters the languages directory path to use for plugin.
		 *
		 * @param string $lang_dir The languages directory path.
		 */
		$lang_dir = apply_filters( 'WP_BESS_languages_directory', $lang_dir );

		// Traditional WordPress plugin locale filter.
		global $wp_version;

		$get_locale = get_locale();

		if ( $wp_version >= 4.7 ) {
			$get_locale = get_user_locale();
		}

		/**
		 * Language Locale for plugin
		 *
		 * @var $get_locale The locale to use.
		 * Uses get_user_locale()` in WordPress 4.7 or greater,
		 * otherwise uses `get_locale()`.
		 */
		$locale = apply_filters( 'plugin_locale', $get_locale, 'wp-bess' );
		$mofile = sprintf( '%1$s-%2$s.mo', 'wp-bess', $locale );

		// Setup paths to current locale file.
		$mofile_global = WP_LANG_DIR . '/plugins/' . $mofile;
		$mofile_local  = $lang_dir . $mofile;

		if ( file_exists( $mofile_global ) ) {
			// Look in global /wp-content/languages/wp-bess/ folder.
			load_textdomain( 'wp-bess', $mofile_global );
		} elseif ( file_exists( $mofile_local ) ) {
			// Look in local /wp-content/plugins/wp-bess/languages/ folder.
			load_textdomain( 'wp-bess', $mofile_local );
		} else {
			// Load the default language files.
			load_plugin_textdomain( 'wp-bess', false, $lang_dir );
		}
	}

	/**
	 * Adds links in Plugins page
	 *
	 * @param array $links existing links.
	 * @return array
	 * @since x.x.x
	 */
	public function action_links( $links ) {
		$plugin_links = apply_filters(
			'wp_bess_plugin_action_links',
			[
				'wp_bess_settings' => '<a href="' . admin_url( 'settings.php?page=wp_bess_settings' ) . '">' . __( 'Settings', 'wp-bess' ) . '</a>',
			]
		);

		return array_merge( $plugin_links, $links );
	}
}

/**
 * Kicking this off by calling 'get_instance()' method
 */
WP_BESS_Loader::get_instance();
