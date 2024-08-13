import folderImageUrl from "../public/images/folder.svg";
import homeImageUrl from "../public/images/home.svg";
import participantImageUrl from "../public/images/particpant.svg";

export const navMenu = [
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
