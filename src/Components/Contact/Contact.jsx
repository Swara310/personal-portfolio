import React from "react";
import Swal from "sweetalert2";

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "099aebc6-97e2-42b9-a78c-00525b5036d7");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
        title: "Success!",
        text: "Message Sent Successfully!",
        icon: "success",
      });
  
      // Reset the form fields
      event.target.reset();
    } else {
      Swal.fire({
        title: "Error!",
        text: res.message || "Something went wrong!",
        icon: "error",
      });
    }
  };

  return (
    <div
      id="Contact"
      className="flex justify-end items-center min-h-[50vh] bg-[#171d32] bg-opacity-30 shadow-xl rounded-lg mx-0 md:mx-20 p-12 mb-24"
    >
      <form
        onSubmit={onSubmit}
        className="max-w-lg w-full bg-[#0c0e19] p-8 rounded-lg shadow-lg text-white"
      >
        <h2 className="text-2xl md:text-3xl font-bold text-center">Contact Form</h2>
        <div className="mt-5">
          <label className="block text-lg">Full Name</label>
          <input
            type="text"
            className="w-full h-12 bg-transparent border-2 border-gray-600 outline-none rounded-md p-3 text-gray-400 mt-2"
            placeholder="Enter Your Name"
            name="name"
            required
          />
        </div>
        <div className="mt-5">
          <label className="block text-lg">Email</label>
          <input
            type="email"
            className="w-full h-12 bg-transparent border-2 border-gray-600 outline-none rounded-md p-3 text-gray-400 mt-2"
            placeholder="Enter Your Email"
            name="email"
            required
          />
        </div>
        <div className="mt-5">
          <label className="block text-lg">Your Message</label>
          <textarea
            name="message"
            className="w-full h-36 bg-transparent border-2 border-gray-600 outline-none rounded-md p-3 text-gray-400 mt-2 resize-none"
            placeholder="Enter Your Message"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full h-14 bg-[#465697] text-white rounded-md shadow-md cursor-pointer text-lg font-medium mt-6 transition duration-500 hover:bg-[#624ec6]"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
