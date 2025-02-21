type SemesterItemType = {
  text: string;
  valueKey: string;
};

type SemesterItemDictType = {
  [key: string]: {
    academicYear: number;
    semesterType: "FIRST" | "SECOND";
  };
};

export function getUpcomingSemesters() {
  const now = new Date();
  const currentYear = now.getFullYear();

  // 주어진 연도와 월의 1일로부터, 해당 주의 첫 평일(월~금)을 반환하는 함수
  function getSemesterStart(year: number, month: number): Date {
    let date = new Date(year, month - 1, 1);

    // 1일이 주말이면 평일이 될 때까지 다음 날로 이동
    while (date.getDay() === 0 || date.getDay() === 6) {
      date.setDate(date.getDate() + 1);
    }
    return date;
  }

  // 1학기: 3월, 2학기: 9월의 첫 평일
  const sem1StartCurrentYear = getSemesterStart(currentYear, 3);
  const sem2StartCurrentYear = getSemesterStart(currentYear, 9);

  let semesterYear: number;
  let currentSemester: number;

  // 현재 날짜에 따른 학기 결정
  if (now < sem1StartCurrentYear) {
    // 3월 학기 시작 전이면 이번 학기는 이전년도 2학기
    semesterYear = currentYear - 1;
    currentSemester = 2;
  } else if (now < sem2StartCurrentYear) {
    // 3월 학기 시작 후 ~ 9월 학기 시작 전이면 이번 학기는 올해 1학기
    semesterYear = currentYear;
    currentSemester = 1;
  } else {
    // 9월 학기 시작 후이면 이번 학기는 올해 2학기
    semesterYear = currentYear;
    currentSemester = 2;
  }

  // 이번 학기를 포함하여 이후 5학기, 총 6학기를 문자열 배열로 생성
  const semesters: SemesterItemType[] = [];
  const semestersDict: SemesterItemDictType = {};
  for (let i = 0; i < 6; i++) {
    semesters.push({
      text: `${semesterYear}년 ${currentSemester}학기`,
      valueKey: `${semesterYear}-${currentSemester}`,
    });
    semestersDict[`${semesterYear}-${currentSemester}`] = {
      academicYear: semesterYear,
      semesterType: currentSemester === 1 ? "FIRST" : "SECOND",
    };
    // 1학기 뒤에는 2학기, 2학기 뒤에는 다음 해의 1학기로 전환
    if (currentSemester === 1) {
      currentSemester = 2;
    } else {
      currentSemester = 1;
      semesterYear++;
    }
  }

  return { semesters, semestersDict };
}
