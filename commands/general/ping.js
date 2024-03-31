const Ping = async(client, m, dreadedspeed, sendReact) => {

await sendReact("✈️");

const Dreaded = await client.sendMessage(m.chat, { text: 'Checking my speed. . .' }, {quoted: m});

await client.relayMessage(m.chat, {
      protocolMessage: {
        key: Dreaded.key,
        type: 14,
        editedMessage: {
          conversation: `𓅓𝐏𝐨𝐧𝐠⋙${dreadedspeed.toFixed(4)}𝐌𝐬`
        }
      }
    }, {});
     await sendReact("⚡");

}

export default Ping;