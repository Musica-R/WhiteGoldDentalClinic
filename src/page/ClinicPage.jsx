import PageBanner from '../components/PageBanner';
import Clinic from '../components/Clinic';
import AppointmentForm from '../components/AppointmentForm';
import AppointmentCTA from '../components/AppointmentCTA';
import '../style/ClinicPage.css';

export default function ClinicPage() {
  return (
    <main className="clinic-page">
      <PageBanner
        eyebrow="Clinic &amp; Location"
        title="Visit White Gold Dental Clinic"
        desc="1st Floor, Sree Ram Clinic, Opp. Devi Temple, Vadakkanthara Road, Palakkad. Walk-ins welcome, or book ahead for a fixed appointment slot."
        crumb="Contact"
        image={{
          src: '/assets/contant.jpg',
          alt: 'White Gold Dental Clinic interior',
        }}
      />

      <Clinic />
      <AppointmentForm />
      <AppointmentCTA />
    </main>
  );
}