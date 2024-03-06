import mongoose from 'mongoose';
import connection from '../db/connection.js';
import data from "../seed/apod.json" assert { type: 'json' }
import Apod from '../models/APOD.js';


let apodData = data.map( item => {
    const apod = {}

    apod.date = item.date
    apod.explanation = item.explanation
    apod.url = item.url
    apod.title = item.title
    return apod
} );



Apod.deleteMany( {} )
    .then( () => Apod.create( apodData ) )
    .then( () => console.log( 'done! apod data created!' ) )
    .then( () => mongoose.disconnect() )
    .catch( error => console.error( 'ERROR!', error ) );