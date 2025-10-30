import React from 'react';

const Reiki = () => {
  const benefits = [
    {
      icon: 'fa-spa',
      title: 'Stress Reduction',
      description: 'Experience deep relaxation and relief from daily stress and tension'
    },
    {
      icon: 'fa-brain',
      title: 'Mental Clarity',
      description: 'Improve focus, reduce anxiety, and achieve mental balance'
    },
    {
      icon: 'fa-heart-pulse',
      title: 'Physical Healing',
      description: 'Support your body\'s natural healing processes and boost vitality'
    },
    {
      icon: 'fa-yin-yang',
      title: 'Energy Balance',
      description: 'Restore harmony and balance to your body\'s energy centers'
    },
    {
      icon: 'fa-bed',
      title: 'Better Sleep',
      description: 'Improve sleep quality and overcome insomnia naturally'
    },
    {
      icon: 'fa-smile',
      title: 'Emotional Wellness',
      description: 'Release emotional blockages and promote inner peace'
    }
  ];

  return (
    <section className="reiki" id="reiki">
      <div className="reiki-container">
        <div className="reiki-header">
          <h2 className="section-title">What is Reiki?</h2>
          <div className="title-underline"></div>
        </div>

        <div className="reiki-intro">
          <p>
            Reiki is a Japanese healing technique that promotes relaxation, reduces stress, and
            encourages healing through gentle touch or hands hovering over the body. The word
            "Reiki" comes from two Japanese words: "Rei" (universal) and "Ki" (life energy).
          </p>
          <p>
            This ancient practice works with the body's natural energy flow to restore balance
            and harmony. During a Reiki session, I channel universal life energy to help remove
            blockages, promote healing, and bring your mind, body, and spirit into alignment.
          </p>
        </div>

        <div className="benefits-section">
          <h3>Benefits of Reiki</h3>
          <div className="benefits-grid">
            {benefits.map((benefit, index) => (
              <div className="benefit-card" key={index}>
                <div className="benefit-icon">
                  <i className={`fas ${benefit.icon}`}></i>
                </div>
                <h4>{benefit.title}</h4>
                <p>{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="what-to-expect">
          <h3>What to Expect in a Session</h3>
          <div className="session-steps">
            <div className="step">
              <div className="step-number">1</div>
              <div className="step-content">
                <h4>Consultation</h4>
                <p>We'll discuss your needs, concerns, and intentions for the session</p>
              </div>
            </div>
            <div className="step">
              <div className="step-number">2</div>
              <div className="step-content">
                <h4>Relaxation</h4>
                <p>You'll lie comfortably on a massage table, fully clothed, in a peaceful environment</p>
              </div>
            </div>
            <div className="step">
              <div className="step-number">3</div>
              <div className="step-content">
                <h4>Energy Work</h4>
                <p>I'll place my hands gently on or above different areas of your body, channeling healing energy</p>
              </div>
            </div>
            <div className="step">
              <div className="step-number">4</div>
              <div className="step-content">
                <h4>Integration</h4>
                <p>After the session, we'll discuss your experience and any insights or sensations you noticed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reiki;
