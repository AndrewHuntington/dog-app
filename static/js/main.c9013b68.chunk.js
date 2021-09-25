(this["webpackJsonpdog-finder"]=this["webpackJsonpdog-finder"]||[]).push([[0],{32:function(e,a,t){},42:function(e,a,t){},43:function(e,a,t){},44:function(e,a,t){},46:function(e,a,t){"use strict";t.r(a);var n=t(0),s=t.n(n),c=t(23),r=t.n(c),i=(t(45),t(31),t(13)),o=(t(32),t(1)),l=t(5),d=t(3),b=t(4),j=t(7),u=t(6),g=t(2),p=function(e){Object(j.a)(t,e);var a=Object(u.a)(t);function t(){return Object(d.a)(this,t),a.apply(this,arguments)}return Object(b.a)(t,[{key:"render",value:function(){var e=this.props.dogs.map((function(e){return Object(g.jsx)("li",{className:"nav-item",children:Object(g.jsx)(i.c,{className:"nav-link",activeClassName:"active",to:"dog-app/dogs/".concat(e.name),children:e.name})},e.name)}));return Object(g.jsx)("div",{children:Object(g.jsx)("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark",children:Object(g.jsxs)("div",{className:"container-fluid",children:[Object(g.jsx)(i.b,{className:"navbar-brand",to:"dog-app/dogs",children:"Dog Shelter"}),Object(g.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(g.jsx)("span",{className:"navbar-toggler-icon"})}),Object(g.jsx)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:Object(g.jsx)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:e})})]})})})}}]),t}(n.Component),m=t(26),h=t(19),O=(t(42),function(e){Object(j.a)(t,e);var a=Object(u.a)(t);function t(e){var n;return Object(d.a)(this,t),(n=a.call(this,e)).handleClick=n.handleClick.bind(Object(h.a)(n)),n}return Object(b.a)(t,[{key:"findDog",value:function(e){var a,t=Object(m.a)(this.props.dogs);try{for(t.s();!(a=t.n()).done;){var n=a.value;if(n.name===e)return n}}catch(s){t.e(s)}finally{t.f()}return null}},{key:"handleClick",value:function(){this.props.history.push("dog-app/dogs")}},{key:"render",value:function(){var e=this.props.match.params.name,a=this.findDog(e);if(!a)return Object(g.jsx)(l.a,{to:"dog-app/dogs"});var t=a.facts.map((function(e){return Object(g.jsx)("li",{className:"list-group-item",children:e},Date.now()+Math.random())}));return Object(g.jsxs)("div",{className:"DogDisplay-card card mx-auto my-4",children:[Object(g.jsx)("img",{src:a.src,className:"card-img-top",alt:"dog pic"}),Object(g.jsxs)("div",{className:"card-body",children:[Object(g.jsx)("h5",{className:"card-title",children:a.name}),Object(g.jsx)("h6",{className:"card-subtitle mb-2 text-muted",children:"".concat(a.age," years old")})]}),Object(g.jsxs)("ul",{className:"list-group list-group-flush",children:[t,Object(g.jsx)("li",{className:"list-group-item",children:Object(g.jsx)("button",{className:"btn btn-primary",onClick:this.handleClick,children:"Go back"})})]})]})}}]),t}(n.Component)),f=(t(43),function(e){Object(j.a)(t,e);var a=Object(u.a)(t);function t(){return Object(d.a)(this,t),a.apply(this,arguments)}return Object(b.a)(t,[{key:"render",value:function(){var e=this.props.dogs.map((function(e){return Object(g.jsx)("div",{className:"Menu-item",children:Object(g.jsxs)(i.b,{to:"dog-app/dogs/".concat(e.name),dog:e,className:"Menu-link",children:[Object(g.jsx)("img",{src:e.src,className:"Menu-img img-fluid rounded-circle",alt:"".concat(e.name)}),Object(g.jsx)("p",{children:e.name})]})},e.name)}));return Object(g.jsxs)("div",{className:"Menu d-flex justify-content-center flex-column mx-auto",children:[Object(g.jsx)("h1",{className:"Menu-title display-1 my-4",children:"Click a Dog!"}),Object(g.jsx)("div",{className:"Menu-dogs d-flex justify-content-sm-around flex-column flex-sm-row align-items-center",children:e})]})}}]),t}(n.Component)),x=t.p+"static/media/hazel.56f12732.jpg",v=t.p+"static/media/tubby.9c06bf82.jpg",y=t.p+"static/media/whiskey.7650f3f2.jpg";t(44);function N(e){return Object(g.jsxs)("div",{className:"App",children:[Object(g.jsx)(p,{dogs:e.dogs}),Object(g.jsxs)(l.d,{children:[Object(g.jsx)(l.b,{exact:!0,path:"dog-app/dogs",render:function(a){return Object(g.jsx)(f,Object(o.a)(Object(o.a)({},a),{},{dogs:e.dogs}))}}),Object(g.jsx)(l.b,{path:"dog-app/dogs/:name",render:function(a){return Object(g.jsx)(O,Object(o.a)(Object(o.a)({},a),{},{dogs:e.dogs}))}}),Object(g.jsx)(l.a,{to:"dog-app/dogs"})]})]})}N.defaultProps={dogs:[{name:"Whiskey",age:5,src:y,facts:["Whiskey loves eating popcorn.","Whiskey is a terrible guard dog.","Whiskey wants to cuddle with you!"]},{name:"Hazel",age:3,src:x,facts:["Hazel has soooo much energy!","Hazel is highly intelligent.","Hazel loves people more than dogs."]},{name:"Tubby",age:4,src:v,facts:["Tubby is not the brightest dog","Tubby does not like walks or exercise.","Tubby loves eating food."]}]};var k=N,C=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,49)).then((function(a){var t=a.getCLS,n=a.getFID,s=a.getFCP,c=a.getLCP,r=a.getTTFB;t(e),n(e),s(e),c(e),r(e)}))};r.a.render(Object(g.jsx)(s.a.StrictMode,{children:Object(g.jsx)(i.a,{children:Object(g.jsx)(k,{})})}),document.getElementById("root")),C()}},[[46,1,2]]]);
//# sourceMappingURL=main.c9013b68.chunk.js.map