import { Link } from 'react-router-dom';

function Project({ name, description, skills, link }) { 
  return (
    <div className="text-white bg-[#FCC1C1] bg-opacity-100 p-5 rounded-md m-10 w-auto">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl">{name}</h1>
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
      <p className="text-xl text-left mb-4">{description}</p>
      <div className="text-right">
        <Link 
          to={link}
          className="text-[#C72D2D] underline"
        >
          Learn More
        </Link>
      </div>
    </div>
  );
}

function Projects() {
  const projects = [
    {
      name: 'acmcsuf.com',
      description: 'A website for the Association for Computing Machinery at California State University, Fullerton with 50+ contributers that shows information about the club, events, and resources. As the webmaster, I am responsible for maintaining the website and updating it with new information.',
      skills: ['SvelteKit', 'TypeScript'],
      link: '/projects/acmcsuf'
    },
    {
      name: 'FullyBeyond',
      description: 'A website for CSUF\'s first student-led designathon that shows information about the event like the schedule, sponsors, and judges developed with 4 other team members.',
      skills: ['SvelteKit', 'TailwindCSS'],
      link: '/projects/fullybeyond'
    },
    {
      name: 'Concert Tracker',
      description: 'A website where users can search for concerts by city name and month and see the upcoming concerts in that city.',
      skills: ['SvelteKit', 'HTML/CSS', 'TicketMaster API'],
      link: '/projects/concerttracker'
    }
  ]
  return (
    <div>
      {projects.map((project, index) => (
        <Project key={index} name={project.name} description={project.description} skills={project.skills} link={project.link} />
      ))}
    </div>
  );
}

export default Projects;
