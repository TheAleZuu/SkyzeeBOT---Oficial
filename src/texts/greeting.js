const welcome = (member, numberMember) => {
	teks =
`┏─━─━─━ ❝ ✌ ❞ ━─━─━─┓
               ＢＩＥＮＶＥＮＩＤＯ
               @${member}
┗─━─━─━ ❝ ✨ ❞ ━─━─━─┛
    │✑  𝐌𝐢𝐞𝐦𝐛𝐫𝐨 𝐍º${numberMember}
    └──────────┈ ⳹`
    return teks
}

const goodbye = (member, numberMember) => {
	msg = [
		`𝐍𝐨𝐬 𝐯𝐞𝐦𝐨𝐬 𝐮𝐧𝐚 𝐩𝐫ó𝐱𝐢𝐦𝐚!`,
		`𝐆𝐫𝐚𝐜𝐢𝐚𝐬 𝐩𝐨𝐫 𝐞𝐬𝐭𝐚𝐫!`,
		`𝐆𝐫𝐚𝐜𝐢𝐚𝐬 𝐩𝐨𝐫 𝐭𝐨𝐝𝐨!`,
		`𝐕𝐮𝐞𝐥𝐯𝐞 𝐩𝐫𝐨𝐧𝐭𝐨!`,
		`𝐒𝐮𝐞𝐫𝐭𝐞!`
	]
	teks =
`┏─━─━─━ ❝ 👋 ❞ ━─━─━─┓
                    ＡＤＩÓＳ
               @${member}
┗─━─━─━ ❝ 🥀 ❞ ━─━─━─┛
    │✑  ${msg[Math.floor(Math.random() * msg.length)]}
    │✑  𝐌𝐢𝐞𝐦𝐛𝐫𝐨 𝐍º${numberMember}
    └───────────┈ ⳹`
	return teks
}

module.exports = {
	welcome,
	goodbye
}