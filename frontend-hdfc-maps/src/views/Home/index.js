import React, { useEffect, useState } from 'react'
import MapsPage from './components/MapsPage'
import { useGeolocated } from "react-geolocated";
import { useDispatch } from 'react-redux';
import { setLocation } from '../../redux/slices/userSlice';
import styles from './index.module.css';
import VistingBank from './components/VisitingBank';

const Home = () => {

    const [tabsUi, setTabsUi] = useState(true)

    return (
        <>
            <div style={{ display: "flex" }}>
                <button
                    className={tabsUi ? `${styles.active_tab} ${styles.tab_style}` : `${styles.inactive_tab} ${styles.tab_style}`}
                    onClick={() => setTabsUi(true)}>TAB 1</button>
                <button
                    className={tabsUi ? `${styles.inactive_tab} ${styles.tab_style}` : `${styles.active_tab} ${styles.tab_style}`}
                    onClick={() => setTabsUi(false)}>TAB 2</button>
            </div>
            
            {tabsUi ? <MapsPage /> : <VistingBank />}
        </>
    )
}

export default Home