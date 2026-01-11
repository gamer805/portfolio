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
        <span className="text-gray-600">•</span>
        <a href="tel:+19015002312" className="hover:text-accent transition-colors">
          (901) 500-2312
        </a>
        <span className="text-gray-600">•</span>
        <span>405 S Main St, Ann Arbor, MI</span>
      </div>
    </header>
  );
};

export default Header;
