 import { Client,IntentsBitField, Message } from "discord.js";
 import * as dotenv from "dotenv"
 dotenv.config()

 const client = new Client({
    intents:[
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
    ]
 })

 client.on('ready', () => {
    console.log("No Ar")
 })

 client.on('messageCreate',(message) => {
    if(message.author.bot) return
    if(message.content == "alo?" ){
        message.reply("voce é aproxima!")
    }
 })
 
 client.login(process.env.TOKEN)