const isDeadlinePassed = (deadline: string) => {
  const now = new Date();
  const deadlineDate = new Date(deadline);
  return now > deadlineDate;
};

export default isDeadlinePassed;
