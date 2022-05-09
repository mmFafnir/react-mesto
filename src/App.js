import React from 'react';

import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import PopupWithForm from "./components/PopupWithForm";

import PopupImage from "./components/PopupImage";


function App() {
    
    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);

    const [selectedCard, setSelectedCard] = React.useState({});



    const closeAllPopups = () => {
        setIsEditProfilePopupOpen(false);
        setIsAddPlacePopupOpen(false);
        setIsEditAvatarPopupOpen(false);
        setSelectedCard({
            open: false,
            title: '',
            img: ''
        })
    }

    const handleCardClick = (card) => {
        setSelectedCard(card)

    }    

  return (
    <>
    <Header />
    <Main 
        onCardClick={handleCardClick}
        onEditProfile={setIsEditProfilePopupOpen}
        onAddPlace={setIsAddPlacePopupOpen}
        onEditAvatar={setIsEditAvatarPopupOpen}
    />
    <Footer />
    
    <PopupWithForm closePopup={closeAllPopups} isOpne={isEditProfilePopupOpen} title={'Редактировать профиль'} name={'description'} >
        <label className="form__field">
            <input type="text" className="form__input" placeholder="Ваше имя?"  name="Title" id="input-name" required minLength="2" maxLength="40"/>
            <span className="input-name-error form__input-error"></span>
        </label>
        <label className="form__field">
            <input type="text" className="form__input" placeholder="Чем занимаетесь?"  name="Business" id="input-business" required minLength="2" maxLength="200"/>
            <span className="input-business-error form__input-error"></span>
        </label>
        <button type="submit" className="form__submit" >Сохранить</button>
    </PopupWithForm>

    <div className="popup" id="cards">
        <div className="popup__container">
            <button type="button" className="popup__close" id="cards-close"></button>
            <form action="/"   className="form form-two FormValidator" name="form" id="cards-form" noValidate>
                <h2 className="form__title">
                    Новое место
                </h2>
                <label className="form__field">
                    <input type="text" className="form__input" placeholder="Название" name="name" id="input-card" minLength="2" maxLength="30" required/>
                    <span className="input-card-error form__input-error"></span>
                </label>
                <label className="form__field">
                    <input type="url" className="form__input" placeholder="Ссылка на картинку" name="link" id="input-image"  required/>
                    <span className="input-image-error form__input-error"></span>
                </label>
                <button type="submit" className="form__submit" >Создать</button>
            </form>
        </div>
    </div>

    <PopupImage onClose={closeAllPopups} card={selectedCard}/>
    
    <PopupWithForm closePopup={closeAllPopups} isOpne={isEditAvatarPopupOpen} title={'Обновить аватар'} name={'popup-avatar'} >
        <label className="form__field">
            <input type="url" className="form__input" placeholder="Ссылка на аватарку" name="link" id="input-avatar"  required/>
            <span className="input-avatar-error form__input-error"></span>
        </label>
        <button type="submit" className="form__submit" >Сохранить</button>
    </PopupWithForm>
    
    <PopupWithForm closePopup={closeAllPopups} isOpne={isAddPlacePopupOpen} name={'popup-delete'} title={'Вы уверены'}>
        <button type="submit" className="popup-delete__submit form__submit">Да</button>
    </PopupWithForm>
    
    </>
  );
}

export default App;
