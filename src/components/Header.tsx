const Header = () => {
  return (
    <header className="text-center mb-12 pb-8 border-b border-gray-700">
      <h1 className="text-5xl font-bold text-white mb-4">
        Jude <span className="text-accent">Downing</span>
      </h1>
      <div className="flex flex-wrap justify-center gap-4 text-gray-300 text-sm md:text-base">
        <a href="mailto:judedow@umich.edu" className="hover:text-accent transition-colors">
          judedow@umich.edu
        </a>
      </div>
    </header>
  );
};

export default Header;
