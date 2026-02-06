import Intro from '../components/Intro';
import Layout from './Layout';
import Projects from '../components/Projects';
import AboutMe from '../components/AboutMe';
import Contact from '../components/Contact';
import Experience from '../components/Experience';
import Stack from '../components/Stack';

function Index(){
    return(
        <Layout>
            <Intro />
            <AboutMe />
            <Projects />
            <Experience />            
            <Stack />
            <Contact />
        </Layout>
    )
}

export default Index