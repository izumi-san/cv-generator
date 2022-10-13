import CustomTextArea from './../../../CustomTextArea';
import style from './../../FormSection.module.scss'

function SummarySection() {
  return (
    <section className={style.container}>
      <h2>Summary</h2>
      <CustomTextArea
        name={'summary'}
        value={''}
        placeholder={''}
        type={'text'}
        label={'Summary'}
        onChange={()=>{}}
      />
    </section>
  );
}

export default SummarySection;
