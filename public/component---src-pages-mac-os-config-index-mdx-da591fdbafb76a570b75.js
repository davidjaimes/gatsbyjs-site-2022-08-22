(self.webpackChunkdavidjaimes_com=self.webpackChunkdavidjaimes_com||[]).push([[8,79],{37:function(a,e,t){"use strict";t.r(e),t.d(e,{_frontmatter:function(){return r},default:function(){return i}});var n=t(9756),s=(t(7294),t(4983)),l=t(9997),o=["components"],r={},m={_frontmatter:r},p=l.Z;function i(a){var e=a.components,t=(0,n.Z)(a,o);return(0,s.kt)(p,Object.assign({},m,t,{components:e,mdxType:"MDXLayout"}),(0,s.kt)("h1",{align:"center",style:{marginTop:"2em"}},"macOS Configuration"),(0,s.kt)("br",null),(0,s.kt)("p",null,"Are you setting up a brand new Apple computer for the first time or are you have you forgotten the last process you took to get everything up and running? No worries. I have you covered and will lay out the steps to get up and running in no time. This is the general route I take whenever I execute a clean install on my Mac computer."),(0,s.kt)("p",null,"Here are the tools we will be setting up:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://developer.apple.com/xcode/"},"Xcode"),": Apple Developer Tools."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://ohmyz.sh/"},"Oh My Zsh"),": A delightful, open source, community-driven framework for managing your Zsh configuration."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://brew.sh/"},"Homebrew"),": The missing package manager for macOS."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://docs.conda.io/en/latest/miniconda.html"},"Miniconda"),": A free minimal installer for conda.\nand integrate systems more effectively."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tug.org/mactex/"},"MacTeX"),": A document preparation system."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://atom.io/"},"Atom"),": An open-source text editor for the 21st century.")),(0,s.kt)("br",null),(0,s.kt)("h1",null,"Xcode"),(0,s.kt)("p",null,"The first thing to install is Apple's command line tools."),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"Launch the Terminal application found in your ",(0,s.kt)("code",{parentName:"li",className:"language-text"},"Applications/Utilities")," directory."),(0,s.kt)("li",{parentName:"ol"},"Enter this install command:")),(0,s.kt)("div",{className:"gatsby-highlight","data-language":"shell"},(0,s.kt)("pre",{parentName:"div",className:"language-shell"},(0,s.kt)("code",{parentName:"pre",className:"language-shell"},(0,s.kt)("span",{parentName:"code",className:"command-line-prompt"},(0,s.kt)("span",{parentName:"span","data-user":"root","data-host":"localhost"})),"xcode-select --install"))),(0,s.kt)("br",null),(0,s.kt)("ol",{start:3},(0,s.kt)("li",{parentName:"ol"},"A pop up window appears and press the Install button. After the installation is done you can enter the ",(0,s.kt)("code",{parentName:"li",className:"language-text"},"gcc -version")," command and something similar to this should print out:")),(0,s.kt)("div",{className:"gatsby-highlight","data-language":"shell"},(0,s.kt)("pre",{parentName:"div",className:"language-shell"},(0,s.kt)("code",{parentName:"pre",className:"language-shell"},(0,s.kt)("span",{parentName:"code",className:"command-line-prompt"},(0,s.kt)("span",{parentName:"span","data-user":"root","data-host":"localhost"}),(0,s.kt)("span",{parentName:"span","data-user":"root","data-host":"localhost"}),(0,s.kt)("span",{parentName:"span","data-user":"root","data-host":"localhost"}),(0,s.kt)("span",{parentName:"span","data-user":"root","data-host":"localhost"}),(0,s.kt)("span",{parentName:"span","data-user":"root","data-host":"localhost"})),"Configured with: --prefix",(0,s.kt)("span",{parentName:"code",className:"token operator"},"="),"/Library/Developer/CommandLineTools/usr --with-gxx-include-dir",(0,s.kt)("span",{parentName:"code",className:"token operator"},"="),"/Library/Developer/CommandLineTools/SDKs/MacOSX.sdk/usr/include/c++/4.2.1\nApple clang version ",(0,s.kt)("span",{parentName:"code",className:"token number"},"11.0"),".0 ",(0,s.kt)("span",{parentName:"code",className:"token punctuation"},"("),"clang-1100.0.33.8",(0,s.kt)("span",{parentName:"code",className:"token punctuation"},")"),"\nTarget: x86_64-apple-darwin19.2.0\nThread model: posix\nInstalledDir: /Library/Developer/CommandLineTools/usr/bin"))),(0,s.kt)("br",null),(0,s.kt)("h1",null,"Oh My Zsh"),(0,s.kt)("p",null,"Install oh-my-zsh now and use this link to ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/ohmyzsh/ohmyzsh/wiki/Themes"},"change themes"),":"),(0,s.kt)("div",{className:"gatsby-highlight","data-language":"bash"},(0,s.kt)("pre",{parentName:"div",className:"language-bash"},(0,s.kt)("code",{parentName:"pre",className:"language-bash"},(0,s.kt)("span",{parentName:"code",className:"command-line-prompt"},(0,s.kt)("span",{parentName:"span","data-user":"root","data-host":"localhost"})),(0,s.kt)("span",{parentName:"code",className:"token function"},"sh")," -c ",(0,s.kt)("span",{parentName:"code",className:"token string"},'"',(0,s.kt)("span",{parentName:"span",className:"token variable"},(0,s.kt)("span",{parentName:"span",className:"token variable"},"$("),(0,s.kt)("span",{parentName:"span",className:"token function"},"curl")," -fsSL https://raw.github.com/ohmyzsh/ohmyzsh/master/tools/install.sh",(0,s.kt)("span",{parentName:"span",className:"token variable"},")")),'"')))),(0,s.kt)("br",null),(0,s.kt)("h1",null,"Homebrew"),(0,s.kt)("p",null,"Install Homebrew now:"),(0,s.kt)("div",{className:"gatsby-highlight","data-language":"bash"},(0,s.kt)("pre",{parentName:"div",className:"language-bash"},(0,s.kt)("code",{parentName:"pre",className:"language-bash"},(0,s.kt)("span",{parentName:"code",className:"command-line-prompt"},(0,s.kt)("span",{parentName:"span","data-user":"root","data-host":"localhost"})),"/usr/bin/ruby -e ",(0,s.kt)("span",{parentName:"code",className:"token string"},'"',(0,s.kt)("span",{parentName:"span",className:"token variable"},(0,s.kt)("span",{parentName:"span",className:"token variable"},"$("),(0,s.kt)("span",{parentName:"span",className:"token function"},"curl")," -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install",(0,s.kt)("span",{parentName:"span",className:"token variable"},")")),'"')))),(0,s.kt)("br",null),(0,s.kt)("h1",null,"Miniconda"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"Download the latest bash file from the ",(0,s.kt)("a",{parentName:"li",href:"https://docs.conda.io/en/latest/miniconda.html"},"Miniconda")," page and install with the following command:")),(0,s.kt)("div",{className:"gatsby-highlight","data-language":"bash"},(0,s.kt)("pre",{parentName:"div",className:"language-bash"},(0,s.kt)("code",{parentName:"pre",className:"language-bash"},(0,s.kt)("span",{parentName:"code",className:"command-line-prompt"},(0,s.kt)("span",{parentName:"span","data-user":"root","data-host":"localhost"})),(0,s.kt)("span",{parentName:"code",className:"token function"},"bash")," Miniconda3-latest-MacOSX-x86_64.sh"))),(0,s.kt)("ol",{start:2},(0,s.kt)("li",{parentName:"ol"},"Update conda and initialize zsh environment for macOS Catalina users:")),(0,s.kt)("div",{className:"gatsby-highlight","data-language":"bash"},(0,s.kt)("pre",{parentName:"div",className:"language-bash"},(0,s.kt)("code",{parentName:"pre",className:"language-bash"},(0,s.kt)("span",{parentName:"code",className:"command-line-prompt"},(0,s.kt)("span",{parentName:"span","data-user":"root","data-host":"localhost"}),(0,s.kt)("span",{parentName:"span","data-user":"root","data-host":"localhost"})),"conda update conda\nconda init ",(0,s.kt)("span",{parentName:"code",className:"token function"},"zsh")))),(0,s.kt)("ol",{start:3},(0,s.kt)("li",{parentName:"ol"},"Install all Python libraries at once (NumPy and SciPy will also be installed):")),(0,s.kt)("div",{className:"gatsby-highlight","data-language":"bash"},(0,s.kt)("pre",{parentName:"div",className:"language-bash"},(0,s.kt)("code",{parentName:"pre",className:"language-bash"},(0,s.kt)("span",{parentName:"code",className:"command-line-prompt"},(0,s.kt)("span",{parentName:"span","data-user":"root","data-host":"localhost"})),"conda ",(0,s.kt)("span",{parentName:"code",className:"token function"},"install")," matplotlib pandas astropy notebook scikit-learn"))))}i.isMDXComponent=!0},9997:function(a,e,t){"use strict";t.d(e,{Z:function(){return i}});var n=t(7294),s=t(5414),l=t(6187),o=t(994),r=t(7408),m=t(260),p=t(5216);function i(a){var e=a.children,t=a.pageContext.frontmatter,i=t.title,c=t.subtitle;return n.createElement(n.Fragment,null,n.createElement(s.q,null,n.createElement("title",null,"David Jaimes: ",i),n.createElement("html",{lang:"en"})),n.createElement(m.Z,null),n.createElement(l.Z,{fluid:!0},n.createElement(o.Z,{className:"justify-content-center m-0"},n.createElement(r.Z,{style:{maxWidth:"768px"}},n.createElement("h1",{align:"center",style:{marginTop:"2em"}},i),n.createElement("p",{align:"center"},c),n.createElement("br",null),n.createElement("br",null),e))),n.createElement(p.Z,null))}}}]);
//# sourceMappingURL=component---src-pages-mac-os-config-index-mdx-da591fdbafb76a570b75.js.map