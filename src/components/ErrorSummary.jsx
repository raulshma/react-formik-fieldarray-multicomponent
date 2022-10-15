import React from 'react';
import { ErrorMessage } from '@hookform/error-message';

function ErrorSummary({
  errors,
  mode = 'ALL',
  showRowIndex = true,
  rowIndexMessage = '',
}) {
  const keys = Object.keys(errors);

  if (keys.length === 0) {
    return null;
  }
  let fields = keys;

  if (mode === 'FIELD_ARRAY') {
    fields = keys.filter((field) => Array.isArray(errors[field]));
    return (
      <div
        className="error-summary"
        style={{ display: 'flex', flexDirection: 'column' }}
      >
        {fields?.map((arrayFieldName) => {
          const fieldArray = errors[arrayFieldName];
          const arrayKeys = Object.keys(fieldArray);

          return arrayKeys?.map((keyIndex) => {
            const arrayItemFields =
              typeof fieldArray[keyIndex] !== 'undefined' &&
              Object.keys(fieldArray[keyIndex]);

            if (!arrayItemFields) return null;
            return arrayItemFields?.map((arrayItemField) => {
              return (
                <ErrorMessage
                  errors={errors}
                  name={`${arrayFieldName}[${keyIndex}].${arrayItemField}`}
                  as="div"
                  render={({ message }) => {
                    return (
                      <span>
                        {showRowIndex && <>At Row {Number(keyIndex) + 1}</>}{' '}
                        {message}
                      </span>
                    );
                  }}
                  key={`${arrayFieldName}[${keyIndex}].${arrayItemField}`}
                />
              );
            });
          });
        })}
      </div>
    );
  } else if (mode === 'FIELD')
    fields = keys.filter((field) => !Array.isArray(errors[field]));
  return (
    <div className="error-summary">
      {fields.map((fieldName) => (
        <ErrorMessage
          errors={errors}
          name={fieldName}
          as="div"
          key={fieldName}
        />
      ))}
    </div>
  );
}

export default ErrorSummary;
