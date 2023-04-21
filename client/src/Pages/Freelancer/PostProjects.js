import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import TagSection from "../../components/TagSection";
import axios from "axios";

export default function PostJob() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [url, setUrl] = useState("");
  const [tags, settags] = useState("");
  const [creator_id, setcreatorId] = useState("");
  const [creator, setcreator] = useState("");

  useEffect(() => {
    axios.get("/auth").then((res) => {
      if (res.data === "not verified") {
        window.location.href = "/signin";
      } else {
        console.log(res.data);
        setcreatorId(res.data._id);
        setcreator(res.data.firstName);
        console.log(res.data.firstName);
      }
    });
  }, []);
  const handleTagsChange = (newSkills) => {
    settags([...newSkills]);
    // Do something with the tags array here
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    axios
      .post("/postProjects", {
        title,
        description,
        creator,
        creator_id,
        tags,
      })
      .then((res) => {
        alert("Project Posted successfully");
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    // Do something with the form here
  };

  return (
    <>
      <Header title="Post Projects" />
      <div className="mx-auto max-w-6xl">
        <div>
          <div className=" md:grid md:grid-cols-3 md:gap-6">
            <div className="md:col-span-1">
              <div className="sticky top-20 p-5 sm:p-5 sm:pb-0 ">
                <h1 className="text-4xl font-bold text-gray-900">
                  Let's turn your personal projects into reality!
                </h1>
                <p className="mt-3 text-base text-gray-600">
                  Here you can post your projects and let the clients know how
                  much rizz you have .
                </p>

                <svg
                  width="211"
                  height="198"
                  viewBox="0 0 211 198"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M86.3286 76.5018C77.4972 73.7464 72.4715 77.3419 65.6437 77.5435C60.2822 77.7115 43.6268 72.9848 38.1086 86.28C35.87 91.7571 34.4149 103.316 34.5716 114.819C34.7171 126.558 35.5342 137.658 43.5261 139.326C52.9171 141.298 70.8544 141.617 83.1892 141.841"
                    stroke="#0E0E0F"
                    stroke-width="1.2"
                    stroke-miterlimit="10"></path>
                  <path
                    d="M126.033 94.5724C126.033 94.5724 134.203 91.9572 136.528 91.0415C138.853 90.1257 139.488 88.7087 138.475 88.1885C137.462 87.6682 123.502 91.5092 123.502 91.5092C123.502 91.5092 124.698 90.9849 126.404 90.2167C129.881 88.6194 131.46 87.1726 130.982 86.3879C130.504 85.6033 129.166 86.134 128.241 86.3505C128.241 86.3505 118.092 88.945 116.231 92.0945C114.371 95.244 105.718 126.022 105.718 126.022L98.1739 96.2715"
                    stroke="#222325"
                    stroke-width="1.5"
                    stroke-miterlimit="10"></path>
                  <path
                    d="M136.744 90.965C139.312 90.3109 142.17 89.1939 142.658 90.5709C142.984 91.4349 141.103 92.7433 136.591 94.4431C132.078 96.1429 127.231 97.5551 127.231 97.5551"
                    stroke="#222325"
                    stroke-width="1.5"
                    stroke-miterlimit="10"></path>
                  <path
                    d="M138.418 93.7242C139.718 93.5842 140.248 95.0196 137.653 96.5039C135.059 97.9881 125.077 102.3 125.077 102.3L119.308 141.381"
                    stroke="#222325"
                    stroke-width="1.5"
                    stroke-miterlimit="10"></path>
                  <g clip-path="url(#clip0_5839_174458)">
                    <path
                      d="M97.0807 137.978C100.387 139.146 103.706 140.649 105.15 140.998C106.594 141.348 107.738 140.746 106.226 139.534C104.606 138.366 102.876 137.357 101.062 136.522"
                      stroke="#232426"
                      stroke-width="1.5"
                      stroke-miterlimit="10"></path>
                    <path
                      d="M87.5216 128.616C92.4486 127.875 96.8078 127.359 99.4387 128.817C99.4387 128.817 104.555 131.707 107.151 133.288C110.15 135.124 110.318 136.73 108.798 136.602C106.824 136.446 100.508 132.993 99.304 132.502"
                      stroke="#232426"
                      stroke-width="1.5"
                      stroke-miterlimit="10"></path>
                    <path
                      d="M101.47 133.558C105.705 135.584 109.564 137.788 109.511 138.785C109.463 139.508 108.249 139.577 107.016 139.078C105.195 138.344 98.4456 135.378 98.4456 135.378"
                      stroke="#232426"
                      stroke-width="1.5"
                      stroke-miterlimit="10"></path>
                    <path
                      d="M102.71 140.14C105.118 141.631 103.299 142.793 99.1235 141.196C97.8142 140.736 96.4643 140.402 95.0924 140.2C92.0373 139.31 87.9697 139.398 83.2293 141.664"
                      stroke="#232426"
                      stroke-width="1.5"
                      stroke-miterlimit="10"></path>
                    <g clip-path="url(#clip1_5839_174458)">
                      <path
                        d="M192.216 119.498H149.849L134.975 151.502H177.342L192.216 119.498Z"
                        stroke="#232426"
                        stroke-width="1.5"
                        stroke-miterlimit="10"></path>
                      <path
                        d="M134.975 151.503H110.499V149.565L136.776 147.627L134.975 151.503Z"
                        stroke="#232426"
                        stroke-width="1.5"
                        stroke-miterlimit="10"></path>
                      <path
                        d="M163.598 138.752C161.87 138.752 160.468 137.353 160.468 135.626C160.468 133.9 161.87 132.5 163.598 132.5C165.327 132.5 166.729 133.9 166.729 135.626C166.729 137.353 165.327 138.752 163.598 138.752Z"
                        stroke="#232426"
                        stroke-width="1.5"
                        stroke-miterlimit="10"></path>
                    </g>
                  </g>
                  <path
                    d="M142.5 70L136.5 57"
                    stroke="#00BE6B"
                    stroke-width="1.5"
                    stroke-miterlimit="10"></path>
                  <path
                    d="M151.5 70L154.5 55"
                    stroke="#00BE6B"
                    stroke-width="1.5"
                    stroke-miterlimit="10"></path>
                  <path
                    d="M158.5 73L167.5 62"
                    stroke="#00BE6B"
                    stroke-width="1.5"
                    stroke-miterlimit="10"></path>
                  <path
                    d="M33.7235 106.971L51.9878 107.633V125.581L68.1073 127.417L87.6811 129.646L87.1466 103.893L100.043 99.9513C98.605 94.058 96.8426 88.25 94.7641 82.5543C92.4365 76.5007 87.9373 73.5694 81.6005 73.648C67.3566 73.8839 65.3631 74.2545 59.9283 74.3107C48.9252 74.4454 39.2028 74.3107 35.7059 87.2714C34.0832 93.7029 33.4151 100.342 33.7235 106.971Z"
                    fill="#222325"></path>
                  <path
                    d="M15.0059 141.838H139M200.1 141.838H181.5"
                    stroke="#232426"
                    stroke-width="1.5"
                    stroke-miterlimit="10"></path>
                  <path
                    d="M65.7241 65.9157C61.6192 67.7114 56.8353 65.8403 55.0389 61.7364C53.2426 57.6325 55.114 52.8499 59.2188 51.0542C63.3237 49.2585 68.1076 51.1296 69.904 55.2335C71.7004 59.3374 69.829 64.12 65.7241 65.9157Z"
                    stroke="#242526"
                    stroke-width="1.5"
                    stroke-miterlimit="10"></path>
                  <path
                    d="M63.1225 49.8579C63.1225 49.8579 67.0174 59.4379 59.5877 65.6501C59.5877 65.6501 53.0789 62.7144 54.656 57.7931C56.1294 52.635 60.7772 49.6144 63.1225 49.8579Z"
                    fill="#242526"></path>
                  <path
                    d="M54.2816 58.5164C50.7732 62.082 47.705 64.1495 41.1984 63.3694C34.6917 62.5893 29.3825 57.6589 22.2365 61.3652C15.9572 64.5473 20.8684 75.4543 28.668 76.6842C36.4676 77.9141 43.0751 75.1686 47.4501 71.0788C51.8251 66.9891 55.5044 59.432 55.5044 59.432"
                    fill="#242526"></path>
                  <defs>
                    <clipPath id="clip0_5839_174458">
                      <rect
                        width="98.8518"
                        height="83.2353"
                        fill="white"
                        transform="matrix(0.806074 0.591815 -0.592027 0.805918 129.066 72.0605)"></rect>
                    </clipPath>
                    <clipPath id="clip1_5839_174458">
                      <rect
                        width="83"
                        height="33"
                        fill="white"
                        transform="matrix(-1 0 0 1 193 119)"></rect>
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </div>
            <div className="mt-5 md:col-span-2 md:mt-0">
              <form onSubmit={handleSubmit}>
                <div className="p-6 shadow sm:overflow-hidden sm:rounded-md ">
                  <div className="mb-2 -mt-1 flex rounded-md shadow-sm">
                    <span className="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-sm text-gray-500">
                      https://
                    </span>
                    <input
                      type="text"
                      name="company-website"
                      id="company-website"
                      value={url}
                      onChange={(e) => setUrl(e.target.value)}
                      className="block w-full flex-1 rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      placeholder="www.example.com"
                    />
                  </div>
                  <div className="mb-2">
                    <label
                      htmlFor="title"
                      className="mb-2 block font-medium text-gray-700">
                      Title
                    </label>
                    <input
                      type="text"
                      id="title"
                      name="title"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      placeholder="Enter project title"
                      className="w-full rounded-md border border-gray-400 p-2"
                    />
                  </div>
                  <div className="mb-2">
                    <label
                      htmlFor="description"
                      className="mb-2 block font-medium text-gray-700">
                      Description
                    </label>
                    <textarea
                      id="description"
                      name="description"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      placeholder="Enter project description"
                      className="w-full rounded-md border border-gray-400 p-2"
                    />
                  </div>

                  <div className="mb-2">
                    <label
                      htmlFor="skills"
                      className="mb-2 block font-medium text-gray-700">
                      Tags
                    </label>
                    <TagSection
                      onTagsChange={handleTagsChange}
                      isPostJob={true}
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
