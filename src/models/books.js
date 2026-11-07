import { getDb } from '../database.js';

export async function getAllBooks() {
    const db = getDb();
    return await db.collection('books').find({}, { projection: { _id: 0 } }).toArray();
}