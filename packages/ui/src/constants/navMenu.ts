import folderImageUrl from "../assets/folder.svg";
import homeImageUrl from "../assets/home.svg";
import participantImageUrl from "../assets/particpant.svg";
import personImageUrl from "../assets/person.svg";
import scheduleImageUrl from "../assets/schedule.svg";

export const clientNavMenu = [
  {
    href: "my-study",
    imageUrl: homeImageUrl,
    alt: "home-icon",
    name: "나의 스터디",
    items: [
      {
        href: "my-homework",
        imageUrl: folderImageUrl,
        alt: "folder-icon",
        name: "나의 과제",
      },
    ],
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

export const adminNavMenu = [
  {
    href: "studies",
    imageUrl: homeImageUrl,
    alt: "home-icon",
    name: "개설된 스터디",
    items: [
      {
        href: "basic-web-study",
        imageUrl: folderImageUrl,
        alt: "folder-icon",
        name: "기초 웹 스터디",
      },
      {
        href: "dev-beginner-study",
        imageUrl: folderImageUrl,
        alt: "folder-icon",
        name: "개발 입문 스터디",
      },
      {
        href: "basic-mobile-study",
        imageUrl: folderImageUrl,
        alt: "folder-icon",
        name: "기초 모바일 스터디",
      },
    ],
  },
  {
    href: "participants",
    imageUrl: participantImageUrl,
    alt: "participant-icon",
    name: "수강생 관리",
  },
];
