import { Field, FieldArray, } from 'formik';
import React from 'react';

function Bottom({ form }) {
  return (
    <div style={{ display: 'flex', flexDirection: "column", gap: '1em' }}>
      <code>Bottom</code>
      <FieldArray
        name="items"
        render={arrayHelpers => (
          <div>
            {form.values.items && form.values.items.length > 0 ? (
              form.values.items.map((item, index) => (
                <div key={index} style={{ display: 'flex', gap: '0.5em' }}>
                  <Field name={`items.${index}.name`} />
                  <Field name={`items.${index}.price`} />
                  <button
                    type="button"
                    onClick={() => arrayHelpers.remove(index)}
                  >
                    -
                  </button>
                  <button
                    type="button"
                    onClick={() => arrayHelpers.insert(index, { name: '', price: 0 })}
                  >
                    +
                  </button>
                </div>
              ))
            ) : (
              <button type="button" onClick={() => arrayHelpers.push({ name: '', price: 0 })}>
                Add a item
              </button>
            )}
          </div>
        )}
      />
    </div>
  );
}

export default Bottom;
