"use client";

import { createContext, useContext, useMemo, useState } from "react";

type MetadataContext = {
    mailRegistered: boolean | null;
    setMailRegistered: (mailRegistered: boolean) => void;

    demographRegistered: boolean | null;
    setDemographRegistered: (demographRegistered: boolean) => void;

    mensurationsRegistered: boolean | null;
    setMensurationsRegistered: (mensurationsRegistered: boolean) => void;
};

const Context = createContext<MetadataContext | undefined>(undefined);

export default function MetadataProvider({
	children,
}: {
	children: React.ReactNode;
}) {

  const [mailRegistered, setMailRegistered] = useState<boolean | null>(null);
	const [demographRegistered, setDemographRegistered] = useState<boolean | null>(null);
	const [mensurationsRegistered, setMensurationsRegistered] = useState<boolean | null>(null);

	const value = useMemo(
		() => ({
      mailRegistered,
      setMailRegistered,
      demographRegistered,
      setDemographRegistered,
      mensurationsRegistered,
      setMensurationsRegistered,
		}),
		[
      mailRegistered,
      setMailRegistered,
      demographRegistered,
      setDemographRegistered,
      mensurationsRegistered,
      setMensurationsRegistered,
		]
	);

	return (
		<Context.Provider value={value}>
			<>{children}</>
		</Context.Provider>
	);
}

export const useMetadata = () => {
	const context = useContext(Context);

	if (context === undefined) {
		throw new Error(" Must be used inside MetadataProvider");
	}

	return context;
};
