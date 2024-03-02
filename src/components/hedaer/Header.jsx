import React from 'react';
import cover from '../../assets/cover.png'

const Header = () => {
    return (
        <div className="hero min-h-screen mb-10" style={{ backgroundImage: `url(${cover})` }}>
            
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-3xl font-bold text-pink-300">Wellcome To Our <span className='font-bold text-red-800'>Online Course</span></h1>
                    <p className="mb-5 text-white">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <img src={cover} alt=''  />
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                </div>
            </div>
        </div >
    );
};

export default Header;