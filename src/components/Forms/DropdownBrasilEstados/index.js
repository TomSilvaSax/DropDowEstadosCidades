import { useEffect, useState } from 'react';
import { fetchStates } from "../../../helpers/Ibge";

const DropdownBrasilEstados = ({ id , name, onChange = () => { } }) => {

    const [states, setStates] = useState([])

    useEffect(() => {
        fetchStates().then((states) => {
            setStates(states)
        });
    }, []);

    return (
        <select id= {id || name} name={name ||id} onChange={onChange}>
            <option value="">Selecione um estado...</option>
            {states.map((state) => {

                const { sigla, nome } = state;

                return (<option key={sigla} value={sigla}>{nome}</option>)
            }

            )}
        </select>
    )
};

export default DropdownBrasilEstados;