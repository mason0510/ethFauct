const express = require('express');
const app = express();
const Web3= require('web3');
const HDWalletProvider = require("truffle-hdwallet-provider");
const mnemonic = "review garbage banner angry antique dice laundry eye gown taste spend belt"; // 12 word mnemonic
const provider = new HDWalletProvider(mnemonic, "https://rinkeby.infura.io/v3/46c70d14b3a1407b9c1058c447285be0");

// Or, alternatively pass in a zero-based address index.
const web3=new Web3(provider);

app.get('/send/:address',async function (req, res) {
    console.log("开始转账");
    const address=req.params.address;
    send(address);
    res.send("转账成功")
});

const server=app.listen(3002, function () {
    let  host=server.address().address;
    let  port=server.address().port;
    console.log('Example app listening on port 3002! http://%s:%s',host,port);
});

//转账 定义函数表达式
send=async(address)=>{
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
        to:address,
        value:"727697552000000000",
        data:data
    });
    account0balance=await web3.eth.getBalance(accounts[0]);
    console.log(account0balance+"wei");
};