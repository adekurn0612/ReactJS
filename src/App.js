
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/share/layout';
import Calculator from './components/pages/calculator';
import ListProduct from './components/pages/listProduct';
import DataObject from './components/pages/dataObject';
import Fotter from './components/share/fotter';
import Header from './components/share/Header';

function App() {
  return (
    <div >
      <Router>
        <Routes>
        <Route path='/' element={<Layout/>}>

        <Route path='/calculator' element={<Calculator />} />
          <Route path='/listproduct' element={<ListProduct />} />
          <Route path='/dataobject' element={<DataObject />} />
        </Route>

        </Routes>
      </Router>
    </div>
  );
}

export default App;
