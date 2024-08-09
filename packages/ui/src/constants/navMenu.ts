import folderImageUrl from "../assets/folder.svg";
import homeImageUrl from "../assets/home.svg";
import personImageUrl from "../assets/person.svg";
import scheduleImageUrl from "../assets/schedule.svg";

export const navMenu = [
  {
    href: "my-study",
    imageUrl: homeImageUrl,
    alt: "home-icon",
    name: "나의 스터디",
  },
  {
    href: "my-homework",
    imageUrl: folderImageUrl,
    alt: "folder-icon",
    name: "나의 과제",
  },
  {
    href: "study-apply",
    imageUrl: scheduleImageUrl,
    alt: "schedule-icon",
    name: "수강 신청",
  },
  {
    href: "my-page",
    imageUrl: personImageUrl,
    alt: "person-icon",
    name: "마이 페이지",
  },
];
