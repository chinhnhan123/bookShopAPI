var express = require("express");
var router = express.Router();
const BookController = require("../../controller/BookController");
/**
 * @swagger
 * /api/books:
 *   get:
 *     tags:
 *        - Book
 *     summary: Retrieve a list of books
 *     description: Retrieve a list of Books. Can be used to populate a list of fake books when prototyping or testing an API.
 *     responses:
 *       200:
 *         description: A list of books.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   _id:
 *                     type: string
 *                     description: The user Book.
 *                     example: 0
 *                   title:
 *                     type: string
 *                     description: title book.
 *                     example: Leanne Graham
 *                   price:
 *                     type: number
 *                     example: 199999
 */

router.get("/books", BookController.getAllBooks);

/**
 * @swagger
 * /api/book/{id}:
 *   get:
 *     tags:
 *        - Book
 *     summary: Retrieve a  book
 *     description: Retrieve a  Books.
 *     responses:
 *       200:
 *         description: A list of books.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   _id:
 *                     type: string
 *                     description: The user Book.
 *                     example: 0
 *                   title:
 *                     type: string
 *                     description: title book.
 *                     example: Leanne Graham
 *                   price:
 *                     type: number
 *                     example: 199999
 */

router.get("/book/:id", BookController.getBook);

/**
 * @swagger
 * /api/books:
 *   post:
 *     tags:
 *        - Book
 *     summary: Create book
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Numeric ID of the book to update.
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 description: Name of book.
 *                 example: demo
 *               price:
 *                 type: number
 *                 description: Price of book.
 *                 example: 111119
 *     responses:
 *       201:
 *         description: Create books.
 */

router.post("/books", BookController.createBook);

/**
 * @swagger
 * /api/deleteBook/{Id}:
 *  delete:
 *      tags:
 *         - Book
 *      summary: Delete book
 *      description: Delete book
 *      parameters:
 *        - in: path
 *          name: bookId
 *          schema:
 *              type: string
 *          required: true
 *          description: string id of Book to delete
 *      responses:
 *          200:
 *              description: Book that was deleted
 */

router.delete("/deleteBook/:id", BookController.deleteBook);

/**
 * @swagger
 * /api/updateBook/{id}:
 *   put:
 *     tags:
 *        - Book
 *     summary: Update book
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Numeric ID of the user to retrieve.
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 description: Name of book.
 *                 example: demo
 *               price:
 *                 type: number
 *                 description: Price of book.
 *                 example: 111119
 *     responses:
 *       201:
 *         description: Update books.
 */

router.put("/updateBook/:id", BookController.updateBook);

module.exports = router;
