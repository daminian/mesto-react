import React from 'react';
import {CurrentUserContext} from '../contexts/CurrentUserContext';

const Card = ({card, onCardClick, onCardLike, onCardDelete}) => {

    const currentUser = React.useContext(CurrentUserContext);
    const isOwn = card.owner._id === currentUser._id;
    const cardDeleteButtonClassName = (
        `cards__trash ${isOwn ? '' : 'cards__trash_hidden'}`
    ); 
    
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    const cardLikeButtonClassName = (
        `cards__like ${isLiked ? 'cards__like_active' : ''}`
    )

    function handleClick() {
        onCardClick(card);
    }
    
    function handleLikeClick() {
        onCardLike(card)
    }

    function handleDeleteClick() {
        onCardDelete(card)
    } 

    return (
        <div className="cards">
            <button type="button" className={cardDeleteButtonClassName} onClick={handleDeleteClick}></button>
            <img src={`${card.link}`} alt="" className="cards__photo" onClick={handleClick}/>
            <h2 className="cards__name">{card.name}</h2>
            <div className="cards__like-container"> 
                <button className={cardLikeButtonClassName} onClick={handleLikeClick}></button>
                <span className="cards__like-counter">{card.likes.length}</span> 
            </div>
        </div>
    )
}

export default Card