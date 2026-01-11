const Education = () => {
  return (
    <section>
      <div className="space-y-6">
        <div>
          <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
            <div>
              <h3 className="text-xl font-semibold text-white">
                University of Michigan
              </h3>
              <p className="text-gray-300">Bachelor of Science in Engineering in Computer Engineering</p>
            </div>
            <div className="text-right mt-2 md:mt-0">
              <p className="text-gray-300 font-medium">Ann Arbor, MI</p>
              <p className="text-gray-400">May 2027</p>
            </div>
          </div>
          <p className="text-gray-400 text-sm mt-2">
            Coursework: Data Structures and Algorithms in C++, Mind & Machine, Introduction to Logic Design
          </p>
        </div>
        
        <div>
          <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
            <div>
              <h3 className="text-xl font-semibold text-white">
                Houston High School
              </h3>
              <p className="text-gray-300">General Diploma</p>
            </div>
            <div className="text-right mt-2 md:mt-0">
              <p className="text-gray-300 font-medium">Germantown, TN</p>
              <p className="text-gray-400">May 2023</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
