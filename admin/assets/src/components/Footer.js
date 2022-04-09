import { useState, useEffect } from 'react';
import { __ } from '@wordpress/i18n';
import Icons from '@Admin/components/Icons';

function Footer( props ) {
	const [ status, setStatus ] = useState( '' );

	useEffect( () => {
		setStatus( props.saved );
	}, [ props.saved ] );

	function processing() {
		setStatus( 'processing' );
	}

	return (
		<div className="sticky bottom-0 right-0 w-full bg-white px-2 py-2 border-t border-gray-200 sm:px-6">
			<div className="flex justify-between items-center flex-wrap sm:flex-nowrap">
				<div className="w-36"></div>
				<div className="relative rounded-md shadow-sm">
					<button
						type="submit"
						onClick={ () => {
							processing();
						} }
						className="w-32 justify-center inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-wpcolor"
					>
						{ '' === status && (
							<>{ __( 'Save', 'wp-bess' ) }</>
						) }
						{ 'processing' === status && (
							<>
								{ __( 'Saving', 'wp-bess' ) }
								<span className="pr-1">{ Icons.spinner }</span>
							</>
						) }
						{ 'saved' === status && (
							<>{ __( 'Saved', 'wp-bess' ) }</>
						) }
					</button>
				</div>
			</div>
		</div>
	);
}

export default Footer;
