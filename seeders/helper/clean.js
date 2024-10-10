import Book from "../../models/BooksModels.js";
import User from "../../models/UserModels.js";

export default async function clean() {
    await User.destroy({
        where: {},
        force: true,
        cascade: true,
    });
    await Book.destroy({
        where: {},
        force: true,
        cascade: true,
    });
}