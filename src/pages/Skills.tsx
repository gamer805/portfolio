import Skills from '../components/Skills'

const SkillsPage = () => {
  return (
    <div className="min-h-screen bg-gray-900 pb-24">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-bold text-white mb-8 border-b border-gray-700 pb-2">
            <span className="text-accent">Skills</span>
          </h1>
          <Skills />
        </div>
      </div>
    </div>
  )
}

export default SkillsPage
