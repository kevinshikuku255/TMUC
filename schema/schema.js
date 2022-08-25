import { gql } from 'apollo-server-express';

import PostSchema from './Cron';
import StudentSchema from "./Student";

const schema = gql`
  type Query {
    _empty: String
  }
  type Mutation {
    _empty: String
  }
  ${PostSchema}
  ${StudentSchema}
`;
export default schema;
