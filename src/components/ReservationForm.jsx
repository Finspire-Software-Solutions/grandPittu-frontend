import { Formik } from 'formik';

const ReservationForm = () => {
  
  const formData = {
    "formspreeURL": "https://formspree.io/f/YOUR_API_KEY"
  }
  
  return (
    <>
      <Formik
        initialValues = {{ email: '', name: '', tel: '', date: '', time: '', persons: '1' }}
        validate = { values => {
            const errors = {};
            if (!values.email) {
                errors.email = 'Required';
            } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
                errors.email = 'Invalid email address';
            }
            return errors;
        }}
        onSubmit = {( values, { setSubmitting, resetForm } ) => {
            const form = document.getElementById("contactForm");
            const status = document.getElementById("contactFormStatus");
            const data = new FormData();

            data.append('name', values.name);
            data.append('email', values.email);
            data.append('tel', values.tel);
            data.append('date', values.date);
            data.append('time', values.time);
            data.append('persons', values.persons);

            fetch(form.action, {
                method: 'POST',
                body: data,
                headers: {
                    'Accept': 'application/json'
                }
            }).then(response => {
                console.log(response);
                if (response.ok) {
                    resetForm();
                    status.innerHTML = "Thanks for your submission!";
                    status.style.display = 'block';
                    form.style.display = 'none';

                    setTimeout(function(){
                      status.style.display = 'none';
                      form.style.display = 'block';
                    }, 4000);
                } else {
                    response.json().then(data => {
                        if (Object.hasOwn(data, 'errors')) {
                            status.innerHTML = data["errors"].map(error => error["message"]).join(", ")
                        } else {
                            status.innerHTML = "Oops! There was a problem submitting your form"
                        }
                    })
                }
            }).catch(error => {
                status.innerHTML = "Oops! There was a problem submitting your form"
            });

            setSubmitting(false);
        }}
        >
        {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
            /* and other goodies */
        }) => (
        <form onSubmit={handleSubmit} id="contactForm" action={formData.formspreeURL}>

            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                <div className="gp-field">
                  <input
                    type="text" 
                    placeholder="Full Name"
                    name="name" 
                    required="required" 
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.name} 
                  />
                  <i className="far fa-user" />
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                <div className="gp-field">
                  <input
                    type="email" 
                    placeholder="Email Address"
                    name="email"
                    required="required"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                  />
                  <i className="fas fa-at" />
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                <div className="gp-field">
                  <input 
                    type="tel" 
                    name="tel" 
                    placeholder="Phone Number"
                    required="required"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.tel}
                  />
                  <i className="fas fa-mobile-alt" />
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                <div className="gp-field">
                  <input 
                    type="number" 
                    name="persons" 
                    placeholder="Number of Persons"
                    required="required"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.persons}
                  />
                  
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                <div className="gp-field">
                  <input 
                    type="date" 
                    name="date" 
                    required="required"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.date}
                  />
                  
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                <div className="gp-field">
                  <select
                    name="time"
                    required="required"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.time}
                  >
                    <option value="">Select Time Slot</option>
                    <option value="10:00">10:00 AM</option>
                    <option value="10:30">10:30 AM</option>
                    <option value="11:00">11:00 AM</option>
                    <option value="11:30">11:30 AM</option>
                    <option value="12:00">12:00 PM</option>
                    <option value="12:30">12:30 PM</option>
                    <option value="13:00">1:00 PM</option>
                    <option value="13:30">1:30 PM</option>
                    <option value="14:00">2:00 PM</option>
                    <option value="14:30">2:30 PM</option>
                    <option value="15:00">3:00 PM</option>
                    <option value="15:30">3:30 PM</option>
                    <option value="16:00">4:00 PM</option>
                    <option value="16:30">4:30 PM</option>
                    <option value="17:00">5:00 PM</option>
                    <option value="17:30">5:30 PM</option>
                    <option value="18:00">6:00 PM</option>
                    <option value="18:30">6:30 PM</option>
                    <option value="19:00">7:00 PM</option>
                    <option value="19:30">7:30 PM</option>
                    <option value="20:00">8:00 PM</option>
                  </select>
                  <i className="far fa-clock" />
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <div className="gp-bts">
                  <button
                    type="submit"
                    className="gp-btn"
                  >
                    <span>booking table</span>
                    <i className="fas fa-chevron-right" />
                  </button>
                </div>
              </div>
            </div>

        </form>
        )}
      </Formik>
      <div className="alert-success" style={{ display: "none", textAlign: "center" }} id="contactFormStatus">
        <p>Thanks, your message is sent successfully.</p>
      </div>
    </>
  );
};
export default ReservationForm;
