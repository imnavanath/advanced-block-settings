import { __ } from '@wordpress/i18n';
import Icons from '@Admin/components/Icons';

function Footer() {
	return (
		<div className="fixed bottom-0 right-0 left-0 bg-white border-b ml-[160px] px-2 py-2 border-t border-gray-200 sm:px-6 z-10">
			<div className="flex justify-between items-center flex-wrap sm:flex-nowrap">
				<p className="mt-1 text-sm text-gray-500">
					{ __( 'Thank you for using WP Block Essentials.', 'wp-bess' ) }
				</p>
				<div className="relative">
					<div className="relative container flex justify-center items-center">
						<a href="https://github.com/imnavanath" title={ __( 'GitHub Profile', 'wp-bess' ) } target="_blank" id="github" className="cursor-pointer shadow-sm mr-1.5 px-1.5 py-1.5 text-wpcolor hover:text-gray-900 rounded-full hover:bg-gray-50 bg-gray-100 flex items-center justify-center focus:outline-none">
							{ Icons.github }
						</a>
						<a href="https://www.linkedin.com/in/navanath-bhosale" title={ __( 'Connect via LinkedIn', 'wp-bess' ) } target="_blank" id="linkedin" className="cursor-pointer shadow-sm mr-1.5 px-1.5 py-1.5 text-wpcolor hover:text-gray-900 rounded-full hover:bg-gray-50 bg-gray-100 flex items-center justify-center focus:outline-none">
							{ Icons.linkedin }
						</a>
						<a href="mailto:navanath.bhosale95@gmail.com" title={ __( 'Email me', 'wp-bess' ) } target="_blank" id="email" className="cursor-pointer shadow-sm mr-1.5 px-1.5 py-1.5 text-wpcolor hover:text-gray-900 rounded-full hover:bg-gray-50 bg-gray-100 flex items-center justify-center focus:outline-none">
							{ Icons.email }
						</a>
						<a href="https://www.facebook.com/navnath.bhosale.3/" title={ __( 'Connect via Facebook', 'wp-bess' ) } target="_blank" id="facebook" className="cursor-pointer shadow-sm mr-1.5 px-1.5 py-1.5 text-wpcolor hover:text-gray-900 rounded-full hover:bg-gray-50 bg-gray-100 flex items-center justify-center focus:outline-none">
							{ Icons.facebook }
						</a>
						<a href="https://www.paypal.com/paypalme/NavanathBhosale" title={ __( 'Donation', 'wp-bess' ) } target="_blank" id="paypal" className="cursor-pointer shadow-sm px-1.5 py-1.5 text-wpcolor hover:text-gray-900 rounded-full hover:bg-gray-50 bg-gray-100 flex items-center justify-center focus:outline-none">
							{ Icons.paypal }
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Footer;
