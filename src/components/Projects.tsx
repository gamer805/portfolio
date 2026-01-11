const Projects = () => {
  const projects = [
    {
      name: "SpokenMind",
      location: "Ann Arbor, MI",
      role: "Co-Developer",
      period: "August 2025 - Present",
      bullets: [
        "Co-developed SpokenMind, a conversation-based reflection and habits app designed to improve users' mental wellness and productivity through AI-integrated analysis, automated task management, and social accountability.",
        "Competed in Business+Tech Innovation Jam '25 (semi-finalist) and University of Michigan FUEL (finalist)."
      ]
    },
    {
      name: "DiagnosAI",
      location: "Ann Arbor, MI",
      role: "Technical Architect",
      period: "August 2023 - October 2023",
      bullets: [
        "Designed wireframe and tech stack for DiagnosAI, a generative AI tool to help clinicians improve patient outcomes by accelerating the adoption of cutting-edge medical research into hospital treatment protocols.",
        "Competed Business+Tech Innovation Jam '23 (semi-finalist)."
      ]
    }
  ];

  return (
    <section>
      <div className="space-y-8">
        {projects.map((project, idx) => (
          <div key={idx} className="bg-gray-800/30 rounded-lg p-6 border border-gray-700">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3">
              <div>
                <h3 className="text-xl font-semibold text-white">{project.name}</h3>
                <p className="text-gray-300">{project.role}</p>
              </div>
              <div className="text-right mt-2 md:mt-0">
                <p className="text-gray-300 font-medium">{project.location}</p>
                <p className="text-gray-400 text-sm">{project.period}</p>
              </div>
            </div>
            <ul className="list-disc list-inside space-y-2 text-gray-300 ml-2">
              {project.bullets.map((bullet, bulletIdx) => (
                <li key={bulletIdx} className="leading-relaxed">{bullet}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
