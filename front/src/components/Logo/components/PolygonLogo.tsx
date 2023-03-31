type Props = {
  size?: number;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
};

export default function PolygonLogo({
  size,
  color,
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
      <path d="M23.9726 10.6968C23.406 10.373 22.6775 10.373 22.03 10.6968L17.4974 13.3678L14.4217 15.0676L9.96997 17.7386C9.40339 18.0623 8.67494 18.0623 8.02742 17.7386L4.547 15.6341C3.98042 15.3104 3.57572 14.6629 3.57572 13.9344V9.8874C3.57572 9.23988 3.89948 8.59236 4.547 8.18766L8.02742 6.16416C8.594 5.8404 9.32245 5.8404 9.96997 6.16416L13.4504 8.2686C14.017 8.59236 14.4217 9.23988 14.4217 9.96834V12.6394L17.4974 10.8587V8.10672C17.4974 7.4592 17.1736 6.81168 16.5261 6.40698L10.0509 2.60281C9.48433 2.27905 8.75587 2.27905 8.10836 2.60281L1.47128 6.48792C0.82376 6.81168 0.5 7.4592 0.5 8.10672V15.7151C0.5 16.3626 0.82376 17.0101 1.47128 17.4148L8.02742 21.219C8.594 21.5428 9.32245 21.5428 9.96997 21.219L14.4217 18.6289L17.4974 16.8482L21.9491 14.2582C22.5157 13.9344 23.2441 13.9344 23.8916 14.2582L27.3721 16.2817C27.9386 16.6054 28.3433 17.2529 28.3433 17.9814V22.0284C28.3433 22.6759 28.0196 23.3234 27.3721 23.7281L23.9726 25.7516C23.406 26.0754 22.6775 26.0754 22.03 25.7516L18.5496 23.7281C17.983 23.4044 17.5783 22.7569 17.5783 22.0284V19.4383L14.5026 21.219V23.89C14.5026 24.5375 14.8264 25.1851 15.4739 25.5898L22.03 29.3939C22.5966 29.7177 23.3251 29.7177 23.9726 29.3939L30.5287 25.5898C31.0953 25.266 31.5 24.6185 31.5 23.89V16.2007C31.5 15.5532 31.1762 14.9057 30.5287 14.501L23.9726 10.6968Z" />
    </svg>
  );
}