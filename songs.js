const express = require('express');
const Song = require('../models/Song');
const router = express.Router();

// Get all songs
router.get('/', async (req, res) => {
    try {
        const songs = await Song.find();
        res.json(songs);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Add a new song
router.post('/', async (req, res) => {
    const { title, artist, url } = req.body;
    const song = new Song({ title, artist, url });

    try {
        const newSong = await song.save();
        res.status(201).json(newSong);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

module.exports = router;
