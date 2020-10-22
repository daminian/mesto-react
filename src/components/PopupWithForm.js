import React from 'react';

const PopupWithForm = ({name, title, cildren, isOpen, onClose, onSubmit}) => {
    return (<section className={`popup popup-${name} ${isOpen ? ("popup_opened"):("")}`}>
        <div className="popup__container">
            <button type="button" className="popup__close" onClick={onClose}></button>
            <form className="popup__form" name={name} noValidate onSubmit={onSubmit}>
                <h3 className="popup__title popup__profile-title">{title}</h3>
                {cildren}
                <button type="submit" className="popup__button">Сохранить</button>
            </form>
        </div>
    </section>)
}

export default PopupWithForm