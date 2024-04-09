 const imageANN = async(client, m, text, qmsg, mime, UploadFileUgu, TelegraPh) => {


   if (!/image/.test(mime)) return m.reply("Hello hacker 👋, quote an image, probably a clear image of yourself or a person.");  




let fdr = await client.downloadAndSaveMediaMessage(qmsg);


                    const fta = await TelegraPh(fdr);




const imagelink = `https://aemt.me/hacker?link=${fta}`;

await client.sendMessage(m.chat, { image: { url: imagelink}, caption: "Converted by Saske 𓃵"}, { quoted: m});

}

export default imageANN;
