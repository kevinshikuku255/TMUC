import React from 'react';
import { timeAgo } from  "../../Utils/date";
import "./news.scss";


/**Reply component */
function Reply({reply}) {
  return (
    <div className="Reply">
      <p>{reply.body}</p>
      <i>{timeAgo(reply.createdAt)}</i>
    </div>
  )
}

export default Reply
