import React from 'react'
import './ImageSlider.css'
import { Carousel } from 'react-bootstrap'

function ImageSlider() {
    return (
        <div className='slider'>
            <Carousel>
                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100"
                        src="https://imgs.search.brave.com/0hQCaaIM7GbEPfh8y2t_eec0l7XAn3tyYyRCZNWvrVY/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9s/aWJyYXJ5LXdpdGgt/Ym9va3NfMTA2My05/OC5qcGc_c2l6ZT02/MjYmZXh0PWpwZw"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img
                        className="d-block w-100"
                        src="https://imgs.search.brave.com/HUTBplM1kISM2iJd-H7Iu_35DLWrb5DQYi8PlLB-Joo/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9i/b29rLWxpYnJhcnkt/d2l0aC1vcGVuLXRl/eHRib29rXzExNTAt/NTkyMC5qcGc_c2l6/ZT02MjYmZXh0PWpw/Zw"
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://imgs.search.brave.com/lqWj5HYTGUaOjdetNRff_vS0yxB4ti_tGaIEvCtLf_4/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE1/MDE1MDMwNjkzNTYt/M2M2YjgyYTE3ZDg5/P3E9ODAmdz0xMDAw/JmF1dG89Zm9ybWF0/JmZpdD1jcm9wJml4/bGliPXJiLTQuMC4z/Jml4aWQ9TTN3eE1q/QTNmREI4TUh4elpX/RnlZMmg4TVRWOGZI/QjFZbXhwWXlVeU1H/eHBZbkpoY25sOFpX/NThNSHg4TUh4OGZE/QT0"
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default ImageSlider
