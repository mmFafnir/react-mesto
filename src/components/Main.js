import React, { useEffect } from 'react';

import api from '../utils/Api';
import Card from './Card';

const Main = ({
    onEditProfile, onAddPlace, onEditAvatar, onCardClick, onDeleteCard
}) => {

    const [useName, setUseName] = React.useState('');
    const [useAvatart, setuseAvatart] = React.useState('');
    const [useDescription, setuseDescription] = React.useState('');

    const [cards, setCards] = React.useState([]);
    
    

    useEffect(() => {
        
        Promise.all([api.getUserData(), api.getInitialCards()])
        .then(([userData, cards]) => {
            setUseName(userData.name);
            setuseAvatart(userData.avatar);
            setuseDescription(userData.about);
            console.log(cards)
            setCards(cards)
        }).catch((e) => console.log(e))
        
    }, [])

    const handleEditAvatarClick = () => {
        onEditAvatar(true)
    }

    const handleEditProfileClick = () => {
        onEditProfile(true)
    }

    const handleAddPlaceClick = () => {
        onAddPlace(true)
    }
    return (
        <main>
            <section className="profile">
                <div className="profile__avatar" onClick={handleEditAvatarClick}>
                    <img src={useAvatart} alt="Аватар профиля"/>
                </div>
                <div className="profile__info">
                    <h1 className="profile__title">
                        {useName}
                    </h1>
                    <button onClick={handleEditProfileClick} type="button" className="profile__edit-button"></button>
                    <p className="profile__description">
                        {useDescription}
                    </p>
                </div>
                <button
                    type="button" 
                    className="profile__add-button"
                    onClick={handleAddPlaceClick}
                    ></button>
            </section>
            <section className="elements">
                {
                    cards.map(card => (
                        <Card key={card._id} card={card} onCardClick={onCardClick}/>
                    ))
                }
            </section>
        </main>
    );
};

export default Main;