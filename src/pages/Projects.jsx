import { useState } from "react";
import project1 from "../assets/SLOW-ARC.png"; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faKaggle } from "@fortawesome/free-brands-svg-icons";

const projects = [
  {
    id: 1,
    title: "SLOW-ARC",
    image: project1,
    description: "Collaborated with Minnesota Softball program umpires to design a replay system using a three-camera setup, and analyzed video data of pitchers to accurately determine whether a softball pitch was a strike or ball"
  },
  {
    id: 2,
    title: "Inclusive UMN",
    image: project1,
    description: "Designed a dashboard integrated with a SQL database and CSV data to catalog, display, and manage accessibility barriers across the University of Minnesota campus, emphasizing accessible data display. Coordinated with the Disability Resource Center and Facilities Management to gather requirements, align project deliverables with organizational goals, and document them in a comprehensive Work Breakdown Structure (WBS).",
    github: "https://github.com/nupurkumark/InclusiveUMN"
  },
  {
    id: 3,
    title: "Google Maps API Photo Journal",
    image: project1,
    description: "Utilized the Google Maps API to keep track of all the places I have traveled.",
    github: "https://github.com/nupurkumark"
  },
  {
    id: 4,
    title: "PHEMS Hackathon",
    image: project1,
    description: "Competed in a Kaggle hackathon, developing a LightGBM model to predict sepsis using 130K+ patient records. Placed 53rd out of 171.",
    kaggle: "https://www.kaggle.com/competitions/phems-hackathon-early-sepsis-prediction/leaderboard?search=nupurkumark"
  },
  {
    id: 5,
    title: "Digit Recognizer",
    image: project1,
    description: "A machine learning model that predicts heart disease using patient data and various classification algorithms.",
  }
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold">My Projects</h1>
      <hr className="my-2 border-t-2 border-gray-300 w-20 mb-5" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div key={project.id} className="rounded-xl shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition">
            <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold hover:underline hover:text-gray-600 transition duration-200 cursor-pointer" onClick={() => setSelectedProject(project)}>
                  {project.title}
                </h2>
                {project.kaggle && (
                  <a href={project.kaggle} target="_blank" rel="noopener noreferrer" className="group inline-flex space-x-1 hover:text-gray-600 transition duration-200">
                    <FontAwesomeIcon icon={faKaggle} style={{fontSize: "22px" }} />
                  </a>
                )}
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="group inline-flex space-x-1 hover:text-gray-600 transition duration-200">
                    <FontAwesomeIcon icon={faGithub} style={{fontSize: "22px" }} />
                  </a>
                )}
              </div>
            </div>
          </div> 
        ))}
      </div>
 
      {selectedProject && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-xl max-w-md w-full shadow-xl relative">
            <button
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
              onClick={() => setSelectedProject(null)}
            >
              ✕
            </button>
            <h2 className="text-xl font-bold text-[#004aad] mb-2">{selectedProject.title}</h2>
            <p className="text-sm text-gray-700">{selectedProject.description}</p>
          </div>
        </div>
      )}
    </div>
  );
}

