/** 
   * component that displays the nav of our application
   * 
   * 

 */ 


import logo from '../assets/logo.svg'







export function Header () {





    return(


        <header>

                <img src={logo} alt='logo'  />

                <nav className='navHorizontal'>

                    <li>Accueil</li>
                    <li>Profil</li>
                    <li>Réglage</li>
                    <li>Communauté</li>

                </nav>

               

        </header>


    )


}