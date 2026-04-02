export async function getProjects() {
  try {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/api/projects`);
    if (!response.ok) {
      console.warn("API returned an error: ", response.status);
      return null;
    }

    const data = await response.json();
    return data ?? null;
  } catch (error) {
    console.error("Failted to fetch projects: ", error);
    return null;
  }
}
