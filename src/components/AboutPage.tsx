import React from 'react';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black text-white pt-20 pb-12">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4 text-white">
            About GOONUR
          </h1>
          <div className="w-24 h-1 bg-white mx-auto rounded-full" />
        </div>

        <div className="space-y-8">
          <section className="bg-gray-900/50 rounded-2xl p-8 border border-gray-800">
            <h2 className="text-2xl font-bold mb-4 text-white">What is GOONUR?</h2>
            <p className="text-gray-400 leading-relaxed">
              GOONUR is an evolution of internet culture, a playful deviation from the term "goon" that has taken on 
              a life of its own in online communities. It represents the absurdist humor and creative wordplay that 
              defines modern meme culture, where simple concepts are transformed into something entirely new through 
              collective participation and shared understanding.
            </p>
          </section>

          <section className="bg-gray-900/50 rounded-2xl p-8 border border-gray-800">
            <h2 className="text-2xl font-bold mb-4 text-white">The Meme Evolution</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold mb-3 text-white">Origins</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Like many internet phenomena, GOONUR emerged from the creative chaos of online communities. 
                  It started as a simple linguistic twist but quickly evolved into something much more significant - 
                  a symbol of digital culture's ability to create meaning from seemingly random elements.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-3 text-white">Cultural Impact</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  GOONUR represents the democratization of humor and meaning-making in the digital age. 
                  It shows how communities can collectively transform language, creating new forms of expression 
                  that resonate across different platforms and demographics.
                </p>
              </div>
            </div>
          </section>

          <section className="bg-gray-900/50 rounded-2xl p-8 border border-gray-800">
            <h2 className="text-2xl font-bold mb-4 text-white">Why This Webapp?</h2>
            <p className="text-gray-400 leading-relaxed mb-4">
              This webapp serves as both a celebration and a documentation of the GOONUR phenomenon. 
              The simple white dot on a black background represents the pure, minimalist essence of the meme - 
              something that appears simple on the surface but contains infinite potential for interpretation and interaction.
            </p>
            <div className="grid sm:grid-cols-3 gap-4 mt-6">
              <div className="text-center p-4 bg-black/30 rounded-lg">
                <div className="text-2xl mb-2">⚪</div>
                <div className="text-sm text-gray-400">Minimalist Design</div>
              </div>
              <div className="text-center p-4 bg-black/30 rounded-lg">
                <div className="text-2xl mb-2">⚫</div>
                <div className="text-sm text-gray-400">Interactive Elements</div>
              </div>
              <div className="text-center p-4 bg-black/30 rounded-lg">
                <div className="text-2xl mb-2">⚪</div>
                <div className="text-sm text-gray-400">Simple Interaction</div>
              </div>
            </div>
          </section>

          <section className="bg-gray-900/50 rounded-2xl p-8 border border-gray-800">
            <h2 className="text-2xl font-bold mb-4 text-white">The Philosophy</h2>
            <blockquote className="border-l-4 border-white pl-6 italic text-gray-400">
              "In the vast darkness of the internet, sometimes all you need is a single point of light to create 
              meaning, community, and joy. GOONUR is that light - simple, pure, and infinitely expandable."
            </blockquote>
          </section>
        </div>
      </div>
    </div>
  );
}