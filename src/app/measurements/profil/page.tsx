"use client"; // Page pour saisir la photo de profil Front

import React, { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useMeasurements } from "@/contexts/measurements";
import Image from "next/image"; //provides features like optimization, responsive loading, and more for images.
import { UploadProfilToS3 } from "@/components/uploadToS3";
import { Flex, Text } from "@radix-ui/themes";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Header_logo from "@/src/app/Header_logo";
import { Button } from "@/components/ui/button";
import { useUser } from "@/contexts/user";
import { useProfileCard } from "@/hooks/profiles";

export default function FrontProfilePage() {
	const searchParams = useSearchParams();
	const profileType = searchParams.get("type");
	const { front } = useMeasurements();

	interface profileTypeInterface {
		setter: (value: boolean | null) => void;
		profileType: "front" | "side" | "selfie";
		description: string;
		src: string;
		filename: string;
		value: typeof front;
	}

	const [photoTaken, setPhotoTaken] = useState(false);
	const [showExamplePhoto, setShowExamplePhoto] = useState(true);

	const router = useRouter();
	const { pending, setPending } = useUser();
	const [isSmallScreen, setIsSmallScreen] = useState(false);

	const [type, setType] = useState({} as profileTypeInterface);

	const { profileTypes } = useProfileCard();

	useEffect(() => {
		if (!pending) return router.push("/measurements");
		setPending(false);
		const profile: profileTypeInterface | undefined = profileTypes.find(
			(profile) => profile.profileType === profileType
		);
		if (profile) setType(profile);
	}, []);

	useEffect(() => {
		const mediaQuery = window.matchMedia("(max-width: 600px)");
		const updateIsSmallScreen = () => setIsSmallScreen(mediaQuery.matches);

		mediaQuery.addListener(updateIsSmallScreen);
		updateIsSmallScreen(); // Appelez-le une fois pour la valeur initiale

		return () => {
			mediaQuery.removeListener(updateIsSmallScreen);
		};
	}, []);

	const handleTakePhoto = () => {
		// Handle taking the photo
		setPhotoTaken(true);
		type.setter(true);
		try {
			const profileData = localStorage.getItem("profileData");
			if (profileData === null) {
				const profileDict = {
					front: false,
					side: false,
					selfie: false,
				};
				profileDict[type.profileType] = true;
				localStorage.setItem("profileData", JSON.stringify(profileDict));
			} else {
				const profileDict = JSON.parse(profileData);
				profileDict[type.profileType] = true;
				localStorage.setItem("profileData", JSON.stringify(profileDict));
			}
		} catch (e) {}
		setTimeout(() => {
			setShowExamplePhoto(false);
		}, 15000);
		router.back();
	};

	const handleContinue = () => {
		setShowExamplePhoto(false);
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
					<CardTitle className="text-primary container">
						{type.description}
					</CardTitle>
				</CardHeader>

				{showExamplePhoto && (
					<CardContent className="space-y-6">
						<Text as="p" size="2">
							Exemple type :
						</Text>
						<Flex direction="column" display="flex" gap="3" align="center">
							{type.src && (
								<Image
									src={type.src} // Path to the image from the "public" folder
									alt="My Image"
									width={300} // Specify the width
									height={300} // Specify the height
								/>
							)}

							<Button
								style={{ color: "#FFF", backgroundColor: "#000" }}
								size="sm"
								onClick={handleContinue}
							>
								Continuer
							</Button>
						</Flex>
					</CardContent>
				)}
				{!showExamplePhoto && !photoTaken && (
					<CardContent className="space-y-6">
						<Flex direction="column" display="flex" gap="0" align="center">
							<UploadProfilToS3
								name={type.filename}
								handleTakePhoto={handleTakePhoto}
							/>
						</Flex>
					</CardContent>
				)}
			</Card>
		</div>
	);
}
