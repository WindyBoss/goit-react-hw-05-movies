"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[994,344],{3201:function(n,r,t){t.d(r,{Z:function(){return a}});var e=t(2791),i=t(5218),c=t(184),a=function(n){var r=n.errorMessage,t=n.toastErrorMessage;return(0,e.useEffect)((function(){console.log(t),i.ZP.error(t)}),[t]),(0,c.jsx)("div",{children:r})}},4897:function(n,r,t){t.d(r,{Z:function(){return s}});var e,i=t(3504),c=t(6871),a=t(168),u=t(7939).ZP.li(e||(e=(0,a.Z)(["\n    :not(:last-child) {\n        margin-bottom: 20px;\n    }\n"]))),o=t(184);function s(n){var r=n.movies,t=(0,c.TH)();return(0,o.jsx)("ol",{children:r.map((function(n){return(0,o.jsx)(u,{children:(0,o.jsx)(i.OL,{to:(t.pathname.length,"/goit-react-hw-05-movies/movies/".concat(n.id)),state:t,children:n.original_title})},n.id)}))})}},3971:function(n,r,t){t.d(r,{Z:function(){return u}});t(2791);var e,i=t(168),c=t(7939).ZP.section(e||(e=(0,i.Z)(["\n  position: relative;\n  padding: 10px;\n  border: ",";\n  border-radius: 3px;\n  min-height: ",";\n"])),(function(n){return n.isEmpty?"none":"1px solid black"}),(function(n){return n.isEmpty?"500px":"auto"})),a=t(184),u=function(n){var r=n.children,t=n.isEmpty;return(0,a.jsx)(c,{isEmpty:t,children:r})}},6994:function(n,r,t){t.r(r),t.d(r,{default:function(){return v}});var e=t(885),i=t(2791),c=t(3504),a=t(3971),u=t(4897),o=t(6344),s=t(951),f=(t(5218),t(2022)),l=t(3639),d=t(3201),p=t(184);var v=(0,f.j)((function(n){var r=n.apiState,t="query",f=function(n){var r=n.init,t=n.apiState,a=n.fetchAPI,u=n.paramName,o=(0,i.useState)(r),s=(0,e.Z)(o,2),f=s[0],l=s[1],d=(0,c.lr)(),p=(0,e.Z)(d,1)[0];return(0,i.useEffect)((function(){var n=p.get(u);n&&(t.pending(),a(n).then((function(n){var r;if(0===(null===n||void 0===n||null===(r=n.results)||void 0===r?void 0:r.length))throw Error();l(n.results),t.success()})).catch((function(n){t.error()})))}),[t,a,u,p]),f}({init:[],apiState:r,fetchAPI:l.mv,paramName:t}),v=(0,c.lr)(),h=(0,e.Z)(v,2),m=h[0],g=h[1];return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(a.Z,{children:(0,p.jsx)(o.MovieForm,{onSubmit:g,paramName:t})}),(0,p.jsxs)(a.Z,{isEmpty:!(f.length>0),children:[r.isSuccess()&&(0,p.jsx)(u.Z,{movies:f}),r.isPending()&&(0,p.jsx)(s.Z,{}),r.isError()&&(0,p.jsx)(d.Z,{errorMessage:"Sorry, we cannot find the movie with search ".concat(m.get(t)),toastErrorMessage:"Text, please valid Keyword"}),r.isIdle()&&(0,p.jsx)("p",{children:"Find a Movie"})]})]})}))},6344:function(n,r,t){t.r(r),t.d(r,{MovieForm:function(){return v}});var e=t(1413),i=t(4942),c=t(1134),a=t(4107),u=t(4281),o=t(1265),s=t(7942),f=t(5218),l=t(2791),d=t(184),p=s.Ry({query:s.Z_().min(1).required()}).required();function v(n){var r=n.onSubmit,t=n.paramName,s=(0,c.cI)({resolver:(0,o.X)(p)}),v=s.register,m=s.handleSubmit,g=s.reset,x=s.formState.errors;(0,l.useEffect)((function(){var n,r;(null===(n=x[t])||void 0===n||null===(r=n.message)||void 0===r?void 0:r.length)>0&&f.ZP.error("Text something")}),[x,t]);return(0,d.jsxs)("form",{style:{display:"flex",alignItems:"center"},onSubmit:m((function(n){console.log(n),r((0,i.Z)({},t,n.query)),g()})),children:[(0,d.jsx)(a.Z,(0,e.Z)({label:"Text Query",size:"small",defaultValue:""},v("query",{required:!0}))),(0,d.jsx)(u.Z,{sx:h,variant:"outlined",type:"submit",children:"Search Movie"})]})}var h={color:"black",border:"1px solid black",marginLeft:"10px"}},3639:function(n,r,t){t.d(r,{Bt:function(){return p},Ny:function(){return f},mv:function(){return d},wL:function(){return v},wr:function(){return l}});var e=t(5861),i=t(7757),c=t.n(i),a=t(4569),u=t.n(a),o="ddd72ffccd1b0460d4d5bf775327139b",s="https://api.themoviedb.org/3",f=function(){var n=(0,e.Z)(c().mark((function n(r){var t,e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u().get("".concat(s,"/movie/").concat(r,"?api_key=").concat(o)).catch((function(n){return h()}));case 2:return t=n.sent,e=t.data,n.abrupt("return",e);case 5:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}(),l=function(){var n=(0,e.Z)(c().mark((function n(){var r,t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u().get("".concat(s,"/trending/movie/day?api_key=").concat(o)).catch((function(n){return h()}));case 2:return r=n.sent,t=r.data,n.abrupt("return",t);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),d=function(){var n=(0,e.Z)(c().mark((function n(){var r,t,e,i=arguments;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=i.length>0&&void 0!==i[0]?i[0]:"",n.next=3,u().get("".concat(s,"/search/movie?api_key=").concat(o,"&query=").concat(r)).catch((function(n){return h()}));case 3:return t=n.sent,e=t.data,n.abrupt("return",e);case 6:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),p=function(){var n=(0,e.Z)(c().mark((function n(r){var t,e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u().get("".concat(s,"/movie/").concat(r,"/reviews?api_key=").concat(o,"&language=en-US&page=1")).catch((function(n){return h()}));case 2:return t=n.sent,e=t.data,n.abrupt("return",e);case 5:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}(),v=function(){var n=(0,e.Z)(c().mark((function n(r){var t,e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u().get("".concat(s,"/movie/").concat(r,"/credits?api_key=").concat(o,"&language=en-US&page=1")).catch((function(n){return h()}));case 2:return t=n.sent,e=t.data,n.abrupt("return",e);case 5:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}(),h=function(){throw new Error}},2022:function(n,r,t){t.d(r,{j:function(){return f}});var e=t(1413),i=t(5671),c=t(3144),a=t(136),u=t(3668),o=t(2791),s=t(184),f=function(n){return function(r){(0,a.Z)(o,r);var t=(0,u.Z)(o);function o(){var n;(0,i.Z)(this,o);for(var r=arguments.length,e=new Array(r),c=0;c<r;c++)e[c]=arguments[c];return(n=t.call.apply(t,[this].concat(e))).state={current:"idle"},n.apiState={pending:function(){return n.setState({current:"pending"})},success:function(){return n.setState({current:"success"})},error:function(){console.log("error"),n.setState({current:"error"})},idle:function(){return n.setState({current:"idle"})},isPending:function(){return"pending"===n.state.current},isSuccess:function(){return"success"===n.state.current},isError:function(){return"error"===n.state.current},isIdle:function(){return"idle"===n.state.current}},n}return(0,c.Z)(o,[{key:"render",value:function(){return(0,s.jsx)(n,(0,e.Z)((0,e.Z)({},this.props),{},{apiState:this.apiState}))}}]),o}(o.Component)}}}]);
//# sourceMappingURL=994.87f883f3.chunk.js.map