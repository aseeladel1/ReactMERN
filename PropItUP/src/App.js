import React from 'react';
import './App.css';
import MyNewComponent from './components/MyNewComponent';

function App() {

return(
    <div className="App">
     <MyNewComponent firstName={"Aseel"} lastName={"Adel"} age={20} hairColor={"Black"}/>
     <MyNewComponent firstName={"Imas"} lastName={"Sami"} age={20} hairColor={"Black"}/>
     <MyNewComponent firstName={"Fatima"} lastName={"Naeem"} age={20} hairColor={"Blonde"}/>
     <MyNewComponent firstName={"Hadeel"} lastName={"Kamel"} age={20} hairColor={"Brown"}/>
</div>
);
}
export default App;
