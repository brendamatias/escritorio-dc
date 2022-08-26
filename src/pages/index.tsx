import * as React from 'react';
import type { HeadFC } from 'gatsby';
import GlobalStyle from '../styles/global';

function IndexPage() {
  return (
    <main>
      <GlobalStyle />
    </main>
  );
}

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
