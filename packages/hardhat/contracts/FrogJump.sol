// SPDX-LICENSE-IDENTIFIER:MIT
pragma solidity >=0.8.0;

interface IFrog{
    function name() external view returns (string memory);
    function jumps() external view returns (uint256);
}

interface IJumper{
    function jump() external;
}

contract FrogJump is IFrog ,IJumper{
    string public name;
    uint256 public jumps;

    constructor(string memory _name){
        name = _name;
    }

    function jump() public{
        jumps++;
    }


}