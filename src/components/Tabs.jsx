import React from 'react';
import { useState } from 'react';
import styles from "./style.module.css"

import toad from "../assets/toad.jpg"
import pen from "../assets/pen.png"
import teacup from "../assets/teacup.png"
// import keyboard from "../assets/keyboard.png"

function Tabs() {

    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (number) => {
        setToggleState(number);
    }

    return(
        <div className='Tabs'>
            <div className={styles.page1}>
                <div className={toggleState === 1 ? styles.activeContent : styles.content}>
                    <h1 className={styles.header}> About Me </h1>
                    <p>My favorite song is County Toads!</p>
                    <img className = {styles.toad} src={toad} alt="profile"></img>
                </div>
                <div className={toggleState === 2 ? styles.activeContent : styles.content}>
                    <h1 className={styles.header}> Experience </h1>
                    <p>Worked in Mushroom Kingdom</p>
                </div>
                <div className={toggleState === 3 ? styles.activeContent : styles.content}>
                    <h1 className={styles.header}> Projects </h1>
                    <p>I did a project...</p>
                </div>  
                <div className={toggleState === 4 ? styles.activeContent : styles.content}>
                    <h1 className={styles.header}> Skills </h1>
                    <p>Toad</p>
                </div>  
            </div>
            <div className={styles.page2}>
                <div className={toggleState === 1 ? styles.activeContent : styles.content}>
                        <h1 className={styles.header}> Education </h1>
                        <p>I'm slightly educated</p>
                    </div>
                </div>  
            <div className={toggleState === 1 ? styles.aboutTabActive : styles.aboutTab}>
                <h3 className={styles.tabText} onClick={() => toggleTab(1)}> About Me </h3>
            </div>
            <div className={toggleState === 2 ? styles.expTabActive : styles.expTab}>
                <h3 className={styles.tabText} onClick={() => toggleTab(2)}> Experience </h3>
            </div>
            <div className={toggleState === 3 ? styles.projTabActive : styles.projTab}>
            <h3 className={styles.tabText} onClick={() => toggleTab(3)}> Projects </h3>
            </div>
            <div className={toggleState === 4 ? styles.skillsTabActive : styles.skillsTab}>
            <h3 className={styles.tabText} onClick={() => toggleTab(4)}> Skills </h3>
            </div>

            {/* <img className={styles.keyboard} src={keyboard} alt="keyboard"/> */}
            
            <img className={styles.pen} src={pen} alt="pen"/>
            <img className={styles.teacup} src={teacup} alt="pen"/>
            
        </div>
    )
}

export default Tabs;