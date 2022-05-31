import axios from '../core/axios.js';

export async function getCoordinates(street) {
    const {data} = await axios.post('/street/coordinates/', {
        street
    });
    if(!data.locations){
        return 'Нет совпадений';
    }
    return data.locations;
}


export async function getDuration(from, to) {
    try {
        console.log(from, to)
        const {data} = await axios.post('/street/duration/', {
            from, to
        });
        console.log(data)
        if(!data){
            return 'Нет совпадений';
        }
        return data;
    } catch(err) {
        console.log(err)
    }
}