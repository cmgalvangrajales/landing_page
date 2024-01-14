import { Route, Routes } from 'react-router-dom';
import 'tailwindcss/tailwind.css';

import NotFound from '@pages/404';

import { Content, Header } from '@components/layout';

import ComingSoon from '../ComingSoon';

const App = () => {
  return (
    <div className="overflow-hidden grid grid-rows-[auto_1fr]">
      <Header />
      <Content>
        <Routes>
          <Route path="/" element={<ComingSoon />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Content>
    </div>
  );
};

export default App;
