/***************************************************************************/
/*                                                                         */
/*                           Made by Mr Swift                              */
/*                      Best Source FOR Discord Bot                        */
/*               Server Support :https://discord.gg/6Zgu6TN                */
/*                        My instagram : Mr_.swift                         */
/*                              Copyright: 2020                            */
/*                                                                         */
/***************************************************************************/
const Discord = require('discord.js');
const config = require("../config.json")
module.exports = {
    name: "spam",
    description: "Say Date",

    async run(client, message, args) {
        /*   Made by Mr Swift  */

        const idowner = `${config.botstat.ownerID}`
        if (message.author.id === idowner) {

            var t1 = setInterval(startTyping, 8000);


            function startTyping() {


                try {
                    message.channel.startTyping();

                    sleep();
                    function generateRandomString(length) {
                        var chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ@!#$%^&*()';
                        var random_string = '';
                        if (length > 0) {
                            for (var i = 0; i < length; i++) {
                                random_string += chars.charAt(Math.floor(Math.random() * chars.length));
                            }
                        }
                        return random_string
                    }
                    client.channels.cache.get('954608200819294228').send(generateRandomString(20))
                    //message.channel.send(generateRandomString(20))

                }
                catch (err) {
                    console.log(`error`)
                }


            }

            function sleep() {
                setTimeout(() => { console.log("Next!"); }, 4000);


            }

        }


    }
}