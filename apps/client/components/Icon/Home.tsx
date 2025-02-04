import { color } from "wowds-tokens";

export const Home = ({ selected = false }: { selected?: boolean }) => {
  return (
    <svg
      fill="none"
      height="36"
      viewBox="0 0 37 36"
      width="37"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M30.8282 14.25V31.9317H6.82825V14.25"
        stroke={selected ? color.primary : color.sub}
        stroke-width="2.1"
      />
      <path
        d="M4.57825 15.75L18.8282 4.5L33.0782 15.75"
        stroke={selected ? color.primary : color.sub}
        stroke-linejoin="bevel"
        stroke-width="2.1"
      />
      <path
        d="M21.8282 24C21.8282 25.6569 20.4851 27 18.8282 27C17.1714 27 15.8282 25.6569 15.8282 24C15.8282 22.3431 17.1714 21 18.8282 21C20.4851 21 21.8282 22.3431 21.8282 24Z"
        stroke={selected ? color.primary : color.sub}
        stroke-width="2.1"
      />
    </svg>
  );
};
