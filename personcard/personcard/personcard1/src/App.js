import logo from './logo.svg';
import './App.css';
import PersonCard from './components/PersonCard';

function App() {
  return (
    <div className="App">
     <PersonCard firstName={"Aseel"} lastName={"Adel"} age={20} hairColor={"Black"}/>
     <PersonCard firstName={"Imas"} lastName={"Sami"} age={20} hairColor={"Black"}/>
     <PersonCard firstName={"Fatima"} lastName={"Naeem"} age={20} hairColor={"Blonde"}/>
     <PersonCard firstName={"Hadeel"} lastName={"Kamel"} age={20} hairColor={"Brown"}/>
    </div>
  );
}

export default App;
