const Discord = require("discord.js");

const TOKEN = "NDI0OTY2OTkwODM5NTQ1ODY4.DZB-4w.xNtNuwSjXggWqcXokQ8axSPCV_c"; 

var bot = new Discord.Client();

client.on("ready", function(message) {
    console.log("Ready To Go!");
    client.user.setGame("made by: HarleyTBS");
});
client.on("ready", function() {
    console.log("ready")
    client.user.setGame("made by: HarleyTBS");
    if (message.content === "ip") {
        message.reply("IP = (Not Released");
    }
});

client.login{process.env.BOT_TOKEN};
