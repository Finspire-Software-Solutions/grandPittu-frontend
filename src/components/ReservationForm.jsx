import { Formik } from 'formik';
import { useState } from 'react';
import apiService from '../services/apiService';
import Toast from './Toast';

const ReservationForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState({ isVisible: false, message: '', type: '' });

  // Validation function
  const validateForm = (values) => {
    const errors = {};
    
    if (!values.email) {
      errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = 'Invalid email address';
    }
    
    if (!values.name) {
      errors.name = 'Required';
    }
    
    if (!values.tel) {
      errors.tel = 'Required';
    }
    
    if (!values.date) {
      errors.date = 'Required';
    }
    
    if (!values.time) {
      errors.time = 'Required';
    }
    
    if (!values.persons || values.persons < 1) {
      errors.persons = 'At least 1 person required';
    }
    
    return errors;
  };

  // Submit handler
  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    setIsSubmitting(true);
    setToast({ isVisible: false, message: '', type: '' });

    try {
      const response = await apiService.createReservation(values);
      
      setToast({
        isVisible: true,
        type: 'success',
        message: 'Thank you! Your reservation request has been submitted successfully. We will confirm your booking shortly.'
      });
      
      resetForm();
      
    } catch (error) {
      console.error('Reservation submission error:', error);
      setToast({
        isVisible: true,
        type: 'error',
        message: error.message || 'Sorry, there was an error submitting your reservation. Please try again or contact us directly.'
      });
    } finally {
      setIsSubmitting(false);
      setSubmitting(false);
    }
  };

  const handleToastClose = () => {
    setToast({ isVisible: false, message: '', type: '' });
  };

  return (
    <>
      <Toast
        message={toast.message}
        type={toast.type}
        isVisible={toast.isVisible}
        onClose={handleToastClose}
      />
      <Formik
        initialValues={{ email: '', name: '', tel: '', date: '', time: '', persons: '', message: '' }}
        validate={validateForm}
        onSubmit={handleSubmit}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <form onSubmit={handleSubmit} id="contactForm">
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
                    style={{ borderColor: errors.name && touched.name ? '#dc3545' : '' }}
                  />
                  <i className="far fa-user" />
                  {errors.name && touched.name && (
                    <div className="error-text" style={{ color: '#dc3545', fontSize: '12px', marginTop: '5px' }}>
                      {errors.name}
                    </div>
                  )}
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
                    style={{ borderColor: errors.email && touched.email ? '#dc3545' : '' }}
                  />
                  <i className="fas fa-at" />
                  {errors.email && touched.email && (
                    <div className="error-text" style={{ color: '#dc3545', fontSize: '12px', marginTop: '5px' }}>
                      {errors.email}
                    </div>
                  )}
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
                    style={{ borderColor: errors.tel && touched.tel ? '#dc3545' : '' }}
                  />
                  <i className="fas fa-mobile-alt" />
                  {errors.tel && touched.tel && (
                    <div className="error-text" style={{ color: '#dc3545', fontSize: '12px', marginTop: '5px' }}>
                      {errors.tel}
                    </div>
                  )}
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                <div className="gp-field">
                  <input 
                    type="number" 
                    name="persons" 
                    placeholder="Number of Persons"
                    required="required"
                    min="1"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.persons}
                    style={{ borderColor: errors.persons && touched.persons ? '#dc3545' : '' }}
                  />
                  <i className="fas fa-users" />
                  {errors.persons && touched.persons && (
                    <div className="error-text" style={{ color: '#dc3545', fontSize: '12px', marginTop: '5px' }}>
                      {errors.persons}
                    </div>
                  )}
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
                <div className="gp-field">
                  <textarea
                    name="message"
                    placeholder="Special requests or dietary requirements (optional)"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.message}
                  />
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <div className="gp-bts">
                  <button
                    type="submit"
                    className="gp-btn"
                    disabled={isSubmitting}
                  >
                    <span>{isSubmitting ? 'Booking...' : 'Book Table'}</span>
                    <i className="fas fa-chevron-right" />
                  </button>
                </div>
              </div>
            </div>
          </form>
        )}
      </Formik>
    </>
  );
};

export default ReservationForm;
