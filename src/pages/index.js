import React from 'react';
import Button from '../components/Button';
import Card from '../components/Card';
import CustomerCard from '../components/CustomerCard';
import LabelText from '../components/LabelText';
import Layout from '../components/layout/Layout';
import SplitSection from '../components/SplitSection';
import StatsBox from '../components/StatsBox';
import customerData from '../data/customer-data';
import HeroImage from '../svg/HeroImage';
import SvgCharts from '../svg/SvgCharts';
import "../css/form.css"
import {Link as ScrollLink} from "react-scroll"
export default () => (
  <Layout>
    <section className="pt-20 md:pt-40">
      <div className="container mx-auto px-8 lg:flex">
        <div className="text-center lg:text-left lg:w-1/2">
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-none">
            Healthy Driveway
          </h1>
          <p className="text-xl lg:text-2xl mt-6 font-light">
          Welcome to Healthy Driveway! We are a student-run pressure-washing business aimed to help college students fund their ungraduate finances. As of our opening, we are offering your driveway, porch, and walkways to all be cleaned at only $100! Please book an appointment with us! 
          </p>
          {/* <p className="mt-8 md:mt-12"> */}
          <p className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-none">
          <div>
          <ScrollLink
          class='a' 
          className="px-4" 
          to="contact"
          smooth={true}
          offset={0}
          duration={500}
          delay={500}
          href="#contact">
          Text me here!
          </ScrollLink>
          </div>
          </p>
        </div>
        <div className="lg:w-1/2">
          <HeroImage />
        </div>
      </div>
    </section>
    <section id="features" className="py-20 lg:pb-40 lg:pt-48">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl lg:text-5xl font-semibold">Benefits of Powerwashing Driveway</h2>
        <div className="flex flex-col sm:flex-row sm:-mx-3 mt-12">
          <div className="flex-1 px-3">
            <Card className="mb-8">
              <p className="font-semibold text-xl">Clean and Efficient</p>
              <p className="mt-4">
              Accumulation of dirt, grime, and mildew on your home’s exterior surfaces can lead to maintanence and installation issues within the base structures of these surfaces. 
              Yearly pressure washing will prolong the life expectancies for these surfaces and keeps them looking healthy! 
              Another benefit of pressure washing is that it can reduce the amount of allergens within and outside of your environment. Our solution removes allergens, kills algae and fungus, and protects against harmful bacteria.
              </p>
            </Card>
          </div>
          <div className="flex-1 px-3">
            <Card className="mb-8">
              <p className="font-semibold text-xl">Retains Property Value</p>
              <p className="mt-4">
              If you’re looking to sell, pressure washing could be the difference between making a sale and not. 
              Exteriors degrade, discolor, and oxide as time passes. As a result, your property can lose value. 
              Pressure washing helps remove all the gunk off these exterior surfaces and makes them brand new again.
              </p>
            </Card>
          </div>
          <div className="flex-1 px-3">
            <Card className="mb-8">
              <p className="font-semibold text-xl">Reduces Damage</p>
              <p className="mt-4">
              Natural conditions like sun, wind, dirt, ultraviolet rays, insects, birds –  not to mention things like acid rain, smoke, pollutants and car exhaust – constantly take a beating on your home and contribute to its soiling, discoloration, and damage.
              Pressure washing can eliminate dirt trapped within the crevices in your exterior surfaces, preventing further deterrioation within your driveway. 
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
    <SplitSection
      id="services"
      primarySlot={
        <div className="lg:pr-32 xl:pr-48">
          <h3 className="text-3xl font-semibold leading-tight">Complete Change!</h3>
          <p className="mt-8 text-xl font-light leading-relaxed">
            "Healthy Driveway uses their own cleaning solution which has made my driveway look spotless!" 
            Healthy Driveway Customer, Srini
          </p>
        </div>
      }
      secondarySlot={<iframe frameborder="0" class="juxtapose" width="100%" height="700" src="https://cdn.knightlab.com/libs/juxtapose/latest/embed/index.html?uid=76dd44d0-d5d9-11ea-bf88-a15b6c7adf9a">

      </iframe>}
    />
    <SplitSection
      reverseOrder
      primarySlot={
        <div className="lg:pl-32 xl:pl-48">
          <h3 className="text-3xl font-semibold leading-tight">
            Noticing the real difference!
          </h3>
          <p className="mt-8 text-xl font-light leading-relaxed">
            Once the market analysis process is completed our staff will search for opportunities
            that are in reach
          </p>
        </div>
      }
      secondarySlot={<SvgCharts />}
    />
    <SplitSection
      primarySlot={
        <div className="lg:pr-32 xl:pr-48">
          <h3 className="text-3xl font-semibold leading-tight">
            Search For Performance Optimization
          </h3>
          <p className="mt-8 text-xl font-light leading-relaxed">
            With all the information in place you will be presented with an action plan that your
            company needs to follow
          </p>
        </div>
      }
      secondarySlot={<SvgCharts />}
    />
    <section id="stats" className="py-20 lg:pt-32">
      <div className="container mx-auto text-center">
        <div className="flex flex-col md:flex-row md:-mx-3">
          {customerData.map(customer => (
            <div key={customer.customerName} className="flex-1 px-3">
              <CustomerCard customer={customer} />
            </div>
          ))}
        </div>
      </div>
    </section>
    <section id='contact' className="container mx-auto my-20 py-24 bg-gray-200 rounded-lg text-center">
      <h3 className="text-5xl font-semibold">Make your driveway look healthy again!</h3>
      <p className="mt-8 text-xl font-light">
       Please text me at 4698352290 or email healthydriveway@gmail.com for your driveway appointment!</p>
        </section>
  </Layout>
);
