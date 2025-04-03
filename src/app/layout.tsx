import UserProvider from "@/contexts/user";
import MeasurementsProvider from "@contexts/measurements"
import "../styles/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import MetadataProvider from "@/contexts/metadata";
import DemographicProvider from "@/contexts/demographic";
import '@radix-ui/themes/styles.css'
import { Theme } from "@radix-ui/themes";
import ErrorBoundary from "./ErrorBoundary";
import React from 'react';
import 'react-tooltip/dist/react-tooltip.css';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Data Providers UI",
	description: "Generated with Next",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {

	return (
		<html lang="en">
			<ErrorBoundary fallback={<p>Something went wrong</p>}>
			<UserProvider>
				<DemographicProvider>
					<MeasurementsProvider>
						<MetadataProvider>
	  						<body className={inter.className}>
								<Theme>
									{children}
								</Theme>
							</body>
						</MetadataProvider>
					</MeasurementsProvider>
				</DemographicProvider>
			</UserProvider>
			</ErrorBoundary>
		</html>
	);
}
