"use client";
import { useRouter, useSearchParams } from "next/navigation";
import DropDown from "wowds-ui/DropDown";
import DropDownOption from "wowds-ui/DropDownOption";

import { useFetchStudies } from "../_hooks/useFetchStudies";

const SemesterDropDown = () => {
  const router = useRouter();
  const { semesterList } = useFetchStudies();
  const querySemester = useSearchParams().get("semester");
  return (
    <DropDown
      defaultValue={querySemester ? querySemester : "all"}
      style={{ width: "6.5rem" }}
      onChange={({ selectedValue }) => {
        selectedValue === "all"
          ? router.replace("studies")
          : router.replace(`studies?semester=${selectedValue}`);
      }}
    >
      <DropDownOption text="전체" value="all" />
      {semesterList?.map((semester) => (
        <DropDownOption key={semester} text={semester} value={semester} />
      ))}
    </DropDown>
  );
};

export default SemesterDropDown;
