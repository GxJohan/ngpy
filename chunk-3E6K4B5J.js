import{Ia as S,Ja as D,Ka as E,Ma as I,Qa as k,Ra as G,Sa as T,T as O,Ta as W,U as _,Ua as R,V as w,Va as B,Wa as V,Xa as j,Ya as A,ba as y,g as C,h as p,i as b,j as v,l as N,m as x,n as h,p as M,q as F,r as P}from"./chunk-CEN3IR37.js";import{Cb as o,Db as e,Eb as l,Hc as z,Lb as d,Ub as n,ab as i,ac as g,bb as s,na as u,tb as m}from"./chunk-WY2VVBVZ.js";var a=class c{constructor(t){this.fb=t;this.validateForm=this.fb.group({userName:["",[p.required]],password:["",[p.required]],remember:[!0]})}validateForm;ngOnInit(){}submitForm(){this.validateForm.valid?console.log("submit",this.validateForm.value):Object.values(this.validateForm.controls).forEach(t=>{t.invalid&&(t.markAsDirty(),t.updateValueAndValidity({onlySelf:!0}))})}static \u0275fac=function(r){return new(r||c)(s(M))};static \u0275cmp=u({type:c,selectors:[["app-welcome"]],standalone:!0,features:[g],decls:24,vars:3,consts:[[1,"login-container"],[1,"login-box"],["nz-form","",1,"login-form",3,"ngSubmit","formGroup"],["nzErrorTip","Please input your username!"],["nzPrefixIcon","user"],["type","text","nz-input","","formControlName","userName","placeholder","Username"],["nzErrorTip","Please input your Password!"],["nzPrefixIcon","lock"],["type","password","nz-input","","formControlName","password","placeholder","Password"],["nz-row","",1,"login-form-margin"],["nz-col","",3,"nzSpan"],["nz-checkbox","","formControlName","remember"],[1,"login-form-forgot"],["nz-button","","nzType","primary",1,"login-form-button","login-form-margin"]],template:function(r,f){r&1&&(o(0,"div",0)(1,"div",1)(2,"form",2),d("ngSubmit",function(){return f.submitForm()}),o(3,"nz-form-item")(4,"nz-form-control",3)(5,"nz-input-group",4),l(6,"input",5),e()()(),o(7,"nz-form-item")(8,"nz-form-control",6)(9,"nz-input-group",7),l(10,"input",8),e()()(),o(11,"div",9)(12,"div",10)(13,"label",11)(14,"span"),n(15,"Remember me"),e()()(),o(16,"div",10)(17,"a",12),n(18,"Forgot password"),e()()(),o(19,"button",13),n(20,"Log in"),e(),n(21," Or "),o(22,"a"),n(23,"register now!"),e()()()()),r&2&&(i(2),m("formGroup",f.validateForm),i(10),m("nzSpan",12),i(4),m("nzSpan",12))},dependencies:[z,F,N,C,b,v,P,x,h,I,_,O,D,S,E,T,k,G,A,j,V,B,W,R,w,y],styles:[".login-form[_ngcontent-%COMP%]{max-width:100%}.login-form-margin[_ngcontent-%COMP%]{margin-bottom:16px}.login-form-forgot[_ngcontent-%COMP%]{float:right}.login-form-button[_ngcontent-%COMP%]{width:100%;color:#fff;background-color:#1890ff;border-color:none}.login-container[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;min-height:calc(100vh - 150px);padding:24px;background-color:#f0f2f5}.login-box[_ngcontent-%COMP%]{width:100%;max-width:400px;padding:32px;border-radius:8px;background:#fff;box-shadow:0 2px 8px #00000026}nz-form-item[_ngcontent-%COMP%]{margin-bottom:24px}[nz-button][_ngcontent-%COMP%]{height:40px;font-size:16px}.ant-input-affix-wrapper[_ngcontent-%COMP%]{height:40px}.anticon[_ngcontent-%COMP%]{color:#1890ff}.login-form[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#1890ff;text-decoration:none}.login-form[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{text-decoration:underline}"]})};var so=[{path:"",component:a}];export{so as WELCOME_ROUTES};
