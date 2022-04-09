import { useState } from 'react';
import { __ } from '@wordpress/i18n';
import Icons from '@Admin/components/Icons';
import Main from '@Admin/pages/Main';
import Support from '@Admin/pages/Support';
import Header from '@Admin/components/Header';
import Footer from '@Admin/components/Footer';
import apiFetch from '@wordpress/api-fetch';

function classNames( ...classes ) {
	return classes.filter( Boolean ).join( ' ' );
}

function Container() {
	const [ tab, setTab ] = useState( 'main' );
	const [ saved, setSaved ] = useState( '' );
	const navigation = [
		{
			name: __( 'Settings', 'wp-bess' ),
			slug: 'main',
		},
		{
			name: __( 'Support', 'wp-bess' ),
			slug: 'support',
		},
	];

	function handleFormSubmit( e ) {
		e.preventDefault();
		const formData = new window.FormData();
		for ( let i = 1; i < e.target.length; i++ ) {
			formData.append( e.target[ i ].name, e.target[ i ].value );
		}

		formData.append( 'action', 'wp_bess_update_settings' );
		formData.append( 'security', wp_bess_settings.update_nonce );

		apiFetch( {
			url: wp_bess_settings.ajax_url,
			method: 'POST',
			body: formData,
		} ).then( () => {
			setSaved( 'saved' );
			setTimeout( () => {
				setSaved( '' );
				window.location.reload( false );
			}, 3000 );
		} );
	}

	return (
		<form
			className="wpBlockSettings"
			id="wpBlockSettings"
			method="post"
			onSubmit={ handleFormSubmit }
		>
			<Header saved={ saved } />
			<main className="max-w-[80rem] mx-auto mt-[2.5rem] bg-white rounded-lg shadow">
				<div className="lg:grid lg:grid-cols-12 lg:gap-x-0 h-full">
					<aside className="py-6 px-2 sm:px-6 lg:py-6 lg:px-0 lg:col-span-3 border-r">
						<nav className="space-y-1">
							{ navigation.map( ( item ) => (
								<a // eslint-disable-line
									key={ item.name }
									className={ classNames(
										tab === item.slug
											? 'bg-gray-50 text-wpcolor fill-wpcolor'
											: 'text-gray-900 fill-gray-900 hover:text-gray-900 hover:bg-gray-50',
										'group cursor-pointer rounded-md px-3 py-2 flex items-center text-sm font-medium mx-4'
									) }
									onClick={ () => {
										setTab( item.slug );
									} }
								>
									<span className="pr-2">
										{ Icons[ item.slug ] }
									</span>
									<span className="truncate">
										{ item.name }
									</span>
								</a>
							) ) }
						</nav>
					</aside>
					<div className="relative m-0 sm:px-6 lg:px-0 lg:col-span-9">
						{ 'main' === tab && (
							<>
								<Main />
							</>
						) }
						{ 'support' === tab && (
							<>
								<Support />
							</>
						) }
						{ <Footer saved={ saved } /> }
					</div>
				</div>
			</main>
		</form>
	);
}

export default Container;
