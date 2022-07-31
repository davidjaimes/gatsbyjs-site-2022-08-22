(self.webpackChunkdavidjaimes_com=self.webpackChunkdavidjaimes_com||[]).push([[731],{4192:function(e,a,t){"use strict";t.r(a),t.d(a,{_frontmatter:function(){return r},default:function(){return m}});var n=t(9756),s=(t(7294),t(4983)),o=t(3224),i=["components"],r={},l={_frontmatter:r},c=o.Z;function m(e){var a=e.components,t=(0,n.Z)(e,i);return(0,s.kt)(c,Object.assign({},l,t,{components:a,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Turn your GitHub respository into an elegant webiste using GitHub Pages. GitHub Pages also supports using custom domains and changing from the default, like ",(0,s.kt)("code",{parentName:"p",className:"language-text"},"username.github.io"),", to any domain you own."),(0,s.kt)("p",null,"In this tutorial I will show you how to your host own website (domain purchase necessary) and create a custom email address (e.g., ",(0,s.kt)("code",{parentName:"p",className:"language-text"},"hello@davidjaimes.com"),") for free. This is an alternative to using services such as Squarespace, Wix, Google Workspace. That's a savings of $20 USD per month. This tutorial assumes you have a website ready to be published."),(0,s.kt)("br",null),(0,s.kt)("h2",null,"Custom Domain"),(0,s.kt)("p",null,"Go to ",(0,s.kt)("a",{parentName:"p",href:"https://domains.google"},"Google Domains website")," and select your desired personal or professional domain. I went ahead and purchased ",(0,s.kt)("code",{parentName:"p",className:"language-text"},"https://davidjaimes.com")," for $12 USD per year. No need to buy a more expensive domain ending (i.e., ",(0,s.kt)("code",{parentName:"p",className:"language-text"},"https://davidjaimes.movie")," for $320 USD per year)."),(0,s.kt)("p",null,"The first thing to do is head on over to ",(0,s.kt)("strong",{parentName:"p"},"DNS")," settings and create new custom resource records. This ",(0,s.kt)("a",{parentName:"p",href:"https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site"},"GitHub Docs page")," gives specific instructions but can be a little confusing to follow because they are not Google Domains specific. Create the ",(0,s.kt)("code",{parentName:"p",className:"language-text"},"A")," record:"),(0,s.kt)("div",{className:"gatsby-highlight","data-language":"text"},(0,s.kt)("pre",{parentName:"div",className:"language-text"},(0,s.kt)("code",{parentName:"pre",className:"language-text"},"Host Name    Type    TTL     Data\n@            A       3600    185.199.108.153\n                             185.199.109.153\n                             185.199.110.153\n                             185.199.111.153"))),(0,s.kt)("br",null),(0,s.kt)("p",null,"Next, create a ",(0,s.kt)("code",{parentName:"p",className:"language-text"},"CNAME"),' record and don\'t forget the period (".") at the end of your data entry:'),(0,s.kt)("div",{className:"gatsby-highlight","data-language":"text"},(0,s.kt)("pre",{parentName:"div",className:"language-text"},(0,s.kt)("code",{parentName:"pre",className:"language-text"},"Host Name    Type     TTL     Data\nwww          CNAME    3600    davidjaimes.github.io."))),(0,s.kt)("p",null,(0,s.kt)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"768px"}},"\n      ",(0,s.kt)("a",{parentName:"span",className:"gatsby-resp-image-link",href:"/static/3137b4900ef1a81bad5c5738fadf6ed8/d51b4/custom-records.png",style:{display:"block"},target:"_blank",rel:"noopener"},"\n    ",(0,s.kt)("span",{parentName:"a",className:"gatsby-resp-image-background-image",style:{paddingBottom:"56.77083333333333%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAAAsTAAALEwEAmpwYAAABq0lEQVQoz22TW46cQAxF2f8Cspt85yc7yESaqGdCM1QVuN4Pqm5k092JeoJkmQJ8dO1rppgyiBxoMzDaIKaE3juO4/gUvT/FcYve4ZzD689fmJwPWJXG9bqArIN1HkQWtVaUUlHqLUpBLkXy8/397EPA5EPEThYuRJTawGfnvCjddwJZi51Iiv53DQB9DPQBHEfHpM2Gy9s7lo9VYCFGOO9hncO6rlBKYVUKWuszG4Nt27BqC71ZeO9RUgBQZCyT2hze5hXv8wfmRYPcCQwhgIikwJgNxhjs+y7PGK4MwYWE0RK+vxC+fCXEXDG9zh4/LgS1ZxjbsJooc+QWGdpak9nknJFSkmADSs7ybhwVlzXi20tCLg0Tz4cN4aLazhkykOUzlB1kg+6ZIQwV2BgobTzmKS1vO2G+LggxPUzh+TGAC56DQdw+B38TyglNdaAxkNdGafMA8tla99nNcSph1cuyiFms6K/XQGsHphCztGh2EpgotE4Ad5X/qmVIjFHalh+gj8faiEKG8cq8/54FyH8OR70tMxdZa6VVhnFmp9lxNsqmgVw7Yjlb/gMsu1VfTcDVXgAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,s.kt)("img",{parentName:"a",className:"gatsby-resp-image-image",alt:"Custom DNS Records",title:"Custom DNS Records",src:"/static/3137b4900ef1a81bad5c5738fadf6ed8/d1b73/custom-records.png",srcSet:["/static/3137b4900ef1a81bad5c5738fadf6ed8/9e591/custom-records.png 192w","/static/3137b4900ef1a81bad5c5738fadf6ed8/8cd98/custom-records.png 384w","/static/3137b4900ef1a81bad5c5738fadf6ed8/d1b73/custom-records.png 768w","/static/3137b4900ef1a81bad5c5738fadf6ed8/d51b4/custom-records.png 1029w"],sizes:"(max-width: 768px) 100vw, 768px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n  "),"\n    ")),(0,s.kt)("br",null),(0,s.kt)("h2",null,"GitHub Account"),(0,s.kt)("p",null,"Setup a free account with ",(0,s.kt)("a",{parentName:"p",href:"https://github.com"},"Github")," and create a repository with structure ",(0,s.kt)("code",{parentName:"p",className:"language-text"},"username.github.io"),". For example, my repository name is ",(0,s.kt)("code",{parentName:"p",className:"language-text"},"davidjaimes.github.io")," and it set as a public repo and not to private. This will not work if your repo is set to private."),(0,s.kt)("p",null,"Next, go to ",(0,s.kt)("strong",{parentName:"p"},"Settings > Pages")," and enter your newly acquired domain address in the ",(0,s.kt)("strong",{parentName:"p"},"Custom domain")," field and make sure to check the ",(0,s.kt)("strong",{parentName:"p"},"Enforce HTTPS")," option. Now test your settings by entering the following command into your terminal:"),(0,s.kt)("div",{className:"gatsby-highlight","data-language":"bash"},(0,s.kt)("pre",{parentName:"div",className:"language-bash"},(0,s.kt)("code",{parentName:"pre",className:"language-bash"},(0,s.kt)("span",{parentName:"code",className:"token function"},"dig")," +noall +answer davidjaimes.com"))),(0,s.kt)("p",null,"This is the ouput:"),(0,s.kt)("div",{className:"gatsby-highlight","data-language":"text"},(0,s.kt)("pre",{parentName:"div",className:"language-text"},(0,s.kt)("code",{parentName:"pre",className:"language-text"},"davidjaimes.com.        3055    IN      A       185.199.110.153\ndavidjaimes.com.        3055    IN      A       185.199.111.153\ndavidjaimes.com.        3055    IN      A       185.199.109.153\ndavidjaimes.com.        3055    IN      A       185.199.108.153"))),(0,s.kt)("br",null),(0,s.kt)("br",null),(0,s.kt)("h2",null,"Custom Email Address"),(0,s.kt)("p",null,"Login into your Google account and go to ",(0,s.kt)("strong",{parentName:"p"},"Manage Google Account > Security > Signing into to Google > App passwords"),". Generate an app password. For example, mine is ",(0,s.kt)("code",{parentName:"p",className:"language-text"},"itdmwqjhowffvbgj"),". Next, go to your Gmail inbox and go to ",(0,s.kt)("strong",{parentName:"p"},"Settings > See all settings > Accounts and Import > Send mail as"),' and click on "add another email address".'),(0,s.kt)("br",null),(0,s.kt)("br",null))}m.isMDXComponent=!0},3224:function(e,a,t){"use strict";t.d(a,{Z:function(){return c}});var n=t(7294),s=t(6187),o=t(994),i=t(7408);t(5414);var r=t(260),l=t(5216);function c(e){var a=e.children,t=e.pageContext.frontmatter,c=t.title,m=t.description;return n.createElement(n.Fragment,null,n.createElement("headSEO",null),n.createElement(r.Z,null),n.createElement(s.Z,{fluid:!0},n.createElement(o.Z,{className:"justify-content-center m-0"},n.createElement(i.Z,{style:{maxWidth:"768px"}},n.createElement("h1",{align:"center",style:{marginTop:"2em"}},c),n.createElement("p",{align:"center"},m),n.createElement("br",null),n.createElement("br",null),a))),n.createElement(l.Z,null))}}}]);
//# sourceMappingURL=component---src-pages-github-google-domains-index-mdx-a65b06c01b20c3192add.js.map