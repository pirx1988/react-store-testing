import React from 'react'
import './styles.scss';
import Logo from '../../assets/graphics/logo.png'
interface headerProps {

}
const Header = (props: headerProps) => {
    return (
            <header data-test="headerComponent">
                <div className = "wrap">
                    <div className="logo">
                        <img data-test="logoIMG" src = {Logo} alt="Logo"/>

                    </div>
                </div>
            </header>
    )
}
export default Header;