import React from 'react';
import { Link } from 'react-router-dom';
import './footer.css';
import Vaxine from '../../images/vaxine.png';

const Footer = () => {
	return (
		<>
		<div className='footer'>
			<div className='footer-style'>
						<p className='footer-title'>A guide to your health</p>
							<img
								className='footer-logo'
								src={Vaxine}
								alt='vaxine logo'
							/> 
							<div className='footer-list'>
								<ul>
									<li>Terms of Service</li>
									<li>Privacy Policy</li>
									<li className='footer-copyright'>Copyright @2020 Vaxine</li>
								</ul>
							</div>
				</div>
			</div>
		</>
	);
};

export default Footer;
