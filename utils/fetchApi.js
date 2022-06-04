import axios from 'axios'

export const baseUrl = 'https://bayut.p.rapidapi.com'

export const fetchApi = async (url) => {
    const {data} = await axios.get((url), {
        
        headers: {
            'x-rapidapi-host': 'bayut.p.rapidapi.com',
            'x-rapidapi-key': 'c421f0c785mshc879b5231180a6dp1d2e45jsn70ae171973af',
        }

    })
    console.log(data)

    return data
  
}