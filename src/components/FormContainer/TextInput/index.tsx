import styled from 'styled-components';

interface inputProps {
  value: string;
}

function TextInput(props: inputProps) {
  const CustomTextInput = styled.input`
    border: 1px solid;
    border-radius: 8px;
    height: 1.7rem;
    padding-left: 0.5rem;
    width: 100%;
    font-size: 1rem;
    &:focus {
      outline: none;
      box-shadow: 0px 5px 5px lightslategray;
    }
  `;
  return <CustomTextInput placeholder={`${props.value}`}></CustomTextInput>;
}

export default TextInput;
