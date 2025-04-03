"use client";

import React, { useEffect } from "react";
import {
	useMeasurementsRibbon,
	MeasurementRibbonInterface,
} from "@/hooks/measurements";
import MensurationVerification from "./global_verification";
import { useState } from "react";
import Header_logo from "@/src/app/Header_logo";
import { useSearchParams } from "next/navigation";

export default function VerifPage() {
	const searchParams = useSearchParams();
	const mesureKey = searchParams.get("mesure_key");

	const { mensurationsArray } = useMeasurementsRibbon();

	const [mensuration, setMensuration] = useState(
		{} as MeasurementRibbonInterface
	);

	useEffect(() => {
		const measurment: MeasurementRibbonInterface | undefined =
			mensurationsArray.find(
				(mensuration) => mensuration.takeMeasurementName === mesureKey
			);
		if (measurment) setMensuration(measurment);
	}, [mesureKey, mensurationsArray]);

	return (
		<div>
			<Header_logo />
			<br />
			<MensurationVerification mensuration={mensuration} />
		</div>
	);
}
