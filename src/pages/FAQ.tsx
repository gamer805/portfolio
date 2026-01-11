const FAQ = () => {
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
    <div className="min-h-screen bg-gray-900 pb-24">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-bold text-white mb-8 border-b border-gray-700 pb-2">
            <span className="text-accent">FAQ</span>
          </h1>
          <div className="space-y-6">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-gray-800/30 rounded-lg p-6 border border-gray-700">
                <h3 className="text-xl font-semibold text-white mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default FAQ
