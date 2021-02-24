import logo from './logo.svg';
import './App.css';
import reactDom from 'react-dom';

function Person(props){
  return (
  <div style = {{border:'2px solid red',margin:'10px',padding:'10px'}}>
    <h1>{props.name}</h1>
    <h3>{props.profession}</h3>
  </div>
  )
}
var style = {
  border: '1px solid white',
  color:'green',
  margin: '10px',
  padding: '10px'
}
function BDUniversity(props) {
  return (<div style={style}>
  <h2>{props.name}</h2> 
  <h4>Rank In All Private Uni: {props.rank}</h4>
  </div>)
}
function Product(props){
  const style = {
    border: '1px solid gray',
    borderRadius: '10px',
    height: '200px',
    width: '200px',
    backgroundColor: 'lightgray',
    float: 'left',
    
  }
  return (
    <div style={style}>
      <h3>{props.name}</h3>
      <h2>{props.price}</h2>
      <button>BUY NOW</button>
    </div>
  )
}
function App() {
  var University = 'City University'
  var person = {
    name: 'Kabir',
    movie:'war',
    release: 2019
  }
  var style = {
    color: "red",
    backgroundColor:'green'
  }
 const products = [{name:'photoshop',price:'$140'},{name:'illustrator',price:'$120'},{name:'pdf Reader',price:'$110'}]
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         Hi Its My First Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>My first react paragraph</p>
        <h1>This is Iqbal Ahmed</h1>
        <h2>{University}</h2>
        <h3>University ID : {173462140+2}</h3>
        
        <h3 className ="" style={style}>{person.name + ' '+ person.movie}</h3>
        <Person name="Cristiano Ronaldo" profession="Greatest Football Player of All Time Football"></Person>
        <Person name="Leonel Messi" profession="Greatest Football Player of All time Football"></Person>
        <Person name="Neymar Junior" profession="World Class Footballer"></Person>    

        <BDUniversity name="North-South University" rank='1'></BDUniversity>
        <BDUniversity name="Brac University" rank='2'></BDUniversity>
        <BDUniversity name="Independent University" rank='3'></BDUniversity>
        <BDUniversity name="AhsanUllah University" rank='4'></BDUniversity>
        <BDUniversity name="East West University" rank='5'></BDUniversity>
        <BDUniversity name="Daffodil Int. University" rank='6'></BDUniversity>
        <BDUniversity name="United Int. University" rank='7'></BDUniversity>
        <BDUniversity name="City University" rank='22'></BDUniversity>

        <Product name={products[0].name} price = {products[0].price}> </Product>
        <Product name= {products[1].name} price = {products[1].price}> </Product>
        <Product name= {products[2].name} price = {products[2].price}> </Product>
      </header>
    </div>
  );
}


export default App;
