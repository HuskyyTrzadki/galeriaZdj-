import axios from 'axios';

export default axios.create({
    baseURL:'https://api.unsplash.com', 
    headers: {
        Authorization: 'Client-ID 8orFCI1ApQg2Nz4x8kIEnwXJlTEPEA4d-96fnckFM-U'
    }
})