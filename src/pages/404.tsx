import * as React from 'react';
import { HeadFC } from 'gatsby';

function NotFoundPage() {
  return <div>404</div>;
}

export default NotFoundPage;

export const Head: HeadFC = () => <title>Not found</title>;
