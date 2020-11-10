const express = require('express');
const fs = require('fs');

const app = express();

app.use(express.static(__dirname + '/public'));
app.use(express.json());

// app.get('/', (req, res) => res.send('Hello, Vasya!'));

// app.get('/about', (req, res) => res.send('Nothing new about us...'));

const translateRouter = express.Router();

translateRouter.get('/:str', (req, res) => {
    // console.log(req.params.str);
    // console.log(JSON.parse(data));
    console.log(111111);
// app.get('/api/v1/goods/:id/', (req, res) => {
//     console.log(111111);
// });
    // fs.readFile('./public/catalogData.json', (err, data) => {
    //     if (!err) {
            
            // try {
            //     const goods = JSON.parse(data);
            //     console.log(req.params.id, goods);
            //     good = goods.find((good) => good.id_product == req.params.id)
            //     console.log(good);
            // } catch (e) {
            //     res.status(500).json({ error: 'error parsing datafile'});
            // }

    //     } else {
    //         res.status(500).json({ error: 'no data file!'});
    //     }
    // })
});

translateRouter.post('/', (req, res) => {
    console.log(req.body);
    // const newGood = req.body;
    // fs.readFile('./public/catalogData.json', (err, data) => {
    //     const goods = JSON.parse(data);

    //     if (goods.find((good) => good.id_product == newGood.id_product)) {
    //         res.status("400").json({ error: "already have good with id "+newGood.id_product });
    //     } else {
    //         goods.push(newGood);
    //         fs.writeFileSync('./public/catalogData.json', JSON.stringify(goods, null, '\t'));
    //         res.json({ result: "added good ok", id: newGood.id_product });
    //     }
    // });
})

app.use('/api/v1/translate', translateRouter);

app.listen(3000, () => console.log('Listening on port 3000'));