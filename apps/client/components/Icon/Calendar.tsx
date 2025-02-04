import { color } from "wowds-tokens";

export const Calendar = ({ selected = false }: { selected?: boolean }) => {
  return (
    <>
      <svg
        fill="none"
        height="36"
        viewBox="0 0 37 36"
        width="37"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M32.7782 7.05V30.45H4.87825V7.05L32.7782 7.05Z"
          stroke={selected ? color.primary : color.sub}
          stroke-width="2.1"
        />
        <path
          d="M26.3282 3V10.5"
          stroke={selected ? color.primary : color.sub}
          stroke-width="2.1"
        />
        <path
          d="M18.8282 3V10.5"
          stroke={selected ? color.primary : color.sub}
          stroke-width="2.1"
        />
        <path
          d="M11.3282 3V10.5"
          stroke={selected ? color.primary : color.sub}
          stroke-width="2.1"
        />
        <path
          d="M5.32825 14.25L32.3282 14.25"
          stroke={selected ? color.primary : color.sub}
          stroke-width="2.1"
        />
        <path
          d="M28.5782 23.25C28.5782 24.9069 27.2351 26.25 25.5782 26.25C23.9214 26.25 22.5782 24.9069 22.5782 23.25C22.5782 21.5931 23.9214 20.25 25.5782 20.25C27.2351 20.25 28.5782 21.5931 28.5782 23.25Z"
          stroke={selected ? color.primary : color.sub}
          stroke-width="2.1"
        />
      </svg>
    </>
  );
};
