const express = require('express')
const user = require('../user.model');
const connection = require("../conexion")
const { body, param, validationResult } = require('express-validator');
var router = express.Router()
router.get('/user', [], (req, res) => {
 user.getAll(connection, (data => {
 res.json(data);
 }))
});

router.get('/user/:id', [
    param('id').not().isEmpty().isNumeric(),
   ], (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
    res.json({success:false,err:JSON.stringify(errors)})
    return
    }
    let id = req.params.id;
    user.getId(connection, id, (data => {
    res.json(data);
    }))
   });

   router.delete('/user', [
    body('idUser').not().isEmpty().isNumeric()
   ], (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
    res.json({success:false,err:JSON.stringify(errors)})
    return
    }
    let body = req.body;
    user.delete(connection, body, (data => {
    res.json(data);
    }))
   });

   router.put('/user', [
    body('name').not().isEmpty().isString(),
    body('lastname').not().isEmpty().isString(),
    body('contact').not().isEmpty().isString(),
    body('cellphone').not().isEmpty().isString(),
    body('idUser').not().isEmpty().isNumeric()
   ], (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
    res.json({success:false,err:JSON.stringify(errors)})
    return
    }
    let body = req.body;
    user.update(connection, body, (data => {
    res.json(data);
    }))
   });

router.post('/user', [
 body('name').not().isEmpty().isString(),
 body('lastname').not().isEmpty().isString(),
 body('contact').not().isEmpty().isString(),
 body('cellphone').not().isEmpty().isString()
], (req, res) => {
 const errors = validationResult(req);
 if (!errors.isEmpty()) {
 res.json({success:false,err:JSON.stringify(errors)})
 return
 }
 let body = req.body;
 user.create(connection, body, (data => {
 res.json(data);
 }))
});
module.exports = router;

