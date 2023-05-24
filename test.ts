import Discord from 'discord.js';

import BotClient from '../../../utils/classes/BotClient';

import CommandFile from '../../../utils/interfaces/CommandFile';

const command: CommandFile = {
    run: async(interaction: Discord.CommandInteraction, client: BotClient, args: any): Promise<any> => {
        return await interaction.editReply({content: "Testing plugin system"});
    },
    slashData: new Discord.SlashCommandBuilder()
    .setName("test")
    .setDescription("Testing plugin system"),
    commandData: {
        category: "General Group",
        hasCooldown: false,
        preformGeneralVerificationChecks: false
    }
}

export default command;
