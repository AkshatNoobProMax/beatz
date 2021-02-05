module.exports = async (client) => {
  console.log(`[API] Logged in as ${client.user.username}`);
  await client.user.setActivity("help | made with love by lakshy", {
    type: "LISTENING"//can be LISTENING, WATCHING, PLAYING, STREAMING
  });
};
