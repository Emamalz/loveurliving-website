export default async function handler(req, res) {
    try {
      const apiKey = process.env.GOOGLE_PLACES_API_KEY;  // ✅ Loaded from .env.local
      const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=reviews,rating,user_ratings_total&key=${apiKey}`;
  
      const response = await fetch(url);
      const data = await response.json();
  
      if (!data.result) {
        return res.status(400).json({ error: "Invalid Place ID or no data returned." });
      }
  
      res.status(200).json({
        rating: data.result.rating,
        totalReviews: data.result.user_ratings_total,
        reviews: data.result.reviews,
      });
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch reviews." });
    }
  }
  