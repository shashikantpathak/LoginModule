import React, { Component } from 'react';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import ForCompanies from '../Home/forcompanies';

const App = ({ children }) => (
  <>
    {/* <Header /> */}

    <main>
      {children}
    </main>
    
    
  </>
);

export default App;
