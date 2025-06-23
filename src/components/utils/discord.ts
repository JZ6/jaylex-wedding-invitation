export const notificationDiscordWebhookUrl =
  'https://discord.com/api/webhooks/1386776690679742484/dqCu-b9FJWixgIQzD9TXiOEB3t0-rPJ3YRki6AqQPOPhtwokCsQJKhNSASu-_OY2d1So';

export function sendDiscordMessage(
  content: string,
  discordWebhookUrl: string = notificationDiscordWebhookUrl,
  username = 'bot',
  embeds = {},
): void {
  void fetch(discordWebhookUrl, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username,
      content,
      embeds,
    }),
  });
}
