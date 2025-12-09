import mongoose from 'mongoose';
import bcrypt from 'bcrypt';


const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: { type: String, unique: true, required: true},
  password: {type: String, required: true }
});

UserSchema.methods.comparePassword = async function (passw) { 
    return await bcrypt.compare(passw, this.password); 
};

UserSchema.statics.findByUserName = function (username) {
  return this.findOne({ username: username });
};

UserSchema.pre('save', function(next) {
  const user = this;
  const saltRounds = 10;

  // Only hash the password if it has been modified (or is new)
  if (!user.isModified('password') && !user.isNew) {
    return next();
  }

  bcrypt.hash(user.password, saltRounds, (err, hash) => {
    if (err) {
      return next(err);
    }
    user.password = hash;
    next();
  });
});


export default mongoose.model('User', UserSchema);
