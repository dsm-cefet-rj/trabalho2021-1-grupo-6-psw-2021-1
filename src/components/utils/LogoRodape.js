import React from 'react';
import LogoOn from './Logo.png';

const LogoRodape = () => {
    return (
        <footer className="row rodape justify-content-center text-white">
            <div className="d-flex p-3 align-items-center">
                <img src={LogoOn} alt="Logo da OnPsic" />
                <h6 className="p-1 font-weight-bold">OnPsic inc (2021)</h6>
            </div>
        </footer>
    );
}
export default LogoRodape;