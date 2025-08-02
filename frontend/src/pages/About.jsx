import { BookmarkCheck, Tags, ShieldCheck, Trash2 } from "lucide-react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="min-h-[calc(100vh-8rem)] bg-gradient-to-br from-rose-50 via-amber-50 to-emerald-50 py-16 px-4">
      <div className="max-w-5xl mx-auto space-y-16">

       
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white/80 backdrop-blur-md p-8 rounded-2xl shadow-lg"
        >
          <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-4">
            About <span className="text-amber-600">LinkNest</span>
          </h1>
          <p className="text-center text-gray-700 text-lg max-w-3xl mx-auto">
            LinkNest is your personalized digital bookshelf — a beautiful and simple way to save, organize, and manage the links that matter most. From articles and videos to code snippets and tools, everything stays neatly nested in one place.
          </p>
        </motion.div>

     
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {[
            {
              icon: <BookmarkCheck className="text-rose-500 w-8 h-8" />,
              title: "Save Bookmarks",
              text: "Store useful links with custom titles and revisit them anytime.",
            },
            {
              icon: <Tags className="text-amber-500 w-8 h-8" />,
              title: "Tag & Filter",
              text: "Use tags to smartly categorize your bookmarks for easy access.",
            },
            {
              icon: <ShieldCheck className="text-emerald-500 w-8 h-8" />,
              title: "Private & Secure",
              text: "All bookmarks are protected with secure authentication.",
            },
            {
              icon: <Trash2 className="text-gray-500 w-8 h-8" />,
              title: "Clean Up Easily",
              text: "Remove outdated links effortlessly when you no longer need them.",
            },
          ].map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 * i }}
              className="flex items-start gap-4 bg-white/80 backdrop-blur-md p-6 rounded-xl shadow"
            >
              {feature.icon}
              <div>
                <h3 className="font-semibold text-lg text-gray-800">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.text}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

      
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-center bg-white/90 backdrop-blur-md p-8 rounded-2xl shadow-lg"
        >
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            🌱 Ready to build your personal library?
          </h2>
          <p className="text-gray-700 mb-6">
            Start saving your favorite links now and keep your digital life organized.
          </p>
          <a
            href="/register"
            className="inline-block bg-amber-500 hover:bg-amber-700 text-white font-semibold px-6 py-3 rounded-full transition"
          >
            Get Started
          </a>
        </motion.div>

      </div>
    </div>
  );
};

export default About;
