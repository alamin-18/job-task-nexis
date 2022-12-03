
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Login from './Pages/Login/Login';
import SingUp from './Pages/SingUp/SingUp/SingUp';
import Table from './Pages/Table/Table';

function App() {
    const router = createBrowserRouter([
      {path:'/',element:<SingUp></SingUp>},
      {path:'/login',element:<Login></Login>},
      {path:'/table',element:<Table></Table>}
    ])
  return (
    <div className="App">
     <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
