const TokenSale = artifacts.require("MyTokenSale");
const Token = artifacts.require("MyToken");

const chai = require("./setupchai.js");
const BN = web3.utils.BN;
const expect = chai.expect;

require("dotenv").config({path: "../.env"});

contract("TokenSale Test", async(accounts) => {

    const [deployerAccount, recipient, anotherAccount] = accounts;

    it('should not have any tokens in my deployerAccount', async() => {
        let instance = await Token.deployed();
        return expect(instance.balanceOf(deployerAccount)).to.eventually.be.a.bignumber.equal(new BN(0));
    });
    
    it("all tokens should be in the TokenSale Samrt Contract by default", async() => {
        let instance = await Token.deployed();
        let balanceOfTokenSaleSmartContract = await instance.balanceOf(TokenSale.address);
        let totalSupply = await instance.totalSupply();
        return expect(balanceOfTokenSaleSmartContract).to.be.a.bignumber.equal(totalSupply);
    });

    it("should be possible to buy tokens", async () => {
        let tokenInstance = await Token.deployed();
        let tokenSaleInstance = await TokenSale.deployed();
        let balanceBefore = await tokenInstance.balanceOf.call(recipient);
        expect(tokenSaleInstance.sendTransaction({from: recipient, value: web3.utils.toWei("1", "wei")})).to.be.fulfilled;
        return expect(balanceBefore + 0).to.be.bignumber.equal(await tokenInstance.balanceOf.call(recipient));
    });
    
});
