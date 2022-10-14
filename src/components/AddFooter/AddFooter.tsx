import React from 'react';
import s from './AddFooter.module.scss'



const AddFooter = () => {
    return (
        <div className={s.foot}>
            <div className="wrapper">
                <div className={s.footContent}>
                    <div className={s.footLogo}>
                        <div className={s.footLogoCont}>
                            <p className={s.footLogoB}>DubaiRealty</p>
                            <p className={s.footLogoS}>Real Estate</p>
                        </div>
                    </div>
                    <div className={s.footOptions}>
                        <div className={s.footOptionsText}>
                            <div className={s.footOptionsTextH1}>Buy</div>
                            <a href="" className={s.footOptionsTextA}>Apartment in Dubai</a>
                            <a href="" className={s.footOptionsTextA}>House in Dubai</a>
                            <a href="" className={s.footOptionsTextA}>Apartments in Dubai</a>
                            <a href="" className={s.footOptionsTextA}>Loft in Dubai</a>
                            <a href="" className={s.footOptionsTextA}>Penthouse in Dubai</a>
                            <a href="" className={s.footOptionsTextA}>Villa in Dubai</a>
                        </div>
                        <div className={s.footOptionsText}>
                            <div className={s.footOptionsTextH1}>Services</div>
                            <a href="" className={s.footOptionsTextA}>Property management in Dubai, UAE</a>
                            <a href="" className={s.footOptionsTextA}>Sell ​​property in Dubai, UAE</a>
                            <a href="" className={s.footOptionsTextA}>Rent property in Dubai, UAE</a>
                            <a href="" className={s.footOptionsTextA}>Investments in Dubai, UAE</a>
                            <a href="" className={s.footOptionsTextA}>Real estate for cryptocurrency in Dubai</a>
                            <a href="" className={s.footOptionsTextA}>Moving to Dubai, UAE</a>
                        </div>
                        <div className={s.footOptionsText}>
                            <div className={s.footOptionsTextH1}>Information</div>
                            <a href="" className={s.footOptionsTextA}>Video</a>
                            <a href="" className={s.footOptionsTextA}>Podcasts</a>
                            <a href="" className={s.footOptionsTextA}>Laws</a>
                            <a href="" className={s.footOptionsTextA}>Questions and answers</a>
                            <a href="" className={s.footOptionsTextA}>Books</a>
                            <a href="" className={s.footOptionsTextA}>Articles</a>
                        </div>
                        <div className={s.footOptionsText}>
                            <div className={s.footOptionsTextH1}>About company</div>
                            <a href="" className={s.footOptionsTextA}>Jobs </a>
                            <a href="" className={s.footOptionsTextA}>Story</a>
                            <a href="" className={s.footOptionsTextA}>Licenses</a>
                            <a href="" className={s.footOptionsTextA}>Why are we</a>
                            <a href="" className={s.footOptionsTextA}>Real estate agency</a>
                        </div>
                        <div className={s.footOptionsText}>
                            <div className={s.footOptionsTextH1}>Contact</div>
                            <a href="" className={s.footOptionsTextA}>964 Worthington Drive Dubai, UAE</a>
                            <a href="" className={s.footOptionsTextA}>dubairealty@mail.com</a>
                            <button className={s.button}>Book a consultation</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddFooter;