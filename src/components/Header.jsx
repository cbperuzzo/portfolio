import { LogoBox } from './LogoBox';
import { scrollToRef } from '../aux/scrollToRef';

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
                    <li
                        onClick={ () => scrollToRef(props.refs.about)}
                    >{props.about}</li>
                    <li 
                        onClick={ () => scrollToRef(props.refs.experience)}
                    >{props.experience}</li>
                    <li
                        onClick={ () => scrollToRef(props.refs.projects)}
                    >{props.projects}</li>
                    <li
                        onClick={ () => scrollToRef(props.refs.contact)}
                    >{props.contact}</li>
                </ul>
            </ul>
        </nav>
    );


    
}