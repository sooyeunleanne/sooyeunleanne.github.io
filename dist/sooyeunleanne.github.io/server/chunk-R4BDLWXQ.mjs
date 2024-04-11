import './polyfills.server.mjs';
import{A as p,B as u,C as M,D as O,E as h,F as $,M as q,O as Q,P as A,Q as v,R as _,S as D,T as J,U as W,V as G,Y,a as B,b as x,c as N,ca as Z,d as E,e as w,f as X,g as P,h as U,i as T,j as s,k as F,l as g,m,n as L,o,p as n,q as l,r as V,s as R,t as S,u as d,v as f,w as k,x as z,y as H,z as K}from"./chunk-SF4BLIGU.mjs";var ee=(()=>{let t=class t{constructor(a){this.elementRef=a}scrollToProfile(){let i=this.elementRef.nativeElement.parentElement.querySelector("#profile");i&&i.scrollIntoView({behavior:"smooth"})}scrollToProjects(){let i=this.elementRef.nativeElement.parentElement.querySelector("#projects");i&&i.scrollIntoView({behavior:"smooth"})}scrollToExperiences(){let i=this.elementRef.nativeElement.parentElement.querySelector("#experiences");i&&i.scrollIntoView({behavior:"smooth"})}};t.\u0275fac=function(i){return new(i||t)(F(X))},t.\u0275cmp=x({type:t,selectors:[["app-header"]],standalone:!0,features:[h],decls:8,vars:0,consts:[[2,"display","flex","justify-content","flex-end"],[1,"header"],[3,"click"]],template:function(i,r){i&1&&(o(0,"div",0)(1,"div",1)(2,"button",2),d("click",function(){return r.scrollToProfile()}),p(3,"Profile"),n(),o(4,"button",2),d("click",function(){return r.scrollToProjects()}),p(5,"Projects"),n(),o(6,"button",2),d("click",function(){return r.scrollToExperiences()}),p(7,"Experiences"),n()()())},styles:['@font-face{font-family:Nunito;font-style:italic;font-weight:200 1000;font-display:swap;src:url(https://fonts.gstatic.com/s/nunito/v26/XRXX3I6Li01BKofIMNaORs71cA.woff2) format("woff2");unicode-range:U+0460-052F,U+1C80-1C88,U+20B4,U+2DE0-2DFF,U+A640-A69F,U+FE2E-FE2F}@font-face{font-family:Nunito;font-style:italic;font-weight:200 1000;font-display:swap;src:url(https://fonts.gstatic.com/s/nunito/v26/XRXX3I6Li01BKofIMNaHRs71cA.woff2) format("woff2");unicode-range:U+0301,U+0400-045F,U+0490-0491,U+04B0-04B1,U+2116}@font-face{font-family:Nunito;font-style:italic;font-weight:200 1000;font-display:swap;src:url(https://fonts.gstatic.com/s/nunito/v26/XRXX3I6Li01BKofIMNaMRs71cA.woff2) format("woff2");unicode-range:U+0102-0103,U+0110-0111,U+0128-0129,U+0168-0169,U+01A0-01A1,U+01AF-01B0,U+0300-0301,U+0303-0304,U+0308-0309,U+0323,U+0329,U+1EA0-1EF9,U+20AB}@font-face{font-family:Nunito;font-style:italic;font-weight:200 1000;font-display:swap;src:url(https://fonts.gstatic.com/s/nunito/v26/XRXX3I6Li01BKofIMNaNRs71cA.woff2) format("woff2");unicode-range:U+0100-02AF,U+0304,U+0308,U+0329,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:Nunito;font-style:italic;font-weight:200 1000;font-display:swap;src:url(https://fonts.gstatic.com/s/nunito/v26/XRXX3I6Li01BKofIMNaDRs4.woff2) format("woff2");unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}@font-face{font-family:Nunito;font-style:normal;font-weight:200 1000;font-display:swap;src:url(https://fonts.gstatic.com/s/nunito/v26/XRXV3I6Li01BKofIOOaBXso.woff2) format("woff2");unicode-range:U+0460-052F,U+1C80-1C88,U+20B4,U+2DE0-2DFF,U+A640-A69F,U+FE2E-FE2F}@font-face{font-family:Nunito;font-style:normal;font-weight:200 1000;font-display:swap;src:url(https://fonts.gstatic.com/s/nunito/v26/XRXV3I6Li01BKofIMeaBXso.woff2) format("woff2");unicode-range:U+0301,U+0400-045F,U+0490-0491,U+04B0-04B1,U+2116}@font-face{font-family:Nunito;font-style:normal;font-weight:200 1000;font-display:swap;src:url(https://fonts.gstatic.com/s/nunito/v26/XRXV3I6Li01BKofIOuaBXso.woff2) format("woff2");unicode-range:U+0102-0103,U+0110-0111,U+0128-0129,U+0168-0169,U+01A0-01A1,U+01AF-01B0,U+0300-0301,U+0303-0304,U+0308-0309,U+0323,U+0329,U+1EA0-1EF9,U+20AB}@font-face{font-family:Nunito;font-style:normal;font-weight:200 1000;font-display:swap;src:url(https://fonts.gstatic.com/s/nunito/v26/XRXV3I6Li01BKofIO-aBXso.woff2) format("woff2");unicode-range:U+0100-02AF,U+0304,U+0308,U+0329,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:Nunito;font-style:normal;font-weight:200 1000;font-display:swap;src:url(https://fonts.gstatic.com/s/nunito/v26/XRXV3I6Li01BKofINeaB.woff2) format("woff2");unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}.header[_ngcontent-%COMP%]{display:flex;width:50%;right:0;justify-content:space-evenly}button[_ngcontent-%COMP%]{font-size:1.2rem;border:none;background-color:transparent;margin:1rem}button[_ngcontent-%COMP%]:hover{font-weight:700;cursor:pointer}@media (max-width: 600px){.header[_ngcontent-%COMP%]{width:100%;justify-content:center}button[_ngcontent-%COMP%]{font-size:1rem}}@media (max-width: 1024px){.header[_ngcontent-%COMP%]{width:100%;justify-content:space-evenly}button[_ngcontent-%COMP%]{font-size:1rem}}']});let e=t;return e})();var te=(()=>{let t=class t{};t.\u0275fac=function(i){return new(i||t)},t.\u0275cmp=x({type:t,selectors:[["app-profile"]],standalone:!0,features:[h],decls:56,vars:0,consts:[[2,"display","flex","flex-wrap","wrap","justify-content","center"],[1,"container"],[2,"text-align","center","margin-top","5rem"],[2,"margin-top","2rem"],["src","../../../assets/images/angular.png"],["src","../../../assets/images/react.png"],["src","../../../assets/images/processing.svg"],["src","../../../assets/images/springboot.png"],["src","../../../assets/images/C++.png"],["src","../../../assets/images/java.png"],["src","../../../assets/images/javascript.png"],["src","../../../assets/images/typescript.png"],["src","../../../assets/images/css.svg"],["src","../../../assets/images/html.svg"],["src","../../../assets/images/python.png"],[2,"margin-top","2rem","display","flex","justify-content","center"],["href","https://www.instagram.com/sooyeunleanne/"],["src","../../../assets/images/instagram.webp",2,"height","2.25rem"],["href","https://www.linkedin.com/in/sooyeunleanne"],["src","../../../assets/images/linkedin.png",2,"height","2.25rem"],["href","https://github.com/sooyeunleanne"],["src","../../../assets/images/github.png",2,"height","2.25rem"],["src","../../../assets/images/collage.png",1,"collage-photos"]],template:function(i,r){i&1&&(o(0,"div",0)(1,"div",1)(2,"div",2)(3,"h1"),p(4,"Leanne Kim"),n(),o(5,"h3"),p(6,"She/Her"),n()(),p(7," Welcome! I am a "),o(8,"b"),p(9,"Systems Design Engineering"),n(),p(10," (Class of 28') student at the University of Waterloo. "),o(11,"div",3)(12,"b"),p(13,"Frameworks:"),n(),o(14,"p"),l(15,"img",4),p(16," Angular, "),l(17,"img",5),p(18," ReactJS/ReactTS, "),l(19,"img",6),p(20," Processing, "),l(21,"img",7),p(22," Springboot "),n(),o(23,"b"),p(24,"Languages:"),n(),o(25,"p"),l(26,"img",8),p(27," C++, "),l(28,"img",9),p(29," Java, "),l(30,"img",10),p(31," JavaScript, "),l(32,"img",11),p(33," Typescript, "),l(34,"img",12),p(35," CSS, "),l(36,"img",13),p(37," HTML, "),l(38,"img",14),p(39," Python "),n(),o(40,"b"),p(41,"Interests: "),n(),o(42,"p"),p(43,"Software development (both frontend and backend), Project management, Artificial Intelligence, Machine learning"),n(),o(44,"b"),p(45,"Hobbies: "),n(),o(46,"p"),p(47,"\u{1F469}\u200D\u{1F4BB} Coding, \u{1F4DA} Reading, \u{1F35E} Baking, \u{1FA70} Dancing, \u{1F3B9} Piano, \u{1F3A7} Listening to music, \u{1F30E} Studying new languages"),n(),o(48,"div",15)(49,"a",16),l(50,"img",17),n(),o(51,"a",18),l(52,"img",19),n(),o(53,"a",20),l(54,"img",21),n()()()(),l(55,"img",22),n())},styles:["img[_ngcontent-%COMP%]{height:1.2rem}.container[_ngcontent-%COMP%]{margin-left:2rem;width:calc(50% - 2rem);max-width:800px;padding:0 1rem;flex:1}a[_ngcontent-%COMP%]{margin:.5rem 1rem .5rem .5rem}h1[_ngcontent-%COMP%]{font-size:2.5rem;margin-bottom:0}.collage-photos[_ngcontent-%COMP%]{max-width:50%;height:auto;margin-top:20px}@media (max-width: 1025px){.container[_ngcontent-%COMP%]{margin-left:0;width:100%;justify-content:center}.collage-photos[_ngcontent-%COMP%]{max-width:100%;height:auto;margin-top:5px}}@media (max-width: 600px){.container[_ngcontent-%COMP%]{margin-left:0;width:100%;justify-content:center}.collage-photos[_ngcontent-%COMP%]{max-width:100%;height:auto;margin-top:5px}}"]});let e=t;return e})();var y=(()=>{let t=class t{};t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=N({type:t}),t.\u0275inj=B({imports:[_,J]});let e=t;return e})();function ue(e,t){if(e&1&&(o(0,"p"),l(1,"img",3),n()),e&2){let c=f();s(),m("src","../../../../assets/images/"+c.project.logo,U)}}function de(e,t){if(e&1&&(o(0,"p"),p(1),n()),e&2){let c=f();s(),u(c.project.competition)}}function ge(e,t){if(e&1&&(o(0,"p"),p(1),n()),e&2){let c=f();s(),u(c.project.role)}}function xe(e,t){if(e&1&&(o(0,"p"),l(1,"img",4),p(2),n()),e&2){let c=f();s(2),M(" ",c.project.award," ")}}var ne=(()=>{let t=class t{constructor(){this.popupOpen=new P}openPopup(){this.popupOpen.emit({projectName:this.project.name,open:!0})}};t.\u0275fac=function(i){return new(i||t)},t.\u0275cmp=x({type:t,selectors:[["app-project-item"]],inputs:{project:"project"},outputs:{popupOpen:"popupOpen"},standalone:!0,features:[h],decls:14,vars:7,consts:[[4,"ngIf"],[2,"color","#2659ab"],[3,"click"],[3,"src"],["src","../../../../assets/images/crown.png",2,"height","1rem"]],template:function(i,r){i&1&&(o(0,"div")(1,"p"),p(2),n(),g(3,ue,2,1,"p",0)(4,de,2,1,"p",0),o(5,"h2"),p(6),n(),o(7,"p",1)(8,"b"),p(9),n()(),g(10,ge,2,1,"p",0)(11,xe,3,1,"p",0),o(12,"button",2),d("click",function(){return r.openPopup()}),p(13,"Details"),n()()),i&2&&(s(2),u(r.project.date),s(),m("ngIf",r.project.logo),s(),m("ngIf",r.project.competition),s(2),u(r.project.name),s(3),u(r.project.type),s(),m("ngIf",r.project.role),s(),m("ngIf",r.project.award))},dependencies:[y,_,v],styles:["button[_ngcontent-%COMP%]{background-color:transparent;border-color:#000;border-radius:1em;width:7rem;padding:.25rem}button[_ngcontent-%COMP%]:hover{background-color:#d3d3d3;cursor:pointer}img[_ngcontent-%COMP%]{height:3rem}"]});let e=t;return e})();function he(e,t){if(e&1&&(o(0,"h3"),l(1,"img",6),p(2),n()),e&2){let c=f();s(2),M(" ",c.project.award," ")}}function _e(e,t){if(e&1&&(o(0,"p"),l(1,"img",7),n()),e&2){let c=f();s(),m("src","../../../../assets/images/"+c.project.screenshot,U)}}function Ce(e,t){if(e&1&&(o(0,"h3"),p(1),n()),e&2){let c=f();s(),u(c.project.competition)}}function ve(e,t){if(e&1&&(o(0,"h3"),p(1),n()),e&2){let c=f();s(),u(c.project.role)}}function ye(e,t){if(e&1&&(o(0,"li"),p(1),n()),e&2){let c=f();s(),u(c.project.point3)}}function Ee(e,t){if(e&1&&(o(0,"p")(1,"a",8),p(2,"GitHub"),n()()),e&2){let c=f();s(),k("href",c.project.githublink,U)}}function we(e,t){if(e&1&&(o(0,"p")(1,"a",8),p(2,"Link"),n()()),e&2){let c=f();s(),k("href",c.project.link,U)}}var oe=(()=>{let t=class t{constructor(){this.popupClose=new P}closePopup(){this.popupClose.emit({projectName:this.project.name,open:!1})}};t.\u0275fac=function(i){return new(i||t)},t.\u0275cmp=x({type:t,selectors:[["app-project-popup"]],inputs:{project:"project"},outputs:{popupClose:"popupClose"},standalone:!0,features:[h],decls:23,vars:12,consts:[["overflow-y","scroll",1,"popup-container"],[3,"click"],[2,"margin-top","3rem"],[4,"ngIf"],[2,"color","#2659ab"],[1,"point-container"],["src","../../../../assets/images/crown.png",2,"height","1rem"],[1,"screenshot",3,"src"],[3,"href"]],template:function(i,r){i&1&&(o(0,"div",0)(1,"button",1),d("click",function(){return r.closePopup()}),p(2,"X"),n(),o(3,"div",2),g(4,he,3,1,"h3",3)(5,_e,2,1,"p",3)(6,Ce,2,1,"h3",3),n(),o(7,"h1"),p(8),n(),o(9,"h2",4),p(10),n(),o(11,"p"),p(12),n(),g(13,ve,2,1,"h3",3),o(14,"div",5)(15,"ul")(16,"li"),p(17),n(),o(18,"li"),p(19),n(),g(20,ye,2,1,"li",3),n()(),g(21,Ee,3,1,"p",3)(22,we,3,1,"p",3),n()),i&2&&(s(4),m("ngIf",r.project.award),s(),m("ngIf",r.project.screenshot),s(),m("ngIf",r.project.competition),s(2),u(r.project.name),s(2),u(r.project.type),s(2),u(r.project.date),s(),m("ngIf",r.project.role),s(4),u(r.project.point1),s(2),u(r.project.point2),s(),m("ngIf",r.project.point3),s(),m("ngIf",r.project.githublink),s(),m("ngIf",r.project.link))},dependencies:[y,_,v],styles:["button[_ngcontent-%COMP%]{background-color:transparent;border:none;font-size:1.5rem;float:right}button[_ngcontent-%COMP%]:hover{color:#a9a9a9;cursor:pointer}.screenshot[_ngcontent-%COMP%]{height:15rem}@media (max-width: 1025px){.screenshot[_ngcontent-%COMP%]{height:13rem}}@media (max-width: 600px){.screenshot[_ngcontent-%COMP%]{max-width:90%;height:10rem;width:auto}h1[_ngcontent-%COMP%]{font-size:1.2rem}h3[_ngcontent-%COMP%]{font-size:.8rem}}"]});let e=t;return e})();function je(e,t){if(e&1){let c=S();o(0,"div",5)(1,"app-project-item",6),d("popupOpen",function(i){E(c);let r=f();return w(r.handlePopupOpen(i))}),n()()}if(e&2){let c=t.$implicit;s(),m("project",c)}}function Pe(e,t){if(e&1){let c=S();o(0,"app-project-popup",8),d("popupClose",function(i){E(c);let r=f(2);return w(r.handlePopupClose(i))}),n()}if(e&2){let c=f().$implicit;m("project",c)}}function Se(e,t){if(e&1&&(o(0,"div"),g(1,Pe,1,1,"app-project-popup",7),n()),e&2){let c=t.$implicit,a=f();s(),m("ngIf",a.popupList[c.name])}}var ie=(()=>{let t=class t{constructor(a){this.http=a,this.projects=[],this.popupList={}}ngOnInit(){this.http.get("assets/projects.json").subscribe(a=>{this.projects=Object.values(a)}),this.projects.reverse();for(let a of this.projects)this.popupList[a.name]=!1}handlePopupOpen(a){this.popupList[a.projectName]=a.open}handlePopupClose(a){this.popupList[a.projectName]=a.open}};t.\u0275fac=function(i){return new(i||t)(F(D))},t.\u0275cmp=x({type:t,selectors:[["app-projects"]],standalone:!0,features:[h],decls:8,vars:2,consts:[[1,"project-container",2,"text-align","center","padding-top","5rem"],[2,"color","#2659ab"],[1,"grid-container"],["class","grid-item",4,"ngFor","ngForOf"],[4,"ngFor","ngForOf"],[1,"grid-item"],[3,"popupOpen","project"],[3,"project","popupClose",4,"ngIf"],[3,"popupClose","project"]],template:function(i,r){i&1&&(o(0,"div",0)(1,"h1",1),p(2,"Projects"),n(),o(3,"h2"),p(4,"Software and Design Projects"),n(),o(5,"div",2),g(6,je,2,1,"div",3),n(),g(7,Se,2,1,"div",4),n()),i&2&&(s(6),m("ngForOf",r.projects),s(),m("ngForOf",r.projects))},dependencies:[ne,oe,y,_,A,v]});let e=t;return e})();function Ie(e,t){if(e&1&&(o(0,"p"),l(1,"img",4),n()),e&2){let c=f();s(),m("src","../../../../assets/images/"+c.experience.logo,U)}}var re=(()=>{let t=class t{constructor(){this.popupOpen=new P}openPopup(){this.popupOpen.emit({experienceName:this.experience.organization,open:!0})}};t.\u0275fac=function(i){return new(i||t)},t.\u0275cmp=x({type:t,selectors:[["app-experience-item"]],inputs:{experience:"experience"},outputs:{popupOpen:"popupOpen"},standalone:!0,features:[h],decls:10,vars:5,consts:[[1,"item-container"],[4,"ngIf"],[2,"color","#e300a3"],[3,"click"],[3,"src"]],template:function(i,r){i&1&&(o(0,"div",0),g(1,Ie,2,1,"p",1),o(2,"b",2),p(3),n(),o(4,"h2"),p(5),n(),o(6,"p"),p(7),n(),o(8,"button",3),d("click",function(){return r.openPopup()}),p(9,"Details"),n()()),i&2&&(s(),m("ngIf",r.experience.logo),s(2),u(r.experience.role),s(2),u(r.experience.organization),s(2),O("",r.experience.startdate," - ",r.experience.enddate,""))},dependencies:[y,_,v],styles:[".item-container[_ngcontent-%COMP%]{width:100%}button[_ngcontent-%COMP%]{background-color:transparent;border-color:#000;border-radius:1em;width:7rem;padding:.25rem}button[_ngcontent-%COMP%]:hover{background-color:#d3d3d3;cursor:pointer}img[_ngcontent-%COMP%]{height:3rem}"]});let e=t;return e})();function Fe(e,t){if(e&1&&(o(0,"p",6),l(1,"img",7),n()),e&2){let c=f();s(),m("src","../../../../assets/images/"+c.experience.logo,U)}}function be(e,t){if(e&1&&(o(0,"li"),p(1),n()),e&2){let c=f();s(),u(c.experience.point3)}}var pe=(()=>{let t=class t{constructor(){this.popupClose=new P}closePopup(){this.popupClose.emit({experienceName:this.experience.organization,open:!1})}};t.\u0275fac=function(i){return new(i||t)},t.\u0275cmp=x({type:t,selectors:[["app-experience-popup"]],inputs:{experience:"experience"},outputs:{popupClose:"popupClose"},standalone:!0,features:[h],decls:17,vars:8,consts:[[1,"popup-container"],[3,"click"],["style","margin-top: 3rem",4,"ngIf"],[2,"colour","#e300a3"],[1,"point-container"],[4,"ngIf"],[2,"margin-top","3rem"],[3,"src"]],template:function(i,r){i&1&&(o(0,"div",0)(1,"button",1),d("click",function(){return r.closePopup()}),p(2,"X"),n(),g(3,Fe,2,1,"p",2),o(4,"h3",3),p(5),n(),o(6,"h1"),p(7),n(),o(8,"h4"),p(9),n(),o(10,"div",4)(11,"ul")(12,"li"),p(13),n(),o(14,"li"),p(15),n(),g(16,be,2,1,"li",5),n()()()),i&2&&(s(3),m("ngIf",r.experience.logo),s(2),u(r.experience.organization),s(2),u(r.experience.role),s(2),O("",r.experience.startdate," - ",r.experience.enddate,""),s(4),u(r.experience.point1),s(2),u(r.experience.point2),s(),m("ngIf",r.experience.point3))},dependencies:[_,v,y],styles:["button[_ngcontent-%COMP%]{background-color:transparent;border:none;font-size:1.5rem;float:right}button[_ngcontent-%COMP%]:hover{color:#a9a9a9;cursor:pointer}img[_ngcontent-%COMP%]{height:3rem}"]});let e=t;return e})();function Me(e,t){if(e&1){let c=S();o(0,"div",5)(1,"app-experience-item",6),d("popupOpen",function(i){E(c);let r=f();return w(r.handlePopupOpen(i))}),n()()}if(e&2){let c=t.$implicit;s(),m("experience",c)}}function Oe(e,t){if(e&1){let c=S();o(0,"app-experience-popup",8),d("popupClose",function(i){E(c);let r=f(2);return w(r.handlePopupClose(i))}),n()}if(e&2){let c=f().$implicit;m("experience",c)}}function Ae(e,t){if(e&1&&(V(0),g(1,Oe,1,1,"app-experience-popup",7),R()),e&2){let c=t.$implicit,a=f();s(),m("ngIf",a.popupList[c.organization])}}var ae=(()=>{let t=class t{constructor(a){this.http=a,this.experiences=[],this.popupList={}}ngOnInit(){this.http.get("assets/experiences.json").subscribe(a=>{this.experiences=Object.values(a)}),this.experiences.reverse();for(let a of this.experiences)this.popupList[a.organization]=!1}handlePopupOpen(a){this.popupList[a.experienceName]=a.open}handlePopupClose(a){this.popupList[a.experienceName]=a.open}};t.\u0275fac=function(i){return new(i||t)(F(D))},t.\u0275cmp=x({type:t,selectors:[["app-experiences"]],standalone:!0,features:[h],decls:8,vars:2,consts:[[2,"text-align","center","padding-top","5rem"],[2,"color","#e300a3"],[1,"grid-container"],["class","grid-item",4,"ngFor","ngForOf"],[4,"ngFor","ngForOf"],[1,"grid-item"],[3,"popupOpen","experience"],[3,"experience","popupClose",4,"ngIf"],[3,"popupClose","experience"]],template:function(i,r){i&1&&(o(0,"div",0)(1,"h1",1),p(2,"Experiences"),n(),o(3,"h3"),p(4,"Employment Experiences and Leadership Activities"),n(),o(5,"div",2),g(6,Me,2,1,"div",3),n(),g(7,Ae,2,1,"ng-container",4),n()),i&2&&(s(6),m("ngForOf",r.experiences),s(),m("ngForOf",r.experiences))},dependencies:[_,A,v,y,re,pe],styles:[".grid-item[_ngcontent-%COMP%]{padding-top:3rem;padding-bottom:3rem}"]});let e=t;return e})();var se=(()=>{let t=class t{};t.\u0275fac=function(i){return new(i||t)},t.\u0275cmp=x({type:t,selectors:[["app-footer"]],standalone:!0,features:[h],decls:5,vars:0,consts:[[2,"margin-bottom","3rem"]],template:function(i,r){i&1&&(l(0,"hr"),o(1,"p"),p(2,"Made by Leanne Kim"),n(),o(3,"p",0),p(4,"sooyeunleanne@gmail.com"),n())},styles:["p[_ngcontent-%COMP%]{text-align:center}hr[_ngcontent-%COMP%]{margin-top:5rem;margin-bottom:2rem;border-top:1px solid black;width:100%}"]});let e=t;return e})();var De=["cursor"],Te=e=>({expand:e}),ce=(()=>{let t=class t{constructor(){this.title="sooyeunleanne.github.io",this.expand=!1}onClick(a){this.expand=!0,setTimeout(()=>{this.expand=!1},500)}onMousemove(a){this.top=a.pageY-25+"px",this.left=a.pageX-25+"px"}changeCursorStyle(a){let i=this.cursor.nativeElement;i.style.backgroundColor=a,i.style.boxShadow="0px 0px 40px 40px "+a}resetCursorStyle(){let a=this.cursor.nativeElement;a.style.backgroundColor="rgba(252, 255, 85, 0.3)",a.style.boxShadow="0px 0px 40px 40px rgba(252, 255, 85, 0.3)"}};t.\u0275fac=function(i){return new(i||t)},t.\u0275cmp=x({type:t,selectors:[["app-root"]],viewQuery:function(i,r){if(i&1&&z(De,5),i&2){let C;H(C=K())&&(r.cursor=C.first)}},hostBindings:function(i,r){i&1&&d("click",function(I){return r.onClick(I)},!1,T)("mousemove",function(I){return r.onMousemove(I)},!1,T)},standalone:!0,features:[h],decls:7,vars:7,consts:[["cursor",""],[1,"cursor",3,"ngClass"],["id","profile",3,"mouseover"],["id","projects",3,"mouseover"],["id","experiences",3,"mouseover"]],template:function(i,r){if(i&1){let C=S();l(0,"div",1,0)(2,"app-header"),o(3,"app-profile",2),d("mouseover",function(){return E(C),w(r.resetCursorStyle())}),n(),o(4,"app-projects",3),d("mouseover",function(){return E(C),w(r.changeCursorStyle("rgba(179, 208, 255, 0.3)"))}),n(),o(5,"app-experiences",4),d("mouseover",function(){return E(C),w(r.changeCursorStyle("rgba(255, 209, 236, 0.3)"))}),n(),l(6,"app-footer")}i&2&&(L("top",r.top)("left",r.left),m("ngClass",$(5,Te,r.expand)))},dependencies:[_,Q,ee,te,ie,ae,se],styles:['.cursor[_ngcontent-%COMP%]{width:50px;height:50px;box-shadow:0 0 40px 40px #fcff554d;background-color:#fcff554d;border-radius:50%;position:absolute;pointer-events:none}.cursor[_ngcontent-%COMP%]:after{content:"";width:20px;height:20px;position:absolute;border-radius:50%;opacity:.5;animation:_ngcontent-%COMP%_cursorAnim2 .5s infinite alternate}@keyframes _ngcontent-%COMP%_cursorAnim{0%{transform:scale(1)}to{transform:scale(.7)}}@keyframes _ngcontent-%COMP%_cursorAnim2{0%{transform:scale(1)}to{transform:scale(.4)}}@keyframes _ngcontent-%COMP%_cursorAnim3{0%{transform:scale(1)}50%{transform:scale(3)}to{transform:scale(1);opacity:0}}.expand[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_cursorAnim3 .5s forwards}']});let e=t;return e})();var me=[];var le={providers:[Z(me),G()]};var ke={providers:[Y()]},fe=q(le,ke);var Be=()=>W(ce,fe),qt=Be;export{qt as a};
