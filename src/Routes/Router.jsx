import { createBrowserRouter } from 'react-router-dom';
import Root from '../MailLayout/Root';
import Home from '../pages/Home/Home';
import Login from '../pages/login/Login';
import Resister from '../pages/resister/Resister';
import Checkout from '../pages/checkout/Checkout';

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
            },
            {
                path:'/checkout/:id',
                element:<Checkout></Checkout>,
                loader: ({params}) => fetch(`http://localhost:5000/services/${params.id}`)
            }
        ]
    }
])
export default Router;