const rootPath = "studies";

export const routerPath = {
  createStudy: {
    description: "스터디 개설 페이지로 이동합니다",
    href: `/${rootPath}/create-study`,
  },
  root: {
    description: "멘토/어드민 페이지 접속화면입니다.",
    href: `/${rootPath}`,
  },
  "announcement-modify": {
    description: "스터디 공지를 수정할 수 있는 모달창입니다.",
    href: `/announcement-modify`,
  },
  "announcement-delete": {
    description: "스터디 공지를 삭제하기 위해 확인하는 모달창입니다.",
    href: `/announcement-delete`,
  },
};
