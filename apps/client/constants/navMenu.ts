import folderImageUrl from "../public/images/folder.svg";
import homeImageUrl from "../public/images/home.svg";
import personImageUrl from "../public/images/person.svg";
import scheduleImageUrl from "../public/images/schedule.svg";

export const navMenu = [
  // {
  //   href: "/my-study",
  //   imageUrl: homeImageUrl,
  //   alt: "home-icon",
  //   name: "나의 스터디",
  //   items: [
  //     {
  //       href: "my-assignment",
  //       imageUrl: folderImageUrl,
  //       alt: "folder-icon",
  //       name: "나의 과제",
  //     },
  //   ],
  // },
  {
    href: "/study-apply",
    imageUrl: scheduleImageUrl,
    alt: "schedule-icon",
    name: "수강 신청",
  },
  {
    href: "/my-page",
    imageUrl: personImageUrl,
    alt: "person-icon",
    name: "마이 페이지",
  },
];
