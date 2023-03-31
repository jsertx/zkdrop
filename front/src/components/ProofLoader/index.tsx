import React from "react";
import styled from "styled-components";
import Logo, { LogoType } from "../Logo";

const LogoSpinner = styled.div<{ size: number }>`
  animation: rotate 1s linear infinite;
  display: inline-flex;
  //align-items:center;
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  //transform-origin: center;

  @keyframes rotate {
    0% {
      transform: rotate(0);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

type LoaderProps = {
  color?: string;
  style?: React.CSSProperties;
  size?: number;
};

export default function ProofLoader({
  color,
  style,
  size = 32,
}: LoaderProps): JSX.Element {
  return (
    <LogoSpinner size={size}>
      <Logo type={LogoType.PROOF} color={color} size={size} />
    </LogoSpinner>
  );
}
