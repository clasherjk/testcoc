export default async function handler(req, res) {
  const { tag } = req.query;

  if (!tag) {
    return res.status(400).json({ error: "Missing player tag" });
  }

  const response = await fetch(`https://cocproxy.royaleapi.dev/v1/players/%23${tag}`, {
    headers: {
      Authorization: `Bearer ${process.env.COC_API_TOKEN}`
    }
  });

  if (!response.ok) {
    return res.status(response.status).json({ error: "Failed to fetch player data" });
  }

  const data = await response.json();
  res.status(200).json({ name: data.name });
    }
