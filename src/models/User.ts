import mongoose, {Schema, model } from 'mongoose'

interface Iuser extends mongoose.Document {
    username: string,
    email: string,
    password: string
}

const userSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
}, {
    versionKey: false,
    timestamps: true
})

export default model<Iuser>('User', userSchema)