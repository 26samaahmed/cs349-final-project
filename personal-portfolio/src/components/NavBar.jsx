import { Link } from 'react-router-dom';

const navItems = [
  { text: 'Home', path: '/' },
  { text: 'About', path: '/about' },
  { text: 'Projects', path: '/projects' },
  { text: 'Contact', path: '/contact' }
];

function Navbar() {
  return (
    <nav className="flex items-center justify-center text-3xl">
      <div className="flex space-x-12">
        {navItems.map((item, index) => (
          <div key={index}>
              <Link 
                to={item.path} 
                className="text-white hover:text-[#C72D2D] no-underline hover:underline"
              >
                {item.text}
              </Link>
          </div>
        ))}
      </div>
    </nav>
  );
}

export default Navbar;
