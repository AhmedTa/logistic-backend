import mongoose from 'mongoose';

interface IUser {
    name: String,
    email: String,
    password: String,
    avatar?: String,
    date: Date
}

interface userModelInterface extends mongoose.Model<any>{
    build(attr: IUser): any
}

const userSchema = new mongoose.Schema({
    name: {
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
    },
    avatar: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    }
});

userSchema.statics.build = (attr: IUser) => {
    return new User(attr);
}

const User = mongoose.model<any, userModelInterface>('User', userSchema);

export { User };