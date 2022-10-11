import React from 'react';
import s from './Faq.module.scss'

const Faq: React.FC = () => {
    return (
        <div className={s.faq}>
                <div className={s.faqContent}>
                    <h1 className={s.faqH1}>FAQ</h1>
                    <div className={s.faqCarts}>
                        <div className={s.faqCartsItem}>
                            <p>The largest and oldest Quotations Page on the Web with about 30 categories</p>
                        </div>
                        <div className={s.faqCartsItem}>
                            <p>The largest and oldest Quotations Page on the Web with about 30 categories</p>
                        </div>
                    </div>
                </div>
        </div>
    );
};

export default Faq;