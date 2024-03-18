"use client";

export default function Navbar({ pageName }: { pageName: string }) {
	return (
		<div className="navbar bg-green-500 dark:bg-green-900">
			<a className={`text-white dark:text-gray-200 px-4 py-2 rounded-md ${pageName === "Home" ? "bg-green-600 dark:bg-green-800" : ""}`} href="/">Home</a>
			<a className={`text-white dark:text-gray-200 px-4 py-2 rounded-md ${pageName === "Projects" ? "bg-green-600 dark:bg-green-800" : ""}`} href="/projects">Projects</a>
			<a className={`text-white dark:text-gray-200 px-4 py-2 rounded-md ${pageName === "About" ? "bg-green-600 dark:bg-green-800" : ""}`} href="/about">About</a>
			<a className={`text-white dark:text-gray-200 px-4 py-2 rounded-md ${pageName === "Contact" ? "bg-green-600 dark:bg-green-800" : ""}`} href="/contact">Contact</a>
		</div>
	);
}