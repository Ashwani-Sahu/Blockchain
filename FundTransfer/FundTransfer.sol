pragma solidity >=0.7.0 <0.9.0;

contract FundTransfer {

    event Transfer (
        address indexed to,
        uint amount
    );

    function sendEther(address payable to, uint amount) external payable {
        require(address(this).balance >= amount, "insufficient Balance");
        to.transfer(amount);
        emit Transfer(to, amount);
    }
} 