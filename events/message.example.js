module.exports = async (client, message) => {
  if (message.author.bot) return;
  if (message.content == 'Ping!') {
    return message.channel.send(`${client.ws.ping} - Pong!`)
  }
};
