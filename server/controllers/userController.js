
const registerUser = async (req, res) => {
    res.json ({mssg: "register user"})
}

const loginUser = async (req, res) => {
    res.json ({mssg: "login user"})
}

const getMe = async (req, res) => {
    res.json ({mssg: "get user"})
}

module.exports = { registerUser, loginUser, getMe };