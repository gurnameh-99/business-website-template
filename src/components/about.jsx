import React from 'react';
import { card } from '../assets'
import styles, { layout } from '../style'

const About = () => {
    return (
        <section id='about' className={layout.section}>

            <div className={`${layout.sectionImg} flex-col pr-8 ml-0`}>
                <img
                    src={card}
                    alt='card'
                    className='w-[100%] h-[100%]'
                />
            </div>
            <div className={layout.sectionInfo}>
                <div className={layout.sectionInfo}>
                    <h2 className={styles.heading2}>About Us.</h2>
                    <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
                    At Vinssiarh, we're passionate about making air travel accessible and enjoyable for everyone. With years of expertise in the travel industry, our dedicated team strives to offer seamless flight booking experiences. We leverage advanced technology and deep industry insights to bring you a broad selection of flights at competitive prices, ensuring that every journey you plan with us is not just a trip, but a gateway to unforgettable experiences. Choose Vinsiera, where your next adventure begins!
                    </p>
                </div>
            </div>
        </section>
    );
};

export default About;