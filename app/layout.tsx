import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "../components/navbar"

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
			<body className={inter.className}>
				{children}
			</body>
		</html>
	);
}
