(this.webpackJsonpkbyt_web=this.webpackJsonpkbyt_web||[]).push([[11],{423:function(e,a,t){"use strict";t.r(a);var l=t(42),n=t(21),r=t(0),c=t(3),s=t(147),b=t(166),o=t(133),u=t(192),j=t(151),i=t(33),f=t(169),m=t(168),O=t(212),d=t(134),p=t(43),h=t(136),g=t(413),x=t(142),v=t(138),y=t(2),N=["ref"],T=["ref"],V=["ref"],w=["ref"],P=["ref"],C=["ref"],A=["ref"],k=["ref"],B=["ref"],S=["ref"],M=["ref"],R=["ref"],I=["ref"],D=["ref"],H=["ref"],K=["ref"],F=["ref"],W=function(e){var a=e.formControl,t=e.defaultValue,n=a.control,r=a.formState.errors,c=a.watch,s=c("diseaseAcquired",!1),b=c("historyDrugAllergy",!1),u=c("toxicAgent",!1);return Object(y.jsxs)("div",{className:"my-6 p-6 bg-white rounded-2xl",children:[Object(y.jsx)("div",{className:"font-bold text-md mb-6 uppercase",children:"Sinh s\u1ea3n"}),Object(y.jsxs)("div",{className:"grid grid-cols-1 sm:grid-cols-6 gap-4",children:[Object(y.jsx)(o.a,{name:"medicalHistory",control:n,defaultValue:Object(p.get)(t,"medicalHistory",""),render:function(e){var a=e.field,t=a.ref,n=Object(d.a)(a,N);return Object(y.jsx)(h.a,Object(l.a)({label:"B\u1ec7nh s\u1eed",className:"w-full mb-3 sm:col-span-6",type:"text",errorMsg:Object(p.get)(r,"medicalHistory.message",""),inputRef:t},n))}}),Object(y.jsx)(o.a,{name:"diseaseAcquired",control:n,defaultValue:Object(p.get)(t,"diseaseAcquired",!1),render:function(e){var a=e.field,t=(a.ref,Object(d.a)(a,T));return Object(y.jsx)(g.a,Object(l.a)({className:"sm:col-start-1 sm:col-span-3",control:Object(y.jsx)(x.a,{}),label:"B\u1ec7nh t\u1eadt \u0111\xe3 m\u1eafc",labelPlacement:"end"},t))}}),s&&Object(y.jsx)(o.a,{name:"diseaseAcquiredOther",control:n,defaultValue:Object(p.get)(t,"diseaseAcquiredOther",""),render:function(e){var a=e.field,t=a.ref,n=Object(d.a)(a,V);return Object(y.jsx)(h.a,Object(l.a)({label:"B\u1ec7nh t\u1eadt \u0111\xe3 m\u1eafc",className:"w-full mb-3 sm:col-span-3",type:"text",errorMsg:Object(p.get)(r,"diseaseAcquiredOther.message",""),inputRef:t},n))}}),Object(y.jsx)(o.a,{name:"historyDrugAllergy",control:n,defaultValue:Object(p.get)(t,"historyDrugAllergy",""),render:function(e){var a=e.field,t=(a.ref,Object(d.a)(a,w));return Object(y.jsx)(g.a,Object(l.a)({className:"sm:col-start-1 sm:col-span-3",control:Object(y.jsx)(x.a,{}),label:"Ti\u1ec1n s\u1eed ng\u1ed9 \u0111\u1ed9c/d\u1ecb \u1ee9ng thu\u1ed1c",labelPlacement:"end"},t))}}),b&&Object(y.jsx)(o.a,{name:"historyDrugAllergyOther",control:n,defaultValue:Object(p.get)(t,"historyDrugAllergyOther",""),render:function(e){var a=e.field,t=a.ref,n=Object(d.a)(a,P);return Object(y.jsx)(h.a,Object(l.a)({label:"Ti\u1ec1n s\u1eed ng\u1ed9 \u0111\u1ed9c/d\u1ecb \u1ee9ng thu\u1ed1c",className:"w-full mb-3 sm:col-span-3",type:"text",errorMsg:Object(p.get)(r,"historyDrugAllergyOther.message",""),inputRef:t},n))}}),Object(y.jsx)(o.a,{name:"timeOfPregnanciesType",control:n,defaultValue:Object(p.get)(t,"timeOfPregnanciesType",0),render:function(e){var a=e.field,t=(a.ref,Object(d.a)(a,C));return Object(y.jsx)(v.a,Object(l.a)({className:"w-full mb-3 sm:col-span-3 sm:col-start-1",options:[{value:0,label:"Ch\u01b0a"},{value:1,label:"2"},{value:2,label:"2"},{value:3,label:"3"},{value:4,label:">3"}],inputProps:{label:"S\u1ed1 l\u1ea7n c\xf3 thai"}},t))}}),Object(y.jsx)(o.a,{name:"numberOfBirthType",control:n,defaultValue:Object(p.get)(t,"numberOfBirthType",0),render:function(e){var a=e.field,t=(a.ref,Object(d.a)(a,A));return Object(y.jsx)(v.a,Object(l.a)({className:"w-full mb-3 sm:col-span-3",options:[{value:0,label:"Ch\u01b0a \u0111\u1ebb"},{value:1,label:"2"},{value:2,label:"2"},{value:3,label:"3"},{value:4,label:">3"}],inputProps:{label:"S\u1ed1 l\u1ea7n \u0111\u1ebb"}},t))}}),Object(y.jsx)(o.a,{name:"aliveChild",control:n,defaultValue:Object(p.get)(t,"aliveChild",0),render:function(e){var a=e.field,t=(a.ref,Object(d.a)(a,k));return Object(y.jsx)(v.a,Object(l.a)({className:"w-full mb-3 sm:col-span-3",options:[{value:0,label:"0"},{value:1,label:"2"},{value:2,label:"2"},{value:3,label:"3"},{value:4,label:">3"}],inputProps:{label:"S\u1ed1 con s\u1ed1ng"}},t))}}),Object(y.jsx)(o.a,{name:"aliveStatus",control:n,defaultValue:Object(p.get)(t,"aliveStatus",""),render:function(e){var a=e.field,t=a.ref,n=Object(d.a)(a,B);return Object(y.jsx)(h.a,Object(l.a)({label:"T\xecnh tr\u1ea1ng",className:"w-full mb-3 sm:col-span-3",type:"text",errorMsg:Object(p.get)(r,"aliveStatus.message",""),inputRef:t},n))}}),Object(y.jsx)(o.a,{name:"miscarriage",control:n,defaultValue:Object(p.get)(t,"miscarriage",0),render:function(e){var a=e.field,t=(a.ref,Object(d.a)(a,S));return Object(y.jsx)(v.a,Object(l.a)({className:"w-full mb-3 sm:col-span-2 sm:col-start-1",options:[{value:0,label:"Kh\xf4ng"},{value:1,label:"C\xf3"}],inputProps:{label:"S\u1ea3y"}},t))}}),Object(y.jsx)(o.a,{name:"abortion",control:n,defaultValue:Object(p.get)(t,"abortion",0),render:function(e){var a=e.field,t=(a.ref,Object(d.a)(a,M));return Object(y.jsx)(v.a,Object(l.a)({className:"w-full mb-3 sm:col-span-2",options:[{value:0,label:"Kh\xf4ng"},{value:1,label:"C\xf3"}],inputProps:{label:"N\u1ea1o, h\xfat"}},t))}}),Object(y.jsx)(o.a,{name:"stillbirth",control:n,defaultValue:Object(p.get)(t,"stillbirth",0),render:function(e){var a=e.field,t=(a.ref,Object(d.a)(a,R));return Object(y.jsx)(v.a,Object(l.a)({className:"w-full mb-3 sm:col-span-2",options:[{value:0,label:"Kh\xf4ng"},{value:1,label:"C\xf3"}],inputProps:{label:"Thai l\u01b0u"}},t))}}),Object(y.jsx)(o.a,{name:"toxicAgent",control:n,defaultValue:Object(p.get)(t,"toxicAgent",""),render:function(e){var a=e.field,t=(a.ref,Object(d.a)(a,I));return Object(y.jsx)(g.a,Object(l.a)({className:"sm:col-start-1 sm:col-span-3",control:Object(y.jsx)(x.a,{}),label:"Ti\u1ebfp x\xfac v\u1edbi t\xe1c nh\xe2n \u0111\u1ed9c h\u1ea1i",labelPlacement:"end"},t))}}),u&&Object(y.jsx)(o.a,{name:"toxicAgentOther",control:n,defaultValue:Object(p.get)(t,"toxicAgentOther",""),render:function(e){var a=e.field,t=a.ref,n=Object(d.a)(a,D);return Object(y.jsx)(h.a,Object(l.a)({label:"Ti\u1ebfp x\xfac v\u1edbi t\xe1c nh\xe2n \u0111\u1ed9c h\u1ea1i",className:"w-full mb-3 sm:col-span-3",type:"text",errorMsg:Object(p.get)(r,"toxicAgentOther.message",""),inputRef:t},n))}}),Object(y.jsx)(o.a,{name:"menstrualCycleType",control:n,defaultValue:Object(p.get)(t,"menstrualCycleType",0),render:function(e){var a=e.field,t=(a.ref,Object(d.a)(a,H));return Object(y.jsx)(v.a,Object(l.a)({className:"sm:col-start-1 w-full mb-3 sm:col-span-3",options:[{value:0,label:"\u0110\u1ec1u"},{value:1,label:"Kh\xf4ng \u0111\u1ec1u"},{value:2,label:"Kh\xe1c"}],inputProps:{label:"Chu k\u1ef3 kinh"}},t))}}),Object(y.jsx)(o.a,{name:"menstrualCycle",control:n,defaultValue:Object(p.get)(t,"menstrualCycle",""),render:function(e){var a=e.field,t=a.ref,n=Object(d.a)(a,K);return Object(y.jsx)(h.a,Object(l.a)({label:"V\xf2ng kinh",className:"w-full mb-3 sm:col-span-3",type:"text",errorMsg:Object(p.get)(r,"menstrualCycle.message",""),inputRef:t},n))}}),Object(y.jsx)(o.a,{name:"lastDatePeriod",control:n,defaultValue:Object(p.get)(t,"lastDatePeriod",""),render:function(e){var a=e.field,t=a.ref,n=Object(d.a)(a,F);return Object(y.jsx)(h.a,Object(l.a)({label:"Ng\xe0y \u0111\u1ea7u c\u1ee7a k\u1ef3 kinh cu\u1ed1i c\xf9ng",className:"w-full mb-3 sm:col-span-6",type:"text",errorMsg:Object(p.get)(r,"lastDatePeriod.message",""),inputRef:t},n))}})]})]})},Y=["ref"],U=["ref"],q=["ref"],G=["ref"],L=["ref"],E=["ref"],J=["ref"],_=["ref"],z=function(e){var a=e.formControl,t=e.defaultValue,n=a.control,r=a.formState.errors,c=a.watch;a.setValue,c("isFamily",!1);return Object(y.jsxs)("div",{className:"my-6 p-6 bg-white rounded-2xl",children:[Object(y.jsx)("div",{className:"font-bold text-md mb-6 uppercase",children:"Si\xeau \xe2m"}),Object(y.jsxs)("div",{className:"grid grid-cols-1 sm:grid-cols-6 gap-4",children:[Object(y.jsx)(o.a,{name:"dateOfPregnancyUltrasound",control:n,defaultValue:Object(p.get)(t,"dateOfPregnancyUltrasound",""),render:function(e){var a=e.field,t=a.ref,n=Object(d.a)(a,Y);return Object(y.jsx)(h.a,Object(l.a)({label:"Ng\xe0y si\xeau \xe2m thai",className:"w-full mb-3 sm:col-span-3",type:"text",errorMsg:Object(p.get)(r,"dateOfPregnancyUltrasound.message",""),inputRef:t},n))}}),Object(y.jsx)(o.a,{name:"pregnancyWeek",control:n,defaultValue:Object(p.get)(t,"pregnancyWeek",""),render:function(e){var a=e.field,t=a.ref,n=Object(d.a)(a,U);return Object(y.jsx)(h.a,Object(l.a)({label:"Tu\u1ea7n thai",className:"w-full mb-3 sm:col-span-3",type:"text",errorMsg:Object(p.get)(r,"pregnancyWeek.message",""),inputRef:t,endAdornment:Object(y.jsx)("span",{className:"ransform translate-y-[0.125rem] pl-2 text-primary-4",children:"tu\u1ea7n"})},n))}}),Object(y.jsx)(o.a,{name:"numberOfPregnancie",control:n,defaultValue:Object(p.get)(t,"numberOfPregnancie",""),render:function(e){var a=e.field,t=a.ref,n=Object(d.a)(a,q);return Object(y.jsx)(h.a,Object(l.a)({label:"S\u1ed1 thai",className:"w-full mb-3 sm:col-span-3",type:"text",errorMsg:Object(p.get)(r,"numberOfPregnancie.message",""),inputRef:t,endAdornment:Object(y.jsx)("span",{className:"ransform translate-y-[0.125rem] pl-2 text-primary-4",children:"thai"})},n))}}),Object(y.jsx)(o.a,{name:"inseminationPregnancyType",control:n,defaultValue:Object(p.get)(t,"inseminationPregnancyType",1),render:function(e){var a=e.field,t=(a.ref,Object(d.a)(a,G));return Object(y.jsx)(v.a,Object(l.a)({className:"w-full mb-3 sm:col-span-3",options:[{value:1,label:"T\u1ef1 nhi\xean"},{value:2,label:"IUI"},{value:3,label:"IVF"}],inputProps:{label:"Thai th\u1ee5 tinh"}},t))}}),Object(y.jsx)(o.a,{name:"theLengthOfButtock",control:n,defaultValue:Object(p.get)(t,"theLengthOfButtock",""),render:function(e){var a=e.field,t=a.ref,n=Object(d.a)(a,L);return Object(y.jsx)(h.a,Object(l.a)({label:"Chi\u1ec1u d\xe0i \u0111\u1ea7u m\xf4ng",className:"w-full mb-3 sm:col-span-3",type:"text",errorMsg:Object(p.get)(r,"theLengthOfButtock.message",""),inputRef:t,endAdornment:Object(y.jsx)("span",{className:"ransform translate-y-[0.125rem] pl-2 text-primary-4",children:"mm"})},n))}}),Object(y.jsx)(o.a,{name:"lightBackOfNeck",control:n,defaultValue:Object(p.get)(t,"lightBackOfNeck",""),render:function(e){var a=e.field,t=a.ref,n=Object(d.a)(a,E);return Object(y.jsx)(h.a,Object(l.a)({label:"Kho\u1ea3ng s\xe1ng sau g\xe1y",className:"w-full mb-3 sm:col-span-3",type:"text",errorMsg:Object(p.get)(r,"lightBackOfNeck.message",""),inputRef:t,endAdornment:Object(y.jsx)("span",{className:"ransform translate-y-[0.125rem] pl-2 text-primary-4",children:"mm"})},n))}}),Object(y.jsx)(o.a,{name:"morphologicalUltrasound",control:n,defaultValue:Object(p.get)(t,"morphologicalUltrasound",""),render:function(e){var a=e.field,t=a.ref,n=Object(d.a)(a,J);return Object(y.jsx)(h.a,Object(l.a)({label:"H\xecnh th\xe1i si\xeau \xe2m thai",className:"w-full mb-3 sm:col-span-6",type:"text",errorMsg:Object(p.get)(r,"morphologicalUltrasound.message",""),inputRef:t},n))}}),Object(y.jsx)(o.a,{name:"geneticPathologyType",control:n,defaultValue:Object(p.get)(t,"geneticPathologyType",1),render:function(e){var a=e.field,t=(a.ref,Object(d.a)(a,_));return Object(y.jsx)(v.a,Object(l.a)({className:"w-full mb-3 sm:col-span-6",options:[{value:1,label:"Kh\xf4ng"},{value:2,label:"B\u1ed1"},{value:3,label:"M\u1eb9"},{value:4,label:"Anh ch\u1ecb em"},{value:5,label:"H\u1ecd h\xe0ng"}],inputProps:{label:"C\xf3 ai trong gia \u0111\xecnh v\xe0 h\u1ecd h\xe0ng m\u1eafc b\u1ec7nh l\xfd di truy\u1ec1n kh\xf4ng?"}},t))}})]})]})},Q=["ref"],X=["ref"],Z=["ref"],$=["ref"],ee=["ref"],ae=["ref"],te=["ref"],le=["ref"],ne=["ref"],re=function(){for(var e=1900,a=[],t=(new Date).getFullYear();e<=t;)a.push({value:e,label:e}),e++;return a}(),ce=[{value:1,label:"V\u0103n ph\xf2ng"},{value:2,label:"C\xf4ng nh\xe2n"},{value:3,label:"N\xf4ng d\xe2n"},{value:4,label:"Bu\xf4n b\xe1n"},{value:5,label:"Y t\u1ebf"},{value:6,label:"Kh\xe1c"}],se=function(e){var a=e.formControl,t=e.defaultValue,n=a.control,r=a.formState.errors;return Object(y.jsxs)("div",{className:"my-6 p-6 bg-white rounded-2xl",children:[Object(y.jsx)("div",{className:"font-bold text-md mb-6 uppercase",children:"Th\xf4ng tin ch\u1ed3ng thai ph\u1ee5"}),Object(y.jsxs)("div",{className:"grid grid-cols-1 sm:grid-cols-6 gap-4",children:[Object(y.jsx)(o.a,{name:"husbandPhone",control:n,defaultValue:Object(p.get)(t,"husbandPhone",""),render:function(e){var a=e.field,t=a.ref,n=Object(d.a)(a,Q);return Object(y.jsx)(h.a,Object(l.a)({label:"S\u1ed1 \u0111i\u1ec7n tho\u1ea1i",className:"w-full mb-3 sm:col-span-3",type:"text",errorMsg:Object(p.get)(r,"husbandPhone.message",""),inputRef:t},n))}}),Object(y.jsx)(o.a,{name:"husbandFullName",control:n,defaultValue:Object(p.get)(t,"husbandFullName"),render:function(e){var a=e.field,t=a.ref,n=Object(d.a)(a,X);return Object(y.jsx)(h.a,Object(l.a)({label:"H\u1ecd v\xe0 t\xean",className:"w-full mb-3 sm:col-span-3",type:"text",errorMsg:Object(p.get)(r,"husbandFullName.message",""),inputRef:t},n))}}),Object(y.jsx)(o.a,{name:"husbandAddress",control:n,defaultValue:Object(p.get)(t,"husbandAddress",""),render:function(e){var a=e.field,t=a.ref,n=Object(d.a)(a,Z);return Object(y.jsx)(h.a,Object(l.a)({label:"\u0110\u1ecba ch\u1ec9",className:"w-full mb-3 sm:col-span-6",type:"text",errorMsg:Object(p.get)(r,"husbandAddress.message",""),inputRef:t},n))}}),Object(y.jsx)(o.a,{name:"husbandYearOfBirth",control:n,defaultValue:Object(p.get)(t,"husbandYearOfBirth"),render:function(e){var a=e.field,t=(a.ref,Object(d.a)(a,$));return Object(y.jsx)(v.a,Object(l.a)({className:"w-full mb-3 sm:col-span-3",options:re,inputProps:{label:"N\u0103m sinh"}},t))}}),Object(y.jsx)(o.a,{name:"husbandCareerType",control:n,defaultValue:Object(p.get)(t,"husbandCareerType",1),render:function(e){var a=e.field,t=(a.ref,Object(d.a)(a,ee));return Object(y.jsx)(v.a,Object(l.a)({className:"w-full mb-3 sm:col-span-3",options:ce,inputProps:{label:"Ngh\u1ec1 nghi\u1ec7p"}},t))}}),Object(y.jsx)(o.a,{name:"husbandHeight",control:n,defaultValue:Object(p.get)(t,"husbandHeight",0),render:function(e){var a=e.field,t=a.ref,n=Object(d.a)(a,ae);return Object(y.jsx)(h.a,Object(l.a)({label:"Chi\u1ec1u cao",className:"w-full mb-3 sm:col-start-1 sm:col-span-2",type:"number",errorMsg:Object(p.get)(r,"husbandHeight.message",""),inputRef:t,endAdornment:Object(y.jsx)("span",{className:"transform translate-y-[0.125rem] pl-2 text-primary-4",children:"cm"})},n))}}),Object(y.jsx)(o.a,{name:"husbandWeight",control:n,defaultValue:Object(p.get)(t,"husbandWeight",0),render:function(e){var a=e.field,t=a.ref,n=Object(d.a)(a,te);return Object(y.jsx)(h.a,Object(l.a)({label:"C\xe2n n\u1eb7ng",className:"w-full mb-3 sm:col-span-2",type:"number",errorMsg:Object(p.get)(r,"husbandWeight.message",""),inputRef:t,endAdornment:Object(y.jsx)("span",{className:"ransform translate-y-[0.125rem] pl-2 text-primary-4",children:"kg"})},n))}}),Object(y.jsx)(o.a,{name:"husbandBMI",control:n,defaultValue:Object(p.get)(t,"BMI",0),render:function(e){var a=e.field,t=a.ref,n=Object(d.a)(a,le);return Object(y.jsx)(h.a,Object(l.a)({label:"husbandBMI",className:"w-full mb-3 sm:col-span-2",type:"number",disabled:!0,errorMsg:Object(p.get)(r,"husbandBMI.message",""),inputRef:t},n))}}),Object(y.jsx)(o.a,{name:"husbandNation",control:n,defaultValue:Object(p.get)(t,"husbandNation"),render:function(e){var a=e.field,t=a.ref,n=Object(d.a)(a,ne);return Object(y.jsx)(h.a,Object(l.a)({label:"D\xe2n t\u1ed9c",className:"w-full mb-3 sm:col-span-6",type:"text",errorMsg:Object(p.get)(r,"husbandNation.message",""),inputRef:t},n))}})]})]})},be=["ref"],oe=["ref"],ue=["ref"],je=["ref"],ie=["ref"],fe=["ref"],me=["ref"],Oe=["ref"],de=["ref"],pe=["ref"],he=["ref"],ge=["ref"],xe=[{label:"0",value:0},{label:"<5",value:1},{label:"5-10",value:2},{label:">10",value:3}],ve=function(e){var a=e.formControl,t=e.defaultValue,n=a.control,r=(a.formState.errors,a.watch),c=r("husbandIsCigarette",!1),s=r("husbandIsPipeTobacco",!1),b=r("husbandIsBeer",!1),u=r("husbandIsAlcohol",!1);return Object(y.jsxs)("div",{className:"my-6 p-6 bg-white rounded-2xl",children:[Object(y.jsx)("div",{className:"font-bold text-md mb-6 uppercase",children:"CH\u1ea4T K\xcdCH TH\xcdCH"}),Object(y.jsxs)("div",{className:"grid grid-cols-1 sm:grid-cols-6 gap-4",children:[Object(y.jsx)(o.a,{name:"husbandIsCigarette",control:n,defaultValue:Object(p.get)(t,"husbandIsCigarette",!1),render:function(e){var a=e.field,t=(a.ref,Object(d.a)(a,be));return Object(y.jsx)(g.a,Object(l.a)({className:"col-start-1 sm:col-span-2",control:Object(y.jsx)(x.a,{}),label:"H\xfat thu\u1ed1c l\xe1",labelPlacement:"end"},t))}}),+c>0&&Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)(o.a,{name:"husbandNumberOfCigaretteType",control:n,defaultValue:Object(p.get)(t,"husbandNumberOfCigaretteType",0),render:function(e){var a=e.field,t=(a.ref,Object(d.a)(a,oe));return Object(y.jsx)(v.a,Object(l.a)({className:"w-full mb-3 sm:col-span-2",options:xe,inputProps:{label:"S\u1ed1 \u0111i\u1ebfu/ng\xe0y"}},t))}}),Object(y.jsx)(o.a,{name:"husbandYearOfCigaretteType",control:n,defaultValue:Object(p.get)(t,"husbandYearOfCigaretteType",0),render:function(e){var a=e.field,t=(a.ref,Object(d.a)(a,ue));return Object(y.jsx)(v.a,Object(l.a)({className:"w-full mb-3 sm:col-span-2",options:xe,inputProps:{label:"S\u1ed1 n\u0103m h\xfat"}},t))}})]}),Object(y.jsx)(o.a,{name:"husbandIsPipeTobacco",control:n,defaultValue:Object(p.get)(t,"husbandIsPipeTobacco",!1),render:function(e){var a=e.field,t=(a.ref,Object(d.a)(a,je));return Object(y.jsx)(g.a,Object(l.a)({className:"sm:col-start-1 sm:col-span-2",control:Object(y.jsx)(x.a,{}),label:"H\xfat thu\u1ed1c l\xe0o",labelPlacement:"end"},t))}}),+s>0&&Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)(o.a,{name:"husbandNumberOfPipeTobaccoType",control:n,defaultValue:Object(p.get)(t,"husbandNumberOfPipeTobaccoType",0),render:function(e){var a=e.field,t=(a.ref,Object(d.a)(a,ie));return Object(y.jsx)(v.a,Object(l.a)({className:"w-full mb-3 sm:col-span-2",options:xe,inputProps:{label:"S\u1ed1 \u0111i\u1ebfu/ng\xe0y"}},t))}}),Object(y.jsx)(o.a,{name:"husbandYearOfPipeTobaccoType",control:n,defaultValue:Object(p.get)(t,"husbandYearOfPipeTobaccoType",0),render:function(e){var a=e.field,t=(a.ref,Object(d.a)(a,fe));return Object(y.jsx)(v.a,Object(l.a)({className:"w-full mb-3 sm:col-span-2",options:xe,inputProps:{label:"S\u1ed1 n\u0103m h\xfat"}},t))}})]}),Object(y.jsx)(o.a,{name:"husbandIsBeer",control:n,defaultValue:Object(p.get)(t,"husbandIsBeer",!1),render:function(e){var a=e.field,t=(a.ref,Object(d.a)(a,me));return Object(y.jsx)(g.a,Object(l.a)({className:"sm:col-start-1 sm:col-span-2",control:Object(y.jsx)(x.a,{}),label:"Bia",labelPlacement:"end"},t))}}),+b>0&&Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)(o.a,{name:"husbandNumberOfBeerType",control:n,defaultValue:Object(p.get)(t,"husbandNumberOfBeerType",0),render:function(e){var a=e.field,t=(a.ref,Object(d.a)(a,Oe));return Object(y.jsx)(v.a,Object(l.a)({className:"w-full mb-3 sm:col-span-2",options:xe,inputProps:{label:"S\u1ed1 c\u1ed1c/l\u1ea7n"}},t))}}),Object(y.jsx)(o.a,{name:"husbandTimeOfBeerType",control:n,defaultValue:Object(p.get)(t,"husbandTimeOfBeerType",0),render:function(e){var a=e.field,t=(a.ref,Object(d.a)(a,de));return Object(y.jsx)(v.a,Object(l.a)({className:"w-full mb-3 sm:col-span-2",options:xe,inputProps:{label:"S\u1ed1 l\u1ea7n/tu\u1ea7n"}},t))}})]}),Object(y.jsx)(o.a,{name:"husbandIsAlcohol",control:n,defaultValue:Object(p.get)(t,"husbandIsAlcohol",!1),render:function(e){var a=e.field,t=(a.ref,Object(d.a)(a,pe));return Object(y.jsx)(g.a,Object(l.a)({className:"sm:col-start-1 sm:col-span-2",control:Object(y.jsx)(x.a,{}),label:"R\u01b0\u1ee3u",labelPlacement:"end"},t))}}),+u>0&&Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)(o.a,{name:"husbandNumberOfAlcoholType",control:n,defaultValue:Object(p.get)(t,"husbandNumberOfAlcoholType",0),render:function(e){var a=e.field,t=(a.ref,Object(d.a)(a,he));return Object(y.jsx)(v.a,Object(l.a)({className:"w-full mb-3 sm:col-span-2",options:xe,inputProps:{label:"S\u1ed1 c\u1ed1c/l\u1ea7n"}},t))}}),Object(y.jsx)(o.a,{name:"husbandTimeOfAlcoholType",control:n,defaultValue:Object(p.get)(t,"husbandTimeOfAlcoholType",0),render:function(e){var a=e.field,t=(a.ref,Object(d.a)(a,ge));return Object(y.jsx)(v.a,Object(l.a)({className:"w-full mb-3 sm:col-span-2",options:xe,inputProps:{label:"S\u1ed1 l\u1ea7n/tu\u1ea7n"}},t))}})]})]})]})},ye=["ref"],Ne=["ref"],Te=["ref"],Ve=["ref"],we=function(e){var a=e.formControl,t=e.defaultValue,n=a.control;return Object(y.jsxs)("div",{className:"my-6 p-6 bg-white rounded-2xl",children:[Object(y.jsx)("div",{className:"font-bold text-md mb-6 uppercase",children:"Th\xf4ng tin gia \u0111\xecnh"}),Object(y.jsxs)("div",{className:"grid grid-cols-1 sm:grid-cols-6 gap-4",children:[Object(y.jsx)(o.a,{name:"thirdGenarateType",control:n,defaultValue:Object(p.get)(t,"thirdGenarateType",0),render:function(e){var a=e.field,t=(a.ref,Object(d.a)(a,ye));return Object(y.jsx)(v.a,Object(l.a)({className:"w-full mb-3 sm:col-span-6",options:[{value:0,label:"Kh\xf4ng"},{value:1,label:"C\xf3"}],inputProps:{label:"Trong 3 th\u1ebf h\u1ec7 c\xf3 ai b\u1ecb thai b\u1ea5t th\u01b0\u1eddng kh\xf4ng"}},t))}}),Object(y.jsx)(o.a,{name:"thirdGenarateGeneticType",control:n,defaultValue:Object(p.get)(t,"thirdGenarateGeneticType",0),render:function(e){var a=e.field,t=(a.ref,Object(d.a)(a,Ne));return Object(y.jsx)(v.a,Object(l.a)({className:"w-full mb-3 sm:col-span-6",options:[{value:0,label:"Kh\xf4ng"},{value:1,label:"C\xf3"}],inputProps:{label:"Trong 3 th\u1ebf h\u1ec7 c\xf3 ai m\u1eafc ho\u1eb7c sinh con b\u1ecb c\xe1c b\u1ec7nh di truy\u1ec1n ho\u1eb7c d\u1ecb t\u1eadt b\u1ea9m sinh kh\xf4ng? \u0110\u1eb7c bi\u1ec7t c\xe1c b\u1ec7nh Down, D\u1ecb t\u1eadt \u1ed1ng th\u1ea7n kinh (h\u1ed9p s\u1ecd, c\u1ed9t s\u1ed1ng), Ch\u1eadm ph\xe1t tri\u1ec3n t\xe2m th\u1ea7n, Teo c\u01a1, B\u1ec7nh tim, L\xf9n, V\xf4 kinh, V\xf4 sinh"}},t))}}),Object(y.jsx)(o.a,{name:"whereWarType",control:n,defaultValue:Object(p.get)(t,"whereWarType",0),render:function(e){var a=e.field,t=(a.ref,Object(d.a)(a,Te));return Object(y.jsx)(v.a,Object(l.a)({className:"w-full mb-3 sm:col-span-6",options:[{value:0,label:"Kh\xf4ng"},{value:1,label:"C\xf3"}],inputProps:{label:"\xd4ng b\xe0, b\u1ed1 m\u1eb9 b\xean v\u1ee3, b\xean ch\u1ed3ng c\xf3 ai \u0111i b\u1ed9 \u0111\u1ed9i \u1edf chi\u1ebfn tr\u01b0\u1eddng mi\u1ec1n Nam tr\u01b0\u1edbc n\u0103m 1975 kh\xf4ng? \u1ede \u0111\xe2u"}},t))}}),Object(y.jsx)(o.a,{name:"diagnosticType",control:n,defaultValue:Object(p.get)(t,"diagnosticType",1),render:function(e){var a=e.field,t=(a.ref,Object(d.a)(a,Ve));return Object(y.jsx)(v.a,Object(l.a)({className:"w-full mb-3 sm:col-span-6",options:[{value:1,label:"Kh\xf4ng"},{value:2,label:"D\u1ecb t\u1eadt b\u1ea9m sinh"},{value:3,label:"Tr\u01b0\u1edbc h\xf4n nh\xe2n"},{value:4,label:"S\xe0ng l\u1ecdc tr\u01b0\u1edbc sinh"},{value:5,label:"Di truy\u1ec1n sinh s\u1ea3n"},{value:6,label:"Kh\xe1c"}],inputProps:{label:"Chu\u1ea9n \u0111o\xe1n"}},t))}})]})]})};a.default=function(){var e=Object(c.f)(),a=Object(i.c)(),t=Object(n.a)(a,2),d=t[0],p=t[1],h=s.a().shape(Object(l.a)({},b.a)),g=Object(o.e)({mode:"onSubmit",resolver:Object(u.a)(h)}),x=g.handleSubmit,v=g.watch,N=g.setValue,T=v("phone","");Object(r.useEffect)((function(){if(console.log("updateInfoState",p),p.isSuccess&&!p.isLoading){e(-1);var a=Object(f.a)({title:"Th\xf4ng b\xe1o",description:"C\u1eadp nh\u1eadt th\xe0nh c\xf4ng",type:"success",bottomText:"\u0110\u1ed3ng \xfd",onBottomClick:function(){a()}}).close}}),[p]);var V=Object(i.b)(T,{skip:!m.a.test(T)});Object(r.useEffect)((function(){console.log("state",V)}),[N,V]);return Object(y.jsxs)("form",{onSubmit:x((function(e){console.log("data",e),d(e)})),children:[Object(y.jsx)(b.b,{formControl:g}),Object(y.jsx)(O.a,{formControl:g}),Object(y.jsx)(W,{formControl:g}),Object(y.jsx)(z,{formControl:g}),Object(y.jsx)(se,{formControl:g}),Object(y.jsx)(ve,{formControl:g}),Object(y.jsx)(we,{formControl:g}),Object(y.jsx)("div",{className:"flex flex-col items-center justify-center",children:Object(y.jsx)(j.a,{color:"primary",type:"submit",className:"w-12 bg-blue-800",variant:"contained",children:"L\u01b0u"})})]})}}}]);
//# sourceMappingURL=11.dad36339.chunk.js.map