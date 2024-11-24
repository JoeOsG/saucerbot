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

//
botClient.login(process.env.SECRET_TOKEN);