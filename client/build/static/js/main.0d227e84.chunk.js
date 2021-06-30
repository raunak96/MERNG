(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{67:function(t,e,n){},74:function(t,e,n){"use strict";n.r(e);var s,r,o,a,c,l,i,d,b,u,j,m=n(47),x=n.n(m),p=n(19),h=n(54),O=n(85),f=n(84),g=n(26),v=n(87),y=n(48),w=function(){var t=localStorage.getItem("token");if(!t)return null;var e=Object(y.a)(t);return 1e3*e.exp<Date.now()?(localStorage.removeItem("token"),null):e},N=Object(g.c)(w()),k=new v.a({typePolicies:{Query:{fields:{currentUser:{read:function(){return N()}}}},Post:{fields:{likes:{merge:function(){var t=arguments.length>1?arguments[1]:void 0;return t}},comments:{merge:function(){var t=arguments.length>1?arguments[1]:void 0;return t}}}}}}),I=n(51),C=n(0),P=Object(h.a)({uri:"/graphql"}),S=Object(I.a)((function(t,e){var n=e.headers,s=localStorage.getItem("token");return{headers:Object(p.a)(Object(p.a)({},n),{},{authorization:s?"Bearer ".concat(s):""})}})),$=new O.a({link:S.concat(P),cache:k}),A=function(t){var e=t.children;return Object(C.jsx)(f.a,{client:$,children:e})},D=(n(67),n(7)),L=n(56),M=n(88),F=n(11),z=n(86),E=Object(z.a)(s||(s=Object(F.a)(["\n\tquery getPosts {\n\t\tgetPosts {\n\t\t\tid\n\t\t\tbody\n\t\t\tcreatedAt\n\t\t\tusername\n\t\t\tcomments {\n\t\t\t\tid\n\t\t\t\tbody\n\t\t\t\tusername\n\t\t\t\tcreatedAt\n\t\t\t}\n\t\t\tcommentsCount\n\t\t\tlikes {\n\t\t\t\tusername\n\t\t\t}\n\t\t\tlikesCount\n\t\t}\n\t}\n"]))),U=Object(z.a)(r||(r=Object(F.a)(["\n\tquery getPost($postId: ID!) {\n\t\tgetPost(postId: $postId) {\n\t\t\tid\n\t\t\tbody\n\t\t\tcreatedAt\n\t\t\tusername\n\t\t\tlikesCount\n\t\t\tlikes {\n\t\t\t\tusername\n\t\t\t}\n\t\t\tcommentsCount\n\t\t\tcomments {\n\t\t\t\tid\n\t\t\t\tusername\n\t\t\t\tcreatedAt\n\t\t\t\tbody\n\t\t\t}\n\t\t}\n\t}\n"]))),B=Object(z.a)(o||(o=Object(F.a)(["\n\tquery getCurrentUser {\n\t\tcurrentUser @client\n\t}\n"]))),T=function(t){var e=t.children,n=Object(L.a)(t,["children"]),s=Object(M.a)(B).data;return Object(C.jsx)(D.b,Object(p.a)(Object(p.a)({},n),{},{render:function(t){return s.currentUser?Object(C.jsx)(D.a,{to:"/"}):e}}))},H=n(2),R=n(13),V=function(){var t=Object(M.a)(B).data,e=Object(D.g)(),n=Object(H.useMemo)((function(){return{opacity:1,textDecoration:"underline",fontWeight:"bold"}}),[]);return Object(C.jsxs)("div",{className:"sticky top-0 py-4 px-4 bg-green-500 text-white flex justify-between items-center z-50",children:[Object(C.jsx)("div",{children:Object(C.jsx)(R.c,{exact:!0,to:"/",className:"opacity-80 hover:opacity-100 hover:underline hover:font-bold",activeStyle:n,children:"Home"})}),t.currentUser?Object(C.jsxs)("div",{className:"flex space-x-2",children:[Object(C.jsxs)("div",{className:"mr-3 opacity-80 hover:opacity-100 hover:font-bold",children:["Welcome ",t.currentUser.username," !"]}),Object(C.jsx)("button",{onClick:function(){localStorage.removeItem("token"),N(null),e.push("/")},className:"mr-3 opacity-80 hover:opacity-100 hover:underline hover:font-bold",children:"Logout"})]}):Object(C.jsxs)("div",{children:[Object(C.jsx)(R.c,{exact:!0,to:"/login",className:"mr-3 opacity-80 hover:opacity-100 hover:underline hover:font-bold",activeStyle:n,children:"Login"}),Object(C.jsx)(R.c,{exact:!0,to:"/register",className:"mr-2 opacity-80 hover:opacity-100 hover:underline hover:font-bold",activeStyle:n,children:"Register"})]})]})},q=n(25),W=n.n(q),Q=n(14),J=n(90),G=Object(z.a)(a||(a=Object(F.a)(["\n\tmutation register($username: String!, $email: String!, $password: String!) {\n\t\tregister(\n\t\t\tregisterInput: {\n\t\t\t\tusername: $username\n\t\t\t\temail: $email\n\t\t\t\tpassword: $password\n\t\t\t}\n\t\t) {\n\t\t\tid\n\t\t\tusername\n\t\t\temail\n\t\t\tcreatedAt\n\t\t\ttoken\n\t\t}\n\t}\n"]))),K=Object(z.a)(c||(c=Object(F.a)(["\n\tmutation login($username: String!, $password: String!) {\n\t\tlogin(username: $username, password: $password) {\n\t\t\tid\n\t\t\tusername\n\t\t\temail\n\t\t\tcreatedAt\n\t\t\ttoken\n\t\t}\n\t}\n"]))),X=Object(z.a)(l||(l=Object(F.a)(["\n\tmutation createPost($body: String!) {\n\t\tcreatePost(body: $body) {\n\t\t\tid\n\t\t\tbody\n\t\t\tcreatedAt\n\t\t\tusername\n\t\t\tlikes {\n\t\t\t\tid\n\t\t\t\tusername\n\t\t\t\tcreatedAt\n\t\t\t}\n\t\t\tlikesCount\n\t\t\tcomments {\n\t\t\t\tid\n\t\t\t\tbody\n\t\t\t\tusername\n\t\t\t\tcreatedAt\n\t\t\t}\n\t\t\tcommentsCount\n\t\t}\n\t}\n"]))),Y=Object(z.a)(i||(i=Object(F.a)(["\n\tmutation deletePost($postId: ID!) {\n\t\tdeletePost(postId: $postId)\n\t}\n"]))),Z=Object(z.a)(d||(d=Object(F.a)(["\n\tmutation likePost($postId: ID!) {\n\t\tlikePost(postId: $postId) {\n\t\t\tid\n\t\t\tlikes {\n\t\t\t\tid\n\t\t\t\tusername\n\t\t\t}\n\t\t\tlikesCount\n\t\t}\n\t}\n"]))),_=Object(z.a)(b||(b=Object(F.a)(["\n\tmutation deleteComment($postId: ID!, $commentId: ID!) {\n\t\tdeleteComment(postId: $postId, commentId: $commentId) {\n\t\t\tid\n\t\t\tcomments {\n\t\t\t\tid\n\t\t\t\tusername\n\t\t\t\tcreatedAt\n\t\t\t\tbody\n\t\t\t}\n\t\t\tcommentsCount\n\t\t}\n\t}\n"]))),tt=Object(z.a)(u||(u=Object(F.a)(["\n\tmutation addComment($postId: ID!, $body: String!) {\n\t\taddComment(postId: $postId, body: $body) {\n\t\t\tid\n\t\t\tcomments {\n\t\t\t\tid\n\t\t\t\tbody\n\t\t\t\tcreatedAt\n\t\t\t\tusername\n\t\t\t}\n\t\t\tcommentsCount\n\t\t}\n\t}\n"]))),et=function(t){var e=t.tooltipText,n=t.children,s=Object(H.useRef)(null);return Object(C.jsxs)("div",{className:"relative flex justify-center",onMouseEnter:function(){s.current.style.opacity=1},onMouseLeave:function(){s.current.style.opacity=0},children:[Object(C.jsxs)("div",{ref:s,className:"absolute top-full w-auto mt-3 opacity-0 bg-gradient-to-b from-black to-gray-700 text-white px-4 py-2 rounded flex items-center transition duration-100",children:[Object(C.jsx)("div",{className:"absolute h-0 w-0 bottom-full left-1/2 transform -translate-x-1/2",style:{border:"10px solid transparent",borderTop:"none",borderBottom:"10px solid black"}}),e]}),n]})},nt=function(t){var e=t.likesCount,n=t.postId,s=t.user,r=t.likes,o=Object(J.a)(Z,{variables:{postId:n},onError:function(){N(w())}}),a=Object(Q.a)(o,1)[0],c=Object(H.useMemo)((function(){return!!r.find((function(t){return t&&t.username===(null===s||void 0===s?void 0:s.username)}))}),[r,null===s||void 0===s?void 0:s.username]);return s&&Object(C.jsx)(et,{tooltipText:"".concat(c?"Unlike":"Like"," Post"),children:Object(C.jsxs)("button",{className:"flex items-center rounded",onClick:a,children:[Object(C.jsx)("span",{className:"inline-block px-4 py-2 h-full rounded-l border-l border-t border-b border-green-400 ".concat(c?"bg-green-500":"bg-white"),children:Object(C.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5",viewBox:"0 0 20 20",fill:c?"white":"rgba(0,0,0,0.2)",children:Object(C.jsx)("path",{fillRule:"evenodd",d:"M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z",clipRule:"evenodd"})})}),Object(C.jsx)("span",{className:"inline-block bg-white px-4 py-2 text-green-500 h-full w-full rounded-r border border-green-400",children:e})]})})},st=function(t){var e=t.isOpen,n=t.closeModal,s=t.callback,r=t.modalAction,o=void 0===r?"Delete":r,a=t.modalBody,c=t.modalTitle;return e&&Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)("div",{className:"justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none",onClick:n,children:Object(C.jsx)("div",{className:"my-6 mx-auto w-2/5 max-w-3xl",onClick:function(t){return t.stopPropagation()},children:Object(C.jsxs)("div",{className:"rounded-lg shadow-lg flex flex-col w-full bg-white",children:[Object(C.jsxs)("div",{className:"flex items-center justify-between p-5 border-b border-gray-300",children:[Object(C.jsx)("h3",{className:"text-3xl font-semibold",children:c}),Object(C.jsx)("button",{className:"p-1 flex items-center",onClick:n,children:Object(C.jsx)("span",{className:"text-black opacity-60 h-6 w-6 text-2xl block",children:"\xd7"})})]}),Object(C.jsx)("p",{className:"my-4 px-4 py-6 text-gray-500 text-lg leading-relaxed flex-1",children:a}),Object(C.jsxs)("div",{className:"flex items-center justify-end p-6 border-t border-solid border-gray-200 rounded-b",children:[Object(C.jsx)("button",{className:"text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150",type:"button",onClick:n,children:"Close"}),Object(C.jsx)("button",{className:"bg-green-500 text-white active:bg-green-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150",type:"button",onClick:s,children:o})]})]})})}),Object(C.jsx)("div",{className:"opacity-50 fixed inset-0 z-40 bg-black"})]})},rt=function(t){var e=t.postId,n=t.commentId,s=Object(D.h)().pathname,r=Object(D.g)(),o=Object(H.useState)(!1),a=Object(Q.a)(o,2),c=a[0],l=a[1],i=function(){return l(!1)},d=Object(J.a)(n?_:Y,{variables:{postId:e,commentId:n},onError:function(){N(w())},onCompleted:function(){return!n&&"/"!==s&&r.push("/")},update:function(t,n){n.data.deletePost&&t.modify({fields:{getPosts:function(t,n){var s=n.readField;return t.filter((function(t){return s("id",t)!==e}))}}})}}),b=Object(Q.a)(d,2),u=b[0],j=b[1].loading;return Object(C.jsxs)(et,{tooltipText:"Delete ".concat(n?"comment":"post"),children:[Object(C.jsx)("button",{className:"flex items-center rounded disabled:opacity-40 disabled:cursor-not-allowed",onClick:function(){return l(!0)},disabled:j,children:Object(C.jsx)("span",{className:"px-4 py-2 text-white bg-red-500 h-full rounded border border-red-400 hover:bg-red-600",children:Object(C.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(C.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"})})})}),Object(C.jsx)(st,{isOpen:c,callback:function(){i(),u()},closeModal:i,modalAction:n?"Delete Comment":"Delete Post",modalBody:"Are you sure you want to delete this ".concat(n?"comment":"post"," ?"),modalTitle:"Delete ".concat(n?"Comment":"Post")})]})},ot=function(t){var e,n=t.post,s=n.body,r=n.createdAt,o=n.id,a=n.username,c=n.likesCount,l=n.commentsCount,i=n.likes,d=Object(M.a)(B).data;return Object(C.jsx)(C.Fragment,{children:Object(C.jsxs)("div",{className:"shadow-xl flex flex-col justify-between px-4 py-2 border border-gray-200 rounded",children:[Object(C.jsxs)("div",{className:"flex flex-col",children:[Object(C.jsxs)("div",{className:"flex justify-between",children:[Object(C.jsx)("h1",{children:a}),Object(C.jsx)("img",{src:"https://react.semantic-ui.com/images/avatar/large/elyse.png",alt:"avatar",className:"rounded-full h-10 w-10"})]}),Object(C.jsx)("span",{className:"text-gray-500 text-xs",children:W()(r).fromNow()}),Object(C.jsx)("p",{className:"text-base text-gray-700 mt-1 max-h-40 h-20",children:s})]}),Object(C.jsxs)("div",{className:"border-t border-gray-200 pt-2 flex justify-between",children:[Object(C.jsx)(nt,{likesCount:c,postId:o,user:null===d||void 0===d?void 0:d.currentUser,likes:i}),Object(C.jsx)(et,{tooltipText:"View comments",children:Object(C.jsxs)(R.b,{className:"flex items-center rounded",to:"/posts/".concat(o),children:[Object(C.jsx)("span",{className:"px-4 py-2 text-white bg-blue-500 h-full rounded-l border-l border-t border-b border-blue-400",children:Object(C.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",viewBox:"0 0 20 20",fill:"white",children:[Object(C.jsx)("path",{d:"M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z"}),Object(C.jsx)("path",{d:"M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z"})]})}),Object(C.jsx)("span",{className:"bg-white px-4 py-2 text-blue-500 h-full w-full rounded-r border border-blue-400",children:l})]})}),(null===d||void 0===d||null===(e=d.currentUser)||void 0===e?void 0:e.username)===a&&Object(C.jsx)(rt,{postId:o})]})]})})},at=n(55),ct=function(){var t,e,n,s=Object(H.useRef)(null),r=Object(J.a)(X,{onError:function(){N(w())},update:function(t,e){var n=e.data.createPost;t.modify({fields:{getPosts:function(e){return[t.writeFragment({data:n,fragment:Object(z.a)(j||(j=Object(F.a)(["\n\t\t\t\t\t\t\t\tfragment NewPost on Post {\n\t\t\t\t\t\t\t\t\tid\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t"])))})].concat(Object(at.a)(e))}}})}}),o=Object(Q.a)(r,2),a=o[0],c=o[1],l=c.loading,i=c.error;return Object(C.jsxs)("div",{className:"flex flex-col",children:[Object(C.jsxs)("form",{onSubmit:function(t){t.preventDefault(),a({variables:{body:s.current.value}}),s.current.value=""},children:[Object(C.jsxs)("div",{className:"form-group",children:[Object(C.jsx)("label",{htmlFor:"body",className:"text-2xl mb-2 font-bold",children:"Create a Post :"}),Object(C.jsx)("input",{className:"input focus:border focus:border-gray-400",type:"text",id:"body",ref:s})]}),Object(C.jsx)("button",{disabled:l,type:"submit",className:"px-4 py-2 bg-green-500 opacity-90 text-white rounded hover:opacity-100 disabled:opacity-40 disabled:cursor-not-allowed",children:"Submit"})]}),i&&Object(C.jsx)("ul",{className:"bg-red-200 text-red-500 mt-4 px-2 rounded py-3",children:Object(C.jsx)("li",{className:" list-disc ml-5",children:null!==(t=null===i||void 0===i||null===(e=i.graphQLErrors)||void 0===e||null===(n=e[0])||void 0===n?void 0:n.message)&&void 0!==t?t:"Some error took place"})})]})},lt=function(){var t,e=Object(M.a)(E),n=e.loading,s=e.data,r=null!==(t=null===s||void 0===s?void 0:s.getPosts)&&void 0!==t?t:[];return Object(C.jsxs)("div",{className:"flex flex-col w-9/12 mx-auto my-5",children:[Object(C.jsx)("h1",{className:"text-2xl font-bold mb-4",children:"Recent Posts"}),Object(C.jsx)("div",{className:"grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-x-5 gap-y-8",children:n?Object(C.jsx)("h1",{children:"Loading..."}):Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)(ct,{}),r.map((function(t){return Object(C.jsx)(ot,{post:t},t.id)}))]})})]})},it=n(33),dt=function(){var t=Object(D.h)().pathname,e=Object(H.useMemo)((function(){return{heading:t.includes("login")?"Login":"Register",buttonText:t.includes("login")?"Sign In":"Sign Up",isLoggingIn:t.includes("login")}}),[t]),n=e.heading,s=e.buttonText,r=e.isLoggingIn,o=Object(H.useState)({}),a=Object(Q.a)(o,2),c=a[0],l=a[1],i=Object(H.useState)({username:"",email:"",password:"",confirmPassword:""}),d=Object(Q.a)(i,2),b=d[0],u=d[1],j=b.username,m=b.email,x=b.password,h=b.confirmPassword,O=Object(J.a)(r?K:G,{variables:r?{username:j,password:x}:{email:m,password:x,username:j},onCompleted:function(t){var e=r?null===t||void 0===t?void 0:t.login:null===t||void 0===t?void 0:t.register;localStorage.setItem("token",e.token),N(e)},onError:function(t){var e,n,s,r,o;l(null!==(e=null===(n=t.graphQLErrors)||void 0===n||null===(s=n[0])||void 0===s||null===(r=s.extensions)||void 0===r||null===(o=r.exception)||void 0===o?void 0:o.errors)&&void 0!==e?e:t)}}),f=Object(Q.a)(O,2),g=f[0],v=f[1].loading,y=function(t){var e=t.target,n=e.name,s=e.value;u(Object(p.a)(Object(p.a)({},b),{},Object(it.a)({},n,s)))};return Object(H.useEffect)((function(){u({username:"",email:"",password:"",confirmPassword:""}),l({})}),[t]),Object(C.jsxs)("div",{className:"w-2/5 mx-auto flex flex-col items-center mt-14",children:[Object(C.jsx)("h1",{className:"text-2xl mb-3",children:n}),Object(C.jsxs)("form",{onSubmit:function(t){t.preventDefault(),r||h===x?g():l((function(t){return Object(p.a)({password:"Passwords do not match"},t)}))},className:"w-full",children:[Object(C.jsxs)("div",{className:"form-group",children:[Object(C.jsx)("label",{htmlFor:"username",children:"Username"}),Object(C.jsx)("input",{className:"input",type:"text",name:"username",id:"username",onChange:y,value:j})]}),!r&&Object(C.jsxs)("div",{className:"form-group",children:[Object(C.jsx)("label",{htmlFor:"email",children:"Email"}),Object(C.jsx)("input",{className:"input",type:"email",name:"email",id:"email",onChange:y,value:m})]}),Object(C.jsxs)("div",{className:"form-group",children:[Object(C.jsx)("label",{htmlFor:"password",children:"Password"}),Object(C.jsx)("input",{className:"input",type:"password",name:"password",id:"password",onChange:y,value:x})]}),!r&&Object(C.jsxs)("div",{className:"form-group",children:[Object(C.jsx)("label",{htmlFor:"confirmPassword",children:"Confirm Password"}),Object(C.jsx)("input",{className:"input",type:"password",name:"confirmPassword",id:"confirmPassword",onChange:y,value:h})]}),Object(C.jsx)("button",{disabled:!!v,type:"submit",className:"px-4 py-2 bg-blue-600 opacity-90 text-white rounded hover:opacity-100 disabled:opacity-40 disabled:cursor-not-allowed",children:v?"Submitting":s})]}),Object.keys(c).length>0&&Object(C.jsx)("div",{className:"bg-red-200 text-red-600 rounded py-2 px-2 w-full mt-5 flex",children:Object(C.jsx)("ul",{className:"list-disc ml-5",children:Object.values(c).map((function(t){return Object(C.jsx)("li",{children:t},t)}))})})]})},bt=function(t){var e=t.comment,n=t.postId,s=t.user,r=e.username,o=e.createdAt,a=e.body,c=e.id;return Object(C.jsxs)("div",{className:"shadow-md border border-blue-300 p-3 my-5 rounded flex justify-between",children:[Object(C.jsxs)("div",{children:[Object(C.jsx)("h1",{className:"text-lg text-gray-500",children:r}),Object(C.jsx)("p",{className:"text-xs text-gray-400",children:W()(o).fromNow()}),Object(C.jsx)("p",{className:"text-base pt-3",children:a})]}),Object(C.jsx)("div",{children:(null===s||void 0===s?void 0:s.username)===r&&Object(C.jsx)(rt,{postId:n,commentId:c})})]})},ut=function(t){var e=t.postId,n=Object(H.useRef)(null),s=Object(J.a)(tt,{onCompleted:function(){n.current.value="",n.current.blur()},onError:function(){N(w())}}),r=Object(Q.a)(s,2),o=r[0],a=r[1].loading;return Object(C.jsxs)("form",{className:"flex justify-between items-center text-gray-500 w-full rounded-full py-4 px-5 bg-gray-100 border border-gray-400 border-opacity-0 focus-within:border-opacity-100",onSubmit:function(t){t.preventDefault(),""!==n.current.value.trim()&&o({variables:{postId:e,body:n.current.value}})},style:{},children:[Object(C.jsx)("input",{type:"text",ref:n,className:"outline-none border-none w-10/12 bg-transparent",placeholder:"Write a Comment..."}),Object(C.jsx)("button",{type:"submit",disabled:a,className:"disabled:cursor-not-allowed",children:Object(C.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5 transform rotate-90 ",viewBox:"0 0 20 20",fill:"currentColor",children:Object(C.jsx)("path",{d:"M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"})})})]})},jt=function(){var t,e=Object(D.i)().postId,n=N(),s=Object(M.a)(U,{variables:{postId:e},skip:!e}),r=s.data,o=s.loading,a=null!==(t=null===r||void 0===r?void 0:r.getPost)&&void 0!==t?t:{},c=a.body,l=a.createdAt,i=a.username,d=a.comments,b=a.likes,u=a.likesCount,j=a.commentsCount;return o?Object(C.jsx)("p",{children:"Loading Post...."}):Object(C.jsxs)(C.Fragment,{children:[Object(C.jsxs)("div",{className:"w-3/5 grid grid-cols-12 mx-auto mt-12 gap-6",children:[Object(C.jsx)("img",{src:"https://react.semantic-ui.com/images/avatar/large/elyse.png",alt:"avatar",className:"rounded col-span-2 h-30 w-30"}),Object(C.jsxs)("div",{className:"col-span-10 shadow-xl py-5 px-3 border border-gray-200 flex flex-col justify-between rounded space-y-5",children:[Object(C.jsxs)("div",{children:[Object(C.jsx)("h1",{children:i}),Object(C.jsx)("span",{className:"text-gray-500 text-xs",children:W()(l).fromNow()}),Object(C.jsx)("p",{className:"text-base text-gray-700 mt-2 h-20",children:c})]}),Object(C.jsxs)("div",{className:"border-t border-gray-200 pt-2 flex flex-wrap justify-between gap-y-2",children:[Object(C.jsx)(nt,{likesCount:u,postId:e,user:n,likes:b}),Object(C.jsxs)("div",{className:"flex items-center rounded",children:[Object(C.jsx)("span",{className:"px-4 py-2 text-white bg-blue-500 h-full rounded-l border-l border-t border-b border-blue-400",children:Object(C.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",viewBox:"0 0 20 20",fill:"white",children:[Object(C.jsx)("path",{d:"M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z"}),Object(C.jsx)("path",{d:"M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z"})]})}),Object(C.jsx)("span",{className:"bg-white px-4 py-2 text-blue-500 h-full w-full rounded-r border border-blue-400",children:j})]}),(null===n||void 0===n?void 0:n.username)===i&&Object(C.jsx)(rt,{postId:e})]})]}),Object(C.jsxs)("div",{className:"col-start-3 col-span-10 pb-20",children:[Object(C.jsx)("h1",{className:"text-lg text-blue-500",children:"Comments"}),null===d||void 0===d?void 0:d.map((function(t){return Object(C.jsx)(bt,{comment:t,postId:e,user:n},t.id)}))]})]}),n&&Object(C.jsx)("div",{className:"fixed bottom-5 right-0 left-0 w-3/5 mx-auto grid grid-cols-12 z-10 bg-white",children:Object(C.jsx)("div",{className:"col-start-3 col-span-12",children:Object(C.jsx)(ut,{postId:e})})})]})},mt=function(){return Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)(V,{}),Object(C.jsxs)(D.d,{children:[Object(C.jsx)(D.b,{exact:!0,path:"/",children:Object(C.jsx)(lt,{})}),Object(C.jsx)(D.b,{exact:!0,path:"/posts/:postId",children:Object(C.jsx)(jt,{})}),Object(C.jsx)(T,{exact:!0,path:"/login",children:Object(C.jsx)(dt,{})}),Object(C.jsx)(T,{exact:!0,path:"/register",children:Object(C.jsx)(dt,{})})]})]})};x.a.render(Object(C.jsx)(A,{children:Object(C.jsx)(R.a,{children:Object(C.jsx)(mt,{})})}),document.getElementById("root"))}},[[74,1,2]]]);
//# sourceMappingURL=main.0d227e84.chunk.js.map