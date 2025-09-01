import React from 'react';
import { Code, Zap, Users, Sparkles } from 'lucide-react';

export default function DocsPage() {
  return (
    <div className="min-h-screen bg-black text-white pt-20 pb-12">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4 text-white">
            GOONUR Documentation
          </h1>
          <p className="text-gray-500 text-lg">Your guide to mastering the art of GOONUR</p>
        </div>

        <div className="space-y-8">
          <section className="bg-gray-900/50 rounded-2xl p-8 border border-gray-800">
            <div className="flex items-center mb-6">
              <Zap className="text-white mr-3" size={24} />
              <h2 className="text-2xl font-bold">Quick Start</h2>
            </div>
            <div className="space-y-4">
              <div className="bg-black/30 rounded-lg p-4">
                <h3 className="font-semibold mb-2 text-white">Step 1: Observe the Dot</h3>
                <p className="text-gray-400 text-sm">Focus on the white dot in the center. Let its simplicity wash over you.</p>
              </div>
              <div className="bg-black/30 rounded-lg p-4">
                <h3 className="font-semibold mb-2 text-white">Step 2: Understand the Counter</h3>
                <p className="text-gray-400 text-sm">The "Goon Masters" counter shows how many have clicked the sacred button.</p>
              </div>
              <div className="bg-black/30 rounded-lg p-4">
                <h3 className="font-semibold mb-2 text-white">Step 3: Interact</h3>
                <p className="text-gray-400 text-sm">Click the GOON button once to join the masters. You only get one chance.</p>
              </div>
            </div>
          </section>

          <section className="bg-gray-900/50 rounded-2xl p-8 border border-gray-800">
            <div className="flex items-center mb-6">
              <Code className="text-white mr-3" size={24} />
              <h2 className="text-2xl font-bold">Button Reference</h2>
            </div>
            <div className="grid gap-4">
              <div className="bg-black/30 rounded-lg p-4 border-l-4 border-white">
                <h3 className="font-bold text-white mb-2">GOON Button</h3>
                <p className="text-gray-400 text-sm mb-2">Click once to become a Goon Master. After clicking, the button becomes disabled.</p>
                <code className="text-xs bg-gray-800 px-2 py-1 rounded">onClick: +1 (one time only)</code>
              </div>
            </div>
          </section>

          <section className="bg-gray-900/50 rounded-2xl p-8 border border-gray-800">
            <div className="flex items-center mb-6">
              <Sparkles className="text-white mr-3" size={24} />
              <h2 className="text-2xl font-bold">Advanced Techniques</h2>
            </div>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2 text-white">The Contemplation Method</h3>
                <p className="text-gray-400 text-sm">Stare at the dot and consider whether you truly want to become a Goon Master.</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-white">The Decisive Approach</h3>
                <p className="text-gray-400 text-sm">Click immediately without hesitation. Embrace your destiny as a Goon Master.</p>
              </div>
            </div>
          </section>

          <section className="bg-gray-900/50 rounded-2xl p-8 border border-gray-800">
            <div className="flex items-center mb-6">
              <Users className="text-white mr-3" size={24} />
              <h2 className="text-2xl font-bold">Community Guidelines</h2>
            </div>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-start">
                <span className="text-white mr-2">•</span>
                <span className="text-sm">Respect the dot. It's not just a circle, it's a way of life.</span>
              </li>
              <li className="flex items-start">
                <span className="text-white mr-2">•</span>
                <span className="text-sm">Once you click, you cannot unclick. Choose wisely.</span>
              </li>
              <li className="flex items-start">
                <span className="text-white mr-2">•</span>
                <span className="text-sm">Remember: GOONUR is a state of mind, not just a number.</span>
              </li>
              <li className="flex items-start">
                <span className="text-white mr-2">•</span>
                <span className="text-sm">The button will grey out after clicking. This is not a bug, it's a feature.</span>
              </li>
            </ul>
          </section>

          <section className="bg-gray-800/30 rounded-2xl p-8 border border-gray-600">
            <h2 className="text-2xl font-bold mb-4 text-center">Pro Tips</h2>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div className="bg-black/30 rounded-lg p-4">
                <h4 className="font-semibold text-white mb-2">Timing is Everything</h4>
                <p className="text-gray-400">There is no perfect time to click. Every moment is the right moment.</p>
              </div>
              <div className="bg-black/30 rounded-lg p-4">
                <h4 className="font-semibold text-white mb-2">Visual Cues</h4>
                <p className="text-gray-400">Watch for the pulse animation when you click - it marks your transformation.</p>
              </div>
              <div className="bg-black/30 rounded-lg p-4">
                <h4 className="font-semibold text-white mb-2">Zen Mode</h4>
                <p className="text-gray-400">Sometimes just staring at the dot is enough. Embrace the minimalism.</p>
              </div>
              <div className="bg-black/30 rounded-lg p-4">
                <h4 className="font-semibold text-white mb-2">Share the Experience</h4>
                <p className="text-gray-400">GOONUR is better when shared. Spread the word on social media.</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}