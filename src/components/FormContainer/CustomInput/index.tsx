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
      <input
        className={style.customInput}
        value={props.value}
        type={props.type}
        name={props.name}
        onChange={(e) => props.onChange(e)}
      />
      <label
        className={style.customLabel}
        htmlFor={props.name}
      >{` ${props.label} `}</label>
    </div>
  );
}

export default memo(CustomInput);
