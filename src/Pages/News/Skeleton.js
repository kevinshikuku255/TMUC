import React from 'react';
import { ColorizeTwoTone} from '@material-ui/icons';


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
          <div className="NewsPin"><ColorizeTwoTone/></div>
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
