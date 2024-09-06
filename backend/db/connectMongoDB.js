import mongoose from "mongoose";

const connectMongoDB = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGO_URI);
    console.log(`mongodb connectected ${JSON.parse(connection)}`);
  } catch (error) {
    console.log(`Error: ${error.message}`);
    ProcessingInstruction.exit(1);
  }
};

export default connectMongoDB;
