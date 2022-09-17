"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.get('/ads', (req, res) => {
    return res.json([
        { id: 1, name: 'AD 1' },
        { id: 2, name: 'AD 2' },
        { id: 3, name: 'AD 3' },
        { id: 4, name: 'AD 4' },
        { id: 5, name: 'AD 5' },
    ]);
});
app.listen(3333, () => {
    console.log('Listening on http://localhost:3333');
});
