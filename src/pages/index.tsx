import * as React from 'react';
import type { HeadFC } from 'gatsby';
import GlobalStyle from '../styles/global';
import Home from '../components/Home';
import About from '../components/About';

function IndexPage() {
  return (
    <main>
      <GlobalStyle />

      <Home />
      <About />
    </main>
  );
}

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
