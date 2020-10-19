import React from 'react';
import '../styles/index.css';

export default function FrameComponent({ children }) {
  return (
    <>
      <div>{children}</div>
    </>
  );
}
