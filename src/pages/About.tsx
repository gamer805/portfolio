import Objective from '../components/Objective'
import Education from '../components/Education'
import Skills from '../components/Skills'
import Activities from '../components/Activities'

const About = () => {
  return (
    <div className="min-h-screen bg-gray-900 pb-24">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-bold text-white mb-8 border-b border-gray-700 pb-2">
            <span className="text-accent">About</span>
          </h1>
          <div className="space-y-12">
            <Objective />
            <div>
              <h2 className="text-2xl font-semibold text-white mb-6 border-b border-gray-700 pb-2">
                <span className="text-accent">Education</span>
              </h2>
              <Education />
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-white mb-6 border-b border-gray-700 pb-2">
                <span className="text-accent">Skills</span>
              </h2>
              <Skills />
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-white mb-6 border-b border-gray-700 pb-2">
                <span className="text-accent">Activities</span>
              </h2>
              <Activities />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
