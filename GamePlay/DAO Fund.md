# DAO Fund

The DAOFund is a decentralized finance (DeFi) mechanism designed to autonomously manage a pool of assets. It leverages the Uniswap V2 protocol to facilitate automated trading, liquidity provision, and token management.

## Contracts Involved

- DAOfund: uses the IUniswapV2Router02 interface for interacting with the Uniswap protocol and an additional token interface ($Trait token). Also includes a fallback function to receive ETH directly. Upon receiving ETH, it automatically swaps the ETH for tokens on Uniswap, then burns those tokens. This could be part of a strategy to manage the fund's value or influence the token's supply.

- IDAOfund: Defines an interface for a fund managed by a DAO. This interface includes functions for depositing and withdrawing tokens, claiming rewards, and checking pending rewards. It also includes events that log these actions, which are essential for transparency and tracking within a blockchain environment.

- IUniswapV2Router01/IUniswayV2RRouter: Extends IUniswapV2Router01 by adding support for fee-on-transfer tokens (tokens that take a fee upon transfer and thus have different transfer and return amounts). It includes advanced swapping functions that handle these fee adjustments.

## DAO Functionality

### 1. Automated Token Swapping:
The fund automatically swaps incoming Ether (ETH) for a specified ERC-20 token using Uniswap’s liquidity pools. This operation is triggered when ETH is sent directly to the funds contract, ensuring immediate and automated response to contributions.

### 2. Interfacing with Uniswap:
DAOFund interacts with both basic and advanced features of the Uniswap V2 router. It supports transactions with fee-on-transfer tokens, adding a layer of complexity and utility by managing tokens that change in quantity upon transfers.

### 3. Simplifying User Transactions:
Users can interact with the DAOFund without needing direct involvement in the complexities of token swaps or liquidity management. Contributions in ETH are automatically handled by the contract, simplifying the investment process.
