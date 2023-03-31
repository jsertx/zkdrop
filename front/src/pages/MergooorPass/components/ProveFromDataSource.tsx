import Image from "next/image";
import { Check } from "phosphor-react";
import styled from "styled-components";
import zkConnectDisabled from "../../../assets/zk-connect-disabled.svg";

const Container = styled.div`
  width: 260px;
`;

const Title = styled.div`
  font-size: 16px;
  line-height: 120%;
  display: flex;
  align-items: flex-end;
  color: #ffffff;
  font-family: ${(props) => props.theme.fonts.roboto.style.fontFamily};
  width: 100%;
  border: 1px solid #ffffff;
  border-radius: 10px;
  height: 30px;
  align-items: center;
  justify-content: center;
  margin-bottom: 30px;
`;

const TextBold = styled.span`
  font-weight: 600;
`;

const Content = styled.div<{ disabled: boolean }>`
  border-radius: 20px;
  padding: 30px 20px 20px;
  position: relative;
  ${(props) =>
    props.disabled
      ? `
  background: rgba(242, 173, 186, 0.4);
  border: 1px solid rgba(255, 255, 255, 0.3);
  `
      : `
  background: #F2ADBA;
  border: 1px solid #FFFFFF;
  box-shadow: 0px 2px 4px rgba(10, 16, 31, 0.25);
  border-radius: 20px;
  `}
`;

const Text = styled.div<{ disabled: boolean }>`
  line-height: 24px;
  ${(props) =>
    props.disabled
      ? `
    color: rgba(42, 53, 87, 0.7);
  `
      : `
    color: ${props.theme.colors.blue10};
  `}
`;

const ErrorText = styled.div`
  font-size: 11px;
  line-height: 13px;
  color: #ee526e;
  position: absolute;
  bottom: 80px;
  right: 30px;
`;

const ProveWithSismoDisabled = styled.div`
  font-family: ${(props) => props.theme.fonts.sarala.style.fontFamily};
  height: 59px;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 10px;
  display: flex;
  align-items: center;
  padding: 0px 25px;
  color: rgba(255, 255, 255, 0.9);
  font-size: 17px;
`;

const Checks = styled.div`
  display: flex;
  flex-direction: column;
  height: 53px;
`;

const CheckLine = styled.div<{ disabled: boolean }>`
  display: flex;
  align-items: flex-start;
  max-width: 230px;
  font-size: 12px;
  line-height: 14px;
  font-weight: 400;
  ${(props) =>
    props.disabled
      ? `
      color: #FFFFFF;
  `
      : `
      color: #1C2847;
  `}
`;

const Bold = styled.span`
  font-weight: 600;
`;

const ButtonContainer = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: center;
`

type Props = {
  destination: string;
  children: React.ReactNode;
};

export default function ProveFromDataSource({
  children,
  destination
}: Props): JSX.Element {
  const disabled = !destination;

  return (
    <Container>
      <Title>ZK-Prove from Data Source</Title>
      <Content disabled={disabled}>
        <Text style={{ marginBottom: 20 }} disabled={disabled}>
          <TextBold>Prove your eligibility</TextBold> for the Mergooor Pass
        </Text>
        {disabled ? (
          <ProveWithSismoDisabled>
            <Image src={zkConnectDisabled} alt="zk-connect" style={{ marginRight: 10 }} />
            ZkConnect
          </ProveWithSismoDisabled>
        ) : (
          <ButtonContainer>
            {children}
          </ButtonContainer>
        )}
      </Content>
      <Checks style={{ marginTop: 20 }}>
        <CheckLine style={{ marginRight: 20 }} disabled={disabled}>
          <div>
            <Check width={14} style={{ marginRight: 5 }} />
          </div>
          <div>
            <Bold> Privacy:</Bold> Generate a ZK proof of eligibility on Sismo
            and claim your Pass
          </div>
        </CheckLine>
      </Checks>
    </Container>
  );
}
