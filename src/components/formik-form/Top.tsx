import React from 'react';

function Top({ form }) {
  return (
    <div style={{ display: 'flex', flexDirection: "column", gap: '1em' }}>
      <code>Top</code>
      <input name="firstName" value={form.values.firstName} onChange={form.handleChange} />
      <input name="lastName" value={form.values.lastName} onChange={form.handleChange} />
      <input name="email" value={form.values.email} onChange={form.handleChange} />
    </div>
  );
}

export default Top;
