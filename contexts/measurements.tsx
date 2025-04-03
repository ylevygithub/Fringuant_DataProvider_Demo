"use client";

import { createContext, useContext, useMemo, useState } from "react";

export type MeasurementValue = {
	neck: string | null;
	shoulderLength: string | null;
	shoulderWidth: string | null;
	frontBuild: string | null;
	backBuild: string | null;
	neckWaistBack: string | null;
	neckWaistFront: string | null;
	neckPelvisFront: string | null;
	chest: string | null;
	underChest: string | null;
	armCirc: string | null;
	armLength: string | null;
	upperArmLength: string | null;
	waist: string | null;
	pelvis: string | null;
	hips: string | null;
	sideseam: string | null;
	inseam: string | null;
	thigh: string | null;
	calf: string | null;
	// Photo Profil
	front: boolean | null;
	side: boolean | null;
	selfie: boolean | null;
};

export type MeasurementVerificationPhoto = {
	photoCalfTaken: boolean;
	photoThighTaken: boolean;
	photoInseamTaken: boolean;
	photoSideseamTaken: boolean;
	photoHipsTaken: boolean;
	photoPelvisTaken: boolean;
	photoWaistTaken: boolean;
	photoUpperArmLengthTaken: boolean;
	photoArmLengthTaken: boolean;
	photoArmCircTaken: boolean;
	photoUnderChestTaken: boolean;
	photoChestTaken: boolean;
	photoNeckPelvisFrontTaken: boolean;
	photoNeckWaistFrontTaken: boolean;
	photoNeckWaistBackTaken: boolean;
	photoBackBuildTaken: boolean;
	photoFrontBuildTaken: boolean;
	photoNeckTaken: boolean;
	photoShoulderLengthTaken: boolean;
	photoShoulderWidthTaken: boolean;
};

export type MeasurementSeter = {
	setNeck: (neck: string | null) => void;
	setPhotoNeckTaken: (photoNeckTaken: boolean) => void;
	setShoulderLength: (shoulderLength: string | null) => void;
	setPhotoShoulderLengthTaken: (photoShoulderLengthTaken: boolean) => void;
	setShoulderWidth: (shoulderWidth: string | null) => void;
	setPhotoShoulderWidthTaken: (photoShoulderWidthTaken: boolean) => void;
	setFrontBuild: (frontBuild: string | null) => void;
	setPhotoFrontBuildTaken: (photoFrontBuildTaken: boolean) => void;
	setBackBuild: (backBuild: string | null) => void;
	setPhotoBackBuildTaken: (photoBackBuildTaken: boolean) => void;
	setNeckWaistBack: (neckWaistBack: string | null) => void;
	setPhotoNeckWaistBackTaken: (photoNeckWaistBackTaken: boolean) => void;
	setNeckWaistFront: (neckWaistFront: string | null) => void;
	setPhotoNeckWaistFrontTaken: (photoNeckWaistFrontTaken: boolean) => void;
	setNeckPelvisFront: (neckPelvisFront: string | null) => void;
	setPhotoNeckPelvisFrontTaken: (photoNeckPelvisFrontTaken: boolean) => void;
	setChest: (chest: string | null) => void;
	setPhotoChestTaken: (photoChestTaken: boolean) => void;
	setUnderChest: (underChest: string | null) => void;
	setPhotoUnderChestTaken: (photoUnderChestTaken: boolean) => void;
	setArmCirc: (armCirc: string | null) => void;
	setPhotoArmCircTaken: (photoArmCircTaken: boolean) => void;
	setArmLength: (armLength: string | null) => void;
	setPhotoArmLengthTaken: (photoArmLengthTaken: boolean) => void;
	setUpperArmLength: (upperArmLength: string | null) => void;
	setPhotoUpperArmLengthTaken: (photoUpperArmLengthTaken: boolean) => void;
	setWaist: (waist: string | null) => void;
	setPhotoWaistTaken: (photoWaistTaken: boolean) => void;
	setPelvis: (pelvis: string | null) => void;
	setPhotoPelvisTaken: (photoPelvisTaken: boolean) => void;
	setHips: (hips: string | null) => void;
	setPhotoHipsTaken: (photoHipsTaken: boolean) => void;
	setSideseam: (sideseam: string | null) => void;
	setPhotoSideseamTaken: (photoSideseamTaken: boolean) => void;
	setInseam: (inseam: string | null) => void;
	setPhotoInseamTaken: (photoInseamTaken: boolean) => void;
	setThigh: (thigh: string | null) => void;
	setPhotoThighTaken: (photoThighTaken: boolean) => void;
	setCalf: (calf: string | null) => void;
	setPhotoCalfTaken: (photoCalfTaken: boolean) => void;
	// Photo Profil
	setFront: (front: boolean | null) => void;
	setSide: (side: boolean | null) => void;
	setSelfie: (selfie: boolean | null) => void;
};

type MeasurementContext = MeasurementValue &
	MeasurementSeter &
	MeasurementVerificationPhoto;

export const defaultValue = {
	neck: "",
	shoulderLength: "",
	shoulderWidth: "",
	frontBuild: "",
	backBuild: "",
	neckWaistBack: "",
	neckWaistFront: "",
	neckPelvisFront: "",
	chest: "",
	underChest: "",
	armCirc: "",
	armLength: "",
	upperArmLength: "",
	waist: "",
	pelvis: "",
	hips: "",
	sideseam: "",
	inseam: "",
	thigh: "",
	calf: "",
};

export const defaultValidations = {
	photoNeckTaken: false,
	photoShoulderLengthTaken: false,
	photoShoulderWidthTaken: false,
	photoFrontBuildTaken: false,
	photoBackBuildTaken: false,
	photoNeckWaistBackTaken: false,
	photoNeckWaistFrontTaken: false,
	photoNeckPelvisFrontTaken: false,
	photoChestTaken: false,
	photoUnderChestTaken: false,
	photoArmCircTaken: false,
	photoArmLengthTaken: false,
	photoUpperArmLengthTaken: false,
	photoWaistTaken: false,
	photoPelvisTaken: false,
	photoHipsTaken: false,
	photoSideseamTaken: false,
	photoInseamTaken: false,
	photoThighTaken: false,
	photoCalfTaken: false,
};

const Context = createContext<MeasurementContext | undefined>(undefined);

export default function MeasurementsProvider({
	children,
}: {
	children: React.ReactNode;
}) {
	const [neck, setNeck] = useState<string | null>(null);
	const [photoNeckTaken, setPhotoNeckTaken] = useState<boolean>(false);
	const [shoulderLength, setShoulderLength] = useState<string | null>(null);
	const [photoShoulderLengthTaken, setPhotoShoulderLengthTaken] =
		useState<boolean>(false);
	const [shoulderWidth, setShoulderWidth] = useState<string | null>(null);
	const [photoShoulderWidthTaken, setPhotoShoulderWidthTaken] =
		useState<boolean>(false);
	const [frontBuild, setFrontBuild] = useState<string | null>(null);
	const [photoFrontBuildTaken, setPhotoFrontBuildTaken] =
		useState<boolean>(false);
	const [backBuild, setBackBuild] = useState<string | null>(null);
	const [photoBackBuildTaken, setPhotoBackBuildTaken] =
		useState<boolean>(false);
	const [neckWaistFront, setNeckWaistFront] = useState<string | null>(null);
	const [photoNeckWaistFrontTaken, setPhotoNeckWaistFrontTaken] =
		useState<boolean>(false);
	const [neckWaistBack, setNeckWaistBack] = useState<string | null>(null);
	const [photoNeckWaistBackTaken, setPhotoNeckWaistBackTaken] =
		useState<boolean>(false);
	const [neckPelvisFront, setNeckPelvisFront] = useState<string | null>(null);
	const [photoNeckPelvisFrontTaken, setPhotoNeckPelvisFrontTaken] =
		useState<boolean>(false);
	const [chest, setChest] = useState<string | null>(null);
	const [photoChestTaken, setPhotoChestTaken] = useState<boolean>(false);
	const [underChest, setUnderChest] = useState<string | null>(null);
	const [photoUnderChestTaken, setPhotoUnderChestTaken] =
		useState<boolean>(false);
	const [armCirc, setArmCirc] = useState<string | null>(null);
	const [photoArmCircTaken, setPhotoArmCircTaken] = useState<boolean>(false);
	const [armLength, setArmLength] = useState<string | null>(null);
	const [photoArmLengthTaken, setPhotoArmLengthTaken] =
		useState<boolean>(false);
	const [upperArmLength, setUpperArmLength] = useState<string | null>(null);
	const [photoUpperArmLengthTaken, setPhotoUpperArmLengthTaken] =
		useState<boolean>(false);
	const [waist, setWaist] = useState<string | null>(null);
	const [photoWaistTaken, setPhotoWaistTaken] = useState<boolean>(false);
	const [pelvis, setPelvis] = useState<string | null>(null);
	const [photoPelvisTaken, setPhotoPelvisTaken] = useState<boolean>(false);
	const [hips, setHips] = useState<string | null>(null);
	const [photoHipsTaken, setPhotoHipsTaken] = useState<boolean>(false);
	const [inseam, setInseam] = useState<string | null>(null);
	const [photoInseamTaken, setPhotoInseamTaken] = useState<boolean>(false);
	const [sideseam, setSideseam] = useState<string | null>(null);
	const [photoSideseamTaken, setPhotoSideseamTaken] = useState<boolean>(false);
	const [thigh, setThigh] = useState<string | null>(null);
	const [photoThighTaken, setPhotoThighTaken] = useState<boolean>(false);
	const [calf, setCalf] = useState<string | null>(null);
	const [photoCalfTaken, setPhotoCalfTaken] = useState<boolean>(false);

	const [front, setFront] = useState<boolean | null>(null);
	const [side, setSide] = useState<boolean | null>(null);
	const [selfie, setSelfie] = useState<boolean | null>(null);

	const value = useMemo(
		() => ({
			neck,
			setNeck,
			photoNeckTaken,
			setPhotoNeckTaken,
			shoulderLength,
			setShoulderLength,
			photoShoulderLengthTaken,
			setPhotoShoulderLengthTaken,
			shoulderWidth,
			setShoulderWidth,
			photoShoulderWidthTaken,
			setPhotoShoulderWidthTaken,
			frontBuild,
			setFrontBuild,
			photoFrontBuildTaken,
			setPhotoFrontBuildTaken,
			backBuild,
			setBackBuild,
			photoBackBuildTaken,
			setPhotoBackBuildTaken,
			neckWaistFront,
			setNeckWaistFront,
			photoNeckWaistFrontTaken,
			setPhotoNeckWaistFrontTaken,
			neckWaistBack,
			setNeckWaistBack,
			photoNeckWaistBackTaken,
			setPhotoNeckWaistBackTaken,
			neckPelvisFront,
			setNeckPelvisFront,
			photoNeckPelvisFrontTaken,
			setPhotoNeckPelvisFrontTaken,
			chest,
			setChest,
			photoChestTaken,
			setPhotoChestTaken,
			underChest,
			setUnderChest,
			photoUnderChestTaken,
			setPhotoUnderChestTaken,
			armCirc,
			setArmCirc,
			photoArmCircTaken,
			setPhotoArmCircTaken,
			armLength,
			setArmLength,
			photoArmLengthTaken,
			setPhotoArmLengthTaken,
			upperArmLength,
			setUpperArmLength,
			photoUpperArmLengthTaken,
			setPhotoUpperArmLengthTaken,
			waist,
			setWaist,
			photoWaistTaken,
			setPhotoWaistTaken,
			pelvis,
			setPelvis,
			photoPelvisTaken,
			setPhotoPelvisTaken,
			hips,
			setHips,
			photoHipsTaken,
			setPhotoHipsTaken,
			sideseam,
			setSideseam,
			photoSideseamTaken,
			setPhotoSideseamTaken,
			inseam,
			setInseam,
			photoInseamTaken,
			setPhotoInseamTaken,
			thigh,
			setThigh,
			photoThighTaken,
			setPhotoThighTaken,
			calf,
			setCalf,
			photoCalfTaken,
			setPhotoCalfTaken,
			front,
			setFront,
			side,
			setSide,
			selfie,
			setSelfie,
		}),
		[
			neck,
			setNeck,
			photoNeckTaken,
			setPhotoNeckTaken,
			shoulderLength,
			setShoulderLength,
			photoShoulderLengthTaken,
			setPhotoShoulderLengthTaken,
			shoulderWidth,
			setShoulderWidth,
			photoShoulderWidthTaken,
			setPhotoShoulderWidthTaken,
			frontBuild,
			setFrontBuild,
			photoFrontBuildTaken,
			setPhotoFrontBuildTaken,
			backBuild,
			setBackBuild,
			photoBackBuildTaken,
			setPhotoBackBuildTaken,
			neckWaistFront,
			setNeckWaistFront,
			photoNeckWaistFrontTaken,
			setPhotoNeckWaistFrontTaken,
			neckWaistBack,
			setNeckWaistBack,
			photoNeckWaistBackTaken,
			setPhotoNeckWaistBackTaken,
			neckPelvisFront,
			setNeckPelvisFront,
			photoNeckPelvisFrontTaken,
			setPhotoNeckPelvisFrontTaken,
			chest,
			setChest,
			photoChestTaken,
			setPhotoChestTaken,
			underChest,
			setUnderChest,
			photoUnderChestTaken,
			setPhotoUnderChestTaken,
			armCirc,
			setArmCirc,
			photoArmCircTaken,
			setPhotoArmCircTaken,
			armLength,
			setArmLength,
			photoArmLengthTaken,
			setPhotoArmLengthTaken,
			upperArmLength,
			setUpperArmLength,
			photoUpperArmLengthTaken,
			setPhotoUpperArmLengthTaken,
			waist,
			setWaist,
			photoWaistTaken,
			setPhotoWaistTaken,
			pelvis,
			setPelvis,
			photoPelvisTaken,
			setPhotoPelvisTaken,
			hips,
			setHips,
			photoHipsTaken,
			setPhotoHipsTaken,
			sideseam,
			setSideseam,
			photoSideseamTaken,
			setPhotoSideseamTaken,
			inseam,
			setInseam,
			photoInseamTaken,
			setPhotoInseamTaken,
			thigh,
			setThigh,
			photoThighTaken,
			setPhotoThighTaken,
			calf,
			setCalf,
			photoCalfTaken,
			setPhotoCalfTaken,
			front,
			setFront,
			side,
			setSide,
			selfie,
			setSelfie,
		]
	);

	return (
		<Context.Provider value={value}>
			<>{children}</>
		</Context.Provider>
	);
}

export const useMeasurements = () => {
	const context = useContext(Context);

	if (context === undefined) {
		throw new Error(" Must be used inside MeasurementsProvider");
	}

	return context;
};
