import mongoose from 'mongoose'

const connectDB = (url : string) => {
  return mongoose.connect(url, {
    useCreateIndex: true,
    useFindAndModify: false,
  })
}

module.exports = connectDB
