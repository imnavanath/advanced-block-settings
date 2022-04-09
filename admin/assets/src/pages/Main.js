import React from 'react';
import { __ } from '@wordpress/i18n';
import Section from '@Admin/components/Section';

function Main() {
	return (
		<>
			{/* <Enable />
			<EnablePoweredBy /> */}
			<>
				<Section
					title={ __( 'General Settings', 'cart-plugin' ) }
				/>
			</>
		</>
	);
}

export default Main;
