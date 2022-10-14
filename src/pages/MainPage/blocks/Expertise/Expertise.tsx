import React from 'react';
import s from './Expertise.module.scss'
// @ts-ignore
import video from "../../../../video/vid.mp4"
// @ts-ignore
import poster from "../../../../img/VideoPoster.jpg"


const Expertise: React.FC = () => {
    return (
        <div className={s.expertise}>
            <div className="wrapper">
                <div className={s.expertiseContent}>
                    <p className={s.expertisePT}>Our expertise</p>
                    <h1 className={s.expertiseH1}>"The best apartment in Dubai" we will find your dream</h1>
                    <p className={s.expertisePB}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nibh massa, euismod ut libero id, blandit posuere augue. Morbi porta volutpat diam egestas ultrices. Phasellus tempus fringilla neque, nec viverra orci tristique vel. In efficitur vehicula magna, varius pellentesque nisl vehicula vel. Aenean vel sem ac elit commodo finibus in nec massa. Nulla facilisi. Nulla vestibulum venenatis sollicitudin. Etiam auctor mollis justo eu tincidunt. Aliquam varius varius tortor. Cras id venenatis sem. Quisque ut risus ex. Sed et tempor massa. Praesent ac eros hendrerit, congue justo ac, molestie urna. Fusce nec neque vitae dolor dapibus elementum. Maecenas nec orci quis sem condimentum dapibus varius a lorem. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                <div className={s.expertiseVideo}>

                <video width="100%" controls poster={poster}>
                    <source src={video} type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'/>
                </video>

                </div>
            </div>
        </div>
    );
};

export default Expertise;