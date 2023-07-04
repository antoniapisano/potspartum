
const addBooking = async (req, res) => {
    res.json ({mssg: "booking has been added"})
}

const getBooking = async (req, res) => {
    res.json ({mssg: "here is your booking"})
}

const removeBooking = async (req, res) => {
    res.json ({mssg: "your booking has been deleted"})
}

const editBooking = async (req, res) => {
    res.json ({mssg: "changes to your booking have been saved"})
}

module.exports = { addBooking, getBooking, removeBooking, editBooking };
