"use client"; // Page pour saisir la photo de profil Front

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import ClipLoader from "react-spinners/ClipLoader";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { callApiRoute } from "@/utils/apiCalls";

import { useUser } from "@/contexts/user";
import { SupplierType } from "@/types";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Header_logo from "@/src/app/Header_logo";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import '../../styles/provider.css'

export default function ProviderPage() {
	const { setProviderId, setSupplier } = useUser();
	const router = useRouter();

	const [isSmallScreen, setIsSmallScreen] = useState(false);
	const [validId, setValidId] = useState(false);
	const [id, setId] = useState<string | null>(null);
	const [isLoading, setIsLoading] = useState<boolean>(false);

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
		try {
			setId(localStorage.getItem("providerId"));
			setValidId(true);
		} catch (e) {}
	}, []);

	useEffect(() => {
		try {
			if (id === "testPhot") window.localStorage.setItem("ifth", 'true');
			else if (id === "demo") window.localStorage.setItem("ifth", 'true');
			else window.localStorage.setItem("ifth", 'false');
		} catch (e) {}
	}, [id]);

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const providerId: string = event.target.value;
		setId(providerId);
		if (providerId.length === 8) {
			setValidId(true);
		} else {
			setValidId(false);
		}
	};

	const submit = () => {
		if (id) {
			setIsLoading(true);
			setProviderId(id);
			(async () => {
				try {
					// const supplierData = await callApiRoute<SupplierType>(
					// 	`api/supplier?providerId=${id}`,
					// 	"GET"
					// );
					// setSupplier(supplierData);
					try {
						localStorage.setItem("providerId", id);
						// localStorage.setItem("supplierData", JSON.stringify(supplierData));
					} catch (e) {}
					setIsLoading(false);
					router.push("/email");
				} catch (e) {
					setIsLoading(false);
					toast.error("Invalid Provider ID!", {
						position: "top-center",
						autoClose: 5000,
						hideProgressBar: true,
						closeOnClick: true,
						pauseOnHover: true,
						draggable: true,
						progress: undefined,
						theme: "light",
					});
				}
			})();
		}
	};

	return (
		<div>
			<Header_logo />
			<br />
			<Card
				className={
					isSmallScreen
						? "mobile_view__connexionCard card"
						: "w-full max-w-xl container"
				}
			>
				<CardHeader>
					<CardTitle className="text-primary container">Identifiant</CardTitle>
				</CardHeader>

				<CardContent className="space-y-6">
					<ul className="grid w-full items-center gap-1.5">
						<li>
							<Label>Provider ID</Label>
							<Input
								className="input_demog"
								// type="age"
								onChange={handleChange}
								value={id ? id : ""}
								required
							/>
						</li>
					</ul>
					<ToastContainer />
					{validId &&
						(!isLoading ? (
							<div className="center-btn">
							<Button
								size="sm"
								className="valider_provider-btn"
								onClick={submit}
							>
								Valider
							</Button>
							</div>
						) : (
							<ClipLoader
								color="black"
								size={30}
								aria-label="Loading Spinner"
								data-testid="loader"
							/>
						))}
				</CardContent>
			</Card>
		</div>
	);
}
