import './App.css';
import Route from './routes'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <ToastContainer autoClose={2000} />
      <Route />
    </div>
  );
}

export default App;
