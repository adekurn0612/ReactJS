import { faFacebook, faInstagram, faLinkedin, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { styled } from 'styled-components'


const Fotterstyled=styled.footer`
.social, .contactInfo{
    background-color:#F7F7F7;
    color:#222222;
    padding:1 rem 1 rem 0;
    text-align:center;
}
.socil h3{
    border-bottom:solid 1px #b6e8ff;
    font-weight:400;
    padding-bottom:25 rem;
}
.socialIcons{
    fonst-size:200%;
    padding:1 rem0;
}
.socialIcons a{
    color:#223055;
    padding:0 .5 rem;
}
.socialIcons a:hover{
    color:#ffc107;
}
.contactInfo{
    padding-top:0;
}
.contactInfo article{
 border-bottom:solid 1px #b6e8ff;
}
.contactInfo h4{
    font-weight:400;
}
.contactInfo li{
    font-weight:300;
    list-style-type:none;
}
.copy{
    font-size:70%;
    font-weight:300;
    padding-top:1 rem;
}
`

const Fotter = (props) => {
  return (
    <Fotterstyled>
            <section className='social' id='contact'>
                <article>
                    <h3>Social Media</h3>
                    <div className='socialIcons'>
                        <a href='https://www.facebook.com/'><FontAwesomeIcon icon={faFacebook}/></a>
                        <a href='https://www.twitter.com/'><FontAwesomeIcon icon={faTwitter}/></a>
                        <a href='https://www.instagram.com/akalerick'><FontAwesomeIcon icon={faInstagram}/></a>
                        <a href='https://www.linkedin.com/in/adekurniawan0612/'><FontAwesomeIcon icon={faLinkedin}/></a>
                        <a href='https://www.youtube.com/'><FontAwesomeIcon icon={faYoutube}/></a> 
                    </div>
                </article>
            </section>
            <section className='contactInfo'>
                <article>
                    <h4>Cntact Info</h4>
                    <ul>
                        <a href="https:wa.me/6281388968727">phone:Ade Kurniawan</a>
                        <li>email :adekurniawan0612@gmail.com</li>
                        <li>address :jalan mana aja</li>
                    </ul>
                    <p className='copy'>ade kurniawan &copy;2023</p>
                </article>

            </section>
    </Fotterstyled>
  )
}

export default Fotter
