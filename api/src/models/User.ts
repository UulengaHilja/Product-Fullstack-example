import mongoose, { Document } from "mongoose";
import bcrypt from 'bcrypt';

export type UserDocument = Document & {
  name: string,
  email: string;
  password: string;
  phone: number,
  address: string
};

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,    
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true    
  },
  address: {
    type: String,
    required: true    
  }
}, {collection: 'user'});

UserSchema.pre('save', function (next) {
  if (this.isModified('password')) {
    bcrypt.hash(this.password, 8, (err:Error | undefined, hash:string) => {
      if (err) return next(err);

      this.password = hash;
      next();
    });
  }else{
    next();
  }
});

UserSchema.methods.comparePassword = async function (password:string) {
  if (!password) throw new Error('Password is mission, can not compare!');

  try {
    const result = await bcrypt.compare(password, this.password);
    return result;
  } catch (error:Error|any) {
    console.log('Error while comparing password!', error.message);
  }
};

export default mongoose.model<UserDocument>("User", UserSchema);