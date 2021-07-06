import React from 'react'
import HogList from "./HogList";
import Actions from "./Actions";
import { useState } from 'react';

const HogPage = ({ hogs }) => {  
    const [seeGreased, setSeeGreased] = useState('all')
    const [sortWeight, setSortWeight] = useState(0)
    const [sortName, setSortName] = useState('')

    return (
        <main>
            <Actions 
                seeGreased = {seeGreased}
                setSeeGreased = {setSeeGreased}
                sortWeight = {sortWeight}
                setSortWeight = {setSortWeight}
                sortName = {sortName}
                setSortName = {setSortName}
            />
            <HogList 
                hogs = {hogs}
                seeGreased = {seeGreased}
                sortWeight = {sortWeight}
                sortName = {sortName}
            /> 
        </main>
    )
}

export default HogPage
