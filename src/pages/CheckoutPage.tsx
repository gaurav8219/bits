import React, { useState } from "react";

const Contact = () => {
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    address: "",
    message: "",
  });

  const getISTDateTime = () => {
    const date = new Date();
    const utc = date.getTime() + date.getTimezoneOffset() * 60000;
    const istOffset = 5.5 * 60 * 60000; // IST offset +5:30 in milliseconds
    const istTime = new Date(utc + istOffset);

    const year = istTime.getFullYear();
    const month = (istTime.getMonth() + 1).toString().padStart(2, "0");
    const day = istTime.getDate().toString().padStart(2, "0");

    const hours = istTime.getHours().toString().padStart(2, "0");
    const minutes = istTime.getMinutes().toString().padStart(2, "0");

    return `${year}-${month}-${day} ${hours}:${minutes}`;
  };

  let name, value;
  const postUserData = (event) => {
    name = event.target.name;
    value = event.target.value;

    setUserData({ ...userData, [name]: value });
  };

  const submitData = async (event) => {
    event.preventDefault();
    const { firstName, lastName, phone, email, address, message } = userData;

    if (firstName && lastName && phone && email && address && message) {
      try {
        const res = await fetch(
          "https://bits-82a52-default-rtdb.firebaseio.com/userDataRecords.json",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              firstName,
              lastName,
              phone,
              email,
              address,
              message,
              createdAt: getISTDateTime(),
            }),
          }
        );

        if (res.ok) {
          setUserData({
            firstName: "",
            lastName: "",
            phone: "",
            email: "",
            address: "",
            message: "",
          });
          alert("Data Stored Successfully!");
        } else {
          alert("Failed to store data. Please try again.");
        }
      } catch (error) {
        alert("Error occurred: " + error.message);
      }
    } else {
      alert("Please fill in all the fields.");
    }
  };

  return (
    <>
      <section className="contactus-section bg-gray-100 flex items-center justify-center min-h-screen">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-10 max-w-6xl mx-auto bg-white shadow-lg rounded-lg p-8">
            {/* Right side contact form */}
            <div className="lg:w-1/2">
              <form onSubmit={submitData} className="space-y-6">
                <div className="flex gap-4">
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    value={userData.firstName}
                    onChange={postUserData}
                    className="w-1/2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
                    required
                  />
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={userData.lastName}
                    onChange={postUserData}
                    className="w-1/2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
                    required
                  />
                </div>

                <div className="flex gap-4">
                  <input
                    type="text"
                    name="phone"
                    placeholder="Phone Number"
                    value={userData.phone}
                    onChange={postUserData}
                    className="w-1/2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email ID"
                    value={userData.email}
                    onChange={postUserData}
                    className="w-1/2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
                    required
                  />
                </div>

                <input
                  type="text"
                  name="address"
                  placeholder="Add Address"
                  value={userData.address}
                  onChange={postUserData}
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
                  required
                />

                <textarea
                  name="message"
                  placeholder="Enter Your Message"
                  value={userData.message}
                  onChange={postUserData}
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400 transition resize-none h-24"
                  required
                ></textarea>

                <div className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    id="contactConsent"
                    className="w-4 h-4 text-yellow-500 border-gray-300 rounded focus:ring-yellow-400"
                    required
                  />
                  <label htmlFor="contactConsent" className="text-gray-700">
                    I agree to be contacted.
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-3 rounded-md transition"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
