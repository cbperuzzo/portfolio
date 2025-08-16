import { LogoBox } from '../components/LogoBox';
import { useContent, useRefs } from '../context/AppContext';
import { scrollToRef } from '../utils/scrollToRef';

export function Header(){

    const content = useContent().header
    const refs = useRefs()

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
                        onClick={ () => scrollToRef(refs.about)}
                    >{content.about}</li>
                    <li 
                        onClick={ () => scrollToRef(refs.experience)}
                    >{content.experience}</li>
                    <li
                        onClick={ () => scrollToRef(refs.projects)}
                    >{content.projects}</li>
                    <li
                        onClick={ () => scrollToRef(refs.contact)}
                    >{content.contact}</li>
                </ul>
            </ul>
        </nav>
    );


    
}