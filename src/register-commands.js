const { REST, Routes, ApplicationCommandOptionType } = require('discord.js');
require('dotenv').config();

const regCommands = [
    {
        name: 'add',
        description: 'Add new task',
        options: [
            {
                name: 'task',
                description: 'the task to add to the list',
                type: ApplicationCommandOptionType.String,
                required: true,
            }
        ]
    },

    {
        name: 'list',
        description: 'Display list of user',
    }
];

const rest = new REST({ version: '10' }).setToken(process.env.SECRET_TOKEN);

(async () => {
    try {
        console.log('START commands');

        await rest.put(
            Routes.applicationGuildCommands(
                process.env.RSAUCER_ID,
                process.env.TEST_ID
            ),
            { body: regCommands }
        )

    } catch (error) {
        console.log(`There was an error: ${error}`)
    }

    console.log('END commands')
})();