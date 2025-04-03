import { useMemo } from "react";
import {
	useMeasurements,
	MeasurementValue,
	MeasurementVerificationPhoto,
} from "@/contexts/measurements";
import { useMetadata } from "@/contexts/metadata";
import { useUser } from "@/contexts/user";
import { useDemographic } from "@/contexts/demographic";
import { getCurrentDateTimeString, currentISOWeekNumber } from "@/utils/date";
import { MetadatInterface, upload } from "@/utils/s3uploader";

export interface MeasurementRibbonInterface {
	popOverMediaName: string;
	popOverMediaInitials: string;
	popOverMediaPath: string;
	popOverMediaImageName: string;
	takeMeasurementName: string;
	contextKeyName: string;
	contextValue: string | null;
	filename: string;
	photoTaken: boolean;
	contextPhotoTakenName: string;
	setter: (mensuration: string | null) => void;
	photoSetter: (photoTaken: boolean) => void;
}

export const useMeasurementsRibbon = () => {
	const {
		setPhotoNeckTaken,
		setPhotoShoulderLengthTaken,
		setPhotoShoulderWidthTaken,
		setPhotoFrontBuildTaken,
		setPhotoBackBuildTaken,
		setPhotoNeckWaistFrontTaken,
		setPhotoNeckWaistBackTaken,
		setPhotoNeckPelvisFrontTaken,
		setPhotoChestTaken,
		setPhotoUnderChestTaken,
		setPhotoArmCircTaken,
		setPhotoArmLengthTaken,
		setPhotoUpperArmLengthTaken,
		setPhotoWaistTaken,
		setPhotoPelvisTaken,
		setPhotoHipsTaken,
		setPhotoSideseamTaken,
		setPhotoInseamTaken,
		setPhotoThighTaken,
		setPhotoCalfTaken,
	} = useMeasurements();
	const {
		neck,
		setNeck,
		photoNeckTaken,
		shoulderLength,
		setShoulderLength,
		photoShoulderLengthTaken,
		shoulderWidth,
		setShoulderWidth,
		photoShoulderWidthTaken,
		frontBuild,
		setFrontBuild,
		photoFrontBuildTaken,
		backBuild,
		setBackBuild,
		photoBackBuildTaken,
		neckWaistFront,
		setNeckWaistFront,
		photoNeckWaistFrontTaken,
		neckWaistBack,
		setNeckWaistBack,
		photoNeckWaistBackTaken,
		neckPelvisFront,
		setNeckPelvisFront,
		photoNeckPelvisFrontTaken,
		chest,
		setChest,
		photoChestTaken,
		underChest,
		setUnderChest,
		photoUnderChestTaken,
		armCirc,
		setArmCirc,
		photoArmCircTaken,
		armLength,
		setArmLength,
		photoArmLengthTaken,
		upperArmLength,
		setUpperArmLength,
		photoUpperArmLengthTaken,
		waist,
		setWaist,
		photoWaistTaken,
		pelvis,
		setPelvis,
		photoPelvisTaken,
		hips,
		setHips,
		photoHipsTaken,
		sideseam,
		setSideseam,
		photoSideseamTaken,
		inseam,
		setInseam,
		photoInseamTaken,
		thigh,
		setThigh,
		photoThighTaken,
		calf,
		setCalf,
		photoCalfTaken,
		front,
		side,
		selfie,
	} = useMeasurements();

	const { email, supplier, identifiant } = useUser();

	const mensurationsArray: MeasurementRibbonInterface[] = useMemo(
		() => [
			{
				popOverMediaName: "Circonférence du cou",
				popOverMediaInitials: "Circ. cou",
				popOverMediaPath: "/mesures_body_pics/neck.jpg",
				popOverMediaImageName: "Circonférence du cou",
				takeMeasurementName: "neck",
				filename: "neck.jpg",
				contextKeyName: "neck",
				contextValue: neck,
				photoTaken: photoNeckTaken,
				setter: setNeck,
				photoSetter: setPhotoNeckTaken,
				contextPhotoTakenName: "photoNeckTaken",
			},
			{
				popOverMediaName: "Longueur d'épaule",
				popOverMediaInitials: "Long. d'épaule",
				popOverMediaPath: "/mesures_body_pics/shoulder_length.jpg",
				popOverMediaImageName: "Longueur d'épaule",
				takeMeasurementName: "shoulder_length",
				contextKeyName: "shoulderLength",
				filename: "shoulder_length.jpg",
				contextValue: shoulderLength,
				photoTaken: photoShoulderLengthTaken,
				setter: setShoulderLength,
				photoSetter: setPhotoShoulderLengthTaken,
				contextPhotoTakenName: "photoShoulderLengthTaken",
			},
			{
				popOverMediaName: "Largeur d'épaule",
				popOverMediaInitials: "Larg. d'épaule",
				popOverMediaPath: "/mesures_body_pics/shoulder_width.jpg",
				popOverMediaImageName: "Largeur d'épaule",
				takeMeasurementName: "shoulder_width",
				filename: "shoulder_width.jpg",
				contextKeyName: "shoulderWidth",
				contextValue: shoulderWidth,
				photoTaken: photoShoulderWidthTaken,
				setter: setShoulderWidth,
				photoSetter: setPhotoShoulderWidthTaken,
				contextPhotoTakenName: "photoShoulderWidthTaken",
			},
			{
				popOverMediaName: "Carrure avant",
				popOverMediaInitials: "Carrure avant",
				popOverMediaPath: "/mesures_body_pics/front-build.jpg",
				popOverMediaImageName: "Carrure avant",
				takeMeasurementName: "front-build",
				filename: "front-build.jpg",
				contextKeyName: "frontBuild",
				contextValue: frontBuild,
				photoTaken: photoFrontBuildTaken,
				setter: setFrontBuild,
				photoSetter: setPhotoFrontBuildTaken,
				contextPhotoTakenName: "photoFrontBuildTaken",
			},
			{
				popOverMediaName: "Carrure dos",
				popOverMediaInitials: "Carrure dos",
				popOverMediaPath: "/mesures_body_pics/back-build.jpg",
				popOverMediaImageName: "Carrure dos",
				takeMeasurementName: "back-build",
				filename: "back-build.jpg",
				contextKeyName: "backBuild",
				contextValue: backBuild,
				photoTaken: photoBackBuildTaken,
				setter: setBackBuild,
				photoSetter: setPhotoBackBuildTaken,
				contextPhotoTakenName: "photoBackBuildTaken",
			},
			{
				popOverMediaName: "Longueur cou - taille (dos)",
				popOverMediaInitials: "Long. cou - taille",
				popOverMediaPath: "/mesures_body_pics/neck-waist_back.jpg",
				popOverMediaImageName: "Longueur cou - taille (dos)",
				takeMeasurementName: "neck-waist_back",
				filename: "neck-waist_back.jpg",
				contextKeyName: "neckWaistBack",
				contextValue: neckWaistBack,
				photoTaken: photoNeckWaistBackTaken,
				setter: setNeckWaistBack,
				photoSetter: setPhotoNeckWaistBackTaken,
				contextPhotoTakenName: "photoNeckWaistBackTaken",
			},
			{
				popOverMediaName: "Longueur cou - taille (devant)",
				popOverMediaInitials: "Long. cou - taille avant",
				popOverMediaPath: "/mesures_body_pics/neck-waist_front.jpg",
				popOverMediaImageName: "Longueur cou - taille (devant)",
				takeMeasurementName: "neck-waist_front",
				filename: "neck-waist_front.jpg",
				contextKeyName: "neckWaistFront",
				contextValue: neckWaistFront,
				photoTaken: photoNeckWaistFrontTaken,
				setter: setNeckWaistFront,
				photoSetter: setPhotoNeckWaistFrontTaken,
				contextPhotoTakenName: "photoNeckWaistFrontTaken",
			},
			{
				popOverMediaName: "Longueur cou - ligne du bassin (avant)",
				popOverMediaInitials: "Long. cou",
				popOverMediaPath: "/mesures_body_pics/neck-pelvis_front.jpg",
				popOverMediaImageName: "Longueur cou - ligne du bassin (avant)",
				takeMeasurementName: "neck-pelvis_front",
				filename: "neck-pelvis_front.jpg",
				contextKeyName: "neckPelvisFront",
				contextValue: neckPelvisFront,
				photoTaken: photoNeckPelvisFrontTaken,
				setter: setNeckPelvisFront,
				photoSetter: setPhotoNeckPelvisFrontTaken,
				contextPhotoTakenName: "photoNeckPelvisFrontTaken",
			},
			{
				popOverMediaName: "Tour de poitrine",
				popOverMediaInitials: "Tour poitrine",
				popOverMediaPath: "/mesures_body_pics/chest.jpg",
				popOverMediaImageName: "Tour de poitrine",
				takeMeasurementName: "chest",
				filename: "chest.jpg",
				contextKeyName: "chest",
				contextValue: chest,
				photoTaken: photoChestTaken,
				setter: setChest,
				photoSetter: setPhotoChestTaken,
				contextPhotoTakenName: "photoChestTaken",
			},
			{
				popOverMediaName: "Tour de poitrine inférieur",
				popOverMediaInitials: "Tour poitrine inf",
				popOverMediaPath: "/mesures_body_pics/under-chest.jpg",
				popOverMediaImageName: "Tour de poitrine inférieur",
				takeMeasurementName: "under-chest",
				filename: "under-chest.jpg",
				contextKeyName: "underChest",
				contextValue: underChest,
				photoTaken: photoUnderChestTaken,
				setter: setUnderChest,
				photoSetter: setPhotoUnderChestTaken,
				contextPhotoTakenName: "photoUnderChestTaken",
			},
			{
				popOverMediaName: "Circonférence du bras",
				popOverMediaInitials: "Circ. bras",
				popOverMediaPath: "/mesures_body_pics/arm_circ.jpg",
				popOverMediaImageName: "Circonférence du bras",
				takeMeasurementName: "arm_circ",
				filename: "arm_circ.jpg",
				contextKeyName: "armCirc",
				contextValue: armCirc,
				photoTaken: photoArmCircTaken,
				setter: setArmCirc,
				photoSetter: setPhotoArmCircTaken,
				contextPhotoTakenName: "photoArmCircTaken",
			},
			{
				popOverMediaName: "Longueur de bras",
				popOverMediaInitials: "Long. bras",
				popOverMediaPath: "/mesures_body_pics/arm_length.jpg",
				popOverMediaImageName: "Longueur de bras",
				takeMeasurementName: "arm_length",
				filename: "arm_length.jpg",
				contextKeyName: "armLength",
				contextValue: armLength,
				photoTaken: photoArmLengthTaken,
				setter: setArmLength,
				photoSetter: setPhotoArmLengthTaken,
				contextPhotoTakenName: "photoArmLengthTaken",
			},
			{
				popOverMediaName: "Longueur du bras supérieur",
				popOverMediaInitials: "Long. bras sup",
				popOverMediaPath: "/mesures_body_pics/upper-arm_length.jpg",
				popOverMediaImageName: "Longueur du bras supérieur",
				takeMeasurementName: "upper-arm_length",
				filename: "upper-arm_length.jpg",
				contextKeyName: "upperArmLength",
				contextValue: upperArmLength,
				photoTaken: photoUpperArmLengthTaken,
				setter: setUpperArmLength,
				photoSetter: setPhotoUpperArmLengthTaken,
				contextPhotoTakenName: "photoUpperArmLengthTaken",
			},
			{
				popOverMediaName: "Tour de taille",
				popOverMediaInitials: "Tour taille",
				popOverMediaPath: "/mesures_body_pics/waist.jpg",
				popOverMediaImageName: "Tour de taille",
				takeMeasurementName: "waist",
				filename: "waist.jpg",
				contextKeyName: "waist",
				contextValue: waist,
				photoTaken: photoWaistTaken,
				setter: setWaist,
				photoSetter: setPhotoWaistTaken,
				contextPhotoTakenName: "photoWaistTaken",
			},
			{
				popOverMediaName: "Tour de bassin",
				popOverMediaInitials: "Tour bassin",
				popOverMediaPath: "/mesures_body_pics/pelvis.jpg",
				popOverMediaImageName: "Tour de bassin",
				takeMeasurementName: "pelvis",
				filename: "pelvis.jpg",
				contextKeyName: "pelvis",
				contextValue: pelvis,
				photoTaken: photoPelvisTaken,
				setter: setPelvis,
				photoSetter: setPhotoPelvisTaken,
				contextPhotoTakenName: "photoPelvisTaken",
			},
			{
				popOverMediaName: "Tour de hanches",
				popOverMediaInitials: "Tour hanches",
				popOverMediaPath: "/mesures_body_pics/hips.jpg",
				popOverMediaImageName: "Tour de hanches",
				takeMeasurementName: "hips",
				filename: "hips.jpg",
				contextKeyName: "hips",
				contextValue: hips,
				photoTaken: photoHipsTaken,
				setter: setHips,
				photoSetter: setPhotoHipsTaken,
				contextPhotoTakenName: "photoHipsTaken",
			},
			{
				popOverMediaName: "Longueur de jambes",
				popOverMediaInitials: "Long. jambes",
				popOverMediaPath: "/mesures_body_pics/sideseam.jpg",
				popOverMediaImageName: "Longueur de jambes",
				takeMeasurementName: "sideseam",
				filename: "sideseam.jpg",
				contextKeyName: "sideseam",
				contextValue: sideseam,
				photoTaken: photoSideseamTaken,
				setter: setSideseam,
				photoSetter: setPhotoSideseamTaken,
				contextPhotoTakenName: "photoSideseamTaken",
			},
			{
				popOverMediaName: "Hauteur d'entrejambe",
				popOverMediaInitials: "Hauteur d'en...",
				popOverMediaPath: "/mesures_body_pics/inseam.jpg",
				popOverMediaImageName: "Hauteur d'entrejambe",
				takeMeasurementName: "inseam",
				filename: "inseam.jpg",
				contextKeyName: "inseam",
				contextValue: inseam,
				photoTaken: photoInseamTaken,
				setter: setInseam,
				photoSetter: setPhotoInseamTaken,
				contextPhotoTakenName: "photoInseamTaken",
			},
			{
				popOverMediaName: "Tour de cuisse",
				popOverMediaInitials: "Tour cuisse",
				popOverMediaPath: "/mesures_body_pics/thigh.jpg",
				popOverMediaImageName: "Tour de cuisse",
				takeMeasurementName: "thigh",
				filename: "thigh.jpg",
				contextKeyName: "thigh",
				contextValue: thigh,
				photoTaken: photoThighTaken,
				setter: setThigh,
				photoSetter: setPhotoThighTaken,
				contextPhotoTakenName: "photoThighTaken",
			},
			{
				popOverMediaName: "Tour de mollet",
				popOverMediaInitials: "Tour mollet",
				popOverMediaPath: "/mesures_body_pics/calf.jpg",
				popOverMediaImageName: "Tour de mollet",
				takeMeasurementName: "calf",
				filename: "calf.jpg",
				contextKeyName: "calf",
				contextValue: calf,
				photoTaken: photoCalfTaken,
				setter: setCalf,
				photoSetter: setPhotoCalfTaken,
				contextPhotoTakenName: "photoCalfTaken",
			},
		],
		[
			neck,
			setNeck,
			photoNeckTaken,
			shoulderLength,
			setShoulderLength,
			photoShoulderLengthTaken,
			shoulderWidth,
			setShoulderWidth,
			photoShoulderWidthTaken,
			frontBuild,
			photoFrontBuildTaken,
			setFrontBuild,
			backBuild,
			photoBackBuildTaken,
			setBackBuild,
			neckWaistBack,
			photoNeckWaistBackTaken,
			setNeckWaistBack,
			neckWaistFront,
			photoNeckWaistFrontTaken,
			setNeckWaistFront,
			neckPelvisFront,
			photoNeckPelvisFrontTaken,
			setNeckPelvisFront,
			chest,
			photoChestTaken,
			setChest,
			underChest,
			photoUnderChestTaken,
			setUnderChest,
			armCirc,
			photoArmCircTaken,
			setArmCirc,
			armLength,
			photoArmLengthTaken,
			setArmLength,
			upperArmLength,
			photoUpperArmLengthTaken,
			setUpperArmLength,
			waist,
			photoWaistTaken,
			setWaist,
			pelvis,
			photoPelvisTaken,
			setPelvis,
			hips,
			photoHipsTaken,
			setHips,
			sideseam,
			photoSideseamTaken,
			setSideseam,
			inseam,
			photoInseamTaken,
			setInseam,
			thigh,
			photoThighTaken,
			setThigh,
			calf,
			photoCalfTaken,
			setCalf,
			setPhotoNeckTaken,
			setPhotoShoulderLengthTaken,
			setPhotoShoulderWidthTaken,
			setPhotoFrontBuildTaken,
			setPhotoBackBuildTaken,
			setPhotoNeckWaistFrontTaken,
			setPhotoNeckWaistBackTaken,
			setPhotoNeckPelvisFrontTaken,
			setPhotoChestTaken,
			setPhotoUnderChestTaken,
			setPhotoArmCircTaken,
			setPhotoArmLengthTaken,
			setPhotoUpperArmLengthTaken,
			setPhotoWaistTaken,
			setPhotoPelvisTaken,
			setPhotoHipsTaken,
			setPhotoSideseamTaken,
			setPhotoInseamTaken,
			setPhotoThighTaken,
			setPhotoCalfTaken,
		]
	);

	const { age, taille, poids, sexe, csp, zone, niveau } = useDemographic();
	const {
		setMailRegistered,
		setDemographRegistered,
		setMensurationsRegistered,
	} = useMetadata();

	const setAllValues = (mensuration: MeasurementValue) => {
		setNeck(mensuration.neck);
		setShoulderLength(mensuration.shoulderLength);
		setShoulderWidth(mensuration.shoulderWidth);
		setFrontBuild(mensuration.frontBuild);
		setBackBuild(mensuration.backBuild);
		setNeckWaistBack(mensuration.neckWaistBack);
		setNeckWaistFront(mensuration.neckWaistFront);
		setNeckPelvisFront(mensuration.neckPelvisFront);
		setChest(mensuration.chest);
		setUnderChest(mensuration.underChest);
		setArmCirc(mensuration.armCirc);
		setArmLength(mensuration.armLength);
		setUpperArmLength(mensuration.upperArmLength);
		setWaist(mensuration.waist);
		setPelvis(mensuration.pelvis);
		setHips(mensuration.hips);
		setSideseam(mensuration.sideseam);
		setInseam(mensuration.inseam);
		setThigh(mensuration.thigh);
		setCalf(mensuration.calf);
	};

	const setAllPhotoTaken = (validations: MeasurementVerificationPhoto) => {
		setPhotoNeckTaken(validations.photoNeckTaken);
		setPhotoShoulderLengthTaken(validations.photoShoulderLengthTaken);
		setPhotoShoulderWidthTaken(validations.photoShoulderWidthTaken);
		setPhotoFrontBuildTaken(validations.photoFrontBuildTaken);
		setPhotoBackBuildTaken(validations.photoBackBuildTaken);
		setPhotoNeckWaistBackTaken(validations.photoNeckWaistBackTaken);
		setPhotoNeckWaistFrontTaken(validations.photoNeckWaistFrontTaken);
		setPhotoNeckPelvisFrontTaken(validations.photoNeckPelvisFrontTaken);
		setPhotoChestTaken(validations.photoChestTaken);
		setPhotoUnderChestTaken(validations.photoUnderChestTaken);
		setPhotoArmCircTaken(validations.photoArmCircTaken);
		setPhotoArmLengthTaken(validations.photoArmLengthTaken);
		setPhotoUpperArmLengthTaken(validations.photoUpperArmLengthTaken);
		setPhotoWaistTaken(validations.photoWaistTaken);
		setPhotoPelvisTaken(validations.photoPelvisTaken);
		setPhotoHipsTaken(validations.photoHipsTaken);
		setPhotoSideseamTaken(validations.photoSideseamTaken);
		setPhotoInseamTaken(validations.photoInseamTaken);
		setPhotoThighTaken(validations.photoThighTaken);
		setPhotoCalfTaken(validations.photoCalfTaken);
	};

	const handleUpdateMetadata = async () => {
		try {
			const metadata: MetadatInterface = {
				subject: email,
				age: age,
				sex: sexe,
				height: taille,
				weight: poids,
				csp: csp,
				zone: zone,
				niveau: niveau,
				bodysizes: {
					neck: neck,
					shoulderLength: shoulderLength,
					shoulderWidth: shoulderWidth,
					frontBuild: frontBuild,
					backBuild: backBuild,
					neckWaistFront: neckWaistFront,
					neckWaistBack: neckWaistBack,
					neckPelvisFront: neckPelvisFront,
					chest: chest,
					underChest: underChest,
					armCirc: armCirc,
					armLength: armLength,
					upperArmLength: upperArmLength,
					waist: waist,
					pelvis: pelvis,
					hips: hips,
					sideseam: sideseam,
					inseam: inseam,
					thigh: thigh,
					calf: calf,
				},
			};
			let basePrefix: string = '';
			const identifiantLS = localStorage.getItem("identifiant");
			const supplierLS = localStorage.getItem("supplierData");
			const supplierData = JSON.parse(supplierLS!);
			const emailLS = localStorage.getItem("email");
			if (identifiantLS) {
				basePrefix = `${supplierData?.name}/${currentISOWeekNumber}/images/${emailLS}/${identifiantLS}`;
				console.log('Path pour upload construit a partir de l\'identifiant du LS');
			}
			else {
				console.log('Identifiant indisponible');
				throw new Error("Identifiant indisponible");
			}
			const s3Path = `${basePrefix}/metadata.json`;
			/**Removing for demo */
			// await upload(s3Path, metadata);
			setMailRegistered(true);
			setDemographRegistered(true);
			setMensurationsRegistered(true);
		} catch (parseErr) {
			console.error("Error parsing JSON:", parseErr);
		}
	};

	return {
		mensurationsArray,
		handleUpdateMetadata,
		setAllValues,
		setAllPhotoTaken,
	};
};
