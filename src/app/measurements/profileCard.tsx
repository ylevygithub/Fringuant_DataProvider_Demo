"use client";
import { useRouter } from "next/navigation";
import { Flex, Badge } from "@radix-ui/themes";
import { Button } from "@/components/ui/button";
import { useUser } from "@/contexts/user";
import { useMeasurements } from "@/contexts/measurements";
import { SvgCamera, SvgUpdate } from "@/components/mySvg";

export default function ProfileCard({
	profile,
}: {
	profile: {
		setter: (value: boolean | null) => void;
		profileType: "front" | "side" | "selfie";
		description: string;
		src: string;
		filename: string;
		value: any;
	};
}) {
	const router = useRouter();
	const { pending, setPending } = useUser();
	const {
		setFront,
		setSide,
		setSelfie,
	} = useMeasurements();


	const handleTakeProfil = (profil: string) => {
		setPending(true);
		router.push(`/measurements/profil/?type=${profil}`);
	};

	const handleUpdateProfil = (profil: string) => {
		profil === 'front' ? setFront(false) : profil === 'side' ? setSide(false) : setSelfie(false);
		profile.setter(null);
		localStorage.setItem("update", 'true');
		handleTakeProfil(profil);
	};

	return (
		<Flex direction="column" align="center" gap="2">
			&emsp;{profile.profileType}&emsp;
			<Button
				style={{
					backgroundColor: "gray",
					color: "white",
					borderRadius: "5px",
				}}
				size="sm"
				onClick={() => handleTakeProfil(profile.profileType)}
				disabled={profile.value}
			>
				<SvgCamera/>
			</Button>
			{/* {!profile.value ? (
				''
			) : ( */}
				<Button
					style={{
						backgroundColor: "gray",
						color: "white",
						borderRadius: "5px",
					}}
					color="gray"
					size="sm"
					onClick={() => handleUpdateProfil(profile.profileType)}
					disabled={!profile.value}
				>
					<SvgUpdate/>
				</Button>
		</Flex>
	);
}
