const Skills = () => {
  const skillCategories = [
    {
      category: "Programming Languages",
      skills: "Python, C++, C#, HTML, TypeScript, JavaScript, MATLAB"
    },
    {
      category: "Programming Frameworks & Tools",
      skills: "Django, React, Docker, Vercel, Heroku, Git, Unity, AWS EC2, Ollama, Huggingface"
    },
    {
      category: "Applications",
      skills: "Blender, Figma, Photoshop, After Effects, Illustrator, Excel/Google Sheets, Davinci Resolve"
    }
  ];

  return (
    <section>
      <div className="space-y-4">
        {skillCategories.map((category, idx) => (
          <div key={idx} className="bg-gray-800/30 rounded-lg p-4 border border-gray-700">
            <h3 className="text-lg font-semibold text-white mb-2">{category.category}:</h3>
            <p className="text-gray-300">{category.skills}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
