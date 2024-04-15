const express = require("express");
const passport = require("passport");
const router = express.Router();

router.post("/create", passport.authenticate("user"), async (req, res) => {
  const { name, thumbnail, track } = req.body;
  if (!name || !thumbnail || !track) {
    return res.status(301).json({ err: "Insufficient Details!" });
  }
  const artist = req.user_id;
  const songDetails = { name, thumbnail, track, artist };
  const createSong = await Song.create(songDetails);
  return res.status(200).json(createSong);
});

module.exports = router;
