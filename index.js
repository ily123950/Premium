export default {
  async fetch(request) {
    const webhook = "https://discord.com/api/webhooks/1397128927222169690/RMNYuy4W6sY9jhQX6t7EJRhI1fpAI3iNIV88PnRToi7LKKm-drsTeiLQ1O8ZgJAfOl-J";

    try {
      const body = await request.text(); // получаем тело запроса
      const json = JSON.parse(body); // парсим JSON

      const response = await fetch(webhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(json), // передаём embed как есть
      });

      if (!response.ok) {
        return new Response("Failed to send", { status: 500 });
      }

      return new Response("Sent to Discord!");
    } catch (err) {
      return new Response("Invalid JSON: " + err.message, { status: 400 });
    }
  },
};
