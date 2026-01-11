const WorkExperience = () => {
  const experiences = [
    {
      company: "St. Jude Children's Research Hospital, Center for Data-Driven Discovery",
      location: "Memphis, TN",
      position: "Computational Intern",
      period: "June 2023 - August 2023, May 2024 - August 2024, June 2025 - Present",
      bullets: [
        "Developed multiple web portals for visualization of protein structure and dependency data, enabling St. Jude researchers to more rapidly analyze protein interactions and accelerate their discovery process.",
        "Developed MyGPT, a fully local multimodal RAG pipeline designed for completely private, source-surfacing biomedical literature discussion and review, allowing scientists to securely query and analyze sensitive, proprietary research documents.",
        "Developed prototype for CKN Portal, an integrated web portal for the Common Kinase Numbering (CKN) system, empowering biologists to query complex kinase data using natural language to advance drug discovery research."
      ]
    },
    {
      company: "Wiillow, Inc.",
      location: "Ann Arbor, MI",
      position: "Software Development Co-Lead",
      period: "October 2024 - August 2025",
      bullets: [
        "Solo-developed the software prototype of Wiillow, an application that provides a safe, engaging space for children to practice and improve communication skills and compassion through conversations with their personalized AI avatar.",
        "Co-led pitching and fund acquisition with CEO Ryo Takenaka.",
        "Co-led development for pilot phase with Bryan Song via Ann Arbor Spark.",
        "Competed in the Business+Tech Innovation Jam (semi-finalist), the Michigan Business Challenge (semi-finalist), and MTank (finalist).",
        "Won third place and $2000 in funding via Learning Levers."
      ]
    }
  ];

  return (
    <section>
      <div className="space-y-8">
        {experiences.map((exp, idx) => (
          <div key={idx} className="bg-gray-800/30 rounded-lg p-6 border border-gray-700">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3">
              <div>
                <h3 className="text-xl font-semibold text-white">{exp.company}</h3>
                <p className="text-gray-300">{exp.position}</p>
              </div>
              <div className="text-right mt-2 md:mt-0">
                <p className="text-gray-300 font-medium">{exp.location}</p>
                <p className="text-gray-400 text-sm">{exp.period}</p>
              </div>
            </div>
            <ul className="list-disc list-inside space-y-2 text-gray-300 ml-2">
              {exp.bullets.map((bullet, bulletIdx) => (
                <li key={bulletIdx} className="leading-relaxed">{bullet}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorkExperience;
