import { Logo } from "@/components/Logo";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link } from "@nextui-org/react";

export default function Main() {
	return (
		<>
			<Navbar height="100" shouldHideOnScroll isBordered>
				<NavbarBrand>
					<Logo size="100" />
					<p className="font-bold text-inherit text-2xl">SorkoPiko</p>
				</NavbarBrand>
				<NavbarContent className="hidden sm:flex gap-4" justify="center">
					<NavbarItem isActive>
						<Link href="#" aria-current="page">
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
					<NavbarItem>
						<Link color="foreground" href="/contact">
							Contact
						</Link>
					</NavbarItem>
				</NavbarContent>
			</Navbar>
			<div className="flex justify-center items-center h-screen">
				<h1 className="mt-4 font-bold text-4xl">
					Welcome to SorkoPiko
				</h1>
			</div>
		</>
	);
}