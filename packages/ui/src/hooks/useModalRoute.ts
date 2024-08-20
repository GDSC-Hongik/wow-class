import { useRouter } from "next/navigation";
import { useCallback } from "react";

const useModalRoute = () => {
  const router = useRouter();

  const closeModal = useCallback(() => {
    router.back();
  }, [router]);

  return { closeModal };
};

export default useModalRoute;
