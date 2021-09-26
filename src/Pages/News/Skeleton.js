import React from 'react';
import { AttachFileTwoTone} from '@material-ui/icons';


/** Skeleton post */
function Skeleton({warning}) {
  return (
    <div className="SkeletonPost">
      <div className="NetError">{warning}</div>
      <div className="SkeletonPostHeader">
          <div className="skeletonPostDetails">
               <div/>
               <div/>
          </div>
          <div className="NewsPin"><AttachFileTwoTone/></div>
      </div>

      <div className="SkeletonPostBody">
           <div/>
           <div/>
           <div/>
           <div/>
           <div/>
           <div/>
           <div/>
           <div/>
      </div>
      <div className="SkeletonPostActions"/>
    </div>
  )
}

export default Skeleton
