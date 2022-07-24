"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[646,58,744,12,801],{3201:function(n,t,r){r.d(t,{Z:function(){return i}});var e=r(2791),c=r(5218),a=r(184),i=function(n){var t=n.errorMessage,r=n.toastErrorMessage;return(0,e.useEffect)((function(){console.log(r),c.ZP.error(r)}),[r]),(0,a.jsx)("div",{children:t})}},3971:function(n,t,r){r.d(t,{Z:function(){return u}});r(2791);var e,c=r(168),a=r(7939).ZP.section(e||(e=(0,c.Z)(["\n  position: relative;\n  padding: 10px;\n  border: ",";\n  border-radius: 3px;\n  min-height: ",";\n"])),(function(n){return n.isEmpty?"none":"1px solid black"}),(function(n){return n.isEmpty?"500px":"auto"})),i=r(184),u=function(n){var t=n.children,r=n.isEmpty;return(0,i.jsx)(a,{isEmpty:r,children:t})}},5110:function(n,t,r){r.d(t,{u:function(){return i}});var e=r(885),c=r(2791),a=r(6871),i=function(n){var t=n.init,r=n.apiState,i=n.fetchAPI,u=(0,c.useState)(t),o=(0,e.Z)(u,2),s=o[0],f=o[1],p=(0,a.UO)();return(0,c.useEffect)((function(){r.pending(),i(p.movieId).then((function(n){f(n),r.success()})).catch((function(n){r.error()}))}),[r,i,p]),s}},58:function(n,t,r){r.r(t);var e=r(3971),c=r(951),a=r(6012),i=r(3201),u=r(5110),o=r(3639),s=r(2022),f=r(184);t.default=(0,s.j)((function(n){var t,r=n.apiState,s=(0,u.u)({init:[],apiState:r,fetchAPI:o.wL});return(0,f.jsxs)(e.Z,{isEmpty:!((null===s||void 0===s||null===(t=s.cast)||void 0===t?void 0:t.length)>0),children:[r.isSuccess()&&(0,f.jsx)(a.MovieActorsList,{actors:s.cast}),r.isPending()&&(0,f.jsx)(c.Z,{}),r.isError()&&(0,f.jsx)(i.Z,{errorMessage:"Oops, there is no information about actors, try please later",toastErrorMessage:"Oops, something went wrong, try please later"}),r.isIdle()&&(0,f.jsx)("div",{children:"No information"})]})}))},8744:function(n,t,r){r.r(t),r.d(t,{ImageWithFallback:function(){return s}});var e=r(1413),c=r(885),a=r(5987),i=r(2791),u=r(184),o=["fallback","src"];function s(n){var t=n.fallback,r=n.src,s=(0,a.Z)(n,o),f=(0,i.useState)(r),p=(0,c.Z)(f,2),d=p[0],l=p[1];return(0,u.jsx)("img",(0,e.Z)({src:d||t,onError:function(){return l(t)}},s))}},6012:function(n,t,r){r.r(t),r.d(t,{MovieActorsList:function(){return u}});var e=r(801),c=r(8744),a=r(8579),i=r(184),u=function(n){var t=n.actors,r=void 0===t?[]:t;return(0,i.jsx)(e.ActorsList,{children:r.map((function(n){return(0,i.jsx)(e.ActorComponent,{children:(0,i.jsxs)("div",{children:[(0,i.jsx)("h3",{children:n.name}),(0,i.jsx)(c.ImageWithFallback,{fallback:a,src:"https://image.tmdb.org/t/p/w500/".concat(n.profile_path),alt:n.name,width:"95%"}),(0,i.jsxs)("p",{children:["Character: ",n.character]})]})},n.cast_id)}))})}},646:function(n,t,r){r.r(t),r.d(t,{default:function(){return e.default}});var e=r(58)},801:function(n,t,r){r.r(t),r.d(t,{ActorComponent:function(){return o},ActorsList:function(){return u}});var e,c,a=r(168),i=r(7939),u=i.ZP.ul(e||(e=(0,a.Z)(["\n  display: grid;\n  grid-template-columns: 19.5% 19.5% 19.5% 19.5% 19.5%;\n"]))),o=i.ZP.li(c||(c=(0,a.Z)(["\n  display: flex;\n  justify-content: center;\n  border: 1px solid black;\n  padding: 15px;\n\n  border-radius: 5px;\n  margin-right: 15px;\n  margin-bottom: 15px;\n"])))},3639:function(n,t,r){r.d(t,{Bt:function(){return l},Ny:function(){return f},mv:function(){return d},wL:function(){return v},wr:function(){return p}});var e=r(5861),c=r(7757),a=r.n(c),i=r(4569),u=r.n(i),o="ddd72ffccd1b0460d4d5bf775327139b",s="https://api.themoviedb.org/3",f=function(){var n=(0,e.Z)(a().mark((function n(t){var r,e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u().get("".concat(s,"/movie/").concat(t,"?api_key=").concat(o)).catch((function(n){return h()}));case 2:return r=n.sent,e=r.data,n.abrupt("return",e);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,e.Z)(a().mark((function n(){var t,r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u().get("".concat(s,"/trending/movie/day?api_key=").concat(o)).catch((function(n){return h()}));case 2:return t=n.sent,r=t.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),d=function(){var n=(0,e.Z)(a().mark((function n(){var t,r,e,c=arguments;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=c.length>0&&void 0!==c[0]?c[0]:"",n.next=3,u().get("".concat(s,"/search/movie?api_key=").concat(o,"&query=").concat(t)).catch((function(n){return h()}));case 3:return r=n.sent,e=r.data,n.abrupt("return",e);case 6:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),l=function(){var n=(0,e.Z)(a().mark((function n(t){var r,e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u().get("".concat(s,"/movie/").concat(t,"/reviews?api_key=").concat(o,"&language=en-US&page=1")).catch((function(n){return h()}));case 2:return r=n.sent,e=r.data,n.abrupt("return",e);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),v=function(){var n=(0,e.Z)(a().mark((function n(t){var r,e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u().get("".concat(s,"/movie/").concat(t,"/credits?api_key=").concat(o,"&language=en-US&page=1")).catch((function(n){return h()}));case 2:return r=n.sent,e=r.data,n.abrupt("return",e);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),h=function(){throw new Error}},2022:function(n,t,r){r.d(t,{j:function(){return f}});var e=r(1413),c=r(5671),a=r(3144),i=r(136),u=r(3668),o=r(2791),s=r(184),f=function(n){return function(t){(0,i.Z)(o,t);var r=(0,u.Z)(o);function o(){var n;(0,c.Z)(this,o);for(var t=arguments.length,e=new Array(t),a=0;a<t;a++)e[a]=arguments[a];return(n=r.call.apply(r,[this].concat(e))).state={current:"idle"},n.apiState={pending:function(){return n.setState({current:"pending"})},success:function(){return n.setState({current:"success"})},error:function(){console.log("error"),n.setState({current:"error"})},idle:function(){return n.setState({current:"idle"})},isPending:function(){return"pending"===n.state.current},isSuccess:function(){return"success"===n.state.current},isError:function(){return"error"===n.state.current},isIdle:function(){return"idle"===n.state.current}},n}return(0,a.Z)(o,[{key:"render",value:function(){return(0,s.jsx)(n,(0,e.Z)((0,e.Z)({},this.props),{},{apiState:this.apiState}))}}]),o}(o.Component)}},8579:function(n,t,r){n.exports=r.p+"static/media/person-replace-image.7da4bb54499c984c6d27.png"},5987:function(n,t,r){r.d(t,{Z:function(){return c}});var e=r(3366);function c(n,t){if(null==n)return{};var r,c,a=(0,e.Z)(n,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(c=0;c<i.length;c++)r=i[c],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(n,r)&&(a[r]=n[r])}return a}}}]);
//# sourceMappingURL=646.6d125a44.chunk.js.map