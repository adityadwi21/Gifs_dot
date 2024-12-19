export default async function handler(req, res) {
  const { query } = req;
  const apiKey = process.env.NEXT_PUBLIC_GIPHY_API_KEY;
  const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${query}&limit=5`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "Error fetching data" });
  }
}
