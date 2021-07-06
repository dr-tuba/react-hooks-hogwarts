import React from 'react'
import HogCard from './HogCard'

const HogList = ({ hogs, seeGreased, sortName, sortWeight }) => {             
    return (
        <div className='ui cards'>
            {hogs.map(hog => {
               if (hog.weight === parseFloat(sortWeight))
               return (            
                        <HogCard
                            key = {hog.name}
                            name = {hog.name}
                            medal = {hog["highest medal achieved"]}
                            img = {hog.image}
                            specialty = {hog.specialty}
                            weight = {hog.weight}
                            greased = {hog.greased}
                        />
                        )
                    }
                )
            }
        </div>
    )
}
    
export default HogList

// if (seeGreased === hog.greased) 
//                return (            
//                     <HogCard
//                         key = {hog.name}
//                         name = {hog.name}
//                         medal = {hog["highest medal achieved"]}
//                         img = {hog.image}
//                         specialty = {hog.specialty}
//                         weight = {hog.weight}
//                         greased = {hog.greased}
//                     />
//                     )
//                 else if (seeGreased === 'all') return (
//                     <HogCard
//                         key = {hog.name}
//                         name = {hog.name}
//                         medal = {hog["highest medal achieved"]}
//                         img = {hog.image}
//                         specialty = {hog.specialty}
//                         weight = {hog.weight}
//                         greased = {hog.greased}
//                     />
//                 )
