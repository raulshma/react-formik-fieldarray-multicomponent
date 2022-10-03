import { FormikBag, FormikConfig, FormikHandlers, FormikProps, FormikValues } from 'formik';
import React from 'react';
function Middle({ form }) {
  return (
    <div>
      <code>Middle</code>
      <div>
        <button type="submit" onClick={form.handleSubmit}>Submit</button>
      </div>
    </div>
  );
}

export default Middle;
