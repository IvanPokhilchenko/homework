import Page from "./Components/Page/Page";
import Photo from "./Components/Photo/Photo";
import AboutMe from "./Components/AboutMe/AboutMe";
import Education from "./Components/Education/Education";
import Hobbies from "./Components/Hobbies/Hobbies";
import Job from "./Components/Job/Job";


function App() {
  const photoInfo = {
    imageUrl: 'https://images.unsplash.com/photo-1536104968055-4d61aa56f46a?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    name: 'Ivan Pokhilchenko',
  };
  const aboutMeInfo = {
    description: 'I am a passionate developer who loves creating web applications.',
  };
  const educationInfo = 'Bachelor of Science in Computer Science';

  const hobbiesList = ['Reading', 'Traveling', 'Programming'];

  const jobInfo = 'The future frontend developer';
  

  return (
    <Page>
    <Photo {... photoInfo} />
    <AboutMe {... aboutMeInfo} />
    <Education educationInfo={educationInfo} />
    <Hobbies  hobbiesList = {hobbiesList} />
    <Job jobInfo={jobInfo} />
    </Page>
  );
}

export default App;
