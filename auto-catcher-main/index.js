
/***************************************************************************/
/*                                                                         */
/*                           Made by Mr Swift                              */
/*                      Best Source FOR Discord Bot                        */
/*               Server Support :https://discord.gg/6Zgu6TN                */
/*                        My instagram : Mr_.swift                         */
/*                              Copyright: 2020                            */
/*                                                                         */
/***************************************************************************/

console.log(`\n\nW8 For 20s\n\n`)

const Discord = require('discord.js-self');

const client = new Discord.Client();

const config = require("./config.json")

const token = `${config.botstat.tokenbot}`;

const { readdirSync } = require('fs');

const { join } = require('path');

client.commands = new Discord.Collection();

const perfix = `${config.botstat.prefix}`;



const commandsFiles = readdirSync(join(__dirname, "commands")).filter(file => file.endsWith(".js"))
/*                           Made by Mr Swift                              */


for (const file of commandsFiles) {
    const command = require(join(__dirname, "commands", `${file}`));
    client.commands.set(command.name, command);
}




/*                         Made by Mr Swift                            */
client.on('ready', () => {
    console.log("\n\nWe are ready to Attack 😎\n\n");
    client.user.setPresence({ status: 'idle' })
    client.user.setActivity("Hacking", { type: 'STREAMING', url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" })

    var t1 = setInterval(startTyping, 8000);


    function startTyping() {


        try {
            let chl = [
                '954608200819294228',
                '959080486217596963'
                ]
            chl.forEach(cha => cha.startTyping());

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
            chl.forEach(cha => cha.send(generateRandomString(20)));
            //message.channel.send(generateRandomString(20))

        }
        catch (err) {
            console.log(`error`)
        }


    }

    function sleep() {
        setTimeout(() => { console.log("Next!"); }, 4000);


    }

});
/***************************************************************************/
/*                                                                         */
/*                           Made by Mr Swift                              */
/*                      Best Source FOR Discord Bot                        */
/*               Server Support :https://discord.gg/6Zgu6TN                */
/*                        My instagram : Mr_.swift                         */
/*                              Copyright: 2020                            */
/*                                                                         */
/***************************************************************************/

client.on("message", async message => {


    /***************************************************************************/
    /*                                                                         */
    /*                           Made by Mr Swift                              */
    /*                      Best Source FOR Discord Bot                        */
    /*               Server Support :https://discord.gg/6Zgu6TN                */
    /*                        My instagram : Mr_.swift                         */
    /*                              Copyright: 2020                            */
    /*                                                                         */
    /***************************************************************************/


    if (message.channel.type === 'dm') return;
    if (message.author.id === '945597810944921620' || message.author.id === '716390085896962058') {


        if (message.content.startsWith(perfix)) {
            const args = message.content.slice(perfix.length).trim().split(/ +/);

            const command = args.shift().toLowerCase();
            /*                           Made by Mr Swift                              */
            if (!client.commands.has(command)) return;

            try {
                client.commands.get(command).run(client, message, args);
            } catch (error) {
                console.log(error);
            }
        } else if (message.embeds.length !== 0) {
            const est = message.embeds[0];
            if (!est) return;
            let foundText = false;
            est.fields.forEach(f => {
                if (f.name.includes('wild')) foundText = true;
            });
            if (est && est.title.includes('wild')) {
                message.channel.send('<@716390085896962058> h')
            }
        } else if (message.content.includes("The pokémon is")) {
            const {
                Collection,
                MessageEmbed
            } = require('discord.js');
            const Timeout = new Collection();
            const pokemonArray = require("./store/pokemonArray");
            const ms = require('ms')
            const alphabets = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
            // if (message.author.id !== '716390085896962058') return;
            try {
                console.log(message.content);
                const irl = (message.content.replace("The pokémon is ", "")).replace('.', "");
                let input = "";
                for (let i = 0; i < irl.length; i++) {
                    if (alphabets.includes(irl[i].toUpperCase()) || irl[i] === "_") {
                        input += irl[i].toLowerCase();
                    }
                }

                // console.clear();
                console.log(input)
                const search = (arr, inp) => {
                    const equalIndexes = [];
                    for (let i = 0; i < inp.length; i++) {
                        let a = inp[i];
                        if (a !== "_") {
                            equalIndexes.push(i)
                        }
                    }

                    for (let i = 0; i < arr.length; i++) {
                        let equalityCount = 0;
                        let word = arr[i];
                        if (word.length !== input.length) {
                            continue;
                        }

                        equalIndexes.forEach(a => {
                            if (word[a].toLowerCase() === inp[a].toLowerCase()) {
                                equalityCount += 1;
                            }
                        })
                        if (equalityCount === equalIndexes.length) {
                            return word;
                        }
                    }

                }
                const result = search(pokemonArray, input)
                if (result) {
                    return message.channel.send('<@716390085896962058> c ' + result)
                }
                // console.log(search(pokemonArray, input))

            } catch (e) {
                console.log(e)
            }
        }
    }
})




client.login(token);

/***************************************************************************/
/*                                                                         */
/*                           Made by Mr Swift                              */
/*                      Best Source FOR Discord Bot                        */
/*               Server Support :https://discord.gg/6Zgu6TN                */
/*                        My instagram : Mr_.swift                         */
/*                              Copyright: 2020                            */
/*                                                                         */
/***************************************************************************/
