import ProductCard from './components/ProductCard.jsx'
function App(){
  return (
    <div>
      <h1>React learning</h1>
      <p>Welcome to React!</p>
      
      <ProductCard name="macbookpro" price={10000}  />
<ProductCard name="victus" price={50000}  />
<ProductCard name="dell" price={30000}  />
    </div>
    
  )
}
export default App;