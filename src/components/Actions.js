import React from 'react'

const Actions = (props) => {
    function handleFilter(e) {
        (e.target.value === 'all' ? props.setSeeGreased('all') : props.setSeeGreased(JSON.parse(e.target.value)))
    }
    
    function handleTextChange(e) {
        props.setSortName(e.target.value)
    }

    function handleNumberChange(e) {
        props.setSortWeight(e.target.value)
    }

    return (
        <div>
            <hr/>
                <select onChange={handleFilter} className="ui dropdown">
                    <option value='all'>See All Hogs</option>
                    <option value='true'>Greased</option>
                    <option value='false'>Not Greased</option>
                </select>
                <form>
                    <label>Sort by Name</label>
                    <input onChange={handleTextChange}type='text' name='name'></input>
                   <br></br>
                    <label>Sort by Weight</label>
                    <input onChange={handleNumberChange} type='number' step='0.1' name='weight'></input>
                </form>
            <hr/>
        </div>
    )
}

export default Actions
