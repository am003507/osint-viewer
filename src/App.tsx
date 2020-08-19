import * as React from 'react';
import TestComponent from '@components/TestComponent';
import { Button, TextField } from '@material-ui/core';

const App: React.FC = () => {
  return (
    <div>
      <TestComponent />
      Init
      <TextField />
      <Button>ddd</Button>
    </div>
  );
};

export default App;
