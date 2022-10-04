import React from 'react';
import  first from '../../img/facebook.svg';
import  second from '../../img/instagram.svg';
import  third from '../../img/in.svg';
import  fofth from '../../img/twitter.svg';
import  fifth from '../../img/youtube.svg';

interface Icontacts {
    className: string,
}
const ContactsIcons: React.FC<Icontacts> = ({className}) => {
    return (
        <div className={className}>
            <a href=""><img src={first} alt="" /></a>
            <a href=""><img src={second} alt="" /></a>
            <a href=""><img src={third} alt="" /></a>
            <a href=""><img src={fofth} alt="" /></a>
            <a href=""><img src={fifth} alt="" /></a>
      </div>
    );
};

export default ContactsIcons;