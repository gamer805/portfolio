const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-900 pb-24">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-bold text-white mb-8 border-b border-gray-700 pb-2">
            <span className="text-accent">Contact</span>
          </h1>
          <div className="bg-gray-800/30 rounded-lg p-8 border border-gray-700">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
                <a 
                  href="mailto:judedow@umich.edu" 
                  className="text-accent hover:text-accent/80 transition-colors text-lg"
                >
                  judedow@umich.edu
                </a>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Phone</h3>
                <a 
                  href="tel:+19015002312" 
                  className="text-accent hover:text-accent/80 transition-colors text-lg"
                >
                  (901) 500-2312
                </a>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Location</h3>
                <p className="text-gray-300 text-lg">
                  405 S Main St, Ann Arbor, MI
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
