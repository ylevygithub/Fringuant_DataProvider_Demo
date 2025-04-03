"use client";

import { createContext, useContext, useMemo, useState } from "react";
import { SupplierType } from "@/types";

type UserContext = {
	providerId: string | null;
	setProviderId: (providerId: string) => void;

	email: string | null;
	setEmail: (email: string) => void;

	supplier: SupplierType | null;
	setSupplier: (supplier: SupplierType) => void;

	identifiant: string | null;
	setIdentifiant: (identifiant: string) => void;

	pending: boolean;
	setPending: (pending: boolean) => void;
};

const Context = createContext<UserContext | undefined>(undefined);

export default function UserProvider({
	children,
}: {
	children: React.ReactNode;
}) {
	const [providerId, setProviderId] = useState<string | null>(null);
	const [email, setEmail] = useState<string | null>(null);
	const [supplier, setSupplier] = useState<SupplierType | null>(null);
	const [identifiant, setIdentifiant] = useState<string | null>(null);
	const [pending, setPending] = useState<boolean>(false);

	const value = useMemo(
		() => ({
			providerId,
			setProviderId,
			email,
			setEmail,
			supplier,
			setSupplier,
			identifiant,
			setIdentifiant,
			pending,
			setPending,
		}),
		[
			providerId,
			setProviderId,
			email,
			setEmail,
			supplier,
			setSupplier,
			identifiant,
			setIdentifiant,
			pending,
			setPending,
		]
	);

	return (
		<Context.Provider value={value}>
			<>{children}</>
		</Context.Provider>
	);
}

export const useUser = () => {
	const context = useContext(Context);

	if (context === undefined) {
		throw new Error(" Must be used inside UserProvider");
	}

	return context;
};
