"use client";

import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import Image from "next/image";
import React from "react";
import { Tooltip } from "react-tooltip";
import { IconButton, Text } from "@radix-ui/themes";
import { useState } from "react";
import * as Popover from "@radix-ui/react-popover";
import { Cross2Icon } from "@radix-ui/react-icons";
import "../src/styles/tooltipStyle.css";
import { SvgQuestionMark } from "./mySvg";

function PopOverMedia(props: { myImage: string; name: string }) {
	const { name, myImage } = props;

	return (
		<Popover.Root>
			<Popover.Trigger asChild>
				<IconButton size="1" radius="full" style={{ background: "white", cursor: 'pointer' }}>
					<SvgQuestionMark/>
				</IconButton>
			</Popover.Trigger>
			<Popover.Portal>
				<Popover.Content
					className="PopoverContent"
					sideOffset={5}
					align="center"
				>
					<Image width={170} height={170} src={myImage} alt="Image" />
					<Text className="TooltipContentText">{name}</Text>
					<Popover.Close className="PopoverClose" aria-label="Close">
						<Cross2Icon />
					</Popover.Close>
					<Popover.Arrow className="PopoverArrow" />
				</Popover.Content>
			</Popover.Portal>
		</Popover.Root>
	);
}

export function MyTooltip(props: { name: string; initials: string }) {
	const { name, initials } = props;
	return (
		<div>
			<Tooltip id="my-tooltip" />
			<Text
				data-tooltip-id="my-tooltip"
				data-tooltip-content={name}
				data-tooltip-place="top"
			>
				{" "}
				{initials}{" "}
			</Text>
		</div>
	);
}
export default PopOverMedia;
