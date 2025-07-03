import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { CartProvider } from './components/CartWidget/CartContext'


createRoot(document.getElementById('root')).render(
  <CartProvider>
    <App />
  </CartProvider>,
)
