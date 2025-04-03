import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useUser } from "@/contexts/user";
import { uploadMedias } from "@/utils/s3uploader";
import { currentISOWeekNumber, getCurrentDateTimeString } from "@/utils/date";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

import { MeasurementRibbonInterface } from "@/hooks/measurements";
import { CardContent } from "@/components/ui/card";

import { Button, Flex } from "@radix-ui/themes";
import { SvgAddPic } from "@/components/mySvg";

export default function ImportOrCapureComponent({
	mensuration,
}: {
	mensuration: MeasurementRibbonInterface;
}) {
	const router = useRouter();
	const [camera, setCamera] = useState(false);
	const [fromImport, setFromImport] = useState(false);
	const [isSmallScreen, setIsSmallScreen] = useState(false);
	const [uploadedFile, setUploadedFile] = useState<string | null>(null);
	const { supplier, email, identifiant } = useUser();

	useEffect(() => {
		const mediaQuery = window.matchMedia("(max-width: 600px)"); // Définissez votre requête média ici
		const updateIsSmallScreen = () => setIsSmallScreen(mediaQuery.matches);

		mediaQuery.addListener(updateIsSmallScreen);
		updateIsSmallScreen(); // Appelez-le une fois pour la valeur initiale

		return () => {
			mediaQuery.removeListener(updateIsSmallScreen);
		};
	}, []);

	const handleTakePhoto = () => {
		try {
			const validations = localStorage.getItem("photoValidations");
			if (validations) {
				const validationsData = JSON.parse(validations);
				validationsData[mensuration.contextPhotoTakenName] = true;
				localStorage.setItem(
					"photoValidations",
					JSON.stringify(validationsData)
				);
			}
		} catch (e) {}
		mensuration.photoSetter(true);
		setCamera(false);
		setFromImport(false);
		router.back();
	};

	const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
		setCamera(true);
		const file = e.target.files?.[0];
		const identifiantLS = localStorage.getItem("identifiant");
		const supplierLS = localStorage.getItem("supplierData");
		const supplierData = JSON.parse(supplierLS!);
		const emailLS = localStorage.getItem("email");

		if (file) {
			let basePrefix: string = '';
			let s3Path: string = '';
			try {
				if (identifiantLS) {
					basePrefix = `${supplierData?.name}/${currentISOWeekNumber}/images/${emailLS}/${identifiantLS}`;
					s3Path = `${basePrefix}/verify/${mensuration.filename}`;
					console.log('Path pour upload construit a partir de l\'identifiant du LS');
				}
				else {
					console.log('Identifiant indisponible');
					throw new Error("Identifiant indisponible");
				}
				console.log(s3Path);
				
				/**Removing for demo */
				// uploadMedias(s3Path, file);
				setUploadedFile(`${mensuration.filename}`);
			} catch (error) {
				console.error("Error uploading file:", error);
			}
		}
	};

	return (
		<CardContent className="space-y-6">
			<Flex direction="column" display="flex" gap="3" align="center">
				{!camera && !fromImport && (
					<div className="centered-content">
						<p>Prendre en photo ou importer une photo : </p>
						<br />
						<br />

						<div className="button-container" style={{ marginLeft: "auto" }}>
							<div className="flex_row">
								<label htmlFor="camera" className="button btn-size">
									Camera
								</label>
								<input
									id="camera"
									onChange={handleFileChange}
									style={{ visibility: "hidden" }}
									accept="image/jpeg, image/png, image/heic"
									capture={true}
									type="file"
								></input>
								<br />
							</div>

							<div className="separator" style={{ marginRight: "30px" }}></div>

							<div className="btn-size flex_row btn_importer">
								<Flex direction="row" display="flex" gap="3" align="center">
									<label htmlFor="importer">Importer</label>
									<SvgAddPic/>
								</Flex>
								<input
									id="importer"
									onChange={handleFileChange}
									style={{ visibility: "hidden" }}
									type="file"
									accept="image/jpeg, image/png, image/heic"
								></input>
							</div>
						</div>
					</div>
				)}

				{uploadedFile && (
					<div className="capture_success">
						<FontAwesomeIcon
							size="2xl"
							icon={faCheck}
							beat
							style={{ color: "#5bd742", marginTop: "10px" }}
						/>
					</div>
				)}
				{((fromImport && !camera) || (!fromImport && camera)) && (
					<Button
						style={{ padding: "28px", color: "#FFF", backgroundColor: "#000", cursor: 'pointer' }}
						onClick={handleTakePhoto}
					>
						Enregistrer la photo
					</Button>
				)}
			</Flex>
		</CardContent>
	);
}
