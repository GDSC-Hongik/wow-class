/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
"use client";
import { css } from "@styled-system/css";
import { Flex } from "@styled-system/jsx";
import { Text } from "@wow-class/ui";
import { createStudyApi } from "apis/study/createStudyApi";
import { useState } from "react";
import { useFormContext } from "react-hook-form";
import SearchBar from "wowds-ui/SearchBar";

type MentorListType = {
  memberId: number;
  name: string;
  studentId: string;
};

const StudyMentorSelect = () => {
  const { setValue } = useFormContext();
  const [memberList, setMemberList] = useState<MentorListType[]>([]);
  const [openPopup, setOpenPopup] = useState(false);
  const [mentor, setMentor] = useState("");

  const fetchStudyMentor = async (name: string) => {
    const response = await createStudyApi.searchStudyMentor(name);
    const formatMentorList = response.map((data) => {
      return {
        memberId: data.memberId,
        name: data.name,
        studentId: data.studentId,
      };
    });
    setMemberList([...formatMentorList]);
    setOpenPopup(true);
  };

  return (
    <Flex direction="column" gap="xl">
      <Text typo="h2">스터디 멘토</Text>
      <div style={{ position: "relative" }}>
        <SearchBar
          placeholder="멘토를 검색해주세요"
          style={{ width: "270px" }}
          value={mentor}
          onChange={(value) => {
            setMentor(value);
            fetchStudyMentor(value);
          }}
        />
        {openPopup && mentor.length > 0 && (
          <ul className={MemberListPopupStyle}>
            {memberList.length > 0 ? (
              <>
                {memberList.map((data) => (
                  <li
                    className={MemberListItemStyle}
                    key={data.memberId}
                    onClick={() => {
                      setValue("mentorId", data.memberId, {
                        shouldValidate: true,
                      });
                      setOpenPopup(false);
                      setMentor(data.name);
                    }}
                  >
                    <Text color="sub" typo="body1">
                      {data.name} {data.studentId}
                    </Text>
                  </li>
                ))}
              </>
            ) : (
              <Text color="sub" typo="body1">
                일치하는 결과가 없어요.
              </Text>
            )}
          </ul>
        )}
      </div>
    </Flex>
  );
};

export default StudyMentorSelect;

const MemberListPopupStyle = css({
  position: "absolute",
  top: "50px",
  width: "320px",
  zIndex: 999,
  borderRadius: "8px",
  backgroundColor: "white",
  shadow: "mono",
  padding: "xs",
});

const MemberListItemStyle = css({
  marginY: "5px",
  cursor: "pointer",
});
