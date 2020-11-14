import React, { useState } from 'react'
import {useTransition, animated} from 'react-spring'

function Navigation() {
    const [showMenu, setShowMenu] = useState(false);
    
    const masktransitions = useTransition(showMenu, null, {
        from: { position: 'absolute', opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
    })

    const menutransitions = useTransition(showMenu, null, {
        from: { opacity: 0, transform: 'translateX(-100%)' },
        enter: { opacity: 1, transform: 'translateX(0%)' },
        leave: { opacity: 0, transform: 'translateX(-100%)' },
    })

    return (
        <nav>
            <span className="text-xl">    
                <i class="fas fa-bars" onClick={() => setShowMenu(!showMenu)}></i>
            </span>

            {
                masktransitions.map(({ item, key, props }) =>
                item && 
                <animated.div 
                    key={key} 
                    style={props}
                    className="bg-black-t-50 fixed top-0 left-0 w-full h-full z-50"
                    onClick={() => setShowMenu(false)}
                    >  
                </animated.div>)
            }
            {
                menutransitions.map(({ item, key, props }) =>
                item && 
                <animated.div 
                    key={key} 
                    style={props}
                    className="fixed bg-white top-0 left-0 w-4/5 h-full z-50 shadow"
                    >  
                    This is the menu
                </animated.div>)
            }
        </nav>
    )
}

export default Navigation
