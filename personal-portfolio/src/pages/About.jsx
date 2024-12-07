import Resume from '../assets/Sama_Ahmed_2024_Resume.pdf';

function AboutPage() {
  return (
    <div className="text-[#C72D2D] text-left bg-[#FCC1C1] opacity-65 p-10 rounded-md">
      <h1 className="text-4xl underline mb-10">About Me</h1>
      <p className="text-2xl mb-10">I’m Sama, an Egyptian-American student currently in my third year, set to graduate in Spring 2026. 
        I moved to the U.S. five years ago, and though I started college with no coding experience, 
        I quickly developed a passion for technology through involvement in clubs like ACM. 
        I’m particularly interested in front-end development, UI/UX design, and web design, 
        and I’m always eager to learn and explore new areas in tech</p>

      {/* link resume */}
      <p className='text-xl'>Check my Resume <a href={Resume} target="_blank" rel="noreferrer" className='text-white underline'>here</a></p>
    </div>
  );
}

export default AboutPage;
