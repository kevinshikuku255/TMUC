import { gql } from 'apollo-server-express';

import PostSchema from './Cron';
import UserSchema from "./User";

const schema = gql`
  type Query {
    _empty: String
  }
  type Mutation {
    _empty: String
  }
  ${PostSchema}
  ${UserSchema}
`;
export default schema;
