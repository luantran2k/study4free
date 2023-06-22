import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import './index.css';
import { store } from './store/index.ts';
import { PayPalScriptProvider } from '@paypal/react-paypal-js';

const initialOptions = {
  clientId:
    'AT-ItDfkViOYl_1sIqrltcSmzXgk-haZJoDv1okc2_zKaiXfVNOuoVizpVmuj0Drr62Imp8yvmAn58wq',
  currency: 'USD',
  intent: 'capture',
};
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <PayPalScriptProvider deferLoading={true} options={initialOptions}>
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </PayPalScriptProvider>
  </React.StrictMode>
);
