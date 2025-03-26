import React from 'react'

const Logo = ({children, className}) => {
    return (
        <div className='flex items-center gap-3'>
            <img src="./logo/cwt/cwt-logo-patern06-grbg-wl.svg" alt="" className={className} />
            {children}
        </div>
    )
}

export default Logo