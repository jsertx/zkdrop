import { useState } from "react";
import styled from "styled-components";
import Link from "next/link";
import Loader from "../Loader";

const Container = styled.button<{
  disabled?: boolean;
  transparent?: boolean;
  outline?: boolean;
}>`
  position: relative;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  color: ${(props) => props.theme.colors.blue10};

  width: fit-content;
  border: none;
  height: 62px;
  padding: 20px 10px;
  background-color: #fef3f7;
  border: 1px solid #2a3557;
  border-radius: 15px;

  box-sizing: border-box;
`;

const ContainerLink = styled(Link)<{
  disabled?: boolean;
  transparent?: boolean;
  outline?: boolean;
}>`
  position: relative;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  color: ${(props) => props.theme.colors.blue10};

  width: fit-content;
  border: none;
  height: 62px;
  padding: 20px 10px;
  background-color: #fef3f7;
  border: 1px solid #2a3557;
  border-radius: 15px;

  box-sizing: border-box;
`;

const LoaderContainer = styled.div<{
  center: boolean;
}>`
  display: flex;
  align-items: center;
  margin-right: 10px;
`;

const Content = styled.div<{
  fontColor: string;
  disabled: boolean;
}>`
  font-size: 16px;
  line-height: 22px;
  font-family: ${(props) => props.theme.fonts.charcuterie.style.fontFamily};
`;

type ButtonProps = {
  children: React.ReactNode;
  style?: React.CSSProperties;
  className?: string;
  onClick?: () => void;
  href?: string;
  loading?: boolean;
  disabled?: boolean;
  transparent?: boolean;
};

export default function StyledButton({
  children,
  style,
  className,
  onClick,
  href,
  loading,
  disabled = false,
  transparent,
}: ButtonProps): JSX.Element {
  const [hover, setHover] = useState(false);

  let fontColor = "#1C2847";
  if (disabled) fontColor = "#6771A9";

  if (href) {
    return (
      <ContainerLink
        style={style}
        className={className}
        href={href}
        disabled={disabled}
        transparent={transparent}
        scroll={true}
      >
        {loading && (
          <LoaderContainer center={true}>
            <Loader color={fontColor} size={13} />
          </LoaderContainer>
        )}
        <Content disabled={disabled} fontColor={fontColor}>
          {children}
        </Content>
      </ContainerLink>
    );
  } else {
    return (
      <Container
        style={style}
        className={className}
        onClick={() => !loading && onClick && onClick()}
        disabled={disabled}
        transparent={transparent}
      >
        {loading && (
          <LoaderContainer center={true}>
            <Loader color={fontColor} size={13} />
          </LoaderContainer>
        )}
        <Content disabled={disabled} fontColor={fontColor}>
          {children}
        </Content>
      </Container>
    );
  }
}
