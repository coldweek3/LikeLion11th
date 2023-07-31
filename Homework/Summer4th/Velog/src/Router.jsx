import { createBrowserRouter, Route } from 'react-router-dom';
import Home from '../Pages/Home';
import App from './App';
import StyledComponentmemo from '../Pages/StyledComponentmemo';
import ReactRouters from '../Pages/ReactRouters';
import Techit from '../Pages/Techits';

const Router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        element: <Home />
      },
      {
        path: '/styled-components',
        element: <StyledComponentmemo />
      },
      {
        path: '/react-router',
        element: <ReactRouters />
      },
      {
        path: '/techit',
        element: <Techit />
      }
    ]
  }
]);

export default Router;