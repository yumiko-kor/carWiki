import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { RecoilRoot } from 'recoil';
import ReactGA from 'react-ga';

const root = ReactDOM.createRoot(document.getElementById('root'));

// 발급받은 추적ID를 환경 변수로 불러온다.
const TRACKING_ID = process.env.REACT_APP_GA_TRACKING_ID; 
ReactGA.initialize(TRACKING_ID);

root.render(
  <React.StrictMode>
    <RecoilRoot>
      <App />
    </RecoilRoot>
  </React.StrictMode>
);