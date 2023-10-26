import { createBrowserRouter } from 'react-router-dom';
import Root from '../MailLayout/Root';
import Home from '../pages/Home/Home';
import Login from '../pages/login/Login';
import Resister from '../pages/resister/Resister';

const Router = createBrowserRouter([
    {
        path:'/',
        element:<Root></Root>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/resister',
                element:<Resister></Resister>
            }
        ]
    }
])
export default Router;