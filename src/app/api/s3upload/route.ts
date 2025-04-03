import { NextRequest, NextResponse } from "next/server";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import sharp from 'sharp';

const bucket = process.env.AWS_S3_DATA_PROVIDER_BUCKET_NAME;
let response = NextResponse.next();
response.headers.set("Access-Control-Allow-Origin", "*"); // Adjust this to be more restrictive if needed
response.headers.set("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
response.headers.set("Access-Control-Allow-Headers", "Content-Type, Authorization");

export async function PUT(request: NextRequest) {
		try {
			const headers = request.headers;
			const contentType = headers.get("content-type");
	
			if (contentType === "application/json") {
					const body = await request.json();
					if (body) {
							const { key, newData } = body; // Assuming 'newData' contains the new content
							const newDataBuffer = Buffer.from(JSON.stringify(newData));

							// Upload the modified content
							const uploadResult = await uploadToS3(key, newDataBuffer);
							response = NextResponse.json(uploadResult, { status: 200 });
							return response;
					}
			} else {
					const formData = await request.formData();
					const file: File = formData.get("file") as unknown as File;

					if (file) {
							const key = formData.get("s3Path") as string;
							const resizedImageBuffer = await resizeImage((await file.arrayBuffer()) as Buffer);
							
							// Upload the modified image
							const uploadResult = await uploadToS3(key, resizedImageBuffer);
							response = NextResponse.json(uploadResult, { status: 200 });
							return response;
					}
			}

			response = NextResponse.json({ error: "Invalid request format" }, { status: 400 });
			return response;
	} catch (error) {
			console.error("Error processing the request", error);
			return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
	}
}

export async function POST(request: NextRequest, res: NextResponse) {
	try {
		const headers = request.headers;
		const contentType = headers.get("content-type");

		if (contentType === "application/json") {
			const body = await request.json();
			if (body) {
				const { key, data } = body;
				const jsonData = JSON.stringify(data);

				const jsonBuffer = Buffer.from(jsonData);
				const uploadResult = await uploadToS3(key, jsonBuffer);
				return NextResponse.json(uploadResult, { status: 200 });
			}
		}
		const formData = await request.formData();

		const file: File = formData.get("file") as unknown as File;

		if (file) {
			const key = formData.get("s3Path") as string;
			const Body = (await file.arrayBuffer()) as Buffer;
			const resizedImageBuffer = await resizeImage(Body);
			const uploadResult = await uploadToS3(key, resizedImageBuffer);
			console.log("uploadResult after Sharp: ", uploadResult);
			return NextResponse.json(uploadResult, { status: 200 });
		}
		const response = "neither jpeg or json file was found";
		console.log(response);
		return NextResponse.json({ data: response }, { status: 404 });
	} catch (error) {
		console.error("Error uploading to S3", error);
		return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
	}
}

const resizeImage = async (imageBuffer: Buffer): Promise<Buffer> => {
	return sharp(imageBuffer)
			.resize(1280, 720, {
					fit: sharp.fit.inside,
					withoutEnlargement: true
			})
			.toBuffer();
};

const uploadToS3 = async (key: string, body: Buffer) => {
	const s3 = new S3Client({
		region: process.env.AWS_S3_REGION as string,
		endpoint: process.env.AWS_ENDPOINT_URL_S3 as string,
		forcePathStyle: true,
		disableHostPrefix: true,
		credentials: {
			accessKeyId: process.env.AWS_S3_ID as string,
			secretAccessKey: process.env.AWS_S3_SECRET_KEY as string,
		},
	});

	return s3.send(
		new PutObjectCommand({
			Bucket: bucket,
			Key: key,
			Body: body,
		})
	);
};
