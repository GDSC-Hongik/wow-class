const createQueryString = <T extends object>(url: string, data: T) => {
  const [baseUrl, queryString] = url.split("?");

  const params = new URLSearchParams(queryString || "");
  Object.entries(data).forEach(([key, value]) => {
    if (value) {
      if (typeof value === "string") params.set(key, value);
      else params.set(key, JSON.stringify(value));
    }
  });

  return `${baseUrl}?${params.toString()}`;
};

export default createQueryString;
