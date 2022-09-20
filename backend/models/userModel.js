const mongoose = require('mongoose')

const Schema = mongoose.Schema

const userSchema = Schema(
  {
    name: {
      type: String,
      required: [true, 'Please add a name'],
    },
    email: {
      type: String,
      required: [true, 'Please add an email'],
      unique: true,
    },
    password: {
      type: String,
      required: [true, 'Please add a password'],
    },
    entries: {
      type: Number,
      default: 0
    }
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model('User', userSchema)