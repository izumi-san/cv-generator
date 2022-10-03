import EducationSection from './components/EducationSection';
import ExperienceSection from './components/ExperienceSection';
import PersonalInfoSection from './components/PersonalInfoSection';
import SkillsSection from './components/SkillsSection';
import SummarySection from './components/SummarySection';
import { useState } from 'react';
import style from './FormSection.module.scss';

function FormContainer() {
  const personalInfos = {
    firstName: '',
    lastName: '',
    title: '',
    cep: '',
    phoneNumber: '',
    email: '',
    linkedIn: '',
  };

  const [personalValues, setPersonalValues] = useState(personalInfos);

  const handleInputs = (e) => {
    const { name, value } = e.target;
    console.log(name, value);

    setPersonalValues({
      ...personalValues,
      [name]: value,
    });
  };

  return (
    <section className={style.formSection}>
      <PersonalInfoSection
        formValues={personalValues}
        handleInputs={handleInputs}
      />
      <SummarySection />
      <ExperienceSection />
      <SkillsSection />
      <EducationSection />
    </section>
  );
}

export default FormContainer;
