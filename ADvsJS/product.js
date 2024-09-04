let rate = [];
let qty = [];
let amt = [];
let dis = [];
let billant = [];
let gst = [];
let netbill = [];

const prompt = require("prompt-sync")();

for(i=0;i<5;i++)
{
    rate.push(parseInt(prompt(" enter rate : ")))
    qty.push(parseInt(prompt(" enter qty : ")))

    amt[i] = rate[i] * qty[i];
    dis[i] = amt[i] * 0.05;
    billant[i] = amt[i] - dis[i];
    gst[i] = amt[i] * 0.18;
    netbill[i] = billant[i] + gst[i];
}

console.log("\nrate\tqty\tamt\tbillant\tgst\tnetbill")
console.log("rate : ",rate)
console.log("qty : ",qty)
console.log("netbill : ",netbill)
  