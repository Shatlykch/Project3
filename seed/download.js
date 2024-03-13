import fetch from 'node-fetch';
import { promises as fsPromises } from 'fs'


fetch("https://api.nasa.gov/planetary/apod?api_key=AZISwsgcnUzw8xfl0pdrWoJioZtvq8IyBKr1blRm&start_date=2023-08-30&end_date=2023-09-20")
    .then(response => response.json())
    .then(data => { fsPromises.writeFile("./seed/apod.json", JSON.stringify(data))})
    .then(console.log('json created'))
    .catch( error => console.error( error ) )
    

