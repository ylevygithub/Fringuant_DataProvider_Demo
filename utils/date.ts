import moment from "moment";

export function getCurrentDateTimeString() {
	const now = moment();
	return now.format("YYYYMMDDHHmmss");
}

export const currentISOWeekNumber = `${moment().year()}${moment().isoWeek()}`;
