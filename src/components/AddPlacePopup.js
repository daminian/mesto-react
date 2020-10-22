import React from 'react';
import PopupWithForm from './PopupWithForm.js';

function AddPlacePopup({isOpen, onClose, onAddPlaseSubmit}) {

    const [name, setName] = React.useState('');
    const [link, setLink] = React.useState('');

    function handleNameChange(e) {
        setName(e.target.value)
    }

    function handleLinkChange(e) {
        setLink(e.target.value)
    }
    
    function handleSubmit(e) {
        e.preventDefault();
        onAddPlaseSubmit({
            name: name,
            link: link
        });
    }

    return (
        <PopupWithForm name="add" title="Новое место" cildren={
            <>
            <label className="popup__label">
                <input type="text" name="mesto" className="popup__input popup__mesto" placeholder="Название"
                    required minLength="1" maxLength="30" onChange={handleNameChange} value={name}/>
                <span id="mesto-error" className="popup__error"></span>
            </label>
            <label className="popup__label">
                <input type="url" name="url" className="popup__input popup__links"
                    placeholder="Ссылка на картинку" required onChange={handleLinkChange} value={link}/>
                <span id="url-error" className="popup__error"></span>
            </label>
            </>
        } isOpen = {isOpen} onClose={onClose} onSubmit={handleSubmit}/>
    )
}

export default AddPlacePopup;