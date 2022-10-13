import style from './CustomTextArea.module.scss';
interface textAreaProps {
  value: string;
  name: string;
  type: string;
  label: string;
  placeholder: string;
  key?: string;
  onChange: (e: any) => void;
}
function CustomTextArea(props: textAreaProps) {
  return (
    <div className={style.customTextAreaWrapper}>
      <textarea
        className={style.textArea}
        onChange={props.onChange}
        placeholder={props.placeholder}
        value={props.value||'test'}
        name={props.name}
      ></textarea>
    </div>
  );
}

export default CustomTextArea;
