import { Link, useLocation } from "react-router-dom";
import {
  FiHome,
  FiFolder,
  FiBriefcase,
  FiTool,
  FiEdit,
} from "react-icons/fi";

function Dock() {
  const location = useLocation();

  const items = [
    { to: "/", icon: <FiHome size={22} /> },
    { to: "/works", icon: <FiFolder size={22} /> },
    { to: "/resume", icon: <FiBriefcase size={22} /> },
    { to: "/skills", icon: <FiTool size={22} /> },
  ];

  return (
    <div className="fixed top-6 md:top-10 left-1/2 -translate-x-1/2 z-50">
      <div className="flex items-center gap-6 px-8 py-4 rounded-2xl bg-[#1a1a1a]/90 backdrop-blur shadow-2xl">
        {items.map((item, index) => {
          const isActive = location.pathname === item.to;

          return (
            <Link
              key={index}
              to={item.to}
              className={`transition-all ${
                isActive
                  ? "text-white scale-110"
                  : "text-gray-400 hover:text-white hover:scale-110"
              }`}
            >
              {item.icon}
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Dock;
