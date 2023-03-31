import { ReactNode, useState } from "react";
import styled from "styled-components";
import { useRef } from "react";
import colors from "../../theme/colors";

const Container = styled.span`
  position: relative;
  height: fit-content;
  width: fit-content;
  display: inline-flex;
  justify-content: center;

  @media (max-width: 1030px) {
    display: none;
  }
`;

const TipContent = styled.div<{ width?: number }>`
  position: relative;
  padding: 10px;
  border-radius: 2px;

  width: ${(props) => (props.width ? props.width + "px" : "fit-content")};
  white-space: ${(props) => (props.width ? "normal" : "nowrap")};

  font-family: ${(props) => props.theme.fonts.inter.style.fontFamily};
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  color: white;

  background-color: ${colors.blue9};
  z-index: 30;

  box-sizing: border-box;
`;

const Arrow = styled.div<{ direction: string }>`
  width: 16.15px;
  height: 16.15px;
  background-color: ${(props) => props.theme.colors.blue9};
  border-radius: 1px;
  rotate: 45deg;

  ${(props) =>
    props.direction === "bottom"
      ? `margin-top: -10px;
      order: 1;
      `
      : props.direction === "top"
      ? `margin-bottom: -9.5px;
      order: -1;
      `
      : props.direction === "left"
      ? `margin-right: -9.5px;
      order: -1;
      `
      : props.direction === "right"
      ? `margin-left: -9.5px;
      order: 1;
      `
      : null}

  z-index: 29;
`;

const Tip = styled.span<{
  isHover: boolean;
  tooltipPosition;
}>`
  position: absolute;
  display: flex;

  flex-direction: ${(props) =>
    props.tooltipPosition.arrowDirection === "bottom" ||
    props.tooltipPosition.arrowDirection === "top"
      ? "column"
      : "row"};

  justify-content: center;
  align-items: center;

  top: ${(props) => props.tooltipPosition.top}px;
  left: ${(props) => props.tooltipPosition.left}px;

  opacity: ${(props) => (props.isHover ? 1 : 0)};
  visibility: ${(props) => (props.isHover ? "visible" : "hidden")};

  z-index: 30;
`;

type InfoProps = {
  children: ReactNode;
  text: string | ReactNode;
  style?: React.CSSProperties;
  disabled?: boolean;
  forcedDirection?: "top" | "bottom" | "left" | "right";
  className?: string;
  width?: number;
};

export default function HoverTooltip({
  children,
  text,
  disabled,
  style,
  className,
  width,
  forcedDirection,
}: InfoProps): JSX.Element {
  const [isHover, setIsHover] = useState(false);
  const ref = useRef(null);
  const infoRef = useRef(null);

  const [tooltipPosition, setTooltipPosition] = useState({
    arrowDirection: "bottom",
    top: 0,
    left: 0,
  });

  const TOOLTIP_PADDING = 30;

  function handleResize() {
    const infoRefSize = infoRef.current.getBoundingClientRect();
    const tooltipRefSize = ref.current.getBoundingClientRect();

    const tooltipSize = {
      width: tooltipRefSize.width || ref?.current?.offsetWidth,
      height: tooltipRefSize.height || ref?.current?.offsetHeight,
    };

    const infoSize = {
      width: infoRefSize.width || infoRef?.current?.offsetWidth,
      height: infoRefSize.height || infoRef?.current?.offsetHeight,
    };

    const infoOffset = {
      left: infoRefSize.left || infoRef?.current?.offsetLeft,
      top: infoRefSize.top || infoRef?.current?.offsetTop,
    };

    const windowSize = {
      width: window?.innerWidth,
      height: window?.innerHeight,
    };

    if (forcedDirection) {
      if (forcedDirection === "top") {
        setTooltipPosition({
          arrowDirection: "bottom",
          top: -tooltipSize.height - 10,
          left: -tooltipSize.width / 2 + infoSize.width / 2,
        });
        return;
      } else if (forcedDirection === "bottom") {
        setTooltipPosition({
          arrowDirection: "top",
          top: infoSize.height + 10,
          left: -tooltipSize.width / 2 + infoSize.width / 2,
        });
        return;
      } else if (forcedDirection === "left") {
        setTooltipPosition({
          arrowDirection: "right",
          top: -tooltipSize.height / 2 + infoSize.height / 2,
          left: -tooltipSize.width - 10,
        });
        return;
      } else if (forcedDirection === "right") {
        setTooltipPosition({
          arrowDirection: "left",
          top: -tooltipSize.height / 2 + infoSize.height / 2,
          left: infoSize.width + 10,
        });
        return;
      }
    }

    // TOOLTIP ABOVE CENTERED
    if (
      tooltipSize.height < infoOffset.top - TOOLTIP_PADDING &&
      tooltipSize.width / 2 <
        windowSize.width - infoOffset.left - TOOLTIP_PADDING &&
      tooltipSize.width / 2 < infoOffset.left - TOOLTIP_PADDING
    ) {
      setTooltipPosition({
        arrowDirection: "bottom",
        top: -tooltipSize.height - 10,
        left: -tooltipSize.width / 2 + infoSize.width / 2,
      });
      return;
    }

    // TOOLTIP BELOW CENTERED
    if (
      tooltipSize.height > infoOffset.top - TOOLTIP_PADDING &&
      tooltipSize.height <
        windowSize.height - infoOffset.top - TOOLTIP_PADDING &&
      tooltipSize.width / 2 <
        windowSize.width - infoOffset.left - TOOLTIP_PADDING &&
      tooltipSize.width / 2 < infoOffset.left - TOOLTIP_PADDING
    ) {
      setTooltipPosition({
        arrowDirection: "top",
        top: infoSize.height + 10,
        left: -tooltipSize.width / 2 + infoSize.width / 2,
      });
      return;
    }

    // TOOLTIP ON THE RIGHT CENTERED
    if (infoOffset.left < windowSize.width / 2) {
      setTooltipPosition({
        arrowDirection: "left",
        top: -tooltipSize.height / 2 + infoSize.height / 2,
        left: infoSize.width + 10,
      });
      return;
    } else {
      setTooltipPosition({
        arrowDirection: "right",
        top: -tooltipSize.height / 2 + infoSize.height / 2,
        left: -tooltipSize.width - 10,
      });
    }
  }

  return (
    <Container
      ref={infoRef}
      className={className}
      style={style}
      onMouseEnter={() => {
        setIsHover(true);
        handleResize();
      }}
      onMouseLeave={() => setIsHover(false)}
    >
      {children}
      {!disabled && (
        <Tip ref={ref} isHover={isHover} tooltipPosition={tooltipPosition}>
          <TipContent width={width}>{text}</TipContent>

          <Arrow direction={tooltipPosition.arrowDirection} />
        </Tip>
      )}
    </Container>
  );
}
