"use client";

import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from "keen-slider/react"
import { Logo } from "@/components/Logo";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Popover, PopoverTrigger, PopoverContent, slider } from "@nextui-org/react";
import { SocialIcon } from 'react-social-icons'

const animation = { duration: 50000, easing: (t: number) => t }

export default function Contact() {
	let mouseOver = false;
	
	const [sliderRef] = useKeenSlider<HTMLDivElement>(
		{
			loop: true,
			renderMode: "performance",
			drag: false,
			created(s) {
				s.moveToIdx(5, true, animation)
			},
			updated(s) {
				s.moveToIdx(s.track.details.abs + 5, true, animation)
			},
			animationEnded(s) {
				s.moveToIdx(s.track.details.abs + 5, true, animation)
			},
			slides: () => [
				{
					size: 0.1,
					spacing: 0.1,
				},
				{
					size: 0.1,
					spacing: 0.1,
				},
				{
					size: 0.1,
					spacing: 0.1,
				},
			],
		},
	)

	return (
		<>
			<Navbar height="100" shouldHideOnScroll isBordered>
				<NavbarBrand>
					<Logo size="100" />
					<p className="font-bold text-inherit text-2xl">SorkoPiko</p>
				</NavbarBrand>
				<NavbarContent className="hidden sm:flex gap-4" justify="center">
					<NavbarItem>
						<Link color="foreground" href="/">
							Home
						</Link>
					</NavbarItem>
					<NavbarItem>
						<Link color="foreground" href="/about">
							About
						</Link>
					</NavbarItem>
					<NavbarItem>
						<Link color="foreground" href="/projects">
							Projects
						</Link>
					</NavbarItem>
					<NavbarItem isActive>
						<Link href="#" aria-current="page">
							Contact
						</Link>
					</NavbarItem>
				</NavbarContent>
			</Navbar>
			<div className="px-6 flex gap-4 flex-col pb-16 flex-grow">
				<h1 className="mt-4 font-bold text-4xl">
					Socials
				</h1>
				<div ref={sliderRef} className="keen-slider">
					<SocialIcon className="keen-slider__slide" target="_blank" url="https://youtube.com/@SorkoPiko" />
					<Popover placement="right" showArrow={true}>
						<PopoverTrigger>
							<SocialIcon className="keen-slider__slide" network="discord" url="#" />
						</PopoverTrigger>
						<PopoverContent>
							<div className="px-1 py-2">
								<div className="text-small font-bold">sorkopiko</div>
							</div>
						</PopoverContent>
					</Popover>
					<SocialIcon className="keen-slider__slide" target="_blank" url="https://x.com/SorkoPiko" />
				</div>
			</div>
		</>
	);
}