import React from 'react';

import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";

import ImagePopup from "./ImagePopup";




function App() {
    
    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
    const [isDeletePopupOpen, setIsDeletePopupOpen] = React.useState(false);
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
    <div>
    <Header />
    <Main 
        onCardClick={handleCardClick}
        onEditProfile={setIsEditProfilePopupOpen}
        onAddPlace={setIsAddPlacePopupOpen}
        onEditAvatar={setIsEditAvatarPopupOpen}
        onDeleteCard={setIsDeletePopupOpen}
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
    </PopupWithForm>

    <PopupWithForm closePopup={closeAllPopups} isOpne={isAddPlacePopupOpen} title={'Новое место'} name={'cards'} >
        <label className="form__field">
                    <input type="text" className="form__input" placeholder="Название" name="name" id="input-card" minLength="2" maxLength="30" required/>
                    <span className="input-card-error form__input-error"></span>
                </label>
                <label className="form__field">
                    <input type="url" className="form__input" placeholder="Ссылка на картинку" name="link" id="input-image"  required/>
                    <span className="input-image-error form__input-error"></span>
        </label>
        
    </PopupWithForm>


    <ImagePopup onClose={closeAllPopups} card={selectedCard}/>
    
    <PopupWithForm closePopup={closeAllPopups} isOpne={isEditAvatarPopupOpen} title={'Обновить аватар'} name={'popup-avatar'} >
        <label className="form__field">
            <input type="url" className="form__input" placeholder="Ссылка на аватарку" name="link" id="input-avatar"  required/>
            <span className="input-avatar-error form__input-error"></span>
        </label>
    </PopupWithForm>
    
    <PopupWithForm closePopup={closeAllPopups} isOpne={isDeletePopupOpen} name={'popup-delete'} title={'Вы уверены'}>   </PopupWithForm>
    
    </div>
  );
}

export default App;