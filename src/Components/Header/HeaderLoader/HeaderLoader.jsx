import React from 'react'

import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const HeaderLoader = () => {
    return (
        <a className="locatin">
           
            <div>
            <Skeleton
                inline
                count={1}
                width={150}
            />
            </div>

        </a>
    )
}

export default HeaderLoader
