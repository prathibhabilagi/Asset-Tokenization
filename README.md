# Asset-Tokenization using OpenZeppelin and Truffle

### Usage :
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
- npm install --save dotenv
- npm install --save @truffle/hdwallet-provider

### About :
- Import ERC20 detailed Smart Contract.
- Create our own ERC20 token contract and track used to track CAPPU, an internal currency.
- First test case to check wheater all tokens present in the deployer account.
- Second test case to check if token can be sent between accounts.
- Third test case to check its not possible to send more tokens than the available total tokens.
- Import Crowdsale.sol from openZeppelin contracts(v@2.5.0) and create own contract MyTokenSale.sol
- Deploy MyTokenSale.sol and transfer all tokens form MyToken to MyTokenSale.
- Create .env file and Add INITAL_TOKENS 
- Create a file setupchai.js and initalize chai, chai-bn, chai-as-promised
- Create MyTokenSale.test.js to test TokenSale first to test tokens should not be in deployer account, second test to check all tokens present in the TokenSale contract and third test case to buy tokens.

