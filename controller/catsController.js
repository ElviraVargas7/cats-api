const catModel = require("../models/catModel")

const getCats = async (req, res) => {
    try {
        const cats = await catModel.find()
        res.json(cats)
    } catch (e) {
        console.log(e)
        res.status(500)
    }
}

const createCat = async (req, res) => {
    let { name } = req.body

    console.log("name",name)

    const isEmpty = !name
    if (isEmpty) res.status(400).json({ msg: "Name missing" })

    try {
        let cat = new catModel({name})

        await cat.save()
        res.status(201).send(cat)
    } catch (e) {
        console.log(e)
        res.status(500)
    }
}

const updateCat = async (req, res) => {
    const { name } = req.body
    const catid = req.params.id

    const isEmpty = !name || !catid
    if (isEmpty) res.status(400).json({ msg: "Empty values" })

    try {
        const databaseCat = await catModel.findById(catid)

        if(!databaseCat) res.status(404).json({ msg: "Cat not found" })

        databaseCat.name = name

        const updatedCat = await catModel.findOneAndUpdate({ _id: catid}, databaseCat, { new: true })
        res.json(updatedCat)
    } catch (e) {
        console.log(e)
        res.status(500)
    }
}

const deleteCat = async (req, res) => {
    const catid = req.params.id

    try {
        const deletedCat = await catModel.findOneAndDelete({ _id: catid })
        res.status(201).json(deletedCat)
    } catch (e) {
        console.log(e)
        res.status(500)
    }
}

const getCat = async (req, res) => {
    const catid = req.params.id

    const isEmpty = !catid
    if(isEmpty) res.status(400).json({ msg: "No cat id" })

    try {
        const cat = await catModel.findById(catid)
        res.json(cat)
    } catch (e) {
        console.log(e)
        res.status(500)
    }
}


module.exports = { getCats, createCat, updateCat, deleteCat, getCat }