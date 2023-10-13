const express = require('express');
const instance = require('../axiosConfig');
const router = express.Router();

function paginateArray(arr, pageNo, pageSize) {
    const startIndex = (pageNo - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    return arr.slice(startIndex, endIndex);
}

router.get("/", async (req, res) => {
    const page = req.query.page || 1;
    const response = await instance.get('/users');
    const filterRes = paginateArray(response.data, page, 5);
    res.json({ data: filterRes, page: page, totalPages: 2 });
});

module.exports = router;
