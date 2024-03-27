import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { CustomNavbar } from "@/components/Navbar";
import { CustomParticles } from "@/components/Particles";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "SorkoPiko",
	description: "SorkoPiko's personal website",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`dark ${inter.className}`}>
				<Providers>
					<div className="min-h-screen">
					<CustomNavbar />
					<CustomParticles />
					{children}
					</div>
				</Providers>
			</body>
		</html>
	);
}
