import { SignInButton } from '../SignInButton';

import styles from './styles.module.scss';
import { ActiveLink } from '../ActiveLink/indext';

export function Header(){
    return(
        <header className={styles.headerContainer}>
            <div className={styles.headerContent}>
                <img src="/images/logo.svg" alt="ig.news" />
                <nav>
                    {/*ActiveLink para navegação de pagina e para traço de header*/ }
                    <ActiveLink activeClassName={styles.active} href="/">
                    <a >Home</a>
                    </ActiveLink>

                    <ActiveLink activeClassName={styles.active} href="/posts">
                    <a >Posts</a>
                    </ActiveLink>
                </nav>
                
                
                <SignInButton/>
            </div>
        </header>
    );
}