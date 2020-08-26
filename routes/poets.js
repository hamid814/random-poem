const express = require('express');
const { default: Axios } = require('axios');

const router = express.Router();

router.get('/khayyam', async (req, res, next) => {
  const beyt = await Axios.get('http://c.ganjoor.net/beyt-json.php?p=3');

  res.render('poem', {
    m1: beyt.data.m1,
    m2: beyt.data.m2,
    poet: beyt.data.poet,
  });
});

router.get('/saadi', async (req, res, next) => {
  const beyt = await Axios.get('http://c.ganjoor.net/beyt-json.php?p=7');

  res.render('poem', {
    m1: beyt.data.m1,
    m2: beyt.data.m2,
    poet: beyt.data.poet,
  });
});

router.get('/hafez', async (req, res, next) => {
  const beyt = await Axios.get('http://c.ganjoor.net/beyt-json.php?p=2');

  res.render('poem', {
    m1: beyt.data.m1,
    m2: beyt.data.m2,
    poet: beyt.data.poet,
  });
});

router.get('/saeb', async (req, res, next) => {
  const beyt = await Axios.get('http://c.ganjoor.net/beyt-json.php?p=22');

  res.render('poem', {
    m1: beyt.data.m1,
    m2: beyt.data.m2,
    poet: beyt.data.poet,
  });
});

module.exports = router;
