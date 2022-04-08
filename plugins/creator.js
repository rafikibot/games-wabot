let handler = function (m) {
  this.sendContact(m.chat, '6283805886796', '𝗗𝗜𝗞𝗜 𝗦𝗔𝗣𝗨𝗧𝗥𝗔', m)
  
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler
