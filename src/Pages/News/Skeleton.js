import React from 'react'


/** Skeleton post */
function Skeleton() {
  return (
    <div className="SkeletonPost">

      <div className="SkeletonPostHeader">
          {/* <div className="SkeletonPostAvatar"/> */}
          <div className="skeletonPostDetails">
               <div/>
               <div/>
          </div>
      </div>

      <div className="SkeletonPostBody">
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
