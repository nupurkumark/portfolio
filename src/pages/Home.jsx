// dark blue font hex: #004aad
// light blue font hex: #38b6ff

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faGraduationCap, faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin, faKaggle } from "@fortawesome/free-brands-svg-icons";
import "./Home.css";
import me from "../assets/me-with-sign.jpg"; 

const timeline = [ 
  {
    icon: faGraduationCap,
    title: "M.S. Data Science in Operations Research",
    place: "University of Minnesota",
    date: "Starting Fall 2025!",
  },
  {
    icon: faBriefcase,
    title: "Tech Aide",
    place: "3M",
    date: "April 2025 - Present",
  },
  {
    icon: faBriefcase,
    title: "Clinical Data Science Intern",
    place: "Respiratory Sciences Inc.",
    date: "Summer 2024",
  },
  {
    icon: faBriefcase,
    title: "STEM Teacher",
    place: "Tech Academy",
    date: "Summers 2022 & 2023",
  },
  {
    icon: faGraduationCap,
    title: "B.S. Data Science",
    place: "University of Minnesota",
    date: "Fall 2020 - Fall 2024",
  },
];

export default function Home() {
  return (
    <div className="p-15"> 
      <div className="flex flex-col lg:flex-row items-start justify-between"> {/* First Row: About Me and Picture */}
        <div className="w-full lg:w-1/2"> {/* About Me */}
          <h1 className="text-2xl font-bold">About Me</h1>
          <hr className="my-2 border-t-2 border-gray-300 w-20" />
          <p className="text-lg">
            Hi, I'm Nupur! I'm an incoming Master's student University of Minnesota - Twin Cities studying Data Science in Operations Research (DSOR). 
            I'm eager to expand my knowledge in tech, as there's always something new to learn. Ultimately, I aspire to work in a data science role
            either in big tech or the healthcare industry. I created this website as a personal diary to document my passions and track my growth over time.
            Check out my <a href="https://drive.google.com/file/d/1Rc1a-p-snURifHrtbSyqwfCIh7uWx-2m/view?usp=sharing" 
            target="_blank" rel="noopener noreferrer" className="text-[#004aad] underline hover:text-[#38b6ff] transition duration-200">
              resume
            </a> if you'd like to learn more about my professional experiences. Feel free to reach out if you'd like to collaborate on a project.
          </p>
          <div className="mt-3">
            <div className="flex flex-col space-y-4">
              <div className="flex space-x-4">
                <a href="mailto:kumarnupurk@gmail.com" target="_blank" rel="noopener noreferrer" className="group inline-flex space-x-2 hover:text-gray-600 transition duration-200">
                  <FontAwesomeIcon icon={faEnvelope} style={{ fontSize: "22px" }} />
                  <span className="underline">kumarnupurk@gmail.com</span>
                </a>
                <a href="https://github.com/nupurkumark" target="_blank" rel="noopener noreferrer" className="group inline-flex space-x-2 hover:text-gray-600 transition duration-200">
                  <FontAwesomeIcon icon={faGithub} style={{ fontSize: "22px" }} />
                  <span className="underline">/nupurkumark</span>
                </a>
              </div>
              <div className="flex space-x-4">
                <a href="https://www.linkedin.com/in/nupurkumar1/" target="_blank" rel="noopener noreferrer" className="group inline-flex space-x-2 hover:text-gray-600 transition duration-200">
                  <FontAwesomeIcon icon={faLinkedin} style={{ fontSize: "22px" }} />
                  <span className="underline">/in/nupukumar1</span>
                </a>
                <a href="https://www.kaggle.com/nupurkumark" target="_blank" rel="noopener noreferrer" className="group inline-flex space-x-2 hover:text-gray-600 transition duration-200">
                  <FontAwesomeIcon icon={faKaggle} style={{ fontSize: "22px" }} />
                  <span className="underline">/nupurkumark</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div> {/* Picture */}
          {/* <img src={me} alt="me" className="h-100" /> */}
          <div className="me mt-8 mr-15 lg:mt-8 lg:mr-15"></div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row items-start justify-between mt-20"> {/* Second Row: Vertical Timeline */}
        <div className="w-full lg:w-1/2"> {/* Timeline on the Left */}
          <h1 className="text-2xl font-bold">Experience</h1>
          <hr className="my-2 border-t-2 border-gray-300 w-20" />

          <div className="relative mt-10"> {/* Vertical center line */}
            <div className="absolute left-1/2 top-0 h-full w-1 bg-[#38b6ff] transform -translate-x-1/2 z-0"></div>
            {timeline.map((item, index) => {
              const isLeft = index % 2 === 0;
              return (
                <div
                  key={index}
                  className="relative mb-12 flex justify-between items-center w-full"
                >
                  {/* Left Side */}
                  {isLeft ? (
                    <>
                      <div className="w-1/2 pr-10 flex justify-end text-right">
                        <div>
                          <p className="font-bold text-sm">{item.title}</p>
                          <p className="text-xs text-gray-700">{item.place}</p>
                          <p className="text-xs text-gray-500">{item.date}</p>
                        </div>
                      </div>
                      <div className="absolute left-1/2 transform -translate-x-1/2 bg-white z-10 p-2 rounded-full shadow-md">
                        <FontAwesomeIcon icon={item.icon} style={{ fontSize: "20px", color: "#004aad" }} />
                      </div>
                      <div className="w-1/2" />
                    </>
                  ) : (
                    <>
                      <div className="w-1/2" />
                      <div className="absolute left-1/2 transform -translate-x-1/2 bg-white z-10 p-2 rounded-full shadow-md">
                        <FontAwesomeIcon icon={item.icon} style={{ fontSize: "20px", color: "#004aad" }} />
                      </div>
                      <div className="w-1/2 pl-10 flex justify-start text-left">
                        <div>
                          <p className="font-bold text-sm">{item.title}</p>
                          <p className="text-xs text-gray-700">{item.place}</p>
                          <p className="text-xs text-gray-500">{item.date}</p>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-10 lg:mt-14 lg:ml-10 w-full lg:w-1/2"> {/* Paragraph on the Right (aligned with top of timeline) */}
          <p className="text-lg">
            My path into data science has been driven by a strong interest in transforming raw data into actionable insights through compelling visualizations. 
            Storytelling is important to me as a data scientist because it helps turn complex data into clear insights for a non-technical audience.
            Each role I've worked has deepened my understanding of the power of data. From teaching STEM to young students and teahing them how to code to 
            interning at biomedical startup where I developed a prototype web app with meaningful visualizations for users to interpret quickly.
            Currently I work at 3M as a tech aide where I collaborate with researchers to conduct experiements and analyze data on various product and technology 
            development projects. It has been a great experience so far and I have learned and developed so many new skills.
          </p>
          <p className="text-lg mt-3">
            I'm especially interested in the intersection of healthcare and technology, and I plan to keep exploring how data science can 
            support better decisions in critical domains. Graduate school is the next step on that journey. 
          </p>
        </div>
      </div>
    </div>
  );
}

