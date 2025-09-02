import Image from "next/image";

export default function Home() {
  return (
    <div className="absoluteinset-0 -z-10 w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#5A8EE8_130%)]">
    <div className="min-h-screen  text-white">
      {/* Container for all content */}
      <div className="max-w-5xl mx-auto">
        {/* Top Marketing Section */}
        <section className="h-[50vh] flex items-center justify-center px-3 sm:px-4 lg:px-6">
          <div className="w-full text-center space-y-6">
            <h1 
            style={{
              fontFamily: "var(--font-pp-editorial-new)",
              fontWeight: "400",
            }}
            className="text-4xl sm:text-5xl lg:text-6xl leading-tight text-white">
            Panoramic video measurement            
            </h1>
            
            <p className="text-lg sm:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
              A Python-based desktop application that allows users to analyze panoramic videos for measurement and tracking purposes.
            </p>
            
            <div className="flex justify-center">
              <a 
                href="https://github.com/amanibobo/motion-field" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white text-black px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold flex items-center gap-2 hover:bg-gray-100 transition-colors text-sm"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                GitHub
              </a>
            </div>
          </div>
        </section>

        {/* App Hero Image Section */}
        <section className="min-h-[60vh] flex items-center justify-center px-3 sm:px-4 pb-20">
          <div className="w-full max-w-5xl">
            <Image 
              src="/newMotion.png" 
              alt="MotionField Application Interface" 
              width={1200} 
              height={800}
              className="w-full h-auto rounded-lg shadow-xl"
              priority
            />
          </div>
        </section>

        {/* Feature Cards Section */}
        <section className="py-20 px-3 sm:px-4">
          <div className="w-full max-w-6xl mx-auto">
            <h2 
              style={{
                fontFamily: "var(--font-pp-editorial-new)",
                fontWeight: "400",
              }}
              className="text-3xl sm:text-4xl lg:text-5xl text-center mb-12"
            >
              3 step workflow
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {/* Feature Card 1 */}
              <div className="bg-gray-600/20 backdrop-blur-sm rounded-lg shadow-lg p-6 border border-white/10">
                <div className="bg-black/30 rounded-lg p-4 mb-4 h-48 flex items-center justify-center">
                  <Image 
                    src="/app_hero.webp" 
                    alt="MotionField Interface" 
                    width={200} 
                    height={150}
                    className="w-full h-full object-cover rounded"
                  />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Processing/Panorama Creation</h3>
                <p className="text-gray-300 text-sm">
                Load and process panoramic video files to create a unified panorama view for analysis
                </p>
              </div>

              {/* Feature Card 2 */}
              <div className="bg-gray-600/20 backdrop-blur-sm rounded-lg shadow-lg p-6 border border-white/10">
                <div className="bg-black/30 rounded-lg p-4 mb-4 h-48 flex items-center justify-center">
                  <Image 
                    src="/app_hero.webp" 
                    alt="MotionField Interface" 
                    width={200} 
                    height={150}
                    className="w-full h-full object-cover rounded"
                  />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Distance Measurement & Calibration</h3>
                <p className="text-gray-300 text-sm">
                Draw measurement lines on the panorama and calibrate them with real-world distances for accurate measurements
                </p>
              </div>

              {/* Feature Card 3 */}
              <div className="bg-gray-600/20  backdrop-blur-sm rounded-lg shadow-lg p-6 border border-white/10">
                <div className="bg-black/30 rounded-lg p-4 mb-4 h-48 flex items-center justify-center">
                  <Image 
                    src="/app_hero.webp" 
                    alt="MotionField Interface" 
                    width={200} 
                    height={150}
                    className="w-full h-full object-cover rounded"
                  />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Object Tracking & Motion Analysis</h3>
                <p className="text-gray-300 text-sm">
                Track moving objects across video frames and calculate velocities with path visualization
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 px-3 sm:px-4 border-t border-gray-800">
          <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-gray-400 text-sm">
              © 2025 MotionField. Built by{" "}
              <a 
                href="https://amanibobo.dev" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-gray-300 transition-colors"
              >
                amanibobo.dev
              </a>
            </div>
            <a 
              href="https://github.com/amanibobo/motion-field" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white text-black px-4 py-2 rounded-full font-medium flex items-center gap-2 hover:bg-gray-100 transition-colors text-sm"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              GitHub
            </a>
          </div>
        </footer>
      </div>
    </div>
    </div>
  );
}