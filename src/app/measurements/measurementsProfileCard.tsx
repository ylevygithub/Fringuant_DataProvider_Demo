"use client";
import { useMeasurements } from "@/contexts/measurements";
import { useProfileCard } from "@/hooks/profiles";
import { useRouter } from "next/navigation";

import { useEffect } from "react";
import ProfileCard from "./profileCard";
import { Flex } from "@radix-ui/themes";

import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
export default function MeasurmentsProfileCard({
	isSmallScreen,
}: {
	isSmallScreen: boolean;
}) {
	const router = useRouter();

	const { front, side, selfie, setFront, setSide, setSelfie } =
		useMeasurements();

	const { profileTypes } = useProfileCard();

	useEffect(() => {
		try {
			const profileData = localStorage.getItem("profileData");
			if (profileData !== null && (!front || !side || !selfie)) {
				const profile = JSON.parse(profileData);
				setFront(profile.front);
				setSelfie(profile.selfie);
				setSide(profile.side);
			}
		} catch (e) {
			// router.push("/provider");
			//change pour la demo
			router.push("/demographics");
		}
	}, []);

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
					Photos de Profil
				</CardTitle>
			</CardHeader>
			<CardContent className="space-y-6">
				<ul>
					<Flex direction="row" gap="4">
						{/************* profile *************/}
						{profileTypes.map((profile) => {
							return (
								<li key={profile.profileType}>
									<ProfileCard profile={profile} />
								</li>
							);
						})}
					</Flex>
				</ul>
			</CardContent>
		</Card>
	);
}
