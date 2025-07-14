import { Card, CardContent } from '@/components/ui/card';
import { Heart, Send, Bookmark, MoreHorizontal } from 'lucide-react';

interface ExecomCardProps {
  member: {
    name: string;
    position: string;
    image: string;
  };
  societyName: string;
  logo: string;
}

const ExecomCard = ({ member, societyName, logo }: ExecomCardProps) => {
  return (
    <Card className="rounded-2xl shadow-lg overflow-hidden group transition-all duration-300 hover:shadow-xl">
      <div className="relative">
        <img src={member.image || '/placeholder-pfp.svg'} alt={member.name} className="w-full h-80 object-cover bg-gray-200" />
        <div className="absolute top-3 right-3 bg-black/20 rounded-full p-1">
          <MoreHorizontal className="text-white h-5 w-5" />
        </div>
        <div className="absolute top-3 left-3 flex items-center space-x-2 bg-black/30 text-white py-1 px-2 rounded-full text-xs font-semibold">
            <img src={logo} alt={societyName} className="w-5 h-5 rounded-full bg-white"/>
            <span>{societyName}</span>
        </div>
      </div>
      <CardContent className="p-4 bg-white">
        <div className="flex justify-between items-center mb-3">
          <div className="flex space-x-3 text-gray-500">
            <Heart className="h-6 w-6 hover:text-red-500 hover:fill-current cursor-pointer transition-colors" />
            <Send className="h-6 w-6 hover:text-blue-500 cursor-pointer transition-colors" />
          </div>
          <Bookmark className="h-6 w-6 text-gray-500 hover:text-yellow-500 hover:fill-current cursor-pointer transition-colors" />
        </div>
        <h3 className="text-lg font-bold text-gray-900">{member.name}</h3>
        <p className="text-gray-600 text-sm">{member.position}</p>
        <p className="text-xs text-gray-400 mt-2">2023-24 • View Profile</p>
      </CardContent>
    </Card>
  );
};

export default ExecomCard;
