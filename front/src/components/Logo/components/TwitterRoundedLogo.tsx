type Props = {
  size?: number;
  color?: string;
  secondaryColor?: string;
  className?: string;
  style?: React.CSSProperties;
};

export default function TwitterLogo({
  size,
  color,
  secondaryColor,
  className,
  style,
}: Props): JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={style}
    >
      <circle cx={size / 2} cy={size / 2} r={size / 2} />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M27.625 8.55845C26.7707 8.95 25.8509 9.21479 24.8861 9.3331C25.8714 8.72465 26.6274 7.75986 26.9836 6.61057C26.0611 7.17395 25.0417 7.5838 23.9527 7.80352C23.0847 6.84718 21.8442 6.25 20.4714 6.25C17.8389 6.25 15.7032 8.45422 15.7032 11.1725C15.7032 11.5584 15.7441 11.9331 15.826 12.2937C11.8616 12.088 8.34757 10.1303 5.99351 7.14859C5.58274 7.87817 5.34801 8.72465 5.34801 9.62606C5.34801 11.3331 6.19002 12.8401 7.47009 13.7232C6.68949 13.6993 5.95256 13.4754 5.30844 13.1092V13.1697C5.30844 15.5556 6.95287 17.5458 9.13636 17.9965C8.73651 18.112 8.31482 18.1697 7.87949 18.1697C7.57244 18.1697 7.27221 18.1401 6.98153 18.0824C7.58881 20.0373 9.34924 21.4613 11.4372 21.4993C9.80504 22.8204 7.74711 23.6077 5.51314 23.6077C5.1283 23.6077 4.74756 23.5852 4.375 23.5401C6.48616 24.9345 8.99443 25.75 11.6869 25.75C20.4618 25.75 25.2586 18.25 25.2586 11.7444C25.2586 11.5303 25.2546 11.3162 25.2464 11.1063C26.1784 10.412 26.9877 9.54578 27.625 8.55845Z"
        fill={secondaryColor}
      />
    </svg>
  );
}