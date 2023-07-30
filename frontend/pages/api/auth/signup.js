import connectMongo from '../../../../backend/connection'
import User from "../../../../backend/models/User"
import hash from "bcryptjs"

export default async function handler(req, res) {
    connectMongo().catch(error => res.json({error: "Connection Failed...!"}))

    // only post method is accepted
    if(req.method === "POST") {
        if(!req.body) return res.status(404).json({error: "Invalid form data"})
        const { email, password } = req.body

        // check duplicate users
        const checkexisting = await User.findOne({email})
        if(checkexisting) return res.status(422).json({message: "User Already Exists...!"})

        // hash password
        User.create({ email, password: await hash(password, 12), function(err, data) {
            if(err) return res.status(404).json({err})
            res.status(201).json({ status: true, user: data })
        } })
         

    } else {
        res.status(500).json({message: "HTTP method not valid."})
    }
}