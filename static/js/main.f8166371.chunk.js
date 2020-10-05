(this["webpackJsonpmesto-react"]=this["webpackJsonpmesto-react"]||[]).push([[0],{12:function(e,t,a){},13:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(3),c=a.n(o),s=(a(12),a(1));var l=function(){return r.a.createElement("footer",{className:"footer root__content"},r.a.createElement("p",{className:"footer__copyright"},"\xa9 2020 Mesto Russia"))},i=a(4),u=a.n(i);var m=function(){return r.a.createElement("header",{className:"header root__content"},r.a.createElement("div",{className:"header__menu"},r.a.createElement("img",{src:u.a,alt:"",className:"header__logo"})))},p=a(5),_=a(6),d=new(function(){function e(t){Object(p.a)(this,e),this._url=t.url,this._headers=t.headers}return Object(_.a)(e,[{key:"updateAvatar",value:function(e){return fetch("".concat(this._url,"/users/me/avatar"),{method:"PATCH",headers:{authorization:this._headers,"Content-Type":"application/json"},body:JSON.stringify({avatar:e})}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}))}},{key:"updateProfileInfo",value:function(e){return fetch("".concat(this._url,"/users/me"),{method:"PATCH",headers:{authorization:this._headers,"Content-Type":"application/json"},body:JSON.stringify({name:"".concat(e.name),about:"".concat(e.about)})}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}))}},{key:"getUserInfo",value:function(){return fetch("".concat(this._url,"/users/me"),{method:"GET",headers:{authorization:this._headers,"Content-Type":"application/json"}}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}))}},{key:"getInitialCards",value:function(){return fetch("".concat(this._url,"/cards"),{method:"GET",headers:{authorization:this._headers}}).then((function(e){return e.ok?e.json():Promise.reject(new Error("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status)))}))}},{key:"postNewCard",value:function(e){return fetch("".concat(this._url,"/cards"),{method:"POST",headers:{authorization:this._headers,"Content-Type":"application/json"},body:JSON.stringify({name:e.name,link:e.link})}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}))}},{key:"deleteCard",value:function(e){return fetch("".concat(this._url,"/cards/").concat(e),{method:"DELETE",headers:{authorization:this._headers,"Content-Type":"application/json"}}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}))}},{key:"addLike",value:function(e){return fetch("".concat(this._url,"/cards/likes/").concat(e),{method:"PUT",headers:{authorization:this._headers}}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}))}},{key:"deliteLike",value:function(e){return fetch("".concat(this._url,"/cards/likes/").concat(e),{method:"DELETE",headers:{authorization:this._headers}}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}))}},{key:"getAppInfo",value:function(){return Promise.all([this.getInitialCards(),this.getUserInfo()])}},{key:"_getResponseData",value:function(e){if(e.ok)return e.json()}}]),e}())({url:"https://mesto.nomoreparties.co/v1/cohort-15",headers:"8ba8ee25-f796-4e6c-83bd-8c6087015f7d"}),h=function(e){var t=e.name,a=e.src,n=e.likes,o=e.onCardClick;return r.a.createElement("div",{className:"cards"},r.a.createElement("button",{type:"button",className:"cards__trash"}),r.a.createElement("img",{src:"".concat(a),alt:"",className:"cards__photo",onClick:function(){o({src:a,name:t})}}),r.a.createElement("h2",{className:"cards__name"},t),r.a.createElement("div",{className:"cards__like-container"},r.a.createElement("button",{className:"cards__like"}),r.a.createElement("span",{className:"cards__like-counter"},n)))},f=function(e){var t=r.a.useState({}),a=Object(s.a)(t,2),n=a[0],o=a[1],c=r.a.useState([]),l=Object(s.a)(c,2),i=l[0],u=l[1];return r.a.useEffect((function(){d.getAppInfo().then((function(e){var t=(e={cards:e[0],user:e[1]}).cards.map((function(e){return{id:e._id,name:e.name,likes:e.likes.length,src:e.link}})),a={userName:e.user.name,userDescription:e.user.about,userAvatar:e.user.avatar};o(a),u(t)}))}),[]),r.a.createElement("main",{className:"main root__content"},r.a.createElement("section",{className:"profile"},r.a.createElement("div",{className:"profile__section"},r.a.createElement("div",{className:"profile__avatar",onClick:e.onEditAvatar},r.a.createElement("img",{style:{backgroundImage:"url(".concat(n.userAvatar,")")},alt:"",className:"profile__image"})),r.a.createElement("h1",{className:"profile__name"},n.userName),r.a.createElement("p",{className:"profile__job"},n.userDescription),r.a.createElement("button",{className:"profile__edit ",onClick:e.onEditProfile})),r.a.createElement("button",{className:"profile__add",onClick:e.onAddPlace})),r.a.createElement("section",{className:"grid"},i.map((function(t){return r.a.createElement(h,Object.assign({key:t.id},t,{card:t,onCardClick:e.onCardClick}))}))))},E=function(e){var t=e.name,a=e.title,n=e.cildren,o=e.isOpen,c=e.onClose;return r.a.createElement("section",{className:"popup popup-".concat(t," ").concat(o?"popup_opened":"")},r.a.createElement("div",{className:"popup__container"},r.a.createElement("button",{type:"button",className:"popup__close",onClick:c}),r.a.createElement("form",{className:"popup__form",name:t,noValidate:!0},r.a.createElement("h3",{className:"popup__title popup__profile-title"},a),n,r.a.createElement("button",{type:"submit",className:"popup__button"},"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"))))};var N=function(e){var t=e.onClose,a=e.card;return r.a.createElement("section",{className:"popup popup-card ".concat(a.state?"popup_opened":"")},r.a.createElement("div",{className:"popup__form"},r.a.createElement("button",{type:"button",className:"popup__close",onClick:t}),r.a.createElement("figure",{className:"popup__image-container"},r.a.createElement("img",{src:a.src,alt:"",className:"popup__image"}),r.a.createElement("figcaption",{className:"popup__image-title"},a.name))))};var k=function(){var e=r.a.useState(!1),t=Object(s.a)(e,2),a=t[0],n=t[1],o=r.a.useState(!1),c=Object(s.a)(o,2),i=c[0],u=c[1],p=r.a.useState(!1),_=Object(s.a)(p,2),d=_[0],h=_[1],k=r.a.useState({state:!1,src:""}),b=Object(s.a)(k,2),v=b[0],g=b[1];function j(){n(!1),u(!1),h(!1),g({state:!1})}return r.a.createElement(r.a.Fragment,null,r.a.createElement(m,null),r.a.createElement(f,{onEditProfile:function(){n(!0)},onAddPlace:function(){u(!0)},onEditAvatar:function(){h(!0)},onCardClick:function(e){g({state:!0,src:e.src,name:e.name})}}),r.a.createElement(l,null),r.a.createElement(E,{name:"profile",title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",cildren:r.a.createElement(r.a.Fragment,null,r.a.createElement("label",{className:"popup__label"},r.a.createElement("input",{type:"text",name:"name",className:"popup__input popup__name",required:!0,minLength:"2",maxLength:"40"}),r.a.createElement("span",{id:"name-error",className:"popup__error"})),r.a.createElement("label",{className:"popup__label"},r.a.createElement("input",{type:"text",name:"job",className:"popup__input popup__job",required:!0,minLength:"2",maxLength:"200"}),r.a.createElement("span",{id:"job-error",className:"popup__error"}))),isOpen:a,onClose:j}),r.a.createElement(E,{name:"add",title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",cildren:r.a.createElement(r.a.Fragment,null,r.a.createElement("label",{className:"popup__label"},r.a.createElement("input",{type:"text",name:"mesto",className:"popup__input popup__mesto",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",required:!0,minLength:"1",maxLength:"30"}),r.a.createElement("span",{id:"mesto-error",className:"popup__error"})),r.a.createElement("label",{className:"popup__label"},r.a.createElement("input",{type:"url",name:"url",className:"popup__input popup__links",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",required:!0}),r.a.createElement("span",{id:"url-error",className:"popup__error"}))),isOpen:i,onClose:j}),r.a.createElement(E,{name:"delete-card",title:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b?"}),r.a.createElement(E,{name:"avatar",title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",cildren:r.a.createElement(r.a.Fragment,null,r.a.createElement("label",{className:"popup__label"},r.a.createElement("input",{type:"url",name:"url",className:"popup__input popup__avatar-links",required:!0}),r.a.createElement("span",{id:"url-error",className:"popup__error"}))),isOpen:d,onClose:j}),r.a.createElement(N,{card:v,onClose:j}))};c.a.render(r.a.createElement(k,null),document.getElementById("root"))},4:function(e,t,a){e.exports=a.p+"static/media/logo.d3d4a407.svg"},7:function(e,t,a){e.exports=a(13)}},[[7,1,2]]]);
//# sourceMappingURL=main.f8166371.chunk.js.map