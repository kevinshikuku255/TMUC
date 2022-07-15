import { gql } from 'apollo-server-express';

/**
 * Post schema
 */
const PostSchema = gql`
  # --------------------Model Objects-------------------------------------
  type Post {
    headline: String
    image: String
    link: String
    createdAt: String
  }
  type Detail {
    headline: String
    message: String
    image: String
    images: String
    link: String
    timeStamp: String
  }

  type Link {
    link: String
  }

  # ------------------Queries---------------------------------------
  extend type Query {

    # Gets all posts
    getPosts: [Post]

    # Gets links
    getLinks: [Link]

    # Gets details
    getDetails: [Detail]

  }


`;
export default PostSchema;