import { useState } from "react";
import styled from "styled-components";

const Container = styled.button<{
  hover?: boolean;
  disabled?: boolean;
  clickable?: boolean;
}>`
  position: relative;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  width: fit-content;
  border: none;
  height: 40px;
  padding: 0px 25px;
  outline: none;
  font: inherit;

  ${(props) =>
    !props.clickable &&
    `
      cursor: default;
  `}

  @media (max-width: 600px) {
    height: 40px;
  }
`;

type ButtonProps = {
  children: React.ReactNode;
  style?: React.CSSProperties;
  className?: string;
  onClick?: () => void;
  loading?: boolean;
  disabled?: boolean;
};

export default function Button({
  children,
  style,
  className,
  onClick,
  loading,
  disabled,
}: ButtonProps): JSX.Element {
  const [hover, setHover] = useState(false);

  return (
    <Container
      style={style}
      className={className}
      hover={hover}
      onClick={() => !loading && !disabled && onClick && onClick()}
      clickable={!loading && !disabled}
      disabled={disabled}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {children}
    </Container>
  );
}
