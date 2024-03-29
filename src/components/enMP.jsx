import { Link } from "react-router-dom"
import BotEnglish from "./botEnglish"
import ToSpanish from "./toSpanish"
import form from "../img/form.png"
import giff from "../img/gifSeeker.png"
import twitter from "../img/twitter.png"
import library from "../img/library.png"

const MyProjects = () => {
    const link = "/es/misproyectos"

    return (
        <div>
            <div><ToSpanish go={link} /></div>
            <div className="menu">
                <div><Link className="link" to='/en'>About me</Link></div>
                <div><Link className="link prime" to='/en/myproyects'>My projects</Link></div>
                <div><Link className="link" to='/en/contact'>Contact</Link></div>
            </div>
            <div className="information">
                <div className="title">My Projects</div>
                <div className="text">
                    <div className="row space">
                        <div className="col-sm-6 mb-3 mb-sm-0">
                            <div className="card">
                                <div className="card-body roleCard1Eng">
                                    <img src={giff} class="card-img-top" />
                                    <h5 className="card-title">Gif seeker</h5>
                                    <p className="card-text">This web let you search gifs. Have a control of number of gifs for page and include pagination.</p>
                                    <div className="btncenter engGif">
                                        <a href="https://github.com/arnaubassas/Gifs" target="_blank" className="btn btn-primary">Github code</a>
                                        <a href="https://arnaubassas.github.io/Gifs/" target="_blank" className="btn btn-primary">Demo</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="card">
                                <div className="card-body roleCard1Eng">
                                    <img src={form} class="card-img-top" />
                                    <h5 className="card-title">Form</h5>
                                    <p className="card-text">Form to Sign in/Sing up with React. Combination of material UI and React Hook Form.</p>
                                    <div className="btncenter">
                                        <a href="https://github.com/arnaubassas/form" target="_blank" className="btn btn-primary">Github code</a>
                                        <a href="https://arnaubassas.github.io/form/#/" target="_blank" className="btn btn-primary">Demo</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-6 mb-3 mb-sm-0">
                            <div className="card">
                                <div className="card-body">
                                    <img src={twitter} class="card-img-top" />
                                    <h5 className="card-title">Twitter copy</h5>
                                    <p className="card-text">Twitter copy made with React. Without css libraries to practice styles.
                                        Using react router v6 and some hooks more from different libraries.
                                    </p>
                                    <p className="card-text"> The objective was the front-end part so I use a simple server. In the future, I will try to upgrade this part to include all the twitter services that require a user account.
                                    </p>
                                    <div className="btncenter">
                                        <a href="https://github.com/arnaubassas/twitter" target="_blank" className="btn btn-primary">Github code</a>
                                        <a href="https://arnau-app.onrender.com/home" target="_blank" className="btn btn-primary">Demo</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 mb-3 mb-sm-0">
                            <div className="card">
                                <div className="card-body roleCard2Eng">
                                    <img src={library} class="card-img-top" />
                                    <h5 className="card-title">Library web</h5>
                                    <p className="card-text">Website created to complete the junior test challenge by Midudev from the following link: <a href='https://github.com/midudev/pruebas-tecnicas/blob/main/pruebas/01-reading-list/README.md' target="blank">prueba técnica</a>.
                                    </p>
                                    <p className="card-text"> Objective: We are a multinational book publishing label. We want to provide our audience with a way to view our catalog and save the books that interest them in a reading list.</p>
                                    <div className="btncenter botonSpaceEng">
                                        <a href="https://github.com/arnaubassas/library" target="_blank" className="btn btn-primary">Github code</a>
                                        <a href="https://arnaubassas.github.io/library/" target="_blank" className="btn btn-primary">Demo</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bot">
                <BotEnglish />
            </div>
        </div>
    )

}
export default MyProjects