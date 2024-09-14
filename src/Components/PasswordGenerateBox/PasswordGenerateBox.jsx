import React from 'react'
import { useCallback, useEffect, useState } from 'react'
import './PasswordGenerate.css'
import PasswordHistory from '../GeneratedPasswordHistory/PasswordHistory'

function PasswordGenerateBox() {

    const [length, setLength] = useState(10)
    const [number, setNumber] = useState(false)
    const [character, setCharacter] = useState(false)
    const [password, setPassword] = useState("")
    const [passwordHistory, setPasswordHistory] = useState([])
    const [passwordStrength, setPasswordStrength] = useState("")
    const [passwordStrengthStatusColor, setpasswordStrengthStatusColor] = useState("")

    //----------------------------------------------------------------------------------------------------

    /**Function to generate a random password using different states */

    const passwordGenerator = useCallback(() => {
        let pass = ""
        let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
        if (number == true) {
            str += "0123456789"
        }
        if (character == true) {
            str += "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
        }

        for (let i = 1; i <= length; i++) {
            let char = Math.floor(Math.random() * str.length)
            pass += str.charAt(char)
        }
        setPassword(pass)
        setPasswordHistory((prevHistory) => [pass, ...prevHistory])
        passwordStrengthChecker()
    }, [length, number, character, setPassword])

    //------------------------------------------------------------------------------------------------

    /**Function to handel the copy of the generated password  */

    const handleCopy = () => {
        navigator.clipboard.writeText(password)
            .then(() => {
                alert('Password copied to clipboard!');
            })
            .catch(err => {
                console.error('Failed to copy password: ', err);
            });
    };

    //-----------------------------------------------------------------------------------

    /**Function to handel the regeneration of the password */

    const handelRegenerate = () => {

        passwordGenerator()
        passwordStrengthChecker();
    }

    //---------------------------------------------------------------------------------------

    /**Function to check the strength of the generated password */

    const passwordStrengthChecker = () => {
        let message = ""
        let colorCode = ""
        if (number == false || character == false || length < 8) {
            message = "Strength: Weak";
            colorCode = "Red"
        } if (length >= 8 && number == true || character == true) {
            message = "Strength: Medium"
            colorCode = "Yellow"
        } if (length >= 12 && number == true && character == true) {
            message = "Strength: Strong"
            colorCode = "Green"
        }
        setPasswordStrength(message)
        setpasswordStrengthStatusColor(colorCode)
    }

    //---------------------------------------------------------------------------------------

    useEffect(() => {
        passwordGenerator()
    }, [length, number, character, passwordGenerator])
    console.log(password)

    //---------------------------------------------------------------------------------------
    return (
        <>
            <div className='boxContainer'>
                <h1>Password Generator</h1>
                <div className="container">

                    <div className="passwordViewer">
                        <label htmlFor="password">Password</label> <input type="text" value={password} readOnly className='passwordField' />
                        <button className="BtnDesign" onClick={handleCopy}>Copy</button>
                        <button className="BtnDesign" onClick={handelRegenerate}>Regenerate</button>
                    </div>
                    <div className="inputs">
                        <label htmlFor="">length:{length}</label>
                        <input type="range" min={5} max={20} value={length}
                            onChange={(e) => { setLength(e.target.value) }} />

                        <input type="checkbox" name="" id="number" checked={number} onChange={() => setNumber((prev) => !prev)} /><label htmlFor="numbers">Number</label>
                        <input type="checkbox" name="" id="character" checked={character} onChange={() => setCharacter((prev) => !prev)} /><label htmlFor="characters">Character</label>

                    </div>
                    <div className="passwordStrength">
                        <div className='colorBox' style={{ backgroundColor: passwordStrengthStatusColor }}></div>
                        <span >{passwordStrength}</span>
                    </div>
                </div>
                <div className="PasswordHistoryComponent">
                    <PasswordHistory pHistory={passwordHistory} />
                </div>


            </div>
        </>
    )
}

export default PasswordGenerateBox
