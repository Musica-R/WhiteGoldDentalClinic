import { useState } from 'react';
import '../style/AppointmentForm.css';

const CLINIC_PHONE_DISPLAY = '080 7570 1526';
const CLINIC_WHATSAPP_NUMBER = '918075701526'; // country code + number, no symbols

export default function AppointmentForm() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    timing: '',
    treatment: '',
    description: '',
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const next = {};
    if (!form.name.trim()) next.name = 'Please enter your name';
    if (!form.phone.trim()) {
      next.phone = 'Please enter your phone number';
    } else if (!/^[0-9+\s-]{7,15}$/.test(form.phone.trim())) {
      next.phone = 'Enter a valid phone number';
    }
    if (!form.treatment.trim()) next.treatment = 'Please select a treatment';
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    const message =
      `Appointment Request%0A` +
      `Name: ${encodeURIComponent(form.name)}%0A` +
      `Phone: ${encodeURIComponent(form.phone)}%0A` +
      `Preferred Timing: ${encodeURIComponent(form.timing || 'Not specified')}%0A` +
      `Treatment Needed: ${encodeURIComponent(form.treatment)}%0A` +
      `Description: ${encodeURIComponent(form.description || 'None')}`;

    const whatsappUrl = `https://wa.me/${CLINIC_WHATSAPP_NUMBER}?text=${message}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="appointment-form-section">
      <div className="appointment-form-wrap">
        <div className="appointment-form-head">
          <span className="appointment-form-eyebrow">Book an Appointment</span>
          <h2>Request Your Visit</h2>
          <p>
            Fill in your details and we'll get back to you, or reach us directly at{' '}
            <a href="tel:08075701526">{CLINIC_PHONE_DISPLAY}</a>.
          </p>
        </div>

        <form className="appointment-form" onSubmit={handleSubmit} noValidate>
          <div className="form-row">
            <div className="form-field">
              <label htmlFor="name">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Your full name"
                value={form.name}
                onChange={handleChange}
              />
              {errors.name && <span className="field-error">{errors.name}</span>}
            </div>

            <div className="form-field">
              <label htmlFor="phone">Phone Number</label>
              <input
                id="phone"
                name="phone"
                type="tel"
                placeholder="e.g. 98765 43210"
                value={form.phone}
                onChange={handleChange}
              />
              {errors.phone && <span className="field-error">{errors.phone}</span>}
            </div>
          </div>

          <div className="form-row">
            <div className="form-field">
              <label htmlFor="timing">Preferred Timing</label>
              <input
                id="timing"
                name="timing"
                type="text"
                placeholder="e.g. Weekday mornings"
                value={form.timing}
                onChange={handleChange}
              />
            </div>

            <div className="form-field">
              <label htmlFor="treatment">Treatment Needed</label>
              <input
                id="treatment"
                name="treatment"
                type="text"
                placeholder="e.g. Root canal, Cleaning"
                value={form.treatment}
                onChange={handleChange}
              />
              {errors.treatment && (
                <span className="field-error">{errors.treatment}</span>
              )}
            </div>
          </div>

          <div className="form-field form-field-full">
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              name="description"
              rows={4}
              placeholder="Tell us a bit more about your concern"
              value={form.description}
              onChange={handleChange}
            />
          </div>

          <button type="submit" className="appointment-form-submit">
            Send Appointment Request
          </button>
        </form>
      </div>
    </section>
  );
}