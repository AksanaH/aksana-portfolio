import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import './index.css';
import Portfolio from './components/Portfolio.jsx'
import About from './components/About.jsx';
// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <App />,
//     children: [],
//   },
// ]);

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <About /> },
      // Add other routes here
      { path: 'portfolio', element: <Portfolio /> },
      // { path: 'contact', element: <Contact /> },
      // { path: 'resume', element: <Resume /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);