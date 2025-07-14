import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ChapterDetail from '@/components/ChapterDetail';
import { chapters, chapterDetails } from '@/lib/chaptersData';

const ChaptersPage = () => {
  const [selectedChapterId, setSelectedChapterId] = useState(chapters[0].id);

  const selectedChapter = chapters.find(c => c.id === selectedChapterId) || chapters[0];
  const details = chapterDetails[selectedChapterId] || chapterDetails.cs;

  const selectedChapterDetails = {
    ...details,
    name: selectedChapter.name,
    logo: selectedChapter.logo,
  };

  return (
    <div className="bg-white">
      <Header />
      <main className="pt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
          <select
            value={selectedChapterId}
            onChange={(e) => setSelectedChapterId(e.target.value)}
            className="block w-full max-w-xs mx-auto p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {chapters.map((chapter) => (
              <option key={chapter.id} value={chapter.id}>
                {chapter.name}
              </option>
            ))}
          </select>
        </div>
        <ChapterDetail chapter={selectedChapterDetails} />
      </main>
      <Footer />
    </div>
  );
};

export default ChaptersPage;
