import { useSearchParams } from "next/navigation";

const useParseSearchParams = () => {
  const searchParams = useSearchParams();
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
    if (param) return parseInt(param);
    else return 0;
  };

  return {
    parseToJsonSearchParam,
    parseToStringSearchParams,
    parseToNumberSearchParams,
  };
};

export default useParseSearchParams;
