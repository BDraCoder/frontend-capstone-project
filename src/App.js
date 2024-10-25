import { Outlet } from 'react-router-dom';
import { Provider } from './components/ui/provider';

import './css/App.css';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <Provider>
      <div className="App">
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </Provider>
  );
}

export default App;
