import { useSearchParams } from "next/navigation";

const useParseSearchParams = () => {
  const searchParams = useSearchParams();
  const parseToJsonSearchParam = (queryString: string) => {
    const param = searchParams.get(queryString);
    if (param) return JSON.parse(param);
    else return {};
  };

  const parseToStringSearchParams = (queryString: string) => {
    const param = searchParams.get(queryString);
    if (param) return param;
    else return "";
  };

  return { parseToJsonSearchParam, parseToStringSearchParams };
};

export default useParseSearchParams;
