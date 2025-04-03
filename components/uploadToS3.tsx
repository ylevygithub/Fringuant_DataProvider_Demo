import React, { useState } from "react";
import { useUser } from "@/contexts/user";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { uploadMedias } from "@/utils/s3uploader";
import { getCurrentDateTimeString, currentISOWeekNumber } from "@/utils/date";
import { Flex } from "@radix-ui/themes";
import { Button } from "@/components/ui/button";
import { SvgAddPic } from "./mySvg";
import { CardContent } from "@/components/ui/card";

export const UploadProfilToS3 = (props: {
	name: string;
	handleTakePhoto: () => void;
}) => {
	const { name, handleTakePhoto } = props;
	const [uploadedFile, setUploadedFile] = useState<string | null>(null);
	const { supplier, email, identifiant } = useUser();
	const [camera, setCamera] = useState(false);
	const [fromImport, setFromImport] = useState(false);

	const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
		setCamera(true);
		const file = e.target.files?.[0];
		const identifiantLS = localStorage.getItem("identifiant");
		const supplierLS = localStorage.getItem("supplierData");
		const supplierData = JSON.parse(supplierLS!);
		const emailLS = localStorage.getItem("email");

		if (file) {
			let basePrefix: string = '';
			let imageName: string = '';
			let subPath: string = '';
			try {
				if (identifiantLS) {
					basePrefix = `${supplierData?.name}/${currentISOWeekNumber}/images/${emailLS}/${identifiantLS}`;
					imageName = `${name.split(".jpg")[0]}_1.jpg`;
					subPath = `${identifiantLS}_${imageName}`;
					console.log('Path pour upload construit a partir de l\'identifiant du LS');
				}
				else {
					console.log('Identifiant indisponible');
					throw new Error("Identifiant indisponible");
				}

				const s3Path = `${basePrefix}/${subPath}`;
				console.log('s3Path : ', s3Path);
				
				/**Removing for demo */
				// uploadMedias(s3Path, file);
				setUploadedFile(`${name}`);
			} catch (error) {
				console.error("Error uploading file for profile:", error);
			}
		}
	};

	

	return (
		<CardContent className="space-y-6">
			<Flex direction="column" display="flex" gap="3" align="center">
				{!camera && !fromImport && (
					<div className="centered-content">
						<br />

						<div className="button-container" style={{ marginLeft: "auto" }}>
							<div className="flex_row" style={{ height: "150%" }}>
								<label htmlFor="camera" className="button btn-size button-label">
									Camera
									<input
										id="camera"
										className="input-file"
										onChange={handleFileChange}
										accept="image/jpeg, image/png, image/heic"
										capture="user"
										type="file"
									></input>
								</label>
							<br />
							</div>

							<div className="separator" style={{ marginRight: "35px" }}></div>

								<label htmlFor="importer" className="button btn-size button-label btn_importer">
									<Flex direction="row" display="flex" gap="3" align="center">
										Importer
										<SvgAddPic/>
									</Flex>
									<input
										id="importer"
										className="input-file"
										onChange={handleFileChange}
										accept="image/jpeg, image/png, image/heic"
										type="file"
									></input>
								</label>
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
};
