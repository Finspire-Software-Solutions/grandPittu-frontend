import InstaCarousel from "@/components/sliders/InstaCarousel";
import ReservationForm from "@/components/ReservationForm";
import Layouts from "@/layouts/Layouts";

const Reservation = () => {
  return (
    <Layouts>
      
      {/* Section Reservation */}
      <section className="section gp-reservation">
        <div className="container">
          <div
            className="gp-reservation-form element-anim-1 scroll-animate"
            data-animate="active"
          >
            <div className="gp-titles align-center">
              <div className="gp-subtitle">Booking Table</div>
              <h3 className="gp-title">Make Your Reservation</h3>
            </div>
            <ReservationForm />
          </div>
        </div>
      </section>
    </Layouts>
  );
};
export default Reservation;
