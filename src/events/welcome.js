import { EmbedBuilder, userMention } from "discord.js";

const event = {
  name: "welcome",
  
  async execute(message) {

    if (message.author.bot) return; 

    const content = message.content.trim().toLowerCase();

    if (content === "hi" || "hello") {
        await message.reply("Welcome to the chat! Glad you could make it!");
        constant meme = getmeme();
        embeds: [meme],
        
    }
    
  }
const getMeme = () => {
    const meme = [
        "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExOTg5cmp3ZHUwN3lwN29iamkwdWU2OGtwaHV2cmFrZ3dtODF2azk5OSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/l0MYC0LajbaPoEADu/giphy.gif",
        "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExOTg5cmp3ZHUwN3lwN29iamkwdWU2OGtwaHV2cmFrZ3dtODF2azk5OSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/ggtpYV17RP9lTbc542/giphy.gif",
        "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExOTg5cmp3ZHUwN3lwN29iamkwdWU2OGtwaHV2cmFrZ3dtODF2azk5OSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/Id6dC0GQOOzPMXgcPv/giphy.gif",
        "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExOTg5cmp3ZHUwN3lwN29iamkwdWU2OGtwaHV2cmFrZ3dtODF2azk5OSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/Rsp9jLIy0VZOKlZziw/giphy.gif",
        "https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3bW93NWRlcDgwZ2tqczJ3cDhsZzh6MDZtYzJzZGgwanFsNjFvcDZzbSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/YKFR0dauxYEzJA8J6U/giphy.gif",
        "https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3bW93NWRlcDgwZ2tqczJ3cDhsZzh6MDZtYzJzZGgwanFsNjFvcDZzbSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/eoVusT7Pi9ODe/giphy.gif",
      };

    const randomIndex = Math.floor(Math.random() * meme.length);

    return new EmbedBuilder().setImage(meme[randomIndex]);
}

  
  once: true,
  execute(client) {
    console.log(`
    ############################################################
    #  Logged in as ${client.user.username}!
    #  Serving ${client.guilds.cache.size} servers.
    #  Serving ${client.users.cache.size} users.
    ############################################################
  `);
  },
};

export default event;
