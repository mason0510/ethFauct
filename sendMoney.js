const Web3= require('web3');
const HDWalletProvider = require("truffle-hdwallet-provider");
const mnemonic = "review garbage banner angry antique dice laundry eye gown taste spend belt"; // 12 word mnemonic
const provider = new HDWalletProvider(mnemonic, "https://rinkeby.infura.io/v3/46c70d14b3a1407b9c1058c447285be0");

// Or, alternatively pass in a zero-based address index.
const web3=new Web3(provider);

//转账 定义函数表达式
send=async()=>{
  //获取账户
 const accounts=await web3.eth.getAccounts();
    console.log(accounts);
  //获取余额信息
  let account0balance=await web3.eth.getBalance(accounts[0]);
    console.log(account0balance+"wei");
    //转账
    const str="XXX 我好喜欢你";
    //转成16进制
    const data="0x"+Buffer.from(str).toString("hex");
    await web3.eth.sendTransaction({
       from:accounts[0],
       to:"0x3f617cca82c51f5c436440b0e3719c45cd27e03d",
        value:"727697552000000000",
        data:data
    });
    account0balance=await web3.eth.getBalance(accounts[0]);
    console.log(account0balance+"wei");
};

send();