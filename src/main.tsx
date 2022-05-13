import React from 'react';
import ReactDOM from 'react-dom/client';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import './assets/style/index.css';
import { AppRoutes } from './routes';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AppRoutes />
  </React.StrictMode>,
);
