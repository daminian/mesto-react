import React from 'react';

function ImagePopup({onClose, card}) {
    return (
        <section className={`popup popup-card ${card.state && ("popup_opened")}`}>
        <div className="popup__form">
            <button type="button" className="popup__close" onClick={onClose}></button>
            <figure className="popup__image-container"><img src={card.src} alt="" className="popup__image"/>
            <figcaption className="popup__image-title">{card.name}</figcaption>
            </figure>
        </div>
    </section>
    )
}

export default ImagePopup