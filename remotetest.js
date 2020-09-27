


function respond(){
    message.channel.send("Response");
}

function respond_SEC(){
    message.channel.send("Response");
}

function cmd(m){
return (m.startsWith('.')) ? respond() : respond_SEC();
}

module.exports = {
    name:"SEC_TEST",
    cmd
};
