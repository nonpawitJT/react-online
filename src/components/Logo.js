import React from 'react'

const Logo = () => {

    // const logoImage = "./logo192.png"
    const logoImage = {
        url: './logo192.png'
    }

    return (
        <div>
            <img src={logoImage.url} width="100" alt="Logo"/>
            {/* <img src={logoImage} width="100" alt="Logo"/> */}
        </div>
    )
}

export default Logo
