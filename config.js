const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "𝙰𝚂𝙸𝚃𝙷𝙰-𝙼𝙳=evxUmS5Y#Kn5rgqJ8S8msGMrQuF9R2XOPIUP5Dh8YrEQi_cW2JH4",
MONGODB: process.env.MONGODB || "mongodb+srv://rush:20041025sa@cluster0.ysi6dsf.mongodb.net/",//enter mongo db url හදන විදිය පල්ලෙහාබටන් එකක් ඇති
};
