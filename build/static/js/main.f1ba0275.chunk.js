(this.webpackJsonpcic=this.webpackJsonpcic||[]).push([[0],{108:function(e,t,a){e.exports=a(213)},113:function(e,t,a){},212:function(e,t,a){var n={"./pwa-action-sheet.entry.js":[219,5],"./pwa-camera-modal-instance.entry.js":[220,6],"./pwa-camera-modal.entry.js":[221,7],"./pwa-camera.entry.js":[222,8],"./pwa-toast.entry.js":[223,9]};function r(e){if(!a.o(n,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=n[e],r=t[0];return a.e(t[1]).then((function(){return a(r)}))}r.keys=function(){return Object.keys(n)},r.id=212,e.exports=r},213:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(9),o=a.n(i),c=(a(113),a(11)),l=a(29),s=a.n(l),u=a(49),m=a(21),d=a(38),p=a(265),g=a(270),b=a(271),h=a(272),f=a(214),v=a(277),y=a(273),E=a(276),O=a(274),j=a(269),w=a(97),k=a(268),x=a(95),C=a.n(x),B=a(264),T=a(275);function N(e){var t=e.setData,a=e.data;return r.a.createElement(r.a.Fragment,null,r.a.createElement(w.a,{variant:"h6",gutterBottom:!0},"Investment details"),r.a.createElement("form",{noValidate:!0,autoComplete:"off"},r.a.createElement(B.a,{container:!0,spacing:3},r.a.createElement(B.a,{item:!0,xs:12,sm:6},r.a.createElement(T.a,{error:a.dirty&&!a.balance,type:"number",required:!0,id:"initialBalance",name:"initialBalance",label:"Initial balance",value:a.balance||"",fullWidth:!0,onChange:function(e){t(Object(c.a)(Object(c.a)({},a),{},{balance:e.target.value}))}})),r.a.createElement(B.a,{item:!0,xs:12,sm:6},r.a.createElement(T.a,{error:a.dirty&&!a.interest,type:"number",required:!0,id:"interestRate",name:"interestRate",label:"Interest rate",value:a.interest||"",fullWidth:!0,onChange:function(e){t(Object(c.a)(Object(c.a)({},a),{},{interest:e.target.value}))}})),r.a.createElement(B.a,{item:!0,xs:12},r.a.createElement(T.a,{error:a.dirty&&!a.monthlyPayments,type:"number",required:!0,id:"monthlyPayments",name:"monthlyPayments",value:a.monthlyPayments||"",label:"Additional monthly payments",fullWidth:!0,onChange:function(e){t(Object(c.a)(Object(c.a)({},a),{},{monthlyPayments:e.target.value}))}})),r.a.createElement(B.a,{item:!0,xs:12},r.a.createElement(T.a,{error:a.dirty&&!a.period,type:"number",required:!0,id:"period",name:"period",value:a.period||"",label:"How often interest is applied",fullWidth:!0,onChange:function(e){t(Object(c.a)(Object(c.a)({},a),{},{period:e.target.value}))}})),r.a.createElement(B.a,{item:!0,xs:12},r.a.createElement(T.a,{error:a.dirty&&!a.lengthOfTime,type:"number",required:!0,id:"lengthOfTime",name:"lengthOfTime",label:"Length of time invested",value:a.lengthOfTime||"",fullWidth:!0,onChange:function(e){t(Object(c.a)(Object(c.a)({},a),{},{lengthOfTime:e.target.value}))}})))))}var S=Object(p.a)((function(e){return{loadingBox:{background:"linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)","background-size":"400% 400%",animation:"$gradient 15s ease infinite",height:"20px",width:"100%",display:"block","border-radius":"5px"},"@keyframes gradient":{"0%":{"background-position":"0% 50%"},"50%":{"background-position":"100% 50%"},"100%":{"background-position":"0% 50%"}}}}));function D(e){var t=e.data,a=e.setData,i=Object(n.useState)(!1),o=Object(m.a)(i,2),l=o[0],d=o[1],p=S();Object(n.useEffect)((function(){(function(){var e=Object(u.a)(s.a.mark((function e(){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://3jvichlsm2.execute-api.eu-west-2.amazonaws.com/dev/calculate/api?principal=".concat(t.balance,"&interestRate=").concat(t.interest/100,"&monthlyAmount=").concat(t.monthlyPayments,"&termLength=").concat(t.lengthOfTime)).then((function(e){return e.json()}));case 2:n=e.sent,d(n.value),a(Object(c.a)(Object(c.a)({},t),{},{value:n.value,history:n.history}));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}));return r.a.createElement(r.a.Fragment,null,r.a.createElement(w.a,{variant:"h6",gutterBottom:!0},"Investment overview"),r.a.createElement(B.a,{container:!0,spacing:3},r.a.createElement(B.a,{item:!0,xs:12},function(){return l?r.a.createElement(w.a,{variant:"body1",gutterBottom:!0},"Your initial \xa3",t.balance," investment after ",t.lengthOfTime," years at ",t.interest,"% would be worth ",(e=l,new Intl.NumberFormat("en-gb",{style:"currency",currency:"GBP"}).format(e)),"."):r.a.createElement(w.a,{variant:"body1",gutterBottom:!0},r.a.createElement("span",{className:p.loadingBox}));var e}())))}var P=a(69),R=a(266),W=a(267),F=a(278),L=a(92);function I(e){var t=e.data,a=[].concat(Object(P.a)(t.history.map((function(e){return e.year}))),[t.history.length+1]),i=[].concat(Object(P.a)(t.history.map((function(e){return e.value}))),[t.value]),o=Object(n.useState)(!1),c=Object(m.a)(o,2),l=c[0],s=c[1],u={labels:a,datasets:[{label:"Compound growth over time",fill:l,lineTension:.1,backgroundColor:"rgba(75,192,192,0.4)",borderColor:"rgba(75,192,192,1)",borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",pointBorderColor:"rgba(75,192,192,1)",pointBackgroundColor:"#fff",pointBorderWidth:1,pointHoverRadius:5,pointHoverBackgroundColor:"rgba(75,192,192,1)",pointHoverBorderColor:"rgba(220,220,220,1)",pointHoverBorderWidth:2,pointRadius:1,pointHitRadius:10,data:i}]};return r.a.createElement("div",null,r.a.createElement(w.a,{variant:"h6",gutterBottom:!0},"Visualisation"),r.a.createElement(R.a,null,r.a.createElement(W.a,{control:r.a.createElement(F.a,{onChange:function(){return s(!l)},value:"fill",color:"primary"}),labelPlacement:"start",label:"Fill"})),r.a.createElement(L.a,{data:u,width:80,height:250,options:{maintainAspectRatio:!1,scales:{xAxes:[{scaleLabel:{display:!0,labelString:"Years"}}],yAxes:[{scaleLabel:{display:!0,labelString:"Currency"}}]}}}))}var H=a(68),q=H.a.Network,A=H.a.Toast;function J(){return r.a.createElement(w.a,{variant:"body2",color:"textSecondary",align:"center"},"Copyright \xa9 ",r.a.createElement(j.a,{color:"inherit",href:"https://jacobclark.xyz/"},"Jacob Clark")," ","& ",r.a.createElement(j.a,{color:"inherit",href:"http://github.com/chrisgrounds/"},"Chris Grounds")," ",(new Date).getFullYear(),".")}var V=Object(p.a)((function(e){return{appBar:{position:"relative",paddingTop:"env(safe-area-inset-top)"},menuButton:{marginRight:e.spacing(2)},layout:Object(d.a)({width:"auto",marginLeft:e.spacing(2),marginRight:e.spacing(2)},e.breakpoints.up(600+2*e.spacing(2)),{width:600,marginLeft:"auto",marginRight:"auto"}),paper:Object(d.a)({marginTop:e.spacing(3),marginBottom:e.spacing(3),padding:e.spacing(2)},e.breakpoints.up(600+2*e.spacing(3)),{marginTop:e.spacing(6),marginBottom:e.spacing(6),padding:e.spacing(3)}),stepper:{padding:e.spacing(3,0,5)},buttons:{display:"flex",justifyContent:"flex-end"},button:{marginTop:e.spacing(3),marginLeft:e.spacing(1)}}})),z=["Details","Overview","Visualisation"],Y=[function(e,t){return r.a.createElement(N,{setData:e,data:t})},function(e,t){return r.a.createElement(D,{setData:e,data:t})},function(e,t){return r.a.createElement(I,{data:t})}];function G(){var e=V(),t=r.a.useState(0),a=Object(m.a)(t,2),i=a[0],o=a[1],l=r.a.useState(!1),d=Object(m.a)(l,2),p=d[0],j=d[1],x=r.a.useState({balance:void 0,interest:void 0,monthlyPayments:void 0,period:void 0,lengthOfTime:void 0,value:void 0,history:[],error:!1,dirty:!1}),B=Object(m.a)(x,2),T=B[0],N=B[1];Object(n.useEffect)((function(){!function(){var e=Object(u.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,q.getStatus();case 2:if(t=e.sent,j(t.connected),t.connected){e.next=7;break}return e.next=7,A.show({text:"Oops, you appear to be offline!",duration:"long",position:"center"});case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}));return r.a.createElement(r.a.Fragment,null,r.a.createElement(g.a,null),r.a.createElement(b.a,{position:"absolute",color:"default",className:e.appBar},r.a.createElement(h.a,null,r.a.createElement(k.a,{edge:"start",className:e.menuButton,color:"inherit","aria-label":"menu"},r.a.createElement(C.a,null)),r.a.createElement(w.a,{variant:"h6",color:"inherit",noWrap:!0},"Compound Interest"))),r.a.createElement("main",{className:e.layout},r.a.createElement(f.a,{className:e.paper},r.a.createElement(w.a,{component:"h1",variant:"h4",align:"center"},"Calculator"),r.a.createElement(v.a,{activeStep:i,className:e.stepper},z.map((function(e){return r.a.createElement(y.a,{key:e},r.a.createElement(E.a,null,e))}))),r.a.createElement(r.a.Fragment,null,function(e,t,a,n){try{return Y[e](t,a)}catch(r){return n(0)}}(i,N,T,o),r.a.createElement("div",{className:e.buttons},0!==i&&r.a.createElement(O.a,{onClick:function(){return o(i-1)},className:e.button},"Back"),r.a.createElement(O.a,{variant:"contained",color:"primary",onClick:function(){T.balance&&T.interest&&T.monthlyPayments&&T.period&&T.lengthOfTime?o(i+1):N(Object(c.a)(Object(c.a)({},T),{},{dirty:!0}))},className:e.button,disabled:!p},0===i&&"Calculate",1===i&&"Visualise",2===i&&"Done")))),r.a.createElement(J,null)))}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var M=a(96);o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(G,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)})),Object(M.a)(window)}},[[108,1,4]]]);
//# sourceMappingURL=main.f1ba0275.chunk.js.map