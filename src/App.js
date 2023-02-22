import CounterPage from './CounterPage';
import {BrowserRouter as Router,Route,Routes,Switch} from 'react-router-dom'

function App() {
  return (
    <>

<Router>
   <Routes>
   <Route path="/" element={<CounterPage/>} />
   </Routes>
  </Router>
    </>

  );
}

export default App;
