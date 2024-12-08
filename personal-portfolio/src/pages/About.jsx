import Resume from '../assets/Sama_Ahmed_2024_Resume.pdf';

function About() {
  return (
    <div className="text-white text-left bg-opacity-100 rounded-md m-10">
      <p className="text-2xl mb-10">I’m Sama, an Egyptian-American student currently in my third year, set to graduate in Spring 2026. 
        I moved to the U.S. five years ago, and though I started college with no coding experience, 
        I quickly developed a passion for technology through involvement in clubs like ACM. 
        I’m particularly interested in front-end development, UI/UX design, and web design, 
        and I’m always eager to learn and explore new areas in tech</p>

      {/* link resume */}
      <p className='text-2xl text-left font-medium'><a href={Resume} target="_blank" rel="noreferrer" className='text-white hover:text-[#C72D2D] underline'>Check my Resume Here</a></p>
    </div>
  );
}

function Interests() {
  const interests = [ 'Web Development', 'UI/UX Design', 'Web Design'];
  return (
    <div className='m-10'>
      <h1 className="text-3xl underline mb-10 text-left text-[#C72D2D]">Interests</h1>
      <ul className="flex flex-wrap gap-5 text-2xl">
        {interests.map((interest, index) => (
          <li
            key={index}
            className="bg-white text-sm text-[#C72D2D] rounded-full w-36 p-1 text-center"
          >
            {interest}
          </li>
        ))}
      </ul>
    </div>
  );
}

function Skills() {
  const skills = ['HTML/CSS', 'JavaScript', 'React', 'Svelte/SvelteKit', 'Python', 'Flask', 'C/C++', 'Git', 'Figma'];
  return (
    <div className='m-10'>
      <h1 className="text-3xl underline mb-10 text-left text-[#C72D2D]">Skills</h1>
      <ul className="flex flex-wrap gap-5 text-2xl">
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
  );
}

function Main(){
  return (
    <div>
      <About />
      <hr className='w-3/4 m-auto mt-10 mb-10 opacity-70'/>
      <Interests />
      <hr className='w-3/4 m-auto mt-10 mb-10 opacity-70'/>
      <Skills />
    </div>
  );
}
export default Main;
