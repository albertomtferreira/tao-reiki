import React, { useState, ChangeEvent, FormEvent } from 'react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  preferredDate: string;
  sessionType: string;
  message: string;
}

const Booking: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    preferredDate: '',
    sessionType: 'first-time',
    message: ''
  });

  const [formStatus, setFormStatus] = useState<string>('');

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>): void => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    // For now, just show a success message
    // In production, you would integrate with EmailJS here
    setFormStatus('success');

    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      preferredDate: '',
      sessionType: 'first-time',
      message: ''
    });

    // Clear success message after 5 seconds
    setTimeout(() => {
      setFormStatus('');
    }, 5000);
  };

  return (
    <section className="booking" id="booking">
      <div className="booking-container">
        <div className="booking-header">
          <h2 className="section-title">Book Your Session</h2>
          <div className="title-underline"></div>
          <p className="booking-subtitle">
            Take the first step towards healing and balance
          </p>
        </div>

        <div className="booking-content">
          <div className="booking-info">
            <div className="info-card">
              <div className="info-icon">
                <i className="fas fa-clock"></i>
              </div>
              <h3>Session Duration</h3>
              <p>60-90 minutes</p>
              <span className="info-detail">Includes consultation and integration time</span>
            </div>

            <div className="info-card">
              <div className="info-icon">
                <i className="fas fa-dollar-sign"></i>
              </div>
              <h3>Investment</h3>
              <p>Sliding Scale Available</p>
              <span className="info-detail">Contact for pricing details</span>
            </div>

            <div className="info-card">
              <div className="info-icon">
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <h3>Location</h3>
              <p>In-Person & Remote</p>
              <span className="info-detail">Comfortable healing space or distance healing</span>
            </div>

            <div className="session-types">
              <h3>Session Types</h3>
              <ul>
                <li>
                  <i className="fas fa-check-circle"></i>
                  <div>
                    <strong>First-Time Session</strong>
                    <p>Perfect for those new to Reiki</p>
                  </div>
                </li>
                <li>
                  <i className="fas fa-check-circle"></i>
                  <div>
                    <strong>Follow-Up Session</strong>
                    <p>Continue your healing journey</p>
                  </div>
                </li>
                <li>
                  <i className="fas fa-check-circle"></i>
                  <div>
                    <strong>Distance Healing</strong>
                    <p>Receive healing energy remotely</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="booking-form-wrapper">
            <form className="booking-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Full Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your.email@example.com"
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="(555) 123-4567"
                />
              </div>

              <div className="form-group">
                <label htmlFor="preferredDate">Preferred Date</label>
                <input
                  type="date"
                  id="preferredDate"
                  name="preferredDate"
                  value={formData.preferredDate}
                  onChange={handleChange}
                  min={new Date().toISOString().split('T')[0]}
                />
              </div>

              <div className="form-group">
                <label htmlFor="sessionType">Session Type *</label>
                <select
                  id="sessionType"
                  name="sessionType"
                  value={formData.sessionType}
                  onChange={handleChange}
                  required
                >
                  <option value="first-time">First-Time Session</option>
                  <option value="follow-up">Follow-Up Session</option>
                  <option value="distance">Distance Healing</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Tell me a bit about what you'd like to work on or any questions you have..."
                ></textarea>
              </div>

              <button type="submit" className="submit-button">
                <i className="fas fa-paper-plane"></i>
                Send Booking Request
              </button>

              {formStatus === 'success' && (
                <div className="form-message success">
                  <i className="fas fa-check-circle"></i>
                  Thank you! Your booking request has been received. I'll be in touch soon!
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Booking;
