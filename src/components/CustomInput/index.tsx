import style from './CustomInput.module.scss';
import { memo } from 'react';

interface inputProps {
  value: string;
  name: string;
  type: string;
  label: string;
  placeholder: string;
  key?: string;
  onChange: (e: any) => void;
}
function CustomInput(props: inputProps) {
  return (
    <div className={style.customInputWrapper}>
      <label
        className={style.customLabel}
        htmlFor={props.name}
      >{` ${props.label} `}</label>
      <input
        className={style.customInput}
        value={props.value}
        type={props.type}
        name={props.name}
        onChange={(e) => props.onChange(e)}
      />
    </div>
  );
}

export default memo(CustomInput);
