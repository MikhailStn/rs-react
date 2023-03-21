import React from 'react';
import './notFound.css';

function PageNotFound() {
  return (
    <main className="error__page">
      <h1 className="error__title">Error: Page is not found</h1>
      <img className="error__logo" src="../logos/404.png"></img>
    </main>
  );
}

export default PageNotFound;
