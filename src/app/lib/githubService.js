/**
 * Service to fetch latest GitHub repositories for Makendy Midouin
 */
export async function getLatestRepos() {
  try {
    const response = await fetch(
      "https://api.github.com/users/makendym/repos?sort=pushed&direction=desc&per_page=12",
      {
        next: { revalidate: 3600 }, // Revalidate every hour
      }
    );

    if (!response.ok) {
      throw new Error(`GitHub API returned ${response.status}`);
    }

    const repos = await response.json();

    // Filter and map to a clean structure
    return repos
      .filter((repo) => !repo.private) // Extra safety check for public repos only
      .map((repo) => ({
        id: repo.id,
        name: repo.name,
        description: repo.description,
        url: repo.html_url,
        homepage: repo.homepage,
        stars: repo.stargazers_count,
        forks: repo.forks_count,
        language: repo.language,
        topics: repo.topics || [],
        updatedAt: repo.pushed_at,
        isFork: repo.fork
      }));
  } catch (error) {
    console.error("Error fetching GitHub repos:", error);
    return [];
  }
}
