import { useState, useRef, useEffect, useContext } from "react";
import { Transition } from "@headlessui/react";
// import { auth } from "./app/data/firebase";
 import {  Calender, Calculator } from "./Icons";

import { useRouter } from "next/navigation";

import "react-datepicker/dist/react-datepicker.css";

import DatePicker from "react-datepicker";
import Home from "@/app/(home)/page";

export default function Nav({ handleDateChange, selectedDate, highlightDates }:{handleDateChange: any, selectedDate:Date, highlightDates:Date[]} ){
  const [profileOpen, setProfileOpen] = useState(false); //profile toggle
 
  const wrapperRef = useRef(null);

  // const { user, logout } = auth(); //firebase context

  const router = useRouter();

  useEffect(() => {
    const handleClickOutside = (event: Event) => {
      if (wrapperRef.current) {
        setProfileOpen(false);
      }
    };

    // Bind the event listener
    document.addEventListener("click", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("click", handleClickOutside);
    };
  }, [wrapperRef]);
  const onDateChange = ($event:any) => {console.log($event)}

  return (
  
      <nav className="transition bg-white shadow-bottom dark:bg-gray-800 text-indigo">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
            

              <div className="md:block">
                <div className="ml-8 flex items-baseline sm:space-x-4">
                  <a
                    aria-label="Home"
                    onClick={() => {
                      router.push("/");
                    }}
                    className="cursor-pointer dark:text-gray-300 text-white-700 dark:hover:bg-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    <Home aria-label="Home" />
                  </a>

                  <DatePicker
                    aria-label="Calender"
                    selected={selectedDate}
                    onChange={handleDateChange}
                    highlightDates={highlightDates}
                    name="startDate"
                    dateFormat="MMM dd, yyyy"
                    closeOnScroll={true}
                    withPortal
                    customInput={
                      <div className="cursor-pointer dark:text-gray-300 text-white-700 dark:hover:bg-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                        <Calender/>
                      </div>
                    }
                  />

                  <a
                    aria-label="Home"
                    onClick={() => {
                      router.push("/calculator");
                    }}
                    className="cursor-pointer dark:text-gray-300 text-white-700 dark:hover:bg-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    <Calculator aria-label="Home" />
                  </a>
                </div>
              </div>
            </div>
            {/* <div className="md:block">
              <div className="sm:ml-4 flex items-center md:ml-6">
                <div className="ml-2 sm:ml-6 relative" ref={wrapperRef}>
                  <Transition
                    show={profileOpen}
                    enter="transition ease-out duration-100 transform"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="transition ease-in duration-75 transform"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                  >
                    <div
                      className="z-20 origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 text-gray-700 dark:text-gray-100  bg-white dark:bg-black ring-1 ring-black ring-opacity-5"
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby="user-menu"
                    >
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-800 "
                        role="menuitem"
                        onClick={() => router.push("/profile")}
                      >
                        Profile
                      </a>

                      { <a
                        href="#"
                        className="block px-4 py-2 text-sm  hover:bg-gray-100 dark:hover:bg-gray-800"
                        role="menuitem"
                        onClick={logout}
                      >
                        Sign out
                      </a> }
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm  hover:bg-gray-100 dark:hover:bg-gray-800"
                        role="menuitem"
                        onClick={openDeleteModal}
                      >
                        Delete account
                      </a>
                    </div>
                  </Transition>
                  { <DeleteAccountModal
                    isDeleteModalOpen={isDeleteModalOpen}
                    closeDeleteModal={closeDeleteModal}
                  /> }
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </nav>
    )
};