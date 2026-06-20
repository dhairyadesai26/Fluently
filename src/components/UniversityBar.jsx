const unis = [
  'IIT Delhi', 'VIT Vellore', 'Manipal University', 'NMIMS Mumbai',
  'BITS Pilani', 'SRM Institute', 'Amity University', 'KIIT Bhubaneswar',
  'LPU Jalandhar', 'Pune University', 'Delhi University', 'Anna University',
  'IIT Delhi', 'VIT Vellore', 'Manipal University', 'NMIMS Mumbai',
  'BITS Pilani', 'SRM Institute', 'Amity University', 'KIIT Bhubaneswar',
];

export default function UniversityBar() {
  return (
    <section className="bg-white border-b border-gray-100 py-6 overflow-hidden">
      <p className="text-center text-xs font-bold text-gray-400 uppercase tracking-widest mb-5 font-dm px-4">
        Trusted by students from India's top colleges
      </p>
      <div className="relative overflow-hidden"
        style={{ maskImage: 'linear-gradient(to right, transparent 0%, #000 10%, #000 90%, transparent 100%)' }}>
        <div className="flex items-center animate-scroll-left w-max">
          {unis.map((u, i) => (
            <span key={i} className="flex items-center font-sora font-semibold text-gray-400 text-sm whitespace-nowrap px-6 hover:text-indigo-500 transition-colors cursor-default">
              {u}
              <span className="ml-6 w-1.5 h-1.5 rounded-full bg-gray-200 inline-block" />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
