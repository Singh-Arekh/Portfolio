const Header = () => {
  return (
    <header className="p-4 bg-gray-100 sticky top-0 z-50 shadow-md">
      <nav className="container mx-auto flex justify-between items-center">
        <a href="#/">
          <h1 className="text-xl font-bold">My Portfolio</h1>
        </a>
        <div className="hidden lg:block md:block space-x-4">
          <a href="#about" className="hover:text-gray-500">
            About
          </a>
          <a href="#projects" className="hover:text-gray-500">
            Projects
          </a>
          <a href="#skills" className="hover:text-gray-500">
            Skills
          </a>
          <a href="#contact" className="hover:text-gray-500">
            Contact
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
