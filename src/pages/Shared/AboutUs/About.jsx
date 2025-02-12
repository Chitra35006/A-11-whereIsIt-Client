import React from 'react';

const About = () => {
    return (
        <div>
            <section className="bg-indigo-950 text-indigo-200 py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">About Us</h2>
        <p className="text-lg md:text-xl text-indigo-300">
          Welcome to <span className="text-red-400 font-semibold">WhereIsIt</span>, a platform dedicated to helping people **reunite with their lost belongings**.
          Whether you've found something or misplaced an item, our community-driven system helps bridge the gap.
        </p>
      </div>

      <div className="mt-12 flex flex-col md:flex-row items-center justify-center gap-8">
        {/* Card 1 */}
        <div className="bg-indigo-900 p-6 rounded-lg shadow-lg w-full md:w-1/3 text-center">
          <h3 className="text-xl font-semibold text-white">🔍 Report Lost Items</h3>
          <p className="mt-3 text-indigo-300">
            Quickly report missing items and get notified when someone finds them.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-indigo-900 p-6 rounded-lg shadow-lg w-full md:w-1/3 text-center">
          <h3 className="text-xl font-semibold text-white">📢 Announce Found Items</h3>
          <p className="mt-3 text-indigo-300">
            Found something? Post the details to help the rightful owner retrieve it.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-indigo-900 p-6 rounded-lg shadow-lg w-full md:w-1/3 text-center">
          <h3 className="text-xl font-semibold text-white">🛡️ Safe & Secure</h3>
          <p className="mt-3 text-indigo-300">
            Your safety and privacy are our top priorities when reuniting lost items.
          </p>
        </div>
      </div>

      <div className="text-center mt-12">
        <a
          href="/get-started"
          className="inline-block bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-3 px-6 rounded-lg transition"
        >
          Explore Now
        </a>
      </div>
    </section>
        </div>
    );
};

export default About;