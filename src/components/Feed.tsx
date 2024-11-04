import React, { useState } from 'react';
import { Building2, Heart, MessageCircle, Share2, ThumbsUp } from 'lucide-react';

export default function Feed() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      company: 'TechCraft Solutions',
      time: '2 hours ago',
      content: 'Excited to announce our latest AI-powered solution for small businesses!',
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80',
      likes: 45,
      comments: 12,
      shares: 8,
      isLiked: false
    },
    {
      id: 2,
      company: 'Green Earth Co',
      time: '5 hours ago',
      content: 'Our new sustainable packaging initiative has reduced plastic waste by 75%!',
      image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80',
      likes: 89,
      comments: 24,
      shares: 15,
      isLiked: false
    },
    {
      id: 3,
      company: 'Creative Minds',
      time: '1 day ago',
      content: 'Check out our latest design project for an innovative startup!',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80',
      likes: 156,
      comments: 34,
      shares: 27,
      isLiked: false
    }
  ]);

  const handleLike = (postId) => {
    setPosts(posts.map(post => {
      if (post.id === postId) {
        return {
          ...post,
          likes: post.isLiked ? post.likes - 1 : post.likes + 1,
          isLiked: !post.isLiked
        };
      }
      return post;
    }));
  };

  return (
    <>
      {/* Create Post */}
      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex items-center space-x-4">
          <Building2 className="h-12 w-12 text-[#1a237e]" />
          <button className="flex-1 text-left px-4 py-2 rounded-full bg-gray-100 text-gray-500 hover:bg-gray-200">
            Share an update...
          </button>
        </div>
      </div>

      {/* Posts */}
      {posts.map((post) => (
        <div key={post.id} className="bg-white rounded-lg shadow">
          {/* Post Header */}
          <div className="p-6">
            <div className="flex items-center space-x-3">
              <Building2 className="h-10 w-10 text-[#1a237e]" />
              <div>
                <h3 className="font-semibold text-[#1a237e]">{post.company}</h3>
                <p className="text-sm text-gray-500">{post.time}</p>
              </div>
            </div>
            <p className="mt-4">{post.content}</p>
          </div>

          {/* Post Image */}
          <div className="relative h-96 w-full">
            <img
              src={post.image}
              alt={`${post.company}'s update`}
              className="absolute h-full w-full object-cover"
            />
          </div>

          {/* Post Actions */}
          <div className="p-6">
            <div className="flex items-center justify-between">
              <div className="flex space-x-2 items-center">
                <ThumbsUp className="h-5 w-5 text-[#90caf9]" />
                <span className="text-sm text-gray-500">{post.likes}</span>
              </div>
              <div className="flex space-x-4 text-sm text-gray-500">
                <span>{post.comments} comments</span>
                <span>{post.shares} shares</span>
              </div>
            </div>

            <div className="mt-4 pt-4 border-t border-gray-100 flex justify-between">
              <button
                onClick={() => handleLike(post.id)}
                className={`flex items-center space-x-2 ${
                  post.isLiked ? 'text-[#1a237e]' : 'text-gray-500'
                } hover:text-[#1a237e]`}
              >
                <Heart className="h-5 w-5" />
                <span>Like</span>
              </button>
              <button className="flex items-center space-x-2 text-gray-500 hover:text-[#1a237e]">
                <MessageCircle className="h-5 w-5" />
                <span>Comment</span>
              </button>
              <button className="flex items-center space-x-2 text-gray-500 hover:text-[#1a237e]">
                <Share2 className="h-5 w-5" />
                <span>Share</span>
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}