import HeadPage from "../../src/components/Head";
import Theme from "../../src/theme";
import MergerPass from "../../src/pages/MergooorPass";

function Index(): JSX.Element {
  return (
    <Theme>
      <HeadPage
        title="ZKDrop.io - Drop to your community, respect their privacy"
        description="Privacy-preserving airdrops using ZKP"
        twitterHandle="@zkdrop_io"
        author="@zkdrop_io"
        mainUrl={process.env.NEXT_PUBLIC_ZKDROP_URL}
      />
      <MergerPass/>
    </Theme>
  );
}

export default Index;
