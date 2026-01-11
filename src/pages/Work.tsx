import Games from '../components/Games'
import YouTubeVideos from '../components/YouTubeVideos'

const Work = () => {
  const softwareProjects = [
    {
      name: "MyGPT",
      description: "A fully local multimodal RAG pipeline designed for completely private, source-surfacing biomedical literature discussion and review.",
      contributions: [
        "Developed the entire RAG pipeline architecture for secure, local processing of sensitive research documents",
        "Implemented multimodal capabilities to handle both text and visual data from biomedical literature",
        "Built source-surfacing functionality to allow scientists to trace information back to original documents",
        "Designed the system to operate completely offline, ensuring no data leaves the local environment"
      ]
    },
    {
      name: "CKN Portal",
      description: "An integrated web portal for the Common Kinase Numbering (CKN) system, enabling biologists to query complex kinase data using natural language.",
      contributions: [
        "Developed the prototype web portal interface for the CKN system",
        "Implemented natural language query processing to translate user questions into database queries",
        "Built visualization components to display complex kinase data relationships",
        "Created an intuitive user interface for biologists to interact with complex scientific data"
      ]
    },
    {
      name: "Protein Structure Visualization Portals",
      description: "Multiple web portals for visualization of protein structure and dependency data.",
      contributions: [
        "Developed interactive web portals for visualizing protein structures",
        "Implemented dependency data visualization to show protein interaction networks",
        "Created tools that enable researchers to more rapidly analyze protein interactions",
        "Designed user interfaces optimized for scientific data exploration"
      ]
    },
    {
      name: "Wiillow",
      description: "An application that provides a safe, engaging space for children to practice and improve communication skills and compassion through conversations with their personalized AI avatar.",
      contributions: [
        "Solo-developed the complete software prototype from concept to working application",
        "Designed and implemented the AI avatar conversation system",
        "Built the user interface and user experience for children",
        "Developed the backend infrastructure to support personalized AI interactions",
        "Co-led technical development for pilot phase with Ann Arbor Spark"
      ]
    },
    {
      name: "SpokenMind",
      description: "A conversation-based reflection and habits app designed to improve users' mental wellness and productivity through AI-integrated analysis, automated task management, and social accountability.",
      contributions: [
        "Co-developed the core application architecture and features",
        "Implemented AI-integrated analysis for user conversations and reflections",
        "Built automated task management system",
        "Developed social accountability features to help users maintain habits",
        "Created the conversation interface for reflection and mental wellness tracking"
      ]
    },
    {
      name: "DiagnosAI",
      description: "A generative AI tool to help clinicians improve patient outcomes by accelerating the adoption of cutting-edge medical research into hospital treatment protocols.",
      contributions: [
        "Designed the complete wireframe and user interface for the application",
        "Architected the technical stack and system design",
        "Planned the integration of generative AI with medical research databases",
        "Created the initial prototype structure for the development team"
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-gray-900 pb-24">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-bold text-white mb-8 border-b border-gray-700 pb-2">
            <span className="text-accent">Work</span>
          </h1>
          
          <div className="space-y-12">
            {/* Tools Section */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-6 border-b border-gray-700 pb-2">
                <span className="text-accent">Tools</span>
              </h2>
              <div className="bg-gray-800/30 rounded-lg p-6 border border-gray-700">
                <p className="text-gray-300 leading-relaxed">
                  I work with a variety of tools and technologies including Python, C++, TypeScript, React, Django, Docker, Unity, AWS, and various AI/ML frameworks like Ollama and Huggingface. I'm also proficient in design tools like Blender, Figma, Photoshop, and video editing software.
                </p>
              </div>
            </section>

            {/* Software Development Section */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-6 border-b border-gray-700 pb-2">
                <span className="text-accent">Software</span> Development
              </h2>
              <div className="space-y-6">
                {softwareProjects.map((project, idx) => (
                  <div key={idx} className="bg-gray-800/30 rounded-lg p-6 border border-gray-700">
                    <h3 className="text-xl font-semibold text-white mb-2">{project.name}</h3>
                    <p className="text-gray-300 mb-4">{project.description}</p>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">My Contributions:</h4>
                      <ul className="list-disc list-inside space-y-2 text-gray-300 ml-2">
                        {project.contributions.map((contribution, cIdx) => (
                          <li key={cIdx} className="leading-relaxed">{contribution}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Game Development Section */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-6 border-b border-gray-700 pb-2">
                <span className="text-accent">Game</span> Development
              </h2>
              <Games />
            </section>

            {/* Pixel Art Section */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-6 border-b border-gray-700 pb-2">
                <span className="text-accent">Pixel</span> Art
              </h2>
              <div className="bg-gray-800/30 rounded-lg p-6 border border-gray-700">
                <p className="text-gray-300 leading-relaxed">
                  I create pixel art for my games and personal projects. My work includes character sprites, environment assets, and animated GIFs. You can see my pixel art work on my Instagram and in my game development projects.
                </p>
              </div>
            </section>

            {/* Videos Section */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-6 border-b border-gray-700 pb-2">
                <span className="text-accent">Videos</span>
              </h2>
              <div className="bg-gray-800/30 rounded-lg p-6 border border-gray-700 mb-6">
                <p className="text-gray-300 leading-relaxed mb-4">
                  I create video content including game development tutorials, project showcases, and creative content. Check out my <a href="https://www.youtube.com/@RinkyDinkGamer" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">YouTube channel</a> for the latest videos.
                </p>
              </div>
              <YouTubeVideos />
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Work
