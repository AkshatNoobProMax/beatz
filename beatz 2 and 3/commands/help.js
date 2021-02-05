const pagination = require("discord.js-pagination");
const Discord = require("discord.js");

module.exports = {
  info: {
    name: "help",
    description: "To show all commands",
    usage: "[command]",
    aliases: ["commands", "help me", "pls help"]
  },

  async run(client, message, args) {
    //Sort your commands into categories, and make seperate embeds for each category

    const music = new Discord.MessageEmbed()
      .setAuthor("Help Command Panel", "https://cdn.discordapp.com/emojis/672561481019162635.gif")
      .setTimestamp()
      .setColor("FF0000")
      .setImage(
        "https://media.discordapp.net/attachments/800785323897913384/806161711153020969/standard_8.gif"
        )
      
      .addField("Music commands", [ `** *play :** To play songs `,
       `** *nowplaying :** Shows the current playing music`, 
       `** *search :** searches for a song on youtube `, 
       `** *queue :** Shows the server music queue`, 
       `** *playlist :** To play songs from playlists`, 
       `** *pause :** To pause the current playing music`, 
       `** *resume:** plays the paused music`, 
       `** *stop :** Stops playing music and clears the queue`, 
       `** *skipto :** Skips to the desired song from the queue`, 
       `** *skip :** Skips the current playing music`, 
       `** *remove :** Removes a song from the queue`, 
       `** *loop :** Toggle music loop`, 
       `** *shuffle :** Shufles the server music queue`, 
       `** *volume:** To change the server music volume`, `** *lyrics :** Get lyrics for the current playing song`, 
       `** *24/7:** Enables the 24/7 mode of the bot`,
       `** *leave:** stops playing songs and leaves the voice channel`
      ]);

    const fun = new Discord.MessageEmbed()
       .setAuthor("Help Command Panel", "https://cdn.discordapp.com/emojis/672561481019162635.gif")
      .setTimestamp()
      .setColor("ff66ed")
      .setImage(
        "https://media.discordapp.net/attachments/806157004665126982/807109728559693844/standard_9.gif"
      )
      
      .setFooter(`Fun commands of beatz`)
      .addField("Fun commands", [
        `**❯ ,ᴍᴇᴍᴇ :** ɢᴇɴᴇʀᴀᴛᴇꜱ ᴀ ʀᴀɴᴅᴏᴍ ᴍᴇᴍᴇ`, 
        `**❯ ,ᴘᴏʟʟ :** ᴛᴏɢɢʟᴇ ᴀ ᴘᴏʟʟ !`, 
        `**❯ ,ʙᴀᴍ :** ʙᴀᴍ ᴀ ᴜꜱᴇʀ xᴅ !`, 
        `**❯ ,8ʙᴀʟʟ :** ᴀꜱᴋ ᴍᴇ ᴀ Qᴜᴇꜱᴛɪᴏɴ!!`
      ]);

    const utility = new Discord.MessageEmbed()
      .setTitle("Help Command Panel")
      .setTimestamp()
      .setImage(
        "https://cdn.discordapp.com/attachments/783364496848715786/806869178526597190/standard_3.gif"
      )
      .setColor("RANDOM")
      .setThumbnail(
        "https://66.media.tumblr.com/66f920fdd54c519f98af3a8a24fd14a7/tumblr_prfcqeDLEY1t73js3_540.gif"
      )
      .addField("Utilities", [
        `**❯ ,ɪɴꜰᴏ :** ᴀʟʟ ᴀʙᴏᴜᴛ ᴍᴏᴄʜᴀ ᴍᴜꜱɪᴄ`, 
        `**❯ ,ɪɴᴠɪᴛᴇ :** ᴛᴏ ɪɴᴠɪᴛᴇ ᴛʜᴇ ʙᴏᴛ ᴛᴏ ʏᴏᴜʀ ꜱᴇʀᴠᴇʀ`, 
        `**❯ ,ᴘɪɴɢ :** ɢᴇᴛ ᴛʜᴇ ʙᴏᴛ'ꜱ ᴘɪɴɢ`, 
        `** *botstats :** Shows the stats of the bot`
      ]);

    const pages = [music, fun, utility];

    const emojiList = ["⬅️", "➡️"];

    const timeout = "120000";

    pagination(message, pages, emojiList, timeout);
  }
};
