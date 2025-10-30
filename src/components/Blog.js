import React, { useState } from 'react';

const Blog = () => {
  const [selectedPost, setSelectedPost] = useState(null);

  const blogPosts = [
    {
      id: 1,
      title: 'Understanding the Seven Chakras',
      excerpt: 'Learn about the seven main energy centers in your body and how Reiki can help balance them.',
      date: 'October 15, 2024',
      category: 'Energy Healing',
      content: `The seven chakras are the main energy centers in our body, each governing different aspects of our physical, emotional, and spiritual well-being. Understanding these energy centers can enhance your Reiki experience and help you identify areas that may need healing attention.

Starting from the base of the spine to the crown of the head, each chakra vibrates at a different frequency and is associated with specific colors, elements, and life aspects. When these chakras are balanced and flowing freely, we experience optimal health and vitality.

Reiki works beautifully with the chakra system, helping to clear blockages and restore balance. During a session, I focus on each energy center, allowing healing energy to flow where it's needed most.`
    },
    {
      id: 2,
      title: 'Preparing for Your First Reiki Session',
      excerpt: 'Tips and guidance to help you get the most out of your first Reiki healing experience.',
      date: 'October 8, 2024',
      category: 'Getting Started',
      content: `If you're preparing for your first Reiki session, you might be feeling a mixture of excitement and curiosity. Here are some tips to help you prepare and get the most from your experience.

Wear comfortable, loose-fitting clothing. You'll remain fully clothed during the session, so comfort is key. Avoid heavy meals right before your appointment, but don't come on an empty stomach either.

Set an intention for your session. What would you like to work on? Whether it's stress relief, emotional healing, or physical discomfort, having a clear intention can enhance your experience.

Keep an open mind and be receptive to the healing energy. Everyone experiences Reiki differently - some feel warmth, tingling, or deep relaxation, while others may have emotional releases or insights. All experiences are valid and beneficial.`
    },
    {
      id: 3,
      title: 'The History and Origins of Reiki',
      excerpt: 'Discover the fascinating history of Reiki and how this ancient practice has evolved over time.',
      date: 'October 1, 2024',
      category: 'History',
      content: `Reiki was developed in the early 1900s by Mikao Usui, a Japanese Buddhist monk. After years of study and meditation, Usui experienced a profound spiritual awakening on Mount Kurama, where he received the ability to heal through the channeling of universal life energy.

Usui established the Usui Reiki Ryoho Gakkai, a society dedicated to teaching and practicing this healing art. His student, Chujiro Hayashi, later brought Reiki to the West through Hawayo Takata, a Japanese-American woman who became the first Reiki Master in the Western world.

Today, Reiki is practiced worldwide and has evolved into various forms while maintaining its core principles: promoting healing, balance, and spiritual growth through the channeling of universal life energy. The practice continues to help millions find peace, healing, and wellness.`
    },
    {
      id: 4,
      title: 'Reiki and Self-Care: Daily Practices',
      excerpt: 'Simple Reiki techniques you can incorporate into your daily routine for ongoing wellness.',
      date: 'September 24, 2024',
      category: 'Self-Care',
      content: `While professional Reiki sessions are incredibly beneficial, incorporating Reiki principles into your daily life can enhance and maintain your well-being between sessions.

Start your day with a simple self-Reiki practice. Place your hands over your heart and set an intention for the day. Take a few deep breaths and visualize healing energy flowing through your body.

Throughout the day, practice the five Reiki principles: Just for today, I will not worry. Just for today, I will not anger. Just for today, I will be grateful. Just for today, I will do my work honestly. Just for today, I will be kind to every living thing.

These simple practices can help you maintain balance, reduce stress, and stay connected to your inner wisdom and peace.`
    }
  ];

  const openPost = (post) => {
    setSelectedPost(post);
    document.body.style.overflow = 'hidden';
  };

  const closePost = () => {
    setSelectedPost(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <section className="blog" id="blog">
      <div className="blog-container">
        <div className="blog-header">
          <h2 className="section-title">Blog & Insights</h2>
          <div className="title-underline"></div>
          <p className="blog-subtitle">
            Explore articles about Reiki, energy healing, and wellness
          </p>
        </div>

        <div className="blog-grid">
          {blogPosts.map((post) => (
            <article className="blog-card" key={post.id}>
              <div className="blog-card-header">
                <span className="blog-category">{post.category}</span>
                <span className="blog-date">{post.date}</span>
              </div>
              <h3 className="blog-title">{post.title}</h3>
              <p className="blog-excerpt">{post.excerpt}</p>
              <button className="read-more" onClick={() => openPost(post)}>
                Read More <i className="fas fa-arrow-right"></i>
              </button>
            </article>
          ))}
        </div>
      </div>

      {selectedPost && (
        <div className="blog-modal" onClick={closePost}>
          <div className="blog-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closePost}>
              <i className="fas fa-times"></i>
            </button>
            <div className="modal-header">
              <span className="modal-category">{selectedPost.category}</span>
              <span className="modal-date">{selectedPost.date}</span>
            </div>
            <h2 className="modal-title">{selectedPost.title}</h2>
            <div className="modal-body">
              {selectedPost.content.split('\n\n').map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Blog;
