import React from 'react';
import { useFormContext } from 'react-hook-form';

function Top() {
  const { register } = useFormContext();
  return (
    <div style={{ display: 'flex', flexDirection: "column", gap: '1em' }}>
      <code>Top</code>
      <input {...register('firstName')} />
      <input  {...register('lastName')} />
      <input {...register('email')} />
    </div>
  );
}

export default Top;
