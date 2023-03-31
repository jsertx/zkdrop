import styled from "styled-components";

const Input = styled.input`
  font-size: 14px;
  line-height: 20px;
  padding: 0px 10px 0px 10px;
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

type Props = {
    placeholder?: string;
    onFocus?: () => void;
    onBlur?: () => void;
    onChange?: (value: string) => void;
    value?: string;
};

export default function InputText({ placeholder, onFocus, onBlur, onChange, value }: Props): JSX.Element {

  return (
    <Input 
        placeholder={placeholder}
        onFocus={() => onFocus && onFocus()}
        onBlur={() => onBlur && onBlur()}
        onChange={(e) => onChange && onChange(e.target.value)}
        value={value}
    />
  );
}
