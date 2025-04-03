import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { MeasurementRibbonInterface } from "@/hooks/measurements";
import ImportOrCapureComponent from "./ChooseBetweenCameraAndImportUploading";
import { useUser } from "@/contexts/user";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import Image from "next/image"; //provides features like optimization, responsive loading, and more for images.
import { Button, Flex, Text } from "@radix-ui/themes";

export default function MensurationVerification({
	mensuration,
}: {
	mensuration: MeasurementRibbonInterface;
}) {
	const [showExamplePhoto, setShowExamplePhoto] = useState(true);
	const [hasSrc, setSrc] = useState<boolean>(false);
	const { pending, setPending } = useUser();
	const router = useRouter();
	const updateTrue = localStorage.getItem('update');
	const handleContinue = () => {
		setShowExamplePhoto(false);
		localStorage.setItem('update', 'false');
	};

	useEffect(() => {
		if (!pending) return router.push("/measurements");
		setPending(false);
	}, []);

	useEffect(() => {
		if (mensuration) setSrc(true);
	}, [mensuration]);

	return (
		<Card className="w-full max-w-xl container">
			<CardHeader>
				<CardTitle className="text-primary container">
					{mensuration.popOverMediaImageName}
				</CardTitle>
			</CardHeader>

			{(showExamplePhoto || updateTrue === 'true')  && (
				<CardContent className="space-y-6">
					<Text as="p" size="2">
						Exemple type :
					</Text>
					<Flex direction="column" display="flex" gap="3" align="center">
						{hasSrc && (
							<Image
								style={{width: 'auto', height: 'auto'}}
								src={mensuration.popOverMediaPath} // Path to the image from the "public" folder
								alt="My Image"
								width={400} // Specify the width
								height={400} // Specify the height
							/>
						)}
						<Button
							style={{ color: "#FFF", backgroundColor: "#000", cursor: 'pointer' }}
							onClick={handleContinue}
						>
							Continuer
						</Button>
					</Flex>
				</CardContent>
			)}
			{(!showExamplePhoto && !mensuration.photoTaken || !showExamplePhoto && mensuration.photoTaken && updateTrue === 'false') && (
				<ImportOrCapureComponent mensuration={mensuration} />
			)}
		</Card>
	);
}
