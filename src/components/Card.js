import React from 'react';

const Card = ({name, src, likes, onCardClick}) => {

    function handleClick() {
        onCardClick({src, name});
    }

    return (
        <div className="cards">
            <button type="button" className="cards__trash"></button>
            <img src={`${src}`} alt="" className="cards__photo" onClick={handleClick}/>
            <h2 className="cards__name">{name}</h2>
            <div className="cards__like-container"> 
                <button className="cards__like"></button>
                <span className="cards__like-counter">{likes}</span> 
            </div>
        </div>
    )
}

export default Card