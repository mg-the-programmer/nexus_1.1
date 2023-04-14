import { useEffect, useState } from "react";
import TagSection from "../../components/TagSection.js";
import ToggleButton from "react-toggle-button";
import { FaGithub } from "react-icons/fa";
import axios from "axios";

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
  const [jobSuccessRate, setJobSuccessRate] = useState("99");
  const [user_id, setUserId] = useState("");

  useEffect(() => {
    axios.get("/auth").then((res) => {
      if (res.data === "not verified") {
        window.location.href = "/signin";
      } else {
        console.log(res.data);
        setUserId(res.data._id);
        axios.get("/freelancerDetails").then((res) => {
          console.log(res.data);
          setName(res.data.name);
          setEmail(res.data.email);
          setRate(res.data.rate);
          setIsAvailable(res.data.isAvailable);
          setGithubLink(res.data.githubLink);
          setExperience(res.data.experience);
          setJobTitle(res.data.jobTitle);
          setDescription(res.data.description);
          setJobSuccessRate(res.data.jobSuccess);
        });
      }
    });
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();

    axios
      .post("/freelancer/info", {
        name,
        email,
        skills,
        rate,
        resume,
        isAvailable,
        githubLink,
        experience,
        jobTitle,
        description,
        jobSuccessRate,
        user_id,
      })
      .then((res) => {
        alert("Freelancer added successfully");
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleTagsChange = (newSkills) => {
    setSkills([...newSkills]);
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
        <label htmlFor="name" className="mb-2 block font-bold text-gray-700">
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
        <label htmlFor="email" className="mb-2 block font-bold text-gray-700">
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
      <div className="">
        <label className="mb-2 block font-bold text-gray-700">Job Title</label>
        <input
          type="text"
          className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 focus:outline-none"
          value={jobTitle}
          onChange={(event) => setJobTitle(event.target.value)}
        />
      </div>
      <div className="">
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
      <div>
        <label htmlFor="skills" className="mb-2 block font-bold text-gray-700">
          Skills
        </label>
        <TagSection onTagsChange={handleTagsChange} />
      </div>
      <div>
        <label htmlFor="rate" className="mb-2 block font-bold text-gray-700">
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
        <label htmlFor="resume" className="mb-2 block font-bold text-gray-700">
          Resume
        </label>
        <input
          type="file"
          id="resume"
          name="resume"
          onChange={handleResumeChange}
          className="w-full rounded-md border p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>
      <div className="">
        <label className="mb-2 block font-bold text-gray-700">
          Availability
        </label>
        <div className="flex gap-x-2">
          <ToggleButton
            value={isAvailable}
            onToggle={() => setIsAvailable(!isAvailable)}
          />

          <span className="font-medium text-gray-700 ">
            {isAvailable ? "Available" : "Unavailable"}
          </span>
        </div>
      </div>
      <div className="">
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
      <div className="">
        <label className="mb-2 block font-bold text-gray-700">Experience</label>
        <input
          type="text"
          className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 focus:outline-none"
          value={experience}
          onChange={(event) => setExperience(event.target.value)}
        />
      </div>
      <div className="">
        <label className="mb-2 block font-bold text-gray-700">
          Job Success Rate
        </label>
        <input
          type="number"
          className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 focus:outline-none"
          value={jobSuccessRate}
          onChange={(event) => setJobSuccessRate(event.target.value)}
        />
      </div>

      <button
        type="submit"
        className="w-full rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600">
        Submit
      </button>
    </form>
  );
}

export default FreelancerForm;
