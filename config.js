const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="smrutiranjan0541@gmail.com"
global.location="Mumbai,India."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Mumbai";
global.github=process.env.GITHUB|| "https://github.com/Charlie999yt";
global.gurl  =process.env.GURL  || "https://youtube.com/channel/CHARLIE999";
global.website=process.env.GURL || "https://youtube.com/channel/CHARLIE999" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://ibb.co/hV5DnJx" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "919556416715" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "919556416715";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "919556416715,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia05LK2tYeHRxcFZnWUtabmdZZkw0RWl6dU5PTXUyR2szRDBjUmxOdXhVYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY1Q2eVdtcTAxdlpHb1FzNDRNSzdvWlA5dWxjNWwrdzF4SEwrOG5TVG15TT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIrUHFvMFgxQ2NNbHFXUGNOY0dqQ1U4ZkEzWU8vRE1RK05YemU4Mm82RkdnPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJjSWFKWnEvVlZtYksyNzV4TjZpbmdiUFhLaWhzQU9ISzFEcmk2VFlaeDBnPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjhEdWs1K3htRFZFYi9taE5Kdjd5eUxhdU8vNFI0aUdhMlpwTXNQbDBta2M9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImFnL3AwQnZyQjBHallYUXRuN2JuUUhiQjk3d2w3M2lmTmc3SnpaNEZ5REk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRURYL2ovTVQxRnlPN2xOOGVuS3FReERiS3dSMlZ4aXlIME9qVFRqZENrOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMnNsZGQ2d1phaW9MOUFqZ0xYNnd2N3o5SThySzJrOUFYbEZSMU5GVDNDND0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InJSRnRvSk0vbWRaRHdkZDgyQjlFTjQ3UTVuUnRWTkFOWGpYcWhlbmNVaXV6bWt5QmJib3FqUlpkV2hRSU53WUMxQmp0MmY1aU5saDZrTVBOcGNvMmdRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6ODcsImFkdlNlY3JldEtleSI6InR3Qjh3Q0w5R3kvL1ZkZThaQ3RPRnpkRGw4ZWNiWnk3aFFmRHNQNld0VU09IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiNDg0NTkwNjg4NzRAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiRTc2NzNGRUQxRDdCQ0YyRUU0RTA5RjIxMjA1N0JCRDgifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcxODk4OTA5OX0seyJrZXkiOnsicmVtb3RlSmlkIjoiNDg0NTkwNjg4NzRAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiRjIwQzM0RjQ3RTAzNjYzOTU3Njc5MERBNzc1MEM0ODUifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcxODk4OTA5OX0seyJrZXkiOnsicmVtb3RlSmlkIjoiNDg0NTkwNjg4NzRAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiOTAwQTIxOTQ1N0FDMzRBODI2RDM5OUI0RUIzREQ2QjcifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcxODk4OTEwMn0seyJrZXkiOnsicmVtb3RlSmlkIjoiNDg0NTkwNjg4NzRAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiRjFFMzVEQUQxQTg0NkQ4Njc1REVFQ0UzREIzQzBBMkEifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcxODk4OTEwMn1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiWTJUSDlFMFpUemFURHhWdnNzdzNoUSIsInBob25lSWQiOiI1NzJmZGRlMi1kMjA0LTQxNGItOWZkMS1lNmU4NWQ5MWQ0YTEiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoielpwUC8rZTFqSTAwRVNjTjMwVk1EVEVVTnA4PSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImFPREJMT0UyeFMvYU1VNnRJQUxmU0l1S0J3UT0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiJROVE1U0QyQSIsIm1lIjp7ImlkIjoiNDg0NTkwNjg4NzQ6MkBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJtYXJpYSJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTExxbnRzQkVKemkxck1HR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiWDZ1NEl3Nk9BdXF3Ymk1TURCaHpYKzcyRTRTWlpzRjR6bjA5Rm10blpROD0iLCJhY2NvdW50U2lnbmF0dXJlIjoiR1BvUVllWnVqWmVxQlNqU1YzekdQazNxRnhTYXJPdllITnVZbUtUTWEzMWwyM3huNzNUK0dSODNwdTdZWDVvZzQ4eTRBcmhJQjVFZm9MSTRVRng1QXc9PSIsImRldmljZVNpZ25hdHVyZSI6IjdFRFdnWFJmTVBuV21jdVMyTjRxRkR3b0QzcWowYnJGalQzbENiY3FpUHI0alg3OEkwOFRrc1p5M0tCcUlhZTM2ZnVRUXE3SUx4WmdDSFF3bWp2TmpBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiNDg0NTkwNjg4NzQ6MkBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJWK3J1Q01PamdMcXNHNHVUQXdZYzEvdTloT0VtV2JCZU01OVBSWnJaMlVQIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzE4OTg5MDk3LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUh3USJ9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sakura-bot",
  ownername:process.env.OWNER_NAME|| "CHARLIE",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
