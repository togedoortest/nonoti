(this["webpackJsonptogedoor-frontend"]=this["webpackJsonptogedoor-frontend"]||[]).push([[24],{467:function(e,t,c){"use strict";var r=c(12),a=c(0),s=c(439),l=c(449),i=c(473),n=c(151),o=c(450),j=c(19),d=c(160),x=c(682),b=c(653),m=c(438),h=c(654),O=c(655),p=c(8),f=c(1),u=function(e){var t=e.modal,c=e.toggle,r=e.children,a=e.to,s=e.title;return Object(f.jsxs)(x.a,{isOpen:t,toggle:c,className:"mt-13",children:[Object(f.jsxs)(b.a,{tag:"h6",toggle:c,className:"border-0",children:[Object(f.jsx)(j.a,{className:"text-primary mr-1",icon:d.c}),Object(f.jsx)("span",{className:"  text-dark",children:s})]}),Object(f.jsxs)(m.a,{children:[r&&Object(f.jsx)(h.a,{children:r}),Object(f.jsxs)(O.a,{className:"border-0 justify-content-start",children:[Object(f.jsx)(n.a,{color:"primary",onClick:c,children:"Save Updates"})," ",Object(f.jsx)(p.b,{to:a||"#",className:"text-primary",onClick:c,children:"cancel"})," "]})]})]})},g=c(245),y=c(248),N=c(244),k=c(159),w=function(e){var t=function(t){t.persist(),e.setUserBasicInfo(t.target.value,t.target.name)};return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsxs)(g.a,{row:!0,children:[Object(f.jsx)(y.a,{for:"exampetext",sm:3,children:"First name :"}),Object(f.jsx)(N.a,{sm:9,children:Object(f.jsx)(k.a,{type:"text",name:"firstName",id:"exampleEmail",placeholder:"Please insert your first name",onChange:t,className:"border-top-0 border-left-0 border-right-0 boder-bottom"})})]}),Object(f.jsxs)(g.a,{row:!0,children:[Object(f.jsx)(y.a,{for:"exampetext",sm:3,children:"Last name :"}),Object(f.jsx)(N.a,{sm:9,children:Object(f.jsx)(k.a,{type:"text",name:"lastName",id:"exampleEmail",placeholder:"Please insert your last name",onChange:t,className:"border-top-0 border-left-0 border-right-0 boder-bottom"})})]}),Object(f.jsxs)(g.a,{row:!0,children:[Object(f.jsx)(y.a,{for:"exampetext",sm:3,children:"Job title :"}),Object(f.jsx)(N.a,{sm:9,children:Object(f.jsx)(k.a,{type:"text",name:"jobTitle",id:"exampleEmail",placeholder:"Please insert your job title",onChange:t,className:"border-top-0 border-left-0 border-right-0 boder-bottom"})})]}),Object(f.jsxs)(g.a,{row:!0,children:[Object(f.jsx)(y.a,{for:"exampleEmail",sm:3,children:"Location :"}),Object(f.jsx)(N.a,{sm:9,children:Object(f.jsx)(k.a,{type:"text",name:"location",id:"exampleEmail",onChange:t,placeholder:"Please insert your location",className:"border-top-0 border-left-0 border-right-0 boder-bottom"})})]})]})},v=function(e){console.log(e);return Object(f.jsxs)(g.a,{row:!0,children:[Object(f.jsx)(y.a,{for:"exampleText",sm:3,children:"Write Yourself:"}),Object(f.jsx)(N.a,{sm:9,children:Object(f.jsx)(k.a,{type:"textarea",name:"aboutMe",id:"exampleText",placeholder:"Write YourSelf",className:"border-top-0 border-left-0 border-right-0 boder-bottom",onChange:function(t){t.persist(),e.setUserAboutMe(t.target.value,t.target.name)}})})]})},C=function(){return Object(f.jsxs)(g.a,{row:!0,children:[Object(f.jsx)(y.a,{for:"exampleEmail",sm:3,children:"Video Link :"}),Object(f.jsx)(N.a,{sm:9,children:Object(f.jsx)(k.a,{type:"text",name:"videolink",id:"exampleEmail",placeholder:"Youtube Url Or Browse Link",className:"border-top-0 border-left-0 border-right-0 boder-bottom"})})]})},T=function(){return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsxs)(g.a,{row:!0,children:[Object(f.jsx)(y.a,{for:"exampleText",sm:3,children:"Gallery 01:"}),Object(f.jsxs)(N.a,{sm:9,children:[Object(f.jsx)(k.a,{type:"text",name:"text",id:"exampleText",placeholder:"Title",className:"border-top-0 border-left-0 border-right-0 boder-bottom"}),Object(f.jsx)(k.a,{type:"text",name:"text",id:"exampleText",placeholder:"Link",className:"border-top-0 border-left-0 border-right-0 boder-bottom"}),Object(f.jsx)(y.a,{for:"exampleFile",className:"text-muted m-3",children:"Image"}),Object(f.jsx)(k.a,{type:"file",name:"file",id:"exampleFile"})]})]}),Object(f.jsxs)(g.a,{row:!0,children:[Object(f.jsx)(y.a,{for:"exampleText",sm:3,children:"Gallery 02:"}),Object(f.jsxs)(N.a,{sm:9,children:[Object(f.jsx)(k.a,{type:"text",name:"text",id:"exampleText",placeholder:"Title",className:"border-top-0 border-left-0 border-right-0 boder-bottom"}),Object(f.jsx)(k.a,{type:"text",name:"text",id:"exampleText",placeholder:"Link",className:"border-top-0 border-left-0 border-right-0 boder-bottom"}),Object(f.jsx)(y.a,{for:"exampleFile",className:"text-muted m-3",children:"Image"}),Object(f.jsx)(k.a,{type:"file",name:"file",id:"exampleFile"})]})]})]})};t.a=function(e){var t=e.title,c=e.action,x=e.children,b=e.className,m=e.modalName,h=Object(a.useState)(!1),O=Object(r.a)(h,2),p=O[0],g=O[1],y=function(){return g(!p)},N=Object(a.useState)("Write Yourself:"),k=Object(r.a)(N,2),S=(k[0],k[1],function(t,c){e.setAboutMe(t,c)});return Object(f.jsxs)(s.a,{className:"".concat(b&&b),children:[Object(f.jsxs)(l.a,{tag:"h6",className:"d-flex justify-content-between align-items-center bg-primary",children:[Object(f.jsx)(i.a,{className:"m-0 text-white p-2",children:t}),c&&Object(f.jsxs)(n.a,{size:"sm",onClick:y,className:"btn-icon text-white",color:"link",children:["basic"===m&&Object(f.jsx)(u,{modal:p,toggle:y,title:"basic information",children:Object(f.jsx)(w,{setUserBasicInfo:S})}),"about"===m&&Object(f.jsx)(u,{modal:p,toggle:y,title:"About us",children:Object(f.jsx)(v,{setUserAboutMe:S})}),"videoLink"===m&&Object(f.jsx)(u,{modal:p,toggle:y,title:"Intro video",children:Object(f.jsx)(C,{})}),"gallery"===m&&Object(f.jsx)(u,{modal:p,toggle:y,title:"Intro video",children:Object(f.jsx)(T,{})}),Object(f.jsx)(j.a,{icon:d.c})]})]}),x&&Object(f.jsx)(o.a,{children:x})]})}},468:function(e,t,c){"use strict";c(0);var r=c(459),a=c(19),s=c(1);t.a=function(e){var t=e.icon,c=e.title,l=e.description,i=e.className;return Object(s.jsxs)(r.a,{className:"d-flex p-1 ".concat(i),children:[Object(s.jsx)(a.a,{className:"mt-2 text-primary",icon:t}),Object(s.jsxs)("div",{className:"ml-4 pb-4",children:[Object(s.jsx)("p",{className:"m-0 d-block",children:c}),Object(s.jsx)("span",{className:"m-0 d-block text-muted",children:l})]})]})}},474:function(e,t,c){"use strict";var r=c(22),a=c(23),s=c(40),l=c(41),i=c(0),n=c(484),o=c(1),j=function(e){Object(s.a)(c,e);var t=Object(l.a)(c);function c(){return Object(r.a)(this,c),t.apply(this,arguments)}return Object(a.a)(c,[{key:"render",value:function(){return Object(o.jsx)("div",{style:{height:this.props.height,width:"100%",position:"relative"},className:"location-map",children:Object(o.jsxs)(n.Map,{google:this.props.google,zoom:14,children:[Object(o.jsx)(n.Marker,{onClick:this.onMarkerClick,name:"Current location"}),Object(o.jsx)(n.InfoWindow,{onClose:this.onInfoWindowClose,children:Object(o.jsx)("h2",{children:"Togedoor"})})]})})}}]),c}(i.Component);t.a=Object(n.GoogleApiWrapper)({apiKey:"AIzaSyA_zKt5ctyvJUOLtTlCQsboHxyjpDO6dw0"})(j)},674:function(e,t,c){"use strict";c.r(t);c(0);var r=c(438),a=c(245),s=c(248),l=c(159),i=c(436),n=c(244),o=c(467),j=c(1),d=function(){return Object(j.jsx)(o.a,{title:"Post New Job",className:"mb-5",children:Object(j.jsxs)(r.a,{children:[Object(j.jsxs)(a.a,{children:[Object(j.jsx)(s.a,{for:"exampleSelect1",children:"Job Category"}),Object(j.jsxs)(l.a,{type:"select",name:"select",id:"exampleSelect1",children:[Object(j.jsx)("option",{children:"Ui/Ux DEsigner"}),Object(j.jsx)("option",{children:"Ui/Ux DEsigner"}),Object(j.jsx)("option",{children:"Ui/Ux DEsigner"}),Object(j.jsx)("option",{children:"Ui/Ux DEsigner"}),Object(j.jsx)("option",{children:"Ui/Ux DEsigner"})]})]}),Object(j.jsxs)(a.a,{children:[Object(j.jsx)(s.a,{for:"exampleEmail1",children:"Job title"}),Object(j.jsx)(l.a,{type:"text",name:"email",id:"exampleEmail1",placeholder:"Need a Graphic Designer"})]}),Object(j.jsxs)(i.a,{form:!0,children:[Object(j.jsx)(n.a,{md:6,children:Object(j.jsxs)(a.a,{children:[Object(j.jsx)(s.a,{for:"exampleSelect2",children:"Job Type"}),Object(j.jsxs)(l.a,{type:"select",name:"select",id:"exampleSelect2",children:[Object(j.jsx)("option",{children:"Full Time"}),Object(j.jsx)("option",{children:"Part Time"}),Object(j.jsx)("option",{children:"Full Time"}),Object(j.jsx)("option",{children:"Part Time"})]})]})}),Object(j.jsx)(n.a,{md:6,children:Object(j.jsxs)(a.a,{children:[Object(j.jsx)(s.a,{for:"examplejob1",children:"Working Hour"}),Object(j.jsx)(l.a,{type:"text",name:"job",id:"examplejob1",placeholder:"40/h Week"})]})}),Object(j.jsx)(n.a,{md:6,children:Object(j.jsxs)(a.a,{children:[Object(j.jsx)(s.a,{for:"exampleSelect3",children:"Salary"}),Object(j.jsxs)(l.a,{type:"select",name:"select",id:"exampleSelect3",children:[Object(j.jsx)("option",{children:"$12k - 15k P.A"}),Object(j.jsx)("option",{children:"$12k - 15k P.A"}),Object(j.jsx)("option",{children:"$12k - 15k P.A"}),Object(j.jsx)("option",{children:"$12k - 15k P.A"})]})]})}),Object(j.jsx)(n.a,{md:6,children:Object(j.jsxs)(a.a,{children:[Object(j.jsx)(s.a,{for:"exampleSelect4",children:"Experience"}),Object(j.jsxs)(l.a,{type:"select",name:"select",id:"exampleSelect4",children:[Object(j.jsx)("option",{children:"1 Year Experience"}),Object(j.jsx)("option",{children:"2 Year Experience"}),Object(j.jsx)("option",{children:"3 Year Experience"}),Object(j.jsx)("option",{children:"4 Year Experience"}),Object(j.jsx)("option",{children:"5 Year Experience"})]})]})})]})]})})},x=c(630),b=c.n(x),m=c(631),h=c.n(m),O=function(){return Object(j.jsx)(o.a,{title:"About This Job",className:"mb-5",children:Object(j.jsx)(b.a,{editor:h.a})})},p=c(468),f=c(16),u=function(){return Object(j.jsxs)(o.a,{title:"Trending Keywords",className:"mb-5",children:[Object(j.jsx)(r.a,{children:Object(j.jsx)(a.a,{children:Object(j.jsx)(l.a,{type:"text",name:"keywords",placeholder:"Type Keywords"})})}),Object(j.jsx)(p.a,{icon:f.I,description:" Trending Keywords :ui designer,developer,seniorit company,design,call center"})]})},g=c(474),y=function(){return Object(j.jsxs)(o.a,{title:"Address / Location",className:"mb-3",children:[Object(j.jsxs)(r.a,{children:[Object(j.jsxs)(i.a,{form:!0,children:[Object(j.jsx)(n.a,{md:6,children:Object(j.jsxs)(a.a,{children:[Object(j.jsx)(s.a,{for:"exampleSelect5",children:"Country"}),Object(j.jsxs)(l.a,{type:"select",name:"select",id:"exampleSelect5",children:[Object(j.jsx)("option",{children:"USA"}),Object(j.jsx)("option",{children:"Germany"}),Object(j.jsx)("option",{children:"France"})]})]})}),Object(j.jsx)(n.a,{md:6,children:Object(j.jsxs)(a.a,{children:[Object(j.jsx)(s.a,{for:"exampleSelect6",children:"City"}),Object(j.jsxs)(l.a,{type:"select",name:"select",id:"exampleSelect6",children:[Object(j.jsx)("option",{children:"Calofornia"}),Object(j.jsx)("option",{children:"Calofornia"}),Object(j.jsx)("option",{children:"Calofornia"})]})]})})]}),Object(j.jsxs)(a.a,{children:[Object(j.jsx)(s.a,{for:"exampleAddress",children:"Full Address"}),Object(j.jsx)(l.a,{type:"text",name:"address",id:"exampleAddress",placeholder:"London Uk"})]}),Object(j.jsxs)(i.a,{form:!0,children:[Object(j.jsx)(n.a,{md:4,children:Object(j.jsxs)(a.a,{children:[Object(j.jsx)(s.a,{for:"exampleCity",children:"Lattitude"}),Object(j.jsx)(l.a,{type:"text",name:"city",id:"41.4073509",placeholder:"41.4073509"})]})}),Object(j.jsx)(n.a,{md:4,children:Object(j.jsxs)(a.a,{children:[Object(j.jsx)(s.a,{for:"exampleState",children:"Longitude"}),Object(j.jsx)(l.a,{type:"text",name:"state",id:"exampleState",placeholder:"51.4073509"})]})}),Object(j.jsx)(n.a,{md:4,children:Object(j.jsxs)(a.a,{children:[Object(j.jsx)(s.a,{for:"exampleZip",children:"Zoom"}),Object(j.jsx)(l.a,{type:"text",name:"zip",id:"exampleZip",placeholder:"20"})]})})]})]}),Object(j.jsx)(g.a,{height:400})]})};t.default=function(){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(d,{}),Object(j.jsx)(O,{}),Object(j.jsx)(u,{}),Object(j.jsx)(y,{})]})}}}]);
//# sourceMappingURL=24.ec1579c1.chunk.js.map