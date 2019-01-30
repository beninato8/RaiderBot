const Discord = require('discord.js')
const Raid = require('../Raid.js')

/**
 * @param {Discord.Client} client
 * @param {Discord.Message} message
 * @param {Discord.Collection<any,Raid>} activeRaids
 * @param {Array<String>} parseArray
 */

module.exports.run = async(client, message, activeRaids, parseArray) => {
    if (parseArray[1]) {
        let ID = parseArray[1].endsWith(',') ? parseArray[1].substring(0, 2).toUpperCase() : parseArray[1].toUpperCase();
        if (activeRaids.has(ID)) {
            if (activeRaids.get(ID).authorized(message, "Message")) {
                let raid = activeRaids.get(ID);
                if (message.mentions.users.size > 0) {
                    for (const user of message.mentions.users.array()) {
                        if(raid.removeFromRaid(user)){
                            console.log(`${user} removed from raid ${raid.id}`);
                            raid.updateInfo();
                        } else {
                            console.log(`User wasn't in the raid`);
                        }
                    }
                    try {
                        await storeRaid(raid); // store the raid to disk
                    } catch (error) {
                        console.error(error);
                    }
                    message.reply("Users have been removed from the raid. **Total confirmed is: " + raid.total() + "**")
                } else {
                    message.reply("Sorry, I couldn't understand your request.  I think you were trying `!command kick <Raid ID> @user`")
                }
            } else {
                message.reply("You must be the owner of a raid to kick someone from it.")
            }
        } else {
            message.reply("Sorry, I couldn't understand your request.  I think you were trying `!raid kick <Raid ID> @user`")
        }
    }

}

module.exports.help = {
    name: "kick",
    description: "Kicks a list of users from the raid",
    usage: "kick <@user> [, <@user>, ...]"
}