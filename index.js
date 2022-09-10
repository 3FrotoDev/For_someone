const Discord = require("discord.js")
const client = new Discord.Client();
const prefix = "+"// bot prefix
client.on("ready", async () => {
  console.log(`"${client.user.username}" is ready`)//runing bot username
  client.user.setActivity(prefix + "help")//runing User Activity
})
client.login("token here")
