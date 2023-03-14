import { useState } from "react";
import TagSection from "../../components/TagSection.js";
import ToggleButton from "react-toggle-button";
import { FaGithub } from "react-icons/fa";

function FreelancerForm({ darkmode }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [skills, setSkills] = useState([]);
  const [rate, setRate] = useState("");
  const [resume, setResume] = useState(null);
  const [isAvailable, setIsAvailable] = useState(false);
  const [githubLink, setGithubLink] = useState("");
  const [experience, setExperience] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(JSON.stringify({ name, email, skills, rate, resume }, null, 2));
    // Send form data to server or do something else
  };

  const handleTagsChange = (newSkills) => {
    setSkills([...skills, newSkills]);
    // Do something with the tags array here
  };

  const handleResumeChange = (e) => {
    const file = e.target.files[0];
    setResume(file);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col max-w-md px-5 mx-auto mt-8 gap-y-4">
      <div>
        <label htmlFor="name" className="block mb-2 font-medium">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        />
      </div>
      <div>
        <label htmlFor="email" className="block mb-2 font-medium">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        />
      </div>
      <div>
        <label htmlFor="skills" className="block mb-2 font-medium">
          Skills
        </label>
        <TagSection onTagsChange={handleTagsChange} />
      </div>
      <div>
        <label htmlFor="rate" className="block mb-2 font-medium">
          Rate (per hour) in $
        </label>
        <input
          type="number"
          id="rate"
          name="rate"
          value={rate}
          onChange={(e) => setRate(e.target.value)}
          className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        />
      </div>
      <div>
        <label htmlFor="resume" className="block mb-2 font-medium">
          Resume
        </label>
        <input
          type="file"
          id="resume"
          name="resume"
          onChange={handleResumeChange}
          className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        />
      </div>
      <div className="mb-6">
        <label className="block mb-2 font-bold text-gray-700">
          Availability
        </label>
        <ToggleButton
          value={isAvailable}
          onToggle={(value) => setIsAvailable(value)}
        />
        <span className="ml-2 text-gray-700">
          {isAvailable ? "Available" : "Unavailable"}
        </span>
      </div>
      <div className="mb-6">
        <label className="block mb-2 font-bold text-gray-700">
          GitHub Link
        </label>
        <div className="flex items-center">
          <FaGithub className="mr-2" size={25} />
          <input
            type="url"
            placeholder="https://github.com/your-username"
            className="w-full px-3 py-2 leading-tight text-gray-700 border rounded appearance-none focus:shadow-outline focus:outline-none"
            value={githubLink}
            onChange={(event) => setGithubLink(event.target.value)}
          />
        </div>
      </div>
      <div className="mb-6">
        <label className="block mb-2 font-bold text-gray-700">Experience</label>
        <input
          type="text"
          className="w-full px-3 py-2 leading-tight text-gray-700 border rounded appearance-none focus:shadow-outline focus:outline-none"
          value={experience}
          onChange={(event) => setExperience(event.target.value)}
        />
      </div>
      <div className="mb-6">
        <label className="block mb-2 font-bold text-gray-700">Job Title</label>
        <input
          type="text"
          className="w-full px-3 py-2 leading-tight text-gray-700 border rounded appearance-none focus:shadow-outline focus:outline-none"
          value={jobTitle}
          onChange={(event) => setJobTitle(event.target.value)}
        />
      </div>
      <div className="mb-6">
        <label className="block mb-2 font-bold text-gray-700">
          Description
        </label>
        <textarea
          className="w-full px-3 py-2 leading-tight text-gray-700 border rounded appearance-none focus:shadow-outline focus:outline-none"
          rows="4"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />
      </div>
      <button
        type="submit"
        className="w-full px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600">
        Submit
      </button>
    </form>
  );
}

export default FreelancerForm;