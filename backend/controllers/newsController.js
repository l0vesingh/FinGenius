import axios from "axios";

export const getnews = async (req, res) => {
    try{

        const response = await axios.get('https://finnhub.io/api/v1/news',{
            params:{
                category: 'general',
                token: process.env.FINNHUB_API_KEY,
            }
        })

        res.json(response.data);

    }catch(err){
        res.status(500).json({
            message: "Error fetching news",
            error: err.message
        })
    }
}
