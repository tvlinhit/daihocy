(this.webpackJsonpkbyt_web=this.webpackJsonpkbyt_web||[]).push([[9],{426:function(e,t,a){"use strict";a.r(t);var l=a(42),c=a(21),r=a(0),n=a(3),s=a(146),o=a(165),b=a(132),u=a(191),i=a(133),j=a(43),f=a(135),m=a(410),O=a(141),g=a(137),d=a(2),p=["ref"],h=["ref"],y=["ref"],x=["ref"],v=["ref"],P=["ref"],N=["ref"],T=["ref"],w=["ref"],C=["ref"],V=["ref"],R=["ref"],A=["ref"],M=["ref"],S=["ref"],B=["ref"],k=["ref"],D=["ref"],K=["ref"],L=["ref"],q=["ref"],H=["ref"],E=["ref"],G=["ref"],I=["ref"],J=["ref"],_=["ref"],z=["ref"],F=["ref"],Q=["ref"],U=["ref"],W=["ref"],X=[{value:0,label:"Kh\xf4ng"},{value:1,label:"B\u1ed1"},{value:2,label:"M\u1eb9"},{value:3,label:"Anh ch\u1ecb em"},{value:4,label:"H\u1ecd h\xe0ng"}],Y=function(e){var t=e.formControl,a=e.defaultValue,c=t.control,r=t.formState.errors,n=t.watch,s=n("diseaseAcquired",!1),o=n("historyDrugAllergy",!1),u=n("toxicAgent",!1),Y=n("geneticPathologyType",0),Z=n("geneticPathologyType1",0),$=n("geneticPathologyType2",0),ee=n("geneticPathologyType3",0),te=n("prematureBirthType",0),ae=n("dieChildType",0),le=n("deformityChildType",0);return Object(d.jsxs)("div",{className:"my-6 p-6 bg-white rounded-2xl",children:[Object(d.jsx)("div",{className:"font-bold text-md mb-6 uppercase",children:"TH\xd4NG TIN L\xc2M S\xc0NG"}),Object(d.jsxs)("div",{className:"grid grid-cols-1 sm:grid-cols-6 gap-4",children:[Object(d.jsx)(b.a,{name:"medicalHistory",control:c,defaultValue:Object(j.get)(a,"medicalHistory",""),render:function(e){var t=e.field,a=t.ref,c=Object(i.a)(t,p);return Object(d.jsx)(f.a,Object(l.a)({label:"B\u1ec7nh s\u1eed",className:"w-full mb-3 sm:col-span-6",type:"text",errorMsg:Object(j.get)(r,"medicalHistory.message",""),inputRef:a},c))}}),Object(d.jsx)(b.a,{name:"diseaseAcquired",control:c,defaultValue:Object(j.get)(a,"diseaseAcquired",!1),render:function(e){var t=e.field,a=(t.ref,Object(i.a)(t,h));return Object(d.jsx)(m.a,Object(l.a)({className:"sm:col-start-1 sm:col-span-3",control:Object(d.jsx)(O.a,{}),label:"B\u1ec7nh t\u1eadt \u0111\xe3 m\u1eafc",labelPlacement:"end"},a))}}),s&&Object(d.jsx)(b.a,{name:"diseaseAcquiredOther",control:c,defaultValue:Object(j.get)(a,"diseaseAcquiredOther",""),render:function(e){var t=e.field,a=t.ref,c=Object(i.a)(t,y);return Object(d.jsx)(f.a,Object(l.a)({label:"B\u1ec7nh t\u1eadt \u0111\xe3 m\u1eafc",className:"w-full mb-3 sm:col-span-3",type:"text",errorMsg:Object(j.get)(r,"diseaseAcquiredOther.message",""),inputRef:a},c))}}),Object(d.jsx)(b.a,{name:"historyDrugAllergy",control:c,defaultValue:Object(j.get)(a,"historyDrugAllergy",""),render:function(e){var t=e.field,a=(t.ref,Object(i.a)(t,x));return Object(d.jsx)(m.a,Object(l.a)({className:"sm:col-start-1 sm:col-span-3",control:Object(d.jsx)(O.a,{}),label:"Ti\u1ec1n s\u1eed ng\u1ed9 \u0111\u1ed9c/d\u1ecb \u1ee9ng thu\u1ed1c",labelPlacement:"end"},a))}}),o&&Object(d.jsx)(b.a,{name:"historyDrugAllergyOther",control:c,defaultValue:Object(j.get)(a,"historyDrugAllergyOther",""),render:function(e){var t=e.field,a=t.ref,c=Object(i.a)(t,v);return Object(d.jsx)(f.a,Object(l.a)({label:"Ti\u1ec1n s\u1eed ng\u1ed9 \u0111\u1ed9c/d\u1ecb \u1ee9ng thu\u1ed1c",className:"w-full mb-3 sm:col-span-3",type:"text",errorMsg:Object(j.get)(r,"historyDrugAllergyOther.message",""),inputRef:a},c))}}),Object(d.jsx)(b.a,{name:"timeOfPregnanciesType",control:c,defaultValue:Object(j.get)(a,"timeOfPregnanciesType",0),render:function(e){var t=e.field,a=(t.ref,Object(i.a)(t,P));return Object(d.jsx)(g.a,Object(l.a)({className:"w-full mb-3 sm:col-span-2 sm:col-start-1",options:[{value:0,label:"Ch\u01b0a"},{value:1,label:"2"},{value:2,label:"2"},{value:3,label:"3"},{value:4,label:">3"}],inputProps:{label:"S\u1ed1 l\u1ea7n c\xf3 thai"}},a))}}),Object(d.jsx)(b.a,{name:"numberOfBirthType",control:c,defaultValue:Object(j.get)(a,"numberOfBirthType",0),render:function(e){var t=e.field,a=(t.ref,Object(i.a)(t,N));return Object(d.jsx)(g.a,Object(l.a)({className:"w-full mb-3 sm:col-span-2",options:[{value:0,label:"Ch\u01b0a \u0111\u1ebb"},{value:1,label:"2"},{value:2,label:"2"},{value:3,label:"3"},{value:4,label:">3"}],inputProps:{label:"S\u1ed1 l\u1ea7n \u0111\u1ebb"}},a))}}),Object(d.jsx)(b.a,{name:"aliveChild",control:c,defaultValue:Object(j.get)(a,"aliveChild",0),render:function(e){var t=e.field,a=(t.ref,Object(i.a)(t,T));return Object(d.jsx)(g.a,Object(l.a)({className:"w-full mb-3 sm:col-span-2",options:[{value:0,label:"0"},{value:1,label:"2"},{value:2,label:"2"},{value:3,label:"3"},{value:4,label:">3"}],inputProps:{label:"S\u1ed1 con s\u1ed1ng"}},a))}}),Object(d.jsx)(b.a,{name:"prematureBirthType",control:c,defaultValue:Object(j.get)(a,"prematureBirthType",0),render:function(e){var t=e.field,a=(t.ref,Object(i.a)(t,w));return Object(d.jsx)(g.a,Object(l.a)({className:"w-full mb-3 sm:col-span-2 sm:col-start-1",options:[{value:0,label:"Kh\xf4ng"},{value:1,label:"C\xf3"}],inputProps:{label:"S\u1ed1 l\u1ea7n \u0111\u1ebb non"}},a))}}),+te>0&&Object(d.jsx)(b.a,{name:"prematureBirth",control:c,defaultValue:Object(j.get)(a,"prematureBirth",""),render:function(e){var t=e.field,a=t.ref,c=Object(i.a)(t,C);return Object(d.jsx)(f.a,Object(l.a)({label:"Bao nhi\xeau tu\u1ea7n?",className:"w-full mb-3 sm:col-span-4",type:"text",errorMsg:Object(j.get)(r,"prematureBirth.message",""),inputRef:a},c))}}),Object(d.jsx)(b.a,{name:"dieChildType",control:c,defaultValue:Object(j.get)(a,"dieChildType",0),render:function(e){var t=e.field,a=(t.ref,Object(i.a)(t,V));return Object(d.jsx)(g.a,Object(l.a)({className:"w-full mb-3 sm:col-span-2 sm:col-start-1",options:[{value:0,label:"Kh\xf4ng"},{value:1,label:"C\xf3"}],inputProps:{label:"S\u1ed1 con ch\u1ebft"}},a))}}),+ae>0&&Object(d.jsx)(b.a,{name:"dieChild",control:c,defaultValue:Object(j.get)(a,"dieChild",""),render:function(e){var t=e.field,a=t.ref,c=Object(i.a)(t,R);return Object(d.jsx)(f.a,Object(l.a)({label:"L\xfd do ch\u1ebft?",className:"w-full mb-3 sm:col-span-4",type:"text",errorMsg:Object(j.get)(r,"dieChild.message",""),inputRef:a},c))}}),Object(d.jsx)(b.a,{name:"deformityChildType",control:c,defaultValue:Object(j.get)(a,"deformityChildType",0),render:function(e){var t=e.field,a=(t.ref,Object(i.a)(t,A));return Object(d.jsx)(g.a,Object(l.a)({className:"w-full mb-3 sm:col-span-2 sm:col-start-1",options:[{value:0,label:"Kh\xf4ng"},{value:1,label:"C\xf3"}],inputProps:{label:"S\u1ed1 con d\u1ecb t\u1eadt"}},a))}}),+le>0&&Object(d.jsx)(b.a,{name:"deformityChild",control:c,defaultValue:Object(j.get)(a,"deformityChild",""),render:function(e){var t=e.field,a=t.ref,c=Object(i.a)(t,M);return Object(d.jsx)(f.a,Object(l.a)({label:"Lo\u1ea1i di t\u1eadt l\xe0 g\xec?",className:"w-full mb-3 sm:col-span-4",type:"text",errorMsg:Object(j.get)(r,"deformityChild.message",""),inputRef:a},c))}}),Object(d.jsx)(b.a,{name:"miscarriage",control:c,defaultValue:Object(j.get)(a,"miscarriage",0),render:function(e){var t=e.field,a=(t.ref,Object(i.a)(t,S));return Object(d.jsx)(g.a,Object(l.a)({className:"w-full mb-3 sm:col-span-2 sm:col-start-1",options:[{value:0,label:"Kh\xf4ng"},{value:1,label:"C\xf3"}],inputProps:{label:"S\u1ea3y"}},a))}}),Object(d.jsx)(b.a,{name:"abortion",control:c,defaultValue:Object(j.get)(a,"abortion",0),render:function(e){var t=e.field,a=(t.ref,Object(i.a)(t,B));return Object(d.jsx)(g.a,Object(l.a)({className:"w-full mb-3 sm:col-span-2",options:[{value:0,label:"Kh\xf4ng"},{value:1,label:"C\xf3"}],inputProps:{label:"N\u1ea1o, h\xfat"}},a))}}),Object(d.jsx)(b.a,{name:"stillbirth",control:c,defaultValue:Object(j.get)(a,"stillbirth",0),render:function(e){var t=e.field,a=(t.ref,Object(i.a)(t,k));return Object(d.jsx)(g.a,Object(l.a)({className:"w-full mb-3 sm:col-span-2",options:[{value:0,label:"Kh\xf4ng"},{value:1,label:"C\xf3"}],inputProps:{label:"Thai l\u01b0u"}},a))}}),Object(d.jsx)(b.a,{name:"toxicAgent",control:c,defaultValue:Object(j.get)(a,"toxicAgent",""),render:function(e){var t=e.field,a=(t.ref,Object(i.a)(t,D));return Object(d.jsx)(m.a,Object(l.a)({className:"sm:col-start-1 sm:col-span-3",control:Object(d.jsx)(O.a,{}),label:"Ti\u1ebfp x\xfac v\u1edbi t\xe1c nh\xe2n \u0111\u1ed9c h\u1ea1i",labelPlacement:"end"},a))}}),u&&Object(d.jsx)(b.a,{name:"toxicAgentOther",control:c,defaultValue:Object(j.get)(a,"toxicAgentOther",""),render:function(e){var t=e.field,a=t.ref,c=Object(i.a)(t,K);return Object(d.jsx)(f.a,Object(l.a)({label:"Ti\u1ebfp x\xfac v\u1edbi t\xe1c nh\xe2n \u0111\u1ed9c h\u1ea1i",className:"w-full mb-3 sm:col-span-3",type:"text",errorMsg:Object(j.get)(r,"toxicAgentOther.message",""),inputRef:a},c))}}),Object(d.jsx)("label",{className:"w-full sm:col-span-6 font-bold",children:"C\xf3 ai trong gia \u0111\xecnh v\xe0 h\u1ecd h\xe0ng m\u1eafc b\u1ec7nh l\xfd di truy\u1ec1n kh\xf4ng?"}),Object(d.jsx)(b.a,{name:"geneticPathologyType",control:c,defaultValue:Object(j.get)(a,"geneticPathologyType",0),render:function(e){var t=e.field,a=(t.ref,Object(i.a)(t,L));return Object(d.jsx)(g.a,Object(l.a)({className:"sm:col-start-1 w-full mb-3 sm:col-span-3",options:X},a))}}),Y>0&&Object(d.jsx)(b.a,{name:"geneticPathologyReason",control:c,defaultValue:Object(j.get)(a,"geneticPathologyReason",""),render:function(e){var t=e.field,a=t.ref,c=Object(i.a)(t,q);return Object(d.jsx)(f.a,Object(l.a)({label:"Lo\u1ea1i b\u1ec7nh l\xfd m\u1eafc",className:"w-full mb-3 sm:col-span-3",type:"text",errorMsg:Object(j.get)(r,"geneticPathologyReason.message",""),inputRef:a},c))}}),Object(d.jsx)(b.a,{name:"geneticPathologyType1",control:c,defaultValue:Object(j.get)(a,"geneticPathologyType1",0),render:function(e){var t=e.field,a=(t.ref,Object(i.a)(t,H));return Object(d.jsx)(g.a,Object(l.a)({className:"sm:col-start-1 w-full mb-3 sm:col-span-3",options:X},a))}}),Z>0&&Object(d.jsx)(b.a,{name:"geneticPathologyReason1",control:c,defaultValue:Object(j.get)(a,"geneticPathologyReason1",""),render:function(e){var t=e.field,a=t.ref,c=Object(i.a)(t,E);return Object(d.jsx)(f.a,Object(l.a)({label:"Lo\u1ea1i b\u1ec7nh l\xfd m\u1eafc",className:"w-full mb-3 sm:col-span-3",type:"text",errorMsg:Object(j.get)(r,"geneticPathologyReason1.message",""),inputRef:a},c))}}),Object(d.jsx)(b.a,{name:"geneticPathologyType2",control:c,defaultValue:Object(j.get)(a,"geneticPathologyType2",0),render:function(e){var t=e.field,a=(t.ref,Object(i.a)(t,G));return Object(d.jsx)(g.a,Object(l.a)({className:"sm:col-start-1 w-full mb-3 sm:col-span-3",options:X},a))}}),$>0&&Object(d.jsx)(b.a,{name:"geneticPathologyReason2",control:c,defaultValue:Object(j.get)(a,"geneticPathologyReason2",""),render:function(e){var t=e.field,a=t.ref,c=Object(i.a)(t,I);return Object(d.jsx)(f.a,Object(l.a)({label:"Lo\u1ea1i b\u1ec7nh l\xfd m\u1eafc",className:"w-full mb-3 sm:col-span-3",type:"text",errorMsg:Object(j.get)(r,"geneticPathologyReason2.message",""),inputRef:a},c))}}),Object(d.jsx)(b.a,{name:"geneticPathologyType3",control:c,defaultValue:Object(j.get)(a,"geneticPathologyType3",0),render:function(e){var t=e.field,a=(t.ref,Object(i.a)(t,J));return Object(d.jsx)(g.a,Object(l.a)({className:"sm:col-start-1 w-full mb-3 sm:col-span-3",options:X},a))}}),ee>0&&Object(d.jsx)(b.a,{name:"geneticPathologyReason3",control:c,defaultValue:Object(j.get)(a,"geneticPathologyReason3",""),render:function(e){var t=e.field,a=t.ref,c=Object(i.a)(t,_);return Object(d.jsx)(f.a,Object(l.a)({label:"Lo\u1ea1i b\u1ec7nh l\xfd m\u1eafc",className:"w-full mb-3 sm:col-span-3",type:"text",errorMsg:Object(j.get)(r,"geneticPathologyReason3.message",""),inputRef:a},c))}}),Object(d.jsx)(b.a,{name:"menstrualCycleType",control:c,defaultValue:Object(j.get)(a,"menstrualCycleType",0),render:function(e){var t=e.field,a=(t.ref,Object(i.a)(t,z));return Object(d.jsx)(g.a,Object(l.a)({className:"sm:col-start-1 w-full mb-3 sm:col-span-3",options:[{value:0,label:"\u0110\u1ec1u"},{value:1,label:"Kh\xf4ng \u0111\u1ec1u"},{value:2,label:"Kh\xe1c"}],inputProps:{label:"Chu k\u1ef3 kinh"}},a))}}),Object(d.jsx)(b.a,{name:"menstrualCycle",control:c,defaultValue:Object(j.get)(a,"menstrualCycle",""),render:function(e){var t=e.field,a=t.ref,c=Object(i.a)(t,F);return Object(d.jsx)(f.a,Object(l.a)({label:"V\xf2ng kinh",className:"w-full mb-3 sm:col-span-3",type:"text",errorMsg:Object(j.get)(r,"menstrualCycle.message",""),inputRef:a},c))}}),Object(d.jsx)(b.a,{name:"lastDatePeriod",control:c,defaultValue:Object(j.get)(a,"lastDatePeriod",""),render:function(e){var t=e.field,a=t.ref,c=Object(i.a)(t,Q);return Object(d.jsx)(f.a,Object(l.a)({label:"Ng\xe0y \u0111\u1ea7u c\u1ee7a k\u1ef3 kinh cu\u1ed1i c\xf9ng",className:"w-full mb-3 sm:col-span-3",type:"text",errorMsg:Object(j.get)(r,"lastDatePeriod.message",""),inputRef:a},c))}}),Object(d.jsx)(b.a,{name:"para",control:c,defaultValue:Object(j.get)(a,"para",""),render:function(e){var t=e.field,a=t.ref,c=Object(i.a)(t,U);return Object(d.jsx)(f.a,Object(l.a)({label:"PARA",className:"w-full mb-3 sm:col-span-3",type:"text",errorMsg:Object(j.get)(r,"para.message",""),inputRef:a},c))}}),Object(d.jsx)(b.a,{name:"diagnosticType",control:c,defaultValue:Object(j.get)(a,"diagnosticType",1),render:function(e){var t=e.field,a=(t.ref,Object(i.a)(t,W));return Object(d.jsx)(g.a,Object(l.a)({className:"w-full mb-3 sm:col-span-6",options:[{value:1,label:"Kh\xf4ng"},{value:2,label:"D\u1ecb t\u1eadt b\u1ea9m sinh"},{value:3,label:"Tr\u01b0\u1edbc h\xf4n nh\xe2n"},{value:4,label:"S\xe0ng l\u1ecdc tr\u01b0\u1edbc sinh"},{value:5,label:"Di truy\u1ec1n sinh s\u1ea3n"},{value:6,label:"Kh\xe1c"}],inputProps:{label:"Chu\u1ea9n \u0111o\xe1n"}},a))}})]})]})},Z=a(150),$=a(36),ee=a(168),te=a(167),ae=a(210);t.default=function(){var e=Object(n.f)(),t=Object($.c)(),a=Object(c.a)(t,2),i=a[0],j=a[1],f=s.a().shape(Object(l.a)({},o.a)),m=Object(b.e)({mode:"onSubmit",resolver:Object(u.a)(f)}),O=m.handleSubmit,g=m.watch,p=m.setValue,h=g("phone","");Object(r.useEffect)((function(){if(console.log("updateInfoState",j),j.isSuccess&&!j.isLoading){e(-1);var t=Object(ee.a)({title:"Th\xf4ng b\xe1o",description:"C\u1eadp nh\u1eadt th\xe0nh c\xf4ng",type:"success",bottomText:"\u0110\u1ed3ng \xfd",onBottomClick:function(){t()}}).close}}),[j]);var y=Object($.b)(h,{skip:!te.a.test(h)});Object(r.useEffect)((function(){var e=y.isSuccess,t=y.data;if(e&&Object.keys(t).length)for(var a=0,l=Object.entries(t);a<l.length;a++){var r=Object(c.a)(l[a],2),n=r[0],s=r[1];p(n,s)}}),[p,y]);return Object(d.jsxs)("form",{onSubmit:O((function(e){console.log("data",e),i(e)})),children:[Object(d.jsx)(o.b,{formControl:m}),Object(d.jsx)(ae.a,{formControl:m}),Object(d.jsx)(Y,{formControl:m}),Object(d.jsx)("div",{className:"flex flex-col items-center justify-center",children:Object(d.jsx)(Z.a,{color:"primary",type:"submit",className:"w-12 bg-blue-800",variant:"contained",children:"L\u01b0u"})})]})}}}]);
//# sourceMappingURL=9.85fde00d.chunk.js.map