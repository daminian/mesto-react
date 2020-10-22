import React from 'react';
import Footer from './Footer.js';
import Header from './Header.js';
import Main from './Main.js';
import EditPofilePopup from './EditProfilePopup.js';
import EditAvatarPopup from './EditAvatarPopup.js';
import AddPlacePopup from './AddPlacePopup.js';
import ImagePopup from './ImagePopup.js';
import api from '../utils/api.js';
import {CurrentUserContext} from '../contexts/CurrentUserContext';

function App() {

  const [currentUser, setCurrentUser] = React.useState('');
  const [cards, setCards] = React.useState([]);
  const [editProfileIsOpen , isEditProfilePopupOpen] = React.useState(false)
  const [addCardIsOpen , isAddPlacePopupOpen] = React.useState(false)
  const [editAvatarIsOpen , isEditAvatarPopupOpen] = React.useState(false)
  const [selectedCard, setSelectedCard] = React.useState({state:false, src: ''});

  function handleCardClick(props) {
    setSelectedCard({state: true, src: props.link, name: props.name})
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

  function handleUpdateUser({name, about}) {
    api.updateProfileInfo({name, about})
    .then((user) => {
      setCurrentUser(user)
    })
    .catch((err) => {
      console.log(err)
    })
    .then(() => closeAllPopups())    
  }

  function handleUpdateAvatar(avatar) {
    api.updateAvatar(avatar)
    .then((avatar) => {
     setCurrentUser(avatar)
    })
    .catch((err) => {
     console.log(err)
    })
    .then(() => closeAllPopups())
  }

  function handleCardLike(card) {
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    
    api.changeLikeCardStatus(card._id, !isLiked)
    .then((newCard) => {
      const newCards = cards.map((c) => c._id === card._id ? newCard : c);
      setCards(newCards);
    })
    .catch((err) => {
        console.log(err)
    })
  }

  function handleCardDelete(card) {
    api.deleteCard(card._id)
    .then(() => {
        const newCards = cards.filter((item) => {
          return item._id !== card._id
        });
        setCards(newCards);
    })
    .catch((err) => {
        console.log(err)
    })
  }
  
  function handleAddPlaceSubmit(card) {
    api.postNewCard(card)
    .then((newCard) => {
      setCards([newCard, ...cards])
    })
    .catch((err) => {
      console.log(err)
    })
    .then(() => closeAllPopups())
  }

  React.useEffect(() => {
    api.getAppInfo()
        .then((data) => {
            data = {cards: data[0],user: data[1]}
            const userInfo = ({
                name: data.user.name,
                about: data.user.about,
                avatar: data.user.avatar,
              _id: data.user._id
            })
            const cardsList = data.cards.map((item) => ({
              _id: item._id,
              name: item.name,
              likes: item.likes,
              link: item.link,
              owner: item.owner
            }))
            setCurrentUser(userInfo)
            setCards(cardsList)
        })
        .catch((err) => {
            console.log(err)
        })
  },[])

  return (
  <CurrentUserContext.Provider value={currentUser}>
    <Header />
    <Main onEditProfile={handleEditProfileClick} onAddPlace={handleAddCardClick} onEditAvatar={handleEditAvatarClick} onCardClick={handleCardClick} 
    cards={cards} onCardLike={handleCardLike} onCardDelete={handleCardDelete}/>
    <Footer />
    <EditPofilePopup isOpen={editProfileIsOpen} onClose={closeAllPopups} onUpdateUser={handleUpdateUser}/>
    <EditAvatarPopup isOpen={editAvatarIsOpen} onClose={closeAllPopups} onUpdateAvatar={handleUpdateAvatar}/>
    <AddPlacePopup isOpen={addCardIsOpen} onClose={closeAllPopups} onAddPlaseSubmit={handleAddPlaceSubmit}/>
    <ImagePopup card={selectedCard} onClose={closeAllPopups}/>
  </CurrentUserContext.Provider>
  );
}

export default App;
