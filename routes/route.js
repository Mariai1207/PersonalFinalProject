const {Router}= require('express');
const Kitten= require('../models/modelKitten')

const router = Router()

router.get('/', async (req, res)=>{
    const kittens = await Kitten.find()
    res.send(kittens)
})

router.post('/', async(req, res)=>{
    const {name}= req.body
    console.log(name)
    const newCat = new Kitten({ name: name})
    await newCat.save();
    res.send(name)
})
module.exports = router;