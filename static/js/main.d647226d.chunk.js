(this["webpackJsonpreact-cinema"]=this["webpackJsonpreact-cinema"]||[]).push([[0],{49:function(e,t,c){},76:function(e,t,c){},77:function(e,t,c){},78:function(e,t,c){"use strict";c.r(t);var n=c(2),a=c.n(n),r=c(23),s=c.n(r),l=(c(49),c(3)),i=c(7),o=c(6),d=c.n(o),j=c(9),m=c(16),b=c.n(m),u=c(32),h=c(43),x=c(8),O=c(44),f=c(22),p=function(e){return{type:"addCategories",value:e}},v=c(1),g=function(e){var t=e.id,c=e.label,n=void 0===c?"":c,a=e.listDropdownItem,r=e.icon,s=e.onDropdown;return Object(v.jsxs)("li",{className:"nav__item nav__dropdown",children:[Object(v.jsxs)("span",{id:t,className:"nav--label",onClick:function(){s(t)},children:[n," ",r]}),Object(v.jsx)("div",{className:"nav__dropdown--wrap","aria-labelledby":t,children:Object(v.jsx)("ul",{className:"nav__dropdown--scroll m-0",children:a.map((function(e,t){return Object(v.jsx)("li",{className:"nav__dropdown__item",children:Object(v.jsx)(l.b,{to:"#",className:"nav--label",children:null===e||void 0===e?void 0:e.category})},t)}))})})]})},_=function(e){var t=e.to,c=e.label;return Object(v.jsx)("li",{className:"nav__item",children:Object(v.jsx)(l.b,{to:t,className:"text-decoration-none",children:Object(v.jsx)("span",{className:"nav--label",children:c})})})},N=function(){var e=Object(f.c)((function(e){return e.categories})),t=Object(f.b)();Object(n.useEffect)((function(){Object(j.a)(d.a.mark((function c(){var n,a;return d.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:if(n=function(){var e=Object(j.a)(d.a.mark((function e(t){var c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.get(t);case 2:return c=e.sent,e.abrupt("return",c.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),e[0]){c.next=6;break}return c.next=4,n("https://ndthinh-react-cinema.herokuapp.com/films/categories");case 4:a=c.sent,t(p(a));case 6:case"end":return c.stop()}}),c)})))()}),[]);var c=document.querySelector.bind(document),a=function(e){c("[aria-labelledby=".concat(e,"]")).classList.toggle("active")};return Object(v.jsx)("header",{className:"navigation bg-main",children:Object(v.jsx)("div",{className:"container",children:Object(v.jsx)("div",{className:"row",children:Object(v.jsx)("div",{className:"col-12",children:Object(v.jsxs)("nav",{className:"nav-bar",children:[Object(v.jsx)(l.b,{to:"/cinema",className:"text-decoration-none nav-bar__logo",children:Object(v.jsxs)("p",{className:"text-light m-0 text-size-2rem text-uppercase",children:[Object(v.jsx)("span",{className:"text-orange",children:"BNN"}),"Cinema"]})}),Object(v.jsxs)("ul",{className:"nav",children:[Object(v.jsx)(_,{to:"/cinema",label:"Home"}),Object(v.jsx)(g,{id:"dropdownCategory",label:"category",listDropdownItem:e,icon:Object(v.jsx)(u.a,{}),onDropdown:a}),Object(v.jsx)(_,{to:"#",label:"Null"}),Object(v.jsx)(g,{id:"dropdownMore",listDropdownItem:[1,2,3,4,5],icon:Object(v.jsx)(h.a,{}),onDropdown:a})]}),Object(v.jsxs)("div",{className:"wrap ml-auto",children:[Object(v.jsx)("form",{id:"formSearch",className:"nav__form",children:Object(v.jsxs)("div",{className:"grp-inp",children:[Object(v.jsx)("input",{className:"nav__search",type:"text",name:"",id:"",placeholder:"Search..."}),Object(v.jsx)("button",{className:"nav__btn nav__btn--search",children:Object(v.jsx)(x.d,{})}),Object(v.jsx)("button",{className:"nav__btn nav__btn--close",children:Object(v.jsx)(O.a,{onClick:function(e){e.preventDefault(),c("#formSearch").classList.toggle("active")}})})]})}),Object(v.jsx)("button",{className:"nav__btn nav__btn--search2",children:Object(v.jsx)(x.d,{onClick:function(e){e.preventDefault(),c("#formSearch").classList.toggle("active")}})}),Object(v.jsx)("div",{className:"nav__lang d-flex",children:Object(v.jsx)(g,{id:"dropdownCategory1",label:"EN",listDropdownItem:["EN","VN"],icon:Object(v.jsx)(u.a,{}),onDropdown:a})}),Object(v.jsx)("div",{className:"nav__auth",children:Object(v.jsxs)("button",{className:"nav__btn btn-orange nav__auth--btn",children:[Object(v.jsx)(x.e,{}),Object(v.jsx)("span",{className:"text-uppercase",children:"Sign in"})]})}),Object(v.jsx)("div",{className:"nav__burger",onClick:function(){var e=c(".nav__burger"),t=c(".nav");e.classList.toggle("nav__burger--active"),t.classList.toggle("active")},children:Object(v.jsxs)("div",{className:"nav__burger--wrap",children:[Object(v.jsx)("div",{className:"nav__burger--line"}),Object(v.jsx)("div",{className:"nav__burger--line"}),Object(v.jsx)("div",{className:"nav__burger--line"})]})})]})]})})})})})},y=c(5),w=function(){var e=document.querySelector.bind(document),t=document.querySelectorAll.bind(document),c=Object(n.useState)("NEW RELEASES"),a=Object(y.a)(c,2),r=a[0],s=a[1],i=function(){var t=e(".content__mobile--btn"),c=e(".content__mobile--dropdown");t.classList.toggle("content__mobile--btn--active"),c.classList.toggle("content__mobile--dropdown--active")},o=function(c){var n=c.target.innerHTML,a=c.target.id,r=t(".content__tabs .tab"),l=t(".tab--panel"),i=e(".tab--panel#".concat(a)),o=e(".tab#".concat(a));r.forEach((function(e){return e.classList.remove("tab--active")})),l.forEach((function(e){return e.classList.remove("active")})),o.classList.add("tab--active"),i.classList.add("active"),s(n)};return Object(v.jsx)("div",{className:"content__head",children:Object(v.jsx)("div",{className:"container",children:Object(v.jsx)("div",{className:"row",children:Object(v.jsxs)("div",{className:"col-12",children:[Object(v.jsx)("h2",{className:"content__title",children:"New items"}),Object(v.jsxs)("ul",{className:"content__tabs",children:[Object(v.jsx)("li",{children:Object(v.jsx)(l.b,{to:"#",id:"tab-1",className:"tab tab--active",onClick:o,children:"NEW RELEASES"})}),Object(v.jsx)("li",{children:Object(v.jsx)(l.b,{to:"#",id:"tab-2",className:"tab",onClick:o,children:"MOVIES"})}),Object(v.jsx)("li",{children:Object(v.jsx)(l.b,{to:"#",id:"tab-3",className:"tab",onClick:o,children:"TV SERIES"})}),Object(v.jsx)("li",{children:Object(v.jsx)(l.b,{to:"#",id:"tab-4",className:"tab",onClick:o,children:"CARTOONS"})})]}),Object(v.jsxs)("div",{className:"content__mobile",children:[Object(v.jsxs)("div",{className:"content__mobile--btn",onClick:i,children:[Object(v.jsx)("input",{type:"button",value:r}),Object(v.jsx)("span",{})]}),Object(v.jsx)("div",{className:"content__mobile--dropdown",children:Object(v.jsxs)("ul",{className:"content__mobile--nav",children:[Object(v.jsx)("li",{children:Object(v.jsx)(l.b,{to:"#",id:"tab-1",onClick:function(e){o(e),i()},children:"NEW RELEASES"})}),Object(v.jsx)("li",{children:Object(v.jsx)(l.b,{to:"#",id:"tab-2",onClick:function(e){o(e),i()},children:"MOVIES"})}),Object(v.jsx)("li",{children:Object(v.jsx)(l.b,{to:"#",id:"tab-3",onClick:function(e){o(e),i()},children:"TV SERIES"})}),Object(v.jsx)("li",{children:Object(v.jsx)(l.b,{to:"#",id:"tab-4",onClick:function(e){o(e),i()},children:"CARTOONS"})})]})})]})]})})})})},S=function(e){var t=e.to,c=e.title,n=e.category,a=e.image,r=e.rate;return Object(v.jsx)("div",{className:"card__wrap",children:Object(v.jsxs)("div",{className:"card",children:[Object(v.jsxs)("div",{className:"card__cover",children:[Object(v.jsx)("img",{className:"card__img",alt:"",srcSet:a}),Object(v.jsx)(l.b,{to:t,className:"card__play",children:Object(v.jsx)(x.c,{className:"pl-1"})}),Object(v.jsx)("span",{className:"card__rate card__rate--red",children:r})]}),Object(v.jsxs)("div",{className:"card__content",children:[Object(v.jsx)("h3",{className:"card__title",children:Object(v.jsx)(l.b,{to:"#",children:c})}),Object(v.jsx)("div",{className:"card__category",children:n.map((function(e,t){return Object(v.jsx)(l.b,{to:"#",className:"card__category__item",children:e},t)}))})]})]})})},k=function(){var e=Array(18).fill({title:"Ahihi",image:"https://dmitryvolkov.me/demo/hotflix2.1/main/img/covers/cover2.jpg",category:["a","b","c"],rate:"10"}),t=[{id:"tab-1",data:e},{id:"tab-2",data:e},{id:"tab-3",data:e},{id:"tab-4",data:e}];return Object(v.jsx)("div",{className:"container",children:Object(v.jsx)("div",{className:"tab--content",children:t.map((function(e,t){return Object(v.jsx)("div",{className:"tab--panel ".concat("tab-1"===e.id?"active":""),id:e.id,children:Object(v.jsx)("div",{className:"row",children:e.data.map((function(t,c){return Object(v.jsx)("div",{className:"col-6 col-sm-4 col-md-3 col-xl-2 p-0",children:Object(v.jsx)(S,{to:"#",title:e.id,image:t.image,category:t.category,rate:t.rate})},c)}))})},t)}))})})},C=function(){return Object(v.jsxs)("section",{className:"content",children:[Object(v.jsx)(w,{}),Object(v.jsx)(k,{})]})},E=c(12),D=function(){var e,t,c=[{width:768,cardToDisplay:2},{width:992,cardToDisplay:3},{width:1200,cardToDisplay:4}],n=null,a=0,r=function(e){return new Promise((function(t,c){setTimeout((function(){t(e)}),e)}))},s=function(){var t=e.clientWidth,c=i();return function(e){return function(t){return e/t}}(t)(c)},l=function(e,t,c){e.style.transform="translate(-".concat(t,"px,0px)"),e.style.transition="all ease ".concat(c,"s")},i=function(){var e=window.innerWidth,t=!0;return c.filter((function(c){return!!(e<=c.width&&t)&&(t=!1,!0)})).map((function(e){return e.cardToDisplay}))[0]||5},o=function(){return n.length/3},m=function(){var e=Object(j.a)(d.a.mark((function e(c,n){var s;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(s=o(),l(t,s*c+a*c,n),!(a>=s||a<=-s)){e.next=10;break}return e.next=6,r(700);case 6:return a=0,l(t,s*c,0),e.abrupt("return");case 10:case"end":return e.stop()}}),e)})));return function(t,c){return e.apply(this,arguments)}}();return{setCarouselArea:function(t){e=t},setBlockWrapElement:function(e){t=e},setElements:function(e){n=e},getIndexSlide:function(){return a>=0?a:o()+a},setup:function(){var e=s();!function(e){Object(E.a)(n).forEach((function(t){t.style.width=e+"px"}))}(e),m(e,0)},next:function(e){var t=s();a+=e,m(t,.7)}}}(),T=function(){var e=Object(i.h)().path,t=document.querySelector.bind(document),c=document.querySelectorAll.bind(document),a=Object(n.useState)(0),r=Object(y.a)(a,2),s=r[0],l=r[1],o=Object(n.useState)([]),m=Object(y.a)(o,2),u=m[0],h=m[1];return Object(n.useEffect)((function(){Object(j.a)(d.a.mark((function e(){var n,a,r,s,i,o,m,u;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=function(){var e=Object(j.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.get("http://localhost:5000/api/v.1/films");case 2:return t=e.sent,e.abrupt("return",t.data[0]);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),e.next=3,n();case 3:a=e.sent,r=Array(15).fill(a),h(r),s=t("._carousel .card-carousel"),i=t("._carousel .card-carousel__outer"),o=c("._carousel .card__wrap"),m=t("._carousel .btn--pre"),u=t("._carousel .btn--next"),console.log(i),D.setCarouselArea(s),D.setBlockWrapElement(i),D.setElements(o),D.setup(),window.addEventListener("resize",(function(){D.setup()})),u.addEventListener("click",(function(){D.next(1),l(D.getIndexSlide())})),m.addEventListener("click",(function(){D.next(-1),l(D.getIndexSlide())}));case 19:case"end":return e.stop()}}),e)})))()}),[]),Object(v.jsxs)("section",{className:"header _carousel",children:[Object(v.jsx)("div",{className:"header__bg--wrap",children:Object(v.jsx)("div",{className:"header__bg",children:u.map((function(e,t){return Object(v.jsx)("div",{className:"header__bg--item ".concat(t===s?"header__bg--active":""),style:{background:'url("'.concat(e.film__bg,'") center center / cover no-repeat')}},t)}))})}),Object(v.jsx)("div",{className:"container",children:Object(v.jsxs)("div",{className:"row",children:[Object(v.jsx)("div",{className:"col-11",children:Object(v.jsx)("div",{className:"head__title",children:Object(v.jsxs)("h1",{children:[Object(v.jsx)("strong",{children:"NEW ITEMS"})," OF THIS SEASON"]})})}),Object(v.jsx)("div",{className:"col-1",children:Object(v.jsxs)("div",{className:"carousel--btn",children:[Object(v.jsxs)("button",{className:"btn btn--pre",children:[" ",Object(v.jsx)(x.a,{})," "]}),Object(v.jsxs)("button",{className:"btn btn--next",children:[" ",Object(v.jsx)(x.b,{})," "]})]})}),Object(v.jsx)("div",{className:"col-12 p-0",children:Object(v.jsx)("div",{className:"card-carousel",children:Object(v.jsx)("div",{className:"card-carousel__outer",children:u.map((function(t,c){return t.category&&(t.category.length=3),Object(v.jsx)(S,{to:"".concat(e,"/detail/").concat(t.id)||"#",title:t.film__title,category:t.film__category||[],image:t.film__cover,rate:c},c)}))})})})]})})]})},L=function(){return Object(v.jsx)("div",{})},R=function(){return Object(v.jsxs)("article",{className:"home",children:[Object(v.jsx)(T,{}),Object(v.jsx)(C,{}),Object(v.jsx)(L,{})]})},A=function(e){var t=e.film;console.log(t);return Object(n.useEffect)((function(){}),[]),Object(v.jsxs)("section",{className:"section section--details",children:[Object(v.jsx)("div",{className:"header__bg--wrap",children:Object(v.jsx)("div",{className:"header__bg",children:Object(v.jsx)("div",{className:"header__bg--item header__bg--active",style:{background:'url("'.concat(t.film__bg,'") center center / cover no-repeat')}})})}),Object(v.jsx)("div",{className:"container",children:Object(v.jsxs)("div",{className:"row",children:[Object(v.jsx)("div",{className:"col-12",children:Object(v.jsx)("h1",{className:"section__title section__title--mb",children:t.film__title})}),Object(v.jsx)("div",{className:"col-12 col-xl-6",children:Object(v.jsx)("div",{className:"card card--details",children:Object(v.jsxs)("div",{className:"row",children:[Object(v.jsxs)("div",{className:"col-12 col-sm-5 col-md-4 col-lg-3 col-xl-5",children:[Object(v.jsxs)("div",{className:"card__cover",children:[Object(v.jsx)("img",{alt:"",srcSet:t.film__cover}),Object(v.jsx)("span",{className:"card__rate card__rate--green",children:"10"})]}),Object(v.jsxs)(l.b,{to:"#",className:"card__watch btn btn-orange",children:[Object(v.jsx)(x.c,{className:"mr-2"}),"Watch"]})]}),Object(v.jsx)("div",{className:"col-12 col-md-8 col-lg-9 col-xl-7",children:Object(v.jsxs)("div",{className:"card__content",children:[Object(v.jsxs)("ul",{className:"card__detail m-0",children:[Object(v.jsxs)("li",{children:[Object(v.jsx)("span",{children:"Director:"}),(t.film__director||[]).map((function(e,t){return Object(v.jsx)("span",{children:e},t)}))]}),Object(v.jsxs)("li",{children:[Object(v.jsx)("span",{children:"Cast:"}),(t.film__cast||[]).map((function(e,t){return Object(v.jsx)("span",{children:e},t)}))]}),Object(v.jsxs)("li",{children:[Object(v.jsx)("span",{children:"Category:"}),(t.film__category||[]).map((function(e,t){return Object(v.jsx)("span",{children:e},t)}))]}),Object(v.jsxs)("li",{children:[Object(v.jsx)("span",{children:"Release year:"}),Object(v.jsx)("span",{children:t.film__release})]}),Object(v.jsxs)("li",{children:[Object(v.jsx)("span",{children:"Running time:"}),Object(v.jsx)("span",{children:t.film__running})]}),Object(v.jsxs)("li",{children:[Object(v.jsx)("span",{children:"Category:"}),(t.film__country||[]).map((function(e,t){return Object(v.jsx)("span",{children:e},t)}))]})]}),Object(v.jsx)("div",{className:"card__description",children:Object(v.jsx)("div",{className:"card__description--scroll",children:Object(v.jsx)("div",{className:"card__description--text",children:t.film__description})})})]})})]})})}),Object(v.jsx)("div",{className:"col-12 col-xl-6",children:Object(v.jsx)("iframe",{src:t.film__trailer,width:"100%",height:"100%"})})]})})]})},I=function(){var e=Object(i.g)(),t=Object(n.useState)([]),c=Object(y.a)(t,2),a=c[0],r=c[1];return Object(n.useEffect)((function(){Object(j.a)(d.a.mark((function t(){var c;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=function(){var t=Object(j.a)(d.a.mark((function t(){var c;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,b.a.get("http://localhost:5000/api/v.1/films/"+e.id);case 2:return c=t.sent,t.abrupt("return",c.data);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),t.t0=r,t.next=4,c();case 4:t.t1=t.sent,(0,t.t0)(t.t1);case 6:case"end":return t.stop()}}),t)})))()}),[]),console.log(e),console.log(a),Object(v.jsx)("article",{children:Object(v.jsx)(A,{film:a})})};var F=function(){var e=Object(i.h)().path;return Object(v.jsxs)(l.a,{children:[Object(v.jsx)(N,{}),Object(v.jsxs)(i.d,{children:[Object(v.jsx)(i.b,{path:e,exact:!0,component:R}),Object(v.jsx)(i.b,{path:"".concat(e,"/detail/:id"),exact:!0,component:I})]})]})},M=function(){return Object(v.jsxs)("div",{className:"sidebar w-280px h-100vh d-flex flex-column text-light",children:[Object(v.jsxs)("div",{className:"sidebar_logo text-light text-uppercase d-flex align-items-center",children:[Object(v.jsx)("span",{className:"text-orange",children:"Chu\u1ed1i"})," Cinema"]}),Object(v.jsxs)("div",{className:"sidebar_user d-flex align-items-center flex-nowrap",children:[Object(v.jsx)("div",{className:"sidebar_user-avatar",children:Object(v.jsx)(x.f,{})}),Object(v.jsxs)("div",{className:"sidebar_user-title",children:[Object(v.jsx)("span",{children:"Admin"}),Object(v.jsx)("p",{className:"m-0 font-weight-bold",children:"Th\u1ecbnh"})]}),Object(v.jsx)("button",{className:"sidebar_user-btn ml-auto",children:Object(v.jsx)(x.e,{})})]}),Object(v.jsx)("div",{className:"sidebar_nav",children:Object(v.jsx)("nav",{children:[{link:"/admin/add",icon:"apps-sharp",name:"Book"},{link:"/admin/film",icon:"accessibility-outline",name:"Add Film"},{link:"/admin/nav3",icon:"archive-outline",name:"Nav 3"},{link:"/admin/nav4",icon:"albums-outline",name:"Nav 4"},{link:"/admin/nav5",icon:"alarm-outline",name:"Nav 5"}].map((function(e,t){return Object(v.jsx)("li",{className:"sidebar_nav-item",children:Object(v.jsxs)(l.b,{to:e.link,className:"d-inline-flex align-items-center text-decoration-none text-orange",children:[Object(v.jsx)("ion-icon",{name:e.icon,style:{marginRight:15}}),e.name]})},t)}))})})]})},P=c(21),V=c(26),q=function(){var e=document.querySelector.bind(document),t=document.querySelectorAll.bind(document),c=Object(n.useState)([]),a=Object(y.a)(c,2),r=a[0],s=a[1],l=Object(n.useState)([]),i=Object(y.a)(l,2),o=i[0],m=i[1],u=Object(n.useState)([]),h=Object(y.a)(u,2),O=h[0],f=h[1],p=Object(n.useState)([]),g=Object(y.a)(p,2),_=g[0],N=g[1],w=Object(n.useState)({country:!1,category:!1}),S=Object(y.a)(w,2),k=S[0],C=S[1],D=Object(n.useState)([]),T=Object(y.a)(D,2),L=T[0],R=T[1],A=Object(n.useState)([]),I=Object(y.a)(A,2),F=I[0],M=I[1],q=Object(n.useState)([]),W=Object(y.a)(q,2),J=W[0],z=W[1];Object(n.useEffect)((function(){Object(j.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=function(e){return function(){var t=Object(j.a)(d.a.mark((function t(c){var n,a;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,b.a.get("https://ndthinh-react-cinema.herokuapp.com/films/"+c);case 2:n=t.sent,a=n.data.map((function(e){return Object(V.a)(Object(V.a)({},e),{},{selected:!1})})),e[0](a),e[1](a);case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},e.next=4,t([s,m])("countries");case 4:return e.next=6,t([f,N])("categories");case 6:e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))()}),[]);var B=function(e){return{country:r,category:O,director:L,cast:F,photos:J}[e]},H=function(e){return{country:s,category:f,director:R,cast:M,photos:z}[e]},X=function(e){return function(t){return e.map((function(e){return e._id===t&&(e.selected=!e.selected),e}))}},U=function(t){e(".".concat(t)).focus()},K=function(t){e("div[data-input=".concat(t,"]")).classList.add("form__select--active")},G=function(t){e("div[data-input=".concat(t,"]")).classList.remove("form__select--active")},Q=function(e){return B(e).map((function(t){return Object(v.jsx)("li",{className:"d-flex align-items-center",id:"form__"+e,children:Object(v.jsxs)("span",{className:"d-flex align-items-center text-light",children:[Object(v.jsx)(x.g,{className:"mr-1",onClick:function(t){return function(e,t){var c=e.target.parentElement.parentElement.textContent,n=B(t);H(t)(n.filter((function(e){return e[t]!==c})))}(t,e)}}),t[e]]})},t._id)}))},Y=function(e){return Object(v.jsx)("input",{type:"text",autoComplete:"off",className:"form-control bg-sub text-light rounded-lg ".concat(e),size:"1",placeholder:0===B(e).length?{director:"Director",cast:"Cast",photos:"Photos"}[e]:"",onKeyPress:function(t){return function(e,t){var c=e.target.value.trim(),n=B(t),a=H(t);if(13===(e.keyCode||e.which)){var r=Object(P.a)({_id:n.length+1},t,c);n.push(r),a(Object(E.a)(n)),e.target.value=""}}(t,e)},onFocus:function(){return K(e)},onBlur:function(){return G(e)}})},Z=function(e){var t=B(e),c=H(e);return t.filter((function(e){return e.selected})).map((function(n,a){return Object(v.jsx)("li",{className:"d-flex align-items-center",id:"form__"+e,children:Object(v.jsxs)("span",{className:"d-flex align-items-center text-light",children:[Object(v.jsx)(x.g,{className:"mr-1",onClick:function(){return c(X(t)(n._id))}}),n[e]]})},a)}))},$=function(e){var t=function(e){return{country:o,category:_}[e]}(e),c=H(e);return t.map((function(t,n){return Object(v.jsx)("li",{className:t.selected?"selected":"",onClick:function(){c(X(B(e))(t._id))},children:t[e]},n)}))},ee=function(e){return Object(v.jsx)("input",{type:"text",name:"",autoComplete:"off",className:"form-control bg-sub text-light rounded-lg ".concat(e),size:"1",placeholder:0===B(e).filter((function(e){return e.selected})).length?{country:"Choose Country",category:"Choose Catelogy"}[e]:"",onChange:function(t){return function(e,t){e.target.size=e.target.value.length||1;var c=e.target.value.toLowerCase(),n="country"===t?m:N,a=B(t);if(0!==c.length){var r=a.filter((function(e){return-1!==e[t].toLowerCase().search(c)}));n(r=0==r?[Object(P.a)({},t,"No result found")]:r)}else n(a)}(t,e)},onClick:function(){return function(e){var t=Object(V.a)({},k);t[e]=!t[e],C(t)}(e)},onFocus:function(){return K(e)},onBlur:function(){return G(e)}})};return Object(v.jsx)("main",{className:"container-fluid text-light",children:Object(v.jsxs)("header",{className:"row",children:[Object(v.jsx)("div",{className:"col-12",children:Object(v.jsx)("div",{className:"mb-30px h-80px d-flex align-items-center border-bottom border-main",children:Object(v.jsx)("p",{className:"m-0 text-size-22px",children:"Nav 1"})})}),Object(v.jsx)("div",{className:"col-12",children:Object(v.jsx)("form",{className:"border border-main",encType:"multipart/form-data",onSubmit:function(c){c.preventDefault();var n=["form__cover","form__title","form__description","form__release","form__running","form__price","form__video","form__trailer","form__bg"],a=["form__country","form__category","form__cast","form__director","form__photos"];n.map((function(t){return e("#".concat(t))})),a.map((function(e){return t("#".concat(e))}));var r={};[].concat(Object(E.a)(n.map((function(t){return{id:t,data:e("#".concat(t))}}))),Object(E.a)(a.map((function(e){return{id:e,data:t("#".concat(e))}})))).forEach((function(e){var t=e.id,c=e.data;"file"!==c.type&&c.type&&(r[t]=c.value),"number"===typeof c.length&&(r[t]=Object(E.a)(c).map((function(e){return e.textContent})))}));console.log(r),b.a.post("http://localhost:5000/api/v.1/films",r).then((function(e){console.log(JSON.parse(e.data))})).catch((function(e){console.log(e)}))},onKeyPress:function(e){13===(e.keyCode||e.which)&&e.preventDefault()},children:Object(v.jsxs)("div",{className:"row",children:[Object(v.jsx)("div",{className:"col-12",children:Object(v.jsx)("div",{className:"form-group",children:Object(v.jsx)("input",{type:"text",placeholder:"Image Cover",className:"form-control bg-sub text-light rounded-lg",name:"img",id:"form__cover",onChange:function(t){e("#imageCover").src=t.target.value}})})}),Object(v.jsx)("div",{className:"form-cover",children:Object(v.jsx)("div",{className:"form__img",children:Object(v.jsx)("img",{className:"w-100 h-100 rounded-lg",id:"imageCover",alt:"",srcSet:""})})}),Object(v.jsx)("div",{className:"form-content",children:Object(v.jsxs)("div",{className:"row",children:[Object(v.jsx)("div",{className:"col-12",children:Object(v.jsx)("div",{className:"form-group",children:Object(v.jsx)("input",{type:"text",className:"form-control bg-sub text-light rounded-lg",name:"title",id:"form__title",placeholder:"Title"})})}),Object(v.jsx)("div",{className:"col-12 col-md-6",children:Object(v.jsx)("div",{className:"form-group form__select",children:Object(v.jsx)("div",{className:"form__select--selected bg-sub text-light rounded-lg d-flex h-100","data-input":"cast",onClick:function(){return U("cast")},children:Object(v.jsxs)("ul",{className:"d-flex flex-wrap align-items-center h-100 w-100",children:[Q("cast"),Y("cast")]})})})}),Object(v.jsx)("div",{className:"col-12 col-md-6",children:Object(v.jsx)("div",{className:"form-group form__select",children:Object(v.jsx)("div",{className:"form__select--selected bg-sub text-light rounded-lg d-flex h-100","data-input":"director",onClick:function(){return U("director")},children:Object(v.jsxs)("ul",{className:"d-flex flex-wrap align-items-center h-100 w-100",children:[Q("director"),Y("director")]})})})}),Object(v.jsx)("div",{className:"col-12 col-md-6",children:Object(v.jsxs)("div",{className:"form-group form__select",children:[Object(v.jsx)("div",{className:"form__select--selected bg-sub text-light rounded-lg d-flex h-100","data-input":"country",onClick:function(){return U("country")},children:Object(v.jsxs)("ul",{className:"d-flex flex-wrap align-items-center h-100 w-100",children:[Z("country"),ee("country")]})}),Object(v.jsx)("div",{className:"form__select--dropdown "+(k.country?"active":""),children:Object(v.jsx)("ul",{className:"m-0 p-0 list-unstyled h-100",children:$("country")})})]})}),Object(v.jsx)("div",{className:"col-12 col-md-6",children:Object(v.jsxs)("div",{className:"form-group form__select",children:[Object(v.jsx)("div",{className:"form__select--selected bg-sub text-light rounded-lg d-flex h-100","data-input":"category",onClick:function(){return U("category")},children:Object(v.jsxs)("ul",{className:"d-flex flex-wrap align-items-center h-100 w-100",children:[Z("category"),ee("category")]})}),Object(v.jsx)("div",{className:"form__select--dropdown "+(k.category?"active":""),children:Object(v.jsx)("ul",{className:"m-0 p-0 list-unstyled h-100",children:$("category")})})]})}),Object(v.jsx)("div",{className:"col-12 col-md-6 col-lg-4",children:Object(v.jsx)("div",{className:"form-group",children:Object(v.jsx)("input",{type:"number",className:"form-control bg-sub text-light rounded-lg",name:"release",id:"form__release",placeholder:"Release year"})})}),Object(v.jsx)("div",{className:"col-12 col-md-6 col-lg-4",children:Object(v.jsx)("div",{className:"form-group",children:Object(v.jsx)("input",{type:"number",className:"form-control bg-sub text-light rounded-lg",name:"running",id:"form__running",placeholder:"Running time"})})}),Object(v.jsx)("div",{className:"col-12 col-md-12 col-lg-4",children:Object(v.jsx)("div",{className:"form-group",children:Object(v.jsx)("input",{type:"number",className:"form-control bg-sub text-light rounded-lg",name:"price",id:"form__price",placeholder:"Gi\xe1"})})})]})}),Object(v.jsx)("div",{className:"col-12",children:Object(v.jsx)("div",{className:"form-group",children:Object(v.jsx)("textarea",{className:"form-control bg-sub text-light rounded-lg",name:"description",id:"form__description",rows:"5",placeholder:"Description"})})}),Object(v.jsx)("div",{className:"col-12",children:Object(v.jsx)("div",{className:"form-group form__select",children:Object(v.jsx)("div",{className:"form__select--selected bg-sub text-light rounded-lg d-flex h-100","data-input":"photos",onClick:function(){return U("photos")},children:Object(v.jsxs)("ul",{className:"d-flex flex-wrap align-items-center h-100 w-100",children:[Q("photos"),Y("photos")]})})})}),Object(v.jsx)("div",{className:"col-12",children:Object(v.jsx)("div",{className:"form-group",children:Object(v.jsx)("input",{type:"text",className:"form-control bg-sub text-light rounded-lg",name:"video",id:"form__video",placeholder:"Video"})})}),Object(v.jsx)("div",{className:"col-12",children:Object(v.jsx)("div",{className:"form-group",children:Object(v.jsx)("input",{type:"text",className:"form-control bg-sub text-light rounded-lg",id:"form__trailer",placeholder:"Trailer"})})}),Object(v.jsx)("div",{className:"col-12",children:Object(v.jsx)("div",{className:"form-group",children:Object(v.jsx)("input",{type:"text",className:"form-control bg-sub text-light rounded-lg",id:"form__bg",placeholder:"bg"})})}),Object(v.jsx)("div",{className:"col-12",children:Object(v.jsx)("button",{type:"submit",className:"btn text-light border-orange border border-2",children:"Publish"})})]})})})]})})},W=function(e){var t=e.ERROR,c=Object(n.useState)(""),a=Object(y.a)(c,2),r=a[0],s=a[1];return Object(v.jsx)("div",{className:"col-4 d-flex flex-column",children:Object(v.jsxs)("div",{className:"border border-main rounded-lg h-100 p-2 bg-sub",children:[Object(v.jsxs)("div",{className:"form-group row m-0",children:[Object(v.jsx)("label",{htmlFor:"filmImg",className:"col-4 col-form-label-sm pr-0",children:"H\xecnh \u1ea3nh: "}),Object(v.jsxs)("div",{className:"col-8",children:[Object(v.jsx)("input",{type:"text",name:"filmImg",id:"filmImg",className:"form-control form-control-sm bg-main border-main text-light",placeholder:"URL","data-error":"H\xecnh \u1ea3nh",onChange:function(e){var t=e.target.value.slice(32,65);console.log(t);var c="https://lh3.google.com/u/0/d/".concat(t,"=w0-nu-iv1");s(c)}}),Object(v.jsx)("small",{className:"text-danger",children:t.filmImg})]})]}),Object(v.jsx)("div",{className:"filmImg",children:Object(v.jsx)("img",{alt:"",srcSet:r,className:"w-100"})})]})})},J=function(e){var t=e.ERROR;return Object(v.jsx)("div",{className:"col-8",children:Object(v.jsxs)("div",{className:"border border-main rounded-lg h-100 p-2 bg-sub",children:[[{label:"T\xean phim",name:"filmName",id:"filmName",placeholder:"T\xean phim",type:"text"},{label:"\u0110\u1ea1o di\u1ec5n",name:"director",id:"director",placeholder:"\u0110\u1ea1o di\u1ec5n",type:"text"},{label:"Di\u1ec5n vi\xean",name:"actor",id:"actor",placeholder:"Di\u1ec5n vi\xean",type:"text"},{label:"Th\u1ec3 lo\u1ea1i",name:"category",id:"category",placeholder:"Th\u1ec3 lo\u1ea1i",type:"text"},{label:"kh\u1edfi chi\u1ebfu",name:"premiere",id:"premiere",placeholder:"kh\u1edfi chi\u1ebfu",type:"date"},{label:"Th\u1eddi l\u01b0\u1ee3ng",name:"time",id:"time",placeholder:"Th\u1eddi l\u01b0\u1ee3ng",type:"number"},{label:"Ng\xf4n ng\u1eef",name:"language",id:"language",placeholder:"Ng\xf4n ng\u1eef",type:"text"}].map((function(e,c){return Object(v.jsxs)("div",{className:"form-group",children:[Object(v.jsx)("input",{type:e.type,name:e.name,id:e.id,className:"form-control form-control-sm bg-main border-main text-light",placeholder:e.placeholder,"data-error":e.placeholder}),Object(v.jsx)("small",{className:"text-danger",children:t[e.id]})]},c)})),Object(v.jsxs)("div",{className:"form-group",children:[Object(v.jsxs)("select",{className:"form-control form-control-sm bg-main border-main text-light",name:"rate",id:"rate","data-error":"rate",children:[Object(v.jsx)("option",{value:"",children:"Ch\u1ecdn m\u1ee9c \u0111\u1ed9 ki\u1ec3m duy\u1ec7t"}),Object(v.jsx)("option",{value:"P",children:"P"}),Object(v.jsx)("option",{value:"C13",children:"C13"}),Object(v.jsx)("option",{value:"C16",children:"C16"}),Object(v.jsx)("option",{value:"C18",children:"C18"})]}),Object(v.jsx)("small",{className:"text-danger",children:t.rate})]})]})})},z=function(){var e=Object(n.useState)(0),t=Object(y.a)(e,2),c=t[0],a=t[1],r=Object(n.useState)(0),s=Object(y.a)(r,2),l=s[0],i=s[1],o=Object(n.useState)([]),d=Object(y.a)(o,2),j=d[0],m=d[1],b=[{id:1,value:"8:00 AM"},{id:2,value:"10:00 AM"},{id:3,value:"12:00 AM"},{id:4,value:"14:00 PM"},{id:5,value:"16:00 PM"},{id:6,value:"18:00 PM"},{id:7,value:"20:00 PM"}];Object(n.useEffect)((function(){if(!c||!l)return m([]);if(l-c<0)return m([]);for(var e=(l-c)/864e5,t=[],n=0;n<=e;n++)t.push(new Date(c+864e5*n).toJSON());m(t)}),[c,l]);return Object(v.jsx)("div",{className:"col-12 my-30px",children:Object(v.jsxs)("div",{className:"border border-main rounded-lg h-100 p-2 row m-0 bg-sub",children:[Object(v.jsx)("div",{className:"col-4 p-0 d-flex align-items-center mb-3",children:Object(v.jsx)("p",{className:"m-0",children:"L\u1ef1a ch\u1ecdn th\u1eddi gian chi\u1ebfu"})}),Object(v.jsxs)("div",{className:"col-8 row m-0 p-0 mb-3",children:[Object(v.jsxs)("div",{className:"form-group col-6 row m-0 px-0",children:[Object(v.jsx)("label",{htmlFor:"",className:"col-2 col-form-label-sm m-0",children:"From"}),Object(v.jsx)("div",{className:"col-10 px-0",children:Object(v.jsx)("input",{type:"date",name:"dateTo",id:"date",className:"form-control-sm form-control bg-main border-main text-light",onChange:function(e){a(new Date(e.target.value).getTime())}})})]}),Object(v.jsxs)("div",{className:"form-group col-6 row m-0 px-0",children:[Object(v.jsx)("label",{htmlFor:"",className:"col-2 col-form-label-sm m-0 text-center",children:"To"}),Object(v.jsx)("div",{className:"col-10 px-0",children:Object(v.jsx)("input",{type:"date",name:"dateForm",id:"date",className:"form-control-sm form-control bg-main border-main text-light",onChange:function(e){i(new Date(e.target.value).getTime())}})})]})]}),Object(v.jsx)("div",{className:"col-12 p-0",children:j.map((function(e,t){return Object(v.jsxs)("div",{className:"row m-0",children:[Object(v.jsx)("p",{className:"col-4",children:new Date(e).toLocaleDateString()}),Object(v.jsx)("div",{className:"col-8 mb-3",children:b.map((function(t){return Object(v.jsx)("div",{className:"form-check form-check-inline",children:Object(v.jsxs)("label",{className:"form-check-label",children:[Object(v.jsx)("input",{className:"form-check-input",type:"checkbox",name:"timeTable",id:"timeTable",value:'{"'.concat(e,'" : ').concat(t.id,"}")})," ",t.value]})},t.id)}))})]},t)}))})]})})},B=function(){var e=document.querySelector.bind(document),t=document.querySelectorAll.bind(document);return{selector:function(t){return t.map((function(t){return e("#".concat(t))}))},selectorAll:function(e){var c=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return c=""===c?c:":".concat(c),e.map((function(e){return t("#".concat(e+c))}))},convertTimeTable:function(e){var t=(e=e.map((function(e){return JSON.parse("".concat(e))}))).map((function(e){return Object.keys(e)[0]}));return t=Object(E.a)(new Set(t)),e=t.map((function(t){var c=e.filter((function(e){return Object.keys(e)[0]===t})).map((function(e){return Object.values(e)[0]}));return{date:new Date(t).toJSON(),time:c}}))},checkValidFormData:function(e,t){var c={};e.forEach((function(e){e.localName&&0===e.value.length&&(c[e.id]="".concat(e.dataset.error," kh\xf4ng \u0111\u01b0\u1ee3c \u0111\u1ec3 tr\u1ed1ng"))})),t(c)},isEmpty:function(e){switch(JSON.stringify(e)){case"[]":case"{}":return!0;default:return!1}}}}(),H=function(){var e=["filmImg","filmName","director","actor","category","premiere","time","description","language","rate"],t=["timeTable"],c=Object(n.useState)({}),a=Object(y.a)(c,2),r=a[0],s=a[1];return Object(v.jsxs)("div",{className:"main flex-grow-1 text-light d-flex flex-row flex-wrap align-content-start",children:[Object(v.jsxs)("header",{className:"h-80px w-100 border-main border-bottom d-flex align-items-center justify-content-between",children:[Object(v.jsx)("p",{className:"m-0 text-size-22px",children:"Add Film"}),Object(v.jsx)("button",{type:"submit",className:"btn text-light border-orange px-5",children:"ADD"})]}),Object(v.jsxs)("main",{className:"d-flex flex-column flex-grow-1",children:[Object(v.jsxs)("div",{className:"row m-0",children:[Object(v.jsx)("div",{className:"col-2"}),Object(v.jsxs)("div",{className:"col-8",children:[Object(v.jsx)("div",{className:"alert alert-danger m-0",role:"alert",style:{display:r.error?"block":"none"},children:Object(v.jsx)("strong",{children:r.error})}),Object(v.jsx)("div",{className:"alert alert-success",role:"alert",style:{display:r.success?"block":"none"},children:Object(v.jsx)("strong",{children:r.success})})]}),Object(v.jsx)("div",{className:"col-2"})]}),Object(v.jsx)("form",{id:"form-addfilm",onSubmit:function(c){c.preventDefault(),s({});var n={},a=[].concat(Object(E.a)(B.selector(e)),Object(E.a)(B.selectorAll(t,"checked")));a.forEach((function(e){var t=e.localName?e.id:"timeTable",c=e.localName?e.value:Object(E.a)(e).map((function(e){return e.value}));n[t]=c})),B.checkValidFormData(a,(function(e){B.isEmpty(e)?(n.director=n.director.split(", "),n.actor=n.actor.split(", "),n.category=n.category.split(", "),n.premiere=new Date(n.premiere).toJSON(),n.language=n.language.split(", "),n.timeTable=B.convertTimeTable(n.timeTable),b.a.post("http://localhost:5000/films",n).then((function(e){s(e.data),console.log(e.data)})),console.log(n)):s(e)}))},children:Object(v.jsxs)("div",{className:"row m-0",children:[Object(v.jsx)(W,{ERROR:r}),Object(v.jsx)(J,{ERROR:r}),Object(v.jsx)(z,{}),Object(v.jsx)("div",{className:"col-12",children:Object(v.jsx)("div",{className:"border border-main rounded-lg h-100 p-2 bg-sub",children:Object(v.jsxs)("div",{className:"form-group",children:[Object(v.jsx)("label",{htmlFor:"description",children:"Description"}),Object(v.jsx)("textarea",{className:"form-control-sm form-control bg-main border-main text-light",name:"description",id:"description",rows:"3",placeholder:"Description","data-error":"description"}),Object(v.jsx)("small",{className:"text-danger",children:r.description})]})})}),Object(v.jsx)("div",{className:"col-12 text-center bg-sub",children:Object(v.jsx)("button",{className:"btn text-light border-orange px-5",children:"ADD FILM"})})]})})]})]})},X=function(){var e=Object(i.h)().path;return Object(v.jsxs)("div",{className:"container-fluid h-100vh bg-main p-0 d-flex flex-nowrap admin",children:[Object(v.jsx)(M,{}),Object(v.jsxs)(i.d,{children:[Object(v.jsx)(i.b,{path:"".concat(e,"/add"),exact:!0,component:q}),Object(v.jsx)(i.b,{path:"".concat(e,"/film"),component:H})]})]})};var U=function(){return Object(v.jsx)(i.a,{to:"/cinema"})},K=function(){return Object(v.jsx)(l.a,{children:Object(v.jsxs)(i.d,{children:[Object(v.jsx)(i.b,{path:"/",exact:!0,component:U}),Object(v.jsx)(i.b,{path:"/cinema",component:F}),Object(v.jsx)(i.b,{path:"/admin",component:X})]})})},G=(c(75),c(76),c(77),c(18)),Q=Object(G.b)({visited:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"addVisited":default:return e}},categories:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"addCategories":return t.value;default:return e}},countries:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"addCountries":default:return e}}}),Y=Object(G.c)(Q,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());s.a.render(Object(v.jsx)(a.a.StrictMode,{children:Object(v.jsx)(f.a,{store:Y,children:Object(v.jsx)(K,{})})}),document.getElementById("root"))}},[[78,1,2]]]);
//# sourceMappingURL=main.d647226d.chunk.js.map