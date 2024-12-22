import { styled } from "@styled-system/jsx";
import useFetchStudentsExcelUrl from "hooks/fetch/useFetchStudentsExcelUrl";
import Image from "next/image";

const DownloadButton = ({ studyId }: { studyId: number }) => {
  const url = useFetchStudentsExcelUrl({
    studyId,
  });

  return (
    <styled.a download="study.xls" href={url}>
      <Image alt="다운로드" height={24} src="/images/download.svg" width={24} />
    </styled.a>
  );
};
export default DownloadButton;
