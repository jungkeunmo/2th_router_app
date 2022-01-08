import { hover } from "@testing-library/user-event/dist/hover";
import React from "react";
import styled from "styled-components";

const Footerback = styled.section`
    width: 100%;
    height: 500px;
    background-color: #222;

    display: flex;
    flex-direction: column;

    padding: 70px 60px 40px; 
`;

const FooterBox1 = styled.div`
    width: 100%;
    height: 80%;
    

    border-bottom: 1px solid #999;

    display: flex;
    flex-direction: row;
`;

const FooterBox2 = styled.div`
    width: 100%;
    height: 20%;
    

    display: flex;
    flex-direction: row;
`;

const FootersubBox1 = styled.div`
    width: 50%;
    height: 100%;
`;

const FootersubBox2 = styled.div`
    width: 25%;
    height: 100%;
`;

const FootersubBox3 = styled.div`
    width: 25%;
    height: 100%;
`;

const Footerh2 = styled.h2`
   color: #fff;
   margin: 5px 18px;
   font-family: 'PT Serif', serif;
   font-size: 25px;
`;

const Footertext = styled.p`
   color: #999;
   font-size: 18px;
   margin: 18px;
   font-family: 'Rubik', sans-serif;
`;

const Footerp = styled.p`
   color: #999;
   font-size: 18px;
   margin: 0px 18px;
   font-family: 'Rubik', sans-serif;

   &:hover {
       color: #994f8f;
       font-size: 19px;
   }
`;

class Footer extends React.Component {
    render() {
        return <footer>
            <Footerback>
                <FooterBox1>
                    <FootersubBox1>
                        <Footerh2>about</Footerh2>
                        <Footertext>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam quisquam inventore veniam dicta nostrum vero nobis sunt eligendi ducimus, mollitia harum molestiae laudantium doloremque ea, neque quis perspiciatis dolores dignissimos?</Footertext>
                    </FootersubBox1>
                    <FootersubBox2>
                        <Footerh2>login</Footerh2>
                        <Footerp>sign in</Footerp>
                        <Footerp>sign up</Footerp>
                    </FootersubBox2>
                    <FootersubBox3>
                        <Footerh2>board</Footerh2>
                        <Footerp>free</Footerp>
                        <Footerp>notice</Footerp>
                        <Footerp>question</Footerp>
                        <Footerp>event</Footerp>
                        <Footerp>terms of use</Footerp>
                        <Footerp>help</Footerp>
                    </FootersubBox3>
                </FooterBox1>    
                <FooterBox2>
                    <Footertext>Copyright © 2022 All Rights Reserved by Scanfcode.</Footertext>
                </FooterBox2>
            </Footerback>
        </footer>
    };
};

export default Footer;