export const processTerritorialDivisions = (territorialInfo) =>
  territorialInfo.map((division) => processTerritorialDivision(division));

export const processTerritorialDivision = (division) => ({
  ...division,
  value: division.codigo,
  text: division.nombre,
});
