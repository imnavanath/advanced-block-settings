import { useState, useEffect } from 'react';
import { __ } from '@wordpress/i18n';
import Icons from '@Admin/components/Icons';

function Header( props ) {
	const [ status, setStatus ] = useState( '' );

	useEffect( () => {
		setStatus( props.saved );
	}, [ props.saved ] );

	function processing() {
		setStatus( 'processing' );
	}

	return (
		<div className="sticky top-[30px] right-0 bg-white border-b -ml-5 px-2 py-2 border-t border-gray-200 sm:px-6 z-10">
			<div className="flex justify-between items-center flex-wrap sm:flex-nowrap">
				<h2 className="text-lg leading-6 font-medium text-gray-500">
					{ __( 'WP Block Essentials', 'wp-bess' ) }
				</h2>
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
								<span>{ Icons.spinner }</span>
								{ __( 'Saving', 'wp-bess' ) }
							</>
						) }
						{ 'saved' === status && (
							<>
								<span className="pr-2">
									{ Icons[ 'checked-circle' ] }
								</span>
								{ __( 'Saved', 'wp-bess' ) }
							</>
						) }
					</button>
				</div>
			</div>
		</div>
	);
}

export default Header;
