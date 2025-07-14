import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ExecomCard from '@/components/ExecomCard';
import { execomChapters, facultyExecom, studentExecom, Member } from '@/lib/execomData';
import { chapters } from '@/lib/chaptersData'; // For logos

const ExecomPage = () => {
  const [selectedChapterId, setSelectedChapterId] = useState('main');

  const societyLogos = chapters.reduce((acc, chapter) => {
    acc[chapter.id] = chapter.logo;
    return acc;
  }, {} as { [key: string]: string });

  // Add a default logo for societies not in chaptersData
  const getLogo = (id: string) => societyLogos[id] || '/societies/ieee.svg';

  const filteredFaculty = facultyExecom.filter(member => selectedChapterId === 'main' ? true : member.societyId === selectedChapterId);
  const filteredStudents = studentExecom.filter(member => selectedChapterId === 'main' ? true : member.societyId === selectedChapterId);

  const getSocietyName = (id: string) => {
    return execomChapters.find(c => c.id === id)?.name || 'IEEE Member';
  }

  return (
    <div className="bg-white">
      <Header />
      <main className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-800 tracking-wider">THE EXECOM</h1>
          <p className="text-lg text-gray-500 mt-2">Meet the team behind IEEE SB TKMCE</p>
        </div>

        <div className="mb-12">
          <div className="flex justify-center">
            <div className="flex space-x-2 overflow-x-auto pb-4 max-w-full">
              {execomChapters.map((chapter) => (
                <button
                  key={chapter.id}
                  onClick={() => setSelectedChapterId(chapter.id)}
                  className={`py-2 px-5 rounded-full text-sm font-semibold transition-colors duration-300 whitespace-nowrap ${
                    selectedChapterId === chapter.id
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-800'
                  }`}
                >
                  {chapter.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        {filteredFaculty.length > 0 && (
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Faculty Execom</h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
              {filteredFaculty.map((member) => (
                <ExecomCard 
                  key={`${member.name}-${member.position}`}
                  member={member} 
                  societyName={getSocietyName(member.societyId)}
                  logo={getLogo(member.societyId)}
                />
              ))}
            </div>
          </section>
        )}

        {filteredStudents.length > 0 && (
          <section>
            <h2 className="text-3xl font-bold text-center mb-8">Student Execom</h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
              {filteredStudents.map((member) => (
                <ExecomCard 
                  key={`${member.name}-${member.position}`}
                  member={member} 
                  societyName={getSocietyName(member.societyId)}
                  logo={getLogo(member.societyId)}
                />
              ))}
            </div>
          </section>
        )}

      </main>
      <Footer />
    </div>
  );
};

export default ExecomPage;
