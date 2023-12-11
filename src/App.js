import LockerRoom from './components/LockerRoom';
import UserList from './components/UserList';
import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <UserList />
      <LockerRoom />
      <ToastContainer />
    </div>
  );
}

export default App;
