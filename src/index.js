// IBF -> Privileged Gateway Intents, permissions that bot will use (discord.com/develeopers/docs/topics/gateway)  | C-> bot class
const { Client, IntentsBitField } = require('discord.js');

//dotenv to read variables in .env
require('dotenv').config();

// create the client with the permissions specified
const botClient = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
    ]
});

//Listen for bot
botClient.on('ready', (bc) => {
    console.log(`READY: ${bc.user.tag}`)
});

//Listen for message (msg, content is soly that part of the array)
botClient.on('messageCreate', (msg) => {
    console.log(msg.content)

    if (msg.author.bot) {
        return;
    }

    msg.reply('Forward')
})

//env file for token secret
botClient.login(process.env.SECRET_TOKEN);