import Book from "../models/BooksModels.js";
import User from "../models/UserModels.js";
import clean from "./helper/clean.js"

const createSeeder = async () => {
    await clean();
    const user = await User.create({
        name : "abah erick",
        email : "abah@gmail.com",
    })

    const book1 = await Book.create({
        name: "Buku Masak",
        page: 12,
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit, nobis, facilis.",
        UserId: user.dataValues.id,
    })

    const book2 = await Book.create({
        name: "Buku Ngoding",
        page: 20,
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit, nobis, facilis.",
        UserId: user.dataValues.id,
    })

    const findBookByUser = await Book.findAll({
        where: {
            UserId: user.dataValues.id,
        },  
        attributes: ["name", "page", "description", "UserId"],
        include: [
            {
                model: User,
                as: "User",
                required: true,
                attributes: ["id", "name", "email", ]
            }
        ]
    })

    return { user, findBookByUser }
}

const { user, findBookByUser : users } = await createSeeder();

console.log(user)
users.map((i)=>{
    console.log(i.dataValues)
})