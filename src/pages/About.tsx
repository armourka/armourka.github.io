import React from 'react'
// import { useNavigate } from 'react-router-dom'
import { Page } from '../components/Page'
import { Box, Fade, Typography } from '@mui/material'
import { CollapsableSection } from '../components/resume/CollapsableSection';
import { ContentLine } from '../components/resume/ContentLine';
import { Education } from '../components/resume/Education';
import { Ascii } from '../components/Ascii';
import truck from '../assets/truck'

// not working, idk giving up
function FadeInSection(props: any) {
  const [isVisible, setVisible] = React.useState(true);
  const domRef = React.useRef<HTMLDivElement>(null);
  const current = domRef.current;
  if (!current) return (<></>);
  React.useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach((entry) => {
        setVisible(entry.isIntersecting)
        console.log(entry.isIntersecting);
      });
    });
    observer.observe(current);
    return () => observer.unobserve(current);
  }, []);
  return (
    // <div
    //   className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}
    //   ref={domRef}
    // >
    //   {props.children}
    // </div>
    <Fade in={isVisible} ref={domRef}>
      {props.children}
    </Fade>
  );
}

export const About: React.FC = () => {
  // const navigate = useNavigate()
  return (
    <Page>
      <Box sx={{ margin: '0px auto', position: 'relative' }}>
        <Box sx={{ position: 'absolute', width: '75%' }}>
          <h1>Hello,</h1>

          <p>
            My name is KT Armour. I have 4+ years of experience as a full-stack
            developer and have worked for companies big and small. I have a passion for frontend development and for making
            complex projects look elegant and simple.
          </p>
          <p>
            I love to build things from scratch, and fix things that are broken. This is true in my software development as
            well as my hobbies - I am also passionate about organic gardening, automotive repair, and community service. I
            took a break from full-time work in 2023 to better balance all of the things I care about.
          </p>
          <p>
            Support me on this journey by hiring me for your next project!
          </p>
          <p>
            Primary Skills: Javascript, React JS, Redux, Material UI, HTML, CSS, NodeJS, Typescript
          </p>
          <p>
            Secondary Skills: Vue, Vuex, Python, Java, Storybook, ExpressJS, Ruby on Rails, GraphQL
          </p>
          {/* <p>
        Download my resume
        </p> */}
        </Box>
        <Box sx={{ position: 'relative', left: '60%', top: '60%', color: '#cc00ff', fontSize: '10px' }}>
          <Ascii formattedText={truck} />
        </Box>
      </Box>

    </Page>
  )
}
