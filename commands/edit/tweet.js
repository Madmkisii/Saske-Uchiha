const tweetEDIT = async(client,text, m, pushname) => {


if (!text) return m.reply("provide some text for the tweet");

const displayname = pushname;
const username = m.sender.split('@')[0];
const avatar = await client.profilePictureUrl(m.sender, 'image').catch(_ => 'https://telegra.ph/file/844ad6c0c9db3b78e5901.jpg');
const replies = "246";
const retweets = "125";
const theme = "light";

const imageurl = `https://some-random-api.com/canvas/misc/tweet?displayname=${encodeURIComponent(displayname)}&username=${encodeURIComponent(username)}&avatar=${encodeURIComponent(avatar)}&comment=${encodeURIComponent(text)}&replies=${encodeURIComponent(replies)}&retweets=${encodeURIComponent(retweets)}&theme=${encodeURIComponent(theme)}`;



await client.sendMessage(m.chat, { image: { url: imageurl}, caption: `Converted by Saske 𓃵`}, { quoted: m}) 

}

export default tweetEDIT;
