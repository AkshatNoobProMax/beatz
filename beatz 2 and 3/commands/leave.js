const { MessageEmbed } = require("discord.js");
const sendError = require("../util/error");

module.exports = {
    info: {
        name: "leave",
        aliases: ["dc", "disconnect"],
        description: "Leaves the voice channel currently playing music in",
        usage: "Leave",
    },

    run: async function (client, message, args) {
        let channel = message.member.voice.channel;
        if (!channel) return sendError("You are not connected to a voice channel", message.channel);
        if (!message.guild.me.voice.channel) return sendError("I am not connected to a voice channel!", message.channel);

        try {
            await message.guild.me.voice.channel.leave();
        } catch (error) {
            await message.guild.me.voice.kick(message.guild.me.id);
            return sendError("Make sure i am connected to a voice channel", message.channel);
        }

        const Embed = new MessageEmbed()
            .setAuthor(' Left the voice channel')
            .setColor("RANDOM");

        return message.channel.send(Embed).catch(() => message.channel.send("🎶 Left The Voice Channel :C"));
    },
};
