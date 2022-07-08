import React from 'react';
import Header from './Components/Header';
import Navigation from './Components/Navigation';
import Main from './Components/Main';
import SubContents from './Components/SubContents';
import Advertisement from './Components/Advertisement';
import style from './Components/style/style.module.css'


function App() {
  return (
    <div className={style.app}>
      <Header />
      <div className={style.contentContainer}>
        <Navigation />
        <Main>
          <div className={style.mainContentContainer}>
            <SubContents />
            <SubContents />
            <SubContents />
          </div>
        <Advertisement />
        </Main>
      </div>
      
    </div>
  );
}

export default App;

