// Window content components that extract just the content from pages
import Objective from './Objective'
import Education from './Education'
import Skills from './Skills'
import Activities from './Activities'
import Games from './Games'
import YouTubeVideos from './YouTubeVideos'
import WorkExperience from './WorkExperience'
import Projects from './Projects'

export const AboutContent = () => {
  return (
    <div className="p-6">
      <div className="space-y-8">
        <div className="flex items-center gap-6 mb-6">
          <img
            src={`${import.meta.env.BASE_URL}animations/self-portrait-waving.gif`}
            alt="Jude Downing waving"
            className="w-32 h-32 object-contain rounded-lg flex-shrink-0"
          />
          <div>
            <h1 className="text-3xl font-bold text-white mb-2">
              Jude <span className="text-accent">Downing</span>
            </h1>
            <p className="text-lg text-gray-300 mb-1">
              Ann Arbor-based Software Developer
            </p>
            <p className="text-md text-gray-400">
              Computational Intern at St. Jude Children's Research Hospital
            </p>
          </div>
        </div>
        <Objective />
        <div>
          <h2 className="text-2xl font-semibold text-white mb-4 border-b border-gray-700 pb-2">
            <span className="text-accent">Education</span>
          </h2>
          <Education />
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-white mb-4 border-b border-gray-700 pb-2">
            <span className="text-accent">Skills</span>
          </h2>
          <Skills />
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-white mb-4 border-b border-gray-700 pb-2">
            <span className="text-accent">Activities</span>
          </h2>
          <Activities />
        </div>
      </div>
    </div>
  )
}

export const LinksContent = () => {
  const links = [
    {
      name: "Art Instagram",
      url: "https://www.instagram.com/your-art-instagram",
      icon: "📷",
      description: "Follow my pixel art and creative work"
    },
    {
      name: "YouTube",
      url: "https://www.youtube.com/@RinkyDinkGamer",
      icon: "📺",
      description: "Watch my game development tutorials and project showcases"
    },
    {
      name: "GitHub",
      url: "https://github.com/your-github",
      icon: "💻",
      description: "View my code repositories and open source contributions"
    },
    {
      name: "itch.io",
      url: "https://fancy-dog-games.itch.io",
      icon: "🎮",
      description: "Play my games and check out my game development projects"
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/your-linkedin",
      icon: "💼",
      description: "Connect with me professionally"
    }
  ]

  return (
    <div className="p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {links.map((link, idx) => (
          <a
            key={idx}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800/30 hover:bg-gray-800/50 border border-gray-700 hover:border-accent rounded-lg p-4 transition-all duration-200 hover:scale-105 group"
          >
            <div className="flex items-start gap-3">
              <div className="text-3xl">{link.icon}</div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-white mb-1 group-hover:text-accent transition-colors">
                  {link.name}
                </h3>
                <p className="text-gray-300 text-xs leading-relaxed">
                  {link.description}
                </p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  )
}

export const WorkContent = () => {
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
    <div className="p-6 space-y-6">
      <div>
        <h2 className="text-xl font-semibold text-white mb-4 border-b border-gray-700 pb-2">
          <span className="text-accent">Tools</span>
        </h2>
        <div className="bg-gray-800/30 rounded-lg p-4 border border-gray-700">
          <p className="text-gray-300 text-sm leading-relaxed">
            I work with a variety of tools and technologies including Python, C++, TypeScript, React, Django, Docker, Unity, AWS, and various AI/ML frameworks like Ollama and Huggingface. I'm also proficient in design tools like Blender, Figma, Photoshop, and video editing software.
          </p>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-semibold text-white mb-4 border-b border-gray-700 pb-2">
          <span className="text-accent">Software</span> Development
        </h2>
        <div className="space-y-4">
          {softwareProjects.map((project, idx) => (
            <div key={idx} className="bg-gray-800/30 rounded-lg p-4 border border-gray-700">
              <h3 className="text-lg font-semibold text-white mb-2">{project.name}</h3>
              <p className="text-gray-300 text-sm mb-3">{project.description}</p>
              <div>
                <h4 className="text-base font-semibold text-white mb-2">My Contributions:</h4>
                <ul className="list-disc list-inside space-y-1 text-gray-300 text-sm ml-2">
                  {project.contributions.map((contribution, cIdx) => (
                    <li key={cIdx} className="leading-relaxed">{contribution}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-xl font-semibold text-white mb-4 border-b border-gray-700 pb-2">
          <span className="text-accent">Game</span> Development
        </h2>
        <Games />
      </div>

      <div>
        <h2 className="text-xl font-semibold text-white mb-4 border-b border-gray-700 pb-2">
          <span className="text-accent">Pixel</span> Art
        </h2>
        <div className="bg-gray-800/30 rounded-lg p-4 border border-gray-700">
          <p className="text-gray-300 text-sm leading-relaxed">
            I create pixel art for my games and personal projects. My work includes character sprites, environment assets, and animated GIFs. You can see my pixel art work on my Instagram and in my game development projects.
          </p>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-semibold text-white mb-4 border-b border-gray-700 pb-2">
          <span className="text-accent">Videos</span>
        </h2>
        <div className="bg-gray-800/30 rounded-lg p-4 border border-gray-700 mb-4">
          <p className="text-gray-300 text-sm leading-relaxed mb-2">
            I create video content including game development tutorials, project showcases, and creative content. Check out my <a href="https://www.youtube.com/@RinkyDinkGamer" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">YouTube channel</a> for the latest videos.
          </p>
        </div>
        <YouTubeVideos />
      </div>
    </div>
  )
}

export const FAQContent = () => {
  const faqs = [
    {
      question: "What are you studying?",
      answer: "I'm pursuing a Bachelor of Science in Engineering in Computer Engineering at the University of Michigan, expected to graduate in May 2027."
    },
    {
      question: "What kind of work are you looking for?",
      answer: "I'm seeking a summer 2026 internship focused on the applications and deployment of large language models in terms of software, hardware, or law."
    },
    {
      question: "What programming languages do you know?",
      answer: "I'm proficient in Python, C++, C#, HTML, TypeScript, JavaScript, and MATLAB."
    },
    {
      question: "What frameworks and tools do you use?",
      answer: "I work with Django, React, Docker, Vercel, Heroku, Git, Unity, AWS EC2, Ollama, and Huggingface."
    },
    {
      question: "Do you have any game development experience?",
      answer: "Yes! I've developed multiple games including Reawaken Demo, Tennis Wars, Slime Hunter, Furious Fowls, Bloobert, Duck: A Day In The Life, MagiBlade, and Ghostly Melee. You can check them out in the Links section."
    },
    {
      question: "What projects have you worked on?",
      answer: "I've co-developed SpokenMind, a conversation-based reflection and habits app, and served as Technical Architect for DiagnosAI, a generative AI tool for clinicians. I've also worked on MyGPT, a fully local multimodal RAG pipeline for biomedical literature."
    }
  ]

  return (
    <div className="p-6">
      <div className="space-y-4">
        {faqs.map((faq, idx) => (
          <div key={idx} className="bg-gray-800/30 rounded-lg p-4 border border-gray-700">
            <h3 className="text-lg font-semibold text-white mb-2">
              {faq.question}
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              {faq.answer}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export const ContactContent = () => {
  return (
    <div className="p-6">
      <div className="bg-gray-800/30 rounded-lg p-6 border border-gray-700">
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
            <a 
              href="mailto:judedow@umich.edu" 
              className="text-accent hover:text-accent/80 transition-colors text-sm"
            >
              judedow@umich.edu
            </a>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-2">Phone</h3>
            <a 
              href="tel:+19015002312" 
              className="text-accent hover:text-accent/80 transition-colors text-sm"
            >
              (901) 500-2312
            </a>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-2">Location</h3>
            <p className="text-gray-300 text-sm">
              405 S Main St, Ann Arbor, MI
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
