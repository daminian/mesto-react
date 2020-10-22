import React from 'react';
import PopupWithForm from './PopupWithForm.js';
import {CurrentUserContext} from '../contexts/CurrentUserContext';

function EditProfilePopup({isOpen, onClose, onUpdateUser}) {

    const [name, setName] = React.useState('');
    const [description, setDescription] = React.useState('');
    const currentUser = React.useContext(CurrentUserContext);

    function handleNameChange(e) {
        setName(e.target.value)
    }

    function handleDescriptionChange(e) {
        setDescription(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault();
        onUpdateUser({
            name: name,
            about: description
        });
    }

    React.useEffect(() => {
        setName(currentUser.name);
        setDescription(currentUser.about);
      }, [currentUser]); 

    return (
        <PopupWithForm name="profile" title="Редактировать профиль" cildren={
            <>
            <label className="popup__label">
            <input type="text" name="name" className="popup__input popup__name" required minLength="2"
                maxLength="40" placeholder="Имя" onChange={handleNameChange} defaultValue={currentUser.name}/>
            <span id="name-error" className="popup__error"></span>
            </label>
            <label className="popup__label">
            <input type="text" name="job" className="popup__input popup__job" required minLength="2"
                maxLength="200" placeholder="Занятие" onChange={handleDescriptionChange} defaultValue={currentUser.about}/>
            <span id="job-error" className="popup__error"></span>
            </label>
            </>
        } isOpen = {isOpen} onClose={onClose} onSubmit={handleSubmit}/>
    )
}

export default EditProfilePopup;