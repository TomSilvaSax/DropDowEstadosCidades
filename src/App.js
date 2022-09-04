import { useState } from 'react';

import './App.css';
import DropdownBrasilEstados from './components/Forms/DropdownBrasilEstados';
import DropdownBrasilCidade from './components/Forms/DropdownBrasilCidades';


function App() {

  const [formValues, setFormValues] = useState({});

  const handleInputChange = (e) => {
    e.preventDefault();
    const { value, name } = e.target;
    setFormValues({ ...formValues, [name]: value });

  }
  console.log("forme", formValues)

  return (
    <div className="conteiner">
      <form>
        <label htmlFor="state" >Estado: </label>
        < DropdownBrasilEstados id="state" name="state" onChange={handleInputChange} />
        <label htmlFor="cities">Cidade: </label>
        <DropdownBrasilCidade state={formValues.state} id="city" name="city" onChange={handleInputChange}/>
      </form>

    </div>
  );
}

export default App;
