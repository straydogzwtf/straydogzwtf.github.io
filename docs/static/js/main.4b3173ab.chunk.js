(this.webpackJsonpstraydogz_nft_minting_dapp=this.webpackJsonpstraydogz_nft_minting_dapp||[]).push([[0],{310:function(n,t){},313:function(n,t){},316:function(n,t){},320:function(n,t){},321:function(n,t){},348:function(n,t){},350:function(n,t){},360:function(n,t){},362:function(n,t){},372:function(n,t){},374:function(n,t){},389:function(n,t){},417:function(n,t){},418:function(n,t){},493:function(n,t){},495:function(n,t){},502:function(n,t){},503:function(n,t){},644:function(n,t,e){},645:function(n,t,e){},646:function(n,t,e){"use strict";e.r(t);var a,c,r,i,o,s,d,l,b,j,p,g,u,x,h,m,O=e(0),f=e(37),w=e.n(f),v=e(28),y=e.n(v),S=e(71),N=e(13),C=e(26),_=e(93),k=(e(105),e(275),e(110)),D=e(276),E=e(3),T={loading:!1,account:null,smartContract:null,web3:null,errorMsg:""},A=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CONNECTION_REQUEST":return Object(E.a)(Object(E.a)({},T),{},{loading:!0});case"CONNECTION_SUCCESS":return Object(E.a)(Object(E.a)({},n),{},{loading:!1,account:t.payload.account,smartContract:t.payload.smartContract,web3:t.payload.web3});case"CONNECTION_FAILED":return Object(E.a)(Object(E.a)({},T),{},{loading:!1,errorMsg:t.payload});case"UPDATE_ACCOUNT":return Object(E.a)(Object(E.a)({},n),{},{account:t.payload.account});default:return n}},z={loading:!1,totalSupply:0,cost:0,error:!1,errorMsg:""},L=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:z,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHECK_DATA_REQUEST":return Object(E.a)(Object(E.a)({},n),{},{loading:!0,error:!1,errorMsg:""});case"CHECK_DATA_SUCCESS":return Object(E.a)(Object(E.a)({},n),{},{loading:!1,totalSupply:t.payload.totalSupply,error:!1,errorMsg:""});case"CHECK_DATA_FAILED":return Object(E.a)(Object(E.a)({},z),{},{loading:!1,error:!0,errorMsg:t.payload});default:return n}},I=Object(k.b)({blockchain:A,data:L}),M=[D.a],K=Object(k.c)(k.a.apply(void 0,M)),F=Object(k.d)(I,K),R=function(n){return{type:"CHECK_DATA_FAILED",payload:n}},U=function(){return function(){var n=Object(S.a)(y.a.mark((function n(t){var e;return y.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t({type:"CHECK_DATA_REQUEST"}),n.prev=1,n.next=4,F.getState().blockchain.smartContract.methods.totalSupply().call();case 4:e=n.sent,t({type:"CHECK_DATA_SUCCESS",payload:{totalSupply:e}}),n.next=12;break;case 8:n.prev=8,n.t0=n.catch(1),console.log(n.t0),t(R("Could not load data from contract."));case 12:case"end":return n.stop()}}),n,null,[[1,8]])})));return function(t){return n.apply(this,arguments)}}()},P=e(27),H=P.a.div(a||(a=Object(C.a)(["\n  background-color: var(--primary);\n  background-image: ",";\n  background-size: cover;\n  background-position: center;\n  width: 100%;\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n"])),(function(n){var t=n.image;return t?"url(".concat(t,")"):"none"})),B=(P.a.div(c||(c=Object(C.a)(["\n  height: 8px;\n  width: 8px;\n"]))),P.a.div(r||(r=Object(C.a)(["\n  height: 16px;\n  width: 16px;\n"]))),P.a.div(i||(i=Object(C.a)(["\n  height: 24px;\n  width: 24px;\n"]))),P.a.div(o||(o=Object(C.a)(["\n  height: 32px;\n  width: 32px;\n"]))),P.a.div(s||(s=Object(C.a)(["\n  display: flex;\n  flex: ",";\n  flex-direction: ",";\n  justify-content: ",";\n  align-items: ",";\n  width: 100%;\n"])),(function(n){var t=n.flex;return t||0}),(function(n){var t=n.fd;return t||"column"}),(function(n){var t=n.jc;return t||"flex-start"}),(function(n){var t=n.ai;return t||"flex-start"})),P.a.p(d||(d=Object(C.a)(["\n  color: var(--primary-text);\n  font-size: 22px;\n  font-weight: 700;\n  line-height: 1.6;\n"]))),P.a.p(l||(l=Object(C.a)(["\n  color: var(--primary-text);\n  font-size: 18px;\n  line-height: 1.6;\n"]))),P.a.p(b||(b=Object(C.a)(["\n  color: var(--primary-text);\n  line-height: 1.6;\n"]))),P.a.div(j||(j=Object(C.a)(["\n  :active {\n    opacity: 0.6;\n  }\n"]))),e(280)),Y=e(281),G=e.n(Y),Q=(e(637),e(174)),W=e(94),J=e(49),X=(e(638),e(109)),q=e(135),V=e(134),Z=e(1),$=function(n){return n.preventDefault()},nn={0:{items:3},568:{items:5},1024:{items:8}},tn=[Object(Z.jsx)("img",{src:"/config/images/StrayDogz_01.png",onDragStart:$,role:"presentation"}),Object(Z.jsx)("img",{src:"/config/images/StrayDogz_02.png",onDragStart:$,role:"presentation"}),Object(Z.jsx)("img",{src:"/config/images/StrayDogz_03.png",onDragStart:$,role:"presentation"}),Object(Z.jsx)("img",{src:"/config/images/StrayDogz_04.png",onDragStart:$,role:"presentation"}),Object(Z.jsx)("img",{src:"/config/images/StrayDogz_05.png",onDragStart:$,role:"presentation"}),Object(Z.jsx)("img",{src:"/config/images/StrayDogz_06.png",onDragStart:$,role:"presentation"}),Object(Z.jsx)("img",{src:"/config/images/StrayDogz_07.png",onDragStart:$,role:"presentation"}),Object(Z.jsx)("img",{src:"/config/images/StrayDogz_08.png",onDragStart:$,role:"presentation"}),Object(Z.jsx)("img",{src:"/config/images/StrayDogz_09.png",onDragStart:$,role:"presentation"})],en=function(){return Object(Z.jsx)(G.a,{mouseTracking:!0,items:tn,responsive:nn,controlsStrategy:"alternate"})};P.a.button(p||(p=Object(C.a)(["\n  padding: 10px;\n  border-radius: 50px;\n  border: none;\n  background-color: var(--secondary);\n  padding: 10px;\n  font-weight: bold;\n  color: var(--secondary-text);\n  width: 100px;\n  cursor: pointer;\n  box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);\n  -webkit-box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);\n  -moz-box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);\n  :active {\n    box-shadow: none;\n    -webkit-box-shadow: none;\n    -moz-box-shadow: none;\n  }\n"]))),P.a.button(g||(g=Object(C.a)(["\n  padding: 10px;\n  border-radius: 100%;\n  border: none;\n  background-color: var(--primary);\n  padding: 10px;\n  font-weight: bold;\n  font-size: 1rem;\n  color: var(--primary-text);\n  width: 30px;\n  height: 30px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);\n  -webkit-box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);\n  -moz-box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);\n  :active {\n    box-shadow: none;\n    -webkit-box-shadow: none;\n    -moz-box-shadow: none;\n  }\n"]))),P.a.div(u||(u=Object(C.a)(["\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  justify-content: stretched;\n  align-items: stretched;\n  width:90vw;\n  @media (min-width: 768px) {\n    width:50vw\n  }\n  @media (min-width: 1024px) {\n    width:40vw\n  }\n  @media (min-width: 1650px) {\n    width:23vw\n  }\n"]))),P.a.img(x||(x=Object(C.a)(["\n  width: 90vw;\n  display:block;\n  margin:auto;\n  @media (min-width: 768px) {\n    width: 50vw;\n  }\n  @media (min-width: 1024px) {\n    width: 40vw;\n  }\n  @media (min-width: 1650px) {\n    width: 23vw;\n  }\n  transition: width 0.5s;\n  transition: height 0.5s;\n"]))),P.a.img(h||(h=Object(C.a)(["\n  box-shadow: 0px 5px 11px 2px rgba(0, 0, 0, 0.7);\n  border: 4px dashed var(--secondary);\n  background-color: var(--accent);\n  border-radius: 100%;\n  width: 200px;\n  @media (min-width: 900px) {\n    width: 250px;\n  }\n  @media (min-width: 1000px) {\n    width: 300px;\n  }\n  transition: width 0.5s;\n"]))),P.a.a(m||(m=Object(C.a)(['\n  color: transparent;\n  font-size:1.5rem;\n  text-align:center;\n  text-decoration: none;\n  padding:1rem;\n  padding-left:4rem;\n  padding-right:4rem;\n  background-color:#5ba382;\n  background-image:url("/config/images/whitelist_button.png");\n  background-position:center;\n  background-repeat:no-repeat;\n  display:block;\n  margin:auto;\n  width:70vw;\n  margin-top:4rem;\n  border-radius:1rem;\n  max-width:100%;\n  @media (min-width: 768px) {\n    width: 50vw;\n  }\n  @media (min-width: 1200px) {\n    width: 400px;\n  }\n'])));var an=function(){var n=Object(_.b)(),t=Object(_.c)((function(n){return n.blockchain})),e=(Object(_.c)((function(n){return n.data})),Object(O.useState)(!1)),a=Object(N.a)(e,2),c=(a[0],a[1],Object(O.useState)("Click buy to mint your NFT.")),r=Object(N.a)(c,2),i=(r[0],r[1],Object(O.useState)(1)),o=Object(N.a)(i,2),s=(o[0],o[1],Object(O.useState)({CONTRACT_ADDRESS:"",SCAN_LINK:"",NETWORK:{NAME:"",SYMBOL:"",ID:0},NFT_NAME:"",SYMBOL:"",MAX_SUPPLY:1,WEI_COST:0,DISPLAY_COST:0,GAS_LIMIT:0,MARKETPLACE:"",MARKETPLACE_LINK:"",SHOW_BACKGROUND:!1})),d=Object(N.a)(s,2),l=(d[0],d[1]),b=function(){var n=Object(S.a)(y.a.mark((function n(){var t,e;return y.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("/config/config.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}});case 2:return t=n.sent,n.next=5,t.json();case 5:e=n.sent,l(e);case 7:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return Object(O.useEffect)((function(){b()}),[]),Object(O.useEffect)((function(){""!==t.account&&null!==t.smartContract&&n(U(t.account))}),[t.account]),Object(Z.jsx)(H,{children:Object(Z.jsxs)(Q.a,{fluid:!0,className:"bg",children:[Object(Z.jsx)(Q.a,{children:Object(Z.jsxs)(W.a,{className:"justify-content-center",children:[Object(Z.jsx)(J.a,{className:"col-md-8 col-lg-6 m-auto mb-3",children:Object(Z.jsxs)(q.a,{className:"sdNavbar",children:[Object(Z.jsx)(q.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(Z.jsx)(q.a.Collapse,{id:"basic-navbar-nav",children:Object(Z.jsxs)(X.a,{className:"w-100 justify-content-around px-1",children:[Object(Z.jsxs)(V.a,{title:"Community",id:"basic-nav-dropdown",children:[Object(Z.jsx)(V.a.Item,{href:"https://discord.gg/straydogzwtf",target:"_blank",children:"Discord"}),Object(Z.jsx)(V.a.Item,{href:"https://twitter.com/straydogzwtf",target:"_blank",children:"Twitter"})]}),Object(Z.jsx)(X.a.Link,{href:"",target:"_blank",className:"comingSoon",children:"Docs"}),Object(Z.jsx)(X.a.Link,{href:"",target:"_blank",className:"comingSoon",children:"Scan"}),Object(Z.jsx)(X.a.Link,{href:"",target:"_blank",className:"comingSoon",children:"Run"})]})})]})}),Object(Z.jsx)(J.a,{className:"col-12 mb-3",children:Object(Z.jsx)(W.a,{className:"justify-content-center",children:Object(Z.jsx)(J.a,{className:"col-md-8 col-lg-5",children:Object(Z.jsxs)(W.a,{children:[Object(Z.jsx)(J.a,{className:"col-6 d-flex justify-content-end",children:Object(Z.jsx)("div",{className:"twitterLink d-block",children:Object(Z.jsx)("a",{href:"https://twitter.com/straydogzwtf",target:"_blank",className:"d-block w-100 h-100"})})}),Object(Z.jsx)(J.a,{className:"col-6 d-flex justify-content-start",children:Object(Z.jsx)("div",{className:"discordLink",children:Object(Z.jsx)("a",{href:"https://discord.gg/straydogzwtf",target:"_blank",className:"d-block w-100 h-100"})})})]})})})}),Object(Z.jsx)(J.a,{className:"col-12 mb-4",children:Object(Z.jsx)(W.a,{className:"justify-content-center",children:Object(Z.jsx)(J.a,{className:"col-md-8 col-lg-5 m-auto",children:Object(Z.jsx)("div",{className:"w-100 logoHomeAnimated",children:Object(Z.jsx)("div",{})})})})}),Object(Z.jsx)(J.a,{className:"col-12 mb-3 mt-5",children:Object(Z.jsx)(W.a,{className:"justify-content-center",children:Object(Z.jsx)(J.a,{className:"col-md-8 col-lg-5 m-auto",children:Object(Z.jsx)("div",{className:"mint",children:Object(Z.jsx)(B.a,{date:"2022-07-23T18:00:00",renderer:function(n){return Object(Z.jsxs)("div",{className:"countdownCustom",children:[Object(Z.jsx)("div",{className:"countdownTitle",children:"Free Mint event starts in:"}),Object(Z.jsxs)("div",{className:"countdownContainer",children:[Object(Z.jsxs)("div",{children:[n.days,Object(Z.jsx)("span",{children:"days"})]}),Object(Z.jsxs)("div",{children:[n.hours,Object(Z.jsx)("span",{children:"hours"})]}),Object(Z.jsxs)("div",{children:[n.minutes,Object(Z.jsx)("span",{children:"min"})]})]})]})}})})})})})]})}),Object(Z.jsxs)("div",{className:"bottomPart",children:[Object(Z.jsx)("img",{className:"d-block m-auto mb-2",src:"/config/images/eth.png"}),Object(Z.jsx)("p",{className:"descriptionLanding mb-3",children:"7777 Genesis StrayDogz NFTs are looking for new home!"}),Object(Z.jsx)(en,{})]})]})})},cn=function(n){n&&n instanceof Function&&e.e(3).then(e.bind(null,656)).then((function(t){var e=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,i=t.getTTFB;e(n),a(n),c(n),r(n),i(n)}))};e(644),e(645);w.a.render(Object(Z.jsx)(_.a,{store:F,children:Object(Z.jsx)(an,{})}),document.getElementById("root")),cn()}},[[646,1,2]]]);
//# sourceMappingURL=main.4b3173ab.chunk.js.map