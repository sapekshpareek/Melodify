const express = require("express");
const passport = require("passport");
const router = express.Router();
const Song = require("../models/song");
const User = require("../models/user");

router.post(
  "/create",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    const { name, thumbnail, track } = req.body;
    if (!name || !thumbnail || !track) {
      return res.status(301).json({ err: "Insufficient Details!" });
    }
    const artist = await req.user._id;
    const songDetails = { name, thumbnail, track, artist };
    const createSong = await Song.create(songDetails);
    return res.status(200).json(createSong);
  }
);

router.get(
  "/get/mysongs",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    const currentUser = req.user;
    const songs = await Song.find({ artist: req.user._id }).populate("artist");
    return res.status(200).json({ data: songs });
  }
);

module.exports = router;
