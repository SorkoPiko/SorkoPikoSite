import { Logo } from "@/components/Logo";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link } from "@nextui-org/react";
import { SocialIcon } from 'react-social-icons'

export default function Home() {
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
					Welcome to SorkoPiko
				</h1>
				<p>hey</p>
				<SocialIcon url="https://youtube.com/@SorkoPiko" />
			</div>
		</>
	);
}