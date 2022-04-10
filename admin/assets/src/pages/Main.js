import React from 'react';
import EnableBackground from '@Admin/components/extensions/EnableBackground';
import EnableBorder from '@Admin/components/extensions/EnableBorder';
import EnableMotionEffects from '@Admin/components/extensions/EnableMotionEffects';
import EnableTransform from '@Admin/components/extensions/EnableTransform';
import EnableWidth from '@Admin/components/extensions/EnableWidth';
import EnableSpacings from '@Admin/components/extensions/EnableSpacings';
import EnableDisplay from '@Admin/components/extensions/EnableDisplay';
import EnableCustomCSS from '@Admin/components/extensions/EnableCustomCSS';

function Main() {
	return (
		<>
			<dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-3">
				<EnableBackground />
				<EnableBorder />
				<EnableMotionEffects />
				<EnableTransform />
				<EnableWidth />
				<EnableSpacings />
				<EnableDisplay />
				<EnableCustomCSS />
			</dl>
		</>
	);
}

export default Main;
