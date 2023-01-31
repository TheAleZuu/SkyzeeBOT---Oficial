
require('./settings')
const { default: SkyzeeBOTConnect, WA_DEFAULT_EPHEMERAL, Mimetype, BufferJSON, generateWAMessage, generateWAMessageContent, useSingleFileAuthState, DisconnectReason, fetchLatestBaileysVersion, generateForwardMessageContent, prepareWAMessageMedia, generateWAMessageFromContent, areJidsSameUser, prepareMessageFromContent, generateMessageID, downloadContentFromMessage, makeInMemoryStore, jidDecode, proto, getContentType } = require("@adiwajshing/baileys")
const { state, saveState } = useSingleFileAuthState(`${sessionName}.json`)
const pino = require('pino')
const { Boom } = require('@hapi/boom')
const fs = require('fs')
const util = require('util')
const yargs = require('yargs/yargs')
const chalk = require('chalk')
const FileType = require('file-type')
const path = require('path')
const _ = require('lodash')
const axios = require('axios')
const PhoneNumber = require('awesome-phonenumber')
const { imageToWebp, videoToWebp, writeExifImg, writeExifVid } = require('./lib/exif')
const { smsg, isUrl, generateMessageTag, getBuffer, getSizeMedia, fetchJson, await, sleep } = require('./lib/myfunc')
const { TelegraPh } = require('./lib/uploader')
const moment = require('moment-timezone')
const { welcome, goodbye } = require('./src/texts/greeting.js')
const getRandom = (ext) => {
	return `${Math.floor(Math.random() * 10000)}${ext}`
}
var low
try {
  low = require('lowdb')
} catch (e) {
  low = require('./lib/lowdb')
}

const { Low, JSONFile } = low
const mongoDB = require('./lib/mongoDB')

global.api = (name, path = '/', query = {}, apikeyqueryname) => (name in global.APIs ? global.APIs[name] : name) + path + (query || apikeyqueryname ? '?' + new URLSearchParams(Object.entries({ ...query, ...(apikeyqueryname ? { [apikeyqueryname]: global.APIKeys[name in global.APIs ? global.APIs[name] : name] } : {}) })) : '')

const store = makeInMemoryStore({ logger: pino().child({ level: 'silent', stream: 'store' }) })

global.opts = new Object(yargs(process.argv.slice(2)).exitProcess(false).parse())
global.db = new Low(
  /https?:\/\//.test(opts['db'] || '') ?
    new cloudDBAdapter(opts['db']) : /mongodb/.test(opts['db']) ?
      new mongoDB(opts['db']) :
      new JSONFile(`src/database.json`)
)
global.DATABASE = global.db
global.loadDatabase = async function loadDatabase() {
  if (global.db.READ) return new Promise((resolve) => setInterval(function () { (!global.db.READ ? (clearInterval(this), resolve(global.db.data == null ? global.loadDatabase() : global.db.data)) : null) }, 1 * 1000))
  if (global.db.data !== null) return
  global.db.READ = true
  await global.db.read()
  global.db.READ = false
  global.db.data = {
    users: {},
    chats: {},
    database: {},
    game: {},
    settings: {},
    others: {},
    sticker: {},
    ...(global.db.data || {})
  }
  global.db.chain = _.chain(global.db.data)
}
loadDatabase()

process.on('uncaughtException', console.error)

// save database every 30seconds
if (global.db) setInterval(async () => {
    if (global.db.data) await global.db.write()
  }, 30 * 1000)

async function startSkyzeeBOT() {
    const SkyzeeBOT = SkyzeeBOTConnect({
        logger: pino({ level: 'silent' }),
        printQRInTerminal: true,
        browser: ['Cheems Bot MD','Safari','1.0.0'],
        auth: state
    })

    store.bind(SkyzeeBOT.ev)
    
    // anticall auto block
    SkyzeeBOT.ws.on('CB:call', async (json) => {
    const callerId = json.content[0].attrs['call-creator']
    if (json.content[0].tag == 'offer') {
    let blockxeon = await SkyzeeBOT.sendContact(callerId, global.owner)
    SkyzeeBOT.sendMessage(callerId, { text: `*Automatic blocking system!*\n*Don't call bot*!\n*Please contact the owner to open block !*`}, { quoted : blockxeon })
    await sleep(8000)
    await SkyzeeBOT.updateBlockStatus(callerId, "block")
    }
    })

    SkyzeeBOT.ev.on('messages.upsert', async chatUpdate => {
        //console.log(JSON.stringify(chatUpdate, undefined, 2))
        try {
        mek = chatUpdate.messages[0]
        if (!mek.message) return
        mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
        if (mek.key && mek.key.remoteJid === 'status@broadcast') return
        if (!SkyzeeBOT.public && !mek.key.fromMe && chatUpdate.type === 'notify') return
        if (mek.key.id.startsWith('BAE5') && mek.key.id.length === 16) return
        m = smsg(SkyzeeBOT, mek, store)
        require("./XeonCheems6")(SkyzeeBOT, m, chatUpdate, store)
        } catch (e) {
            console.log(e)
        }
    })
    
    // Group Update
    // SkyzeeBOT.ev.on('groups.update', async pea => {
    //    //console.log(pea)
    // // Get Profile Picture Group
    //    try {
    //    ppgc = await SkyzeeBOT.profilePictureUrl(pea[0].id, 'image')
    //    } catch {
    //    ppgc = 'https://i.ibb.co/RBx5SQC/avatar-group-large-v2.png'
    //    }
    //    let lolXeon = { url : ppgc }
    //    if (pea[0].announce == true) {
    //    SkyzeeBOT.send5ButImg(pea[0].id, `「 Group Settings Changed 」\n\nThe Group Has Been Closed By Admin, Now Only Admin Can Send Messages !`, `${botname}`, lolXeon, [])
    //    } else if(pea[0].announce == false) {
    //    SkyzeeBOT.send5ButImg(pea[0].id, `「 Group Settings Changed 」\n\nThe Group Has Been Opened By Admin, Now Participants Can Send Messages !`, `${botname}`, lolXeon, [])
    //    } else if (pea[0].restrict == true) {
    //    SkyzeeBOT.send5ButImg(pea[0].id, `「 Group Settings Changed 」\n\nGroup Info Has Been Restricted, Now Only Admin Can Edit Group Info !`, `${botname}`, lolXeon, [])
    //    } else if (pea[0].restrict == false) {
    //    SkyzeeBOT.send5ButImg(pea[0].id, `「 Group Settings Changed 」\n\nGroup Info Has Been Opened, Now Participants Can Edit Group Info !`, `${botname}`, lolXeon, [])
    //    } else {
    //    SkyzeeBOT.send5ButImg(pea[0].id, `「 Group Settings Changed 」\n\nGroup Subject Has Been Changed To *${pea[0].subject}*`, `${botname}`, lolXeon, [])
    //  }
    // })
    
    //randoming function
function pickRandom(list) {
return list[Math.floor(list.length * Math.random())]
}

function randomNomor(angka){
return Math.floor(Math.random() * angka) + 1
}

//document randomizer
let documents = [doc1,doc2,doc3,doc4,doc5,doc6]
let docs = pickRandom(documents)

    SkyzeeBOT.ev.on('group-participants.update', async (anu) => {
        console.log(anu)
        if (!public) return
        try {
            let metadata = await SkyzeeBOT.groupMetadata(anu.id)
            let participants = anu.participants
            for (let num of participants) {
                // Get Profile Picture User
                try {
                    ppuser = await SkyzeeBOT.profilePictureUrl(num, 'image')
                } catch {
                    ppuser = 'https://i.ibb.co/sbqvDMw/avatar-contact-large-v2.png'
                }

                // Get Profile Picture Group
                try {
                    ppgroup = await SkyzeeBOT.profilePictureUrl(anu.id, 'image')
                } catch {
                    ppgroup = 'https://i.ibb.co/RBx5SQC/avatar-group-large-v2.png'
                }


                
                //welcome\\
            let nama = await SkyzeeBOT.getName(num)
            memb = participants ? metadata.participants.length : undefined
            groupName = metadata.subject
            XeonWlcm = await getBuffer(ppuser)
            XeonLft = await getBuffer(ppuser)
                if (anu.action == 'add') {
                    if (participants.includes(SkyzeeBOT.decodeJid(SkyzeeBOT.user.id))) {
                        SkyzeeBOT.sendMessage(anu.id, { audio: fs.readFileSync('./XeonMedia/audio/buenas.mp3'), mimetype: 'audio/mpeg' })
                    }
                const xeonbuffer = await getBuffer(ppuser)
                let xeonName = num
	            members = metadata.participants.length
                let unicorndoc = {key: {fromMe: false,"participant":anu.id, "remoteJid": "status@broadcast"}, "message": { 'contactMessage': { 'displayName': metadata.subject, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${botname},;;;\nFN:${botname}\nitem1.TEL;waid=5492996557871:5492996557871\nitem1.X-ABLabel:Mobile\nEND:VCARD`, 'jpegThumbnail': ppgroup, 'thumbnail': ppgroup, 'sendEphemeral': true}}}
                xeonbody = welcome(num.split('@')[0], members)
let buttons = [
{buttonId: `.profile ${num.split('@')[0]}`, buttonText: {displayText: `PERFIL 👤`}, type: 1},
{buttonId: `.menu`, buttonText: {displayText: `MENU 🗒`}, type: 1}
]
let buttonMessage = {
    document: fs.readFileSync('./XeonMedia/theme/cheems.xlsx'),
    mimetype: docs,
    fileName: `${metadata.subject}`,
    caption: xeonbody,
    footer: `${botname}`,
    buttons: buttons,
    contextInfo: {
        mentionedJid: [num],
        externalAdReply: {
            title: `✌ ${nama} ✌`,
            body: `Welcome!`,
            mediaType: 2,
            thumbnail: XeonWlcm,
            sourceUrl: `${websitex}`,
            showAdAttribution: true
        }
    }
}
SkyzeeBOT.sendMessage(anu.id, buttonMessage, {quoted: unicorndoc})
                } else if (anu.action == 'remove') {
                	const xeonbuffer = await getBuffer(ppuser)
                	let xeonName = num
                    const xeonmembers = metadata.participants.length
                let unicorndoc = {key: {fromMe: false,"participant":anu.id, "remoteJid": "status@broadcast"}, "message": { 'contactMessage': { 'displayName': metadata.subject, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${botname},;;;\nFN:${botname}\nitem1.TEL;waid=5492996557871:5492996557871\nitem1.X-ABLabel:Mobile\nEND:VCARD`, 'jpegThumbnail': ppgroup, 'thumbnail': ppgroup, 'sendEphemeral': true}}}
                    xeonbody = goodbye(num.split('@')[0], xeonmembers)
let buttons = [
{buttonId: `.react 👋`, buttonText: {displayText: 'Sayonara 🕊'}, type: 1}
]
let buttonMessage = {
    document: fs.readFileSync('./XeonMedia/theme/cheems.xlsx'),
    mimetype: docs,
    fileName: `${metadata.subject}`,
    caption: xeonbody,
    footer: `${botname}`,
    buttons: buttons,
    contextInfo: {
        mentionedJid: [num],
        externalAdReply: {
            title: `👋 ${nama} 👋`,
            body: `${nama} acaba de abandonar el chat. Goodbye...`,
            mediaType: 2,
            thumbnail: XeonWlcm,
            sourceUrl: `${websitex}`,
            showAdAttribution: true
        }
    }
}
SkyzeeBOT.sendMessage(anu.id, buttonMessage, {quoted:unicorndoc})
                             
                }
            }
        } catch (e) {
            console.log(e)
        }
    })
    // Setting
    SkyzeeBOT.decodeJid = (jid) => {
        if (!jid) return jid
        if (/:\d+@/gi.test(jid)) {
            let decode = jidDecode(jid) || {}
            return decode.user && decode.server && decode.user + '@' + decode.server || jid
        } else return jid
    }
    
    SkyzeeBOT.ev.on('contacts.update', update => {
        for (let contact of update) {
            let id = SkyzeeBOT.decodeJid(contact.id)
            if (store && store.contacts) store.contacts[id] = { id, name: contact.notify }
        }
    })

    SkyzeeBOT.getName = (jid, withoutContact  = false) => {
        id = SkyzeeBOT.decodeJid(jid)
        withoutContact = SkyzeeBOT.withoutContact || withoutContact 
        let v
        if (id.endsWith("@g.us")) return new Promise(async (resolve) => {
            v = store.contacts[id] || {}
            if (!(v.name || v.subject)) v = SkyzeeBOT.groupMetadata(id) || {}
            resolve(v.name || v.subject || PhoneNumber('+' + id.replace('@s.whatsapp.net', '')).getNumber('international'))
        })
        else v = id === '0@s.whatsapp.net' ? {
            id,
            name: 'WhatsApp'
        } : id === SkyzeeBOT.decodeJid(SkyzeeBOT.user.id) ?
            SkyzeeBOT.user :
            (store.contacts[id] || {})
            return (withoutContact ? '' : v.name) || v.subject || v.verifiedName || PhoneNumber('+' + jid.replace('@s.whatsapp.net', '')).getNumber('international')
    }
    
        SkyzeeBOT.sendContact = async (jid, kon, quoted = '', opts = {}) => {
	let list = []
	for (let i of kon) {
	    list.push({
	    	displayName: await SkyzeeBOT.getName(i),
	    	vcard: `BEGIN:VCARD\nVERSION:3.0\nN:${await SkyzeeBOT.getName(i)}\nFN:${await SkyzeeBOT.getName(i)}\nitem1.TEL;waid=${i}:${i}\nitem1.X-ABLabel:Click here to chat\nitem2.EMAIL;type=INTERNET:${ytname}\nitem2.X-ABLabel:YouTube\nitem3.URL:${socialm}\nitem3.X-ABLabel:GitHub\nitem4.ADR:;;${location};;;;\nitem4.X-ABLabel:Region\nEND:VCARD`
	    })
	}
	SkyzeeBOT.sendMessage(jid, { contacts: { displayName: `${list.length} Kontak`, contacts: list }, ...opts }, { quoted })
    }
    
    SkyzeeBOT.setStatus = (status) => {
        SkyzeeBOT.query({
            tag: 'iq',
            attrs: {
                to: '@s.whatsapp.net',
                type: 'set',
                xmlns: 'status',
            },
            content: [{
                tag: 'status',
                attrs: {},
                content: Buffer.from(status, 'utf-8')
            }]
        })
        return status
    }
	
    SkyzeeBOT.public = true

    SkyzeeBOT.serializeM = (m) => smsg(SkyzeeBOT, m, store)

    SkyzeeBOT.ev.on('connection.update', async (update) => {
        const { connection, lastDisconnect } = update	    
        if (connection === 'close') {
        let reason = new Boom(lastDisconnect?.error)?.output.statusCode
            if (reason === DisconnectReason.badSession) { console.log(`Bad Session File, Please Delete Session and Scan Again`); SkyzeeBOT.logout(); }
            else if (reason === DisconnectReason.connectionClosed) { console.log("Connection closed, reconnecting...."); startSkyzeeBOT(); }
            else if (reason === DisconnectReason.connectionLost) { console.log("Connection Lost from Server, reconnecting..."); startSkyzeeBOT(); }
            else if (reason === DisconnectReason.connectionReplaced) { console.log("Connection Replaced, Another New Session Opened, Please Close Current Session First"); SkyzeeBOT.logout(); }
            else if (reason === DisconnectReason.loggedOut) { console.log(`Device Logged Out, Please Scan Again And Run.`); SkyzeeBOT.logout(); }
            else if (reason === DisconnectReason.restartRequired) { console.log("Restart Required, Restarting..."); startSkyzeeBOT(); }
            else if (reason === DisconnectReason.timedOut) { console.log("Connection TimedOut, Reconnecting..."); startSkyzeeBOT(); }
            else SkyzeeBOT.end(`Unknown DisconnectReason: ${reason}|${connection}`)
        }
        if (connection === 'open') {
            setInterval(async() => {
                let getGroups = await SkyzeeBOT.groupFetchAllParticipating()
                let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
                let anu = groups.map(v => v.id)
                for (let i of anu) {
                    let random = randomNomor(2)
                    if (random === 0) {
                        SkyzeeBOT.sendMessage(i, { image: { url: fs.readFileSync(`./XeonMedia/meme/image/image (${randomNomor(250)}).jpg`) }})
                    } else if (random === 1) {
                        SkyzeeBOT.sendMessage(i, { video: fs.readFileSync(`./XeonMedia/meme/video/video (${randomNomor(128)}).mp4`) })
                    } else if (random === 2) {
                        SkyzeeBOT.sendMessage(i, { audio: fs.readFileSync(`./XeonMedia/meme/audio/audio (${randomNomor(96)}).mp3`), mimetype: 'audio/mpeg' })
                    }
                }
            }, 3600 * 1000)
        }
        console.log('Connected...', update)
    })

    SkyzeeBOT.ev.on('creds.update', saveState)

    // Add Other

      /**
      *
      * @param {*} jid
      * @param {*} url
      * @param {*} caption
      * @param {*} quoted
      * @param {*} options
      */
     SkyzeeBOT.sendFileUrl = async (jid, url, caption, quoted, options = {}) => {
      let mime = '';
      let res = await axios.head(url)
      mime = res.headers['content-type']
      if (mime.split("/")[1] === "gif") {
     return SkyzeeBOT.sendMessage(jid, { video: await getBuffer(url), caption: caption, gifPlayback: true, ...options}, { quoted: quoted, ...options})
      }
      let type = mime.split("/")[0]+"Message"
      if(mime === "application/pdf"){
     return SkyzeeBOT.sendMessage(jid, { document: await getBuffer(url), mimetype: 'application/pdf', caption: caption, ...options}, { quoted: quoted, ...options })
      }
      if(mime.split("/")[0] === "image"){
     return SkyzeeBOT.sendMessage(jid, { image: await getBuffer(url), caption: caption, ...options}, { quoted: quoted, ...options})
      }
      if(mime.split("/")[0] === "video"){
     return SkyzeeBOT.sendMessage(jid, { video: await getBuffer(url), caption: caption, mimetype: 'video/mp4', ...options}, { quoted: quoted, ...options })
      }
      if(mime.split("/")[0] === "audio"){
     return SkyzeeBOT.sendMessage(jid, { audio: await getBuffer(url), caption: caption, mimetype: 'audio/mpeg', ...options}, { quoted: quoted, ...options })
      }
      }

    /** Send List Messaage
      *
      *@param {*} jid
      *@param {*} text
      *@param {*} footer
      *@param {*} title
      *@param {*} butText
      *@param [*] sections
      *@param {*} quoted
      */
        SkyzeeBOT.sendListMsg = (jid, text = '', footer = '', title = '' , butText = '', sects = [], quoted) => {
        let sections = sects
        var listMes = {
        text: text,
        footer: footer,
        title: title,
        buttonText: butText,
        sections
        }
        SkyzeeBOT.sendMessage(jid, listMes, { quoted: quoted })
        }

    /** Send Button 5 Message
     * 
     * @param {*} jid
     * @param {*} text
     * @param {*} footer
     * @param {*} button
     * @returns 
     */
        SkyzeeBOT.send5ButMsg = (jid, text = '' , footer = '', but = []) =>{
        let templateButtons = but
        var templateMessage = {
        text: text,
        footer: footer,
        templateButtons: templateButtons
        }
        SkyzeeBOT.sendMessage(jid, templateMessage)
        }

    /** Send Button 5 Image
     *
     * @param {*} jid
     * @param {*} text
     * @param {*} footer
     * @param {*} image
     * @param [*] button
     * @param {*} options
     * @returns
     */
    SkyzeeBOT.send5ButImg = async (jid , text = '' , footer = '', img, but = [], options = {}) => {
        let message = await prepareWAMessageMedia({ image: img }, { upload: SkyzeeBOT.waUploadToServer })
        var template = generateWAMessageFromContent(jid, proto.Message.fromObject({
            templateMessage: {
                hydratedTemplate: {
                    imageMessage: message.imageMessage,
                    "hydratedContentText": text,
                    "hydratedFooterText": footer,
                    "hydratedButtons": but
                }
            }
        }), options)
        SkyzeeBOT.relayMessage(jid, template.message, { messageId: template.key.id })
    }

    /** Send Button 5 Video
     *
     * @param {*} jid
     * @param {*} text
     * @param {*} footer
     * @param {*} Video
     * @param [*] button
     * @param {*} options
     * @returns
     */
    SkyzeeBOT.send5ButVid = async (jid , text = '' , footer = '', vid, but = [], options = {}) =>{
        let message = await prepareWAMessageMedia({ video: vid }, { upload: SkyzeeBOT.waUploadToServer })
        var template = generateWAMessageFromContent(jid, proto.Message.fromObject({
        templateMessage: {
        hydratedTemplate: {
        videoMessage: message.videoMessage,
               "hydratedContentText": text,
               "hydratedFooterText": footer,
               "hydratedButtons": but
            }
            }
            }), options)
            SkyzeeBOT.relayMessage(jid, template.message, { messageId: template.key.id })
    }

    /** Send Button 5 Gif
     *
     * @param {*} jid
     * @param {*} text
     * @param {*} footer
     * @param {*} Gif
     * @param [*] button
     * @param {*} options
     * @returns
     */
    SkyzeeBOT.send5ButGif = async (jid , text = '' , footer = '', gif, but = [], options = {}) =>{
        let message = await prepareWAMessageMedia({ video: gif, gifPlayback: true }, { upload: SkyzeeBOT.waUploadToServer })
        var template = generateWAMessageFromContent(jid, proto.Message.fromObject({
        templateMessage: {
        hydratedTemplate: {
        videoMessage: message.videoMessage,
               "hydratedContentText": text,
               "hydratedFooterText": footer,
               "hydratedButtons": but
            }
            }
            }), options)
            SkyzeeBOT.relayMessage(jid, template.message, { messageId: template.key.id })
    }

    /**
     * 
     * @param {*} jid 
     * @param {*} buttons 
     * @param {*} caption 
     * @param {*} footer 
     * @param {*} quoted 
     * @param {*} options 
     */
    SkyzeeBOT.sendButtonText = (jid, buttons = [], text, footer, quoted = '', options = {}) => {
        let buttonMessage = {
            text,
            footer,
            buttons,
            headerType: 2,
            ...options
        }
        SkyzeeBOT.sendMessage(jid, buttonMessage, { quoted, ...options })
    }
    
    /**
     * 
     * @param {*} jid 
     * @param {*} text 
     * @param {*} quoted 
     * @param {*} options 
     * @returns 
     */
    SkyzeeBOT.sendText = (jid, text, quoted = '', options) => SkyzeeBOT.sendMessage(jid, { text: text, ...options }, { quoted })

    /**
     * 
     * @param {*} jid 
     * @param {*} path 
     * @param {*} caption 
     * @param {*} quoted 
     * @param {*} options 
     * @returns 
     */
    SkyzeeBOT.sendImage = async (jid, path, caption = '', quoted = '', options) => {
	let buffer = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
        return await SkyzeeBOT.sendMessage(jid, { image: buffer, caption: caption, ...options }, { quoted })
    }

    /**
     * 
     * @param {*} jid 
     * @param {*} path 
     * @param {*} caption 
     * @param {*} quoted 
     * @param {*} options 
     * @returns 
     */
    SkyzeeBOT.sendVideo = async (jid, path, caption = '', quoted = '', gif = false, options) => {
        let buffer = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
        return await SkyzeeBOT.sendMessage(jid, { video: buffer, caption: caption, gifPlayback: gif, ...options }, { quoted })
    }

    /**
     * 
     * @param {*} jid 
     * @param {*} path 
     * @param {*} quoted 
     * @param {*} mime 
     * @param {*} options 
     * @returns 
     */
    SkyzeeBOT.sendAudio = async (jid, path, quoted = '', ptt = false, options) => {
        let buffer = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
        return await SkyzeeBOT.sendMessage(jid, { audio: buffer, ptt: ptt, ...options }, { quoted })
    }

    /**
     * 
     * @param {*} jid 
     * @param {*} text 
     * @param {*} quoted 
     * @param {*} options 
     * @returns 
     */
    SkyzeeBOT.sendTextWithMentions = async (jid, text, quoted, options = {}) => SkyzeeBOT.sendMessage(jid, { text: text, contextInfo: { mentionedJid: [...text.matchAll(/@(\d{0,16})/g)].map(v => v[1] + '@s.whatsapp.net') }, ...options }, { quoted })

    /**
     * 
     * @param {*} jid 
     * @param {*} path 
     * @param {*} quoted 
     * @param {*} options 
     * @returns 
     */
    SkyzeeBOT.sendImageAsSticker = async (jid, path, quoted, options = {}) => {
        let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
        let buffer
        if (options && (options.packname || options.author)) {
            buffer = await writeExifImg(buff, options)
        } else {
            buffer = await imageToWebp(buff)
        }

        await SkyzeeBOT.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted })
        return buffer
    }

    /**
     * 
     * @param {*} jid 
     * @param {*} path 
     * @param {*} quoted 
     * @param {*} options 
     * @returns 
     */
    SkyzeeBOT.sendVideoAsSticker = async (jid, path, quoted, options = {}) => {
        let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
        let buffer
        if (options && (options.packname || options.author)) {
            buffer = await writeExifVid(buff, options)
        } else {
            buffer = await videoToWebp(buff)
        }

        await SkyzeeBOT.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted })
        return buffer
    }
	
    /**
     * 
     * @param {*} message 
     * @param {*} filename 
     * @param {*} attachExtension 
     * @returns 
     */
    SkyzeeBOT.downloadAndSaveMediaMessage = async (message, filename, attachExtension = true) => {
        let quoted = message.msg ? message.msg : message
        let mime = (message.msg || message).mimetype || ''
        let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
        const stream = await downloadContentFromMessage(quoted, messageType)
        let buffer = Buffer.from([])
        for await(const chunk of stream) {
            buffer = Buffer.concat([buffer, chunk])
        }
	let type = await FileType.fromBuffer(buffer)
        trueFileName = attachExtension ? (filename + '.' + type.ext) : filename
        // save to file
        await fs.writeFileSync(trueFileName, buffer)
        return trueFileName
    }

    SkyzeeBOT.downloadMediaMessage = async (message) => {
        let mime = (message.msg || message).mimetype || ''
        let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
        const stream = await downloadContentFromMessage(message, messageType)
        let buffer = Buffer.from([])
        for await(const chunk of stream) {
            buffer = Buffer.concat([buffer, chunk])
	}
        
	return buffer
     } 
    
    /**
     * 
     * @param {*} jid 
     * @param {*} path 
     * @param {*} filename
     * @param {*} caption
     * @param {*} quoted 
     * @param {*} options 
     * @returns 
     */
    SkyzeeBOT.sendMedia = async (jid, path, fileName = '', caption = '', quoted = '', options = {}) => {
        let types = await SkyzeeBOT.getFile(path, true)
           let { mime, ext, res, data, filename } = types
           if (res && res.status !== 200 || file.length <= 65536) {
               try { throw { json: JSON.parse(file.toString()) } }
               catch (e) { if (e.json) throw e.json }
           }
       let type = '', mimetype = mime, pathFile = filename
       if (options.asDocument) type = 'document'
       if (options.asSticker || /webp/.test(mime)) {
        let { writeExif } = require('./lib/exif')
        let media = { mimetype: mime, data }
        pathFile = await writeExif(media, { packname: options.packname ? options.packname : global.packname, author: options.author ? options.author : global.author, categories: options.categories ? options.categories : [] })
        await fs.promises.unlink(filename)
        type = 'sticker'
        mimetype = 'image/webp'
        }
       else if (/image/.test(mime)) type = 'image'
       else if (/video/.test(mime)) type = 'video'
       else if (/audio/.test(mime)) type = 'audio'
       else type = 'document'
       await SkyzeeBOT.sendMessage(jid, { [type]: { url: pathFile }, caption, mimetype, fileName, ...options }, { quoted, ...options })
       return fs.promises.unlink(pathFile)
       }

    /**
     * 
     * @param {*} jid 
     * @param {*} message 
     * @param {*} forceForward 
     * @param {*} options 
     * @returns 
     */
    SkyzeeBOT.copyNForward = async (jid, message, forceForward = false, options = {}) => {
        let vtype
		if (options.readViewOnce) {
			message.message = message.message && message.message.ephemeralMessage && message.message.ephemeralMessage.message ? message.message.ephemeralMessage.message : (message.message || undefined)
			vtype = Object.keys(message.message.viewOnceMessage.message)[0]
			delete(message.message && message.message.ignore ? message.message.ignore : (message.message || undefined))
			delete message.message.viewOnceMessage.message[vtype].viewOnce
			message.message = {
				...message.message.viewOnceMessage.message
			}
		}

        let mtype = Object.keys(message.message)[0]
        let content = await generateForwardMessageContent(message, forceForward)
        let ctype = Object.keys(content)[0]
		let context = {}
        if (mtype != "conversation") context = message.message[mtype].contextInfo
        content[ctype].contextInfo = {
            ...context,
            ...content[ctype].contextInfo
        }
        const waMessage = await generateWAMessageFromContent(jid, content, options ? {
            ...content[ctype],
            ...options,
            ...(options.contextInfo ? {
                contextInfo: {
                    ...content[ctype].contextInfo,
                    ...options.contextInfo
                }
            } : {})
        } : {})
        await SkyzeeBOT.relayMessage(jid, waMessage.message, { messageId:  waMessage.key.id })
        return waMessage
    }

    SkyzeeBOT.cMod = (jid, copy, text = '', sender = SkyzeeBOT.user.id, options = {}) => {
        //let copy = message.toJSON()
		let mtype = Object.keys(copy.message)[0]
		let isEphemeral = mtype === 'ephemeralMessage'
        if (isEphemeral) {
            mtype = Object.keys(copy.message.ephemeralMessage.message)[0]
        }
        let msg = isEphemeral ? copy.message.ephemeralMessage.message : copy.message
		let content = msg[mtype]
        if (typeof content === 'string') msg[mtype] = text || content
		else if (content.caption) content.caption = text || content.caption
		else if (content.text) content.text = text || content.text
		if (typeof content !== 'string') msg[mtype] = {
			...content,
			...options
        }
        if (copy.key.participant) sender = copy.key.participant = sender || copy.key.participant
		else if (copy.key.participant) sender = copy.key.participant = sender || copy.key.participant
		if (copy.key.remoteJid.includes('@s.whatsapp.net')) sender = sender || copy.key.remoteJid
		else if (copy.key.remoteJid.includes('@broadcast')) sender = sender || copy.key.remoteJid
		copy.key.remoteJid = jid
		copy.key.fromMe = sender === SkyzeeBOT.user.id

        return proto.WebMessageInfo.fromObject(copy)
    }


    /**
     * 
     * @param {*} path 
     * @returns 
     */
    SkyzeeBOT.getFile = async (PATH, save) => {
        let res
        let data = Buffer.isBuffer(PATH) ? PATH : /^data:.*?\/.*?;base64,/i.test(PATH) ? Buffer.from(PATH.split`,`[1], 'base64') : /^https?:\/\//.test(PATH) ? await (res = await getBuffer(PATH)) : fs.existsSync(PATH) ? (filename = PATH, fs.readFileSync(PATH)) : typeof PATH === 'string' ? PATH : Buffer.alloc(0)
        //if (!Buffer.isBuffer(data)) throw new TypeError('Result is not a buffer')
        let type = await FileType.fromBuffer(data) || {
            mime: 'application/octet-stream',
            ext: '.bin'
        }
        filename = path.join(__filename, './src/' + new Date * 1 + '.' + type.ext)
        if (data && save) fs.promises.writeFile(filename, data)
        return {
            res,
            filename,
	    size: await getSizeMedia(data),
            ...type,
            data
        }

    }

    return SkyzeeBOT
}

startSkyzeeBOT()


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})