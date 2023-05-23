// routes/userRoutes.js

const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/users/get', userController.getUsers);
/**
 * @swagger
 * /users/get:
 *   get:
 *     parameters:
 *       - name: id
 *       - in: path
 *         description: User ID
 *         schema:
 *           type: string         
 *     responses:
 *       '200':
 *         description: OK
 *       '404':
 *         description: User not found
 */
router.post('/users/create', userController.createUser);
/**
 * @swagger
 * /users/create:
 *   post:
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: User ID
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: OK
 *       '404':
 *         description: User not found
 */
router.put('/users/update', userController.updateUser);
/**
 * @swagger
 * /users/update:
 *   put:
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: User ID
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: OK
 *       '404':
 *         description: User not found
 */
router.delete('/users/delete', userController.deleteUser);
/**
 * @swagger
 * /users/delete:
 *   delete:
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: User ID
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: OK
 *       '404':
 *         description: User not found
 */

module.exports = router;