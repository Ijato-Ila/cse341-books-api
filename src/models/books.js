import { getDb } from '../database.js';

export async function getAllBooks() {
    const db = getDb();
    return await db.collection('books')
        .find({}, { projection: { _id: 0 } })
        .toArray();
}

export async function getBookById(bookId) {
    const db = getDb();
    return await db.collection('books')
        .findOne({ id: bookId }, { projection: { _id: 0 } });
}