import styled from 'styled-components';

interface inputProps {
  value: string;
  name: string;
  type: string;
  label: string;
  placeholder: string;
  onChange: () => void;
}

function CustomInput(props: inputProps) {
  const CustomInput = styled.input`
    border: 1px solid;
    border-radius: 8px;
    height: 2rem;
    padding-left: 0.5rem;
    width: 100%;
    font-size: 1rem;
    &:focus {
      outline: none;
      box-shadow: 0px 5px 5px royalblue;
      color: royalblue;
      transition: 300ms;
    }
  `;

  const CustomLabel = styled.label`
    ${CustomInput}:focus ~ & {
      color: royalblue;
    } ;
  `;

  const InputWrapper = styled.div`
    display: flex;
    flex-direction: column-reverse;
  `;

  return (
    <InputWrapper>
      <CustomInput
        value={props.value}
        type={props.type}
        name={props.name}
        onChange={props.onChange}
      ></CustomInput>
      <CustomLabel htmlFor={props.name}>{` ${props.label} `}</CustomLabel>
    </InputWrapper>
  );
}

export default CustomInput;
