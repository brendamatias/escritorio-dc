import * as React from 'react';
import type { HeadFC } from 'gatsby';
import GlobalStyle from '../styles/global';
import Home from '../components/Home';
import About from '../components/About';
import Contact from '../components/Contact';
import Services from '../components/Services';
import Projects from '../components/Projects';
import Footer from '../components/Footer';

function IndexPage() {
  return (
    <main>
      <GlobalStyle />
      <Home />
      <About />
      <Contact />
      <Services />
      <Projects />
      <Footer />
    </main>
  );
}

export default IndexPage;

export const Head: HeadFC = () => <title>Escritório DC</title>;
