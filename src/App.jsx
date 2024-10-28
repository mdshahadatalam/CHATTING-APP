import 'bootstrap/dist/css/bootstrap.min.css';
import Rejistration from './Pages/Rejistration';
import Bar from './Components/Bar';
import { createBrowserRouter, createRoutesFromElements, Route, Router, RouterProvider } from 'react-router-dom';
import { Loging } from './Pages/Loging';
// import { RootLayout } from './RootLayout';
import Home from './Pages/Home';
import 'react-toastify/dist/ReactToastify.css';
import LoggedInUserRoute from './PrivateRoute/LogedInUser';
import NotLoggedInUserRoute from './PrivateRoute/NotLoggedInUserRoute';
import { RootLayout } from './RootLayout';
import { Message } from './Pages/Message';

function App() {
 
  const router = createBrowserRouter(createRoutesFromElements(
 <Route>

       <Route element={<LoggedInUserRoute/>} > 
   
       <Route element={<RootLayout/>}>
       <Route path="/" element={<Home/>} />
       <Route path="/message" element={<Message/>} />
       </Route>

      </Route>
       
      
       <Route element={<NotLoggedInUserRoute/>}>  
          <Route path="/Login" element={<Loging/>} />
          <Route path="/Registration" element={<Rejistration/>} />
       </Route>
      

      
 </Route>
  ))

  return (

    <>
   <RouterProvider router={router} /> 
    </>
  )
}

export default App
