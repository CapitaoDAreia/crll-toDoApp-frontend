import React from 'react';
import FormContext from './Components/Form/FormContext';
import Home from './Screens/Home/Home';

function App() {
  return (
    <>
      <FormContext>
        <Home/>
      </FormContext>
    </>
  );
}

export default App;
