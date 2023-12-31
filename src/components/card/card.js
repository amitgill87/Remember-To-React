
import React from 'react';
import './card.css';

const onClick = (props) => {
	props.randomCards();
	props.updateScore(props.id);
}

const Card = (props) => (
    <div>
      <a className="thumbnail" onClick={() => onClick(props)}>
        <img src={props.image} />
      </a>
 </div>
)

export default Card