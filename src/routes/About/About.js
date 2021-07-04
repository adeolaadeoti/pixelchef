import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import style from './About.module.scss';

const About = () => {
    return (
        <>
            <Header first={"We dare what"} second={"others don’t"} imgName="about"/>
            <main>
                <section className={style.about__work}>
                    <div className={style.about__text}>
                        <p>We’re a creative team passioned about design, focused on building amazing products and brands while turning them into award winning projects. We can build things from scratch or simply make them look better.</p>
                    </div>
                    <div className={style.about__workWrapper}>
                        <div to='/work' className={style.box}>
                            <h5>Meet our people</h5>
                            <div><img src={require('../../assets/png/kehinde.png')} alt="kehinde"/> <span>Big wheel</span> </div>
                            <h3 className={style.about__h3}>Kehinde Adeyefa -<span>Founder</span> </h3>
                        </div>
                        <div to='/work' className={style.box}>
                            <div><img src={require('../../assets/png/muyiwa.png')} alt="muyiwa"/> <span>Oshea</span> </div>
                            <h3 className={style.about__h3}>Muyiwa Babatunde  –<br/><span>Partner, Product Design</span> </h3>
                        </div>
                        <div to='/work' className={style.box}>
                            <div><img src={require('../../assets/png/mayowa.png')} alt="uLesson"/> <span>Big man</span> </div>
                            <h3 className={style.about__h3}>Mayowa Otedola  – <br/><span>Partner, Design</span> </h3>
                        </div>
                        <div to='/work' className={style.box}>
                            <div><img src={require('../../assets/png/adeola.png')} alt="uLesson"/> <span>Gegeara</span> </div>
                            <h3 className={style.about__h3}>Adeola Adeoti  – <br/><span>Partner, Development</span> </h3>
                        </div>
                    </div>
                </section>
                <section className={style.about__expertise}>
                    <h5>Our expertise</h5>
                    <p>We have been working on a variety of projects and across different industries across disciplines, making our work an appropriate, versatile and functional response to the unique needs of our clients. Our capabilities cover the following areas;</p>
                    <ul>
                        <div>
                            <li>Digital Product Design</li>
                            <li>Digital Strategy</li>
                            <li>User Experience</li>
                            <li>User Interface</li>
                            <li>Branding</li>
                            <li>Web Development</li>
                        </div>
                        <div>
                            <li>App Development</li>
                            <li>Creative Development</li>
                            <li>Motion & Illustration</li>
                            <li>Video Production</li>
                            <li>Content Creation</li>
                        </div>
                    </ul>
                </section>
            </main>
            <Footer/>
        </>
    );
}

export default About;
