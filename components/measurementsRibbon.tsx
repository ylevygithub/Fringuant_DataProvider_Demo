import React from "react";
import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
// import { Tooltip } from "react-tooltip";
import PopOverMedia, { MyTooltip } from "@/components/myTooltip";
import { Badge, Button, Tooltip } from "@radix-ui/themes";
import { useRouter } from "next/navigation";
import { useUser } from "@/contexts/user";
import { inputRanges, validateInputRange } from "@/utils/validateInputRange";
import { SvgGreenCheck, SvgGrayCheck, SvgCamera, SvgUpdate } from "./mySvg";

function MeasurementRibbon(props: {
	popOverMediaName: string;
	popOverMediaInitials: string;
	popOverMediaPath: string;
	popOverMediaImageName: string;
	takeMeasurementName: string;
	contextKeyName: string;
	contextValue: string | null;
	photoTaken: boolean;
	contextPhotoTakenName: string;
	setter: (contextValue: string | null) => void;
}) {
	const {
		popOverMediaName,
		popOverMediaInitials,
		popOverMediaPath,
		popOverMediaImageName,
		takeMeasurementName,
		contextKeyName,
		contextValue,
		photoTaken,
		setter,
	} = props;
	const [isSmallScreen, setIsSmallScreen] = useState(false);
	const [valueCm, setValueCm] = useState(`Saisir la valeur de la mensuration.\n Appuyez sur le ? pour plus d’informations`); 
	const router = useRouter();
	const numbersRegex = /^\d+$/;

	const { setPending } = useUser();

	const [measurementPlaceholder, setMeasurementPlaceholder] = useState('en cm'); 
	const [isContextLost, setIsContextLost] = useState(false);
	const [greenCheck, setGreenCheck] = useState(false);
	const ranges = inputRanges;
	const [ifthLS, setIfthLs] = useState(false);

	useEffect(() => {
		if (localStorage.getItem("ifth") === 'true') {
			setIfthLs(true);
		}
		else
			console.log(ifthLS);
	}, []);

	// Écoutez la largeur de la fenêtre et mettez à jour isSmallScreen en conséquence
	useEffect(() => {
		const mediaQuery = window.matchMedia("(max-width: 600px)"); // Définissez votre requête média ici
		const updateIsSmallScreen = () => setIsSmallScreen(mediaQuery.matches);

		mediaQuery.addListener(updateIsSmallScreen);
		updateIsSmallScreen(); // Appelez-le une fois pour la valeur initiale

		return () => {
			mediaQuery.removeListener(updateIsSmallScreen);
		};
	}, []);

	const handleTakeMeasurement = (mesureName: string) => {
		setPending(true);
		router.push(
			`/measurements/verify/global_verification?mesure_key=${mesureName}`
		);
	};

	// Gestionnaire d'événements pour reset le field, sa valeur dans le localStorage et afficher l'erreur dans le placeholder, le tout uniquement en cas d'erreur.
	const handleMeasurementBlur = (event: React.ChangeEvent<HTMLInputElement>) => {
		const inputValue = event.target.value;
		if (!inputValue) setGreenCheck(false);
		try {
			const mensurations = localStorage.getItem("mensurationData");
			if (mensurations) {
				const mensurationData = JSON.parse(mensurations);
				const isInValidRange = validateInputRange(contextKeyName, inputValue);
				if (!isInValidRange) {
					const range = ranges[contextKeyName];
					// const ranges = inputRanges[contextKeyName];
					console.log('Out of range');
					console.log('contextKeyName: ', contextKeyName);
					console.log('inputRanges of ', range);
					console.log('Is min : ', inputRanges[contextKeyName].min);
					console.log('Is max : ', inputRanges[contextKeyName].max);
					setter('');
					setMeasurementPlaceholder('Valeur Erronée');
					setValueCm(`Valeur hors plage (${range.min}-${range.max})`);
					// console.log('ValueCm: ', valueCm);
					setGreenCheck(false);
					mensurationData[contextKeyName] = '';
					localStorage.setItem(
						"mensurationData",
						JSON.stringify(mensurationData)
					);
				}
				else if (inputValue === '') {
					const range = ranges[contextKeyName];
					setValueCm(`Saisir la valeur de la mensuration.\n En respectant la fourchette indiquée.`);
					setMeasurementPlaceholder(`(${range.min}-${range.max})`);
				}
				else {
					setMeasurementPlaceholder('');
					setValueCm(`👍`);
					setGreenCheck(true);
					setIsContextLost(!handleContextLost(inputValue));
				}
			}
		} catch (e) {}
	};
	
	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const inputValue = event.target.value;
		const isValidNumber = inputValue === "" || numbersRegex.test(inputValue);
		if (isValidNumber) {
			setter(inputValue === "" ? "" : inputValue);
			try {
				const mensurations = localStorage.getItem("mensurationData");
				if (mensurations) {
					const mensurationData = JSON.parse(mensurations);
					mensurationData[contextKeyName] = inputValue;
					localStorage.setItem(
						"mensurationData",
						JSON.stringify(mensurationData)
					);
				}
			} catch (e) {}
		}
	};

	const handleUpdateMeasurement = (mesureName: string) => {
		localStorage.setItem("update", 'true');
		handleTakeMeasurement(mesureName);
	};

	const handleContextLost = (inputValue: string) => {
		const mensurations = localStorage.getItem("mensurationData");		
		
		if (mensurations) {
			const mensurationData = JSON.parse(mensurations);
			if (mensurationData[contextKeyName] && inputValue) {
				setter(mensurationData[contextKeyName]);
				return true;
			}
			else {
				console.log("mensurationData[contextKeyName]: ", mensurationData[contextKeyName]);
				console.log("contextValue: ", contextValue);
				return false;
			}
		}
	}

	return (
		<li className={isSmallScreen && ifthLS === false ? "single-line-li" : !isSmallScreen && ifthLS === false ? "data-list" : ifthLS === true ? "single-line-li-ifth" : "single-line-li-ifth"}>
			{/* <MyTooltip name={popOverMediaName} initials={popOverMediaInitials} /> */}

			{/* <Tooltip
				render={({ content, activeAnchor }) => (
					// <div className="avoid_tooltip__overflow">{valueCm}</div>
				)}
				id="my-tooltip"
			/> */}
			<Tooltip content={valueCm}>
				<Input
					className={`input_mes_new ${measurementPlaceholder === 'Valeur Erronée' ? 'red-placeholder' : ''} ${measurementPlaceholder === '' ? 'green-placeholder' : ''}`}
					data-tooltip-id="my-tooltip"
					data-tooltip-place="top"
					placeholder={measurementPlaceholder}
					type="text"
					value={contextValue ?? ""}
					onChange={handleInputChange}
					onBlur={handleMeasurementBlur}
					style={{ marginRight: "20px" }}
				/>
			</Tooltip>
			<PopOverMedia myImage={popOverMediaPath} name={popOverMediaImageName} />
			{
				ifthLS === false ?

				(
					<>
						<Button
							style={photoTaken === false ? { cursor: 'pointer'} : {}}
							color="gray"
							size="1"
							onClick={() => handleTakeMeasurement(takeMeasurementName)}
							disabled={photoTaken}
						>
							<SvgCamera/>
						</Button>
						{!contextValue && photoTaken === false ? (
							<SvgGrayCheck/>
						) : contextValue && photoTaken ? (
							<SvgGreenCheck/>
						) : (
							<SvgGrayCheck/>
						)}

						<Button
							style={photoTaken === true ? { cursor: 'pointer'} : {}}
							color="gray"
							size="1"
							onClick={() => handleUpdateMeasurement(takeMeasurementName)}
							disabled={!photoTaken}
						>
							<SvgUpdate/>
						</Button>
						</>
				)
				:
				ifthLS === true && greenCheck === true ? <SvgGreenCheck/> :
				ifthLS === true && greenCheck === false ? <SvgGrayCheck/> :
				'Le programme nécessite une maj'
				}
		</li>
	);
}

export default MeasurementRibbon;
