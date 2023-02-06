import axios from 'axios';

export const getPeople = async () => {
    let people = [];
    try {
        const url = 'https://api.json-generator.com/templates/-xdNcNKYtTFG/data';
        let response = await axios.get(url, {
            headers: {
                'Authorization': 'Bearer vza4lbzrzy3cyhg4nbzyjhmqzjlqr2p3qibd9986'
            }
        });
        if (response && response.data) {
            people = response.data;
        } else {
            console.log(`Failed to retrieve people data from Moovup API`);
        }
    } catch (err) {
        console.log(err);
    }
    return people;
}
