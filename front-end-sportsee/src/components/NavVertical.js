/** 
   *Component that displays the vertical nav and profile information
   * 
   * 

 */ 




import yogaPosture from '../assets/yogaPosture.svg'
import head from '../assets/head.svg'
import natation from '../assets/natation.svg'
import velo from '../assets/velo.svg'
import charge from '../assets/charge.svg'
import { UserInfoProfil } from './UserInfoProfil'







export function NavVertical() {





        return(



           <div className="navUserInfoPosition">



                            <nav className="navVertical">


                                <div className="backrgroundIcon">
                                
                                    <img src={head} alt='yogaPosture' className="head"/>
                                    <img src={yogaPosture} alt='yogaPosture' className="yogaPosture"/>

                                </div>

                                <div className="backrgroundIcon">
                                
                                    <img src={head} alt='yogaPosture' className="headNatation"/>
                                    <img src={natation} alt='natation' className="natation"/>

                                </div>

                                <div className="backrgroundIcon">
                                
                                    <img src={velo} alt='vélo' className="velo"/>

                                </div>

                                <div className="backrgroundIcon">
                                
                                    <img src={charge} alt='charge' className="charge"/>

                                </div>

                                <span className="copyryght">Copiryght, SportSee 2020</span>

                            
                            </nav>

                            <div><UserInfoProfil/></div>


           </div>


        );




};