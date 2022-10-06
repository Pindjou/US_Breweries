import React from "react"

import NavBar from "../componenets/NavBar";
import Footer from "../componenets/Footer";

function Contact() {


    const mystyle = {
        width: "20%",
        height: "10PX",

    }

    const mytablestyle = {

        width: "15%",
        height: "10px",
    }




    return (
        <div>
            <NavBar/>
                        <h1>Contact Me 👨</h1>
            <table style={mytablestyle} >
                <tbody>
                
                    <tr style={{ height: "18px" }}>
                        <td style={mystyle}>
                            <div>
                                <div>Surname:</div>
                            </div>
                        </td>
                        <td style={mystyle}>
                            <div>
                                <div>Victorien</div>
                            </div>
                        </td>
                    </tr>
                    <tr style={{ height: "10px" }}>
                        <td style={mystyle}>
                            <div>
                                <div>Name:</div>
                            </div>
                        </td>
                        <td style={mystyle}>
                            <div>
                                <div>Pindjou</div>
                            </div>
                        </td>
                    </tr>
                    <tr style={{ height: "18px" }}>
                        <td style={mystyle}>
                            <div>
                                <div><a href="https://github.com/Pindjou">Profiles:</a></div>
                            </div>
                        </td>
                        <td style={mystyle}>
                            <p><a href="https://github.com/Pindjou">Github</a></p>
                            <p><a href="https://www.linkedin.com/in/victorien-pindjou-11386037/" target="_blank">linkedin</a></p>
                            <p><a href="https://www.xing.com/profile/Victorien_Pindjou/portfolio">xing</a></p>
                            <p>&nbsp;</p>
                            <p>&nbsp;</p>
                        </td>
                    </tr>

                </tbody>
            </table>




            <Footer/>





        </div>
    )
}

export default Contact