import AvalancheLogo from "./components/AvalancheLogo";
import DiscordLogo from "./components/DiscordLogo";
import DiscordSquaredLogo from "./components/DiscordSquaredLogo";
import EthereumLogo from "./components/EthereumLogo";
import GithubRoundedLogo from "./components/GithubRoundedLogo";
import GnosisLogo from "./components/GnosisLogo";
import PolygonLogo from "./components/PolygonLogo";
import TwitterLogo from "./components/TwitterLogo";
import TwitterRoundedLogo from "./components/TwitterRoundedLogo";
import ProofLogo from "./components/ProofLogo";

export enum LogoType {
  AVALANCHE = "AVALANCHE",
  DISCORD = "DISCORD",
  DISCORD_SQUARED = "DISCORD_SQUARED",
  ETHEREUM = "ETHEREUM",
  GITHUB_ROUNDED = "GITHUB_ROUNDED",
  GNOSIS = "gnosis",
  POLYGON = "polygon",
  PROOF = "PROOF",
  TWITTER = "TWITTER",
  TWITTER_ROUNDED = "TWITTER_ROUNDED",
}

type Props = {
  size?: number;
  color?: string;
  secondaryColor?: string;
  style?: React.CSSProperties;
  type: LogoType;
  className?: string;
};

export default function Logo({
  size = 32,
  color = "white",
  secondaryColor = "black",
  style,
  type,
  className,
}: Props): JSX.Element {
  switch (type) {
    case LogoType.AVALANCHE:
      return (
        <AvalancheLogo
          size={size}
          color={color}
          style={style}
          className={className}
        />
      );

    case LogoType.DISCORD:
      return (
        <DiscordLogo
          size={size}
          color={color}
          style={style}
          className={className}
        />
      );

    case LogoType.DISCORD_SQUARED:
      return (
        <DiscordSquaredLogo
          size={size}
          color={color}
          style={style}
          className={className}
        />
      );

    case LogoType.ETHEREUM:
      return (
        <EthereumLogo
          size={size}
          color={color}
          style={style}
          className={className}
        />
      );

    case LogoType.GITHUB_ROUNDED:
      return (
        <GithubRoundedLogo
          size={size}
          color={color}
          style={style}
          className={className}
        />
      );

    case LogoType.GNOSIS:
      return (
        <GnosisLogo
          size={size}
          color={color}
          style={style}
          className={className}
        />
      );

    case LogoType.PROOF:
      return (
        <ProofLogo
          size={size}
          color={color}
          style={style}
          className={className}
        />
      );

    case LogoType.POLYGON:
      return (
        <PolygonLogo
          size={size}
          color={color}
          style={style}
          className={className}
        />
      );

    case LogoType.TWITTER:
      return (
        <TwitterLogo
          size={size}
          color={color}
          style={style}
          className={className}
        />
      );

    case LogoType.TWITTER_ROUNDED:
      return (
        <TwitterRoundedLogo
          size={size}
          color={color}
          secondaryColor={secondaryColor}
          style={style}
        />
      );

    default:
      return null;
  }
}
