import mongoose from 'mongoose';


/**
 * Cron schema that has references to User, Like and Comment schemas
 */
const detailtSchema = new mongoose.Schema(
  { 
    headline: String,
    message: String,
    link:     String,
    image:    String,
    images: String,
    timeStamp: Number
  }
);

/** Posts model */
const Details = mongoose.model('Details', detailtSchema);

export default Details;