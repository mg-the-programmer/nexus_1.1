import { useState } from "react";
import TagSection from "../components/TagSection.js";
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
      className="mx-auto mt-8 flex max-w-md flex-col gap-y-4 px-5">
      <div>
        <label htmlFor="name" className="mb-2 block font-medium">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full rounded-md border p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        />
      </div>
      <div>
        <label htmlFor="email" className="mb-2 block font-medium">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full rounded-md border p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        />
      </div>
      <div>
        <label htmlFor="skills" className="mb-2 block font-medium">
          Skills
        </label>
        <TagSection onTagsChange={handleTagsChange} />
      </div>
      <div>
        <label htmlFor="rate" className="mb-2 block font-medium">
          Rate (per hour) in $
        </label>
        <input
          type="number"
          id="rate"
          name="rate"
          value={rate}
          onChange={(e) => setRate(e.target.value)}
          className="w-full rounded-md border p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        />
      </div>
      <div>
        <label htmlFor="resume" className="mb-2 block font-medium">
          Resume
        </label>
        <input
          type="file"
          id="resume"
          name="resume"
          onChange={handleResumeChange}
          className="w-full rounded-md border p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        />
      </div>
      <div className="mb-6">
        <label className="mb-2 block font-bold text-gray-700">
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
        <label className="mb-2 block font-bold text-gray-700">
          GitHub Link
        </label>
        <div className="flex items-center">
          <FaGithub className="mr-2" size={25} />
          <input
            type="url"
            placeholder="https://github.com/your-username"
            className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 focus:outline-none"
            value={githubLink}
            onChange={(event) => setGithubLink(event.target.value)}
          />
        </div>
      </div>
      <div className="mb-6">
        <label className="mb-2 block font-bold text-gray-700">Experience</label>
        <input
          type="text"
          className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 focus:outline-none"
          value={experience}
          onChange={(event) => setExperience(event.target.value)}
        />
      </div>
      <div className="mb-6">
        <label className="mb-2 block font-bold text-gray-700">Job Title</label>
        <input
          type="text"
          className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 focus:outline-none"
          value={jobTitle}
          onChange={(event) => setJobTitle(event.target.value)}
        />
      </div>
      <div className="mb-6">
        <label className="mb-2 block font-bold text-gray-700">
          Description
        </label>
        <textarea
          className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 focus:outline-none"
          rows="4"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />
      </div>
      <button
        type="submit"
        className="w-full rounded-md bg-blue-500 py-2 px-4 text-white hover:bg-blue-600">
        Submit
      </button>
    </form>
  );
}

export default FreelancerForm;
