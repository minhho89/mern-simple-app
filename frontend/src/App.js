import './App.css';
import Header from './components/Header/Header';
import InputCard from "./components/InputCard/InputCard";
import ProductList from "./components/ProductList/ProductList";
function App() {
  return (
    <div className="app">
     <Header />
        <InputCard />
        <ProductList />
    </div>
  );
}

export default App;
