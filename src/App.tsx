import React from 'react';
import { useFormik, Form, FormikProvider } from 'formik';
import Top from './components/Top';
import Middle from './components/Middle';
import Bottom from './components/Bottom';
import './App.css';

function App() {
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      items: [
        {
          name: '',
          price: 0,
        },
      ],
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div className="App">
      <FormikProvider value={formik}>
        <form
          onSubmit={(values) => {
            alert(JSON.stringify(values, null, 2));
          }}
          style={{ display: 'flex', flexDirection: "column", gap: '1em' }}
        >
          <Top form={formik} />
          <Middle form={formik} />
          <Bottom form={formik} />
        </form>
        <pre style={{ textAlign: 'left', fontSize: "0.725em" }}>{JSON.stringify(formik.values, null, 2)}</pre>
      </FormikProvider>
    </div>
  );
}

export default App;
