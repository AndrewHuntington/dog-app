(this["webpackJsonpdog-finder"]=this["webpackJsonpdog-finder"]||[]).push([[0],{32:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){},46:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),c=a(23),r=a.n(c),i=(a(45),a(31),a(13)),o=(a(32),a(1)),l=a(5),d=a(3),b=a(4),j=a(7),u=a(6),m=a(2),h=function(e){Object(j.a)(a,e);var t=Object(u.a)(a);function a(){return Object(d.a)(this,a),t.apply(this,arguments)}return Object(b.a)(a,[{key:"render",value:function(){var e=this.props.dogs.map((function(e){return Object(m.jsx)("li",{className:"nav-item",children:Object(m.jsx)(i.c,{className:"nav-link",activeClassName:"active",to:"/dogs/".concat(e.name),children:e.name})},e.name)}));return Object(m.jsx)("div",{children:Object(m.jsx)("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark",children:Object(m.jsxs)("div",{className:"container-fluid",children:[Object(m.jsx)(i.b,{className:"navbar-brand",to:"/dogs",children:"Dog Shelter"}),Object(m.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(m.jsx)("span",{className:"navbar-toggler-icon"})}),Object(m.jsx)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:Object(m.jsx)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:e})})]})})})}}]),a}(n.Component),g=a(26),p=a(19),O=(a(42),function(e){Object(j.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).handleClick=n.handleClick.bind(Object(p.a)(n)),n}return Object(b.a)(a,[{key:"findDog",value:function(e){var t,a=Object(g.a)(this.props.dogs);try{for(a.s();!(t=a.n()).done;){var n=t.value;if(n.name===e)return n}}catch(s){a.e(s)}finally{a.f()}return null}},{key:"handleClick",value:function(){this.props.history.push("/dogs")}},{key:"render",value:function(){var e=this.props.match.params.name,t=this.findDog(e);if(!t)return Object(m.jsx)(l.a,{to:"/dogs"});var a=t.facts.map((function(e){return Object(m.jsx)("li",{className:"list-group-item",children:e},Date.now()+Math.random())}));return Object(m.jsxs)("div",{className:"DogDisplay-card card mx-auto my-4",children:[Object(m.jsx)("img",{src:t.src,className:"card-img-top",alt:"dog pic"}),Object(m.jsxs)("div",{className:"card-body",children:[Object(m.jsx)("h5",{className:"card-title",children:t.name}),Object(m.jsx)("h6",{className:"card-subtitle mb-2 text-muted",children:"".concat(t.age," years old")})]}),Object(m.jsxs)("ul",{className:"list-group list-group-flush",children:[a,Object(m.jsx)("li",{className:"list-group-item",children:Object(m.jsx)("button",{className:"btn btn-primary",onClick:this.handleClick,children:"Go back"})})]})]})}}]),a}(n.Component)),f=(a(43),function(e){Object(j.a)(a,e);var t=Object(u.a)(a);function a(){return Object(d.a)(this,a),t.apply(this,arguments)}return Object(b.a)(a,[{key:"render",value:function(){var e=this.props.dogs.map((function(e){return Object(m.jsx)("div",{className:"Menu-item",children:Object(m.jsxs)(i.b,{to:"/dogs/".concat(e.name),dog:e,className:"Menu-link",children:[Object(m.jsx)("img",{src:e.src,className:"Menu-img img-fluid rounded-circle",alt:"".concat(e.name)}),Object(m.jsx)("p",{children:e.name})]})},e.name)}));return Object(m.jsxs)("div",{className:"Menu d-flex justify-content-center flex-column mx-auto",children:[Object(m.jsx)("h1",{className:"Menu-title display-1 my-4",children:"Click a Dog!"}),Object(m.jsx)("div",{className:"Menu-dogs d-flex justify-content-sm-around flex-column flex-sm-row align-items-center",children:e})]})}}]),a}(n.Component)),x=a.p+"static/media/hazel.56f12732.jpg",v=a.p+"static/media/tubby.9c06bf82.jpg",y=a.p+"static/media/whiskey.7650f3f2.jpg";a(44);function N(e){return Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)(h,{dogs:e.dogs}),Object(m.jsxs)(l.d,{children:[Object(m.jsx)(l.b,{exact:!0,path:"/dogs",render:function(t){return Object(m.jsx)(f,Object(o.a)(Object(o.a)({},t),{},{dogs:e.dogs}))}}),Object(m.jsx)(l.b,{path:"/dogs/:name",render:function(t){return Object(m.jsx)(O,Object(o.a)(Object(o.a)({},t),{},{dogs:e.dogs}))}}),Object(m.jsx)(l.a,{to:"/dogs"})]})]})}N.defaultProps={dogs:[{name:"Whiskey",age:5,src:y,facts:["Whiskey loves eating popcorn.","Whiskey is a terrible guard dog.","Whiskey wants to cuddle with you!"]},{name:"Hazel",age:3,src:x,facts:["Hazel has soooo much energy!","Hazel is highly intelligent.","Hazel loves people more than dogs."]},{name:"Tubby",age:4,src:v,facts:["Tubby is not the brightest dog","Tubby does not like walks or exercise.","Tubby loves eating food."]}]};var k=N,C=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,49)).then((function(t){var a=t.getCLS,n=t.getFID,s=t.getFCP,c=t.getLCP,r=t.getTTFB;a(e),n(e),s(e),c(e),r(e)}))};r.a.render(Object(m.jsx)(s.a.StrictMode,{children:Object(m.jsx)(i.a,{children:Object(m.jsx)(k,{})})}),document.getElementById("root")),C()}},[[46,1,2]]]);
//# sourceMappingURL=main.90263277.chunk.js.map