(this["webpackJsonpreact-typescript-starter-pack"]=this["webpackJsonpreact-typescript-starter-pack"]||[]).push([[0],{153:function(e,t,n){},159:function(e,t,n){},161:function(e,t,n){},162:function(e,t,n){},163:function(e,t,n){},164:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(35),s=n.n(o),i=n(31),c=n(47),d=n(116),l=n(33),h=n(39),u=n(105),j=n(117),b=n.n(j),v=n(15),x=n.n(v),w=n(23),m=n(216).a.create({baseURL:"https://api.tvmaze.com/"}),O=function(e){return m.get("search/shows?q=".concat(e)).then((function(e){return e.data}))},f=function(e){return m.get("shows/".concat(e)).then((function(e){return e.data}))},p=Object(h.b)("ShowList/get",function(){var e=Object(w.a)(x.a.mark((function e(t){var n;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O(t);case 3:return n=e.sent,e.abrupt("return",n);case 7:throw e.prev=7,e.t0=e.catch(0),console.error("Sorry, nothing found with this search"),e.t0;case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()),g=Object(h.c)({name:"shows",initialState:{shows:null,showsError:"",showsLoading:!1},reducers:{},extraReducers:function(e){e.addCase(p.fulfilled,(function(e,t){e.shows=t.payload,e.showsLoading=!1})),e.addCase(p.pending,(function(e){e.showsLoading=!0})),e.addCase(p.rejected,(function(e){e.showsError="Sorry, nothing found with this search",e.showsLoading=!1}))}}).reducer,y=Object(h.b)("OneShow/get",function(){var e=Object(w.a)(x.a.mark((function e(t){var n;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f(t);case 3:return n=e.sent,e.abrupt("return",n);case 7:throw e.prev=7,e.t0=e.catch(0),console.error("Sorry, nothing found with this search"),e.t0;case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()),_=Object(h.c)({name:"show",initialState:{show:null,showError:"",showLoading:!1},reducers:{},extraReducers:function(e){e.addCase(y.fulfilled,(function(e,t){e.show=t.payload,e.showLoading=!1})),e.addCase(y.pending,(function(e){e.showLoading=!0})),e.addCase(y.rejected,(function(e){e.showError="Sorry, nothing found with this search",e.showLoading=!1}))}}).reducer,S=Object(h.c)({name:"favorite",initialState:{favoriteShow:[]},reducers:{addToFavorite:function(e,t){var n=t.payload;e.favoriteShow.find((function(e){return e.show.id===n.show.id}))||e.favoriteShow.push(n)},deleteFromFavorite:function(e,t){var n=t.payload;e.favoriteShow=e.favoriteShow.filter((function(e){return e.show.id!==n.show.id}))}}}),N=S.actions,C=N.addToFavorite,F=N.deleteFromFavorite,k=S.reducer,L=Object(h.c)({name:"button",initialState:{},reducers:{buttonFavorite:function(e,t){var n=t.payload,a=n.id,r=n.isFavorite;e[a]={isFavorite:r}},buttonDelete:function(e,t){var n=t.payload,a=n.id,r=n.isFavorite;e[a]={isFavorite:r}}}}),B=L.actions,z=B.buttonFavorite,E=B.buttonDelete,T=L.reducer,W=Object(l.b)({shows:g,show:_,favorite:k,button:T}),M={key:"shows",storage:b.a,blacklist:["shows"]},D=Object(u.a)(M,W),R=Object(h.a)({reducer:D}),I=Object(u.b)(R),P=n(11),U=n(10),q=n(215),A=n(227),J=n(226),G=n(228),H=n(225),K=n(123),Q=n.n(K),V=n(124),X=n.n(V),Y=n(224),Z=n(211),$=n(120),ee=n.n($),te=n(62),ne=(n(153),n(1)),ae=function(e){var t=e.show,n=Object(i.b)(),a=Object(i.c)((function(e){var n;return null===(n=e.button[t.show.id])||void 0===n?void 0:n.isFavorite}));return Object(ne.jsxs)(Y.a,{className:"show-card",sx:{width:"240px",backgroundColor:"#e1e1e1",border:"1px solid #ddd",padding:"15px 5px",transition:"0.3s","&:hover":{transform:"scale(1.05)",boxShadow:"0 0 10px rgba(0, 0, 0, 0.2)"}},elevation:0,children:[Object(ne.jsx)(c.b,{to:"/shows/".concat(t.show.id),className:"show-card__image-wrapper",children:t.show.image?Object(ne.jsx)("img",{className:"show-card__image",src:t.show.image.medium,alt:"show_poster"}):Object(ne.jsx)("img",{className:"show-card__image",src:"https://www.xtrafondos.com/thumbs/vertical/1_9486.jpg",alt:"default_poster"})}),Object(ne.jsxs)("div",{className:"show-card__container",children:[Object(ne.jsx)("div",{className:"show-card__content",children:Object(ne.jsx)(H.a,{variant:"h6",className:"show-card__title",children:t.show.name})}),Object(ne.jsxs)("div",{className:"show-card__buttons",children:[a?Object(ne.jsx)(J.a,{onClick:function(){n(E({id:t.show.id,isFavorite:!1})),n(F(t))},children:Object(ne.jsx)(Z.a,{sx:{color:te.a[500],fontSize:25}})}):Object(ne.jsx)(J.a,{onClick:function(){n(z({id:t.show.id,isFavorite:!0})),n(C(t))},children:Object(ne.jsx)(ee.a,{sx:{color:te.a[500],fontSize:25}})}),Object(ne.jsx)(H.a,{variant:"h6",color:"#4e4d4c",className:"show-details__rating",children:t.show.rating.average?"".concat(null===t||void 0===t?void 0:t.show.rating.average," / 10"):"Under review"})]})]})]})},re=(n(159),function(){var e=Object(a.useState)(""),t=Object(U.a)(e,2),n=t[0],r=t[1],o=Object(i.b)(),s=Object(i.c)((function(e){return e.shows})),c=s.shows,d=(s.showsError,s.showsLoading);console.log(c);var l=function(e){e.preventDefault(),o(p(n))};return Object(ne.jsxs)("main",{className:"shows-list",children:[Object(ne.jsx)("form",{action:"/",onSubmit:l,className:"shows-list__search",children:Object(ne.jsx)(q.a,{type:"text",sx:{width:"100%"},value:n,onChange:function(e){return r(e.target.value)},label:"Type the show's name",variant:"outlined",InputProps:{endAdornment:Object(ne.jsx)(A.a,{position:"end",children:Object(ne.jsx)(J.a,{disabled:n.length<2,onClick:l,color:"primary",children:Object(ne.jsx)(Q.a,{})})})}})}),d?Object(ne.jsx)("div",{className:"loader",children:Object(ne.jsx)(G.a,{color:"primary",size:30})}):c?0===c.length?Object(ne.jsxs)(H.a,{variant:"subtitle1",color:"error",gutterBottom:!0,children:[Object(ne.jsx)(X.a,{fontSize:"small"}),"Sorry, nothing found with this search"]}):Object(ne.jsx)("div",{className:"shows-list__shows",children:c.map((function(e){return Object(ne.jsx)("div",{className:"shows-list__item",children:Object(ne.jsx)(ae,{show:e})},e.show.id)}))}):Object(ne.jsx)(H.a,{variant:"subtitle1",color:"textSecondary",gutterBottom:!0,style:{fontWeight:"bold",fontSize:"1.5rem",letterSpacing:"1px",textTransform:"uppercase",textAlign:"center",margin:"20px 0",color:""},children:"Find your show"})]})}),oe=function(){return Object(ne.jsx)(re,{})},se=(n(161),function(){var e=Object(i.c)((function(e){return e.favorite.favoriteShow}));return Object(ne.jsx)("div",{className:"favorite-list",children:e.map((function(e){return Object(ne.jsx)("div",{className:"favorite-list__shows",children:Object(ne.jsx)(ae,{show:e})},e.show.id)}))})}),ie=function(){return Object(ne.jsx)(se,{})},ce=n(229),de=n(223),le=(n(162),function(){var e,t=Object(P.q)().id,n=void 0===t?"":t,r=Object(i.b)(),o=Object(i.c)((function(e){return e.show.show})),s=(null===o||void 0===o?void 0:o.summary)?o.summary.replace(/(<p>|<\/p>|<br>|<\/br>|<i>|<\/i>|<b>|<\/b>)/g,""):"";return Object(a.useEffect)((function(){r(y(n))}),[r,n]),Object(ne.jsxs)(ce.a,{p:1,children:[Object(ne.jsx)(H.a,{variant:"h4",mb:2,children:null===o||void 0===o?void 0:o.name}),Object(ne.jsx)(ce.a,{mb:1,children:(null===o||void 0===o?void 0:o.image)?Object(ne.jsx)("img",{className:"show-spec__image",alt:"show_poster",src:null===o||void 0===o||null===(e=o.image)||void 0===e?void 0:e.original}):Object(ne.jsx)("img",{className:"show-spec__image",src:"https://www.xtrafondos.com/thumbs/vertical/1_9486.jpg",alt:"default_poster"})}),Object(ne.jsx)(ce.a,{mb:1,children:Object(ne.jsx)(H.a,{variant:"body1",children:s})}),Object(ne.jsxs)(ce.a,{mb:1,children:[Object(ne.jsx)(H.a,{variant:"h6",children:"Genres:"}),Object(ne.jsx)(ce.a,{display:"flex",flexWrap:"wrap",children:null===o||void 0===o?void 0:o.genres.map((function(e){return Object(ne.jsx)(Y.a,{variant:"outlined",sx:{m:1,p:1},children:e},e)}))})]}),Object(ne.jsxs)(H.a,{variant:"h6",mb:2,children:["Rating:",Object(ne.jsx)(H.a,{variant:"body1",mb:1,children:(null===o||void 0===o?void 0:o.rating.average)?"".concat(o.rating.average," / 10"):"Under review"})]}),Object(ne.jsxs)(H.a,{variant:"h6",mb:2,children:["Status:",Object(ne.jsx)(H.a,{variant:"body1",mb:1,children:null===o||void 0===o?void 0:o.status})]}),Object(ne.jsxs)(ce.a,{mb:1,children:[Object(ne.jsx)(H.a,{variant:"h6",children:"Schedule:"}),Object(ne.jsx)(ce.a,{display:"flex",flexWrap:"wrap",children:null===o||void 0===o?void 0:o.schedule.days.map((function(e){return Object(ne.jsx)(Y.a,{variant:"outlined",sx:{m:1,p:1},children:"".concat(e," at  ").concat(o.schedule.time?"".concat(o.schedule.time):"Soon")},e)}))})]}),Object(ne.jsxs)(ce.a,{mb:2,children:[Object(ne.jsx)(de.a,{href:null===o||void 0===o?void 0:o.url,variant:"body1",mb:2,children:"Watch Show"}),Object(ne.jsx)(H.a,{variant:"body1",children:"Don't miss out on this captivating series!"})]})]})}),he=n(126),ue=n.n(he),je=n(217),be=n(230),ve=n(125),xe=n.n(ve),we=n(220),me=function(){var e=Object(a.useState)(0),t=Object(U.a)(e,2),n=t[0],r=t[1],o=Object(i.c)((function(e){return e.favorite.favoriteShow})).length;return Object(ne.jsx)("header",{style:{position:"sticky",top:0,zIndex:100,backgroundColor:"white"},children:Object(ne.jsxs)(je.a,{value:n,indicatorColor:"primary",textColor:"primary",onChange:function(e,t){r(t)},"aria-label":"Tabs",centered:!0,sx:{maxWidth:"100%",marginBottom:"20px",backgroundColor:"#e1e1e1","& .css-530561-MuiButtonBase-root-MuiTab-root.Mui-selected":{maxWidth:"50%"},"& .css-530561-MuiButtonBase-root-MuiTab-root":{maxWidth:"50%"}},children:[Object(ne.jsx)(be.a,{component:c.c,to:"/",sx:{width:"50%"},icon:Object(ne.jsx)(xe.a,{}),iconPosition:"end"}),Object(ne.jsx)(be.a,{component:c.c,to:"/shows/favorites",sx:{width:"50%"},icon:Object(ne.jsx)(we.a,{badgeContent:o,color:"primary",children:Object(ne.jsx)(ue.a,{})}),iconPosition:"end"})]})})},Oe=(n(163),function(){return Object(ne.jsxs)("div",{className:"main-page",children:[Object(ne.jsx)(me,{}),Object(ne.jsxs)(P.d,{children:[Object(ne.jsx)(P.b,{path:"/",element:Object(ne.jsx)(P.a,{to:"/shows",replace:!0})}),Object(ne.jsx)(P.b,{path:"/shows",element:Object(ne.jsx)(oe,{})}),Object(ne.jsx)(P.b,{path:"/shows/favorites",element:Object(ne.jsx)(ie,{})}),Object(ne.jsx)(P.b,{path:"/shows/:id",element:Object(ne.jsx)(le,{})})]})]})});s.a.render(Object(ne.jsx)(r.a.StrictMode,{children:Object(ne.jsx)(i.a,{store:R,children:Object(ne.jsx)(d.a,{loading:null,persistor:I,children:Object(ne.jsx)(c.a,{children:Object(ne.jsx)(Oe,{})})})})}),document.getElementById("root"))}},[[164,1,2]]]);
//# sourceMappingURL=main.73d20ce3.chunk.js.map