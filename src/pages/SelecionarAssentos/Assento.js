import styled from 'styled-components'
import {useState} from 'react';

export default function Assento({ ids, setIds, id, isAvailable, numeroAssento }){

    const [isSelected, setIsSelected] = useState(false);

    function SelecionarAssento( ids, setIds, id, isAvailable ){
        let reservados = ids;
        if(!isAvailable){
            alert('Esse assento não está disponível');
        }else if (reservados.includes(id)){
            //caso já esteja na lista de reservados, removemos o item usando o filter:
            reservados = reservados.filter(item => item !== id);
            console.log(reservados);
            setIsSelected(false);
        }else{
            //reserva o assento
            reservados = [...reservados, id];
            console.log(reservados);
            setIsSelected(true);
        }
        setIds(reservados);
    }
    return(
        <>
            <AssentoStyle isAvailable={isAvailable} isSelected={isSelected} onClick={() => SelecionarAssento(ids, setIds, id, isAvailable)}> {numeroAssento} </AssentoStyle>
        </>
    );
}

const AssentoStyle = styled.div`
  width: 22px;
  margin: 4px 4px;
  height: 22px;
  border: 1px solid #808F9D;
  background-color: ${props => (props.isAvailable ? (props.isSelected ? '#1AAE9E' : '#C3CFD9') : '#FBE192')};
  border-radius: 50%;
  color: #000000;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 11px;
  margin-bottom: 18px;
  cursor: pointer;
`