import React from 'react';
import trashImg from '../images/Trash.svg'
const Card = ({card, onCardClick}) => {
    const handleClick = () => {
        onCardClick({
            open: true,
            title: card.name,
            img: card.link
        })
    }
    return (
            <div className="element">
                <img src={trashImg} alt="Мусор" className="element__trash"/>
                <img onClick={handleClick} src={card.link} alt={card.name} className="element__image"/>
                <div className="element__wrapper">
                    <h2 className="element__title">{card.name}</h2>
                    <div className="like">
                        <button type="button" className="element__like like__btn"></button>
                        <p className="element__like-quantity">{card.likes.length}</p>
                    </div>
                </div>
            </div>
    );
};

export default Card;