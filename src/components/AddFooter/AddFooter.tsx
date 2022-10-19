import React, {useState} from 'react';
import s from './AddFooter.module.scss'
import textS from './SharedLogic/textS.json'
import textM from './SharedLogic/textM.json'


interface IfootA {
    id: number,
    textS: any,
    textM: string
}
interface IfootAProps {
    IfootAConfig: IfootA[]
}

{/* <div className={s.optionName}><p>Buy</p><button className={classOptionButton} onClick={handlerOpen}>{`>`}</button></div>
<div className={classOptionA}>
    <a href="" className={s.optionA}>Apartment in Dubai</a>
    <a href="" className={s.optionA}>House in Dubai</a>
    <a href="" className={s.optionA}>Apartments in Dubai</a>
    <a href="" className={s.optionA}>Loft in Dubai</a>
    <a href="" className={s.optionA}>Penthouse in Dubai</a>
    <a href="" className={s.optionA}>Villa in Dubai</a>
</div>
</div> */}

const FooterA: React.FC<IfootA> = ({
    textS, textM
}) => {
    const [isNormal, setIsNormal] = useState(false);

    const toggleIsNormal = () => {
        setIsNormal(current => !current);
    };
    return (
        <div className={s.classOptionA}>
            <div className={s.optionGroup}>
                <div className={s.optionName}>
                    <p>{textM}</p>
                    <button onClick={toggleIsNormal}>{`>`}</button>
                </div>
                <div className={s.optionAcontent}>
                    {isNormal ? textS : <></>}
                </div>
            </div>

            {/* {
                IfootAConfig.map((post) =>
                <div className={s.optionUp}>       
                <div className={s.optionName}>
                    <p>{post.textM}</p><button className={s.testB} onClick={toggleIsNormal}>{`>`}</button>
                </div>
                <div className={s.optionAcontent}>
                    {isNormal ?
                        post.textS.split(',').map((post) => 
                        <a href='' className={s.optionA}>{post}</a>) : <></>
                    }
                </div>
                </div>)
            } */}
        </div>
    )
}


const AddFooter: React.FC<IfootAProps> = (
    {IfootAConfig=[]}
) => {
    const {results: postsTextS} = textS;

    // const [isOpen, setisOpen] = useState(false);
    // const handlerOpen = () =>{setisOpen(!isOpen)}
    // const classOptionButton = isOpen ? s.testB : s.testOff;
    // const classOptionA = isOpen ? s.optionAcontentOn : s.optionAcontent;

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

                    <div className={s.option}>
                       
                       {
                        IfootAConfig.map((post) => 
                        <FooterA
                        key={post.id}
                        id={post.id}
                        textM={post.textM}
                        textS={post.textS.split(',').map((post) => <a>{post}</a>)}
                        />
                        )
                       }
  
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddFooter;




                     
                       
                       
                       
//                         {/* <div className={s.optionGroup}>
//                             <div className={s.optionName}><p>Buy</p><button className={classOptionButton} onClick={handlerOpen}>{`>`}</button></div>
//                             <div className={classOptionA}>
//                                 <a href="" className={s.optionA}>Apartment in Dubai</a>
//                                 <a href="" className={s.optionA}>House in Dubai</a>
//                                 <a href="" className={s.optionA}>Apartments in Dubai</a>
//                                 <a href="" className={s.optionA}>Loft in Dubai</a>
//                                 <a href="" className={s.optionA}>Penthouse in Dubai</a>
//                                 <a href="" className={s.optionA}>Villa in Dubai</a>
//                             </div>
//                         </div>

//                         <div className={s.optionGroup}>
//                             <div className={s.optionName}><p>Services</p><button className={classOptionButton} onClick={handlerOpen}>{`>`}</button></div>
//                             {isOpen && 
//                             <div className={s.optionAcontent}>
//                             <a href="" className={s.optionA}>Property management in Dubai, UAE</a>
//                             <a href="" className={s.optionA}>Sell ​​property in Dubai, UAE</a>
//                             <a href="" className={s.optionA}>Rent property in Dubai, UAE</a>
//                             <a href="" className={s.optionA}>Investments in Dubai, UAE</a>
//                             <a href="" className={s.optionA}>Real estate for cryptocurrency in Dubai</a>
//                             <a href="" className={s.optionA}>Moving to Dubai, UAE</a>
//                             </div>}
//                         </div> */}


//                         <div className={s.optionGroup}>
//                             <div className={s.optionName}>Information</div>
//                             {/* <a href="" className={s.footOptionsTextA}>Video</a>
//                             <a href="" className={s.footOptionsTextA}>Podcasts</a>
//                             <a href="" className={s.footOptionsTextA}>Laws</a>
//                             <a href="" className={s.footOptionsTextA}>Questions and answers</a>
//                             <a href="" className={s.footOptionsTextA}>Books</a>
//                             <a href="" className={s.footOptionsTextA}>Articles</a> */}
//                         </div>
//                         <div className={s.optionGroup}>
//                             <div className={s.optionName}>About company</div>
//                             {/* <a href="" className={s.footOptionsTextA}>Jobs </a>
//                             <a href="" className={s.footOptionsTextA}>Story</a>
//                             <a href="" className={s.footOptionsTextA}>Licenses</a>
//                             <a href="" className={s.footOptionsTextA}>Why are we</a>
//                             <a href="" className={s.footOptionsTextA}>Real estate agency</a> */}
//                         </div>
//                         <div className={s.optionGroup}>
//                             <div className={s.optionName}>Contact</div>
//                             {/* <a href="" className={s.footOptionsTextA}>964 Worthington Drive Dubai, UAE</a>
//                             <a href="" className={s.footOptionsTextA}>dubairealty@mail.com</a>
//                             <button className={s.button}>Book a consultation</button> */}
//                         </div>


// //