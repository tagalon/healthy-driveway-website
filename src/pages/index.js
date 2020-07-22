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

export default () => (
  <Layout>
    <section className="pt-20 md:pt-40">
      <div className="container mx-auto px-8 lg:flex">
        <div className="text-center lg:text-left lg:w-1/2">
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-none">
            Healthy Driveway
          </h1>
          <p className="text-xl lg:text-2xl mt-6 font-light">
          Welcome to the student-run business, Healthy Driveway! This business is aimed to help college students fund their finances during their undergraduate study. For only a small price tag of $100, your driveway can become spotless and look brand new again, by getting rid of oil, salt, and reducing the chance for cracks,through the power of powerwashing! We powerwash around the DFW Area. 
          </p>
          <p className="mt-8 md:mt-12">
            <Button size="lg">Book a Wash</Button>
          </p>
          <p className="mt-4 text-gray-600">Fill in your details in the form</p>
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
              <p className="font-semibold text-xl">Gets rid of Harmful Mold and Dust</p>
              <p className="mt-4">
              All the dirt, grime, and mildew that accumulates on your home’s exterior surfaces can be dangerous. Removing them yearly with a pressure washing helps keep you and your pets from getting sick. Springtime, when allergens run high, is the perfect time to include your home’s exterior into your spring cleaning. Power washing the exterior can reduce the amount of allergens in and around your home, and reduce the time your family spends coughing, sneezing and with watery eyes. Our  solution removes allergens, kills algae and fungus, and protects against harmful bacteria.
              </p>
            </Card>
          </div>
          <div className="flex-1 px-3">
            <Card className="mb-8">
              <p className="font-semibold text-xl">Increases Property Value of your House</p>
              <p className="mt-4">
              If you’re looking to sell, power washing could be the difference between making a sale and not. Exteriors degrade, discolor, and oxide as time passes. Because of this, your property can lose value. Power washing helps a fresh looking paint job take, making it free of peeling and chipping and it helps your home look new on its own. Obviously, a good-looking house is much easier to rent or sell.
              </p>
            </Card>
          </div>
          <div className="flex-1 px-3">
            <Card className="mb-8">
              <p className="font-semibold text-xl">Reduces Damage</p>
              <p className="mt-4">
              Your home’s exterior is exposed to harsh elements all the time; that’s it’s job! Natural conditions like sun, wind, dirt, ultraviolet rays, insects, birds –  not to mention things like acid rain, smoke, pollutants and car exhaust – constantly take a beating on your home and contribute to its soiling, discoloration, and damage.
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
          <h3 className="text-3xl font-semibold leading-tight">Market Analysis</h3>
          <p className="mt-8 text-xl font-light leading-relaxed">
            Our team of enthusiastic marketers will analyse and evaluate how your company stacks
            against the closest competitors
          </p>
        </div>
      }
      secondarySlot={<SvgCharts />}
    />
    <SplitSection
      reverseOrder
      primarySlot={
        <div className="lg:pl-32 xl:pl-48">
          <h3 className="text-3xl font-semibold leading-tight">
            Design And Plan Your Business Growth Steps
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
        <LabelText className="text-gray-600">Our customers get results</LabelText>
        <div className="flex flex-col sm:flex-row mt-8 lg:px-24">
          <div className="w-full sm:w-1/3">
            <StatsBox primaryText="+100%" secondaryText="Stats Information" />
          </div>
          <div className="w-full sm:w-1/3">
            <StatsBox primaryText="+100%" secondaryText="Stats Information" />
          </div>
          <div className="w-full sm:w-1/3">
            <StatsBox primaryText="+100%" secondaryText="Stats Information" />
          </div>
        </div>
      </div>
    </section>
    <section id="testimonials" className="py-20 lg:py-40">
      <div className="container mx-auto">
        <LabelText className="mb-8 text-gray-600 text-center">What customers are saying</LabelText>
        <div className="flex flex-col md:flex-row md:-mx-3">
          {customerData.map(customer => (
            <div key={customer.customerName} className="flex-1 px-3">
              <CustomerCard customer={customer} />
            </div>
          ))}
        </div>
      </div>
    </section>
    <section className="container mx-auto my-20 py-24 bg-gray-200 rounded-lg text-center">
      <h3 className="text-5xl font-semibold">Make your Driveway Beautiful again.</h3>
      <p className="mt-8 text-xl font-light">
       Book a Wash and fill out your details in the form.
      </p>
      <p className="mt-8">
        <Button size="xl">Book A wash</Button>
      </p>
    </section>
  </Layout>
);
