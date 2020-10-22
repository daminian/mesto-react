import React from 'react';
import Card from './Card.js';
import {CurrentUserContext} from '../contexts/CurrentUserContext';

const Main = ({onEditProfile, onAddPlace, onEditAvatar, onCardClick, cards, onCardLike, onCardDelete}) => {

    const currentUser = React.useContext(CurrentUserContext);
    
    return(
        <main className="main root__content">
        <section className="profile">
            <div className="profile__section">
                <div className="profile__avatar" onClick={onEditAvatar}><img style={{ backgroundImage: `url(${currentUser.avatar})` }} alt="" className="profile__image"/></div>
                <h1 className="profile__name">{currentUser.name}</h1>
                <p className="profile__job">{currentUser.about}</p>
                <button className="profile__edit " onClick={onEditProfile}></button>
            </div>
            <button className="profile__add" onClick={onAddPlace}></button>
        </section>
        <section className="grid">
            {cards.map(item => <Card key={item._id} card={item} onCardClick={onCardClick} onCardLike={onCardLike} onCardDelete={onCardDelete}/>)}
        </section>
    </main>
    )
}

export default Main