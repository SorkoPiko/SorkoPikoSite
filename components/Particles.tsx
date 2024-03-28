"use client";

import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { type Container, type ISourceOptions } from "@tsparticles/engine";
// import { loadAll } from "@tsparticles/all"; // if you are going to use `loadAll`, install the "@tsparticles/all" package too.
// import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from "@tsparticles/slim"; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.
// import { loadBasic } from "@tsparticles/basic"; // if you are going to use `loadBasic`, install the "@tsparticles/basic" package too.

export const CustomParticles = () => {
	const [init, setInit] = useState(false);

	// this should be run only once per application lifetime
	useEffect(() => {
		initParticlesEngine(async (engine) => {
			// you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
			// this loads the tsparticles package bundle, it's the easiest method for getting everything ready
			// starting from v2 you can add only the features you need reducing the bundle size
			//await loadAll(engine);
			//await loadFull(engine);
			await loadSlim(engine);
			//await loadBasic(engine);
		}).then(() => {
			setInit(true);
		});
	}, []);

	const particlesLoaded = async (container?: Container): Promise<void> => {
		console.log(container);
	};

	const e = {
		name: "Parallax",
		particles: {
			number: {
				value: 100,
				density: {
					enable: !0,
				},
			},
			color: {
				value: "#545454",
			},
			shape: {
				type: "circle",
			},
			opacity: {
				value: {
					min: 0.1,
					max: 0.5,
				},
				animation: {
					enable: !0,
					speed: 3,
					sync: !1,
				},
			},
			size: {
				value: {
					min: 1,
					max: 10,
				},
				animation: {
					enable: !0,
					speed: 20,
					sync: !1,
				},
			},
			links: {
				enable: !0,
				distance: 150,
				color: "#545454",
				opacity: 0.4,
				width: 1,
			},
			move: {
				enable: !0,
				speed: 2,
			},
		},
		interactivity: {
			events: {
				onHover: {
					enable: !0,
					mode: "grab",
					parallax: {
						enable: !0,
						smooth: 10,
						force: 60,
					},
				},
				onClick: {
					enable: !0,
					mode: "push",
				},
			},
			modes: {
				grab: {
					distance: 400,
					links: {
						opacity: 1,
					},
				},
				bubble: {
					distance: 400,
					size: 40,
					duration: 2,
					opacity: 0.8,
				},
				repulse: {
					distance: 200,
				},
				push: {
					quantity: 4,
				},
				remove: {
					quantity: 2,
				},
			},
		},
		background: {
			color: "#000000",
		},
	};

	const options: ISourceOptions = useMemo(() => e, []);

	if (init) {
		return (
			<Particles
				id="tsparticles"
				particlesLoaded={particlesLoaded}
				options={options}
			/>
		);
	}

	return <></>;
};
