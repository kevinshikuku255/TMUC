import mongoose from 'mongoose';


/**
 * Cron schema that has references to User, Like and Comment schemas
 */
const newstSchema = new mongoose.Schema(
  { 
    headline: String,
    message: String,
    message:  String,
    title:    String,
    link:     String,
    image:    String,
  }
);

/** Posts model */
const News = mongoose.model('News', newstSchema);

export default News;