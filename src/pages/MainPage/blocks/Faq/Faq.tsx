import React, {useState} from 'react';
import s from './Faq.module.scss'


interface IfaqCard {
    id: number,
    text: string
}

const FaqCard: React.FC<IfaqCard> = ({
    text
}) => {
    const [isNormal, setIsNormal] = useState(false);

    const toggleIsNormal = () => {
        setIsNormal(current => !current);
    };

    return (
        <div className={s.faqCartsItem}>
             <div className={s.faqCartsItemMain}>
             <p>{text}</p>
             <button onClick={toggleIsNormal}>{`>`}</button>
             </div>
             {isNormal ? <p className={s.faqCartsItemInherit}>Sed in sem pellentesque, eleifend erat vitae, tincidunt turpis. Pellentesque augue elit, rutrum sit amet commodo vel, porta quis purus. Nullam faucibus, odio eu bibendum auctor, eros dolor aliquet purus, sit amet pellentesque neque est id tortor. In egestas, erat a dapibus dapibus, mi augue ornare lorem, nec pretium ligula purus nec tellus. Aenean a scelerisque nisi. Nullam pretium fermentum nunc, feugiat placerat urna rutrum eget. Nullam mattis justo consequat risus. Donec imperdiet enim id efficitur pharetra. Nam sollicitudin at est eget auctor. Ut sed ante quis nulla tincidunt auctor. Quisque accumsan pretium tincidunt. Etiam viverra ultrices est vitae suscipit. Pellentesque elementum purus non nisl pharetra consequat. Nunc in venenatis orci.</p> : <></>}
        </div>
    )
}

interface IfaqCardProps {
    cardFaqConfig: IfaqCard[],
}

const Faq: React.FC<IfaqCardProps> = ({cardFaqConfig=[]}) => {
    return (
        <div className={s.faq}>
                <div className={s.faqContent}>
                    <h1 className={s.faqH1}>FAQ</h1>
                    <div className={s.faqCarts}>
                        {
                            cardFaqConfig.map((posts) => 
                            <FaqCard
                            key={posts.id}
                            id={posts.id}
                            text={posts.text}
                            />)
                        }
                    </div>
                </div>
        </div>
    );
};

export default Faq;