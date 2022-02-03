export const fetchRegions = async () => {
  try {
    const response = await fetch("https://apis.digital.gob.cl/dpa/regiones");
    const result = await response.json();
    return result;
  } catch (e) {
    console.error(e);
  }
};

export const fetchProvinces = async (regionCode) => {
  try {
    const response = await fetch(
      `https://apis.digital.gob.cl/dpa/regiones/${regionCode}/provincias`
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
      `https://apis.digital.gob.cl/dpa/regiones/${regionCode}/provincias/${provinceCode}/comunas`
    );
    const result = await response.json();
    return result;
  } catch (e) {
    console.error(e);
  }
};
