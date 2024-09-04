export const isGithubRepositoryUrl = (url: string) => {
  const githubUrlPattern =
    /^(https?:\/\/)?(www\.)?github\.com\/[A-Za-z0-9_.-]+\/[A-Za-z0-9_.-]+\/?$/;
  return githubUrlPattern.test(url);
};
