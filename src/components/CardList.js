import React from 'react';
import { useSelector } from 'react-redux';
import Card from './Card'

const CardList = ({ robots }) => {
    const filter = useSelector( state => state.searchField.searchTerm );
    return (
        <section>
            {robots.filter( robot => filter ? robot.name.toLowerCase().includes(filter.toLowerCase()) : true )
            .map(robot => <Card key={robot.id} {...robot} />)}
        </section>
    )
}

export default CardList;