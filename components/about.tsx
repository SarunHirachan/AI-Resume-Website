import React from 'react';

interface AboutProps {
  bio: string;
}

export default function About({ bio }: AboutProps) {
  return (
    <section id="about" className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center section-title">About Me</h2>
        <div className="bg-gray-900/60 rounded-xl p-6 backdrop-blur-sm border border-gray-800 transform transition-all duration-300 hover:scale-[1.01] hover:shadow-lg hover:shadow-blue-900/20">
          <p className="text-lg leading-relaxed text-center">
            {bio}
          </p>
        </div>
      </div>
    </section>
  );
}
