"use client";
import React, { useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
const Contact = () => {
  const form = useRef();

  useEffect(() => {
    console.log(form.current);
  }, [form]);

  console.log("HIIIIIII", form);
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_2zxfg5x",
        "template_t7xchrd",
        form.current,
        "e2kIkB73IlLRKVEaa"
      )
      .then(
        (result) => {
          console.log(result.text);
          // @ts-ignore
          form.current.reset();
          toast.success("Thanks for reaching out! We'll be in touch soon.", {
            position: toast.POSITION.TOP_CENTER,
          });
        },
        (error) => {
          console.log(error.text);
          toast.error("Sorry, something went wrong. Please try again later.", {
            position: toast.POSITION.TOP_LEFT,
          });
        }
      );
  };

  return (
    <section
      className="text-gray-700 body-font relative bg-gray-100 border-top-solid"
      id="contact"
    >
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-12">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900 uppercase underline underline-offset-8">
            Contact Us
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-xl">
            Reach out today for more information on booking Fifth Floor for your
            next event
          </p>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <div className="flex flex-wrap -m-2">
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label className="leading-7 text-sm text-gray-600">
                    Name
                  </label>
                  <input
                    type="text"
                    id="user_name"
                    name="user_name"
                    placeholder="Name"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label className="leading-7 text-sm text-gray-600">
                    Email
                  </label>
                  <input
                    required
                    type="email"
                    id="user_email"
                    name="user_email"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-sky-500 focus:bg-white focus:ring-2 focus:ring-sky-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label className="leading-7 text-sm text-gray-600">
                    Message
                  </label>
                  <textarea
                    required
                    id="message"
                    name="message"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-sky-500 focus:bg-white focus:ring-2 focus:ring-sky-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  ></textarea>
                </div>
              </div>
              <div className="p-2 w-full">
                <input
                  type="submit"
                  value="Send"
                  className="flex mx-auto text-white bg-sky-500 border-0 py-2 px-8 focus:outline-none hover:bg-sky-600 hover:scale-110 duration-150 rounded text-lg"
                />
              </div>

              <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
                <p className="leading-normal my-5">
                  Est. 2023
                  <br />
                  San Diego, CA
                  <br />
                  fifthfloorsd@gmail.com
                </p>
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};
export default Contact;
