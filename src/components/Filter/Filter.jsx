import React from 'react';
import { Input } from './Filter.styled';

function Filter({ value, onChange }) {
  return (
    <Input
      type="text"
      placeholder="Search contacts"
      value={value}
      onChange={onChange}
    />
  );
}

export default Filter;
