(this["webpackJsonptogedoor-frontend"]=this["webpackJsonptogedoor-frontend"]||[]).push([[29],{467:function(e,t,a){"use strict";var r=a(12),c=a(0),s=a(439),l=a(449),o=a(473),i=a(151),n=a(450),j=a(19),b=a(160),d=a(682),m=a(653),x=a(438),h=a(654),O=a(655),p=a(8),u=a(1),f=function(e){var t=e.modal,a=e.toggle,r=e.children,c=e.to,s=e.title;return Object(u.jsxs)(d.a,{isOpen:t,toggle:a,className:"mt-13",children:[Object(u.jsxs)(m.a,{tag:"h6",toggle:a,className:"border-0",children:[Object(u.jsx)(j.a,{className:"text-primary mr-1",icon:b.c}),Object(u.jsx)("span",{className:"  text-dark",children:s})]}),Object(u.jsxs)(x.a,{children:[r&&Object(u.jsx)(h.a,{children:r}),Object(u.jsxs)(O.a,{className:"border-0 justify-content-start",children:[Object(u.jsx)(i.a,{color:"primary",onClick:a,children:"Save Updates"})," ",Object(u.jsx)(p.b,{to:c||"#",className:"text-primary",onClick:a,children:"cancel"})," "]})]})]})},g=a(245),N=a(248),y=a(244),k=a(159),w=function(e){var t=function(t){t.persist(),e.setUserBasicInfo(t.target.value,t.target.name)};return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)(g.a,{row:!0,children:[Object(u.jsx)(N.a,{for:"exampetext",sm:3,children:"First name :"}),Object(u.jsx)(y.a,{sm:9,children:Object(u.jsx)(k.a,{type:"text",name:"firstName",id:"exampleEmail",placeholder:"Please insert your first name",onChange:t,className:"border-top-0 border-left-0 border-right-0 boder-bottom"})})]}),Object(u.jsxs)(g.a,{row:!0,children:[Object(u.jsx)(N.a,{for:"exampetext",sm:3,children:"Last name :"}),Object(u.jsx)(y.a,{sm:9,children:Object(u.jsx)(k.a,{type:"text",name:"lastName",id:"exampleEmail",placeholder:"Please insert your last name",onChange:t,className:"border-top-0 border-left-0 border-right-0 boder-bottom"})})]}),Object(u.jsxs)(g.a,{row:!0,children:[Object(u.jsx)(N.a,{for:"exampetext",sm:3,children:"Job title :"}),Object(u.jsx)(y.a,{sm:9,children:Object(u.jsx)(k.a,{type:"text",name:"jobTitle",id:"exampleEmail",placeholder:"Please insert your job title",onChange:t,className:"border-top-0 border-left-0 border-right-0 boder-bottom"})})]}),Object(u.jsxs)(g.a,{row:!0,children:[Object(u.jsx)(N.a,{for:"exampleEmail",sm:3,children:"Location :"}),Object(u.jsx)(y.a,{sm:9,children:Object(u.jsx)(k.a,{type:"text",name:"location",id:"exampleEmail",onChange:t,placeholder:"Please insert your location",className:"border-top-0 border-left-0 border-right-0 boder-bottom"})})]})]})},v=function(e){console.log(e);return Object(u.jsxs)(g.a,{row:!0,children:[Object(u.jsx)(N.a,{for:"exampleText",sm:3,children:"Write Yourself:"}),Object(u.jsx)(y.a,{sm:9,children:Object(u.jsx)(k.a,{type:"textarea",name:"aboutMe",id:"exampleText",placeholder:"Write YourSelf",className:"border-top-0 border-left-0 border-right-0 boder-bottom",onChange:function(t){t.persist(),e.setUserAboutMe(t.target.value,t.target.name)}})})]})},T=function(){return Object(u.jsxs)(g.a,{row:!0,children:[Object(u.jsx)(N.a,{for:"exampleEmail",sm:3,children:"Video Link :"}),Object(u.jsx)(y.a,{sm:9,children:Object(u.jsx)(k.a,{type:"text",name:"videolink",id:"exampleEmail",placeholder:"Youtube Url Or Browse Link",className:"border-top-0 border-left-0 border-right-0 boder-bottom"})})]})},C=function(){return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)(g.a,{row:!0,children:[Object(u.jsx)(N.a,{for:"exampleText",sm:3,children:"Gallery 01:"}),Object(u.jsxs)(y.a,{sm:9,children:[Object(u.jsx)(k.a,{type:"text",name:"text",id:"exampleText",placeholder:"Title",className:"border-top-0 border-left-0 border-right-0 boder-bottom"}),Object(u.jsx)(k.a,{type:"text",name:"text",id:"exampleText",placeholder:"Link",className:"border-top-0 border-left-0 border-right-0 boder-bottom"}),Object(u.jsx)(N.a,{for:"exampleFile",className:"text-muted m-3",children:"Image"}),Object(u.jsx)(k.a,{type:"file",name:"file",id:"exampleFile"})]})]}),Object(u.jsxs)(g.a,{row:!0,children:[Object(u.jsx)(N.a,{for:"exampleText",sm:3,children:"Gallery 02:"}),Object(u.jsxs)(y.a,{sm:9,children:[Object(u.jsx)(k.a,{type:"text",name:"text",id:"exampleText",placeholder:"Title",className:"border-top-0 border-left-0 border-right-0 boder-bottom"}),Object(u.jsx)(k.a,{type:"text",name:"text",id:"exampleText",placeholder:"Link",className:"border-top-0 border-left-0 border-right-0 boder-bottom"}),Object(u.jsx)(N.a,{for:"exampleFile",className:"text-muted m-3",children:"Image"}),Object(u.jsx)(k.a,{type:"file",name:"file",id:"exampleFile"})]})]})]})};t.a=function(e){var t=e.title,a=e.action,d=e.children,m=e.className,x=e.modalName,h=Object(c.useState)(!1),O=Object(r.a)(h,2),p=O[0],g=O[1],N=function(){return g(!p)},y=Object(c.useState)("Write Yourself:"),k=Object(r.a)(y,2),E=(k[0],k[1],function(t,a){e.setAboutMe(t,a)});return Object(u.jsxs)(s.a,{className:"".concat(m&&m),children:[Object(u.jsxs)(l.a,{tag:"h6",className:"d-flex justify-content-between align-items-center bg-primary",children:[Object(u.jsx)(o.a,{className:"m-0 text-white p-2",children:t}),a&&Object(u.jsxs)(i.a,{size:"sm",onClick:N,className:"btn-icon text-white",color:"link",children:["basic"===x&&Object(u.jsx)(f,{modal:p,toggle:N,title:"basic information",children:Object(u.jsx)(w,{setUserBasicInfo:E})}),"about"===x&&Object(u.jsx)(f,{modal:p,toggle:N,title:"About us",children:Object(u.jsx)(v,{setUserAboutMe:E})}),"videoLink"===x&&Object(u.jsx)(f,{modal:p,toggle:N,title:"Intro video",children:Object(u.jsx)(T,{})}),"gallery"===x&&Object(u.jsx)(f,{modal:p,toggle:N,title:"Intro video",children:Object(u.jsx)(C,{})}),Object(u.jsx)(j.a,{icon:b.c})]})]}),d&&Object(u.jsx)(n.a,{children:d})]})}},468:function(e,t,a){"use strict";a(0);var r=a(459),c=a(19),s=a(1);t.a=function(e){var t=e.icon,a=e.title,l=e.description,o=e.className;return Object(s.jsxs)(r.a,{className:"d-flex p-1 ".concat(o),children:[Object(s.jsx)(c.a,{className:"mt-2 text-primary",icon:t}),Object(s.jsxs)("div",{className:"ml-4 pb-4",children:[Object(s.jsx)("p",{className:"m-0 d-block",children:a}),Object(s.jsx)("span",{className:"m-0 d-block text-muted",children:l})]})]})}},669:function(e,t,a){"use strict";a.r(t);a(0);var r=a(151),c=a(11),s=a(436),l=a(244),o=a(458),i=a(16),n=a(467),j=a(468),b=a(1),d=function(e){var t=[{icon:i.i,title:"Job title:",description:e.user.jobTitle},{icon:i.D,title:"Location:",description:e.user.location}],a=[{icon:i.p,title:"Email:",description:e.user.email}];return Object(b.jsx)(n.a,{modalName:"basic",title:"Basic information",action:!0,className:"mb-5",children:Object(b.jsxs)(s.a,{children:[Object(b.jsx)(l.a,{lg:6,children:Object(b.jsx)(o.a,{children:t&&t.map((function(e,t){return Object(b.jsx)(j.a,Object(c.a)({},e),t)}))})}),Object(b.jsx)(l.a,{lg:6,children:Object(b.jsx)(o.a,{children:a&&a.map((function(e,t){return Object(b.jsx)(j.a,Object(c.a)({},e),t)}))})})]})})},m=function(e){return Object(b.jsx)(n.a,{title:"About me",action:!0,className:"mb-5",modalName:"about",children:Object(b.jsx)("p",{children:e.user.aboutMe})})};a(459),a(19),i.w,i.w,i.w,i.w,i.w,i.k,i.k,i.k,i.k,t.default=function(e){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(d,{user:e.user}),Object(b.jsx)(m,{user:e.user}),Object(b.jsx)(r.a,{color:"primary",type:"submit",className:"outline-hover--effect",children:"Save changes"})]})}}}]);
//# sourceMappingURL=29.2c8d1c92.chunk.js.map