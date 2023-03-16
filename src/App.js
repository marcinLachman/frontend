import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Layout from 'pages/Layout';
import Home from 'pages/Home';
import HubDetails from 'pages/HubDetails';

const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <Layout /> }>
          <Route index element={ <Home /> } />
          <Route path='hubdetails/:id' element={<HubDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
