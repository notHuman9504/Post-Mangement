
import mongoose from 'mongoose';

const connection = {
    isConnected: false
};

async function dbConnect() {
  if (connection.isConnected) {
    return;
  }

  let db = await mongoose.connect('mongodb+srv://jaiminkhunt:Mukesh2422@cluster0.x3y9vkg.mongodb.net/Flex',{useNewUrlParser:true,useUnifiedTopology:true});

  connection.isConnected = true;
}

export default dbConnect;