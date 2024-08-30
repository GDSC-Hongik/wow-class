import { useRouter } from "next/navigation";
import { useCallback } from "react";

const useModalRoute = () => {
  const router = useRouter();

  const onClose = useCallback(() => {
    router.back();
  }, [router]);

  return { onClose };
};

export default useModalRoute;
