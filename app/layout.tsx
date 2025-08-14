import { greatVibes, publicSans, playfairDisplay, geist, geistMono } from "../public/fonts/fonts";
import "./globals.css";
import Footer from "./components/footer/footer";


export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${greatVibes.variable} ${publicSans.variable} ${playfairDisplay.variable} ${geist.variable} ${geistMono.variable}`}>
				{children}
				<Footer />
			</body>
		</html>
	);
}
