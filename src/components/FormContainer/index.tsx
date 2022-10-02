import EducationSection from './components/EducationSection';
import ExperienceSection from './components/ExperienceSection';
import PersonalInfoSection from './components/PersonalInfoSection';
import SkillsSection from './components/SkillsSection';
import SummarySection from './components/SummarySection';
import styled from 'styled-components';

function FormContainer() {

    const FormWrapper = styled.div`
      border: 1px solid;
    `
  return (
    <FormWrapper>
      <PersonalInfoSection />
      <SummarySection />
      <ExperienceSection />
      <SkillsSection />
      <EducationSection />
    </FormWrapper>
  );
}

export default FormContainer;
