import meta from "../../../pages/_meta.js";
export const pageMap = [{
  data: meta
}, {
  name: "FAQs",
  route: "/FAQs",
  frontMatter: {
    "title": "FAQs"
  }
}, {
  name: "Game-Strategy",
  route: "/Game-Strategy",
  children: [{
    name: "active-trading-and-market-strategy",
    route: "/Game-Strategy/active-trading-and-market-strategy",
    frontMatter: {
      "title": "Active Trading and Market Strategy"
    }
  }, {
    name: "mint-and-nuke",
    route: "/Game-Strategy/mint-and-nuke",
    frontMatter: {
      "title": "Mint and Nuke"
    }
  }, {
    name: "strategic-long-term-forging",
    route: "/Game-Strategy/strategic-long-term-forging",
    frontMatter: {
      "title": "Strategic Long-Term Forging"
    }
  }, {
    name: "the-long-game-aging-and-maximizing-nuke-value",
    route: "/Game-Strategy/the-long-game-aging-and-maximizing-nuke-value",
    frontMatter: {
      "title": "The Long Game Aging and Maximizing Nuke Value"
    }
  }]
}, {
  name: "GamePlay",
  route: "/GamePlay",
  children: [{
    name: "aging",
    route: "/GamePlay/aging",
    frontMatter: {
      "title": "Aging"
    }
  }, {
    name: "dao-fund",
    route: "/GamePlay/dao-fund",
    frontMatter: {
      "title": "DAO Fund"
    }
  }, {
    name: "economic-activity",
    route: "/GamePlay/economic-activity",
    frontMatter: {
      "title": "Economic Activity"
    }
  }, {
    name: "entropy",
    route: "/GamePlay/entropy",
    frontMatter: {
      "title": "Entropy"
    }
  }, {
    name: "forging",
    route: "/GamePlay/forging",
    frontMatter: {
      "title": "Forging"
    }
  }, {
    name: "generations-and-minting",
    route: "/GamePlay/generations-and-minting",
    frontMatter: {
      "title": "Generations and Minting"
    }
  }, {
    name: "nuke-fund",
    route: "/GamePlay/nuke-fund",
    frontMatter: {
      "title": "Nuke Fund"
    }
  }, {
    name: "trait-token-airdrop",
    route: "/GamePlay/trait-token-airdrop",
    frontMatter: {
      "title": "$TRAIT Token Airdrop"
    }
  }]
}, {
  name: "index",
  route: "/",
  frontMatter: {
    "title": "Introduction"
  }
}, {
  name: "TraitForger-Entity",
  route: "/TraitForger-Entity",
  children: [{
    name: "forge-potential",
    route: "/TraitForger-Entity/forge-potential",
    frontMatter: {
      "title": "Forge Potential"
    }
  }, {
    name: "nuke-factor",
    route: "/TraitForger-Entity/nuke-factor",
    frontMatter: {
      "title": "Nuke Factor"
    }
  }, {
    name: "performance-factor",
    route: "/TraitForger-Entity/performance-factor",
    frontMatter: {
      "title": "Performance Factor"
    }
  }, {
    name: "role",
    route: "/TraitForger-Entity/role",
    frontMatter: {
      "title": "Role"
    }
  }, {
    name: "traits",
    route: "/TraitForger-Entity/traits",
    frontMatter: {
      "title": "Traits"
    }
  }, {
    name: "visuals",
    route: "/TraitForger-Entity/visuals",
    frontMatter: {
      "title": "Visuals"
    }
  }]
}];