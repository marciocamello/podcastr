import React from 'react'

import styles from "./styles.module.scss";

export function Player() {

    return (
        <div className={styles.playerContainer}>
            <header>
                <img src="/assets/playing.svg" alt="Playing now" />
                <strong>Playing now</strong>
            </header>

            <div className={styles.emptyPlayer}>
                <strong>Choose a podcast to listen</strong>
            </div>

            <footer className={styles.empty}>
                <div className={styles.progress}>
                    <span>00:00</span>
                    <div className={styles.slider} >
                        <div className={styles.emptySlider} />
                    </div>
                    <span>00:00</span>
                </div>


                <div className={styles.buttons}>
                    <button type='button'>
                        <img src="/assets/shuffle.svg" alt="Shuffle" />
                    </button>
                    <button type='button'>
                        <img src="/assets/play-previous.svg" alt="Play Previous" />
                    </button>
                    <button type='button' className={styles.playButton}>
                        <img src="/assets/play.svg" alt="Play" />
                    </button>
                    <button type='button'>
                        <img src="/assets/play-next.svg" alt="Play Next" />
                    </button>
                    <button type='button'>
                        <img src="/assets/repeat.svg" alt="Repeat" />
                    </button>
                </div>
            </footer>
        </div>
    )
}
