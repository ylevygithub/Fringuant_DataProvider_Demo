"use client";

import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import ClipLoader from "react-spinners/ClipLoader";

import { callApiRoute } from "@/utils/apiCalls";
import { useRouter } from "next/navigation";

import { SupplierType } from "@/types";
import { useUser } from "@/contexts/user";

export default function RetrieveSupplierProfile() {
	const searchParams = useSearchParams();
	const { providerId, setProviderId, setSupplier } = useUser();

	const router = useRouter();
	const [isSmallScreen, setIsSmallScreen] = useState(false);

	// Écoutez la largeur de la fenêtre et mettez à jour isSmallScreen en conséquence
	useEffect(() => {
		const mediaQuery = window.matchMedia("(max-width: 600px)"); // Définissez votre requête média ici
		const updateIsSmallScreen = () => setIsSmallScreen(mediaQuery.matches);

		mediaQuery.addListener(updateIsSmallScreen);
		updateIsSmallScreen(); // Appelez-le une fois pour la valeur initiale

		return () => {
			mediaQuery.removeListener(updateIsSmallScreen);
		};
	}, []);

	useEffect(() => {
		const providerIdParam = searchParams.get("providerId");
		if (providerIdParam === "demo" || providerIdParam === null) {
			router.push("/email");
			return;
		}
	}, [searchParams, providerId]);

	// 	if (providerIdParam == undefined) router.push("/provider");
	// 	else if (providerId === null && providerIdParam) {
	// 		setProviderId(providerIdParam);
	// 		(async () => {
	// 			try {
	// 				const supplierData = await callApiRoute<SupplierType>(
	// 					`api/supplier?providerId=${providerIdParam}`,
	// 					"GET"
	// 				);
	// 				setSupplier(supplierData);
	// 				localStorage.setItem("supplierData", JSON.stringify(supplierData));
	// 				router.push("/email");
	// 			} catch (e) {
	// 				router.push("/provider");
	// 			}
	// 		})();
	// 	}
	// }, [searchParams, providerId, setProviderId, router, setSupplier]);

	return (
		<>
			<ClipLoader
				color="black"
				size={90}
				aria-label="Loading Spinner"
				data-testid="loader"
			/>
		</>
	);
}
