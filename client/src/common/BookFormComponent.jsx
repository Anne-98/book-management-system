import React from "react";

const BookFormComponent = ({
  book = {},
  handleChange = () => {},
  handleSubmit = () => {},
  showTitle = true,
  disableFields = {},
  genres = [],
  header = ""
}) => {
  console.log("genres 2: ", header);
  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 border border-gray-300 p-6 rounded-lg max-w-xl mx-auto"
    >
    
    <h2 className="text-xl font-semibold text-gray-900">{header}</h2>

      <input
        type="text"
        name="title"
        placeholder="Title"
        value={book.title || ""}
        onChange={handleChange}
        disabled={disableFields.title}
        className="w-full px-4 py-2 border border-gray-300 rounded-md"
      />

      {genres.length > 0 && !disableFields?.genres && (
        <div className="mb-4">
          <select
            name="genre"
            onChange={handleChange}
            value={book.genre}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
          >
            <option value="">Select a genre</option>
            {genres.map((genre) => (
              <option key={genre._id} value={genre._id}>
                {genre.name}
              </option>
            ))}
          </select>
        </div>
      )}

      {!disableFields.author && (
        <input
          type="text"
          name="author"
          placeholder="Author"
          value={book.author}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-md"
        />
      )}
      {!disableFields.genre && (
        <input
          type="text"
          name="genre"
          placeholder="Genre"
          value={book.genre || ""}
          onChange={handleChange}
          disabled={disableFields.genre}
          className="w-full px-4 py-2 border border-gray-300 rounded-md"
        />
      )}

      {!disableFields.publicationDate && (
        <input
          type="date"
          name="publicationDate"
          value={book.publicationDate?.split("T")[0] || ""}
          onChange={handleChange}
          disabled={disableFields.publicationDate}
          className="w-full px-4 py-2 border border-gray-300 rounded-md"
        />
      )}

      {!disableFields.price && (
        <input
          type="number"
          name="price"
          placeholder="Price"
          value={book.price || ""}
          onChange={handleChange}
          disabled={disableFields.price}
          className="w-full px-4 py-2 border border-gray-300 rounded-md"
        />
      )}

      {!disableFields.description && (
        <textarea
          name="description"
          placeholder="Description"
          value={book.description || ""}
          onChange={handleChange}
          disabled={disableFields.description}
          className="w-full px-4 py-2 border border-gray-300 rounded-md"
        ></textarea>
      )}

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
