(this.webpackJsonpmyblog=this.webpackJsonpmyblog||[]).push([[0],{124:function(e,t){},142:function(e,t,s){"use strict";s.r(t);var a=s(0),i=s.n(a),n=s(19),c=s.n(n),r=(s(70),s(71),s(17)),l=s(1);function o(){var e=window.location.host+"/";return Object(l.jsx)("div",{children:Object(l.jsx)("nav",{className:"navbar navbar-expand-lg navbar-dark sticky-top bg-secondary",children:Object(l.jsxs)("div",{className:"container-fluid",children:[Object(l.jsx)(r.b,{className:"navbar-brand",to:"/blog/",children:"Imran's Blog"}),Object(l.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(l.jsx)("span",{className:"navbar-toggler-icon"})}),Object(l.jsx)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:Object(l.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:[Object(l.jsx)("li",{className:"nav-item",children:Object(l.jsx)(r.b,{className:"nav-link active","aria-current":"page",to:"/blog/",children:"Home"})}),Object(l.jsx)("li",{className:"nav-item",children:Object(l.jsx)("a",{className:"nav-link",href:e,children:"About Me"})})]})})]})})})}function u(){return Object(l.jsx)("div",{children:Object(l.jsx)("header",{id:"header",className:"bg-gray-500 dark:bg-gray-800",children:Object(l.jsx)("h2",{className:"font-sans antialiased leading-10 tracking-wider text-center align-middle text-5xl sm:text-6xl md:text-8xl text-gray-200",children:"Imran's Blog"})})})}var m=s(27),d=s(28),b=s(31),x=s(30);function p(e){var t=e.post,s="/blog/".concat(t.slug);return Object(l.jsx)("div",{children:Object(l.jsxs)(r.b,{to:s,className:"no-underline  flex flex-row",children:[Object(l.jsx)("img",{src:"https://i.ibb.co/kDcGv5D/sb-blog-programming.jpg",className:"h-auto max-h-36 max-h-36 w-1/5 object-center object-contain",alt:"sb-blog-programming",border:"0"}),Object(l.jsxs)("div",{className:"flex-auto",children:[Object(l.jsx)("h2",{className:"pt-2 pl-5 pr-5 pb-2 font-serif tracking-wide leading-5 text-2xl sm:text-4xl md:text-5xl text-black hover:text-blue-800",children:t.title}),Object(l.jsxs)("h4",{className:"pl-5 pb-2 text-gray-700 text-xs sm:text-sm md:text-md",children:[Object(l.jsx)("span",{className:"italic text-gray-600",children:"Created at:"})," ",t.timestamp]})]})]})})}var h=s(21),j=s.n(h),g=s(158),v=s(143),f=function(e){Object(b.a)(s,e);var t=Object(x.a)(s);function s(e){var a;return Object(m.a)(this,s),(a=t.call(this,e)).next=function(){console.log("To next");var e=a.state.next,t=Math.min(a.state.length,a.state.last+a.state.step),s=a.state.first,i=t===a.state.length?-1:t+1,n=a.state.allPosts.slice(e-1,t);a.setState({first:e,last:t,prev:s,next:i,posts:n})},a.previous=function(){var e=a.state.prev,t=a.state.first-1,s=a.state.first,i=e<=0?-1:e-a.state.step;console.log(e,t,i,s);var n=a.state.allPosts.slice(e,t);a.setState({first:e,last:t,prev:i,next:s,posts:n})},a.state={posts:[],allPosts:[],step:6,first:0,last:0,prev:-1,next:-1,length:0},a}return Object(d.a)(s,[{key:"componentDidMount",value:function(){var e=this,t=window.location.href;j.a.defaults.withCredentials=!0,j.a.get(t+"api/all/").then((function(t){var s=t.data,a=s.slice(0,e.state.step),i=e.state.step,n=s.length,c=Math.min(n,i+1);c===n&&(c=-1),e.setState({allPosts:s,posts:a,last:i,length:n,next:c})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){return Object(l.jsx)("div",{children:Object(l.jsx)("div",{className:"body",children:Object(l.jsxs)("div",{className:"container",children:[Object(l.jsx)("ul",{className:"blog-list m-10 shadow pl-0.5 pr-0.5",children:this.state.posts.map((function(e){return Object(l.jsx)("li",{className:"mt-2 mb-0.5 shadow-sm rounded hover:bg-gray-100",children:Object(l.jsx)(p,{post:e})},e.id)}))}),Object(l.jsxs)(g.a,{variant:"contained",color:"primary",size:"large",children:[-1!==this.state.prev&&Object(l.jsx)(v.a,{style:{minHeight:"70px",minWidth:"320px",maxHeight:"60px",maxWidth:"320px"},onClick:this.previous,children:"Previous"}),-1===this.state.prev&&Object(l.jsx)(v.a,{disabled:!0,style:{minHeight:"70px",minWidth:"320px",maxHeight:"60px",maxWidth:"320px"},children:"Previous"}),-1!==this.state.next&&Object(l.jsx)(v.a,{style:{minHeight:"70px",minWidth:"320px",maxHeight:"60px",maxWidth:"320px"},onClick:this.next,children:"Next"}),-1===this.state.next&&Object(l.jsx)(v.a,{disabled:!0,style:{minHeight:"70px",minWidth:"320px",maxHeight:"60px",maxWidth:"320px"},children:"Next"})]})]})})})}}]),s}(a.Component);function O(){return Object(l.jsxs)("div",{children:[Object(l.jsx)(u,{}),Object(l.jsx)(f,{})]})}function y(e){var t=e.post,s=t.timestamp.split("-"),a=new Date(s[0],s[1]-1,s[2]);return console.log(a.toDateString()),Object(l.jsx)("div",{children:Object(l.jsxs)("header",{style:{height:"400px",background:"linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),\n          url(https://i.ibb.co/kDcGv5D/sb-blog-programming.jpg)",objectFit:"center",backgroundSize:"cover"},className:"bg-gray-500 dark:bg-gray-800",children:[Object(l.jsx)("h2",{style:{transform:"translate(0, 180px)"},className:"font-sans antialiased leading-10 tracking-wider text-center align-middle text-4xl sm:text-5xl md:text-6xl text-gray-200",children:t.title}),Object(l.jsxs)("h4",{style:{transform:"translate(0, 200px)"},className:"pl-5 pb-2 text-center text-gray-300 text-xs sm:text-sm md:text-md",children:[Object(l.jsx)("span",{className:"italic text-gray-400",children:"Created at:"})," ",a.toDateString()]})]})})}var N=s(63),q=s.n(N);function w(e){return Object(l.jsx)("div",{children:Object(l.jsxs)("div",{className:"body",style:{textAlign:"left"},children:[Object(l.jsx)("div",{className:"container shadow pl-3 pr-3 pt-5 pb-5 mt-3 mb-3 mr-auto ml-auto",children:Object(l.jsx)("div",{children:q()(e.text)})}),Object(l.jsxs)("div",{className:"container",children:[Object(l.jsx)("div",{id:"disqus_thread"}),Object(l.jsx)("script",{children:function(){var e=document,t=e.createElement("script");t.src="https://imran-blog.disqus.com/embed.js",t.setAttribute("data-timestamp",+new Date),(e.head||e.body).appendChild(t)}()}),Object(l.jsxs)("noscript",{children:["Please enable JavaScript to view the"," ",Object(l.jsx)("a",{href:"https://disqus.com/?ref_noscript",children:"comments powered by Disqus."})]})]})]})})}var k=function(e){Object(b.a)(s,e);var t=Object(x.a)(s);function s(e){var a;return Object(m.a)(this,s),(a=t.call(this,e)).state={post:{id:"",title:"",slug:"",timestamp:"",content:""},text:"<style>\n        h2 {\n            text-align: center;\n        }\n      </style>\n      <h1> This is a heading</h1> \n            <h2> Sample heading  <h2>\n             <p style='font-size: 18px; color: gray;'>Lorem ipsum <strong>dolor</strong> sit amet, consectetur adipiscing elit. Integer vitae luctus justo. Quisque viverra ante semper aliquam pretium. Pellentesque ac commodo ex. Integer scelerisque vehicula fringilla. Suspendisse potenti. Phasellus lorem nisl, facilisis vitae molestie non, facilisis nec massa. Curabitur ac fermentum odio. Nulla a lacinia tortor, quis mattis nunc. Etiam pharetra diam in risus elementum sollicitudin. Maecenas ut ante consequat, finibus tellus sit amet, pretium nunc. Praesent condimentum pellentesque sem a sodales. Aliquam pellentesque nec magna at ullamcorper. Nulla eu accumsan quam, quis euismod justo. Sed feugiat venenatis ex vel elementum. Fusce quam est, mollis a libero sit amet, porta convallis erat.  \n             Fusce dapibus sed dolor quis feugiat. Nunc gravida diam ullamcorper, accumsan magna sed, imperdiet mauris. Aenean ipsum est, cursus a nisl et, semper porta lacus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vulputate ex quis gravida luctus. Proin eget tincidunt nibh. Nullam tincidunt feugiat ultricies. Maecenas magna sapien, maximus vitae sapien non, auctor iaculis nisi. Nam condimentum pretium nulla quis ornare. Quisque feugiat lobortis nisi eu dignissim. Nulla vel facilisis purus. Nunc eu diam nec leo pellentesque ultricies. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin rhoncus tellus eu dolor tristique, ut tincidunt lorem venenatis.  \n             Morbi hendrerit, nulla a euismod dictum, urna nibh accumsan augue, a malesuada lacus sapien in turpis.</p>\n             <p style='font-size: 18px; color: gray;'>Fusce in ligula sit amet justo elementum condimentum at et nunc. Ut scelerisque pretium sapien, eu venenatis enim tristique a. Quisque et condimentum metus, ac semper ex. Pellentesque orci magna, rutrum in mauris eget, feugiat gravida magna. Vestibulum eget euismod urna, quis sagittis ex. Etiam in nisl auctor, commodo nulla vel, facilisis dui. Vivamus non ultrices enim, a ornare dui. Fusce malesuada enim sed fringilla aliquam. Vivamus consectetur quis purus in dictum. Curabitur ligula ante, volutpat eget varius id, auctor eget erat. Quisque condimentum erat a ex feugiat commodo. Nullam facilisis sem at eros dictum aliquet. Sed sed diam sed justo maximus auctor sed tempor eros. Donec id felis facilisis, finibus turpis at, pretium arcu. Curabitur nisi lacus, venenatis sit amet metus quis, accumsan vestibulum est. Vivamus eget est dui. Aenean sem nibh, rhoncus quis tortor aliquet, vehicula lobortis mi. Etiam eleifend urna nec justo sollicitudin efficitur. Vestibulum vitae augue massa. Aenean sem nisi, auctor et odio sed, lobortis eleifend purus. Praesent ante velit, viverra vitae erat vitae, euismod sollicitudin sapien. Donec felis sem, pulvinar quis finibus vitae, aliquet sit amet enim. Cras luctus egestas neque, vitae faucibus mi vulputate sit amet. Donec volutpat ex ultricies risus ornare venenatis. Curabitur eget felis orci.</p>\n             "},a}return Object(d.a)(s,[{key:"componentDidMount",value:function(){var e=this,t=window.location.href;window.location.host;console.log(t);var s=t.slice(27,t.length);s="/article/api/"+s,console.log(s),j.a.defaults.withCredentials=!0,j.a.get(s).then((function(t){var s=t.data;e.setState({post:s})})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){return Object(l.jsxs)("div",{children:[Object(l.jsx)(y,{post:this.state.post}),Object(l.jsx)(w,{text:this.state.post.content})]})}}]),s}(a.Component);function C(){return Object(l.jsx)("div",{children:Object(l.jsx)("footer",{className:"bg-gray-300 mb-0 mt-5 pt-2 pb-2 object-bottom sticky-bottom",children:Object(l.jsxs)("p",{className:"pt-2 text-center text-xs text-gray-600",children:["Designed by"," ",Object(l.jsxs)("span",{className:"text-gray-700",children:[Object(l.jsx)("span",{className:"text-green-600",children:"\u2022"})," Shah Habibul Imran"]})]})})})}var S=s(4);var D=function(){return Object(l.jsx)("div",{className:"App",children:Object(l.jsxs)(r.a,{children:[Object(l.jsx)(o,{}),Object(l.jsxs)(S.c,{children:[Object(l.jsx)(S.a,{exact:!0,path:"/blog",children:Object(l.jsx)(O,{})}),Object(l.jsx)(S.a,{path:"/blog/:str",children:Object(l.jsx)(k,{})})]}),Object(l.jsx)(C,{})]})})},P=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,159)).then((function(t){var s=t.getCLS,a=t.getFID,i=t.getFCP,n=t.getLCP,c=t.getTTFB;s(e),a(e),i(e),n(e),c(e)}))};c.a.render(Object(l.jsx)(i.a.StrictMode,{children:Object(l.jsx)(D,{})}),document.getElementById("root")),P()},70:function(e,t,s){},71:function(e,t,s){}},[[142,1,2]]]);
//# sourceMappingURL=main.ffb66f61.chunk.js.map