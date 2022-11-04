pragma solidity >=0.7.0 <0.9.0;

contract NameAndAge {
    string name;
    uint age;

    constructor (string memory _name, uint _age) {
        name = _name;
        age = _age;
    }

    function getName() public view returns(string memory) {
        return name;
    }

    function getTowTimesAge() external view returns(uint) {
        return age*2;
    }
}