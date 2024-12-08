import icon from '../assets/icon.jpeg';

function Home() {
  return (
    <div className="flex flex-col sm:flex-row items-center md:items-start text-[#C72D2D] text-left w-full md:m-10">
      <div className="w-full md:w-2/3 mb-4 md:mb-0">
        <h1 className="text-xl md:text-5xl mb-5 md:mb-10">Hello, I'm Sama Ahmed</h1>
        <p className="text-md md:text-2xl">
          A passionate computer science student @csuf who loves solving problems with code and enjoys taking on leadership roles to help projects and teams succeed (●'◡'●)
        </p>
      </div>
      <img 
        src={icon} 
        alt="icon" 
        className="rounded-full w-1/2 sm:w-1/4 h-auto mx-auto sm:ml-4" 
      />
    </div>
  );
}

export default Home;

