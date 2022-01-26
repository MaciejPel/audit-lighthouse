import React, { useState } from 'react';
import ReactGlobe from 'react-globe';
import NightMap from './images/1k_earth_nightmap.jpg';
import CloudsMap from './images/0clouds.png';

export default function Globe() {
	const [globe, setGlobe] = useState(false);
	const [clouds, setClouds] = useState(false);
	return (
		<>
			<ReactGlobe
				height={globe && clouds ? '100%' : '0%'}
				globeBackgroundTexture={null}
				globeTexture={NightMap}
				options={{
					ambientLightColor: '#fff',
					ambientLightIntensity: 1.5,
					cameraRotateSpeed: 0.2,
					cameraAutoRotateSpeed: 1,
					pointLightColor: '#fff',
					pointLightIntensity: 1,
					enableCameraZoom: false,
					cameraMaxPolarAngle: 1,
					cameraMinPolarAngle: 1,
					globeGlowColor: '#003ebc',
					globeGlowRadiusScale: 0.1,
					globeGlowPower: 3,
					globeCloudsOpacity: 0.2,
				}}
				globeCloudsTexture={CloudsMap}
				onGlobeTextureLoaded={() => setGlobe(true)}
				onGlobeCloudsTextureLoaded={() => setClouds(true)}
				initialCameraDistanceRadiusScale={2.75}
			/>
		</>
	);
}
