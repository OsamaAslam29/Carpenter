import React from 'react'
import Skeleton from 'react-loading-skeleton'




const ServiceLoder = () => {
    return (
        <div className="card">
            <div className="logo"><Skeleton circle={true} height={100} width={100} /></div>
            <div className="heading">
                <Skeleton
                    count={2}
                    width={200}
                />
            </div>
            <div className="para">
                <Skeleton
                    count={2}
                    width={200}
                /></div>
        </div>
    )
}

export default ServiceLoder
