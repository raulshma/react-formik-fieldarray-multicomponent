import React from 'react';
import { useFormContext } from 'react-hook-form';
function Middle() {
  const { handleSubmit, getValues } = useFormContext();

  const onSubmit = () => {
    const values = getValues();
    alert(JSON.stringify(values, null, 2))
  }
  return (
    <div>
      <code>Middle</code>
      <div>
        <button type="button" onClick={(e) => handleSubmit(onSubmit)(e)}>Submit</button>
      </div>
    </div>
  );
}

export default Middle;
