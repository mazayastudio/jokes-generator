import React from 'react';

export default function Button({ callAPI }) {
  return <button onClick={callAPI}>Click to generate a joke</button>;
}
