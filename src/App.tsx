import React from 'react';
import './App.css';
import FormikForm from './components/formik-form/FormikForm';
import ReactHookForm from './components/react-hook-form/ReactHookForm';

function App() {


  return (
    <div className="App">
      <FormikForm />
      <ReactHookForm />
    </div>
  );
}

export default App;
