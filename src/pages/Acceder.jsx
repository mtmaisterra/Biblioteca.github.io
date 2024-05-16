import React from 'react';
import Ingresar from '../components/Ingresar';
import NavBar from '../components/navBar';
import Footer from '../components/footer';

function Acceder() {
    return (
        <>
            <div>
                <NavBar />
            </div>
            <div>
                <Ingresar />
            </div>
            <div>
                <Footer />
            </div>

        </>
    )
};
export default Acceder;