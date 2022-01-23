import trainerData from '../../data/trainer-data.json';

export default (req, res) => { 
    res.statusCode = 200

    return {
        trainerData
    }
}
