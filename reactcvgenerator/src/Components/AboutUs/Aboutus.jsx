import React from 'react'
import Header from '../common.elements/Header'
import '../css/style.css'
import site from '../../images/site.png'
import guide from '../../images/guide.png'
import Footer from '../Home/components_homepage/footer'
function Aboutus() {
    return (
        <>
            <Header/>
            <section className="row mt-3">
                <div className="col-12">
                    <p className="text-center aboutus-text">Biz kimik?</p>
                    <p className="alttext">CVmaker ilə siz bir neçə saniyədə öz cv-zi yarada bilərsiniz.</p>
                </div>
                <div className=" container" style={{backgroundColor:'red'}}>
                    <p className="alttext" style={{color:'black'}}>Rahat interface və müxtəlif dizaynlarla öz CV-ni hazır et.</p>
                    <img src={site} className="site" alt="site" />
                </div>
                <div className="  container mt-4"  style={{backgroundColor:'blue'}}>
                    <p className="alttext" style={{color:'black'}}>CV bələdçisi ilə ,beynəlxalq çapda CV hazırla</p>
                    <img src={guide} className="pt-2 site" alt="site" />
                </div>
                
            </section>
            <div className="row ourteam">
                <div className="col-12">
                    <p className="text-center aboutus-text">CVmaker Komandası</p>
                </div>
                <div className="d-flex justify-content-center col-12">
                    <section className="col-4">
                        <div className="member col-12">
                            <img src={'https://images.generated.photos/4BjLOHFGIE-75xNbUkV3wy9yy4Sn7hircrd6oie0AuE/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LmNvbmQvNzNhNDVj/ZWYtOGQyNS00NDBl/LTgwZWQtZWFhYThh/YjUwYjA4LmpwZw.jpg'} alt="" />
                            
                        </div>
                        <div className="names">
                            <div>Adilə Babayeva</div><br />
                        </div>
                        <div className="property col-12">
                            <p><a href="https://github.com/adilababayeva13/">Adilə Github</a></p>
                        </div>
                        <div className="property col-12">
                            <p><a href="https://www.linkedin.com/in/adila-b">Adilə Linkedin</a></p>
                        </div>
                        
                    </section>
                    <section className="col-4">
                    <div className="member col-12">
                        <img src={'https://images.generated.photos/CETGR5mCr2FlfBMyctCAjoAOGhfTNEyhQXG7-moMhks/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LmNvbmQvZTZkYThh/N2QtNjE0Ni00NzEw/LThhODQtNWE5MTA0/ZTNkZThhLmpwZw.jpg'} alt="" />
                    </div>
                    <div className="names">
                            <div>Emil Hacızadə</div><br />
                        </div>
                        <div className="property col-12">
                            <p><a href="https://github.com/emilhajizade/">Emil Github</a></p>
                        </div>
                        <div className="property col-12">
                            <p><a href="https://www.linkedin.com/in/emil-hajizade">Emil Linkedin</a></p>
                        </div>
                    </section>
                    <section className="col-4">
                    <div className="member col-12">
                        <img src={"https://images.generated.photos/AELS4u_Fm2tNs97Hrlztdy8493D_VKPs8OXZ_rACUtk/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LmNvbmQvMGJhMzkz/ZTEtNWVhZC00YmY2/LWIxZTUtYzY5MDJl/MTUwZjdiLmpwZw.jpg"} alt="" />
                    </div>
                    <div className="names">
                            <div>Cəmil Ağazadə</div><br />
                        </div>
                        <div className="property col-12">
                            <p><a href="https://github.com/JAghazada/">Cəmil Github</a></p>
                        </div>
                        <div className="property col-12">
                            <p><a href="https://www.linkedin.com/in/aghazada-jamil-2ba020207/">Cəmil Linkedin</a></p>
                        </div>
                    </section>
                    <hr />
                </div>
                <Footer/>

            </div>
        </>
    )
}

export default Aboutus
