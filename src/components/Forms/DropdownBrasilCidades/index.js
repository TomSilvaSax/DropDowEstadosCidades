import { useEffect, useState } from 'react';
import { fetchCidadesForState } from "../../../helpers/Ibge";


const DropdownBrasilCidade = ({ id , name , state, onChange = () => {} }) => {
    const [cities, setCities] = useState([])

    useEffect(() => {
        fetchCidadesForState(state).then((cities) => {
            setCities(cities)
        });
    }, [state]);


    return (

        <select id= {id || name} name={name || id} onChange ={onChange}>
            <option value="">Selecione um cidade...</option>
            {cities.map((city) => {

                const { id, nome } = city;

                return (<option value={id} key={id} > {nome}</option>)
            })}

        </select>
    )
};

export default DropdownBrasilCidade;