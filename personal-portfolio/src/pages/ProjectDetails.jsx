import { useParams } from "react-router-dom";
import project1Img1 from '../assets/project1_1.png';
import project1Img2 from '../assets/project1_2.png';
import project1Img3 from '../assets/project1_3.png';
import project1Img4 from '../assets/project1_4.png';
import project2Img1 from '../assets/project2_1.png';
import project2Img2 from '../assets/project2_2.png';
import project2Img3 from '../assets/project2_3.png';
import project2Img4 from '../assets/project2_4.png';
import project3Img1 from '../assets/project3_1.png';
import project3Img2 from '../assets/project3_2.png';
import project3Img3 from '../assets/project3_3.png';
import project3Img4 from '../assets/project3_4.png';


const projectData = {
  acmcsuf: {
    name: 'acmcsuf.com',
    description: 'A website for the Association for Computing Machinery at California State University, Fullerton with 50+ contributers that shows information about the club, events, and resources.',
    challenges: 'It was my first time being a project manager for such a big project that had 60+ contributers. My knowledge of SvelteKit and TypeScript was limited so I had to learn a lot during the summer to be able to lead the project and help more students contribute to the project',
    outcome: 'I learned a lot a lot more about SvelteKit and TypeScript and how to manage my time with setting up meetings and helping students contribute to the project. ',
    skills: ['SvelteKit', 'TypeScript'],
    url: 'https://acmcsuf.com',
    screenshots: [project1Img1, project1Img2, project1Img3, project1Img4],
  },
  fullybeyond: {
    name: 'FullyBeyond',
    description: 'A website for CSUF\'s first student-led designathon that shows information about the event like the schedule, sponsors, and judges developed with 4 other team members.',
    challenges: 'This was the first project I worked on using SvelteKit and TailwindCSS. I volunteered to lead a team of 4 people to build the website for the event and we spent all summer working on it. It was sometimes hard to lead because I was still learning the technologies myself.',
    outcome: 'I learned that Tailwind makes styling websites so much easier and how to efficiently manage the team to get the project done on time.',
    skills: ['SvelteKit', 'TailwindCSS'],
    url: 'https://fullybeyond.acmcsuf.com',
    screenshots: [project2Img1, project2Img2, project2Img3, project2Img4],
  },
  concerttracker: {
    name: 'Concert Tracker',
    description: 'A website where users can search for concerts by city name and month and see the upcoming concerts in that city.',
    challenges: 'This was my second personal project which I used to learn about SvelteKit and how to use APIs. I started the project in May and it took me a few months to understand how to use APIs especially the TicketMaster API. It was a lot of trial and error to get the data to display correctly.',
    outcome: 'I learned how to use APIs and how to display the data on the website in a way that was easy to read and understand. I also learned how to use SvelteKit to create a website that was fast and responsive.',
    skills: ['SvelteKit', 'TicketMaster API'],
    url: 'https://concert-tracker.vercel.app/',
    screenshots: [project3Img1, project3Img2, project3Img3, project3Img4],
  },
};

function ProjectDetails() {
  const { projectId } = useParams(); // Destructure the projectId from the URL
  const project = projectData[projectId]; // Get the project data based on the projectId

  return (
    <div className="text-[#C72D2D]  bg-[#FCC1C1] p-5 rounded-md m-1 mb-5 md:m-10 w-auto text-left">
      <div className="flex flex-col md:flex-row md:justify-between items-start mb-4">
        <h1 className="text-xl md:text-4xl mb-4">{project.name}</h1>
        <ul className="flex flex-wrap gap-5 mb-4">
          {project.skills.map((skill, index) => (
            <li
              key={index}
              className="bg-white text-sm text-[#C72D2D] rounded-full w-24 md:w-36 p-1 text-center"
            >
              {skill}
            </li>
          ))}
        </ul>
      </div>
      <p className="text-sm md:text-lg mb-4"><span className="font-semibold underline">Description</span>: {project.description}</p>
      <p className="text-sm md:text-lg mb-4"><span className="font-semibold underline">Challenges</span>: {project.challenges}</p>
      <p className="text-sm md:text-lg mb-4"><span className="font-semibold underline">Outcome</span>: {project.outcome}</p>
      <div className="text-sm md:text-lg mb-4">
        <a href={project.url} target="_blank" rel="noreferrer" className="font-semibold underline text-[#C72D2D]">Project Link</a>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
        {project.screenshots.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`${project.name} screenshot ${index + 1}`}
            className="rounded-md mb-5 h-full w-full object-cover"
          />
        ))}
      </div>
    </div>
  );
}

export default ProjectDetails;