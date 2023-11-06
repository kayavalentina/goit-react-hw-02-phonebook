import React from 'react';

function Filter({ value, onChange }) {
  return (
    <input
      type="text"
      placeholder="Search contacts"
      value={value}
      onChange={onChange}
    />
  );
}

export default Filter;