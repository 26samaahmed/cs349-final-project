import { Link } from 'react-router-dom';

function Project({ name, description, skills, url, link }) {
  return (
    <div className="text-white bg-[#FCC1C1] p-5 rounded-md m-10 w-auto">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl underline mr-10">{name}</h1>
        <ul className="flex flex-wrap gap-5">
          {skills.map((skill, index) => (
            <li
              key={index}
              className="bg-white text-sm text-[#C72D2D] rounded-full w-36 p-1 text-center"
            >
              {skill}
            </li>
          ))}
        </ul>
      </div>
      <p className="text-xl text-left mb-4">* {description}</p>
      <div className="flex justify-between items-center">
        <a href={url} target="_blank" rel="noreferrer" className="text-[#C72D2D] hover:text-white underline">Project Link</a>
        <Link 
          to={link} 
          className="text-[#C72D2D] hover:text-white hover:underline"
        > Learn More </Link>
      </div>
    </div>
  );
}

function Projects() {
  const projects = [
    {
      name: 'acmcsuf.com',
      description: 'A website for the Association for Computing Machinery at California State University, Fullerton with 50+ contributers that shows information about the club, events, and resources.',
      skills: ['SvelteKit', 'TypeScript'],
      url: 'https://acmcsuf.com',
      link: '/projects/acmcsuf',
    },
    {
      name: 'FullyBeyond',
      description: 'A website for CSUF\'s first student-led designathon that shows information about the event like the schedule, sponsors, and judges developed with 4 other team members.',
      skills: ['SvelteKit', 'TailwindCSS'],
      url: 'https://fullybeyond.acmcsuf.com',
      link: '/projects/fullybeyond',
    },
    {
      name: 'Concert Tracker',
      description: 'A website where users can search for concerts by city name and month and see the upcoming concerts in that city.',
      skills: ['SvelteKit', 'TicketMaster API'],
      url: 'https://concert-tracker.vercel.app/',
      link: '/projects/concerttracker',
    },
  ];

  return (
    <div>
      {projects.map((project, index) => (
        <Project
          key={index}
          name={project.name}
          description={project.description}
          skills={project.skills}
          url={project.url}
          link={project.link}
        />
      ))}
    </div>
  );
}

export default Projects;
