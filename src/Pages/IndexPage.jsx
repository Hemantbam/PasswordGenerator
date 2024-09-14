import React from 'react'
import { useNavigate } from 'react-router-dom';
import './IndexPage.css'
function IndexPage() {
    const navigate = useNavigate()

    /**FUnction to handel the click event on the homepage */

    const handelClick = () => {
        navigate("./passwordGenerate")
    }
    return (
        <div className='headingContainer'>
            <img src="./2.png" alt="" />
            <div className="homepageHeading">
                <span className='homepageHeadingText'>Want to create a <br /> random <span className='textTwo'>password ?</span></span>
                <span className='generatePasswordNavigateBtn' onClick={handelClick}>Click Here
                </span>
            </div>

        </div>
    )
}

export default IndexPage
