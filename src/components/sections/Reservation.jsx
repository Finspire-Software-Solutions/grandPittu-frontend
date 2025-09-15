import ReservationForm from "@/components/ReservationForm";

const ReservationSection = () => {
  return (
    <>
    {/* Section Reservation */}
    <section className="section gp-reservation gp-section-no-margin">
      <div className="container">
        <div
          className="gp-reservation-form element-anim-1 scroll-animate"
          data-animate="active"
        >
          <div
            className="image-left"
            style={{ backgroundImage: "url(images/reservation5.webp)" }}
          />
          <div
            className="image-right"
            style={{ backgroundImage: "url(images/reservation6.webp)" }}
          />
          <div className="gp-titles align-center">
            <div className="gp-subtitle">Booking Table</div>
            <h3 className="gp-title">Make Your Reservation</h3>
          </div>
          <ReservationForm />
        </div>
      </div>
    </section>
    </>
  );
};
export default ReservationSection;
