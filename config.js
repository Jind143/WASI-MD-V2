//#ENJOY
/**

░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░░▒▓██████▓▒░ ░▒▓███████▓▒░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓████████▓▒░░▒▓██████▓▒░░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░▒▓█▓▒░ 
 ░▒▓█████████████▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓███████▓▒░░▒▓█▓▒░ 
                                                      

**/

const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "wasixml@gmail.com";
global.location = "Lahore,Pakistan.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "923101699985@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github = process.env.GITHUB || "https://github.com/Jind143/WASI-MD-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaDK8ZUDjiOhwFS1cP2j";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaDK8ZUDjiOhwFS1cP2j";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/0a7502da9a99dde658caa.jpg";
global.devs = "923135673658";
global.sudo = process.env.SUDO || "923355473030";
global.owner = process.env.OWNER_NUMBER || "923101699985";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "recording";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "true";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "true";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "true";
global.save_status_from = process.env.SAVE_STATUS_FROM || "true";
global.read_status_from = process.env.READ_STATUS_FROM || "true";
global.autoreaction = process.env.autoreaction || "true";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://pair-qr-wasi-md.onrender.com";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic0Nja2JEanhiZHB4MXFPSGdEUmFieTJ6NVEyUTV4aDlhVEt0SVJmbUZrND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTThBWXNRekc2ZUFRZ0lrOGNpVFlCcHZJRmtrWWJYcHFOZEF4OTJ0c1JsUT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ3S3hqNmNmM1pLaTJnV2IyYitOYmNpYUpRa2ZaSFJnd0tKd1RySlNTY25RPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJoRENMbWVRSGs4T05RbGIvOVV0V2VGOXNmcE1waThpTzVEbGZteW1aa0c4PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImFPTGNvRTM4dE9oWUVLUkFxMW5zTS8yT0ZRZXNMUG1MYVp3TndjVmNGa0U9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik1OVzhTNDFWc2F0UUpVU2RVc0o5OW9WeUxNcTBRZXAwOFBEd3U1YU9IaWc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSUcxa1duZktGTVlJcTZidlRLNFNXRkwzc2dFWkMvcmJaSUdnRDIvNlhHYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidlJucElZRWVFS3VtUmlkZEc0M0VxWUJENEptSi82ZHBJVGtqNnNLSUgyND0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImdvcjNGL2twdGozOGpYUHZEVnVidFQ5ZGpKelBBTGZrVGN5VlJsbXM1d0Z4QThENjdxSUdQZ0JFVXpCMWVRVEw4ZFcwQzJZc0liek1SWFVzQkQ0YkJ3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NTksImFkdlNlY3JldEtleSI6ImdrVW1IcHVGMEJTbDZnUkR3RGRrUkZlMk1teTErWXRwT0JueEE2NDhCeTg9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IkZIR1JId0RpUmZxTnV1ckZtQktySGciLCJwaG9uZUlkIjoiYTU5OGFhN2YtZjZiNi00MDVhLWIwMWQtMTQ2ZTA0NDkxYTBmIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InpmMmtuM20zNWVvYVliMVBkbEdpa2VGbXBvTT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJJRXJGbUVheHowblRkb2l2RjV2eE1Ya0pFMWM9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiWVdWTUNSMUoiLCJtZSI6eyJpZCI6IjkyMzEwMTY5OTk4NTozNkBzLndoYXRzYXBwLm5ldCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDS1NKL0hRUXA3elF0QVlZQWlBQUtBQT0iLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiWUt4NFBJK3RUdmRHSWNuZmNDY2NPcDJyc3VMNHliNGVJWWc4QTBIVXZ4ND0iLCJhY2NvdW50U2lnbmF0dXJlIjoiekhiQmkvS0dOVDBOdWRFZyttcjJKSEpSSDlRLzJsUjhIMUtjVXlnT25uZXlxMFFibFp5czFXWGh4REUzYzBlZDVsSVFkQ2Z2V2JtSTZRSmI4LzZxRFE9PSIsImRldmljZVNpZ25hdHVyZSI6IjBKYTZ5ejFRR0pUYlhyR0dVb3JFVUR6UzhrQ2U1VmhCbFc1NTJ6MDc3U1RhMy9USlVpanZqYlpueTRkSlMxUmRrQkFaaFkrMVI0SWRrekIvMlZoSEN3PT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTIzMTAxNjk5OTg1OjM2QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQldDc2VEeVByVTczUmlISjMzQW5IRHFkcTdMaStNbStIaUdJUEFOQjFMOGUifX1dLCJwbGF0Zm9ybSI6ImlwaG9uZSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyMDk4MzA5MSwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFCaVMifQ=="
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "𝐅𝐈𝐋𝐄-𝐆𝐄𝐍𝐄𝐑𝐀𝐓𝐄𝐃-𝐁𝐘 Mr HS❤🤍❤",
  author: process.env.PACK_AUTHER || "MrHs",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "H𝐒-𝐌𝐃-𝐕2",
  ownername: process.env.OWNER_NAME || "Hasnain",
  errorChat: process.env.ERROR_CHAT || "923192173398",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "chat.whatsapp.com",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  AUTOREACTION: process.env.AUTOREACTION || process.env.AUTOREACTION || "true",
  LANG: (process.env.THEME || "WASI").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
