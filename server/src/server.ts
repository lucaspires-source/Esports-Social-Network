import express from 'express'


const app = express()

app.get('/ads', (req:any, res:any) =>{
    return res.json([
        {id: 1, name: 'AD 1'},
        {id: 2, name: 'AD 2'},
        {id: 3, name: 'AD 3'},
        {id: 4, name: 'AD 4'},
        {id: 5, name: 'AD 5'},
    ])
})

app.listen(3333, () => { 
    console.log('Listening on http://localhost:3333')
})