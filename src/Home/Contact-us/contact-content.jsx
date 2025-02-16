import React from "react";
// import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import Faq_content from "./Faq-content";
const Content = () => {
    function getItem(label, icon, children, type) {
        return {
            icon,
            children,
            label,
            type,
        };
    }
    const items = [
        getItem('Will I receive the same product that I see in the picture?', '', [
            getItem(<Faq_content p1="Consectetur cras scelerisque dis nec mi vestibulum ullamcorper turpis enim natoque tempus a malesuada suspendisse iaculis adipiscing himenaeos tincidunt.Tellus pharetra dis nostra urna a scelerisque id parturient ullamcorper ullamcorper class ad consectetur tristique et." p2="Hendrerit mollis facilisi odio a montes scelerisque a scelerisque justo a praesent conubia aenean mi tempor." />),
        ]),
        getItem('Where can I view my sales receipt?', '', [
            getItem(<Faq_content p1="A vel dui a conubia vestibulum class varius vel nunc a gravida ut maecenas quisque a proin condimentum sagittis class at faucibus primis parturient dolor scelerisque himenaeos." p2="A et ullamcorper vestibulum netus a mauris ac consectetur libero volutpat congue congue turpis a consectetur adipiscing sit.Suspendisse leo fringilla a congue tempus nisi conubia vestibulum a in posuere accumsan." />),
        ]),
        getItem('How can I return an item?', '', [
            getItem(<Faq_content p1="Sit rhoncus aptent dis scelerisque penatibus a dis tempor accumsan suspendisse mollis a et odio ullamcorper magnis ullamcorper cum ullamcorper duis nulla egestas massa." p2="Vitae amet nostra est leo dignissim justo sodales et ac a conubia bibendum duis ad justo suspendisse a a tellus cubilia vestibulum a dictumst a duis risus.Sociosqu curae consequat nisl litora a eros est consectetur nulla rhoncus a a id felis praesent.Tempus dui integer a cursus id fames parturient." />),
        ]),
        getItem('Will you restock items indicated as “out of stock?”', '', [
            getItem(<Faq_content p1="Scelerisque parturient sagittis nisi in aliquam dui scelerisque non consectetur aptent hac adipiscing ullamcorper pulvinar sit vestibulum purus facilisi hendrerit mus nisl massa ut parturient consectetur cum justo fames torquent." p2="Ac curae aliquet vivamus aptent duis congue urna venenatis ridiculus faucibus tincidunt a lorem rutrum nullam potenti adipiscing.Adipiscing." />),
        ]),
        getItem('Where can I ship my order?', '', [
            getItem(<Faq_content p1="Ut bibendum a adipiscing purus massa a facilisi congue parturient condimentum urna donec per adipiscing cursus nisl nam tristique parturient id." p2="Aliquam quam at et in ipsum at venenatis a eget dignissim aliquam tincidunt ultrices lacus ad consectetur imperdiet sem suspendisse ante a dapibus potenti.Eu parturient parturient magnis tempus molestie augue quam vulputate hac facilisis est nisl pretium a cursus." />),
        ]),
    ];
    const onClick = (e) => {
        console.log('click ', e);
    };
    return (
        <>
            <div className="contact-content-main">
                <div className="container">
                    <div className="content-main-inner">
                        <div className="block-left">
                            <div className="title">
                                <div className="small-title">INFORMATION QUESTIONS</div>
                                <div className="main-title">FREQUENTLY ASKED QUESTIONS</div>
                            </div>
                            <div className="faqs">
                                <Menu
                                    onClick={onClick}
                                    mode="inline"
                                    items={items}
                                />
                            </div>
                        </div>
                        <div className="block-right">
                            <div className="title">
                                <div className="small-title">INFORMATION ABOUT US</div>
                                <div className="main-title">CONTACT US FOR ANY QUESTIONS</div>
                            </div>
                            <div className="info">
                                <form method="post">
                                    <div className="item">
                                        <div className="item-1">
                                            <label htmlFor="name">Your Name</label>
                                            <input type="text" />
                                        </div>
                                        <div className="item-1">
                                            <label htmlFor="name">Your Email</label>
                                            <input type="email" />
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="item-1">
                                            <label htmlFor="name">Phone Number</label>
                                            <input type="text" />
                                        </div>
                                        <div className="item-1">
                                            <label htmlFor="name">Company</label>
                                            <input type="email" />
                                        </div>
                                    </div>
                                    <div className="item-2">
                                        <label>Your Message</label>
                                        <textarea cols="40" rows="10" aria-invalid="false" name="your-message"></textarea>
                                    </div>
                                    <div className="ask">
                                        <input className="ask-btn" type="submit" value="ASK A QUESTION"/>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Content;