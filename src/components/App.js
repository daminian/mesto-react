import React from 'react';
import Footer from './Footer.js';
import Header from './Header.js';
import Main from './Main.js';
import PopupWithForm from './PopupWithForm.js';
import ImagePopup from './ImagePopup.js';

function App() {

  const [editProfileIsOpen , isEditProfilePopupOpen] = React.useState(false)
  const [addCardIsOpen , isAddPlacePopupOpen] = React.useState(false)
  const [editAvatarIsOpen , isEditAvatarPopupOpen] = React.useState(false)
  const [selectedCard, setSelectedCard] = React.useState({state:false, src: ''});

  function handleCardClick(props) {
    setSelectedCard({state: true, src: props.src, name: props.name})
  }

  function handleEditProfileClick() {
    isEditProfilePopupOpen(true)
  }

  function handleAddCardClick() {
    isAddPlacePopupOpen(true)
  }

  function handleEditAvatarClick() {
    isEditAvatarPopupOpen(true)
  }

  function closeAllPopups() {
    isEditProfilePopupOpen(false)
    isAddPlacePopupOpen(false)
    isEditAvatarPopupOpen(false)
    setSelectedCard({state:false})
  }
  
  return (
    <>
    <Header />
    <Main onEditProfile={handleEditProfileClick} onAddPlace={handleAddCardClick} onEditAvatar={handleEditAvatarClick} onCardClick={handleCardClick}/>
    <Footer />
    <PopupWithForm name="profile" title="Редактировать профиль" cildren={
            <>
            <label className="popup__label">
            <input type="text" name="name" className="popup__input popup__name" required minLength="2"
                maxLength="40" />
            <span id="name-error" className="popup__error"></span>
            </label>
            <label className="popup__label">
            <input type="text" name="job" className="popup__input popup__job" required minLength="2"
                maxLength="200" />
            <span id="job-error" className="popup__error"></span>
            </label>
            </>
        } isOpen = {editProfileIsOpen} onClose={closeAllPopups}/>
        <PopupWithForm name="add" title="Новое место" cildren={
            <>
            <label className="popup__label">
                <input type="text" name="mesto" className="popup__input popup__mesto" placeholder="Название"
                    required minLength="1" maxLength="30"/>
                <span id="mesto-error" className="popup__error"></span>
            </label>
            <label className="popup__label">
                <input type="url" name="url" className="popup__input popup__links"
                    placeholder="Ссылка на картинку" required />
                <span id="url-error" className="popup__error"></span>
            </label>
            </>
        } isOpen = {addCardIsOpen} onClose={closeAllPopups}/>
        <PopupWithForm name="delete-card" title="Вы уверены?"/>
        <PopupWithForm name="avatar" title="Обновить аватар" cildren={
            <>
            <label className="popup__label">
                <input type="url" name="url" className="popup__input popup__avatar-links" required />
                <span id="url-error" className="popup__error"></span>
            </label>
            </>
        } isOpen = {editAvatarIsOpen} onClose={closeAllPopups}/>
        <ImagePopup card={selectedCard} onClose={closeAllPopups}/>
  </>
  );
}

export default App;
