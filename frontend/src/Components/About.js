import React from 'react'
import './About.css'

function About() {
    return (
        <div className='about-box'>
            <h2 className="about-title">About the Library</h2>
            <div className="about-data">
                <div className="about-img">
                    <img src="https://imgs.search.brave.com/EgN_mbwc1JmeUOWrkDTFfL512UeebdW6MoEbw9jmQd0/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9wbHVz/LnVuc3BsYXNoLmNv/bS9wcmVtaXVtX3Bo/b3RvLTE2ODE4NDMw/Njg3MzItMDU2NGYy/YjFkMGI0P3E9ODAm/dz0xMDAwJmF1dG89/Zm9ybWF0JmZpdD1j/cm9wJml4bGliPXJi/LTQuMC4zJml4aWQ9/TTN3eE1qQTNmREI4/TUh4elpXRnlZMmg4/TVROOGZIQjFZbXhw/WXlVeU1HeHBZbkpo/Y25sOFpXNThNSHg4/TUh4OGZEQT0" alt="" />
                </div>
                <div>
                    <p className="about-text">
                    Welcome to My Library
                    <br/>
                        Here we believe in the transformative power of knowledge and the joy of reading. The library is a haven for bibliophiles, students, researchers, and anyone passionate about exploring the vast world of literature. <br/>

                        Our mission is to foster a culture of learning, discovery, and imagination. We strive to provide a welcoming environment where individuals of all ages can engage with a diverse collection of books, periodicals, and digital resources. We are committed to promoting literacy, supporting education, and enriching the community through access to information and cultural enrichment. <br/>

                        Explore our extensive collection that spans across various genres, including fiction, non-fiction, science, history, art, and more. With a growing digital archive, we aim to cater to the diverse interests and academic needs of our patrons. Our collection is regularly updated to ensure that you have access to the latest literary works and educational resources.<br/>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default About
