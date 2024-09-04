export const getAssignmentGithubFolderName = (submissionLink: string) => {
  const regex = /github\.com\/[^/]+\/([^/]+)\/([^/]+)/;
  const match = submissionLink.match(regex);

  if (match) {
    const repoName = match[1];
    const folderName = match[2];
    return `${repoName}/${folderName}`;
  }
};
