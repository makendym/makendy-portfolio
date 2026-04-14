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
      .filter((repo) => !repo.private && repo.name !== "makendy-portfolio") // Exclude private and the portfolio itself
      .map((repo) => ({
        id: repo.id,
        name: repo.name,
        fullName: repo.full_name,
        owner: repo.owner?.login,
        description: repo.description,
        url: repo.html_url,
        homepage: repo.homepage,
        stars: repo.stargazers_count,
        forks: repo.forks_count,
        language: repo.language,
        topics: repo.topics || [],
        updatedAt: repo.pushed_at,
        isFork: repo.fork,
        defaultBranch: repo.default_branch
      }));
  } catch (error) {
    console.error("Error fetching GitHub repos:", error);
    return [];
  }
}
