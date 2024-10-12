(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[724],{7027:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/TraitForger-Entity/performance-factor",function(){return n(3311)}])},3311:function(e,t,n){"use strict";n.r(t),n.d(t,{useTOC:function(){return s}});var r=n(5893),a=n(7812),i=n(7080);n(1392),n(237);var o=n(8925);function s(e){return[{value:"Example of entropy use:",id:"example-of-entropy-use",depth:3},{value:"entropy: 123456",id:"entropy-123456",depth:3},{value:"Affect on Gameplay",id:"affect-on-gameplay",depth:2},{value:"Code and Functions",id:"code-and-functions",depth:2},{value:"1. Function calculateAge",id:"1-function-calculateage",depth:3}]}t.default=(0,a.c)(function(e){let{toc:t=s(e)}=e,n={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",span:"span",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{children:"Performance Factor"}),"\n",(0,r.jsx)(n.p,{children:"The “performance factor” is a numerical value that adjusts how the “age” of an entity is calculated. This factor is used to modify the standard calculation of time elapsed since the entities creation to reflect additional characteristics or behaviors encoded into the entity itself."}),"\n",(0,r.jsx)(n.p,{children:"PerformanceFactor is derived from the entropy of the token modulo 10. This means the performance factor can vary between 0 to 9.\nThis factor modulates the daysOld count, effectively altering the perceived age of the token. If the performance factor is higher, the token ages faster in terms of the age calculation."}),"\n",(0,r.jsx)(n.h3,{id:t[0].id,children:t[0].value}),"\n",(0,r.jsx)(n.h3,{id:t[1].id,children:t[1].value}),"\n",(0,r.jsx)(n.pre,{tabIndex:"0","data-language":"plaintext","data-word-wrap":"",children:(0,r.jsxs)(n.code,{children:[(0,r.jsx)(n.span,{children:(0,r.jsx)(n.span,{children:"Entropy[1] = varOptions1"})}),"\n",(0,r.jsx)(n.span,{children:(0,r.jsx)(n.span,{children:"Entropy[2] = varOptions2"})}),"\n",(0,r.jsx)(n.span,{children:(0,r.jsx)(n.span,{children:"Entropy[3] = varOptions3 && colorOptions3"})}),"\n",(0,r.jsx)(n.span,{children:(0,r.jsx)(n.span,{children:"Entropy[4] = varOptions4 && colorOptions4"})}),"\n",(0,r.jsx)(n.span,{children:(0,r.jsx)(n.span,{children:"Entropy[5] = colorOptions5 && color2"})}),"\n",(0,r.jsx)(n.span,{children:(0,r.jsx)(n.span,{children:"Entropy[6] = colorOptions6 && color1"})}),"\n",(0,r.jsx)(n.span,{children:(0,r.jsx)(n.span,{children:"Entropy /40 = initalNukeFactor"})}),"\n",(0,r.jsx)(n.span,{children:(0,r.jsx)(n.span,{children:"Entropy % 10 = performanceFactor"})}),"\n",(0,r.jsx)(n.span,{children:(0,r.jsx)(n.span,{children:"Entropy % 3 ? 0 == Role"})})]})}),"\n",(0,r.jsx)(n.h2,{id:t[2].id,children:t[2].value}),"\n",(0,r.jsx)(n.p,{children:"Performance factor adds massive gameplay enchancements to TraitForge. It introduces uniqueness to entities, and acts as contributing factor to the value of entity."}),"\n",(0,r.jsx)(n.p,{children:"Performance factor allows for competitive scenarios involving PVP. Players lucky enough to mint a high performance factor entity will have faster access higher claim to the NukeFund. Where as lower performance factor holders will be forced to either take lower claims of the NukeFund, or play the long game."}),"\n",(0,r.jsx)(n.h2,{id:t[3].id,children:t[3].value}),"\n",(0,r.jsx)(n.h3,{id:t[4].id,children:t[4].value}),"\n",(0,r.jsx)(n.p,{children:"Function calculateAge determines the age of an entity by calculating the days since its creation and adjusting this number with a performance factor derived from the entities entropy. It ensures the entity exists, computes the days old, scales this by the entropy-based performance factor, and converts the result from days to years. The age is then returned as an integer."}),"\n",(0,r.jsx)(n.pre,{tabIndex:"0","data-language":"plaintext","data-word-wrap":"",children:(0,r.jsxs)(n.code,{children:[(0,r.jsx)(n.span,{children:(0,r.jsx)(n.span,{children:"function calculateAge(uint256 tokenId) public view returns (uint256) {"})}),"\n",(0,r.jsx)(n.span,{children:(0,r.jsx)(n.span,{children:"    require(nftContract.ownerOf(tokenId) != address(0), 'Token does not exist');"})}),"\n",(0,r.jsx)(n.span,{children:(0,r.jsx)(n.span,{})}),"\n",(0,r.jsx)(n.span,{children:(0,r.jsx)(n.span,{children:"    uint256 daysOld = (block.timestamp -"})}),"\n",(0,r.jsx)(n.span,{children:(0,r.jsx)(n.span,{children:"      nftContract.getTokenCreationTimestamp(tokenId)) /"})}),"\n",(0,r.jsx)(n.span,{children:(0,r.jsx)(n.span,{children:"      60 /"})}),"\n",(0,r.jsx)(n.span,{children:(0,r.jsx)(n.span,{children:"      60 /"})}),"\n",(0,r.jsx)(n.span,{children:(0,r.jsx)(n.span,{children:"      24;"})}),"\n",(0,r.jsx)(n.span,{children:(0,r.jsx)(n.span,{children:"    uint256 perfomanceFactor = nftContract.getTokenEntropy(tokenId) % 10;"})}),"\n",(0,r.jsx)(n.span,{children:(0,r.jsx)(n.span,{})}),"\n",(0,r.jsx)(n.span,{children:(0,r.jsx)(n.span,{children:"    uint256 age = (daysOld *"})}),"\n",(0,r.jsx)(n.span,{children:(0,r.jsx)(n.span,{children:"      perfomanceFactor *"})}),"\n",(0,r.jsx)(n.span,{children:(0,r.jsx)(n.span,{children:"      MAX_DENOMINATOR *"})}),"\n",(0,r.jsx)(n.span,{children:(0,r.jsx)(n.span,{children:"      ageMultiplier) / 365; // add 5 digits for decimals"})}),"\n",(0,r.jsx)(n.span,{children:(0,r.jsx)(n.span,{children:"    return age;"})}),"\n",(0,r.jsx)(n.span,{children:(0,r.jsx)(n.span,{children:"  }"})})]})})]})},"/TraitForger-Entity/performance-factor",{filePath:"pages/TraitForger-Entity/performance-factor.mdx",timestamp:1728428966e3,pageMap:i.v,frontMatter:{title:"Performance Factor"},title:"Performance Factor"},"undefined"==typeof RemoteContent?s:RemoteContent.useTOC)},7080:function(e,t,n){"use strict";n.d(t,{v:function(){return r}});let r=[{data:{index:{title:"Introduction",order:1},"Game-Strategy":{title:"Game Strategy",order:2},GamePlay:{title:"Gameplay",order:3},"TraitForger-Entity":{title:"TraitForger Entity",order:4},FAQs:{title:"FAQs",order:5}}},{name:"FAQs",route:"/FAQs",frontMatter:{title:"FAQs"}},{name:"Game-Strategy",route:"/Game-Strategy",children:[{name:"active-trading-and-market-strategy",route:"/Game-Strategy/active-trading-and-market-strategy",frontMatter:{title:"Active Trading and Market Strategy"}},{name:"mint-and-nuke",route:"/Game-Strategy/mint-and-nuke",frontMatter:{title:"Mint and Nuke"}},{name:"strategic-long-term-forging",route:"/Game-Strategy/strategic-long-term-forging",frontMatter:{title:"Strategic Long-Term Forging"}},{name:"the-long-game-aging-and-maximizing-nuke-value",route:"/Game-Strategy/the-long-game-aging-and-maximizing-nuke-value",frontMatter:{title:"The Long Game Aging and Maximizing Nuke Value"}}]},{name:"GamePlay",route:"/GamePlay",children:[{name:"aging",route:"/GamePlay/aging",frontMatter:{title:"Aging"}},{name:"dao-fund",route:"/GamePlay/dao-fund",frontMatter:{title:"DAO Fund"}},{name:"economic-activity",route:"/GamePlay/economic-activity",frontMatter:{title:"Economic Activity"}},{name:"entropy",route:"/GamePlay/entropy",frontMatter:{title:"Entropy"}},{name:"forging",route:"/GamePlay/forging",frontMatter:{title:"Forging"}},{name:"generations-and-minting",route:"/GamePlay/generations-and-minting",frontMatter:{title:"Generations and Minting"}},{name:"nuke-fund",route:"/GamePlay/nuke-fund",frontMatter:{title:"Nuke Fund"}},{name:"trait-token-airdrop",route:"/GamePlay/trait-token-airdrop",frontMatter:{title:"$TRAIT Token Airdrop"}}]},{name:"index",route:"/",frontMatter:{title:"Introduction"}},{name:"TraitForger-Entity",route:"/TraitForger-Entity",children:[{name:"forge-potential",route:"/TraitForger-Entity/forge-potential",frontMatter:{title:"Forge Potential"}},{name:"nuke-factor",route:"/TraitForger-Entity/nuke-factor",frontMatter:{title:"Nuke Factor"}},{name:"performance-factor",route:"/TraitForger-Entity/performance-factor",frontMatter:{title:"Performance Factor"}},{name:"role",route:"/TraitForger-Entity/role",frontMatter:{title:"Role"}},{name:"traits",route:"/TraitForger-Entity/traits",frontMatter:{title:"Traits"}},{name:"visuals",route:"/TraitForger-Entity/visuals",frontMatter:{title:"Visuals"}}]}]}},function(e){e.O(0,[83,888,774,179],function(){return e(e.s=7027)}),_N_E=e.O()}]);