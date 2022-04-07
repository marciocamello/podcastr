import React from 'react'
import { format } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR';

import styles from "./styles.module.scss";

export function Header() {
    const currentDate = format(new Date(), "EEEEEE, d MMMM", {
        locale: ptBR
    });

    return (
        <header className={styles.headerContainer}>
            <img src="/assets/logo.svg" alt="Podcastr" />

            <p>The best to you listen, ever</p>
            <span>{currentDate}</span>
        </header>
    )
}
