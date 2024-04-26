import axios from "axios"

const searchImages = async(term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID F39X9W1GLFKcDPpT48tLmy83aDQkd0v_tbbyDL30LNM'
        },
        params: {
            query: term,
        }
    })
    // console.log(response.data.results)
    return await response.data.results
}

export default searchImages