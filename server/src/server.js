"use strict";
exports.__esModule = true;
var express_1 = require("express");
var app = (0, express_1["default"])();
app.get('/ads', function (req, res) {
    return res.json([
        { id: 1, name: 'AD 1' },
        { id: 2, name: 'AD 2' },
        { id: 3, name: 'AD 3' },
        { id: 4, name: 'AD 4' },
        { id: 5, name: 'AD 5' },
    ]);
});
app.listen(3333, function () {
    console.log('Listening on http://localhost:3333');
});
