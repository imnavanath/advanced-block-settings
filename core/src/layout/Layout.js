/**
 * WordPress dependencies
 */
import { PanelBody, PanelRow, CheckboxControl } from "@wordpress/components";
import { withSelect, withDispatch } from "@wordpress/data";
import { Component, createElement, Fragment } from "@wordpress/element";
import { compose } from "@wordpress/compose";
import { addFilter } from "@wordpress/hooks";
import { InspectorControls } from '@wordpress/block-editor';
const { __ } = wp.i18n;

class WP_BESS_Layout extends Component {
	render() {
		const {
			meta,
			setMetaFieldValue
		} = this.props;

		console.error( 'WP_BESS_Layout triggered' );

		let toggleValue = ( 'disabled' === meta['wp-bess-layout'] ) ? true : false;

		return (
			<>
				<InspectorControls>
					<PanelBody
						title={ <span>{ __( 'Layout', 'wp-bess' ) }</span> }
						initialOpen={ false }
					>
						<PanelRow>
							<CheckboxControl
								label = { __( 'Dummy Layout Toggle Control.', 'wp-bess' ) }
								className = { 'wp-bess-layout' }
								checked={ toggleValue }
								onChange={ ( val ) => {
									val = ( true === val ) ? 'disabled' : '';
									setMetaFieldValue( val, 'wp-bess-layout' ) }
								}
							/>
						</PanelRow>
					</PanelBody>
				</InspectorControls>
			</>
		)
	}
}

const composedWPBessLayoutSettings = compose( [
	withSelect( ( select ) => {
		const postMeta = select( 'core/editor' ).getEditedPostAttribute( 'meta' );
		const oldPostMeta = select( 'core/editor' ).getCurrentPostAttribute( 'meta' );
		return {
			meta: { ...oldPostMeta, ...postMeta },
			oldMeta: oldPostMeta,
		};
	} ),
	withDispatch( ( dispatch ) => ( {
		setMetaFieldValue: ( value, field ) => dispatch( 'core/editor' ).editPost(
			{ meta: { [ field ]: value } }
		),
	} ) ),
] ) ( WP_BESS_Layout );

const wpBEssLayoutSetter = function ( OriginalComponent ) {
	return function (props) {
		return (
			createElement(
				Fragment,
				{},
				null,
				createElement(
					OriginalComponent,
					props
				),
				createElement(
					composedWPBessLayoutSettings
				)
			)
		);
	}
};

addFilter(
	'editor.BlockEdit',
	'wp-block-essentials/layout',
	wpBEssLayoutSetter
);
