import React from 'react';
import api from '../utils/api.js'
import Card from './Card.js'

const Main = (props) => {

    const [user, setUserInfo] = React.useState([])
    const [cards, setCards] = React.useState([])

    React.useEffect(() => {
        api.getUserInfo().then((data) => {
            const item =({ 
                userName: data.name,
                userDescription: data.about,
                userAvatar: data.avatar
            })
            setUserInfo(item)
        })
    },[])

    React.useEffect(() => {
        api.getInitialCards().then((data) => {
            const items = data.map((item) => ({
                id: item._id,
                name: item.name,
                likes: item.likes.length,
                src: item.link
            }))
            setCards(items)
        })
    },[])

    return(
        <main className="main root__content">
        <section className="profile">
            <div className="profile__section">
                <div className="profile__avatar" onClick={props.onEditAvatar}><img style={{ backgroundImage: `url(${user.userAvatar})` }} alt="" className="profile__image"/></div>
                <h1 className="profile__name">{user.userName}</h1>
                <p className="profile__job">{user.userDescription}</p>
                <button className="profile__edit " onClick={props.onEditProfile}></button>
            </div>
            <button className="profile__add" onClick={props.onAddPlace}></button>
        </section>
        <section className="grid">
            {cards.map(item => <Card key={item.id} {...item} card={item} onCardClick={props.onCardClick}/>)}
        </section>
    </main>
    )
}

export default Main