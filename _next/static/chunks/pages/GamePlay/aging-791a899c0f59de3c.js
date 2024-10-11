(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[472],{9274:function(i,s,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/GamePlay/aging",function(){return e(4063)}])},4063:function(i,s,e){"use strict";e.r(s),e.d(s,{useTOC:function(){return h}});var t=e(5893),n=e(7812),a=e(7080);e(1392),e(237);var r=e(8925);function h(i){return[{value:"Aging Mechanic of Entities",id:"aging-mechanic-of-entities",depth:2},{value:"Code and Functions",id:"code-and-functions",depth:2},{value:"1. Function getTokenCreationTimestamp(uint256 tokenId)",id:"1-function-gettokencreationtimestampuint256-tokenid",depth:3},{value:"2. Function getTokenAge(uint256 tokenId)",id:"2-function-gettokenageuint256-tokenid",depth:3},{value:"3. Function calculateAge",id:"3-function-calculateage",depth:3}]}s.default=(0,n.c)(function(i){let{toc:s=h(i)}=i,e={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",span:"span",...(0,r.a)(),...i.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h1,{children:"Aging"}),"\n",(0,t.jsx)(e.p,{children:"The ageing mechanic is a vital game mechanic for the TraitForge ecosystem, boosting the PVP aspect of TraitForge. Aging provides a core gameplay mechanic for the influence of the value of TraitForge Entities, creating a broader playstyle for players to engage with."}),"\n",(0,t.jsx)(e.h2,{id:s[0].id,children:s[0].value}),"\n",(0,t.jsx)(e.p,{children:"Every Entity ages by blocktime from their mint date, at a speed proportional to their Performance Factor (determined by entropy).\nThe fastest should mature fully after 30 days, with the slowest taking almost 2 years. Full maturity simply means their Nuke Factor is computed to be the maximum of 50%.\nMature Entities would be extremely lucrative to forge with or nuke, as they would be able to claim 50% of the Nuke Fund."}),"\n",(0,t.jsx)(e.h2,{id:s[1].id,children:s[1].value}),"\n",(0,t.jsx)(e.h3,{id:s[2].id,children:s[2].value}),"\n",(0,t.jsx)(e.p,{children:"This function retrieves the creation timestamp of an Entity based on its tokenId. It ensures the entity exists by checking if it has an owner. If the token doesn’t exist, it reverts with an error. This timestamp is essential for calculating the age of the Entity and other time-dependent attributes."}),"\n",(0,t.jsx)(e.pre,{tabIndex:"0","data-language":"solidity","data-word-wrap":"",children:(0,t.jsxs)(e.code,{children:[(0,t.jsxs)(e.span,{children:[(0,t.jsx)(e.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"function"}),(0,t.jsx)(e.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:" getTokenCreationTimestamp"}),(0,t.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"("})]}),"\n",(0,t.jsxs)(e.span,{children:[(0,t.jsx)(e.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:"    uint256"}),(0,t.jsx)(e.span,{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"},children:" tokenId"})]}),"\n",(0,t.jsxs)(e.span,{children:[(0,t.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"  ) "}),(0,t.jsx)(e.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"public"}),(0,t.jsx)(e.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:" view"}),(0,t.jsx)(e.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:" returns"}),(0,t.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:" ("}),(0,t.jsx)(e.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:"uint256"}),(0,t.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:") {"})]}),"\n",(0,t.jsxs)(e.span,{children:[(0,t.jsx)(e.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"    require"}),(0,t.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"("})]}),"\n",(0,t.jsxs)(e.span,{children:[(0,t.jsx)(e.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"      ownerOf"}),(0,t.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"(tokenId) "}),(0,t.jsx)(e.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"!="}),(0,t.jsx)(e.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:" address"}),(0,t.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"("}),(0,t.jsx)(e.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:"0"}),(0,t.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"),"})]}),"\n",(0,t.jsx)(e.span,{children:(0,t.jsx)(e.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:"      'ERC721: query for nonexistent token'"})}),"\n",(0,t.jsx)(e.span,{children:(0,t.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"    );"})}),"\n",(0,t.jsxs)(e.span,{children:[(0,t.jsx)(e.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"    return"}),(0,t.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:" tokenCreationTimestamps[tokenId];"})]}),"\n",(0,t.jsx)(e.span,{children:(0,t.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"  }"})})]})}),"\n",(0,t.jsx)(e.h3,{id:s[3].id,children:s[3].value}),"\n",(0,t.jsx)(e.p,{children:"Calculates and returns the age of an NFT in seconds format. This function uses the creation timestamp obtained from getTokenCreationTimestamp and subtracts it from the current block timestamp (block.timestamp). It also checks that the token exists before performing the calculation."}),"\n",(0,t.jsx)(e.pre,{tabIndex:"0","data-language":"solidity","data-word-wrap":"",children:(0,t.jsxs)(e.code,{children:[(0,t.jsxs)(e.span,{children:[(0,t.jsx)(e.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:" function"}),(0,t.jsx)(e.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:" getTokenAge"}),(0,t.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"("}),(0,t.jsx)(e.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:"uint256"}),(0,t.jsx)(e.span,{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"},children:" tokenId"}),(0,t.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:") "}),(0,t.jsx)(e.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"public"}),(0,t.jsx)(e.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:" view"}),(0,t.jsx)(e.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:" returns"}),(0,t.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:" ("}),(0,t.jsx)(e.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:"uint256"}),(0,t.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:") {"})]}),"\n",(0,t.jsxs)(e.span,{children:[(0,t.jsx)(e.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"    require"}),(0,t.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"("})]}),"\n",(0,t.jsxs)(e.span,{children:[(0,t.jsx)(e.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"      ownerOf"}),(0,t.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"(tokenId) "}),(0,t.jsx)(e.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"!="}),(0,t.jsx)(e.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:" address"}),(0,t.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"("}),(0,t.jsx)(e.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:"0"}),(0,t.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"),"})]}),"\n",(0,t.jsx)(e.span,{children:(0,t.jsx)(e.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:"      'ERC721: query for nonexistent token'"})}),"\n",(0,t.jsx)(e.span,{children:(0,t.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"    );"})}),"\n",(0,t.jsxs)(e.span,{children:[(0,t.jsx)(e.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"    return"}),(0,t.jsx)(e.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:" block"}),(0,t.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:".timestamp "}),(0,t.jsx)(e.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"-"}),(0,t.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:" tokenCreationTimestamps[tokenId];"})]}),"\n",(0,t.jsx)(e.span,{children:(0,t.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"  }"})})]})}),"\n",(0,t.jsx)(e.h3,{id:s[4].id,children:s[4].value}),"\n",(0,t.jsx)(e.p,{children:"The calculateAge function computes the age of an entity by ensuring it exists. It calculates the number of days since the token’s creation and adjusts this based on a performance factor derived from the entities entropy. The age is calculated by converting the adjusted days into years. This function combines the actual elapsed time since the entity’s creation with an element influenced by the entity’s unique properties, returning the age as an integer value in years."}),"\n",(0,t.jsx)(e.pre,{tabIndex:"0","data-language":"solidity","data-word-wrap":"",children:(0,t.jsxs)(e.code,{children:[(0,t.jsxs)(e.span,{children:[(0,t.jsx)(e.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"function"}),(0,t.jsx)(e.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:" calculateAge"}),(0,t.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"("}),(0,t.jsx)(e.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:"uint256"}),(0,t.jsx)(e.span,{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"},children:" tokenId"}),(0,t.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:") "}),(0,t.jsx)(e.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"public"}),(0,t.jsx)(e.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:" view"}),(0,t.jsx)(e.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:" returns"}),(0,t.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:" ("}),(0,t.jsx)(e.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:"uint256"}),(0,t.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:") {"})]}),"\n",(0,t.jsxs)(e.span,{children:[(0,t.jsx)(e.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"    require"}),(0,t.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"(nftContract."}),(0,t.jsx)(e.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"ownerOf"}),(0,t.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"(tokenId) "}),(0,t.jsx)(e.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"!="}),(0,t.jsx)(e.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:" address"}),(0,t.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"("}),(0,t.jsx)(e.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:"0"}),(0,t.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"), "}),(0,t.jsx)(e.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:"'Token does not exist'"}),(0,t.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:");"})]}),"\n",(0,t.jsx)(e.span,{children:" "}),"\n",(0,t.jsxs)(e.span,{children:[(0,t.jsx)(e.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:"    uint256"}),(0,t.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:" daysOld "}),(0,t.jsx)(e.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"="}),(0,t.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:" ("}),(0,t.jsx)(e.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:"block"}),(0,t.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:".timestamp "}),(0,t.jsx)(e.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"-"})]}),"\n",(0,t.jsxs)(e.span,{children:[(0,t.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"      nftContract."}),(0,t.jsx)(e.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"getTokenCreationTimestamp"}),(0,t.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"(tokenId)) "}),(0,t.jsx)(e.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"/"})]}),"\n",(0,t.jsxs)(e.span,{children:[(0,t.jsx)(e.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:"      60"}),(0,t.jsx)(e.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:" /"})]}),"\n",(0,t.jsxs)(e.span,{children:[(0,t.jsx)(e.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:"      60"}),(0,t.jsx)(e.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:" /"})]}),"\n",(0,t.jsxs)(e.span,{children:[(0,t.jsx)(e.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:"      24"}),(0,t.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:";"})]}),"\n",(0,t.jsxs)(e.span,{children:[(0,t.jsx)(e.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:"    uint256"}),(0,t.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:" perfomanceFactor "}),(0,t.jsx)(e.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"="}),(0,t.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:" nftContract."}),(0,t.jsx)(e.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"getTokenEntropy"}),(0,t.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"(tokenId) % "}),(0,t.jsx)(e.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:"10"}),(0,t.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:";"})]}),"\n",(0,t.jsx)(e.span,{children:" "}),"\n",(0,t.jsxs)(e.span,{children:[(0,t.jsx)(e.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:"    uint256"}),(0,t.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:" age "}),(0,t.jsx)(e.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"="}),(0,t.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:" (daysOld "}),(0,t.jsx)(e.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"*"})]}),"\n",(0,t.jsxs)(e.span,{children:[(0,t.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"      perfomanceFactor "}),(0,t.jsx)(e.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"*"})]}),"\n",(0,t.jsxs)(e.span,{children:[(0,t.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"      MAX_DENOMINATOR "}),(0,t.jsx)(e.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"*"})]}),"\n",(0,t.jsxs)(e.span,{children:[(0,t.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"      ageMultiplier) "}),(0,t.jsx)(e.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"/"}),(0,t.jsx)(e.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:" 365"}),(0,t.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"; "}),(0,t.jsx)(e.span,{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"},children:"// add 5 digits for decimals"})]}),"\n",(0,t.jsxs)(e.span,{children:[(0,t.jsx)(e.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"    return"}),(0,t.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:" age;"})]}),"\n",(0,t.jsx)(e.span,{children:(0,t.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"  }"})})]})})]})},"/GamePlay/aging",{filePath:"pages/GamePlay/aging.mdx",timestamp:1728428966e3,pageMap:a.v,frontMatter:{title:"Aging"},title:"Aging"},"undefined"==typeof RemoteContent?h:RemoteContent.useTOC)},7080:function(i,s,e){"use strict";e.d(s,{v:function(){return t}});let t=[{data:{index:{title:"Introduction",order:1},"Game-Strategy":{title:"Game Strategy",order:2},GamePlay:{title:"Gameplay",order:3},"TraitForger-Entity":{title:"TraitForger Entity",order:4},FAQs:{title:"FAQs",order:5}}},{name:"FAQs",route:"/FAQs",frontMatter:{title:"FAQs"}},{name:"Game-Strategy",route:"/Game-Strategy",children:[{name:"active-trading-and-market-strategy",route:"/Game-Strategy/active-trading-and-market-strategy",frontMatter:{title:"Active Trading and Market Strategy"}},{name:"mint-and-nuke",route:"/Game-Strategy/mint-and-nuke",frontMatter:{title:"Mint and Nuke"}},{name:"strategic-long-term-forging",route:"/Game-Strategy/strategic-long-term-forging",frontMatter:{title:"Strategic Long-Term Forging"}},{name:"the-long-game-aging-and-maximizing-nuke-value",route:"/Game-Strategy/the-long-game-aging-and-maximizing-nuke-value",frontMatter:{title:"The Long Game Aging and Maximizing Nuke Value"}}]},{name:"GamePlay",route:"/GamePlay",children:[{name:"aging",route:"/GamePlay/aging",frontMatter:{title:"Aging"}},{name:"dao-fund",route:"/GamePlay/dao-fund",frontMatter:{title:"DAO Fund"}},{name:"economic-activity",route:"/GamePlay/economic-activity",frontMatter:{title:"Economic Activity"}},{name:"entropy",route:"/GamePlay/entropy",frontMatter:{title:"Entropy"}},{name:"forging",route:"/GamePlay/forging",frontMatter:{title:"Forging"}},{name:"generations-and-minting",route:"/GamePlay/generations-and-minting",frontMatter:{title:"Generations and Minting"}},{name:"nuke-fund",route:"/GamePlay/nuke-fund",frontMatter:{title:"Nuke Fund"}},{name:"trait-token-airdrop",route:"/GamePlay/trait-token-airdrop",frontMatter:{title:"$TRAIT Token Airdrop"}}]},{name:"index",route:"/",frontMatter:{title:"Introduction"}},{name:"TraitForger-Entity",route:"/TraitForger-Entity",children:[{name:"forge-potential",route:"/TraitForger-Entity/forge-potential",frontMatter:{title:"Forge Potential"}},{name:"nuke-factor",route:"/TraitForger-Entity/nuke-factor",frontMatter:{title:"Nuke Factor"}},{name:"performance-factor",route:"/TraitForger-Entity/performance-factor",frontMatter:{title:"Performance Factor"}},{name:"role",route:"/TraitForger-Entity/role",frontMatter:{title:"Role"}},{name:"traits",route:"/TraitForger-Entity/traits",frontMatter:{title:"Traits"}},{name:"visuals",route:"/TraitForger-Entity/visuals",frontMatter:{title:"Visuals"}}]}]}},function(i){i.O(0,[83,888,774,179],function(){return i(i.s=9274)}),_N_E=i.O()}]);