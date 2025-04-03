import React from 'react';

const Recentpost = () => {
  const posts = [
    {
      id: 1,
      img: "https://picsum.photos/400/300?random=1",
      date: "December 12",
      title: "Eum ad dolor",
      author: "Julia Parker",
      category: "Politics",
      link: "blog-details.html",
    },
    {
      id: 2,
      img: "https://picsum.photos/400/300?random=2",
      date: "July 17",
      title: "Et repellendus",
      author: "Mario Douglas",
      category: "Sports",
      link: "blog-details.html",
    },
  ];

  return (
    <div className="py-12 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Title and Description */}
        <div className="text-center mb-10" data-aos="fade-up">
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900">Experience the Magic of Iconic Events</h2>
          <p className="text-gray-600 mt-2">
            Step into the world of creativity and innovation at Cannes and Martha’s Vineyard. Connect with like-minded professionals, <br />
            showcase your talent, and unlock new opportunities.
          </p>
        </div>

        {/* Posts Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4 w-full">
          {posts.map(post => (
            <div key={post.id} className="relative w-full h-96 rounded-lg overflow-hidden">
              <img
                src={post.img}
                alt={`Image for ${post.title}`}
                className="w-full h-full object-cover rounded-lg"
              />
              <div className="absolute bottom-4 left-4 text-white">
                <p className="text-sm">{post.title}</p>
                <h2 className="text-2xl md:text-4xl font-semibold">{post.author}</h2>
              </div>
              <a
                href={post.link}
                className="absolute bottom-4 right-4 flex items-center justify-center w-10 h-10 rounded-full bg-white text-blue-500"
              >
                <span>&#8594;</span> {/* Right arrow icon */}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Recentpost;
