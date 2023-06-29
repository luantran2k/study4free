<<<<<<< HEAD
=======
import { PayPalScriptProvider } from '@paypal/react-paypal-js';
>>>>>>> 203b43424af9f95dafc58881575da12fb178dff3
import ReactDOM from 'react-dom/client';
import 'react-quill/dist/quill.bubble.css';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import App from './App.tsx';
import './index.css';
import { store } from './store/index.ts';

const initialOptions = {
  clientId:
    'AT-ItDfkViOYl_1sIqrltcSmzXgk-haZJoDv1okc2_zKaiXfVNOuoVizpVmuj0Drr62Imp8yvmAn58wq',
  currency: 'USD',
  intent: 'capture',
};
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <PayPalScriptProvider deferLoading={true} options={initialOptions}>
    <Provider store={store}>
      <ToastContainer />
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </PayPalScriptProvider>
);
