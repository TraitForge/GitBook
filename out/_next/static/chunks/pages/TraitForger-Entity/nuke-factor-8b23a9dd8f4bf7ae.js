(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[351],{5548:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/TraitForger-Entity/nuke-factor",function(){return t(2128)}])},2128:function(n,e,t){"use strict";t.r(e),t.d(e,{useTOC:function(){return o}});var a=t(5893),r=t(7812),i=t(7080);t(1392),t(237);var s=t(8925);function o(n){return[{value:"Initialnukefactor:",id:"initialnukefactor",depth:3},{value:"entropy: 123456",id:"entropy-123456",depth:3},{value:"Finalnukefactor:",id:"finalnukefactor",depth:3},{value:"Code and Functions",id:"code-and-functions",depth:2},{value:"Function calculateNukeFactor",id:"function-calculatenukefactor",depth:3},{value:"Function nuke",id:"function-nuke",depth:3}]}e.default=(0,r.c)(function(n){let{toc:e=o(n)}=n,t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",span:"span",ul:"ul",...(0,s.a)(),...n.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{children:"Nuke Factor"}),"\n",(0,a.jsx)(t.p,{children:"Nuke Factor represents an entities stake in the Nuke Fund. Upon minting, an entity receives a Nuke Factor ranging from 1-25%, determined by its inherent entropy. Through engaging gameplay elements like aging and forging, this percentage can be elevated up to a maximum of 50%, which the the maximum claimable amount of the Nuke Fund. As the cornerstone of the TraitForge ecosystem, Nuke Factor fuels competition, with players striving to achieve the highest percentage NukeFactor entities.\nNukeFactor has two stages. These stages are used to define the initial value of the entities NukeFactor, and the final nuke factor percentage which is the claimable amount from the Nuke Fund."}),"\n",(0,a.jsx)(t.h3,{id:e[0].id,children:e[0].value}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"The initialNukeFactor is computed directly from the entropy of an entity."}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.code,{children:"{initialNukeFactor} = {entropy}{40}"})}),"\n",(0,a.jsx)(t.h3,{id:e[1].id,children:e[1].value}),"\n",(0,a.jsx)(t.pre,{tabIndex:"0","data-language":"plaintext","data-word-wrap":"",children:(0,a.jsxs)(t.code,{children:[(0,a.jsx)(t.span,{children:(0,a.jsx)(t.span,{children:"Entropy[1] = varOptions1"})}),"\n",(0,a.jsx)(t.span,{children:(0,a.jsx)(t.span,{children:"Entropy[2] = varOptions2"})}),"\n",(0,a.jsx)(t.span,{children:(0,a.jsx)(t.span,{children:"Entropy[3] = varOptions3 && colorOptions3"})}),"\n",(0,a.jsx)(t.span,{children:(0,a.jsx)(t.span,{children:"Entropy[4] = varOptions4 && colorOptions4"})}),"\n",(0,a.jsx)(t.span,{children:(0,a.jsx)(t.span,{children:"Entropy[5] = colorOptions5 && color2"})}),"\n",(0,a.jsx)(t.span,{children:(0,a.jsx)(t.span,{children:"Entropy[6] = colorOptions6 && color1"})}),"\n",(0,a.jsx)(t.span,{children:(0,a.jsx)(t.span,{children:"Entropy /40 = initalNukeFactor"})}),"\n",(0,a.jsx)(t.span,{children:(0,a.jsx)(t.span,{children:"Entropy % 10 = performanceFactor"})}),"\n",(0,a.jsx)(t.span,{children:(0,a.jsx)(t.span,{children:"Entropy % 3 ? 0 == Role"})})]})}),"\n",(0,a.jsx)(t.h3,{id:e[2].id,children:e[2].value}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"The finalNukeFactor incorporates the initialNukeFactor and modifies it further by adding a component based on the age of the entity."}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"AgeInDays is calculated separately and represents how long the token has been “alive” or active since its creation. The calculation ageInDays * 250 / 10000 effectively scales the age to have a proportionate impact on the NukeFactor (2.5% increase), ensuring that older entity’s can have a potentially higher influence or value."}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:"finalNukeFactor = ((adjustedAge * defaultNukeFactorIncrease) / 100000) + initialNukeFactor"}),"\n",(0,a.jsx)(t.h2,{id:e[3].id,children:e[3].value}),"\n",(0,a.jsx)(t.h3,{id:e[4].id,children:e[4].value}),"\n",(0,a.jsx)(t.p,{children:"Calculates the nuke factor of an entity, which influences the claimable amount from the nuke fund. The function checks the entity’s existence, then uses its entropy and age to compute the “finalNukeFactor”. It divides the entities entropy by fourty for an initial value, and adds this to a scaled product of the entity’s age in days. This resultant nuke factor determines the portion of the fund an entity owner can claim, integrating both the entity’s unique attributes and its age into the calculation."}),"\n",(0,a.jsx)(t.pre,{tabIndex:"0","data-language":"plaintext","data-word-wrap":"",children:(0,a.jsxs)(t.code,{children:[(0,a.jsx)(t.span,{children:(0,a.jsx)(t.span,{children:"function calculateNukeFactor(uint256 tokenId) public view returns (uint256) {"})}),"\n",(0,a.jsx)(t.span,{children:(0,a.jsx)(t.span,{children:"    require("})}),"\n",(0,a.jsx)(t.span,{children:(0,a.jsx)(t.span,{children:"      nftContract.ownerOf(tokenId) != address(0),"})}),"\n",(0,a.jsx)(t.span,{children:(0,a.jsx)(t.span,{children:"      'ERC721: operator query for nonexistent token'"})}),"\n",(0,a.jsx)(t.span,{children:(0,a.jsx)(t.span,{children:"    );"})}),"\n",(0,a.jsx)(t.span,{children:(0,a.jsx)(t.span,{})}),"\n",(0,a.jsx)(t.span,{children:(0,a.jsx)(t.span,{children:"    uint256 entropy = nftContract.getTokenEntropy(tokenId);"})}),"\n",(0,a.jsx)(t.span,{children:(0,a.jsx)(t.span,{children:"    uint256 adjustedAge = calculateAge(tokenId);"})}),"\n",(0,a.jsx)(t.span,{children:(0,a.jsx)(t.span,{})}),"\n",(0,a.jsx)(t.span,{children:(0,a.jsx)(t.span,{children:"    uint256 initialNukeFactor = entropy / 40; // calcualte initalNukeFactor based on entropy"})}),"\n",(0,a.jsx)(t.span,{children:(0,a.jsx)(t.span,{})}),"\n",(0,a.jsx)(t.span,{children:(0,a.jsx)(t.span,{children:"    uint256 finalNukeFactor = ((adjustedAge * defaultNukeFactorIncrease) /"})}),"\n",(0,a.jsx)(t.span,{children:(0,a.jsx)(t.span,{children:"      100000) + initialNukeFactor;"})}),"\n",(0,a.jsx)(t.span,{children:(0,a.jsx)(t.span,{})}),"\n",(0,a.jsx)(t.span,{children:(0,a.jsx)(t.span,{children:"    return finalNukeFactor;"})}),"\n",(0,a.jsx)(t.span,{children:(0,a.jsx)(t.span,{children:"  }"})})]})}),"\n",(0,a.jsx)(t.h3,{id:e[5].id,children:e[5].value}),"\n",(0,a.jsx)(t.p,{children:"The nuke function allows the owner of an entity to claim a portion of the fund based on the entity’s finalNukeFactor. First, it verifies that the caller owns the entity and that the entity is eligible to be nuked. The function calculates the entities finalNukeFactor using its entropy and age. The potential claim amount is determined by the finalNukeFactor, capped at 50% of the current fund size. The appropriate claim amount is then transferred to the entity owner, the fund balance is updated, and the entity is burned."}),"\n",(0,a.jsx)(t.pre,{tabIndex:"0","data-language":"plaintext","data-word-wrap":"",children:(0,a.jsxs)(t.code,{children:[(0,a.jsx)(t.span,{children:(0,a.jsx)(t.span,{children:"function nuke(uint256 tokenId) public whenNotPaused nonReentrant {"})}),"\n",(0,a.jsx)(t.span,{children:(0,a.jsx)(t.span,{children:"    require("})}),"\n",(0,a.jsx)(t.span,{children:(0,a.jsx)(t.span,{children:"      nftContract.isApprovedOrOwner(msg.sender, tokenId),"})}),"\n",(0,a.jsx)(t.span,{children:(0,a.jsx)(t.span,{children:"      'ERC721: caller is not token owner or approved'"})}),"\n",(0,a.jsx)(t.span,{children:(0,a.jsx)(t.span,{children:"    );"})}),"\n",(0,a.jsx)(t.span,{children:(0,a.jsx)(t.span,{children:"    require("})}),"\n",(0,a.jsx)(t.span,{children:(0,a.jsx)(t.span,{children:"      nftContract.getApproved(tokenId) == address(this) ||"})}),"\n",(0,a.jsx)(t.span,{children:(0,a.jsx)(t.span,{children:"        nftContract.isApprovedForAll(msg.sender, address(this)),"})}),"\n",(0,a.jsx)(t.span,{children:(0,a.jsx)(t.span,{children:"      'Contract must be approved to transfer the NFT.'"})}),"\n",(0,a.jsx)(t.span,{children:(0,a.jsx)(t.span,{children:"    );"})}),"\n",(0,a.jsx)(t.span,{children:(0,a.jsx)(t.span,{children:"    require(canTokenBeNuked(tokenId), 'Token is not mature yet');"})}),"\n",(0,a.jsx)(t.span,{children:(0,a.jsx)(t.span,{})}),"\n",(0,a.jsx)(t.span,{children:(0,a.jsx)(t.span,{children:"    uint256 finalNukeFactor = calculateNukeFactor(tokenId); // finalNukeFactor has 5 digits"})}),"\n",(0,a.jsx)(t.span,{children:(0,a.jsx)(t.span,{children:"    uint256 potentialClaimAmount = (fund * finalNukeFactor) / MAX_DENOMINATOR; // Calculate the potential claim amount based on the finalNukeFactor"})}),"\n",(0,a.jsx)(t.span,{children:(0,a.jsx)(t.span,{children:"    uint256 maxAllowedClaimAmount = fund / maxAllowedClaimDivisor; // Define a maximum allowed claim amount as 50% of the current fund size"})}),"\n",(0,a.jsx)(t.span,{children:(0,a.jsx)(t.span,{})}),"\n",(0,a.jsx)(t.span,{children:(0,a.jsx)(t.span,{children:"    // Directly assign the value to claimAmount based on the condition, removing the redeclaration"})}),"\n",(0,a.jsx)(t.span,{children:(0,a.jsx)(t.span,{children:"    uint256 claimAmount = finalNukeFactor > nukeFactorMaxParam"})}),"\n",(0,a.jsx)(t.span,{children:(0,a.jsx)(t.span,{children:"      ? maxAllowedClaimAmount"})}),"\n",(0,a.jsx)(t.span,{children:(0,a.jsx)(t.span,{children:"      : potentialClaimAmount;"})}),"\n",(0,a.jsx)(t.span,{children:(0,a.jsx)(t.span,{})}),"\n",(0,a.jsx)(t.span,{children:(0,a.jsx)(t.span,{children:"    fund -= claimAmount; // Deduct the claim amount from the fund"})}),"\n",(0,a.jsx)(t.span,{children:(0,a.jsx)(t.span,{})}),"\n",(0,a.jsx)(t.span,{children:(0,a.jsx)(t.span,{children:"    nftContract.burn(tokenId); // Burn the token"})}),"\n",(0,a.jsx)(t.span,{children:(0,a.jsx)(t.span,{children:"    (bool success, ) = payable(msg.sender).call{ value: claimAmount }('');"})}),"\n",(0,a.jsx)(t.span,{children:(0,a.jsx)(t.span,{children:"    require(success, 'Failed to send Ether');"})}),"\n",(0,a.jsx)(t.span,{children:(0,a.jsx)(t.span,{})}),"\n",(0,a.jsx)(t.span,{children:(0,a.jsx)(t.span,{children:"    emit Nuked(msg.sender, tokenId, claimAmount); // Emit the event with the actual claim amount"})}),"\n",(0,a.jsx)(t.span,{children:(0,a.jsx)(t.span,{children:"    emit FundBalanceUpdated(fund); // Update the fund balance"})}),"\n",(0,a.jsx)(t.span,{children:(0,a.jsx)(t.span,{children:"  }"})})]})})]})},"/TraitForger-Entity/nuke-factor",{filePath:"pages/TraitForger-Entity/nuke-factor.mdx",timestamp:1728428966e3,pageMap:i.v,frontMatter:{title:"Nuke Factor"},title:"Nuke Factor"},"undefined"==typeof RemoteContent?o:RemoteContent.useTOC)},7080:function(n,e,t){"use strict";t.d(e,{v:function(){return a}});let a=[{data:{index:{title:"Introduction",order:1},"Game-Strategy":{title:"Game Strategy",order:2},GamePlay:{title:"Gameplay",order:3},"TraitForger-Entity":{title:"TraitForger Entity",order:4},FAQs:{title:"FAQs",order:5}}},{name:"FAQs",route:"/FAQs",frontMatter:{title:"FAQs"}},{name:"Game-Strategy",route:"/Game-Strategy",children:[{name:"active-trading-and-market-strategy",route:"/Game-Strategy/active-trading-and-market-strategy",frontMatter:{title:"Active Trading and Market Strategy"}},{name:"mint-and-nuke",route:"/Game-Strategy/mint-and-nuke",frontMatter:{title:"Mint and Nuke"}},{name:"strategic-long-term-forging",route:"/Game-Strategy/strategic-long-term-forging",frontMatter:{title:"Strategic Long-Term Forging"}},{name:"the-long-game-aging-and-maximizing-nuke-value",route:"/Game-Strategy/the-long-game-aging-and-maximizing-nuke-value",frontMatter:{title:"The Long Game Aging and Maximizing Nuke Value"}}]},{name:"GamePlay",route:"/GamePlay",children:[{name:"aging",route:"/GamePlay/aging",frontMatter:{title:"Aging"}},{name:"dao-fund",route:"/GamePlay/dao-fund",frontMatter:{title:"DAO Fund"}},{name:"economic-activity",route:"/GamePlay/economic-activity",frontMatter:{title:"Economic Activity"}},{name:"entropy",route:"/GamePlay/entropy",frontMatter:{title:"Entropy"}},{name:"forging",route:"/GamePlay/forging",frontMatter:{title:"Forging"}},{name:"generations-and-minting",route:"/GamePlay/generations-and-minting",frontMatter:{title:"Generations and Minting"}},{name:"nuke-fund",route:"/GamePlay/nuke-fund",frontMatter:{title:"Nuke Fund"}},{name:"trait-token-airdrop",route:"/GamePlay/trait-token-airdrop",frontMatter:{title:"$TRAIT Token Airdrop"}}]},{name:"index",route:"/",frontMatter:{title:"Introduction"}},{name:"TraitForger-Entity",route:"/TraitForger-Entity",children:[{name:"forge-potential",route:"/TraitForger-Entity/forge-potential",frontMatter:{title:"Forge Potential"}},{name:"nuke-factor",route:"/TraitForger-Entity/nuke-factor",frontMatter:{title:"Nuke Factor"}},{name:"performance-factor",route:"/TraitForger-Entity/performance-factor",frontMatter:{title:"Performance Factor"}},{name:"role",route:"/TraitForger-Entity/role",frontMatter:{title:"Role"}},{name:"traits",route:"/TraitForger-Entity/traits",frontMatter:{title:"Traits"}},{name:"visuals",route:"/TraitForger-Entity/visuals",frontMatter:{title:"Visuals"}}]}]}},function(n){n.O(0,[83,888,774,179],function(){return n(n.s=5548)}),_N_E=n.O()}]);