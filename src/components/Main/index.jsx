import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { setToken } from '../../redux/actions/action_types';
import Content from './Content'
import SideBar from './SideBar'

import "./styles.css"


export default function Main() {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setToken())
    },[])

    return (
        <div className="main">
            <SideBar/>
            <Content/>
        </div>
    )
}