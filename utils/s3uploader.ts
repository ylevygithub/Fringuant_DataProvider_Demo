"use-client";

import { getUrl } from "./actual-url";

export async function uploadMedias(s3Path: string, file: File): Promise<any> {
	const body = new FormData();
	body.set("file", file);
	body.set("s3Path", s3Path);
	const url = `${getUrl()}/api/s3upload`;
	let response: Response | null = null;

	if (body) {
		// if (localStorage.getItem("update") === null)
			response = await fetch(url, { method: "POST", body });
		// else
		// 	response = await fetch(url, { method: "PUT", body });
	}
	if (response?.status === 404) console.log('Uploading status 404. Response: ', response.json());
	if (response?.status === 401) console.log('Uploading status 401. Error uploading to S3. Response: ', response.json());
	if (response?.status === 500) console.error('Uploading status 500. Internal Server Error.');
	localStorage.removeItem("update");
	return await response?.json();
}

export async function upload(
	s3Path: string,
	body: MetadatInterface
): Promise<any> {
	const url = `${getUrl()}/api/s3upload`;

	const payload = { data: { ...body }, key: s3Path };

	const headers = { "Content-Type": "application/json" };
	const response = await fetch(url, {
		body: JSON.stringify(payload),
		method: "POST",
		headers,
	});
	return await response.json();
}

export interface MetadatInterface {
	subject: string | null;
	age: string | null;
	sex: string | null;
	height: string | null;
	weight: string | null;
	csp: string | null;
	zone: string | null;
	niveau: string | null;
	bodysizes: {
		neck: string | null;
		shoulderLength: string | null;
		shoulderWidth: string | null;
		frontBuild: string | null;
		backBuild: string | null;
		neckWaistFront: string | null;
		neckWaistBack: string | null;
		neckPelvisFront: string | null;
		chest: string | null;
		underChest: string | null;
		armCirc: string | null;
		armLength: string | null;
		upperArmLength: string | null;
		waist: string | null;
		pelvis: string | null;
		hips: string | null;
		sideseam: string | null;
		inseam: string | null;
		thigh: string | null;
		calf: string | null;
	};
}
