"use client";

import { createContext, useContext, useMemo, useState } from "react";

type DemographicContext = {
	age: string | null;
	setAge: (age: string) => void;

	taille: string | null;
	setTaille: (taille: string) => void;

	poids: string | null;
	setPoids: (poids: string) => void;

	sexe: string | null;
	setSexe: (sexe: string) => void;

	csp: string | null;
	setCsp: (csp: string) => void;

	zone: string | null;
	setZone: (zone: string) => void;

	niveau: string | null;
	setNiveau: (niveau: string) => void;
};

const Context = createContext<DemographicContext | undefined>(undefined);

export default function DemographicProvider({
	children,
}: {
	children: React.ReactNode;
}) {
	const [age, setAge] = useState<string | null>(null);
	const [taille, setTaille] = useState<string | null>(null);
	const [poids, setPoids] = useState<string | null>(null);
	const [sexe, setSexe] = useState<string | null>(null);
	const [csp, setCsp] = useState<string | null>(null);
	const [zone, setZone] = useState<string | null>(null);
	const [niveau, setNiveau] = useState<string | null>(null);

	const value = useMemo(
		() => ({
			age,
			setAge,
			taille,
			setTaille,
			poids,
			setPoids,
			sexe,
			setSexe,
			csp,
			setCsp,
			zone,
			setZone,
			niveau,
			setNiveau
		}),
		[
			age,
			setAge,
			taille,
			setTaille,
			poids,
			setPoids,
			sexe,
			setSexe,
			csp,
			setCsp,
			zone,
			setZone,
			niveau,
			setNiveau
		]
	);

	return (
		<Context.Provider value={value}>
			<>{children}</>
		</Context.Provider>
	);
}

export const useDemographic = () => {
	const context = useContext(Context);

	if (context === undefined) {
		throw new Error(" Must be used inside DemographicProvider");
	}

	return context;
};
