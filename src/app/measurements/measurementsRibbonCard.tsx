"use client";
import { useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Flex } from "@radix-ui/themes";

import { useMeasurementsRibbon } from "@/hooks/measurements";
import MeasurementRibbon from "@/components/measurementsRibbon";

export default function MeasurmentsRibbonCard({
	isSmallScreen,
}: {
	isSmallScreen: boolean;
}) {
	const { mensurationsArray } = useMeasurementsRibbon();

	useEffect(() => {
		mensurationsArray.map((mensuration) => {
			if (mensuration.takeMeasurementName === "") mensuration.setter(null);
		});
	}, [mensurationsArray]);

	return (
		<Card
			className={
				isSmallScreen
					? "mobile_view__mensurationsCard card"
					: "w-full max-w-xl container"
			}
		>
			<CardHeader>
				<CardTitle className="text-primary container">
					Liste des mensurations à prendre
				</CardTitle>
				<div style={{display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center'}}>
					<p style={{color: 'blue', textAlign: 'center', fontSize: '12px'}}><i>Le bouton </i></p>
					<svg color="black" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
					<path fill="blue" d="M5 19h1.425L16.2 9.225L14.775 7.8L5 17.575zm-2 2v-4.25L16.2 3.575q.3-.275.663-.425t.762-.15q.4 0 .775.15t.65.45L20.425 5q.3.275.438.65T21 6.4q0 .4-.137.763t-.438.662L7.25 21zM19 6.4L17.6 5zm-3.525 2.125l-.7-.725L16.2 9.225z"/></svg>
					<p style={{color: 'blue', textAlign: 'center', fontSize: '12px'}}><i> sert a modifier une photo déja enregistrée</i></p>
				</div>
				<div style={{display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center'}}>
				<p style={{color: 'red', textAlign: 'center', fontSize: '12px'}}><i>Merci de ne pas rafraîchir la page ou de revenir en arrière, car cela pourrait entraîner une perte des données.</i></p>
				<p style={{color: 'red', textAlign: 'center', fontSize: '12px'}}><i>Une fois le formulaire complété, cliquez sur &apos;continuer&apos; !</i></p>
				</div>
			</CardHeader>

			<CardContent className="space-y-6">
				<ul>
					<Flex direction="column" gap="2">
						{/* LOOP OVER MENSURATIONS */}
						{mensurationsArray.map((mensuration) => {
							return (
								<div key={mensuration.takeMeasurementName}>
									{mensuration.popOverMediaName}
									<MeasurementRibbon
										key={mensuration.takeMeasurementName}
										popOverMediaName={mensuration.popOverMediaName}
										popOverMediaInitials={mensuration.popOverMediaInitials}
										popOverMediaPath={mensuration.popOverMediaPath}
										contextKeyName={mensuration.contextKeyName}
										popOverMediaImageName={mensuration.popOverMediaImageName}
										takeMeasurementName={mensuration.takeMeasurementName}
										contextValue={mensuration.contextValue}
										photoTaken={mensuration.photoTaken}
										contextPhotoTakenName={mensuration.contextPhotoTakenName}
										setter={mensuration.setter}
									/>
								</div>
							);
						})}
					</Flex>
				</ul>
			</CardContent>
		</Card>
	);
}
