import React from "react";

const UserAuthForm = ({
  formData = {},
  handleChange = () => {},
  handleSubmit = () => {},
  header = "",
  showFields = {
    firstName: true,
    lastName: true,
    phoneNumber: true,
    email: true,
    password: true,
  },
  disableFields = {},
}) => {
  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 border border-gray-300 p-6 rounded-lg max-w-md mx-auto shadow-md bg-white"
    >
      {header && (
        <h2 className="text-2xl font-bold text-center text-gray-800">
          {header}
        </h2>
      )}

      {showFields.firstName && (
        <div>
          <input
            name="firstName"
            type="text"
            value={formData.firstName}
            onChange={handleChange}
            disabled={disableFields.firstName}
            className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-200"
            placeholder="First Name"
            required
          />
        </div>
      )}

      {showFields.lastName && (
        <div>
          <input
            name="lastName"
            type="text"
            value={formData.lastName}
            onChange={handleChange}
            disabled={disableFields.lastName}
            className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-200"
            placeholder="Last Name"
            required
          />
        </div>
      )}

      {showFields.phoneNumber && (
        <div>
          <input
            name="phoneNumber"
            type="text"
            value={formData.phoneNumber}
            onChange={handleChange}
            disabled={disableFields.phoneNumber}
            className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-200"
            placeholder="Phone Number"
            required
          />
        </div>
      )}

      {showFields.email && (
        <div>
          <input
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            disabled={disableFields.email}
            className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-200"
            placeholder="Email"
            required
          />
        </div>
      )}

      {showFields.password && (
        <div>
          <input
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            disabled={disableFields.password}
            className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-200"
            placeholder="Password"
            required
          />
        </div>
      )}

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
      >
        {header}
      </button>
    </form>
  );
};

export default UserAuthForm;
