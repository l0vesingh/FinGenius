import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const teamMembers = [
  { name: "Sakshar", role: "Designer", image: "/sakashar.jpeg" },
  { name: "Love", role: "Designer & Trader", image: "/love.jpeg" },
  {
    name: "Shivam",
    role: "Fullstack Developer",
    image: "/shivam.jpeg",
  },
  { name: "Parv", role: "Fullstack Developer", image: "/parv.jpeg" },
  { name: "Aditya", role: "AI Expert", image: "/aditya.jpeg" },
];

function Team() {
  const [index, setIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % teamMembers.length);
  };

  const handlePrev = () => {
    setIndex((prev) => (prev - 1 + teamMembers.length) % teamMembers.length);
  };

  // Animate when section enters viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <div className="my-10 mx-4 lg:mx-32 shadow-2xl rounded-3xl overflow-hidden mt-20">
      <section
        id="Team"
        ref={sectionRef}
        className={`bg-zinc-900 text-white py-10 px-4 lg:py-20 lg:px-10 transform transition-all duration-1000 ease-in-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl lg:text-4xl font-bold mb-8 lg:mb-12 bg-gradient-to-r from-blue-500 via-violet-400 to-purple-800 bg-clip-text text-transparent">
            Meet the Team
          </h2>

          <div className="relative flex justify-center items-center">
            <button onClick={handlePrev} className="absolute left-0">
              <ChevronLeft className="w-6 h-6 lg:w-10 lg:h-10 text-gray-400 hover:text-white" />
            </button>

            <div className="transition-all duration-500">
              <div className="flex flex-col items-center space-y-4">
                <div className="bg-zinc-600 p-1 rounded-full">
                  <img
                    src={teamMembers[index].image}
                    alt={teamMembers[index].name}
                    className="w-28 h-28 lg:w-40 lg:h-40 object-cover rounded-full border-4 border-zinc-900"
                  />
                </div>
                <h3 className="text-lg lg:text-2xl font-semibold">
                  {teamMembers[index].name}
                </h3>
                <p className="text-sm lg:text-base text-gray-400">
                  {teamMembers[index].role}
                </p>
              </div>
            </div>

            <button onClick={handleNext} className="absolute right-0">
              <ChevronRight className="w-6 h-6 lg:w-10 lg:h-10 text-gray-400 hover:text-white" />
            </button>
          </div>

          <div className="flex justify-center mt-6 space-x-2">
            {teamMembers.map((_, i) => (
              <div
                key={i}
                className={`w-2 h-2 lg:w-3 lg:h-3 rounded-full ${
                  i === index ? "bg-white" : "bg-gray-500"
                }`}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Team;
