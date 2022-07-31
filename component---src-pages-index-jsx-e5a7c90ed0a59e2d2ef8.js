(self.webpackChunkdavidjaimes_com=self.webpackChunkdavidjaimes_com||[]).push([[230],{5020:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return Ue}});var i=a(7294),s=a(5414),r=a(2122),l=a(9756),n=a(5900),o=a.n(n),c=a(9541),d=a(8870),m=a(6132),u=a(9503),L=["bsPrefix","className","variant","as"],M=i.forwardRef((function(e,t){var a=e.bsPrefix,s=e.className,n=e.variant,d=e.as,m=void 0===d?"img":d,u=(0,l.Z)(e,L),M=(0,c.vE)(a,"card-img");return i.createElement(m,(0,r.Z)({ref:t,className:o()(n?M+"-"+n:M,s)},u))}));M.displayName="CardImg",M.defaultProps={variant:null};var f=M,N=["bsPrefix","className","bg","text","border","body","children","as"],w=(0,m.Z)("h5"),y=(0,m.Z)("h6"),v=(0,d.Z)("card-body"),b=(0,d.Z)("card-title",{Component:w}),E=(0,d.Z)("card-subtitle",{Component:y}),x=(0,d.Z)("card-link",{Component:"a"}),C=(0,d.Z)("card-text",{Component:"p"}),j=(0,d.Z)("card-header"),g=(0,d.Z)("card-footer"),p=(0,d.Z)("card-img-overlay"),I=i.forwardRef((function(e,t){var a=e.bsPrefix,s=e.className,n=e.bg,d=e.text,m=e.border,L=e.body,M=e.children,f=e.as,w=void 0===f?"div":f,y=(0,l.Z)(e,N),b=(0,c.vE)(a,"card"),E=(0,i.useMemo)((function(){return{cardHeaderBsPrefix:b+"-header"}}),[b]);return i.createElement(u.Z.Provider,{value:E},i.createElement(w,(0,r.Z)({ref:t},y,{className:o()(s,b,n&&"bg-"+n,d&&"text-"+d,m&&"border-"+m)}),L?i.createElement(v,null,M):M))}));I.displayName="Card",I.defaultProps={body:!1},I.Img=f,I.Title=b,I.Subtitle=E,I.Body=v,I.Link=x,I.Text=C,I.Header=j,I.Footer=g,I.ImgOverlay=p;var D=I,T=["bsPrefix","className","as"],z=(0,d.Z)("media-body"),S=i.forwardRef((function(e,t){var a=e.bsPrefix,s=e.className,n=e.as,d=void 0===n?"div":n,m=(0,l.Z)(e,T),u=(0,c.vE)(a,"media");return i.createElement(d,(0,r.Z)({},m,{ref:t,className:o()(s,u)}))}));S.displayName="Media",S.Body=z;var h=S,Z=["bsPrefix","variant","pill","className","as"],P=i.forwardRef((function(e,t){var a=e.bsPrefix,s=e.variant,n=e.pill,d=e.className,m=e.as,u=void 0===m?"span":m,L=(0,l.Z)(e,Z),M=(0,c.vE)(a,"badge");return i.createElement(u,(0,r.Z)({ref:t},L,{className:o()(d,M,n&&M+"-pill",s&&M+"-"+s)}))}));P.displayName="Badge",P.defaultProps={pill:!1};var k=P,O=a(5697),F=a.n(O),Y=["bsPrefix","className","fluid","rounded","roundedCircle","thumbnail"],A=(F().string,F().bool,F().bool,F().bool,F().bool,i.forwardRef((function(e,t){var a=e.bsPrefix,s=e.className,n=e.fluid,d=e.rounded,m=e.roundedCircle,u=e.thumbnail,L=(0,l.Z)(e,Y);a=(0,c.vE)(a,"img");var M=o()(n&&a+"-fluid",d&&"rounded",m&&"rounded-circle",u&&a+"-thumbnail");return i.createElement("img",(0,r.Z)({ref:t},L,{className:o()(s,M)}))})));A.displayName="Image",A.defaultProps={fluid:!1,rounded:!1,roundedCircle:!1,thumbnail:!1};var Q=A;function U(e){var t=e.post;return i.createElement("div",null,i.createElement(i.Fragment,null,i.createElement("hr",null),i.createElement(D,{className:"mt-5 mb-5 border-0 text-dark"},i.createElement(D.Body,{className:"m-0 p-0"},i.createElement(h,null,i.createElement(h.Body,{className:"mb-3"},i.createElement(D.Title,null,i.createElement("a",{href:t.frontmatter.path,className:"text-dark stretched-link"},t.frontmatter.title)),t.frontmatter.badges.map((function(e){return i.createElement(i.Fragment,null,i.createElement(k,{pill:!0,variant:"dark"},e)," ")})),i.createElement(D.Subtitle,{className:"mt-3 text-secondary",style:{fontSize:"11px"}},t.frontmatter.date)),i.createElement(Q,{src:t.frontmatter.image.publicURL,rounded:!0,className:"mb-3 border border-dark",width:120,height:90,alt:t.frontmatter.alt})),i.createElement(D.Text,{style:{fontSize:"14px"}},t.excerpt)))))}var G=["className"],R=i.forwardRef((function(e,t){var a=e.className,s=(0,l.Z)(e,G);return i.createElement(Q,(0,r.Z)({ref:t},s,{className:o()(a,"figure-img")}))}));R.displayName="FigureImage",R.defaultProps={fluid:!0};var J=R,H=(0,d.Z)("figure-caption",{Component:"figcaption"}),V=(0,d.Z)("figure",{Component:"figure"});V.Image=J,V.Caption=H;var B=V,W=(a(7526),["as","className","type","tooltip"]),X=i.forwardRef((function(e,t){var a=e.as,s=void 0===a?"div":a,n=e.className,c=e.type,d=void 0===c?"valid":c,m=e.tooltip,u=void 0!==m&&m,L=(0,l.Z)(e,W);return i.createElement(s,(0,r.Z)({},L,{ref:t,className:o()(n,d+"-"+(u?"tooltip":"feedback"))}))}));X.displayName="Feedback";var K=X,_=i.createContext({controlId:void 0}),q=["id","bsPrefix","bsCustomPrefix","className","type","isValid","isInvalid","isStatic","as"],$=i.forwardRef((function(e,t){var a=e.id,s=e.bsPrefix,n=e.bsCustomPrefix,d=e.className,m=e.type,u=void 0===m?"checkbox":m,L=e.isValid,M=void 0!==L&&L,f=e.isInvalid,N=void 0!==f&&f,w=e.isStatic,y=e.as,v=void 0===y?"input":y,b=(0,l.Z)(e,q),E=(0,i.useContext)(_),x=E.controlId,C=E.custom?[n,"custom-control-input"]:[s,"form-check-input"],j=C[0],g=C[1];return s=(0,c.vE)(j,g),i.createElement(v,(0,r.Z)({},b,{ref:t,type:u,id:a||x,className:o()(d,s,M&&"is-valid",N&&"is-invalid",w&&"position-static")}))}));$.displayName="FormCheckInput";var ee=$,te=["bsPrefix","bsCustomPrefix","className","htmlFor"],ae=i.forwardRef((function(e,t){var a=e.bsPrefix,s=e.bsCustomPrefix,n=e.className,d=e.htmlFor,m=(0,l.Z)(e,te),u=(0,i.useContext)(_),L=u.controlId,M=u.custom?[s,"custom-control-label"]:[a,"form-check-label"],f=M[0],N=M[1];return a=(0,c.vE)(f,N),i.createElement("label",(0,r.Z)({},m,{ref:t,htmlFor:d||L,className:o()(n,a)}))}));ae.displayName="FormCheckLabel";var ie=ae,se=["id","bsPrefix","bsCustomPrefix","inline","disabled","isValid","isInvalid","feedbackTooltip","feedback","className","style","title","type","label","children","custom","as"],re=i.forwardRef((function(e,t){var a=e.id,s=e.bsPrefix,n=e.bsCustomPrefix,d=e.inline,m=void 0!==d&&d,u=e.disabled,L=void 0!==u&&u,M=e.isValid,f=void 0!==M&&M,N=e.isInvalid,w=void 0!==N&&N,y=e.feedbackTooltip,v=void 0!==y&&y,b=e.feedback,E=e.className,x=e.style,C=e.title,j=void 0===C?"":C,g=e.type,p=void 0===g?"checkbox":g,I=e.label,D=e.children,T=e.custom,z=e.as,S=void 0===z?"input":z,h=(0,l.Z)(e,se),Z="switch"===p||T,P=Z?[n,"custom-control"]:[s,"form-check"],k=P[0],O=P[1];s=(0,c.vE)(k,O);var F=(0,i.useContext)(_).controlId,Y=(0,i.useMemo)((function(){return{controlId:a||F,custom:Z}}),[F,Z,a]),A=Z||null!=I&&!1!==I&&!D,Q=i.createElement(ee,(0,r.Z)({},h,{type:"switch"===p?"checkbox":p,ref:t,isValid:f,isInvalid:w,isStatic:!A,disabled:L,as:S}));return i.createElement(_.Provider,{value:Y},i.createElement("div",{style:x,className:o()(E,s,Z&&"custom-"+p,m&&s+"-inline")},D||i.createElement(i.Fragment,null,Q,A&&i.createElement(ie,{title:j},I),(f||w)&&i.createElement(K,{type:f?"valid":"invalid",tooltip:v},b))))}));re.displayName="FormCheck",re.Input=ee,re.Label=ie;var le=re,ne=["id","bsPrefix","bsCustomPrefix","className","isValid","isInvalid","lang","as"],oe=i.forwardRef((function(e,t){var a=e.id,s=e.bsPrefix,n=e.bsCustomPrefix,d=e.className,m=e.isValid,u=e.isInvalid,L=e.lang,M=e.as,f=void 0===M?"input":M,N=(0,l.Z)(e,ne),w=(0,i.useContext)(_),y=w.controlId,v=w.custom?[n,"custom-file-input"]:[s,"form-control-file"],b=v[0],E=v[1];return s=(0,c.vE)(b,E),i.createElement(f,(0,r.Z)({},N,{ref:t,id:a||y,type:"file",lang:L,className:o()(d,s,m&&"is-valid",u&&"is-invalid")}))}));oe.displayName="FormFileInput";var ce=oe,de=["bsPrefix","bsCustomPrefix","className","htmlFor"],me=i.forwardRef((function(e,t){var a=e.bsPrefix,s=e.bsCustomPrefix,n=e.className,d=e.htmlFor,m=(0,l.Z)(e,de),u=(0,i.useContext)(_),L=u.controlId,M=u.custom?[s,"custom-file-label"]:[a,"form-file-label"],f=M[0],N=M[1];return a=(0,c.vE)(f,N),i.createElement("label",(0,r.Z)({},m,{ref:t,htmlFor:d||L,className:o()(n,a),"data-browse":m["data-browse"]}))}));me.displayName="FormFileLabel";var ue=me,Le=["id","bsPrefix","bsCustomPrefix","disabled","isValid","isInvalid","feedbackTooltip","feedback","className","style","label","children","custom","lang","data-browse","as","inputAs"],Me=i.forwardRef((function(e,t){var a=e.id,s=e.bsPrefix,n=e.bsCustomPrefix,d=e.disabled,m=void 0!==d&&d,u=e.isValid,L=void 0!==u&&u,M=e.isInvalid,f=void 0!==M&&M,N=e.feedbackTooltip,w=void 0!==N&&N,y=e.feedback,v=e.className,b=e.style,E=e.label,x=e.children,C=e.custom,j=e.lang,g=e["data-browse"],p=e.as,I=void 0===p?"div":p,D=e.inputAs,T=void 0===D?"input":D,z=(0,l.Z)(e,Le),S=C?[n,"custom"]:[s,"form-file"],h=S[0],Z=S[1];s=(0,c.vE)(h,Z);var P=(0,i.useContext)(_).controlId,k=(0,i.useMemo)((function(){return{controlId:a||P,custom:C}}),[P,C,a]),O=null!=E&&!1!==E&&!x,F=i.createElement(ce,(0,r.Z)({},z,{ref:t,isValid:L,isInvalid:f,disabled:m,as:T,lang:j}));return i.createElement(_.Provider,{value:k},i.createElement(I,{style:b,className:o()(v,s,C&&"custom-file")},x||i.createElement(i.Fragment,null,C?i.createElement(i.Fragment,null,F,O&&i.createElement(ue,{"data-browse":g},E)):i.createElement(i.Fragment,null,O&&i.createElement(ue,null,E),F),(L||f)&&i.createElement(K,{type:L?"valid":"invalid",tooltip:w},y))))}));Me.displayName="FormFile",Me.Input=ce,Me.Label=ue;var fe=Me,Ne=(a(2473),["bsPrefix","bsCustomPrefix","type","size","htmlSize","id","className","isValid","isInvalid","plaintext","readOnly","custom","as"]),we=i.forwardRef((function(e,t){var a,s,n=e.bsPrefix,d=e.bsCustomPrefix,m=e.type,u=e.size,L=e.htmlSize,M=e.id,f=e.className,N=e.isValid,w=void 0!==N&&N,y=e.isInvalid,v=void 0!==y&&y,b=e.plaintext,E=e.readOnly,x=e.custom,C=e.as,j=void 0===C?"input":C,g=(0,l.Z)(e,Ne),p=(0,i.useContext)(_).controlId,I=x?[d,"custom"]:[n,"form-control"],D=I[0],T=I[1];if(n=(0,c.vE)(D,T),b)(s={})[n+"-plaintext"]=!0,a=s;else if("file"===m){var z;(z={})[n+"-file"]=!0,a=z}else if("range"===m){var S;(S={})[n+"-range"]=!0,a=S}else if("select"===j&&x){var h;(h={})[n+"-select"]=!0,h[n+"-select-"+u]=u,a=h}else{var Z;(Z={})[n]=!0,Z[n+"-"+u]=u,a=Z}return i.createElement(j,(0,r.Z)({},g,{type:m,size:L,ref:t,readOnly:E,id:M||p,className:o()(f,a,w&&"is-valid",v&&"is-invalid")}))}));we.displayName="FormControl";var ye=Object.assign(we,{Feedback:K}),ve=["bsPrefix","className","children","controlId","as"],be=i.forwardRef((function(e,t){var a=e.bsPrefix,s=e.className,n=e.children,d=e.controlId,m=e.as,u=void 0===m?"div":m,L=(0,l.Z)(e,ve);a=(0,c.vE)(a,"form-group");var M=(0,i.useMemo)((function(){return{controlId:d}}),[d]);return i.createElement(_.Provider,{value:M},i.createElement(u,(0,r.Z)({},L,{ref:t,className:o()(s,a)}),n))}));be.displayName="FormGroup";var Ee=be,xe=a(7408),Ce=["as","bsPrefix","column","srOnly","className","htmlFor"],je=i.forwardRef((function(e,t){var a=e.as,s=void 0===a?"label":a,n=e.bsPrefix,d=e.column,m=e.srOnly,u=e.className,L=e.htmlFor,M=(0,l.Z)(e,Ce),f=(0,i.useContext)(_).controlId;n=(0,c.vE)(n,"form-label");var N="col-form-label";"string"==typeof d&&(N=N+" "+N+"-"+d);var w=o()(u,n,m&&"sr-only",d&&N);return L=L||f,d?i.createElement(xe.Z,(0,r.Z)({ref:t,as:"label",className:w,htmlFor:L},M)):i.createElement(s,(0,r.Z)({ref:t,className:w,htmlFor:L},M))}));je.displayName="FormLabel",je.defaultProps={column:!1,srOnly:!1};var ge=je,pe=["bsPrefix","className","as","muted"],Ie=i.forwardRef((function(e,t){var a=e.bsPrefix,s=e.className,n=e.as,d=void 0===n?"small":n,m=e.muted,u=(0,l.Z)(e,pe);return a=(0,c.vE)(a,"form-text"),i.createElement(d,(0,r.Z)({},u,{ref:t,className:o()(s,a,m&&"text-muted")}))}));Ie.displayName="FormText";var De=Ie,Te=i.forwardRef((function(e,t){return i.createElement(le,(0,r.Z)({},e,{ref:t,type:"switch"}))}));Te.displayName="Switch",Te.Input=le.Input,Te.Label=le.Label;var ze=Te,Se=["bsPrefix","inline","className","validated","as"],he=(0,d.Z)("form-row"),Ze=i.forwardRef((function(e,t){var a=e.bsPrefix,s=e.inline,n=e.className,d=e.validated,m=e.as,u=void 0===m?"form":m,L=(0,l.Z)(e,Se);return a=(0,c.vE)(a,"form"),i.createElement(u,(0,r.Z)({},L,{ref:t,className:o()(n,d&&"was-validated",s&&a+"-inline")}))}));Ze.displayName="Form",Ze.defaultProps={inline:!1},Ze.Row=he,Ze.Group=Ee,Ze.Control=ye,Ze.Check=le,Ze.File=fe,Ze.Switch=ze,Ze.Label=ge,Ze.Text=De;var Pe=Ze,ke=a(6187),Oe=a(994),Fe=a(428),Ye=a(260),Ae=a(5216),Qe=a.p+"static/GitHub_Logo-746ec8f0bc97208f903e1a6bfe34c79e.png",Ue=function(e){var t=e.data.allMdx.edges,a=(0,i.useState)({filteredPosts:[],query:""}),r=a[0],l=a[1],n=r.query?r.filteredPosts:t;return i.createElement("div",null,i.createElement(i.Fragment,null,i.createElement(s.q,null,i.createElement("html",{lang:"en-us"}),i.createElement("meta",{charset:"utf-8"}),i.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),i.createElement("meta",{name:"description",content:"Utilization of Data Analysis and Visualization Tools: Discover the many different ways to collect, analyze, and distribute data gathered from different sources. This is a one-stop shop to build and deploy your own project with easy to follow instructions."}),i.createElement("title",null,"David Jaimes: Husband. Scientist. Trail Runner.")),i.createElement(Ye.Z,null),i.createElement(ke.Z,{fluid:!0},i.createElement(Oe.Z,{className:"mt-5 justify-content-center ml-0 mr-0"},i.createElement(xe.Z,{style:{maxWidth:"768px"}},i.createElement("p",{className:"mt-3 text-center text-muted"},"Website made by David Jaimes and powered with ",i.createElement("br",null),i.createElement("br",null),i.createElement(B,null,i.createElement(B.Image,{width:150,height:180,alt:"Google Domains Logo",src:"https://www.gstatic.com/images/branding/lockups/svg/lockup_google_domains_867x140px_clr.svg"}),i.createElement(B.Image,{width:100,height:180,alt:"171x180",src:"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjAuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkViZW5lXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAxMDYgMjgiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDEwNiAyODsiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOiNGRkZGRkY7fQoJLnN0MXtmaWxsOiM2NjMzOTk7fQo8L3N0eWxlPgo8Zz4KCTxwYXRoIGQ9Ik02Mi45LDEyaDIuOHYxMGgtMi44di0xLjNjLTEsMS41LTIuMywxLjYtMy4xLDEuNmMtMy4xLDAtNS4xLTIuNC01LjEtNS4zYzAtMywyLTUuMyw0LjktNS4zYzAuOCwwLDIuMywwLjEsMy4yLDEuNlYxMnoKCQkgTTU3LjcsMTdjMCwxLjYsMS4xLDIuOCwyLjgsMi44YzEuNiwwLDIuOC0xLjIsMi44LTIuOGMwLTEuNi0xLjEtMi44LTIuOC0yLjhDNTguOSwxNC4yLDU3LjcsMTUuNCw1Ny43LDE3eiIvPgoJPHBhdGggZD0iTTcxLjIsMTQuNFYyMmgtMi44di03LjZoLTEuMVYxMmgxLjFWOC42aDIuOFYxMmgxLjl2Mi40SDcxLjJ6Ii8+Cgk8cGF0aCBkPSJNNzkuNywxNC40Yy0wLjctMC42LTEuMy0wLjctMS42LTAuN2MtMC43LDAtMS4xLDAuMy0xLjEsMC44YzAsMC4zLDAuMSwwLjYsMC45LDAuOWwwLjcsMC4yYzAuOCwwLjMsMiwwLjYsMi41LDEuNAoJCWMwLjMsMC40LDAuNSwxLDAuNSwxLjdjMCwwLjktMC4zLDEuOC0xLjEsMi41Yy0wLjgsMC43LTEuOCwxLjEtMywxLjFjLTIuMSwwLTMuMi0xLTMuOS0xLjdsMS41LTEuN2MwLjYsMC42LDEuNCwxLjIsMi4yLDEuMgoJCWMwLjgsMCwxLjQtMC40LDEuNC0xLjFjMC0wLjYtMC41LTAuOS0wLjktMWwtMC42LTAuMmMtMC43LTAuMy0xLjUtMC42LTIuMS0xLjJjLTAuNS0wLjUtMC44LTEuMS0wLjgtMS45YzAtMSwwLjUtMS44LDEtMi4zCgkJYzAuOC0wLjYsMS44LTAuNywyLjYtMC43YzAuNywwLDEuOSwwLjEsMy4yLDEuMUw3OS43LDE0LjR6Ii8+Cgk8cGF0aCBkPSJNODUuOCwxMy4zYzEtMS40LDIuNC0xLjYsMy4yLTEuNmMyLjksMCw0LjksMi4zLDQuOSw1LjNjMCwzLTIsNS4zLTUsNS4zYy0wLjYsMC0yLjEtMC4xLTMuMi0xLjZWMjJIODNWNS4yaDIuOFYxMy4zegoJCSBNODUuNSwxN2MwLDEuNiwxLjEsMi44LDIuOCwyLjhjMS42LDAsMi44LTEuMiwyLjgtMi44YzAtMS42LTEuMS0yLjgtMi44LTIuOEM4Ni42LDE0LjIsODUuNSwxNS40LDg1LjUsMTd6Ii8+Cgk8cGF0aCBkPSJNOTguNSwyMC41TDkzLjcsMTJIOTdsMy4xLDUuN2wyLjgtNS43aDMuMmwtOCwxNS4zaC0zLjJMOTguNSwyMC41eiIvPgoJPHBhdGggZD0iTTU0LDEzLjdoLTIuOGMwLDAtNC4yLDAtNC4yLDB2Mi44aDMuN2MtMC42LDEuOS0yLDMuMi00LjYsMy4yYy0yLjksMC01LTIuNC01LTUuM1M0My4xLDksNDYsOWMxLjYsMCwzLjIsMC44LDQuMiwyLjEKCQlsMi4zLTEuNUM1MSw3LjUsNDguNiw2LjMsNDYsNi4zYy00LjQsMC04LDMuNi04LDguMXMzLjQsOC4xLDgsOC4xczgtMy42LDgtOC4xQzU0LjEsMTQuMSw1NCwxMy45LDU0LDEzLjd6Ii8+CjwvZz4KPGc+Cgk8Zz4KCQk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMjUsMTRoLTd2Mmg0LjhjLTAuNywzLTIuOSw1LjUtNS44LDYuNUw1LjUsMTFjMS4yLTMuNSw0LjYtNiw4LjUtNmMzLDAsNS43LDEuNSw3LjQsMy44bDEuNS0xLjMKCQkJQzIwLjksNC44LDE3LjcsMywxNCwzQzguOCwzLDQuNCw2LjcsMy4zLDExLjZsMTMuMiwxMy4yQzIxLjMsMjMuNiwyNSwxOS4yLDI1LDE0eiIvPgoJCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0zLDE0LjFjMCwyLjgsMS4xLDUuNSwzLjIsNy42YzIuMSwyLjEsNC45LDMuMiw3LjYsMy4yTDMsMTQuMXoiLz4KCTwvZz4KCTxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik0xNCwwQzYuMywwLDAsNi4zLDAsMTRzNi4zLDE0LDE0LDE0czE0LTYuMywxNC0xNFMyMS43LDAsMTQsMHogTTYuMiwyMS44Yy0yLjEtMi4xLTMuMi00LjktMy4yLTcuNkwxMy45LDI1CgkJQzExLjEsMjQuOSw4LjMsMjMuOSw2LjIsMjEuOHogTTE2LjQsMjQuN0wzLjMsMTEuNkM0LjQsNi43LDguOCwzLDE0LDNjMy43LDAsNi45LDEuOCw4LjksNC41bC0xLjUsMS4zQzE5LjcsNi41LDE3LDUsMTQsNQoJCWMtMy45LDAtNy4yLDIuNS04LjUsNkwxNywyMi41YzIuOS0xLDUuMS0zLjUsNS44LTYuNUgxOHYtMmg3QzI1LDE5LjIsMjEuMywyMy42LDE2LjQsMjQuN3oiLz4KPC9nPgo8L3N2Zz4K"}),i.createElement(B.Image,{width:75,height:180,alt:"171x180",src:Qe}))),i.createElement(Pe,{className:"d-flex mb-4"},i.createElement(ye,{size:"lg",type:"search",placeholder:"Begin typing to search...",className:"me-2","aria-label":"Search",value:r.query,onChange:function(e){var a=e.target.value,i=t.filter((function(e){var t=e.node.frontmatter,i=t.title,s=t.badges;return e.node.excerpt.toLowerCase().includes(a.toLowerCase())||i.toLowerCase().includes(a.toLowerCase())||s&&s.join("").toLowerCase().includes(a.toLowerCase())}));l({query:a,filteredPosts:i})}})),i.createElement(Fe.Z,{variant:"info",className:"mb-4"},n.length," results"),n.map((function(e){return i.createElement(U,{key:e.node.id,post:e.node})})),i.createElement("hr",null)))),i.createElement(Ae.Z,null)))}}}]);
//# sourceMappingURL=component---src-pages-index-jsx-e5a7c90ed0a59e2d2ef8.js.map