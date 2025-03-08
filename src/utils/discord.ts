// "https://discord.com/api/webhooks/1307121341308211280/w35MWYbQUY534_Uy1xUMB3N_4gBOeFJNLr2i2fKxGosebAmZeRSWgG9FqgrOI-OpW6g-";
export function sendDiscordMsg(
  discordWebhookUrl: string,
  content: string,
  username = "bot",
  embeds = {}
) {
  fetch(discordWebhookUrl, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username,
      content,
      embeds,
    }),
  });
}
