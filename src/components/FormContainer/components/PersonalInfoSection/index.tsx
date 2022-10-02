import CustomInput from './../../CustomInput';

function PersonalInfoSection() {
  return (
    <section>
      <CustomInput
        name={'Nome'}
        value={'Nome'}
        placeholder={'nome'}
        type={'text'}
        label={'First Name'}
        onChange={() => console.log('top')}
      />
    </section>
  );
}

export default PersonalInfoSection;
