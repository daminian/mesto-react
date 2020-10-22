import React from 'react';
import PopupWithForm from './PopupWithForm.js';
import {CurrentUserContext} from '../contexts/CurrentUserContext';


function EditAvatarPopup({isOpen, onClose, onUpdateAvatar}) {

    const currentUser = React.useContext(CurrentUserContext);
    const userAvatar = React.useRef();
    const [avatar, setAvatar] = React.useState('')

    function handleSubmit(e) {
        e.preventDefault();
        onUpdateAvatar(userAvatar.current.value)
    }

    React.useEffect(() => {
        setAvatar(currentUser.avatar)
    },[currentUser])

    return(
        <PopupWithForm name="avatar" title="Обновить аватар" cildren={
            <>
            <label className="popup__label">
                <input type="url" name="url" className="popup__input popup__avatar-links" placeholder="Ссылка на аватарку" required defaultValue={avatar} ref={userAvatar}/>
                <span id="url-error" className="popup__error"></span>
            </label>
            </>
        } isOpen = {isOpen} onClose={onClose} onSubmit={handleSubmit}/>
    )
}

export default EditAvatarPopup;