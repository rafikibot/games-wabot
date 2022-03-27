let handler = function (m) {
  this.sendContact(m.chat, '628112567887', '𝐑𝐀𝐅𝐈 𝐆𝐀𝐍𝐙', m)
  
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler
