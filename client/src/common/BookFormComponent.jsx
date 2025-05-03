import React from "react";

const BookFormComponent = ({
  book = {},
  handleChange = () => {},
  handleSubmit = () => {},
  showTitle = true,
  disableFields = {},
}) => {
  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 border border-gray-300 p-6 rounded-lg max-w-xl mx-auto"
    >
      {showTitle && <h2 className="text-xl font-semibold">Book Details</h2>}

      <input
        type="text"
        name="title"
        placeholder="Title"
        value={book.title || ""}
        onChange={handleChange}
        disabled={disableFields.title}
        className="w-full px-4 py-2 border border-gray-300 rounded-md"
      />

      <input
        type="text"
        name="genre"
        placeholder="Genre"
        value={book.genre || ""}
        onChange={handleChange}
        disabled={disableFields.genre}
        className="w-full px-4 py-2 border border-gray-300 rounded-md"
      />

      <input
        type="date"
        name="publicationDate"
        value={book.publicationDate?.split("T")[0] || ""}
        onChange={handleChange}
        disabled={disableFields.publicationDate}
        className="w-full px-4 py-2 border border-gray-300 rounded-md"
      />

      <input
        type="number"
        name="price"
        placeholder="Price"
        value={book.price || ""}
        onChange={handleChange}
        disabled={disableFields.price}
        className="w-full px-4 py-2 border border-gray-300 rounded-md"
      />

      <textarea
        name="description"
        placeholder="Description"
        value={book.description || ""}
        onChange={handleChange}
        disabled={disableFields.description}
        className="w-full px-4 py-2 border border-gray-300 rounded-md"
      ></textarea>

      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
      >
        Submit
      </button>
    </form>
  );
};

export default BookFormComponent;
