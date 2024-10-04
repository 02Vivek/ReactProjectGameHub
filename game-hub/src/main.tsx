import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import themes from './themes'
// import App from './App'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './store/store'
import { RouterProvider } from 'react-router-dom';
import router from './Routes/router'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <BrowserRouter> Wrap your application with BrowserRouter */}
        <ChakraProvider theme={themes}>
          <ColorModeScript initialColorMode={themes.config.initialColorMode} />
          {/* <App /> */}<RouterProvider router={router} />
        </ChakraProvider>
      {/* </BrowserRouter> */}
    </Provider>
  </React.StrictMode>
);
