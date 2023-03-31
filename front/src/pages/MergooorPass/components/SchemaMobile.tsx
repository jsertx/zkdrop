import Image from "next/image";
import { ArrowDown, Check } from "phosphor-react";
import styled from "styled-components";
import zkProof from "../../../assets/zk-proof.svg";
import mergerPass from "../../../assets/merger-pass.svg";

const Container = styled.div`
  display: none;

  @media (max-width: 1030px) {
    width: 232px;
    display: flex;
    flex-direction: column;
    align-items: center;
    // padding: 0 28px;
    color: white;
  }
`;

const ButtonGroup = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 0 6px;
  width: 220px;

  margin-bottom: 10px;
`;

const Warning = styled.div`
  height: 20px;
  background: rgba(247, 233, 171, 0.7);
  border-radius: 5px;
  font-weight: 400;
  font-size: 11px;
  line-height: 20px;
  color: ${(props) => props.theme.colors.blue6};
  text-align: center;
  width: 100%;
`;

const DisabledProve = styled.div`
  font-family: ${(props) => props.theme.fonts.sarala.style.fontFamily};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 15px 0px;
  width: 100%;
  height: 59px;

  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.4);
  border-radius: 10px;

  color: white;

  font-size: 18px;
  line-height: 29px;
`;

const DisabledClaim = styled.div`
  font-family: ${(props) => props.theme.fonts.charcuterie.style.fontFamily};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 15px 0px;
  width: 100%;
  height: 59px;

  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.4);
  border-radius: 10px;

  color: white;

  font-size: 16px;
  line-height: 22.4px;
`;

const CheckLine = styled.div`
  align-self: flex-start;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 5px;
`;

const CheckText = styled.div`
  font-size: 12px;
  line-height: 14px;
  font-weight: 400;
  flex-grow: 0;
`;

const CheckWrapper = styled.div`
  flex-shrink: 0;
`;

const Bold = styled.span`
  font-weight: 600;
`;

const ArrowImageGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 10px;
  margin: 10px 0;
`;

export default function SchemaMobile(): JSX.Element {
  return (
    <Container>
      <ButtonGroup>
        <Warning>Not available on mobile yet</Warning>
        <DisabledProve>
          <Image src={zkProof} alt="zk-proof" />
          Prove with Sismo
        </DisabledProve>
      </ButtonGroup>
      <CheckLine>
        <CheckWrapper>
          <Check size={14} />
        </CheckWrapper>
        <CheckText>
          <Bold>Privacy:</Bold> Prove you are eligible from a source account
          while preserving your privacy
        </CheckText>
      </CheckLine>
      <ArrowImageGroup>
        <ArrowDown size={10} color={"#2A3557"} />
        <Image
          src={mergerPass}
          alt="merger-pass"
          width={79.14}
          height={102.31}
        />
        <ArrowDown size={10} color={"#2A3557"} />
      </ArrowImageGroup>
      <ButtonGroup>
        <DisabledClaim>claim your pass</DisabledClaim>
      </ButtonGroup>
      <CheckLine style={{ marginBottom: 10 }}>
        <CheckWrapper>
          <Check size={14} />
        </CheckWrapper>
        <CheckText>
          <Bold>Choose any destination</Bold>
        </CheckText>
      </CheckLine>
      <CheckLine>
        <CheckWrapper>
          <Check size={14} />
        </CheckWrapper>
        <CheckText>
          <Bold>Account-bound:</Bold> If your destination is lost, you will be
          able to burn and remint
        </CheckText>
      </CheckLine>
    </Container>
  );
}
