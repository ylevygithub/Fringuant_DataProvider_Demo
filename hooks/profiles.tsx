"use client";
import { useMeasurements } from "@/contexts/measurements";
import { useMemo } from "react";

export const useProfileCard = () => {
	const { setFront, setSelfie, setSide, front, selfie, side } =
		useMeasurements();

	interface profileTypeInterface {
		setter: (value: boolean | null) => void;
		profileType: "front" | "side" | "selfie";
		description: string;
		src: string;
		filename: string;
		value: typeof front;
	}

	const profileTypes: profileTypeInterface[] = useMemo(
		() => [
			{
				setter: setFront,
				value: front,
				profileType: "front",
				description: "Prise de photo pour tout le corps de face",
				src: "/mesures_body_pics/front.jpg",
				filename: "front.jpg",
			},
			{
				setter: setSelfie,
				value: selfie,
				profileType: "selfie",
				description: "Selfie",
				src: "/mesures_body_pics/selfie.jpg",
				filename: "selfie.jpg",
			},
			{
				setter: setSide,
				value: side,
				profileType: "side",
				description: "Prise de photo pour tout le corps de coté",
				src: "/mesures_body_pics/side.jpg",
				filename: "side.jpg",
			},
		],
		[setFront, front, setSelfie, selfie, setSide, side]
	);
	return {
		profileTypes,
	};
};
