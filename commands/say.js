

/***************************************************************************/
/*                                                                         */
/*                           Made by Mr Swift                              */
/*                      Best Source FOR Discord Bot                        */
/*               Server Support :https://discord.gg/6Zgu6TN                */
/*                        My instagram : Mr_.swift                         */
/*                              Copyright: 2020                            */
/*                                                                         */
/***************************************************************************/
const config = require("../config.json")
const Discord = require('discord.js');
module.exports = {
    name:"say",
    description:"i see",

    async run (client,message, args){
        message.channel.send(args.join(' '))
    }  
}