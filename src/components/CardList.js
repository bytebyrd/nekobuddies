import React from 'react';
import Card from './Card'
const CardList = ({ robots, filter }) => {
    return (
        <section>
            {robots.filter( robot => filter ? robot.name.toLowerCase().includes(filter.toLowerCase()) : true )
            .map(robot => <Card key={robot.id} {...robot} />)}
        </section>
    )
}

export default CardList;