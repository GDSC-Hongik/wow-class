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

// 주어진 연도와 월의 첫 평일을 반환하는 함수
const getSemesterStart = (year: number, month: number): Date => {
  let date = new Date(year, month - 1, 1);
  while (date.getDay() === 0 || date.getDay() === 6) {
    date = new Date(date.getFullYear(), date.getMonth(), date.getDate() + 1);
  }
  return date;
};

// 현재 날짜에 따른 현재 학기를 결정하는 함수
const getCurrentSemester = (now: Date): { year: number; semester: number } => {
  const currentYear = now.getFullYear();
  const sem1Start = getSemesterStart(currentYear, 3);
  const sem2Start = getSemesterStart(currentYear, 9);

  if (now < sem1Start) {
    return { year: currentYear - 1, semester: 2 };
  } else if (now < sem2Start) {
    return { year: currentYear, semester: 1 };
  } else {
    return { year: currentYear, semester: 2 };
  }
};

// 다음 학기를 계산하는 함수
const getNextSemester = (year: number, semester: number) => {
  return semester === 1
    ? { year, semester: 2 }
    : { year: year + 1, semester: 1 };
};

// 학기 정보를 생성하는 함수
const createSemesterItem = (
  year: number,
  semester: number
): SemesterItemType => ({
  text: `${year}년 ${semester}학기`,
  valueKey: `${year}-${semester}`,
});

// 학기 사전 항목을 생성하는 함수
const createSemesterDictEntry = (
  year: number,
  semester: number
): [string, { academicYear: number; semesterType: "FIRST" | "SECOND" }] => [
  `${year}-${semester}`,
  {
    academicYear: year,
    semesterType: semester === 1 ? "FIRST" : "SECOND",
  },
];

// 이후 6학기를 생성하는 함수
const generateUpcomingSemesters = (
  startYear: number,
  startSemester: number
): { semesters: SemesterItemType[]; semestersDict: SemesterItemDictType } => {
  const semesters: SemesterItemType[] = [];
  const semestersDict: SemesterItemDictType = {};

  let current = { year: startYear, semester: startSemester };
  for (let i = 0; i < 6; i++) {
    const item = createSemesterItem(current.year, current.semester);
    semesters.push(item);
    const [key, value] = createSemesterDictEntry(
      current.year,
      current.semester
    );
    semestersDict[key] = value;
    current = getNextSemester(current.year, current.semester);
  }

  return { semesters, semestersDict };
};

// 메인 함수
export const getUpcomingSemesters = (): {
  semesters: SemesterItemType[];
  semestersDict: SemesterItemDictType;
} => {
  const now = new Date();
  const { year, semester } = getCurrentSemester(now);
  return generateUpcomingSemesters(year, semester);
};
