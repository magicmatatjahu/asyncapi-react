import React, { useState, forwardRef, useImperativeHandle } from 'react';

import { FaTimes } from 'react-icons/fa';

interface ModalProps {
  opener: React.ReactNode;
  title: React.ReactNode;
  body: React.ReactNode;
  footer?: React.ReactNode;
}

export const Modal = forwardRef<any, ModalProps>(
  ({ opener = null, title = null, body = null, footer = null }, ref) => {
    const [showModal, setShowModal] = useState(false);

    useImperativeHandle(ref, () => ({
      closeModal() {
        setShowModal(false);
      },
    }));

    return (
      <>
        <div onClick={() => setShowModal(true)}>
          {opener || (
            <button
              className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none ease-linear transition-all duration-150"
              type="button"
            >
              Open regular modal
            </button>
          )}
        </div>
        {showModal ? (
          <>
            <div className="visible justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none text-black shadow-2xl duration-150">
              <div className="relative w-auto my-6 mx-auto max-w-3xl">
                {/*content*/}
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                  {/*header*/}
                  <div className="flex justify-between items-center p-2 px-4 border-b border-solid border-blueGray-200 rounded-t">
                    {title}
                    <button
                      className="ml-auto border-0 text-black float-right leading-none font-semibold outline-none focus:outline-none"
                      onClick={() => setShowModal(false)}
                    >
                      <span className="text-gray-700 text-lg block outline-none focus:outline-none">
                        <FaTimes />
                      </span>
                    </button>
                  </div>
                  {body}
                  {/* {body && (
                  <div className="relative p-4 flex-auto">
                    {body}
                    {<p className="my-4 text-blueGray-500 text-lg leading-relaxed">
                      I always felt like I could do anything. That’s the main
                      thing people are controlled by! Thoughts- their perception
                      of themselves! They're slowed down by their perception of
                      themselves. If you're taught you can’t do anything, you
                      won’t do anything. I was taught I could do everything.
                    </p>}
                  </div>
                )}
                {/*footer*/}
                  {/* {footer && (
                  <div className="flex items-center justify-end p-2 border-t border-solid border-blueGray-200 rounded-b">
                    {footer}
                    <button
                      className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-3 py-1 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={() => setShowModal(false)}
                    >
                      Save Changes
                    </button>}
                  </div>
                )} */}
                </div>
              </div>
            </div>
            {/* <div className="visible opacity-25 fixed inset-0 z-40 bg-black"></div> */}
          </>
        ) : null}
      </>
    );
  },
);
