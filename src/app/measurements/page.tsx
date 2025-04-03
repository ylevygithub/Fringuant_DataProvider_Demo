"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useUser } from "@/contexts/user";
import { useDemographic } from "@/contexts/demographic";
import { useMeasurementsRibbon } from "@/hooks/measurements";

import MeasurmentsRibbonCard from "./measurementsRibbonCard";

import { Button } from "@radix-ui/themes";
// import { Button } from "@/components/ui/button";
import ContextMesureDone, { ContextMesureDoneWithoutPics } from "@/utils/contextMesureDone";
import { defaultValue, defaultValidations, useMeasurements } from "@/contexts/measurements";

export default function Page() {
	const router = useRouter();
	const { setAge, setTaille, setPoids, setSexe, setCsp, setZone, setNiveau } =
		useDemographic();
	const [isSmallScreen, setIsSmallScreen] = useState(false);
	const { handleUpdateMetadata, setAllValues, setAllPhotoTaken } =
		useMeasurementsRibbon();
	const { setSupplier, setIdentifiant, setEmail } = useUser();
	const stopRefresh = `Par mesure de sécurité et pour éviter la perte de données, vous ne pourrez pas actualiser la page actuelle.
	Veuillez terminer de remplir le formulaire svp.
	Une fois terminé, vous pourrez cliquer sur le bouton <Continuer> pour entamer la prochaine étape.
	Merci de votre compréhension !`;
	let profileData = null;
	let mensurationsData = null;
	let validationPhotoTaken = null;
	const [ifthLS, setIfthLs] = useState(false);
	// let ifthLS = null;

	useEffect(() => {
		if (localStorage.getItem("ifth") === 'true') {
			setIfthLs(true);
		}
		// ifthLS = localStorage.getItem("ifth");
		profileData = localStorage.getItem("profileData");
		mensurationsData = localStorage.getItem("mensurationData");
		validationPhotoTaken = localStorage.getItem("photoValidations");
	}, []);

	// useEffect(() => {//empêcher l'user de refresh la page pour éviter que le context ne se vide
	// 	const handleBeforeUnload = (e: BeforeUnloadEvent) => {
	// 		e.preventDefault();
	// 		e.returnValue = stopRefresh;
	// 		// Remarque : Le message personnalisé peut ne pas s'afficher dans tous les navigateurs.
	// 	};
	
	// 	window.addEventListener('beforeunload', handleBeforeUnload);
	
	// 	// Nettoyage de l'événement lors du démontage du composant
	// 	return () => {
	// 		window.removeEventListener('beforeunload', handleBeforeUnload);
	// 	};
	// }, []);

	useEffect(() => {
		try {
			const mensurations = localStorage.getItem("mensurationData");
			const validationPhotoTaken = localStorage.getItem("photoValidations");
			if (!mensurations) {
				const mensurationModel = { ...defaultValue };
				localStorage.setItem(
					"mensurationData",
					JSON.stringify(mensurationModel)
				);
			} else {
				setAllValues(JSON.parse(mensurations));
			}
			if (!validationPhotoTaken) {
				const validationsPhotos = { ...defaultValidations };
				localStorage.setItem(
					"photoValidations",
					JSON.stringify(validationsPhotos)
				);
			} else {
				setAllPhotoTaken(JSON.parse(validationPhotoTaken));
			}
		} catch (e) {
			console.error("ERRRRRROR: ", e);
			
			router.push("/provider");
		}
	}, []);

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

	const handleNewProfil = async () => {
		handleUpdateMetadata();
		router.push("/add-profile/");
	};

	return (
		<div>
			<br />
			{/*  WHEN ALL MEASUREMENTS SAVED IN CONTEXT, DISPLAY BUTTON TO SEND DATA ON S3  */}
				<div className="context_done">
					<MeasurmentsRibbonCard isSmallScreen={isSmallScreen} />
					<br />
					{
						ifthLS === true

							?

						<Button
							style={ContextMesureDoneWithoutPics(profileData, mensurationsData) ? {
								color: "#FFF",
								backgroundColor: "#000",
								borderRadius: "5px",
								cursor: 'pointer'
							} : {}}
							onClick={() => handleNewProfil()}
							className={
								isSmallScreen
									? "mobile_view__reconnexion-btn"
									: " container dt_view__reconnexion-btn"
								}
							disabled={!ContextMesureDoneWithoutPics(profileData, mensurationsData)}
						>
							Continuer
						</Button>

							:

						<Button
							style={ ContextMesureDone(profileData, mensurationsData, validationPhotoTaken) ?{
								color: "#FFF",
								backgroundColor: "#000",
								borderRadius: "5px",
								cursor: 'pointer'
							} : {}}
							onClick={() => handleNewProfil()}
							className={
								isSmallScreen
									? "mobile_view__reconnexion-btn"
									: " container dt_view__reconnexion-btn"
								}
							disabled={!ContextMesureDone(profileData, mensurationsData, validationPhotoTaken)}
						>
							Continuer
						</Button>
					}
					<br />
					<br />
				</div>
			<br />
		</div>
	);
}
