import Routes from './routes'
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'
import { CartProvider } from './hooks/useCart'



function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <Navbar />
        <Routes />
        <Footer />
        <ToastContainer autoClose={3000} />
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
