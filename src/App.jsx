

// import { Routes } from './Routes/Routes'
import './App.css';
import { Address } from './Components/Address/Address';
import { Cart } from './Components/Cart/Cart';
import { OrderSummery } from './Components/OrderSummeryCard/OrderSummery';
import PaymentMethodCard from './Components/PaymentMethodCard/PaymentMethod';

function App() {
  return (
    <div>
      <Cart />
      <OrderSummery />
      <Address />
      <PaymentMethodCard />
    </div>
  );
}

export default App;
