import styled from "styled-components";
import { useState, useMemo, useEffect } from "react";
import { MagnifyingGlass } from "phosphor-react";
import colors from "../../../theme/colors";
import { FuzzySearch } from "../../../utils/fuzzySearch";
import Logo, { LogoType } from "../../../components/Logo";
import { useZkConnect } from "@sismo-core/zk-connect-react";
import { zkConnectConfig } from "..";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 6px;

  @media (max-width: 1030px) {
    gap: 3px;
  }
`;

const SearchInputWrapper = styled.div`
  position: relative;
  width: 100%;
`;

const SearchInput = styled.input`
  font-size: 14px;
  line-height: 20px;
  padding: 0px 10px 0px 35px;
  background-color: #fef3f7;

  border: 1px solid ${(props) => props.theme.colors.blue9};
  border-radius: 5px;
  width: 100%;
  height: 40px;

  color: ${(props) => props.theme.colors.blue9};

  :focus {
    outline: none;
  }
  ::placeholder {
    font-family: ${(props) => props.theme.fonts.inter.style.fontFamily};
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    font-style: italic;
    color: #959aab;
  }

  @media (max-width: 1030px) {
    font-size: 8px;
    line-height: 10px;
    height: 25px;
    border: 0.5px solid ${(props) => props.theme.colors.blue9};
    border-radius: 2.53px;
    padding: 0px 10px 0px 20.24px;

    ::placeholder {
      font-size: 8px;
      line-height: 10px;
    }
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: calc(50% - 9px);
  left: 10px;
  pointer-events: none;
  width: 18px;
  height: 18px;

  @media (max-width: 1030px) {
    top: calc(50% - 5px);
    left: 5px;
    width: 10px;
    height: 10px;
  }
`;

const SearchResultWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 6px 10px;
  background-color: #f2adba;
  border-radius: 5px;
  height: 150px;
  border: 0.5px solid #2a3557;
  overflow-y: scroll;

  @media (max-width: 1030px) {
    padding: 3px 3px 3px 5px;
    border-radius: 1.1px;
    border: 0.252954px solid #2a3557;
  }
`;

const SearchResultItem = styled.a`
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 12px;
  line-height: 20px;
  font-family: ${(props) => props.theme.fonts.inter.style.fontFamily};
  font-weight: 400;
  color: ${(props) => props.theme.colors.blue10};
  text-decoration: none;

  @media (max-width: 1030px) {
    font-size: 7px;
    line-height: 10px;
  }
`;

const LogoStyled = styled(Logo)`
  width: 12px;
  height: 12px;
  fill: ${(props) => props.theme.colors.blue10};

  @media (max-width: 1030px) {
    gap: 2px;
    width: 7.5px;
    height: 7.5px;
  }
`;

type Props = {
  groupId: string;
};

export default function Search({ groupId }: Props): JSX.Element {
  const [isFocused, setIsFocused] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const { zkConnect } = useZkConnect({ 
    config: zkConnectConfig
  })
  const [loading, setLoading] = useState(true);
  const [eligibleAccounts, setEligibleAccounts] = useState(null);

  useEffect(() => {
    function convertObjectToStringArray(object: Object) {
      const stringArray = [];
      for (const key in object) {
        stringArray.push(key);
      }
      return stringArray;
    }
    async function getMembersOfGroup() {
      try {
        setLoading(true);
        const group = await zkConnect.getGroup({ id: groupId });
        const _eligibleAccounts = convertObjectToStringArray(group.data);
        setEligibleAccounts(_eligibleAccounts);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
    getMembersOfGroup();
  }, [])

  function onChange(event: React.ChangeEvent<HTMLInputElement>) {
    setSearchValue(event.target.value);
  }

  const searchedAccounts = useMemo(() => {
    if (searchValue.length > 1 && eligibleAccounts.length > 0) {
      const _searchedAccounts = FuzzySearch(eligibleAccounts, searchValue);
      return _searchedAccounts;
    } else {
      return eligibleAccounts;
    }
  }, [eligibleAccounts, searchValue]);

  return (
    <Container>
      <SearchInputWrapper>
        <SearchInput
          placeholder="Search by GitHub account or Ethereum address"
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          onChange={(e) => onChange(e)}
          value={searchValue}
        />
        <IconWrapper>
          <MagnifyingGlass
            size={"100%"}
            color={
              isFocused || searchValue.length > 0 ? colors.blue9 : "#959AAB"
            }
            weight="bold"
          />
        </IconWrapper>
      </SearchInputWrapper>
      <SearchResultWrapper>
        {loading ? 
        <SearchResultItem>Loading...</SearchResultItem>
      :
      <>
      {searchedAccounts?.length > 0 ? (
        searchedAccounts.map((account, index) => {
          return (
            <SearchResultItem
              key={account + "eligibleAccount" + index}
              href={
                "https://github.com/sismo-core/sismo-hub/tree/main/group-generators/generators/the-merge-contributor/index.ts"
              }
              target="_blank"
            >
              {account.includes("twitter") ? (
                <>
                  <LogoStyled type={LogoType.TWITTER} />
                  {account.split("twitter:")[1]}
                </>
              ) : account.includes("github") ? (
                <>
                  <LogoStyled type={LogoType.GITHUB_ROUNDED} />
                  {account.split("github:")[1]}
                </>
              ) : account.match(/^0x[a-fA-F0-9]{40}$/g) ||
                account.includes(".eth") ? (
                <>
                  <LogoStyled type={LogoType.ETHEREUM} />
                  {account}
                </>
              ) : (
                account
              )}
            </SearchResultItem>
          );
        })
      ) : (
        <SearchResultItem>No results found</SearchResultItem>
      )}
      </>}
      </SearchResultWrapper>
    </Container>
  );
}
