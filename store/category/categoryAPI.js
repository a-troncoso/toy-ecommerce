const AMIIBO_API_URL = process.env.NEXT_PUBLIC_AMIIBO_API;

export async function fetchAllCategories() {
  try {
    const response = await fetch(`${AMIIBO_API_URL}/type/`);
    const result = await response.json();
    return result;
  } catch (e) {
    console.error("Error fetching all categories:", e);
  }
}
