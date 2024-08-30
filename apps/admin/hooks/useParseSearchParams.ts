import { useSearchParams } from "next/navigation";

const useParseSearchParams = () => {
  const searchParams = useSearchParams();

  const parseQueryString = <T extends Record<string, any>>(
    query: string
  ): T => {
    const params = new URLSearchParams(query);
    const result: Partial<T> = {};

    params.forEach((value, key) => {
      try {
        result[key as keyof T] = JSON.parse(value);
      } catch (e) {
        result[key as keyof T] = value as any;
      }
    });

    return result as T;
  };

  const parseToJsonSearchParam = <T extends object>(queryString: string): T => {
    const param = searchParams.get(queryString);
    if (param) return JSON.parse(param);
    else return {} as T;
  };

  const parseToStringSearchParams = (queryString: string) => {
    const param = searchParams.get(queryString);
    if (param) return param;
    else return "";
  };

  const parseToNumberSearchParams = (queryString: string) => {
    const param = searchParams.get(queryString);
    if (param) return parseInt(param, 10);
    else return 0;
  };

  return {
    parseToJsonSearchParam,
    parseToStringSearchParams,
    parseToNumberSearchParams,
    parseQueryString,
  };
};

export default useParseSearchParams;
