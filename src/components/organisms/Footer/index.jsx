import React from "react";

export default function Footer() {
  return (
    <div className="w-full bg-[radial-gradient(var(--tw-gradient-stops))] from-[#1C6BA9] via-black to-black py-10 px-40">
      <div className="flex flex-col justify-center items-center w-full">
        <div className="flex justify-center w-full border-b border-white pt-16 pb-32">
          <div className="flex flex-col w-1/5">
            <h1 className="text-4xl font-bold text-white">Gocen</h1>
            <h1 className="text-md font-thin text-white">
              hello.gocen@gmail.com
            </h1>
            <h1 className="text-md font-thin text-white">(629) 555-0129</h1>
            <p className="text-md font-thin text-white">
              2972 Westheimer Rd. Santa Ana, Illionis 85486
            </p>
          </div>
          <div className="flex flex-col justify-center items-center w-4/5 gap-y-12">
            <div className="flex flex-1 justify-center w-full gap-x-32">
              <div className="flex flex-col justify-start items-start gap-y-6">
                <h1 className="text-lg font-semibold text-white">Service</h1>
                <ul className="flex flex-col gap-y-3 text-md font-thin text-white">
                  <li>Feature</li>
                  <li>Service</li>
                  <li>Enterprice Pricing</li>
                </ul>
              </div>
              <div className="flex flex-col justify-start items-start gap-y-6">
                <h1 className="text-lg font-semibold text-white">Partners</h1>
                <ul className="flex flex-col gap-y-3 text-md font-thin text-white">
                  <li>Overview</li>
                  <li>Become a partner</li>
                  <li>Find a partner</li>
                  <li>Affilates</li>
                  <li>Feature</li>
                </ul>
              </div>
              <div className="flex flex-col justify-start items-start gap-y-6">
                <h1 className="text-lg font-semibold text-white">Resource</h1>
                <ul className="flex flex-col gap-y-3 text-md font-thin text-white">
                  <li>Overview</li>
                  <li>Articles</li>
                  <li>Webinars</li>
                  <li>Event</li>
                  <li>E-commerce Blog</li>
                </ul>
              </div>
            </div>
            <div className="flex flex-1 justify-center w-full gap-x-32">
              <div className="flex flex-col justify-start items-start gap-y-6">
                <h1 className="text-lg font-semibold text-white">
                  Use case solution
                </h1>
                <ul className="flex flex-col gap-y-3 text-md font-thin text-white">
                  <li>Headless Commerce</li>
                  <li>B2B</li>
                  <li>Wholesale</li>
                  <li>Multi Channel</li>
                  <li>International</li>
                </ul>
              </div>
              <div className="flex flex-col justify-start items-start gap-y-6">
                <h1 className="text-lg font-semibold text-white">
                  Industry Solution
                </h1>
                <ul className="flex flex-col gap-y-3 text-md font-thin text-white">
                  <li>Apparel & fashion</li>
                  <li>Healthy & beauty</li>
                  <li>Food & beverage</li>
                  <li>Manufacturing</li>
                  <li>Automotive</li>
                  <li>CBD</li>
                </ul>
              </div>
              <div className="flex flex-col justify-start items-start gap-y-6">
                <h1 className="text-lg font-semibold text-white">Company</h1>
                <ul className="flex flex-col gap-y-3 text-md font-thin text-white">
                  <li>Leaders</li>
                  <li>About Us</li>
                  <li>Careers</li>
                  <li>Awards</li>
                  <li>Investor Relations</li>
                  <li>Terms of Service</li>
                  <li>Privacy Policy</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center w-full pt-10">
          <h1 className="text-sm text-white">
            © Copyright Gocen 2023. All Rights Reserved
          </h1>
        </div>
      </div>
    </div>
  );
}
