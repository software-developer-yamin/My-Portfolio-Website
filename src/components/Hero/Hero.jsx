import React from 'react';
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection, Mail } from './HeroStyles';


const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome To <br />
          My Personal Portfolio
        </SectionTitle>
        <SectionText>
          My name is Yamin and I am a web developer. I always try to be good at programming and learn modern technology to make myself better. My communication and team skills are good and I am a hardworking person.
        </SectionText>
        <Mail href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=developer.yamin@gmail.com" target="_blank">
          <Button onClick={props.handleClick}>Hire Me</Button>
        </Mail>
      </LeftSection>
    </Section>
  </>
);

export default Hero;