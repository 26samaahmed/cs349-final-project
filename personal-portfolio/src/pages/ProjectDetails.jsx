import { useParams } from "react-router-dom";
import project1Img1 from '../assets/project1_1.png';
import project1Img2 from '../assets/project1_2.png';
import project1Img3 from '../assets/project1_3.png';
import project1Img4 from '../assets/project1_4.png';
import project2Img1 from '../assets/project2_1.png';
import project2Img2 from '../assets/project2_2.png';
import project2Img3 from '../assets/project2_3.png';
import project2Img4 from '../assets/project2_4.png';



const projectData = {
  acmcsuf: {
    name: 'acmcsuf.com',
    description: 'A website for the Association for Computing Machinery at CSUF...',
    challenges: 'The site was built using SvelteKit, which was a new framework for me...',
    outcome: 'I learned a lot about SvelteKit and TypeScript...',
    skills: ['SvelteKit', 'TypeScript'],
    screenshots: [project1Img1, project1Img2, project1Img3, project1Img4],
  },
  fullybeyond: {
    name: 'FullyBeyond',
    description: 'CSUF\'s first student-led designathon...',
    challenges: 'The site was built using SvelteKit, which was a new framework for me...',
    outcome: 'I learned a lot about SvelteKit and TypeScript...',
    skills: ['SvelteKit', 'TailwindCSS'],
    screenshots: [project2Img1, project2Img2, project2Img3, project2Img4],
  },
  concerttracker: {
    name: 'Concert Tracker',
    description: 'Search for concerts by city and month...',
    challenges: 'The site was built using SvelteKit, which was a new framework for me...',
    outcome: 'I learned a lot about SvelteKit and TypeScript...',
    skills: ['SvelteKit', 'HTML/CSS', 'TicketMaster API'],
    screenshots: [],
  },
};

function ProjectDetails() {
  const { projectId } = useParams(); // Destructure the projectId from the URL
  const project = projectData[projectId]; // Get the project data based on the projectId

  return (
    <div className="text-[#C72D2D] bg-[#FCC1C1] p-5 rounded-md m-10 w-auto text-left">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-4xl mb-4">{project.name}</h1>
        <ul className="flex flex-wrap gap-5 mb-4">
          {project.skills.map((skill, index) => (
            <li
              key={index}
              className="bg-white text-sm text-[#C72D2D] rounded-full w-36 p-1 text-center"
            >
              {skill}
            </li>
          ))}
        </ul>
      </div>
      <p className="text-xl mb-4"><span className="font-semibold underline">Description</span>: {project.description}</p>
      <p className="text-lg mb-4"><span className="font-semibold underline">Challenges</span>: {project.challenges}</p>
      <p className="text-lg mb-4"><span className="font-semibold underline">Outcome</span>: {project.outcome}</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {project.screenshots.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`${project.name} screenshot ${index + 1}`}
            className="rounded-md mb-5 h-64 lg:h-96 w-full object-cover"
          />
        ))}
      </div>
    </div>
  );
}

export default ProjectDetails;