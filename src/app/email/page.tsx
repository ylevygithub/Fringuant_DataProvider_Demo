"use client";

import React, { useEffect, useState, FormEvent } from "react";
import { useRouter } from "next/navigation";

import { useUser } from "@/contexts/user";
import { Input } from "@/components/ui/input";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import Header from "../Header";
import Image from "next/image";
import { getCurrentDateTimeString } from "@/utils/date";
import '../../styles/demographics.css'

export default function RetrieveSupplierProfile() {
	const router = useRouter();
	const { email, setEmail, supplier, setIdentifiant } = useUser();
	const [isSmallScreen, setIsSmallScreen] = useState(false);

	/**Removing provider part checker and sender for the demo */
	// useEffect(() => {
	// 	if (supplier === null) router.push("/provider");
	// }, [supplier, router]);

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

	// Gestionnaire d'événements pour soumettre le formulaire
	const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
			/**identifiant context */
			setIdentifiant(`${supplier?.name}${getCurrentDateTimeString()}`);
			/**identifiant LS */
			localStorage.setItem(
				"identifiant",
				`${supplier?.name}${getCurrentDateTimeString()}`
			);
		router.push("/demographics");
	};

	// Gestionnaire d'événements pour la saisie de l'e-mail
	const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setEmail(event.target.value);
		try {
			localStorage.setItem("email", event.target.value);
		} catch (e) {}
	};

	return (
		<div>
			<Header />
			{isSmallScreen ? (
				""
			) : (
				<div>
					<br />
					<br />
					<br />
				</div>
			)}
			<Card
				className={
					isSmallScreen
						? "mobile_view__connexionCard card"
						: "w-full max-w-md container"
				}
			>
				<CardHeader>
					{/* <CardTitle className="text-primary ">Connexion</CardTitle> */}
					<CardDescription>
						Veuillez renseigner votre mail pour commencer
					</CardDescription>
				</CardHeader>

				<form onSubmit={handleSubmit}>
					<CardContent className="space-y-6">
						<div className="grid w-full items-center gap-1.5">
							<Label htmlFor="email">Email</Label>
							<Input
								className="input_connexion"
								type="email"
								onChange={handleEmailChange}
								value={email ?? ""}
								placeholder="m@example.com"
								required
							/>
						</div>
					</CardContent>
					<div className="center-container">
						<Button
							type="submit"
							size="lg"
							className={
								isSmallScreen
									? "mobile_view__seconnecter-btn"
									: "container dt_view__seconnecter-btn"
							}
						>
							Se Connecter
						</Button>
						<br />
						<br />
					</div>
				</form>
			</Card>
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />

			<Image
				src="/fringuant_logo.png" // Path to the image from the "public" folder
				alt="My Image"
				width={100} // Specify the width
				height={200} // Specify the height
				className={isSmallScreen ? "logo" : "dt__logo"}
			/>
		</div>
	);
}
