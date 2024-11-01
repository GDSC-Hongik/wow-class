import { color } from "wowds-tokens";

const StarCheckIcon = ({ checked }: { checked: boolean }) => {
  return (
    <svg
      fill="none"
      height="20"
      viewBox="0 0 20 20"
      width="20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_1278_13516)">
        <path
          d="M12.9775 0.834815L14.531 3.76284L17.7958 4.33552L17.3316 7.61749L19.6362 9.99979L17.3316 12.3821L17.7958 15.6641L14.531 16.2367L12.9775 19.1648L9.9996 17.7091L7.02171 19.1648L5.46818 16.2367L2.2034 15.6641L2.66761 12.3821L0.362969 9.99979L2.66761 7.61749L2.2034 4.33552L5.46818 3.76284L7.02171 0.834815L9.9996 2.29049L12.9775 0.834815Z"
          fill={checked ? color.primary : color.lightDisabled}
        />
        <path
          clipRule="evenodd"
          d="M13.9918 7.32972C14.1948 7.53271 14.1948 7.86182 13.9918 8.06481L9.16748 12.8892C8.96714 13.0895 8.64328 13.0925 8.43927 12.8959L5.94391 10.4913C5.7372 10.2922 5.7311 9.9631 5.9303 9.75639C6.12949 9.54967 6.45854 9.54358 6.66525 9.74277L8.79319 11.7933L13.2567 7.32972C13.4597 7.12674 13.7888 7.12674 13.9918 7.32972Z"
          fill="white"
          fillRule="evenodd"
          stroke="white"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="0.142857"
        />
      </g>
      <defs>
        <clipPath id="clip0_1278_13516">
          <rect fill="white" height="20" width="20" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default StarCheckIcon;
