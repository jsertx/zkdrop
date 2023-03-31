import styled from "styled-components";
import Logo, { LogoType } from "../Logo";
import { ArrowSquareOut } from "phosphor-react";

const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 30px 60px;

  color: white;

  @media (max-width: 1030px) {
    padding: 15px 16px;
  }
`;

const LeftGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  @media (max-width: 1030px) {
    gap: 10px;
  }
`;

const SocialGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;

  @media (max-width: 1030px) {
    gap: 7.78px;
  }
`;

const IconWrapper = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledIcon = styled(Logo)`
  width: 18px;
  height: 18px;

  @media (max-width: 1030px) {
    width: 10px;
    height: 10px;
  }
`;

const ProveWithSismoLink = styled.a`
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 1px 0;
`;

const PWSLogo = styled.div`
  font-family: ${(props) => props.theme.fonts.bebasNeue.style.fontFamily};
  font-weight: 700;
  font-size: 13.2772px;
  line-height: 15px;
  transform: translateY(1px);

  @media (max-width: 1030px) {
    font-size: 10px;
    line-height: 12px;
  }
`;

const WithLogo = styled.span`
  font-weight: 400;
  font-size: 9.13px;
  line-height: 15px;

  @media (max-width: 1030px) {
    font-size: 8px;
    line-height: 12px;
  }
`;

const ArrowLogoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 12px;
  height: 12px;

  @media (max-width: 1030px) {
    width: 10px;
    height: 10px;
  }
`;

const RightGroup = styled.div`
  font-family: ${(props) => props.theme.fonts.inter.style.fontFamily};
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  padding: 5px;

  @media (max-width: 1030px) {
    font-size: 10px;
    line-height: 18px;
    padding: 0;
  }
`;

const Bold = styled.span`
  font-weight: 600;
`;

export default function Footer() {

  return (
    <Container>
      <LeftGroup>
        <SocialGroup>
          <IconWrapper
            href="https://twitter.com/zkdrop_io"
            target="_blank"
          >
            <StyledIcon type={LogoType.TWITTER} size={18} />
          </IconWrapper>
          <IconWrapper
            href="https://discord.com/invite/sismo"
            target="_blank"
          >
            <StyledIcon type={LogoType.DISCORD} size={18} />
          </IconWrapper>
          <IconWrapper
            href="https://github.com/sismo-core/sismo-protocol/blob/main/contracts/zkdrop/ZKBadgeboundERC721.sol"
            target="_blank"
          >
            <StyledIcon type={LogoType.GITHUB_ROUNDED} size={18} />
          </IconWrapper>
        </SocialGroup>

        <ProveWithSismoLink
          href="https://docs.sismo.io/sismo-docs/what-is-sismo/prove-with-sismo"
          target="_blank"
        >
          <PWSLogo>
            PROVE<WithLogo> WITH </WithLogo>SISMO
          </PWSLogo>

          <ArrowLogoWrapper>
            <ArrowSquareOut size={"100%"} weight="bold" />
          </ArrowLogoWrapper>
        </ProveWithSismoLink>
      </LeftGroup>

      <RightGroup>
        Built by <Bold>Sismo</Bold>
      </RightGroup>
    </Container>
  );
}
