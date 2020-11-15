import React, { useState } from 'react'
import {useTransition, animated} from 'react-spring'
import NavigationMenu from './NavigationMenu'


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

    let hamburger = <i class="fas fa-bars" onClick={() => setShowMenu(!showMenu)}></i>
    let cross = <i class="fas fa-times" onClick={() => setShowMenu(!showMenu)}></i>

    const hamburgerTransition = useTransition(showMenu, null, {
        from: { position: 'absolute', opacity: 0, right: '20px', top: '10px' },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
    })

    return (
        <nav>
            <span className="text-xl">   
                <div className="right-5 top-3">
                {
                    hamburgerTransition.map(({item, key, props }) => 
                        item ? <animated.div style={props}>{cross}</animated.div>
                        : <animated.div style={props}>{hamburger}</animated.div>
                    )
                }
                </div> 
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
                    className="fixed bg-white top-0 left-0 w-4/5 h-full z-50 shadow p-3"
                    >  
                <NavigationMenu closeMenu={() => setShowMenu(false)} />
                </animated.div>)
            }
        </nav>
    )
}

export default Navigation
