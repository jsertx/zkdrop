import { ArrowsLeftRight, Check } from "phosphor-react";
import { useState } from "react";
import styled from "styled-components";
import StyledButton from "../../../components/StyledButton";
import { useMainMinified } from "../../../libs/mainMinified";
import AddDestinationModal from "./AddDestinationModal";

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

const TextBold = styled.span`
  font-weight: 600;
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

const WalletContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 59px;
`;

const Account = styled.div`
  color: ${(props) => props.theme.colors.blue9};
  background: rgba(244, 212, 218, 0.3);
  border-radius: 5px;
  padding: 0px 9px;
  display: flex;
  align-items: center;
  height: 30px;
`;

const Wallet = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const Switch = styled.div`
  cursor: pointer;
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

type Props = {
  onDestinationSelected: (destination: string) => void
}

export default function ClaimToDestination({ onDestinationSelected }: Props): JSX.Element {
  const [isAddDestinationOpen, setIsAddDestinationOpen] = useState(false);
  const [destination, setDestination] = useState(null); 
  const { mainMinified } = useMainMinified(destination);

  return (
    <Container>
      <AddDestinationModal 
        isOpen={isAddDestinationOpen}
        onAddDestination={(value) => {
          setDestination(value);
          onDestinationSelected(value);
          setIsAddDestinationOpen(false);
        }}
        onClose={() => {
          setIsAddDestinationOpen(false);
        }}
      />
      <Title>Claim to destination account</Title>
      <Content disabled={destination}>
        <Text style={{ marginBottom: 20 }} disabled={destination}>
          <TextBold>Where will you mint</TextBold> your Mergooor Pass?
        </Text>
        <WalletContainer>
          {destination ? (
            <Wallet>
              <Account>{mainMinified}</Account>
              <Switch onClick={() => setIsAddDestinationOpen(true)}>
                <ArrowsLeftRight />
              </Switch>
            </Wallet>
          ) : (
            <StyledButton
              onClick={() => setIsAddDestinationOpen(true)}
              style={{ width: "100%" }}
            >
              Add Destination
            </StyledButton>
          )}
        </WalletContainer>
      </Content>
      <Checks style={{ marginTop: 20 }}>
        <CheckLine
          style={{ marginRight: 20, marginBottom: 10 }}
          disabled={destination}
        >
          <div>
            <Check width={14} style={{ marginRight: 5 }} />
          </div>
          <div>
            <Bold>No gas fees:</Bold> You can use a new wallet
          </div>
        </CheckLine>
        <CheckLine style={{ marginRight: 20 }} disabled={destination}>
          <div>
            <Check width={14} style={{ marginRight: 5 }} />
          </div>
          <div>
            <Bold>Account-bound:</Bold> If your destination is lost, you will be
            able to burn and remint
          </div>
        </CheckLine>
      </Checks>
    </Container>
  );
}
