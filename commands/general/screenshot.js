const ssWeb = async(client, m, text, ssweb, sendd) => {

try {

 if (!text) return sendd(`provide a link. . 
`)



let imageUrl = `https://aemt.me/sstab?url=${text}`

await sendd("wait a moment")


await client.sendMessage(m.chat, { image: { url: imageUrl}, caption: `! Screenshot by Saske𓃵𖤍🔥³`}, { quoted: m}) 
               


} catch (error) {

m.reply("I cannot send a screenshot of that website");

}

                
}

export default ssWeb;
