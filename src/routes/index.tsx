import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from '../App';
import Detail from '../screen/detail';

export const AppRoutes = () => {
  return (
    <>
      <BrowserRouter basename="/imageAdmin">
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/detail" element={<Detail />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
