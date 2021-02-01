# Asset-Tokenization using OpenZeppelin and Truffle

### Project Usage :
- Truffle 
- ERC20 openZeppelin contracts
- chai , chai-bn and chai-as-promised

### Commands :
- npm install truffle
- truffle unbox react
- npm install --save @openZeppelin
- npm install --save chai chai-bn chai-as-promised
- truffle development
- migrate
- compile
- test

### About Project :
- Import ERC20 detailed Smart Contract.
- Create our own ERC20 token contract and track used to track CAPPU, an internal currency.
- First test case to check wheater all tokens present in the deployer account.
- Second test case to check if token can be sent between accounts.
- Third test case to check its not possible to send more tokens than the available total tokens.
- Import Crowdsale.sol from openZeppelin contracts(v@2.5.0) and create own contract MyTokenSale.sol
- Deploy MyTokenSale.sol and transfer all tokens form MyToken to MyTokenSale.
