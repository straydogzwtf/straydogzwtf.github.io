(this.webpackJsonpstraydogz_nft_minting_dapp=this.webpackJsonpstraydogz_nft_minting_dapp||[]).push([[0],{248:function(n,t){},251:function(n,t){},254:function(n,t){},258:function(n,t){},259:function(n,t){},285:function(n,t){},287:function(n,t){},296:function(n,t){},298:function(n,t){},308:function(n,t){},310:function(n,t){},325:function(n,t){},353:function(n,t){},354:function(n,t){},429:function(n,t){},431:function(n,t){},438:function(n,t){},439:function(n,t){},546:function(n,t,e){},547:function(n,t,e){},548:function(n,t,e){"use strict";e.r(t);var a,o,r,i,c,d,s,p,g,u,b,l,x,h,f,m,j=e(1),O=e(84),w=e.n(O),y=e(20),v=e(44),C=e(70),S=e(17),_=e(58),E=(e(68),e(220),e(69)),A=e(221),k=e(15),T={loading:!1,account:null,smartContract:null,web3:null,errorMsg:""},D=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CONNECTION_REQUEST":return Object(k.a)(Object(k.a)({},T),{},{loading:!0});case"CONNECTION_SUCCESS":return Object(k.a)(Object(k.a)({},n),{},{loading:!1,account:t.payload.account,smartContract:t.payload.smartContract,web3:t.payload.web3});case"CONNECTION_FAILED":return Object(k.a)(Object(k.a)({},T),{},{loading:!1,errorMsg:t.payload});case"UPDATE_ACCOUNT":return Object(k.a)(Object(k.a)({},n),{},{account:t.payload.account});default:return n}},N={loading:!1,totalSupply:0,cost:0,error:!1,errorMsg:""},z=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHECK_DATA_REQUEST":return Object(k.a)(Object(k.a)({},n),{},{loading:!0,error:!1,errorMsg:""});case"CHECK_DATA_SUCCESS":return Object(k.a)(Object(k.a)({},n),{},{loading:!1,totalSupply:t.payload.totalSupply,error:!1,errorMsg:""});case"CHECK_DATA_FAILED":return Object(k.a)(Object(k.a)({},N),{},{loading:!1,error:!0,errorMsg:t.payload});default:return n}},I=Object(E.b)({blockchain:D,data:z}),M=[A.a],L=Object(E.c)(E.a.apply(void 0,M)),F=Object(E.d)(I,L),R=function(n){return{type:"CHECK_DATA_FAILED",payload:n}},K=function(){return function(){var n=Object(v.a)(Object(y.a)().mark((function n(t){var e;return Object(y.a)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t({type:"CHECK_DATA_REQUEST"}),n.prev=1,n.next=4,F.getState().blockchain.smartContract.methods.totalSupply().call();case 4:e=n.sent,t({type:"CHECK_DATA_SUCCESS",payload:{totalSupply:e}}),n.next=12;break;case 8:n.prev=8,n.t0=n.catch(1),console.log(n.t0),t(R("Could not load data from contract."));case 12:case"end":return n.stop()}}),n,null,[[1,8]])})));return function(t){return n.apply(this,arguments)}}()},U=e(18),B=U.a.div(a||(a=Object(S.a)(["\n  background-color: var(--primary);\n  background-image: ",";\n  background-size: cover;\n  background-position: center;\n  width: 100%;\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n"])),(function(n){var t=n.image;return t?"url(".concat(t,")"):"none"})),H=(U.a.div(o||(o=Object(S.a)(["\n  height: 8px;\n  width: 8px;\n"]))),U.a.div(r||(r=Object(S.a)(["\n  height: 16px;\n  width: 16px;\n"]))),U.a.div(i||(i=Object(S.a)(["\n  height: 24px;\n  width: 24px;\n"]))),U.a.div(c||(c=Object(S.a)(["\n  height: 32px;\n  width: 32px;\n"]))),U.a.div(d||(d=Object(S.a)(["\n  display: flex;\n  flex: ",";\n  flex-direction: ",";\n  justify-content: ",";\n  align-items: ",";\n  background-color: ",";\n  width: 100%;\n  background-image: ",";\n  background-size: cover;\n  background-position: bottom right;\n  @media(min-width:768px){\n    background-position: bottom center;\n  }\n"])),(function(n){var t=n.flex;return t||0}),(function(n){var t=n.fd;return t||"column"}),(function(n){var t=n.jc;return t||"flex-start"}),(function(n){var t=n.ai;return t||"flex-start"}),(function(n){return n.test?"pink":"none"}),(function(n){var t=n.image;return t?"url(".concat(t,")"):"none"}))),P=U.a.p(s||(s=Object(S.a)(["\n  color: var(--primary-text);\n  font-size: 22px;\n  font-weight: 700;\n  line-height: 1.6;\n"]))),W=(U.a.p(p||(p=Object(S.a)(["\n  color: var(--primary-text);\n  font-size: 18px;\n  line-height: 1.6;\n"]))),U.a.p(g||(g=Object(S.a)(["\n  color: var(--primary-text);\n  line-height: 1.6;\n"])))),G=(U.a.div(u||(u=Object(S.a)(["\n  :active {\n    opacity: 0.6;\n  }\n"]))),e(542),e(13)),Y=(U.a.button(b||(b=Object(S.a)(["\n  padding: 10px;\n  border-radius: 50px;\n  border: none;\n  background-color: var(--secondary);\n  padding: 10px;\n  font-weight: bold;\n  color: var(--secondary-text);\n  width: 100px;\n  cursor: pointer;\n  box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);\n  -webkit-box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);\n  -moz-box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);\n  :active {\n    box-shadow: none;\n    -webkit-box-shadow: none;\n    -moz-box-shadow: none;\n  }\n"]))),U.a.button(l||(l=Object(S.a)(["\n  padding: 10px;\n  border-radius: 100%;\n  border: none;\n  background-color: var(--primary);\n  padding: 10px;\n  font-weight: bold;\n  font-size: 1rem;\n  color: var(--primary-text);\n  width: 30px;\n  height: 30px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);\n  -webkit-box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);\n  -moz-box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);\n  :active {\n    box-shadow: none;\n    -webkit-box-shadow: none;\n    -moz-box-shadow: none;\n  }\n"]))),U.a.div(x||(x=Object(S.a)(["\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  justify-content: stretched;\n  align-items: stretched;\n  width:90vw;\n  @media (min-width: 768px) {\n    width:50vw\n  }\n  @media (min-width: 1200px) {\n    width:30vw\n  }\n"])))),Q=U.a.img(h||(h=Object(S.a)(["\n  width: 90vw;\n  display:block;\n  margin:auto;\n  @media (min-width: 767px) {\n    width: 50vw;\n  }\n  @media (min-width: 1200px) {\n    width: 30vw;\n  }\n  transition: width 0.5s;\n  transition: height 0.5s;\n"]))),J=(U.a.img(f||(f=Object(S.a)(["\n  box-shadow: 0px 5px 11px 2px rgba(0, 0, 0, 0.7);\n  border: 4px dashed var(--secondary);\n  background-color: var(--accent);\n  border-radius: 100%;\n  width: 200px;\n  @media (min-width: 900px) {\n    width: 250px;\n  }\n  @media (min-width: 1000px) {\n    width: 300px;\n  }\n  transition: width 0.5s;\n"]))),U.a.a(m||(m=Object(S.a)(['\n  color: transparent;\n  font-size:1.5rem;\n  text-align:center;\n  text-decoration: none;\n  padding:1rem;\n  padding-left:4rem;\n  padding-right:4rem;\n  background-color:#5ba382;\n  background-image:url("/config/images/whitelist_button.png");\n  background-position:center;\n  background-repeat:no-repeat;\n  display:block;\n  margin:auto;\n  width:70vh;\n  margin-top:4rem;\n  border-radius:1rem;\n  max-width:100%;\n  @media (min-width: 768px) {\n    width: 50vw;\n  }\n  @media (min-width: 1200px) {\n    width: 400px;\n  }\n']))));var X=function(){var n=Object(_.b)(),t=Object(_.c)((function(n){return n.blockchain})),e=(Object(_.c)((function(n){return n.data})),Object(j.useState)(!1)),a=Object(C.a)(e,2),o=(a[0],a[1],Object(j.useState)("Click buy to mint your NFT.")),r=Object(C.a)(o,2),i=(r[0],r[1],Object(j.useState)(1)),c=Object(C.a)(i,2),d=(c[0],c[1],Object(j.useState)({CONTRACT_ADDRESS:"",SCAN_LINK:"",NETWORK:{NAME:"",SYMBOL:"",ID:0},NFT_NAME:"",SYMBOL:"",MAX_SUPPLY:1,WEI_COST:0,DISPLAY_COST:0,GAS_LIMIT:0,MARKETPLACE:"",MARKETPLACE_LINK:"",SHOW_BACKGROUND:!1})),s=Object(C.a)(d,2),p=s[0],g=s[1],u=function(){var n=Object(v.a)(Object(y.a)().mark((function n(){var t,e;return Object(y.a)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("/config/config.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}});case 2:return t=n.sent,n.next=5,t.json();case 5:e=n.sent,g(e);case 7:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return Object(j.useEffect)((function(){u()}),[]),Object(j.useEffect)((function(){""!==t.account&&null!==t.smartContract&&n(K(t.account))}),[t.account]),Object(G.jsxs)(B,{children:[Object(G.jsxs)(H,{flex:1,ai:"center",style:{backgroundColor:"var(--primary)",display:"block"},image:p.SHOW_BACKGROUND?"/config/images/sweb.jpg":null,className:"bg",children:[Object(G.jsx)(Q,{alt:"logo",src:"/config/images/StrayDogz_Logo.png"}),Object(G.jsx)(Y,{className:"mint",children:Object(G.jsxs)(H,{children:[Object(G.jsx)(P,{style:{color:"black",padding:"2rem",paddingBottom:"0",textTransform:"uppercase",fontWeight:700},children:"All the abandoned doges :("}),Object(G.jsxs)(W,{style:{color:"black",paddingLeft:"2rem",paddingRight:"2rem",paddingBottom:"2rem"},children:[p.NFT_NAME,".wtf @straydogzwtf Awwooooo! Decide the fate of abandoned DOGEs \ud83d\udc15 No Roadmap, Discord TBA, FREE MINT - Adoption of 6969 NFTs",Object(G.jsx)("div",{className:"countdownTitle",children:"Free Mint Date TBA"})]})]})}),Object(G.jsx)(J,{target:"_blank",href:"#",children:"WHITELIST FORM"})]}),Object(G.jsxs)("div",{className:"imgStripe",children:[Object(G.jsx)("img",{src:"/config/images/StrayDogz_01.png"}),Object(G.jsx)("img",{src:"/config/images/StrayDogz_02.png"}),Object(G.jsx)("img",{src:"/config/images/StrayDogz_03.png"}),Object(G.jsx)("img",{src:"/config/images/StrayDogz_04.png"}),Object(G.jsx)("img",{src:"/config/images/StrayDogz_05.png"}),Object(G.jsx)("img",{src:"/config/images/StrayDogz_06.png"}),Object(G.jsx)("img",{src:"/config/images/StrayDogz_07.png"}),Object(G.jsx)("img",{src:"/config/images/StrayDogz_08.png"})]})]})},q=function(n){n&&n instanceof Function&&e.e(3).then(e.bind(null,552)).then((function(t){var e=t.getCLS,a=t.getFID,o=t.getFCP,r=t.getLCP,i=t.getTTFB;e(n),a(n),o(n),r(n),i(n)}))};e(546),e(547);w.a.render(Object(G.jsx)(_.a,{store:F,children:Object(G.jsx)(X,{})}),document.getElementById("root")),q()}},[[548,1,2]]]);
//# sourceMappingURL=main.ae786d48.chunk.js.map