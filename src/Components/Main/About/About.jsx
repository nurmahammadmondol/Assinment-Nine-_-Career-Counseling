import React from 'react';
import { Helmet } from 'react-helmet';

const About = () => {
  return (
    <div>
      <div>
        <Helmet>
          <title>Success Hub || About Us</title>
        </Helmet>
      </div>
      <div className="  w-11/12 md:size-8/12 mx-auto rounded-xl text-center mt-20">
        <div className="flex flex-col justify-center items-center py-5">
          <h3 className=" text-xl md:text-3xl font-bold">
            Welcome to Success Hub!
          </h3>

          <p className="text-gray-300 my-3 w-11/12 lg:w-5/12 mx-auto"></p>
        </div>
      </div>

      <div className="my-10 w-11/12 md:w-10/12 mx-auto  md:flex gap-10">
        <div className="w-full md:w-7/12 p-3">
          <p className="">
            <span className="text-xl text-gray-500 font-bold">We</span> are
            dedicated to empowering individuals with the knowledge, tools, and
            support they need to make informed decisions about their careers.
            Our mission is to guide you toward success by providing personalized
            advice, innovative resources, and expert mentorship tailored to your
            unique needs.
          </p>

          <br />
          <hr />
          <br />

          <h3 className="text-lg font-bold">
            <i class="fa-brands fa-codepen mr-1"></i> Our Mission
          </h3>
          <p className="text-sm text-gray-500">
            To inspire and empower individuals to unlock their true potential
            and achieve their professional dreams through expert career
            guidance.
          </p>

          <br />
          <hr />
          <br />

          <h3 className="text-lg font-bold">
            <i class="fa-brands fa-codepen mr-1"></i> Our Vision
          </h3>
          <p className="text-sm text-gray-500">
            To be the most trusted platform for career counseling and
            mentorship, creating pathways for success for individuals across the
            globe.
          </p>

          <br />
          <hr />
          <br />

          <h3 className="text-lg font-bold">
            <i class="fa-brands fa-codepen mr-1"></i> Our Values
          </h3>
          <ul className="text-sm text-gray-500">
            <li>
              <i class="fa-regular fa-snowflake mr-1 text-[10px]"></i>
              <span className="font-semibold"> Integrity: </span>
              Upholding honesty and transparency in all we do.
            </li>
            <li>
              <i class="fa-regular fa-snowflake mr-1 text-[10px]"></i>
              <span className="font-semibold">Empathy:</span>
              Understanding and supporting your unique journey.
            </li>
            <li>
              <i class="fa-regular fa-snowflake mr-1 text-[10px]"></i>
              <span className="font-semibold">Excellence:</span>
              Delivering the highest quality services every time.
            </li>
          </ul>

          <br />
          <hr />
          <br />

          <h3 className="text-lg font-bold">
            <i class="fa-brands fa-codepen mr-1"></i> Meet Our Team
          </h3>
          <p className="text-sm text-gray-500">
            Our experienced team of career counselors, mentors, and industry
            experts bring years of expertise and passion to help you succeed.
          </p>

          <br />
          <hr />
          <br />

          <h3 className="text-lg font-bold">
            <i class="fa-brands fa-codepen mr-1"></i> Why Choose Us?
          </h3>

          <ul className="text-sm text-gray-500">
            <li>
              <i class="fa-regular fa-snowflake mr-1 text-[10px]"></i>
              <span className="font-semibold"> Expert Guidance: </span>
              Access to professionals with proven experience.
            </li>
            <li>
              <i class="fa-regular fa-snowflake mr-1 text-[10px]"></i>
              <span className="font-semibold">Affordable Services:</span>
              High-quality support at competitive prices.
            </li>
            <li>
              <i class="fa-regular fa-snowflake mr-1 text-[10px]"></i>
              <span className="font-semibold">Proven Success Stories:</span>
              Hundreds of individuals have achieved their career goals through
              our platform.
            </li>
          </ul>

          <br />
          <hr />
          <br />

          <h3 className="text-lg font-bold">
            <i class="fa-brands fa-codepen mr-1"></i> Contact Us
          </h3>
          <ul className="text-sm text-gray-500">
            <li>
              <i class="fa-regular fa-snowflake mr-1 text-[10px]"></i>
              <span className="font-semibold"> Address: </span>
              Rangpur, Dhaka, Bangladesh.
            </li>
            <li>
              <i class="fa-regular fa-snowflake mr-1 text-[10px]"></i>
              <span className="font-semibold"> Email: </span>
              info@gadgetheaven.com
            </li>
            <li>
              <i class="fa-regular fa-snowflake mr-1 text-[10px]"></i>
              <span className="font-semibold">Phone: </span> +880123456789
            </li>
            <li>
              <i class="fa-regular fa-snowflake mr-1 text-[10px]"></i>
              <span className="font-semibold">Social Media:</span> [Facebook,
              Twitter Links]
            </li>
          </ul>

          <div>
            <p className="font-semibold mt-10">
              Let’s work together to create a brighter future! 🌟
            </p>
          </div>
        </div>
        <div className="w-full md:w-5/12 p-3 border rounded-lg"></div>
      </div>
    </div>
  );
};

export default About;
