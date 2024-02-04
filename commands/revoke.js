module.exports = {
  command: 'revoke',
  info: 'Revokes group\'s invitation link.',
  func: async (sock, msg, text) => {
    if (!msg.isGroup) return await msg.reply({ text: '*This command can only be used in group!*' });
    if (!(await msg.isAdmin(msg.me))) return await msg.reply({ text: '*I am not an admin of this group!*' });
    await sock.groupRevokeInvite(msg.chat);
    return await msg.reply({ text: '*Group link revoked!*' });
  }
};
