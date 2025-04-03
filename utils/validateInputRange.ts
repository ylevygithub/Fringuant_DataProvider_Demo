
interface Range {
  min: number;
  max: number;
}

interface InputRanges {
  [key: string]: Range;
}

export const inputRanges: InputRanges = {
  "age": { min: 0, max: 110 },
  "taille": { min: 80, max: 250 },
  "poids": { min: 10, max: 200 },
  "neck": { min: 15, max: 50 },
  "shoulderLength": { min: 3, max: 25 },
  "shoulderWidth": { min: 15, max: 60 },
  "frontBuild": { min: 10, max: 50 },
  "backBuild": { min: 10, max: 60 },
  "neckWaistBack": { min: 10, max: 60 },
  "neckWaistFront": { min: 10, max: 60 },
  "neckPelvisFront": { min: 20, max: 80 },
  "chest": { min: 40, max: 200 },
  "underChest": { min: 30, max: 200 },
  "armCirc": { min: 5, max: 50 },
  "armLength": { min: 30, max: 80 },
  "upperArmLength": { min: 10, max: 40 },
  "waist": { min: 20, max: 150 },
  "pelvis": { min: 20, max: 150 },
  "hips": { min: 20, max: 150 },
  "sideseam": { min: 30, max: 130 },
  "inseam": { min: 20, max: 130 },
  "thigh": { min: 15, max: 80 },
  "calf": { min: 10, max: 50 }
};

export const validateInputRange = (contextKeyName: string, inputValue: string): boolean => {
  const range = inputRanges[contextKeyName];
  if (!range) return false;
  if (!inputValue) return true; // Allow empty input temporarily

  const value = parseInt(inputValue, 10);
  if (isNaN(value)) return false; // Reject non-numeric input

  // Check if the input is within the range
  if (value >= range.min && value <= range.max)
    return true;
  if (value === 1) return false;

  // Allow values that are the start of the min value but not longer than max value string length
  const maxLen = String(range.max).length;
  return inputValue.length <= maxLen && range.min.toString().startsWith(inputValue);
};
