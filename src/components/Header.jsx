import { LogoBox } from './LogoBox';

//texto vem de props

export function Header(props){
    return(
        <nav className='header-nav'>
            <ul className='nav-items'>
                <ul className='logo-item'>
                    <li>
                        <LogoBox w={50}/>
                        <p className='logo-name logo-font'>Caetano Peruzzo</p>
                    </li>
                </ul>
                <ul className='sub-nav-items fat-medium-text-font'>
                    <li>{props.experience}</li>
                    <li>{props.projects}</li>
                    <li>{props.about}</li>
                    <li>{props.contact}</li>
                </ul>
            </ul>
        </nav>
    );


    
}