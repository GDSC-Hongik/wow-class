import { styled } from "@styled-system/jsx";
import { Suspense } from "react";
import DropDown from "wowds-ui/DropDown";
import DropDownOption from "wowds-ui/DropDownOption";

//TODO: 추후 학기 API 생성되면 대체할 것
const SelectStudySemester = () => {
  return (
    <Suspense fallback={null}>
      <styled.div width="120px">
        <DropDown defaultValue="all">
          <DropDownOption text="2024-2" value="2024-2" />
          <DropDownOption text="전체" value="all" />
        </DropDown>
      </styled.div>
    </Suspense>
  );
};

export default SelectStudySemester;
