"use client";

import { useEffect, useState, FormEvent } from "react";
import React from "react";
import { useUser } from "@/contexts/user";

import { useRouter } from "next/navigation";
import { getCurrentDateTimeString } from "@/utils/date";
import { useDemographic } from "@/contexts/demographic";

import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { AlertDialog, Flex, Text } from "@radix-ui/themes";
import "../../styles/demographics.css";
import { validateInputRange } from "@/utils/validateInputRange";
import MeasurmentsProfileCard from "../measurements/measurementsProfileCard";

export default function RetrieveSupplierDemographics() {
	const [formCompleted, setFormCompleted] = useState(false);
	const {
		age,
		setAge,
		taille,
		setTaille,
		poids,
		setPoids,
		sexe,
		setSexe,
		csp,
		setCsp,
		zone,
		setZone,
		niveau,
		setNiveau,
	} = useDemographic();
	const [agePlaceholder, setAgePlaceholder] = useState('Ex: 20');
	const [isErrorAge, setIsErrorAge] = useState(false);
	const [taillePlaceholder, setTaillePlaceholder] = useState('Ex: 185');
	const [isErrorTaille, setIsErrorTaille] = useState(false);
	const [poidsPlaceholder, setPoidsPlaceholder] = useState('Ex: 80'); 
	const [isErrorPoids, setIsErrorPoids] = useState(false);
	const [formNotComplited, setFormNotComplited] = useState(false); 
	
	const router = useRouter();
	const [isSmallScreen, setIsSmallScreen] = useState(false);
	const numbersRegex = /^\d+$/;

	const { providerId, supplier, setIdentifiant, identifiant } = useUser();

	// useEffect(() => {
	// 	if (supplier) {
	// 		/**identifiant context */
	// 		setIdentifiant(`${supplier?.name}${getCurrentDateTimeString()}`);
	// 		/**identifiant LS */
	// 		localStorage.setItem(
	// 			"identifiant",
	// 			`${supplier?.name}${getCurrentDateTimeString()}`
	// 		);
	// 	}
	// }, [providerId]);

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
		router.push("/demographics");
	};

	// Gestionnaire d'événements pour la saisie de l'age, la taille, le sexe,...
	const handleAgeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const inputValue = event.target.value;
		const isValidNumber = inputValue === "" || numbersRegex.test(inputValue);
	
		if (isValidNumber) {
			setAge(inputValue === "" ? "" : inputValue);
		}
	};
	const handleAgeBlur = (event: React.ChangeEvent<HTMLInputElement>) => {
		const inputValue = event.target.value;
		const isInValidRange = validateInputRange('age', inputValue);
		if (!isInValidRange) {
			setAge('');
			setAgePlaceholder('Valeur hors plage (0-110)');
			setIsErrorAge(true);
		}	else
				setIsErrorAge(false);
	};
	const handleTailleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const inputValue = event.target.value;
		const isValidNumber = inputValue === "" || numbersRegex.test(inputValue);
	
		if (isValidNumber) {
			setTaille(inputValue === "" ? "" : inputValue);
		}
	};
	const handleTailleBlur = (event: React.ChangeEvent<HTMLInputElement>) => {
		const inputValue = event.target.value;
		const isInValidRange = validateInputRange('taille', inputValue);
		if (!isInValidRange) {
			setTaille('');
			setTaillePlaceholder('Valeur hors plage (80-250)');
			setIsErrorTaille(true);
		}	else
				setIsErrorTaille(false);
	};
	const handlePoidsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const inputValue = event.target.value;
		const isValidNumber = inputValue === "" || numbersRegex.test(inputValue);
	
		if (isValidNumber) {
			setPoids(inputValue === "" ? "" : inputValue);
		}
	};
	const handlePoidsBlur = (event: React.ChangeEvent<HTMLInputElement>) => {
		const inputValue = event.target.value;
		const isInValidRange = validateInputRange('poids', inputValue);
		if (!isInValidRange) {
			setPoids('');
			setPoidsPlaceholder('Valeur hors plage (10-200)');
			setIsErrorPoids(true);
		}	else
				setIsErrorPoids(false);
	};
	const handleSexeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
		setSexe(event.target.value);
	};
	const handleCspChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
		setCsp(event.target.value);
	};
	const handleZoneChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
		setZone(event.target.value);
	};
	const handleNiveauChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
		setNiveau(event.target.value);
	};
	const handleFormNotCompleted = () => {
		setFormNotComplited(true);
	}
	const handleFormCompleted = () => {
		const profileDataString = localStorage.getItem('profileData');

		if (profileDataString) {
				const profileData = JSON.parse(profileDataString);
				// Check if 'front' property exists and its value
				if (profileData.front === true && profileData.selfie === true && profileData.side === true)
					setFormCompleted(true);
				else handleFormNotCompleted();
		}
		else handleFormNotCompleted();

		// setIdentifiant(`${supplier?.name}${getCurrentDateTimeString()}`);
		localStorage.setItem(
			"demographicData",
			JSON.stringify({
				age: age,
				height: taille,
				weight: poids,
				gender: sexe,
				csp: csp,
				zone: zone,
				level: niveau,
			})
		);
		// localStorage.setItem(
		// 	"identifiant",
		// 	`${supplier?.name}${getCurrentDateTimeString()}`
		// );
	};

	return (
		<div>
			{isSmallScreen ? (
				""
			) : (
				<div>
					<br />
					<br />
				</div>
			)}

			{age === null ||
			taille === null ||
			poids === null ||
			sexe === null ||
			csp === null ||
			zone === null ||
			niveau === null ||
			formCompleted === false ? (
				<Card
					className={
						isSmallScreen
							? "mobile_view__connexionCard card"
							: "w-full max-w-xl container"
					}
				>
					<CardHeader>
						<CardTitle>
							<Text align="right" weight="light">
								Informations personnelles
								<div style={{display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center'}}>
									<p style={{color: 'blue', textAlign: 'center', fontSize: '12px'}}><i>Les boutons </i></p>
									<svg color="black" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
									<path fill="blue" d="M5 19h1.425L16.2 9.225L14.775 7.8L5 17.575zm-2 2v-4.25L16.2 3.575q.3-.275.663-.425t.762-.15q.4 0 .775.15t.65.45L20.425 5q.3.275.438.65T21 6.4q0 .4-.137.763t-.438.662L7.25 21zM19 6.4L17.6 5zm-3.525 2.125l-.7-.725L16.2 9.225z"/></svg>
									<p style={{color: 'blue', textAlign: 'center', fontSize: '12px'}}><i> servent a modifier une photo déja enregistrée</i></p>
								</div>
							</Text>
						</CardTitle>
					</CardHeader>

					<form onSubmit={handleSubmit}>
						<CardContent className="space-y-6">
						{/************* Photos de Profil *************/}
						<MeasurmentsProfileCard isSmallScreen={isSmallScreen} />

							<ul className="grid w-full items-center gap-1.5">
								<li>
									<Label className="InputLabel">Age</Label>
									<Input
										style={{ color: isErrorAge ? "red" : "black" }}
										className="input_demog"
										type="age"
										onChange={handleAgeChange}
										onBlur={handleAgeBlur}
										value={age ?? ""}
										placeholder={agePlaceholder}
										required
									/>
								</li>
								<li>
									<Label className="InputLabel">Taille</Label>
									<Input
										style={{ color: isErrorTaille ? "red" : "black" }}
										className="input_demog"
										type="taille"
										onChange={handleTailleChange}
										onBlur={handleTailleBlur}
										value={taille ?? ""}
										placeholder={taillePlaceholder}
										required
									/>
								</li>
								<li>
									<Label className="InputLabel">Poids</Label>
									<Input 
										style={{ color: isErrorPoids ? "red" : "black" }}
										className="input_demog"
										type="poids"
										onChange={handlePoidsChange}
										onBlur={handlePoidsBlur}
										value={poids ?? ""}
										placeholder={poidsPlaceholder}
										required
									/>
								</li>
								<li>
									<Label className="SelectLabel">
										CSP (Catégorie Socio-Professionnelle)
									</Label><br />
									<select
										id="csp"
										name="csp"
										className="SelectTrigger"
										value={csp ?? ""}
										onChange={handleCspChange}
										required
									>
										<option value="">Sélectionnez votre CSP</option>
										<option value="agriculteurs">Agriculteurs</option>
										<option value="Artisans/commerçants et chefs d'entreprises">
											Artisans/commerçants et chefs d&apos;entreprises
										</option>
										<option value="Cadres et professions intellectuelles supérieures">
											Cadres et professions intellectuelles supérieures
										</option>
										<option value="Professions intermédiaires">
											Professions intermédiaires (professeurs, politiques,
											milieu de santé, fonction publique)
										</option>
										<option value="Employés">
											Employés (administratifs, police, de commerce, pompier)
										</option>
										<option value="Autres">
											Autres (étudiants, retraités & inactifs)
										</option>
									</select>
								</li>
								<li>
									<Label className="SelectLabel">
										Zone géographique de résidence (si habite en France)
									</Label><br />
									<select
										id="zone"
										name="zone"
										className="SelectTrigger"
										value={zone ?? ""}
										onChange={handleZoneChange}
										required
									>
										<option value="">Sélectionnez votre zone</option>
										<option value="Nord">Nord</option>
										<option value="Sud">Sud</option>
										<option value="Est">Est</option>
										<option value="Ouest">Ouest</option>
										<option value="Ne réside pas en France">
											Ne réside pas en France
										</option>
									</select>
								</li>
								<li>
									<Label className="SelectLabel">
										Niveau d&apos;études (sélectionnez le plus haut niveau
										d&apos;études atteint)
									</Label><br />
									<select
										id="niveau"
										name="niveau"
										className="SelectTrigger"
										value={niveau ?? ""}
										onChange={handleNiveauChange}
										required
									>
										<option value="">
											Sélectionnez votre niveau d&apos;études
										</option>
										<option value="Primaire">Primaire</option>
										<option value="Collège">Collège</option>
										<option value="Lycée">Lycée</option>
										<option value="CAP-BEP">CAP-BEP</option>
										<option value="Etudes Supérieures">
											Etudes Supérieures
										</option>
									</select>
								</li>
								<li>
									<Label className="SelectLabel">Sexe</Label><br />
									<select
										id="sexe"
										name="sexe"
										className="SelectTrigger"
										value={sexe ?? ""}
										onChange={handleSexeChange}
										required
									>
										<option value="">Sélectionnez le sexe</option>
										<option className="SelectMale" value="Homme">
											Homme
										</option>
										<option className="SelectFemelle" value="Femme">
											Femme
										</option>
									</select>
								</li>
								{/* <li style={{marginTop: '20px', color: 'var(--mauve-11)'}}>
									<Text size="1">Identifiant: {identifiant}</Text>
								</li> */}
							</ul>

						</CardContent>
						<div className="center-container">
						{formNotComplited ?
							<AlertDialog.Root>
								<AlertDialog.Trigger>
									<Button
										onClick={handleFormCompleted}
										type="submit"
										size={"xl"}
										className={
											isSmallScreen
												? "mobile_view__soumettre-btn"
												: "container dt_view__soumettre-btn"
										}
									>
										Soumettre
									</Button>
								</AlertDialog.Trigger>
								<AlertDialog.Content style={{ maxWidth: 450 }}>
									<AlertDialog.Title>Le formulaire n&apos;est pas complet</AlertDialog.Title>
									<AlertDialog.Description size="2">
										Vous y êtes presque !
									</AlertDialog.Description>
				
									<Flex gap="3" mt="4" justify="end">
										<AlertDialog.Action>
											<Button onClick={() => {setFormNotComplited(false)}}>
												Continuer
											</Button>
										</AlertDialog.Action>
									</Flex>
								</AlertDialog.Content>
							</AlertDialog.Root>
							:
							<Button
							onClick={handleFormCompleted}
							type="submit"
							size={"xl"}
							className={
								isSmallScreen
									? "mobile_view__soumettre-btn"
									: "container dt_view__soumettre-btn"
							}
						>
							Soumettre
						</Button>
					}

							<br />
							<br />
						</div>
					</form>
				</Card>
			) : (
				<Card
					className={
						isSmallScreen
							? "mobile_view__connexionCard card"
							: "w-full max-w-xl container"
					}
				>
					<CardHeader>
						<CardTitle className="text-primary container">
							<Text>Récapitulatif</Text>
						</CardTitle>
					</CardHeader>

					<CardContent className="space-y-6">
						<Card>
							<ul className="container">
								<li>
									<Text>Votre age : {age}</Text>
								</li>
								<li>
									<Text>Votre taille : {taille}</Text>
								</li>
								<li>
									<Text>Votre poids : {poids}</Text>
								</li>
								<li>
									<Text>Votre sexe : {sexe}</Text>
								</li>
								<li>
									<Text>Votre csp : {csp}</Text>
								</li>
								<li>
									<Text>Votre zone : {zone}</Text>
								</li>
								<li>
									<Text>Votre niveau : {niveau}</Text>
								</li>
							</ul>
						</Card>
						<br />
						{/* <Text><Em>Maintenant, nous avons besoin de vos mensurations</Em></Text> */}
					</CardContent>
					<Button
						onClick={() => router.push("/measurements")}
						size={"lg"}
						className={
							isSmallScreen
								? "mobile_view__buttonMensurations button_gomens__demog"
								: "container button_gomens__demog"
						}
					>
						{" "}
						Passer aux mensurations{" "}
					</Button>
					<Button
						onClick={() => setFormCompleted(false)}
						size={"sm"}
						className={
							isSmallScreen
								? "mobile_view__buttonMensurations "
								: "container dt_view__buttonModifDemog "
						}
					>
						Modifier
					</Button>
					<br />
				</Card>
			)}
		</div>
	);
}
