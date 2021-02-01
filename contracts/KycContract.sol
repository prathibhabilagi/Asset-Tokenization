pragma solidity ^0.7.4;

import "@openzeppelin/contracts/access/Ownable.sol";

contract KycContract is Ownable {
    mapping(address => bool) allowed;

    function setKycCompleted(address _addr) public onlyOwner{
        allowed[_addr] = true;
    }

    function setKycRevokded(address _addr) public onlyOwner{
        allowed[_addr] = false;
    }

    function KycCompleted(address _addr) public view returns(bool) {
        return allowed[_addr];
    }
}
