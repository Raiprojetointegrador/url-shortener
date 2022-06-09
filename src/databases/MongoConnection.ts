import mongoose from 'mongoose';
import 'dotenv/config';

export class MongoConnection {
    public async connect(): Promise<void> {
        try{
            await mongoose.connect(`${process.env.MONGO_URL}/meteor`);
            console.log('Connected to MongoDB');
        } catch (err) {
            console.log(err.message);
            process.exit(1);
        }
    }
}