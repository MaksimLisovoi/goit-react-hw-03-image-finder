(this["webpackJsonpgoit-react-hw-03-phonebook"]=this["webpackJsonpgoit-react-hw-03-phonebook"]||[]).push([[0],{10:function(e,t,a){e.exports={Searchbar:"Searchbar_Searchbar__3ltN2",SearchForm:"Searchbar_SearchForm__3sMlS",SearchFormButton:"Searchbar_SearchFormButton__KRYkK",SearchFormButtonLabel:"Searchbar_SearchFormButtonLabel__3p9yQ",SearchFormInput:"Searchbar_SearchFormInput__3kQ91"}},15:function(e,t,a){e.exports={backDrop:"Modal_backDrop__cmbiN",content:"Modal_content__3wlZT"}},25:function(e,t,a){e.exports={btn:"Button_btn__3sB0F"}},33:function(e,t,a){},35:function(e,t,a){},85:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(13),o=a.n(c),l=(a(33),a(8)),s=a.n(l),i=a(11),u=a(16),h=a(4),m=a(5),p=a(7),g=a(6),d=(a(35),a(10)),b=a.n(d),y=a(15),f=a.n(y),j=a(0),v=document.querySelector("#modal-root"),O=function(e){Object(p.a)(a,e);var t=Object(g.a)(a);function a(){var e;Object(h.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={},e.handleClose=function(t){var a=e.props.toggleModal;t.target===t.currentTarget&&a()},e.handleEsc=function(t){var a=e.props.toggleModal;"Escape"===t.code&&a()},e}return Object(m.a)(a,[{key:"componentDidMount",value:function(){var e=this.handleEsc;window.addEventListener("keydown",e)}},{key:"componentWillUnmount",value:function(){var e=this.handleEsc;window.removeEventListener("keydown",e)}},{key:"render",value:function(){var e=this.props.children;return Object(c.createPortal)(Object(j.jsx)("div",{className:f.a.backDrop,onClick:this.handleClose,children:Object(j.jsx)("div",{className:f.a.content,children:e})}),v)}}]),a}(n.Component),S=function(e){Object(p.a)(a,e);var t=Object(g.a)(a);function a(){var e;Object(h.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={queryVal:""},e.handleChange=function(t){e.setState({queryVal:t.target.value})},e.handleSubmit=function(t){t.preventDefault(),(0,e.props.onSubmit)(e.state.queryVal),e.state.queryVal=""},e}return Object(m.a)(a,[{key:"render",value:function(){var e=this.handleChange,t=this.handleSubmit,a=this.state.queryVal;return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("header",{className:b.a.Searchbar,children:Object(j.jsxs)("form",{className:b.a.SearchForm,onSubmit:t,children:[Object(j.jsx)("button",{type:"submit",className:b.a.SearchFormButton,children:Object(j.jsx)("span",{className:b.a.SearchFormButtonLabel,children:"Search"})}),Object(j.jsx)("input",{className:b.a.SearchFormInput,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",onChange:e,value:a})]})})})}}]),a}(n.Component),_=a(9),x=a.n(_),k=function(e){var t=e.el,a=e.getElem,n=t.webformatURL,r=t.largeImageURL;return Object(j.jsx)("li",{className:x.a.ImageGalleryItem,onClick:function(){a(r)},children:Object(j.jsx)("img",{src:n,alt:"img",className:x.a.ImageGalleryItemImage})})},w=a(25),I=a.n(w),C=function(e){var t=e.children,a=e.onClick;return Object(j.jsx)("button",{className:I.a.btn,type:"button",onClick:a,children:t})},F=a(26),G=a.n(F),M=function(e){Object(p.a)(a,e);var t=Object(g.a)(a);function a(){var e;Object(h.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={showModal:!1,elem:null},e.toggleModal=function(){e.setState({showModal:!e.state.showModal})},e.getElem=function(t){e.toggleModal(),e.setState({elem:t})},e}return Object(m.a)(a,[{key:"render",value:function(){var e=this,t=this.props,a=t.gallery,n=t.onClick,r=this.state,c=r.elem,o=r.showModal,l=a.length>0;return Object(j.jsxs)("div",{className:x.a.GalleryContainer,children:[Object(j.jsx)("ul",{className:x.a.ImageGallery,children:a.map((function(t){return Object(j.jsx)(k,{el:t,getElem:e.getElem},G.a.generate())}))}),o&&Object(j.jsx)(O,{toggleModal:this.toggleModal,children:Object(j.jsx)("img",{src:c,alt:"img",className:x.a.modalImg})}),l&&Object(j.jsx)(C,{onClick:n,children:"Load more"})]})}}]),a}(n.Component),N=a(27),q=a.n(N),E=(a(65),a(28)),L=a.n(E);function B(){return(B=Object(i.a)(s.a.mark((function e(t,a){var n,r,c,o,l;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"19973249-c52aafd5b7bc4f65352a2c6d7","https://pixabay.com/api/",n="/?q=".concat(t,"&page=").concat(a,"&key=").concat("19973249-c52aafd5b7bc4f65352a2c6d7","&image_type=photo&orientation=horizontal&per_page=12"),r="https://pixabay.com/api/"+n,e.next=6,L.a.get(r);case 6:return c=e.sent,e.next=9,c.data;case 9:return o=e.sent,e.next=12,o.hits;case 12:return l=e.sent,e.abrupt("return",l);case 14:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var D=function(e,t){return B.apply(this,arguments)},V=function(e){Object(p.a)(a,e);var t=Object(g.a)(a);function a(){var e;Object(h.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={query:"",page:1,gallery:[],msg:"",isLoading:!1,selectedImg:""},e.fetchGalleryItems=function(){var t=e.state,a=t.query,n=t.page;e.setState({isLoading:!0}),D(a,n).then((function(t){e.setState({shouldRender:t.length}),t.length?(e.setState((function(e){return{gallery:[].concat(Object(u.a)(e.gallery),Object(u.a)(t)),page:e.page+1}})),window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})):(e.setState({msg:"Nothing to show by your request"}),alert(e.state.msg))})).catch((function(e){console.log(e)})).finally((function(){return e.setState({isLoading:!1})}))},e.getQuery=function(t){e.setState({query:t,page:1,gallery:[]})},e}return Object(m.a)(a,[{key:"componentDidMount",value:function(){var e=Object(i.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"componentDidUpdate",value:function(){var e=Object(i.a)(s.a.mark((function e(t,a){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a.query!==this.state.query&&this.fetchGalleryItems();case 1:case"end":return e.stop()}}),e,this)})));return function(t,a){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.gallery,a=e.isLoading,n=this.getQuery,r=this.fetchGalleryItems;return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(S,{onSubmit:n}),Object(j.jsx)(M,{gallery:t,onClick:r}),a&&Object(j.jsx)(q.a,{type:"Circles",color:"#00BFFF",height:100,width:100,timeout:3e3})]})}}]),a}(n.Component);a(84);o.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(V,{})}),document.getElementById("root"))},9:function(e,t,a){e.exports={GalleryContainer:"ImageGallery_GalleryContainer__KKfsc",ImageGallery:"ImageGallery_ImageGallery__2xWGf",ImageGalleryItemImage:"ImageGallery_ImageGalleryItemImage__1CvbD",modalImg:"ImageGallery_modalImg__1z2mg"}}},[[85,1,2]]]);
//# sourceMappingURL=main.7fdfdfbc.chunk.js.map