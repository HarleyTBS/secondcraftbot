M
const TOKEN = "NDI0OTY2OTkwODM5NTQ1ODY4.DZB-4w.xNtNuwSjXggWqcXokQ8axSPCV_c"; 

var bot = new Discord.Client();

bot.on("ready", function(message) {
    console.log("Ready To Go!");
    bot.user.setGame("made by: HarleyTBS");
});
bot.on("ready", function() {
    console.log("ready")
    bot.user.setGame("Made by: HarleyTBS");
    if (message.content === "ip") {
        message.reply("IP = (Not Released");
    }
});
bot.login(TOKEN).catch(console.log);
