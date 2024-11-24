import React, { useContext } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { sixJsonData } from '../../Context/Context';
import { Helmet } from 'react-helmet';

const MyClass = () => {
  const { Data, User, UserEnroll } = useContext(sixJsonData);

  const EnrollThisCourse = Data.find(item => item.id === UserEnroll);

  const { image, serviceName, counselor } = EnrollThisCourse;

  return (
    <div className="my-10 w-11/12 md:w-10/12 mx-auto">
      <Helmet>
        <title>Success Hub || MyClasses</title>
      </Helmet>
      <h3 className="text-2xl md:text-3xl font-bold text-cyan-800 my-10">
        Welcome back <span className="text-cyan-500">{User?.displayName} </span>
        ready for your next lesson?
      </h3>

      <div>
        <Tabs>
          <TabList>
            <Tab>
              <i class="fa-solid fa-shield-halved mr-2"></i>My Course
            </Tab>
            <Tab>
              <i class="fa-solid fa-headset mr-2"></i>Support
            </Tab>
          </TabList>

          <TabPanel>
            <div className=" h-[200px] md:h-[300px] w-full bg-gray-100 opacity-85 border  my-16 flex justify-between gap-3 md:gap-10 p-3 md:p-5 rounded-lg">
              <div className="w-4/12 h-full">
                <img
                  className="w-full h-full border rounded-lg"
                  src={image}
                  alt=""
                />
              </div>
              <div className="w-8/12 h-full flex flex-col justify-between ">
                <div className="space-y-2 md:mt-5 ">
                  <h3 className=" md:text-2xl font-bold">
                    Complete {serviceName} Course With Success Hub !
                  </h3>
                  <p className="text-gray-500 text-xs md:text-sm">
                    <i class="fa-regular fa-user mr-2"></i>
                    {counselor}
                  </p>
                </div>
                <div className="flex justify-end">
                  <button className="btn text-cyan-600 btn-outline">
                    Continue Course
                  </button>
                </div>
              </div>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="h-[200px] md:h-[300px] w-full bg-gray-100 opacity-85 border  my-16 p-3 md:p-5 rounded-lg"></div>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default MyClass;
