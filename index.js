const dotenv = require("dotenv");
dotenv.config();
const { Client, MessageEmbed } = require("discord.js");
const client = new Client({ disableEveryone: true });
const chalk = require("chalk");

function formulateCommand(cmd) {
    return `<@!${client.user.id}> ${cmd}`
};

client.on("ready", async function () {
    console.log(`${chalk["bold"].red("The cum chalice has risen!")} || ${chalk.blue(client.user.tag)} (${new Date().toUTCString()})`);
    client.user.setActivity({ name: "people drink cum", type: "WATCHING" });
});

client.on("message", async function (message) {
    if (message.author.bot) return;
    if (message.content.startsWith(formulateCommand("cheers"))) {
        return message.channel.send(new MessageEmbed().setTitle("cheers! 🍻").setTimestamp().setColor("RANDOM")
            .setDescription(`cheers to the cum chalice, ${message.author}!`)
            .setImage("https://c.tenor.com/9mzrE_2Gn1kAAAAS/milk-in-your-face.gif")
            .setFooter(`The Cum Chalice, served to you by Dannington#8425`, message.author.displayAvatarURL()));
    } if (message.content.startsWith(formulateCommand("ram ranch cowboys, cocks throbbing hard"))) {
        return message.channel.send(new MessageEmbed().setTitle("the 18 cowboys have throbbing cocks at ram ranch").setTimestamp().setColor("RANDOM")
            .setDescription(`${message.author} is a cow! (what???)`)
            .setImage("https://i1.sndcdn.com/artworks-000503361948-njfbm5-t500x500.jpg")
            .setFooter(`The Cum Chalice, served to you by Dannington#8425`, message.author.displayAvatarURL()));
    }
});

client.login(process.env.CUMTICKET);