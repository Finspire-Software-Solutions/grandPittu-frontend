import { Formik } from 'formik';
import { useState } from 'react';
import apiService from '../services/apiService';
import Toast from './Toast';

const ContactForm = () => {
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
    
    if (!values.subject) {
      errors.subject = 'Required';
    }
    
    if (!values.message) {
      errors.message = 'Required';
    }
    
    return errors;
  };

  // Submit handler
  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    setIsSubmitting(true);
    setToast({ isVisible: false, message: '', type: '' });

    try {
      const response = await apiService.createContact(values);
      
      setToast({
        isVisible: true,
        type: 'success',
        message: 'Thank you for your message! We have received your inquiry and will get back to you soon.'
      });
      
      resetForm();
      
    } catch (error) {
      console.error('Contact submission error:', error);
      setToast({
        isVisible: true,
        type: 'error',
        message: error.message || 'Sorry, there was an error sending your message. Please try again or contact us directly.'
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
        initialValues={{ email: '', name: '', tel: '', subject: '', message: '' }}
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
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4">
                <div className="gp-field">
                  <input 
                    type="text" 
                    name="name" 
                    placeholder="Full Name" 
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
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4">
                <div className="gp-field">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
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
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4">
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
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <div className="gp-field">
                  <input 
                    type="text" 
                    name="subject" 
                    placeholder="Subject" 
                    required="required" 
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.subject}
                    style={{ borderColor: errors.subject && touched.subject ? '#dc3545' : '' }}
                  />
                  {errors.subject && touched.subject && (
                    <div className="error-text" style={{ color: '#dc3545', fontSize: '12px', marginTop: '5px' }}>
                      {errors.subject}
                    </div>
                  )}
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <div className="gp-field">
                  <textarea
                    name="message"
                    placeholder="Message"
                    required="required" 
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.message}
                    style={{ borderColor: errors.message && touched.message ? '#dc3545' : '' }}
                  />
                  {errors.message && touched.message && (
                    <div className="error-text" style={{ color: '#dc3545', fontSize: '12px', marginTop: '5px' }}>
                      {errors.message}
                    </div>
                  )}
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <div className="gp-bts">
                  <button
                    type="submit"
                    className="gp-btn"
                    disabled={isSubmitting}
                  >
                    <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
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

export default ContactForm;
