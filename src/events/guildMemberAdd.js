import { EmbedBuilder, userMention } from "discord.js";

const CHANNEL_NAME = process.env.CHANNEL_NAME;
/*const MEME_URL = process.env.MEME_URL || "";*/

const event = {
  name: "guildMemberAdd",
  
  async execute(member) {
    const channel = member.guild.channels.cache.find(
      (channel) => channel.name === CHANNEL_NAME
    );

    /*
      TODO: Change getWelcomeMessage to getWelcomeMessageWithMeme to send a meme to welcome your user.
    */

    
    const welcomeMessage = await getWelcomeMessage(member.id);
    await channel.send(welcomeMessage);
  },
};

/* const getWelcomeMessage = (userId) => {
  /*
    this function returns a welcome message.
    Play around with the code here and customise the welcome message.
  *
  return {
    content: `Welcome ${userMention(userId)}! 
    Glad you could make it!
  `,
  };
}; */

//
const getWelcomeMessageWithMeme = async (userId) => {
  /*
    this function returns a welcome message with a meme.
    Play around with the code here and customise the welcome message.

    TODO: Change this function to return different welcome message with a meme everytime a new user joins.
  */
  const messages = [
    `Welcome ${userMention(userId)}! Glad you made it!`,
    `Hi ${userMention(userId)}, welcome to the party!`,
    `Thanks for joining ${userMention(userId)}!`,
  ];

  const randomMessage = 
    messages[Math.floor(Math.random() * messages.length)];
  
  const meme = await getMeme();

  return {
    content: randomMessage,
    embeds: [meme],
  };
};

const getMeme = async () => {

  const meme = [
        "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExOTg5cmp3ZHUwN3lwN29iamkwdWU2OGtwaHV2cmFrZ3dtODF2azk5OSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/l0MYC0LajbaPoEADu/giphy.gif",
        "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExOTg5cmp3ZHUwN3lwN29iamkwdWU2OGtwaHV2cmFrZ3dtODF2azk5OSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/ggtpYV17RP9lTbc542/giphy.gif",
        "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExOTg5cmp3ZHUwN3lwN29iamkwdWU2OGtwaHV2cmFrZ3dtODF2azk5OSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/Id6dC0GQOOzPMXgcPv/giphy.gif",
        "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExOTg5cmp3ZHUwN3lwN29iamkwdWU2OGtwaHV2cmFrZ3dtODF2azk5OSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/Rsp9jLIy0VZOKlZziw/giphy.gif",
        "https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3bW93NWRlcDgwZ2tqczJ3cDhsZzh6MDZtYzJzZGgwanFsNjFvcDZzbSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/YKFR0dauxYEzJA8J6U/giphy.gif",
        "https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3bW93NWRlcDgwZ2tqczJ3cDhsZzh6MDZtYzJzZGgwanFsNjFvcDZzbSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/eoVusT7Pi9ODe/giphy.gif",
      ];

  const randomIndex = Math.floor(Math.random() * meme.length);
  /*
    this function returns a meme.

    TODO: change this function to return a different meme randomly everytime a new user joins.
  */
  return new EmbedBuilder().setImage(MEME_URL);
};

export default event;
