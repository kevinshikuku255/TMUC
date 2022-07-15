import { gql } from 'apollo-server-express';

import PostSchema from './Cron';

const schema = gql`
type Query {
  _empty: String
}
 ${PostSchema}
`;
export default schema;