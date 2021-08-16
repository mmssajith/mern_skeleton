import mongoose from 'mongoose'
import { string } from 'prop-types'

const userSchema = new mongoose.Schema({
    name:{
        type: string,
        trim: true,
        required: 'Name is required'
    },
    email:{
        type: string,
        trim: true,
        unique: 'Email already exists',
        match: [/.+\@.+\..+/,'Please enter a valid Email'],
        required: 'Email is required'
    },
    created:{
        type: Date,
        default: Date.now
    },
    updated: Date,
    hashed_password:{
        type: string,
        required: "Password is required"
    },
    salt: string
})