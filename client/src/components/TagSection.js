import { useState } from "react";

function TagSection({ onTagsChange }) {
  const [tags, setTags] = useState([]);
  
  const handleKeyDown = (e) => {
    if (e.key === "," || e.key === "Enter") {
      e.preventDefault();
      const newTag = e.target.value.trim();
      if (newTag !== "" && !tags.includes(newTag)) {
        const newTags = [...tags, newTag];
        setTags(newTags);
        onTagsChange(newTags); // Call the onTagsChange function and pass the new tags array
      }
      e.target.value = "";
    } else if (e.key === "Backspace" && e.target.value === "") {
      const newTags = tags.slice(0, -1);
      setTags(newTags);
      onTagsChange(newTags); // Call the onTagsChange function and pass the new tags array
    }
  };

  const handleDeleteTag = (tag) => {
    const newTags = tags.filter((t) => t !== tag);
    setTags(newTags);
  };

  return (
    <div className="flex flex-wrap items-center tags-container">
      {tags.map((tag) => (
        <div
          key={tag}
          className="flex items-center px-2 py-1 mb-2 mr-2 text-sm text-white bg-blue-500 rounded-md tag">
          <span>{tag}</span>
          <button
            onClick={() => handleDeleteTag(tag)}
            className="ml-2 text-xs font-medium focus:outline-none">
            &times;
          </button>
        </div>
      ))}
      <br />
      <textarea
        className="w-full p-2 px-2 py-1 border rounded-md tags-input focus:outline-none focus:ring-2 focus:ring-blue-400"
        placeholder="Add tags (separated by commas)"
        onKeyDown={handleKeyDown}
      />
    </div>
  );
}

export default TagSection;
