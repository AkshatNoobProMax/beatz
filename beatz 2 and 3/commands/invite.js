const { MessageEmbed } = require("discord.js");

module.exports = {
  info: {
    name: "invite",
    description: "To add/invite the bot to your server",
    usage: "[invite]",
    aliases: ["inv"],
  },

  run: async function (client, message, args) {
    
    //set the permissions id here (https://discordapi.com/permissions.html)
    var permissions = 37080128;
    
    let invite = new MessageEmbed()
    
    .setDescription(`[Click here to invite me](https://discord.com/oauth2/authorize?client_id=805427850722410518&scope=bot&permissions=11797832) to continue enjoying my features in your server! \n\nCan't find what you are looking for , join our [Support Server](https://discord.gg/eRn5aBcVhc) now!`)
    .setURL(`https://discord.com/oauth2/authorize?client_id=${client.user.id}&permissions=${permissions}&scope=bot`)
    .setColor("RANDOM")
    .setImage("https://media.discordapp.net/attachments/800785323897913384/806161711153020969/standard_8.gif")
    .setFooter("Thanks for inviting me to your server | Made with love by lakshy <3")
    
    
    return message.channel.send(invite
    );
  },
};