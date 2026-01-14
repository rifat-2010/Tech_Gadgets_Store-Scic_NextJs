"use client";

import Link from "next/link";
import {
  AiOutlineCalendar,
  AiOutlineUser,
  AiOutlineHeart,
  AiOutlineRight,
} from "react-icons/ai";
import { IoMailUnread } from "react-icons/io5";
import { toast } from "react-toastify";
import {
  FaMicrochip,
  FaStar,
  FaBookOpen,
  FaRegNewspaper,
  FaBalanceScale,
  FaLightbulb,
} from "react-icons/fa";

export default function Blog() {
  const handleSubscribe = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    console.log(email);
    toast.success("Welcome to our Tech Inner Circle!");
  };

  const blogPosts = [
    {
      id: 1,
      title: "How Wireless Headphones Changed Our Audio Experience",
      excerpt:
        "Discover the evolution of wireless technology and how it revolutionized the way we listen to music.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6QTPoMLcuHn_dT9q9e72eAb3XqTnXNMgmrQ&s",
      author: "Sarah Johnson",
      date: "Dec 10, 2024",
      category: "Audio",
      readTime: "5 min read",
      likes: 245,
    },
    {
      id: 2,
      title: "Gaming Keyboards: Precision Meets Performance",
      excerpt:
        "Explore the latest mechanical gaming keyboards that define competitive gaming standards.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5GK2MzT3kVjaQjYRrSKAw0oWiFx1L_51DPA&s",
      author: "Alex Chen",
      date: "Dec 8, 2024",
      category: "Gaming",
      readTime: "6 min read",
      likes: 189,
    },
    {
      id: 3,
      title: "Smart Watches: The Future of Health Monitoring",
      excerpt:
        "Learn how smart watches are transforming personal health tracking and fitness monitoring.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbulcWo8zgzvlObFpnfgn7lo-62uDkSjgbrg&s",
      author: "Emma Davis",
      date: "Dec 5, 2024",
      category: "Wearable",
      readTime: "7 min read",
      likes: 312,
    },
    {
      id: 4,
      title: "Portable Speakers: Audio Freedom Wherever You Go",
      excerpt:
        "Discover the best portable speakers for outdoor adventures and travel.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRrp-IZ701GS43DTqGeTBb2C-yIn6Ry97RAw&s",
      author: "Michael Brown",
      date: "Dec 3, 2024",
      category: "Audio",
      readTime: "5 min read",
      likes: 167,
    },
    {
      id: 5,
      title: "Power Banks: Never Run Out of Battery Again",
      excerpt:
        "Essential guide to choosing the perfect power bank for your lifestyle.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_gXCgj5sbkbrK9yJ-SxVDyy0au_n1dg8NAw&s",
      author: "Lisa Wong",
      date: "Nov 30, 2024",
      category: "Accessories",
      readTime: "4 min read",
      likes: 234,
    },
    {
      id: 6,
      title: "4K Monitors: Redefining Visual Excellence",
      excerpt:
        "Explore the impact of ultra-high resolution displays on productivity and entertainment.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShFth6bF6nHDlrkpcn-up_3pIqVXM5RnQjiQ&s",
      author: "James Wilson",
      date: "Nov 28, 2024",
      category: "Display",
      readTime: "8 min read",
      likes: 298,
    },
  ];

  const impacts = [
    {
      title: "Communication Revolution",
      description:
        "Gadgets have transformed how we connect with loved ones across the globe, making instant communication possible.",
      icon: "🌐",
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Productivity Boost",
      description:
        "Modern tech gadgets have increased work efficiency and enabled remote work possibilities.",
      icon: "⚡",
      color: "from-yellow-500 to-orange-500",
    },
    {
      title: "Health & Wellness",
      description:
        "Wearable technology now monitors our health metrics, promoting a healthier lifestyle.",
      icon: "❤️",
      color: "from-red-500 to-pink-500",
    },
    {
      title: "Entertainment Unlimited",
      description:
        "Portable devices have redefined how we consume entertainment, anytime and anywhere.",
      icon: "🎬",
      color: "from-purple-500 to-indigo-500",
    },
  ];

  const categories = [
    {
      name: "Latest Tech Trends",
      icon: <FaMicrochip />,
      color: "from-blue-500 to-cyan-400",
    },
    {
      name: "Expert Reviews",
      icon: <FaStar />,
      color: "from-purple-500 to-pink-400",
    },
    {
      name: "How-To Guides",
      icon: <FaBookOpen />,
      color: "from-orange-500 to-yellow-400",
    },
    {
      name: "Industry News",
      icon: <FaRegNewspaper />,
      color: "from-emerald-500 to-teal-400",
    },
    {
      name: "Product Comparisons",
      icon: <FaBalanceScale />,
      color: "from-indigo-500 to-blue-400",
    },
    {
      name: "Tech Tips & Tricks",
      icon: <FaLightbulb />,
      color: "from-rose-500 to-red-400",
    },
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-linear-to-br from-slate-900 via-blue-900 to-slate-900 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Tech Insights &{" "}
            <span className="bg-linear-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Future Stories
            </span>
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Explore the latest gadgets, groundbreaking innovations, and expert
            perspectives on how technology is reshaping our modern world.
          </p>
        </div>
      </section>

      {/* Featured Blog Posts - Large Cards */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Latest Articles
            </h2>
            <p className="text-gray-600 text-lg">
              Discover insights about technology that's shaping our future
            </p>
          </div>

          {/* Blog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <div
                key={post.id}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer group"
              >
                {/* Image */}
                <div className="relative h-56 overflow-hidden bg-gray-200">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    {post.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Meta Info */}
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-4 pb-4 border-b border-gray-200">
                    <div className="flex items-center gap-2">
                      <AiOutlineCalendar />
                      {post.date}
                    </div>
                    <div>{post.readTime}</div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition duration-200">
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
                    <AiOutlineUser />
                    <span>{post.author}</span>
                  </div>

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                    <div className="flex items-center gap-2 text-red-500">
                      <AiOutlineHeart size={18} />
                      <span className="text-sm">{post.likes}</span>
                    </div>
                    <button className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold transition duration-200">
                      Read More
                      <AiOutlineRight />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How Gadgets Changed Our Lives Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              How Gadgets <span className="text-blue-600">Transform Lives</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Technology isn't just about devices; it's about making life
              smarter, faster, and more connected.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Impact 1: Connectivity */}
            <div className="group bg-linear-to-br from-white to-blue-50 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-blue-100 hover:border-blue-300">
              <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-linear-to-br from-blue-100 to-blue-200 group-hover:from-blue-600 group-hover:to-blue-700 flex items-center justify-center transition-all duration-500 transform group-hover:scale-110">
                <span className="text-4xl group-hover:scale-110 transition-transform">
                  🌐
                </span>
              </div>
              <h3 className="text-xl font-bold text-center mb-4 text-gray-800">
                Seamless Connectivity
              </h3>
              <p className="text-gray-600 text-center leading-relaxed">
                Stay connected with the world 24/7. From smartwatches to
                high-end phones, gadgets bridge the gap between people.
              </p>
            </div>

            {/* Impact 2: Productivity */}
            <div className="group bg-linear-to-br from-white to-purple-50 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-purple-100 hover:border-purple-300">
              <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-linear-to-br from-purple-100 to-purple-200 group-hover:from-purple-600 group-hover:to-purple-700 flex items-center justify-center transition-all duration-500 transform group-hover:scale-110">
                <span className="text-4xl group-hover:scale-110 transition-transform">
                  🚀
                </span>
              </div>
              <h3 className="text-xl font-bold text-center mb-4 text-gray-800">
                Peak Productivity
              </h3>
              <p className="text-gray-600 text-center leading-relaxed">
                Modern laptops and tablets empower creators and professionals to
                work from anywhere with incredible efficiency.
              </p>
            </div>

            {/* Impact 3: Smart Living */}
            <div className="group bg-linear-to-br from-white to-green-50 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-green-100 hover:border-green-300">
              <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-linear-to-br from-green-100 to-green-200 group-hover:from-green-600 group-hover:to-green-700 flex items-center justify-center transition-all duration-500 transform group-hover:scale-110">
                <span className="text-4xl group-hover:scale-110 transition-transform">
                  🏠
                </span>
              </div>
              <h3 className="text-xl font-bold text-center mb-4 text-gray-800">
                Smart Living
              </h3>
              <p className="text-gray-600 text-center leading-relaxed">
                Home automation and IoT devices have made our daily routines
                more comfortable, safe, and energy-efficient.
              </p>
            </div>

            {/* Impact 4: Entertainment */}
            <div className="group bg-linear-to-br from-white to-orange-50 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-orange-100 hover:border-orange-300">
              <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-linear-to-br from-orange-100 to-orange-200 group-hover:from-orange-600 group-hover:to-orange-700 flex items-center justify-center transition-all duration-500 transform group-hover:scale-110">
                <span className="text-4xl group-hover:scale-110 transition-transform">
                  🎮
                </span>
              </div>
              <h3 className="text-xl font-bold text-center mb-4 text-gray-800">
                Ultimate Entertainment
              </h3>
              <p className="text-gray-600 text-center leading-relaxed">
                Immersive VR headsets and gaming consoles have revolutionized
                the way we relax and enjoy digital experiences.
              </p>
            </div>

            {/* Impact 5: Health & Fitness */}
            <div className="group bg-linear-to-br from-white to-red-50 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-red-100 hover:border-red-300">
              <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-linear-to-br from-red-100 to-red-200 group-hover:from-red-600 group-hover:to-red-700 flex items-center justify-center transition-all duration-500 transform group-hover:scale-110">
                <span className="text-4xl group-hover:scale-110 transition-transform">
                  ⌚
                </span>
              </div>
              <h3 className="text-xl font-bold text-center mb-4 text-gray-800">
                Health Monitoring
              </h3>
              <p className="text-gray-600 text-center leading-relaxed">
                Wearable tech tracks your heart rate and sleep, giving you total
                control over your fitness and well-being.
              </p>
            </div>

            {/* Impact 6: Education */}
            <div className="group bg-linear-to-br from-white to-cyan-50 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-cyan-100 hover:border-cyan-300">
              <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-linear-to-br from-cyan-100 to-cyan-200 group-hover:from-cyan-600 group-hover:to-cyan-700 flex items-center justify-center transition-all duration-500 transform group-hover:scale-110">
                <span className="text-4xl group-hover:scale-110 transition-transform">
                  🎓
                </span>
              </div>
              <h3 className="text-xl font-bold text-center mb-4 text-gray-800">
                Modern Learning
              </h3>
              <p className="text-gray-600 text-center leading-relaxed">
                E-readers and digital notebooks have made knowledge accessible,
                eco-friendly, and portable for everyone.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Innovation Timeline Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Tech Evolution Timeline
            </h2>
            <p className="text-gray-600 text-lg">
              How technology has evolved over the decades
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              {
                year: "2000s",
                title: "The Mobile Era Begins",
                description:
                  "Smartphones emerged, changing how we interact with technology. The iPhone revolutionized mobile computing and set new standards for innovation.",
              },
              {
                year: "2010s",
                title: "Cloud & AI Revolution",
                description:
                  "Cloud computing became mainstream, and artificial intelligence started transforming industries. IoT devices became interconnected.",
              },
              {
                year: "2020s",
                title: "Wearables & 5G",
                description:
                  "Wearable technology matured, health monitoring became mainstream, and 5G networks enabled faster connectivity and new possibilities.",
              },
              {
                year: "2024+",
                title: "The Future is Now",
                description:
                  "Advanced AI integration, quantum computing breakthroughs, and sustainable tech innovations are shaping the next generation of gadgets.",
              },
            ].map((era, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-4 border-blue-600"
              >
                <div className="text-sm font-bold text-blue-600 uppercase tracking-wider mb-2">
                  {era.year}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {era.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {era.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Cover Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
              Explore Our <span className="text-blue-600">Knowledge Hub</span>
            </h2>
            <p className="text-slate-500 text-lg max-w-2xl mx-auto">
              Stay ahead with comprehensive coverage of everything happening in
              the world of technology.
            </p>
            <div className="h-1.5 w-20 bg-blue-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((cat, index) => (
              <div
                key={index}
                className="group relative bg-white p-8 rounded-3xl border border-slate-200 hover:border-transparent transition-all duration-500 hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.1)] overflow-hidden cursor-pointer"
              >
                {/* Hover Gradient Background */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${cat.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                ></div>

                <div className="relative z-10 flex items-start gap-6">
                  <div
                    className={`flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br ${cat.color} flex items-center justify-center text-white text-2xl shadow-lg transform group-hover:rotate-6 transition-transform duration-500`}
                  >
                    {cat.icon}
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-slate-800 group-hover:text-blue-600 transition-colors">
                      {cat.name}
                    </h3>
                    <p className="text-slate-500 text-sm leading-relaxed">
                      Explore deep dives and latest updates about{" "}
                      {cat.name.toLowerCase()} for tech enthusiasts.
                    </p>
                  </div>
                </div>

                {/* Decorative Arrow */}
                <div className="absolute bottom-4 right-6 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-4 group-hover:translate-x-0">
                  <span className="text-blue-600 font-bold text-xl">→</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Subscription Section */}
      <section data-aos="fade-up" className="w-full mx-auto">
        <div
          className="relative min-h-[450px] flex items-center overflow-hidden shadow-2xl"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070&auto=format&fit=crop')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Dark linear Overlay */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to right, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.6) 50%, rgba(0, 0, 0, 0.2) 100%)",
            }}
          ></div>

          {/* Content Container */}
          <div className="relative z-10 w-full md:w-1/2 px-8 py-16 md:px-20 text-left">
            {/* Animated Mail Icon */}
            <div className="w-16 h-16 mb-6 rounded-2xl bg-blue-600/20 backdrop-blur flex items-center justify-center shadow-lg border border-blue-500/30 animate-pulse">
              <IoMailUnread className="h-8 w-8 text-blue-400" />
            </div>

            {/* Heading */}
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4 leading-tight">
              Stay Ahead of{" "}
              <span className="text-blue-500">The Tech Curve</span>
            </h2>

            <p className="text-gray-300 max-w-lg mb-10 text-lg">
              Get the latest gadget reviews, exclusive tech deals, and
              innovation updates delivered straight to your inbox every week.
            </p>

            {/* Form */}
            <form
              onSubmit={handleSubscribe}
              className="flex flex-col sm:flex-row gap-4 max-w-lg"
            >
              <input
                name="email"
                type="email"
                required
                placeholder="Your professional email"
                className="flex-1 px-6 py-4 rounded-xl bg-white/10 backdrop-blur-md text-white placeholder:text-gray-400 border border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
              />

              <button
                type="submit"
                className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl shadow-lg shadow-blue-600/30 transition-all transform hover:scale-105 active:scale-95 cursor-pointer whitespace-nowrap"
              >
                Join Now
              </button>
            </form>

            <p className="text-gray-400 text-sm mt-5 flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-ping"></span>
              Join 50,000+ tech enthusiasts. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 bg-gray-50 border-t border-gray-200">
        <div className="w-11/12 max-w-7xl mx-auto text-center">
          {/* Heading with spacing and tracking */}
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-6 uppercase">
            Start Your Tech Journey <br />
            <span className="text-blue-600">With Our Gadget Store Today!</span>
          </h2>

          {/* Short Description */}
          <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Discover the latest innovations and premium tech gadgets. Your next
            upgrade is just a click away.
          </p>

          {/* Center Aligned Button */}
          <div className="flex justify-center">
            <Link
              href="/products"
              className="px-12 py-4 bg-linear-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold rounded-xl shadow-xl hover:shadow-blue-500/40 transition-all duration-300 transform hover:scale-105 flex items-center gap-3 text-lg group"
            >
              Shop Now
              <span className="group-hover:translate-x-1 transition-transform">
                🚀
              </span>
            </Link>
          </div>

          {/* Small Trust Badge or Note */}
          <p className="mt-6 text-gray-400 text-sm font-medium">
            Free shipping on all orders over $500
          </p>
        </div>
      </section>
    </div>
  );
}
