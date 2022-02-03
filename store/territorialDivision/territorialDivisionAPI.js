const DIGITAL_GOV_API_URL = process.env.NEXT_PUBLIC_DIGITAL_GOV_API;

export const fetchRegions = async () => {
  try {
    const response = await fetch(`${DIGITAL_GOV_API_URL}/regiones`);
    const result = await response.json();
    return result;
  } catch (e) {
    console.error(e);
  }
};

export const fetchProvinces = async (regionCode) => {
  try {
    const response = await fetch(
      `${DIGITAL_GOV_API_URL}/regiones/${regionCode}/provincias`
    );
    const result = await response.json();
    return result;
  } catch (e) {
    console.error(e);
  }
};

export const fetchCommunes = async (regionCode, provinceCode) => {
  try {
    const response = await fetch(
      `${DIGITAL_GOV_API_URL}/regiones/${regionCode}/provincias/${provinceCode}/comunas`
    );
    const result = await response.json();
    return result;
  } catch (e) {
    console.error(e);
  }
};
