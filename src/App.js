import { Outlet } from 'react-router-dom';

import './App.css';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <Outlet />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
