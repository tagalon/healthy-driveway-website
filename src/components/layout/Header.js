import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import LogoIcon from '../../svg/LogoIcon';
import Button from '../Button';
import {Link as ScrollLink} from "react-scroll";
const Header = () => (
  <header className="sticky top-0 bg-white shadow">
    <div className="container flex flex-col sm:flex-row justify-between items-center mx-auto py-4 px-8">
      <div className="flex items-center text-2xl">
        <div className="w-12 mr-3">
          <LogoIcon />
        </div>
        Healthy Driveway
      </div>
      <div className="flex mt-4 sm:mt-0">
        <ScrollLink 
          className="px-4" 
          to="features"
          smooth={true}
          offset={10}
          duration={500}
          delay={1000}
          href="#features">
          Benefits
        </ScrollLink>
        <ScrollLink 
          className="px-4" 
          to="services"
          smooth={true}
          offset={10}
          duration={500}
          delay={1000}
          href="#services">
          Services
        </ScrollLink>
        <ScrollLink 
          className="px-4" 
          to="stats"
          smooth={true}
          offset={10}
          duration={500}
          delay={1000}
          href="#stats">
          Statistics
        </ScrollLink>
        <ScrollLink 
          className="px-4" 
          to="testimonials"
          smooth={true}
          offset={10}
          duration={500}
          delay={1000}
          href="#testimonials">
          Reviews
        </ScrollLink>
      </div>
      <div className="hidden md:block">
        <Button className="text-sm">Book your Healthy Driveway</Button>
      </div>
    </div>
  </header>
);

export default Header;

{/* <ScrollLink activeClass="active"
                              to="pricing"
                              href="pricing"
                              smooth={true}
                              offset={10}
                              duration={500}
                              delay={1000}
                              >Pricing</ScrollLink> */}