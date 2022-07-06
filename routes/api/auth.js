var express = require("express");
var router = express.Router();
const UserController = require("../../controller/UserController");

/**
 * @swagger
 * /auth/register:
 *   post:
 *     tags:
 *        - Auth
 *     summary: Register
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 description: email.
 *                 example: Abc123@gmail.com
 *               password:
 *                 type: number
 *                 description: password.
 *                 example: 123456
 *     responses:
 *       201:
 *         description: Resgister.
 */

router.post("/register", UserController.register);

/**
 * @swagger
 * /auth/login:
 *   post:
 *     tags:
 *        - Auth
 *     summary: Login
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 description: email.
 *                 example: Abc123@gmail.com
 *               password:
 *                 type: number
 *                 description: password.
 *                 example: 123456
 *     responses:
 *       201:
 *         description: Resgister.
 */

router.post("/login", UserController.login);

module.exports = router;
