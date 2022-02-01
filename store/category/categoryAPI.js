export async function fetchAllCategories() {
  try {
    const response = await fetch("https://www.amiiboapi.com//api/type/");
    const result = await response.json();
    return result;
  } catch (e) {
    console.error("Error fetching all categories:", e);
  }
}
