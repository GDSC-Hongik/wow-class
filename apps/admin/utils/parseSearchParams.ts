import type { ReadonlyURLSearchParams } from "next/navigation";

const parseSearchParams = <T>(searchParams: ReadonlyURLSearchParams) => {
  const data: Record<string, any> = {};

  searchParams.forEach((value, key) => {
    try {
      const parsedValue = JSON.parse(value);
      data[key] = parsedValue;
    } catch (e) {
      data[key] = value;
    }
  });

  return data as T;
};

export default parseSearchParams;
