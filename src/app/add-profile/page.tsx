"use client";

import React, { useEffect, useState, FormEvent } from "react";

import { useRouter } from "next/navigation";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useDemographic } from "@/contexts/demographic";
import { useMeasurements } from "@/contexts/measurements";
import { useMetadata } from "@/contexts/metadata";

export default function RetrieveSupplierProfile() {
	const { setAge, setTaille, setPoids, setSexe, setCsp, setZone, setNiveau } =
		useDemographic();
	const {
		setNeck,
		setPhotoNeckTaken,
		setShoulderLength,
		setPhotoShoulderLengthTaken,
		setShoulderWidth,
		setPhotoShoulderWidthTaken,
		setFrontBuild,
		setPhotoFrontBuildTaken,
		setBackBuild,
		setPhotoBackBuildTaken,
		setNeckWaistFront,
		setPhotoNeckWaistFrontTaken,
		setNeckWaistBack,
		setPhotoNeckWaistBackTaken,
		setNeckPelvisFront,
		setPhotoNeckPelvisFrontTaken,
		setChest,
		setPhotoChestTaken,
		setUnderChest,
		setPhotoUnderChestTaken,
		setArmCirc,
		setPhotoArmCircTaken,
		setArmLength,
		setPhotoArmLengthTaken,
		setUpperArmLength,
		setPhotoUpperArmLengthTaken,
		setWaist,
		setPhotoWaistTaken,
		setPelvis,
		setPhotoPelvisTaken,
		setHips,
		setPhotoHipsTaken,
		setSideseam,
		setPhotoSideseamTaken,
		setInseam,
		setPhotoInseamTaken,
		setThigh,
		setPhotoThighTaken,
		setCalf,
		setPhotoCalfTaken,
		setFront,
		setSide,
		setSelfie,
	} = useMeasurements();
	const {
		setMailRegistered,
		setDemographRegistered,
		setMensurationsRegistered,
	} = useMetadata();

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
	}, []);


	// Gestionnaire d'événements pour soumettre le formulaire
	const handleSubmit = () => {
		setAge("");
		setTaille("");
		setPoids("");
		setSexe("");
		setCsp("");
		setZone("");
		setNiveau("");
		setNeck(null);
		setPhotoNeckTaken(false);
		setShoulderLength(null);
		setPhotoShoulderLengthTaken(false);
		setShoulderWidth(null);
		setPhotoShoulderWidthTaken(false);
		setFrontBuild(null);
		setPhotoFrontBuildTaken(false);
		setBackBuild(null);
		setPhotoBackBuildTaken(false);
		setNeckWaistBack(null);
		setPhotoNeckWaistBackTaken(false);
		setNeckWaistFront(null);
		setPhotoNeckWaistFrontTaken(false);
		setNeckPelvisFront(null);
		setPhotoNeckPelvisFrontTaken(false);
		setChest(null);
		setPhotoChestTaken(false);
		setUnderChest(null);
		setPhotoUnderChestTaken(false);
		setArmCirc(null);
		setPhotoArmCircTaken(false);
		setArmLength(null);
		setPhotoArmLengthTaken(false);
		setUpperArmLength(null);
		setPhotoUpperArmLengthTaken(false);
		setWaist(null);
		setPhotoWaistTaken(false);
		setPelvis(null);
		setPhotoPelvisTaken(false);
		setHips(null);
		setPhotoHipsTaken(false);
		setSideseam(null);
		setPhotoSideseamTaken(false);
		setInseam(null);
		setPhotoInseamTaken(false);
		setThigh(null);
		setPhotoThighTaken(false);
		setCalf(null);
		setPhotoCalfTaken(false);

		setFront(null);
		setSide(null);
		setSelfie(null);

		setMailRegistered(false);
		setDemographRegistered(false);
		setMensurationsRegistered(false);

		try {
			localStorage.removeItem("identifiant");
			localStorage.removeItem("profileData");
			localStorage.removeItem("email");
			localStorage.removeItem("demographicData");
			localStorage.removeItem("mensurationData");
			localStorage.removeItem("photoValidations");
		} catch (e) {}

		router.push("/email");
	};

	const handleResetAll = () => {
		setAge("");
		setTaille("");
		setPoids("");
		setSexe("");
		setCsp("");
		setZone("");
		setNiveau("");
		setNeck(null);
		setPhotoNeckTaken(false);
		setShoulderLength(null);
		setPhotoShoulderLengthTaken(false);
		setShoulderWidth(null);
		setPhotoShoulderWidthTaken(false);
		setFrontBuild(null);
		setPhotoFrontBuildTaken(false);
		setBackBuild(null);
		setPhotoBackBuildTaken(false);
		setNeckWaistBack(null);
		setPhotoNeckWaistBackTaken(false);
		setNeckWaistFront(null);
		setPhotoNeckWaistFrontTaken(false);
		setNeckPelvisFront(null);
		setPhotoNeckPelvisFrontTaken(false);
		setChest(null);
		setPhotoChestTaken(false);
		setUnderChest(null);
		setPhotoUnderChestTaken(false);
		setArmCirc(null);
		setPhotoArmCircTaken(false);
		setArmLength(null);
		setPhotoArmLengthTaken(false);
		setUpperArmLength(null);
		setPhotoUpperArmLengthTaken(false);
		setWaist(null);
		setPhotoWaistTaken(false);
		setPelvis(null);
		setPhotoPelvisTaken(false);
		setHips(null);
		setPhotoHipsTaken(false);
		setSideseam(null);
		setPhotoSideseamTaken(false);
		setInseam(null);
		setPhotoInseamTaken(false);
		setThigh(null);
		setPhotoThighTaken(false);
		setCalf(null);
		setPhotoCalfTaken(false);

		setFront(null);
		setSide(null);
		setSelfie(null);

		setMailRegistered(false);
		setDemographRegistered(false);
		setMensurationsRegistered(false);

		try {
			localStorage.removeItem("identifiant");
			localStorage.removeItem("profileData");
			localStorage.removeItem("email");
			localStorage.removeItem("demographicData");
			localStorage.removeItem("mensurationData");
			localStorage.removeItem("photoValidations");
			localStorage.removeItem("supplierData");
			localStorage.removeItem("providerId");
		} catch (e) {}

		router.push("/end");
	};

	return (
		<div>
			<Card
				className={
					isSmallScreen
						? "mobile_view__mensurationsCard card"
						: "w-full max-w-xl container"
				}
			>
				<CardHeader>
					<CardTitle className="text-primary container">
						Merci, le profil a bien été envoyé !
					</CardTitle>
				</CardHeader>
				<div
					className={
						isSmallScreen ? "mobile_view__button-addprofile" : "container"
					}
				>
					<Button
						style={{
							color: "#FFF",
							backgroundColor: "#000",
							borderRadius: "5px",
							cursor: 'pointer'
						}}
						type="submit"
						size="sm"
						onClick={handleSubmit}
					>
						Envoyer un autre profil ?
					</Button>
					<br />
					<Button
						style={{
							color: "#000",
							backgroundColor: "#FFF",
							borderRadius: "5px",
							cursor: 'pointer'
						}}
						type="submit"
						size="sm"
						onClick={handleResetAll}
					>
						Non merci
					</Button>
					<br />
					<br />
				</div>
			</Card>
		</div>
	);
}
