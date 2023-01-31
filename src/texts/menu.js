let info = [
	`SkyzeeBOT fue creado con fines de automoderación y diversión, ideal para mantener un grupo activo. Pero antes que nada, aclaramos que este bot aún sigue en desarrollo y pueden aparecer errores... :/`,
	`*(29/01/2023) =>* El bot aún está en constantes modificaciones.`
]

let changes = [
	`*(29/01/2023) =>* #menu`,
	`*(29/01/2023) =>* #request`,
	`*(29/01/2023) =>* #bug`,
	`*(29/01/2023) =>* Bienvenida y despedida en los grupos`,
	`*(29/01/2023) =>* Contenido random cada 1 hora`,
	`*(29/01/2023) =>* Nuevo usuario detectado`
]

const menu = (name, role, runtime, ping, users, totalHits, todayHits, botname) => {
let count = 1
teks = ` 「 *❝${name}❞: ${role}* 」

➤ *﹝${public ? '𝘱𝘶𝘣𝘭𝘪𝘤 🔓' : '𝘴𝘦𝘭𝘧 🔐'}﹞*
➤ *《 PREFIX: (MULTI-PREFIX) 》*
➤ *《 UPDATED ON 29/01 》*

╔══════ • ✩ • ══════╗
• 𝚁𝚞𝚗𝚝𝚒𝚖𝚎: ${runtime}
• 𝙿𝚒𝚗𝚐 : ${ping} miliseconds
• 𝚁𝚎𝚌𝚎𝚗𝚝𝚜 𝚞𝚜𝚎𝚛𝚜: ${users}
• 𝚃𝚘𝚍𝚊𝚢 𝚑𝚒𝚝𝚜: ${totalHits}
• 𝚃𝚘𝚝𝚊𝚕 𝚑𝚒𝚝𝚜: ${todayHits}
╚══════ • ✩ • ══════╝

┉┅━━━━━━•:✵:•━━━━━━┅┉
_·> MENSAJES POR PARTE DEL OWNER_`
for (let infoContent of info) {
	teks += `\n\n\`\`\`${count})\`\`\` ${infoContent}`
	count++
}
count = 1
teks +=
`\n┉┅━━━━━━━•━━━━━━━┅┉

┉┅━━━━━━•:✵:•━━━━━━┅┉
_·> ACTUALIZACIONES_`
for (let changesContent of changes) {
	teks += `\n\n\`\`\`${count})\`\`\` ${changesContent}`
	count++
}
count = 1
teks +=
`\n┉┅━━━━━━━•━━━━━━━┅┉


¿Algún bug? #bug
¿Propones algo mejor? #request
Gracias por usar ${botname}!! owo`

return teks
}

const menu2 = () => {
	teks =
`Lista de comandos: #allmenu`
	return teks
}

module.exports = {
	menu,
	menu2
}