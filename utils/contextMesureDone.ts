"use client"
import { useMeasurements } from "@/contexts/measurements";
import { useEffect, useState } from "react";

export const ContextMesureDoneWithoutPics = (profileData: any, mensurationsData: any) => {
	const profile = JSON.parse(profileData!);
	const mensurations = JSON.parse(mensurationsData!);
	const {
		neck, photoNeckTaken, shoulderLength, photoShoulderLengthTaken, shoulderWidth, photoShoulderWidthTaken, frontBuild, 
		photoFrontBuildTaken, backBuild, photoBackBuildTaken, neckWaistFront, photoNeckWaistFrontTaken, neckWaistBack, 
		photoNeckWaistBackTaken, neckPelvisFront, photoNeckPelvisFrontTaken, chest, photoChestTaken, underChest, photoUnderChestTaken, 
		armCirc, photoArmCircTaken, armLength, photoArmLengthTaken, upperArmLength, photoUpperArmLengthTaken, waist, photoWaistTaken, 
		pelvis, photoPelvisTaken, hips, photoHipsTaken, sideseam, photoSideseamTaken, inseam, photoInseamTaken, thigh, photoThighTaken, 
		calf, photoCalfTaken
	} = useMeasurements();
	
	const { setNeck, setPhotoNeckTaken, setShoulderLength, setPhotoShoulderLengthTaken,
		setShoulderWidth, setPhotoShoulderWidthTaken, setFrontBuild, setPhotoFrontBuildTaken, setBackBuild, setPhotoBackBuildTaken,
		setNeckWaistBack, setPhotoNeckWaistBackTaken, setNeckWaistFront, setPhotoNeckWaistFrontTaken, setNeckPelvisFront,
		setPhotoNeckPelvisFrontTaken, setChest, setPhotoChestTaken, setUnderChest, setPhotoUnderChestTaken, setArmCirc,
		setPhotoArmCircTaken, setArmLength, setPhotoArmLengthTaken, setUpperArmLength, setPhotoUpperArmLengthTaken, setWaist,
		setPhotoWaistTaken, setPelvis, setPhotoPelvisTaken, setHips, setPhotoHipsTaken, setSideseam, setPhotoSideseamTaken,
		setInseam, setPhotoInseamTaken, setThigh, setPhotoThighTaken, setCalf, setPhotoCalfTaken
		 } =
		useMeasurements();
	
	
	if (
		neck && shoulderLength && shoulderWidth && frontBuild && backBuild && neckWaistBack && neckWaistFront && neckPelvisFront && 
		chest && underChest && armCirc && armLength && upperArmLength && waist && pelvis && hips && sideseam && inseam && thigh && 
		calf
	)
		return true;
	else {
		if (neck === null || "") {
			if (mensurations?.neck !== (null || "")) setNeck(mensurations?.neck);
			else console.log("check neck");
		}
		else if (shoulderLength === null || "") {
			if (mensurations?.shoulderLength !== (null || "")) setShoulderLength(mensurations?.shoulderLength);
			else console.log("check shoulderLength");
		}
		else if (shoulderWidth === null || "") {
			if (mensurations?.shoulderWidth !== (null || "")) setShoulderWidth(mensurations?.shoulderWidth);
			else console.log("check shoulderWidth");
		}
		else if (frontBuild === null || "") {
			if (mensurations?.frontBuild !== (null || "")) setFrontBuild(mensurations?.frontBuild);
			else console.log("check frontBuild");
		}
		else if (backBuild === null || "") {
			if (mensurations?.backBuild !== (null || "")) setBackBuild(mensurations?.backBuild);
			else console.log("check backBuild");
		}
		else if (neckWaistBack === null || "") {
			if (mensurations?.neckWaistBack !== (null || "")) setNeckWaistBack(mensurations?.neckWaistBack);
			else console.log("check neckWaistBack");
		}
		else if (neckWaistFront === null || "") {
			if (mensurations?.neckWaistFront !== (null || "")) setNeckWaistFront(mensurations?.neckWaistFront);
			else console.log("check neckWaistFront");
		}
		else if (neckPelvisFront === null || "") {
			if (mensurations?.neckPelvisFront !== (null || "")) setNeckPelvisFront(mensurations?.neckPelvisFront);
			else console.log("check neckPelvisFront");
		}
		else if (chest === null || "") {
			if (mensurations?.chest !== (null || "")) setChest(mensurations?.chest);
			else console.log("check chest");
		}
		else if (underChest === null || "") {
			if (mensurations?.underChest !== (null || "")) setUnderChest(mensurations?.underChest);
			else console.log("check underChest");
		}
		else if (armCirc === null || "") {
			if (mensurations?.armCirc !== (null || "")) setArmCirc(mensurations?.armCirc);
			else console.log("check armCirc");
		}
		else if (armLength === null || "") {
			if (mensurations?.armLength !== (null || "")) setArmLength(mensurations?.armLength);
			else console.log("check armLength");
		}
		else if (upperArmLength === null || "") {
			if (mensurations?.upperArmLength !== (null || "")) setUpperArmLength(mensurations?.upperArmLength);
			else console.log("check upperArmLength");
		}
		else if (waist === null || "") {
			if (mensurations?.waist !== (null || "")) setWaist(mensurations?.waist);
			else console.log("check waist");
		}
		else if (pelvis === null || "") {
			if (mensurations?.pelvis !== (null || "")) setPelvis(mensurations?.pelvis);
			else console.log("check pelvis");
		}
		else if (hips === null || "") {
			if (mensurations?.hips !== (null || "")) setHips(mensurations?.hips);
			else console.log("check hips");
		}
		else if (sideseam === null || "") {
			if (mensurations?.sideseam !== (null || "")) setSideseam(mensurations?.sideseam);
			else console.log("check sideseam");
		}
		else if (inseam === null || "") {
			if (mensurations?.inseam !== (null || "")) setInseam(mensurations?.inseam);
			else console.log("check inseam");
		}
		else if (thigh === null || "") {
			if (mensurations?.thigh !== (null || "")) setThigh(mensurations?.thigh);
			else console.log("check thigh");
		}
		else if (calf === null || "") {
			if (mensurations?.calf !== (null || "")) setCalf(mensurations?.calf);
			else console.log("check calf");
		}
		return false;
	}
};
	

const ContextMesureDone = (profileData: any, mensurationsData: any, validationPhotoTaken: any) => {
	const profile = JSON.parse(profileData!);
	const mensurations = JSON.parse(mensurationsData!);
	const validationPhoto = JSON.parse(validationPhotoTaken!);
	const {
		neck, photoNeckTaken, shoulderLength, photoShoulderLengthTaken, shoulderWidth, photoShoulderWidthTaken, frontBuild, 
		photoFrontBuildTaken, backBuild, photoBackBuildTaken, neckWaistFront, photoNeckWaistFrontTaken, neckWaistBack, 
		photoNeckWaistBackTaken, neckPelvisFront, photoNeckPelvisFrontTaken, chest, photoChestTaken, underChest, photoUnderChestTaken, 
		armCirc, photoArmCircTaken, armLength, photoArmLengthTaken, upperArmLength, photoUpperArmLengthTaken, waist, photoWaistTaken, 
		pelvis, photoPelvisTaken, hips, photoHipsTaken, sideseam, photoSideseamTaken, inseam, photoInseamTaken, thigh, photoThighTaken, 
		calf, photoCalfTaken
	} = useMeasurements();
	
	const { setNeck, setPhotoNeckTaken, setShoulderLength, setPhotoShoulderLengthTaken,
		setShoulderWidth, setPhotoShoulderWidthTaken, setFrontBuild, setPhotoFrontBuildTaken, setBackBuild, setPhotoBackBuildTaken,
		setNeckWaistBack, setPhotoNeckWaistBackTaken, setNeckWaistFront, setPhotoNeckWaistFrontTaken, setNeckPelvisFront,
		setPhotoNeckPelvisFrontTaken, setChest, setPhotoChestTaken, setUnderChest, setPhotoUnderChestTaken, setArmCirc,
		setPhotoArmCircTaken, setArmLength, setPhotoArmLengthTaken, setUpperArmLength, setPhotoUpperArmLengthTaken, setWaist,
		setPhotoWaistTaken, setPelvis, setPhotoPelvisTaken, setHips, setPhotoHipsTaken, setSideseam, setPhotoSideseamTaken,
		setInseam, setPhotoInseamTaken, setThigh, setPhotoThighTaken, setCalf, setPhotoCalfTaken
		 } =
		useMeasurements();
	
	
	if (
		neck && photoNeckTaken && shoulderLength && photoShoulderLengthTaken && shoulderWidth && photoShoulderWidthTaken && 
		frontBuild && photoFrontBuildTaken && backBuild && photoBackBuildTaken && neckWaistBack && photoNeckWaistBackTaken && 
		neckWaistFront && photoNeckWaistFrontTaken && neckPelvisFront && photoNeckPelvisFrontTaken && chest && photoChestTaken && 
		underChest && photoUnderChestTaken && armCirc && photoArmCircTaken && armLength && photoArmLengthTaken && upperArmLength && 
		photoUpperArmLengthTaken && waist && photoWaistTaken && pelvis && photoPelvisTaken && hips && photoHipsTaken && sideseam && 
		photoSideseamTaken && inseam && photoInseamTaken && thigh && photoThighTaken && calf && photoCalfTaken
	)
		return true;
	else {
		if (neck === null || "") {
			if (mensurations?.neck !== (null || "")) setNeck(mensurations?.neck);
			else console.log("check neck");
		}
		else if (photoNeckTaken === false) {
			if (validationPhoto?.photoNeckTaken === true) setPhotoNeckTaken(true);
			else console.log("check photoNeck");
		}
		else if (shoulderLength === null || "") {
			if (mensurations?.shoulderLength !== (null || "")) setShoulderLength(mensurations?.shoulderLength);
			else console.log("check shoulderLength");
		}
		else if (photoShoulderLengthTaken === false) {
			if (validationPhoto?.photoShoulderLengthTaken === true) setPhotoShoulderLengthTaken(true);
			else console.log("check photoShoulderLength");
		}
		else if (shoulderWidth === null || "") {
			if (mensurations?.shoulderWidth !== (null || "")) setShoulderWidth(mensurations?.shoulderWidth);
			else console.log("check shoulderWidth");
		}
		else if (photoShoulderWidthTaken === false) {
			if (validationPhoto?.photoShoulderWidthTaken === true) setPhotoShoulderWidthTaken(true);
			else console.log("check photoShoulderWidthTaken");
		}
		else if (frontBuild === null || "") {
			if (mensurations?.frontBuild !== (null || "")) setFrontBuild(mensurations?.frontBuild);
			else console.log("check frontBuild");
		}
		else if (photoFrontBuildTaken === false) {
			if (validationPhoto?.photoFrontBuildTaken === true) setPhotoFrontBuildTaken(true);
			else console.log("check photoFrontBuildTaken");
		}
		else if (backBuild === null || "") {
			if (mensurations?.backBuild !== (null || "")) setBackBuild(mensurations?.backBuild);
			else console.log("check backBuild");
		}
		else if (photoBackBuildTaken === false) {
			if (validationPhoto?.photoBackBuildTaken === true) setPhotoBackBuildTaken(true);
			else console.log("check photoBackBuildTaken");
		}
		else if (neckWaistBack === null || "") {
			if (mensurations?.neckWaistBack !== (null || "")) setNeckWaistBack(mensurations?.neckWaistBack);
			else console.log("check neckWaistBack");
		}
		else if (photoNeckWaistBackTaken === false) {
			if (validationPhoto?.photoNeckWaistBackTaken === true) setPhotoNeckWaistBackTaken(true);
			else console.log("check photoNeckWaistBackTaken");
		}
		else if (neckWaistFront === null || "") {
			if (mensurations?.neckWaistFront !== (null || "")) setNeckWaistFront(mensurations?.neckWaistFront);
			else console.log("check neckWaistFront");
		}
		else if (photoNeckWaistFrontTaken === false) {
			if (validationPhoto?.photoNeckWaistFrontTaken === true) setPhotoNeckWaistFrontTaken(true);
			else console.log("check photoNeckWaistFrontTaken");
		}
		else if (neckPelvisFront === null || "") {
			if (mensurations?.neckPelvisFront !== (null || "")) setNeckPelvisFront(mensurations?.neckPelvisFront);
			else console.log("check neckPelvisFront");
		}
		else if (photoNeckPelvisFrontTaken === false) {
			if (validationPhoto?.photoNeckPelvisFrontTaken === true) setPhotoNeckPelvisFrontTaken(true);
			else console.log("check photoNeckPelvisFrontTaken");
		}
		else if (chest === null || "") {
			if (mensurations?.chest !== (null || "")) setChest(mensurations?.chest);
			else console.log("check chest");
		}
		else if (photoChestTaken === false) {
			if (validationPhoto?.photoChestTaken === true) setPhotoChestTaken(true);
			else console.log("check photoChestTaken");
		}
		else if (underChest === null || "") {
			if (mensurations?.underChest !== (null || "")) setUnderChest(mensurations?.underChest);
			else console.log("check underChest");
		}
		else if (photoUnderChestTaken === false) {
			if (validationPhoto?.photoUnderChestTaken === true) setPhotoUnderChestTaken(true);
			else console.log("check photoUnderChestTaken");
		}
		else if (armCirc === null || "") {
			if (mensurations?.armCirc !== (null || "")) setArmCirc(mensurations?.armCirc);
			else console.log("check armCirc");
		}
		else if (photoArmCircTaken === false) {
			if (validationPhoto?.photoArmCircTaken === true) setPhotoArmCircTaken(true);
			else console.log("check photoArmCircTaken");
		}
		else if (armLength === null || "") {
			if (mensurations?.armLength !== (null || "")) setArmLength(mensurations?.armLength);
			else console.log("check armLength");
		}
		else if (photoArmLengthTaken === false) {
			if (validationPhoto?.photoArmLengthTaken === true) setPhotoArmLengthTaken(true);
			else console.log("check photoArmLengthTaken");
		}
		else if (upperArmLength === null || "") {
			if (mensurations?.upperArmLength !== (null || "")) setUpperArmLength(mensurations?.upperArmLength);
			else console.log("check upperArmLength");
		}
		else if (photoUpperArmLengthTaken === false) {
			if (validationPhoto?.photoUpperArmLengthTaken === true) setPhotoUpperArmLengthTaken(true);
			else console.log("check photoUpperArmLengthTaken");
		}
		else if (waist === null || "") {
			if (mensurations?.waist !== (null || "")) setWaist(mensurations?.waist);
			else console.log("check waist");
		}
		else if (photoWaistTaken === false) {
			if (validationPhoto?.photoWaistTaken === true) setPhotoWaistTaken(true);
			else console.log("check photoWaistTaken");
		}
		else if (pelvis === null || "") {
			if (mensurations?.pelvis !== (null || "")) setPelvis(mensurations?.pelvis);
			else console.log("check pelvis");
		}
		else if (photoPelvisTaken === false) {
			if (validationPhoto?.photoPelvisTaken === true) setPhotoPelvisTaken(true);
			else console.log("check photoPelvisTaken");
		}
		else if (hips === null || "") {
			if (mensurations?.hips !== (null || "")) setHips(mensurations?.hips);
			else console.log("check hips");
		}
		else if (photoHipsTaken === false) {
			if (validationPhoto?.photoHipsTaken === true) setPhotoHipsTaken(true);
			else console.log("check photoHipsTaken");
		}
		else if (sideseam === null || "") {
			if (mensurations?.sideseam !== (null || "")) setSideseam(mensurations?.sideseam);
			else console.log("check sideseam");
		}
		else if (photoSideseamTaken === false) {
			if (validationPhoto?.photoSideseamTaken === true) setPhotoSideseamTaken(true);
			else console.log("check photoSideseamTaken");
		}
		else if (inseam === null || "") {
			if (mensurations?.inseam !== (null || "")) setInseam(mensurations?.inseam);
			else console.log("check inseam");
		}
		else if (photoInseamTaken === false) {
			if (validationPhoto?.photoInseamTaken === true) setPhotoInseamTaken(true);
			else console.log("check photoInseamTaken");
		}
		else if (thigh === null || "") {
			if (mensurations?.thigh !== (null || "")) setThigh(mensurations?.thigh);
			else console.log("check thigh");
		}
		else if (photoThighTaken === false) {
			if (validationPhoto?.photoThighTaken === true) setPhotoThighTaken(true);
			else console.log("check photoThighTaken");
		}
		else if (calf === null || "") {
			if (mensurations?.calf !== (null || "")) setCalf(mensurations?.calf);
			else console.log("check calf");
		}
		else if (photoCalfTaken === false) {
			if (validationPhoto?.photoCalfTaken === true) setPhotoCalfTaken(true);
			else console.log("check photoCalfTaken");
		}
		return false;
	}
};

// export const LocalStorageDone = () => {

// 	const [demographicDone, setDemographicDone] = useState(false);
// 	const [profileDone, setProfileDone] = useState(false);
// 	const [mensurationDone, setMensurationDone] = useState(false);
// 	const [photosDone, setPhotosDone] = useState(false);

// 		const demographicData = localStorage.getItem("demographicData");
// 		const profileData = localStorage.getItem("profileData");
// 		const mensurationsData = localStorage.getItem("mensurationData");
// 		const photoValidations = localStorage.getItem("photoValidations");
// 		if (demographicData)
// 			setDemographicDone(true);
// 		else if (profileData !== null) {
// 			const profile = JSON.parse(profileData);
// 			if (profile.front === "true" && profile.selfie === 'true' && profile.side === 'true') setProfileDone(true);
// 		}
// 		else if (mensurationsData !== null) {
// 			const mensuration = JSON.parse(mensurationsData);
// 			if (mensuration.armCirc === "true" && mensuration.armLength === 'true' && mensuration.backBuild === 'true' &&
// 					mensuration.calf === 'true'	&& mensuration.chest === 'true' && mensuration.frontBuild === 'true' &&
// 					mensuration.hips === 'true' && mensuration.inseam === 'true' && mensuration.neck === 'true' &&
// 					mensuration.neckPelvisFront === 'true' && mensuration.neckWaistBack === 'true' && mensuration.neckWaistFront === 'true' &&
// 					mensuration.pelvis === 'true' && mensuration.shoulderLength === 'true' && mensuration.shoulderWidth === 'true' &&
// 					mensuration.sideseam === 'true' && mensuration.thigh === 'true' && mensuration.underChest === 'true' &&
// 					mensuration.upperArmLength === 'true' && mensuration.waist === 'true' ) setMensurationDone(true);
// 		}
// 		else if (photoValidations !== null) {
// 			const photo = JSON.parse(photoValidations);
// 			if (photo.photoArmCircTaken === "true" && photo.photoArmLengthTaken === 'true' && photo.photoBackBuildTaken === 'true' &&
// 					photo.photoCalfTaken === 'true'	&& photo.photoChestTaken === 'true' && photo.photoFrontBuildTaken === 'true' &&
// 					photo.photoHipsTaken === 'true' && photo.photoInseamTaken === 'true' && photo.photoNeckPelvisFrontTaken === 'true' &&
// 					photo.photoNeckTaken === 'true' && photo.photoNeckWaistBackTaken === 'true' && photo.photoNeckWaistFrontTaken === 'true' &&
// 					photo.photoPelvisTaken === 'true' && photo.photoShoulderLengthTaken === 'true' && photo.photoShoulderWidthTaken === 'true' &&
// 					photo.photoSideseamTaken === 'true' && photo.photoThighTaken === 'true' && photo.photoUnderChestTaken === 'true' &&
// 					photo.photoUpperArmLengthTaken === 'true' && photo.photoWaistTaken === 'true' ) setPhotosDone(true);
// 		}
// 		else if (demographicDone && profileDone && mensurationDone && photosDone)
// 			return true;
// 		else return false;
// };


export default ContextMesureDone;
