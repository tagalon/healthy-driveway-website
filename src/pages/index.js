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
          <p className="mt-8 md:mt-12">
            <Button size="lg">Book your future Healthy Driveway</Button>
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
              <p className="font-semibold text-xl">Gets rid of Harmful Mold and Dust</p>
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
          <h3 className="text-3xl font-semibold leading-tight">Market Analysis</h3>
          <p className="mt-8 text-xl font-light leading-relaxed">
            Our team of enthusiastic marketers will analyse and evaluate how your company stacks
            against the closest competitors
          </p>
        </div>
      }
      secondarySlot={<iframe frameborder="0" class="juxtapose" width="100%" height="4032" src="https://cdn.knightlab.com/libs/juxtapose/latest/embed/index.html?uid=76dd44d0-d5d9-11ea-bf88-a15b6c7adf9a">

      </iframe>}
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
    <section id='form' className="container mx-auto my-20 py-24 bg-gray-200 rounded-lg text-center">
      <h3 className="text-5xl font-semibold">Make your driveway look healthy again!</h3>
      <p className="mt-8 text-xl font-light">
       Book your appointment here!
      </p>
      <p className="mt-8">
      <form action="/received" class="form-contact" name="form-contact" className="has-shadow" netlify data-netlify="true" netlify-honeypot="bot-field" method="post">
                  <input type="hidden" name="form-name" value="contact" />
                  <div>
                  <label for="First Name">
                    <input
                      type="text"
                      name="name"
                      placeholder="Your name"
                      labelHidden>
                    </input>
                  </label>
                  </div>
                  <div>
                  <label for="Phone/Email">
                    <input
                      type="text"
                      name="contact"
                      placeholder="Phone # or Email"
                      labelHidden
                      required>
                    </input>
                  </label>
                  </div>
                  <div className="mt-24">
                    <Button type="submit" color="primary" wide>
                      Submit
                    </Button>
                  </div>
                </form>
                {/* <form name="contact" method="POST" netlify data-netlify="true" data-netlify-honeypot="bot-field">
                  <p>
                    <label>Your Name: <input type="text" name="name" /></label>   
                  </p>
                  <p>
                    <label>Your Email: <input type="email" name="email" /></label>
                  </p>
                  <p>
                    <Button type="submit" color='primary'>Send</Button>
                  </p>
                </form> */}
              </p>
        </section>
  </Layout>
);
