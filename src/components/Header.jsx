import { LogoBox } from './LogoBox';

//texto vem de props

export function Header(){
    return(
        <nav className='header-nav'>
            <ul className='nav-items'>
                <ul className='logo-item'>
                    <li>
                        <LogoBox w={50}/>
                        <p className='logo-name logo-font'>Caetano Peruzzo</p>
                    </li>
                </ul>
                <ul className='sub-nav-items'>
                    <li>Projetos</li>
                    <li>Habilidades</li>
                    <li>Experiência</li>
                    <li>Contato</li>
                </ul>
            </ul>
        </nav>
    );


    
}