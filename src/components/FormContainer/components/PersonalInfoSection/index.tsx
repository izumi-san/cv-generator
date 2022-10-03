import CustomInput from './../../CustomInput';

interface Props {
  formValues: {
    firstName: string;
    lastName: string;
    title: string;
    cep: string;
    phoneNumber: string;
    email: string;
    linkedIn: string;
  };
  handleInputs: (e: any) => void;
}

function PersonalInfoSection(props: Props) {
  return (
    <section>
      <h2>Personal Info</h2>
      <CustomInput
        name={'firstName'}
        value={props.formValues.firstName}
        placeholder={''}
        type={'text'}
        label={'First Name'}
        onChange={props.handleInputs}
      />
      <CustomInput
        name={'lastName'}
        value={props.formValues.lastName}
        placeholder={''}
        type={'text'}
        label={'Last Name'}
        onChange={props.handleInputs}
      />
      <CustomInput
        name={'title'}
        value={props.formValues.title}
        placeholder={''}
        type={'text'}
        label={'Title'}
        onChange={props.handleInputs}
      />
      <CustomInput
        name={'cep'}
        value={props.formValues.cep}
        placeholder={''}
        type={'text'}
        label={'CEP'}
        onChange={props.handleInputs}
      />
      <CustomInput
        name={'phoneNumber'}
        value={props.formValues.phoneNumber}
        placeholder={''}
        type={'text'}
        label={'Phone Number'}
        onChange={props.handleInputs}
      />
      <CustomInput
        name={'email'}
        value={props.formValues.email}
        placeholder={''}
        type={'text'}
        label={'email'}
        onChange={props.handleInputs}
      />
      <CustomInput
        name={'linkedIn'}
        value={props.formValues.linkedIn}
        placeholder={''}
        type={'text'}
        label={'linkedIn'}
        onChange={props.handleInputs}
      />
    </section>
  );
}

export default PersonalInfoSection;
