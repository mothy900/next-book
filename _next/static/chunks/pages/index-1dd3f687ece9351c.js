(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,a,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return s(2603)}])},2603:function(e,a,s){"use strict";s.r(a),s.d(a,{default:function(){return l}});var r=s(5893),t=s(6465),n=s.n(t),o=s(6154),i=s(7294),c=s(1163);function l(){let e=(0,c.useRouter)(),[a,s]=(0,i.useState)(),t=async()=>{let e=await o.Z.get("https://books-api.nomadcoders.workers.dev/lists");s(e.data.results)};return(0,i.useEffect)(()=>{t()}),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{className:"jsx-daffc5466674e1be container",children:(0,r.jsx)("div",{className:"jsx-daffc5466674e1be bookWrap",children:null==a?void 0:a.map((a,s)=>(0,r.jsx)("div",{onClick:()=>e.push({pathname:"/list/".concat(a.list_name),query:{id:a.list_name}}),className:"jsx-daffc5466674e1be book",children:(0,r.jsxs)("span",{className:"jsx-daffc5466674e1be",children:[a.list_name," ▻"]})},s))})}),(0,r.jsx)(n(),{id:"daffc5466674e1be",children:".container.jsx-daffc5466674e1be{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;background-color:wheat}.bookWrap.jsx-daffc5466674e1be{width:80%;height:100%;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;gridrow:auto;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;cursor:pointer}.book.jsx-daffc5466674e1be{background-color:gray;padding:15px;margin:10px;-webkit-border-radius:10px;-moz-border-radius:10px;border-radius:10px;boxshadow:rgba(0,0,0,.35)0px 5px 15px}.book.jsx-daffc5466674e1be:hover{-webkit-transform:scale(.95)translatey(5px);-moz-transform:scale(.95)translatey(5px);-ms-transform:scale(.95)translatey(5px);-o-transform:scale(.95)translatey(5px);transform:scale(.95)translatey(5px)}"})]})}}},function(e){e.O(0,[465,154,774,888,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);