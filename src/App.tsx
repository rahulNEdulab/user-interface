import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { Manage } from './Component/Manage';
// import { Date } from './Component/Date';
import Date from './Component/Date';
// import { FirstComponent } from './Component/firstContainer';
// import { SecondComponent } from './Component/secondComponent';
function App() {
  return (
    <div className="bg-black sm:content-center">

      <Manage />
      <Date />
      {/* <FirstComponent /> */}
      {/* <SecondComponent /> */}

    </div>
  );
}

export default App;
