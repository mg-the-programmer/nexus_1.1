import { useState } from "react";
import TagSection from "../components/TagSection";

function FreelancerForm({ darkmode }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [skills, setSkills] = useState([]);
  const [rate, setRate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(skills);
    // Send form data to server or do something else
  };

  const handleTagsChange = (newSkills) => {
    // console.log(tags);
    setSkills([...skills, newSkills]);
    // Do something with the tags array here
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto mt-8 flex max-w-md flex-col gap-y-4 px-5">
      <div className="">
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
      <div className="">
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
      <div className="">
        <label htmlFor="skills" className="mb-2 block font-medium">
          Skills
        </label>
        {/* <textarea
          id="skills"
          name="skills"
          value={skills}
          onChange={(e) => setSkills(e.target.value)}
          className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        /> */}
        <TagSection onTagsChange={handleTagsChange} />
      </div>
      <div className="">
        <label htmlFor="rate" className="mb-2 block font-medium">
          Rate (per hour)
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
      <button
        type="submit"
        className="w-full rounded-md bg-blue-500 py-2 px-4 text-white hover:bg-blue-600">
        Submit
      </button>
    </form>
  );
}

export default FreelancerForm;
