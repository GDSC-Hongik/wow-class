export const getAssignmentGithubFolderName = (repositoryLink: string) => {
  const regex = /github\.com\/[^/]+\/([^/]+)(?:\/([^/]+))?/;
  const match = repositoryLink.match(regex);

  if (match) {
    const repoName = match[1];
    return repoName;
  }
};
