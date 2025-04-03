import React, { useEffect, useState } from "react";
import { Text } from "@radix-ui/themes";

function Header() {
	const [isSmallScreen, setIsSmallScreen] = useState(false);

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

	return (
		<div>
			<div className={isSmallScreen ? "mobile_view__title" : "title_home_page"}>
				<Text size="8">
					Bienvenue dans le formulaire d&apos;envoi <br />
					de données
				</Text>
			</div>

			{isSmallScreen ? (
				""
			) : (
				<div>
					<br />
					<br />
					<br />
				</div>
			)}
		</div>
	);
}

export default Header;

/**apostrophe : &apos; */
