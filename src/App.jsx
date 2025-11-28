import { useState, useEffect } from 'react'
import Intro from './components/Intro';
import Layout from './layouts/Layout';
import Projects from './components/Projects';
import AboutMe from './components/AboutMe';
import Contact from './components/Contact';
import Experience from './components/Experience';
import Stack from './components/Stack';

function App() {

  return (
    <Layout>

	
      <Intro />
      <AboutMe />
      <Experience />
      <Projects />
      <Stack />
      <Contact />
      

    
    </Layout>
  )
}

export default App;
