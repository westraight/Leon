module.exports = {
  command: 'link',
  info: 'Fetches group\'s invitation link.',
  func: async (sock, msg, text) => {
    if (!msg.isGroup) return await msg.reply({ text: '*This command can only be used in group!*' });
    if (!(await msg.isAdmin(msg.me))) return await msg.reply({ text: '*I am not an admin of this group!*' });
    return await msg.reply({
      text: 'https://chat.whatsapp.com/' + (await sock.groupInviteCode(msg.chat))
    });
  }
};
