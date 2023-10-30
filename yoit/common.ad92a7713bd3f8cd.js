"use strict";(self.webpackChunkyoit=self.webpackChunkyoit||[]).push([[592],{513:(u,l,i)=>{i.d(l,{t:()=>g});var t=i(322);const p=[["/sign-up/student",1],["/sign-up/teacher",1],["/sign-up/student/tutor",2],["/sign-up/student/adult",2],["/sign-up/student/child",3]];var n=i(256);let g=(()=>{class a{constructor(e,o){this.route=e,this.router=o,this.step=this.getStep(this.router.url),this.router.events.subscribe(r=>{r instanceof t.m2&&(this.step=this.getStep(r.url))});const s=this.route.snapshot.routeConfig?.children?.length;console.log(s),this.steps=s||1}getStep(e){const[,o]=p.find(([s])=>s===e);return o}goBack(){const e=this.router.url;console.log({currentUrl:e});const o=e.split("/");o.pop();const s=o.join("/");this.router.navigateByUrl(s)}static#t=this.\u0275fac=function(o){return new(o||a)(n.Y36(t.gz),n.Y36(t.F0))};static#e=this.\u0275cmp=n.Xpm({type:a,selectors:[["app-header-sign-up"]],inputs:{steps:"steps"},decls:10,vars:2,consts:[[3,"click"],[1,"fa-solid","fa-chevron-left"],[1,"step_container"]],template:function(o,s){1&o&&(n.TgZ(0,"header")(1,"a",0),n.NdJ("click",function(){return s.goBack()}),n._UZ(2,"i",1),n._uU(3," Volver a atr\xe1s "),n.qZA(),n.TgZ(4,"div",2)(5,"dl")(6,"dt"),n._uU(7),n.qZA(),n.TgZ(8,"dd"),n._uU(9,"Informaci\xf3n Personal"),n.qZA()()()()),2&o&&(n.xp6(7),n.AsE("Paso ",s.step," de ",s.steps,""))},styles:[".step_container[_ngcontent-%COMP%]{font-size:14px}.step_container[_ngcontent-%COMP%]   dl[_ngcontent-%COMP%]{display:flex;gap:4px;margin:0;flex-direction:column;justify-content:flex-end;align-items:flex-end}.step_container[_ngcontent-%COMP%]   dl[_ngcontent-%COMP%]   dt[_ngcontent-%COMP%]{text-transform:uppercase;color:var(--text-200)}.step_container[_ngcontent-%COMP%]   dl[_ngcontent-%COMP%]   dd[_ngcontent-%COMP%]{color:var(--text-200);font-weight:500}header[_ngcontent-%COMP%]{position:absolute;top:0;left:0;z-index:1;width:100%;padding:var(--padding-sign-up) var(--padding-sign-up) 0;margin-bottom:24px;display:flex;gap:16px;justify-content:space-between;align-items:center}header[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{font-weight:700;font-size:14px;display:inline-flex;gap:16px;align-items:center}"]})}return a})()},342:(u,l,i)=>{i.d(l,{l:()=>_});var t=i(256),p=i(895);let n=(()=>{class e{constructor(){this.onClick=new t.vpe}ngOnInit(){}onClicked(){this.onClick.emit()}static#t=this.\u0275fac=function(r){return new(r||e)};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-google-button"]],outputs:{onClick:"onClick"},decls:4,vars:0,consts:[[1,"google-button",3,"click"],[1,"fa-brands","fa-google"]],template:function(r,c){1&r&&(t.TgZ(0,"button",0),t.NdJ("click",function(){return c.onClicked()}),t._UZ(1,"i",1),t.TgZ(2,"span"),t._uU(3,"Reg\xedstrate con Google"),t.qZA()())},styles:[".google-button[_ngcontent-%COMP%]{margin-top:24px;background-color:var(--bg-100);box-shadow:0 0 16px 0 var(--bg-300);color:var(--primary-100);display:inline-flex;justify-content:center}.google-button[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:20px}.google-button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-weight:700;padding:0 16px}.google-button[_ngcontent-%COMP%]:hover{background-color:var(--primary-200);color:var(--primary-300)}"]})}return e})();function g(e,o){1&e&&t._UZ(0,"i",10)}function a(e,o){1&e&&t._UZ(0,"i",11)}let _=(()=>{class e{constructor(){this.onRegister=new t.vpe,this.terms=!1}onGoogleButtonClicked(){this.finish()}finish(){this.onRegister.emit()}static#t=this.\u0275fac=function(r){return new(r||e)};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-register-form"]],outputs:{onRegister:"onRegister"},decls:17,vars:2,consts:[[3,"onClick"],[1,"separator"],["for","email"],["type","email","name","email","placeholder","Necesitamos un correo electr\xf3nico"],["for","password"],["type","password","name","password","placeholder","Escribe tu contrase\xf1a"],["type","checkbox","name","terms","id","terms",3,"click"],["for","terms"],["class","fa-regular fa-square-check",4,"ngIf"],["class","fa-solid fa-square-check",4,"ngIf"],[1,"fa-regular","fa-square-check"],[1,"fa-solid","fa-square-check"]],template:function(r,c){1&r&&(t.TgZ(0,"app-google-button",0),t.NdJ("onClick",function(){return c.onGoogleButtonClicked()}),t.qZA(),t.TgZ(1,"span",1),t._uU(2,"o"),t.qZA(),t.TgZ(3,"form")(4,"label",2),t._uU(5,"Correo electr\xf3nico"),t.qZA(),t._UZ(6,"input",3),t.TgZ(7,"label",4),t._uU(8,"Contrase\xf1a"),t.qZA(),t._UZ(9,"input",5),t.TgZ(10,"input",6),t.NdJ("click",function(){return c.terms=!c.terms}),t.qZA(),t.TgZ(11,"label",7),t.YNc(12,g,1,0,"i",8),t.YNc(13,a,1,0,"i",9),t._uU(14," Acepto los t\xe9rminos y condiciones"),t.qZA()(),t.TgZ(15,"button"),t._uU(16,"Reg\xedstrate"),t.qZA()),2&r&&(t.xp6(12),t.Q6J("ngIf",!c.terms),t.xp6(1),t.Q6J("ngIf",c.terms))},dependencies:[p.O5,n],styles:['.separator[_ngcontent-%COMP%]{display:block;font-size:12px;text-align:center;padding:16px;position:relative}.separator[_ngcontent-%COMP%]:after, .separator[_ngcontent-%COMP%]:before{content:"";width:40%;height:1px;background-color:var(--bg-200)}.separator[_ngcontent-%COMP%]:after{position:absolute;top:50%;right:0}.separator[_ngcontent-%COMP%]:before{position:absolute;top:50%;left:0}form[_ngcontent-%COMP%]{margin-bottom:24px}form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{margin-bottom:16px}']})}return e})()},264:(u,l,i)=>{i.d(l,{N:()=>g});var t=i(895),p=i(322),n=i(256);let g=(()=>{class a{static#t=this.\u0275fac=function(o){return new(o||a)};static#e=this.\u0275mod=n.oAB({type:a});static#n=this.\u0275inj=n.cJS({imports:[t.ez,p.Bz]})}return a})()}}]);