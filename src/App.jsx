import React from 'react';
import {
  Container,
} from 'semantic-ui-react';

import Header from './components/Header.jsx';

function App() {
  return (
    <div>
      <Header />
      <Container>
        This is a test.
      </Container>
    </div>
  );
}

export default App;
