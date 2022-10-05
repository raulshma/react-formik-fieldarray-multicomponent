import { useFormik, FormikProvider } from 'formik';
import React from 'react';
import Top from './Top';
import Middle from './Middle';
import Bottom from './Bottom';

function FormikForm() {
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
    <div>
      <h1>Formik Form</h1>
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
  )
}

export default FormikForm