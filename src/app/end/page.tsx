"use client"

import React, { useEffect, useState } from 'react'
import Header_logo from '../Header_logo'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

export default function EndPage() {
	const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
		const mediaQuery = window.matchMedia("(max-width: 600px)");
		const updateIsSmallScreen = () => setIsSmallScreen(mediaQuery.matches);

		mediaQuery.addListener(updateIsSmallScreen);
		updateIsSmallScreen(); // Appelez-le une fois pour la valeur initiale

		return () => {
			mediaQuery.removeListener(updateIsSmallScreen);
		};
	}, []);

  return (
    <div>
      <Header_logo />
			<br />
			<Card
				className={
					isSmallScreen
						? "mobile_view__connexionCard card"
						: "w-full max-w-xl container"
				}
			>
				<CardHeader>
					<CardTitle className="text-primary container">
            Merci d&apos;avoir complété votre profil
					</CardTitle>
				</CardHeader>
        <CardContent className="space-y-6">
          <div className="capture_success">
						<FontAwesomeIcon
							size="4x"
							icon={faCheck}
							beat
							style={{ color: "#5bd742", marginTop: "10px" }}
						/>
					</div>
        </CardContent>
      </Card>
    </div>
  )
}
