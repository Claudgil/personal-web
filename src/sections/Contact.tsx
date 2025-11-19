import { useState, useRef } from 'react';
import { Send, AlertCircle, CheckCircle } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import { ContactFormData } from '../types';
import { resumeData } from '../data/resumeData';

const Contact = () => {
  const { personal } = resumeData;
  const [formState, setFormState] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState<Partial<ContactFormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  
  const formRef = useRef<HTMLFormElement>(null);
  
  const validateForm = () => {
    const newErrors: Partial<ContactFormData> = {};
    
    if (!formState.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formState.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^\S+@\S+\.\S+$/.test(formState.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!formState.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }
    
    if (!formState.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({
      ...prev,
      [name]: value,
    }));
    
    // Clear the error for this field if it exists
    if (errors[name as keyof ContactFormData]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };
  
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  
  if (validateForm()) {
    setIsSubmitting(true);
    setSubmitStatus('idle');
    
    try {
      const response = await fetch('https://formspree.io/f/mnnznnyq', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formState),
      });
      
      if (response.ok) {
        setSubmitStatus('success');
        setFormState({
          name: '',
          email: '',
          subject: '',
          message: '',
        });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  }
};
  
  return (
    <section id="contact" className="section bg-secondary-50 dark:bg-secondary-800">
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="Contact Me" 
          subtitle="Have a question or want to work together? Feel free to get in touch!"
        />
        
        <div className="max-w-3xl mx-auto">
          <div className="card animate-on-scroll">
            {submitStatus === 'success' ? (
              <div className="flex flex-col items-center text-center py-6">
                <CheckCircle size={48} className="text-accent-500 mb-4" />
                <h3 className="text-xl font-bold mb-2 text-secondary-900 dark:text-white">
                  Message Sent Successfully!
                </h3>
                <p className="text-secondary-600 dark:text-secondary-300 mb-6">
                  Thank you for reaching out. I'll get back to you as soon as possible.
                </p>
                <button
                  onClick={() => setSubmitStatus('idle')}
                  className="btn btn-primary"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form ref={formRef} onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label 
                      htmlFor="name" 
                      className="block text-sm font-medium text-secondary-700 dark:text-secondary-300 mb-2"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 rounded-lg border ${
                        errors.name 
                          ? 'border-red-500 dark:border-red-500' 
                          : 'border-secondary-300 dark:border-secondary-600'
                      } focus:outline-none focus:ring-2 focus:ring-primary-500 dark:bg-secondary-700 dark:text-white`}
                      placeholder="Your name"
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-500">{errors.name}</p>
                    )}
                  </div>
                  
                  <div>
                    <label 
                      htmlFor="email" 
                      className="block text-sm font-medium text-secondary-700 dark:text-secondary-300 mb-2"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 rounded-lg border ${
                        errors.email 
                          ? 'border-red-500 dark:border-red-500' 
                          : 'border-secondary-300 dark:border-secondary-600'
                      } focus:outline-none focus:ring-2 focus:ring-primary-500 dark:bg-secondary-700 dark:text-white`}
                      placeholder="Your email"
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                    )}
                  </div>
                </div>
                
                <div className="mb-6">
                  <label 
                    htmlFor="subject" 
                    className="block text-sm font-medium text-secondary-700 dark:text-secondary-300 mb-2"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formState.subject}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 rounded-lg border ${
                      errors.subject 
                        ? 'border-red-500 dark:border-red-500' 
                        : 'border-secondary-300 dark:border-secondary-600'
                    } focus:outline-none focus:ring-2 focus:ring-primary-500 dark:bg-secondary-700 dark:text-white`}
                    placeholder="Subject"
                  />
                  {errors.subject && (
                    <p className="mt-1 text-sm text-red-500">{errors.subject}</p>
                  )}
                </div>
                
                <div className="mb-6">
                  <label 
                    htmlFor="message" 
                    className="block text-sm font-medium text-secondary-700 dark:text-secondary-300 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    rows={5}
                    className={`w-full px-4 py-2 rounded-lg border ${
                      errors.message 
                        ? 'border-red-500 dark:border-red-500' 
                        : 'border-secondary-300 dark:border-secondary-600'
                    } focus:outline-none focus:ring-2 focus:ring-primary-500 dark:bg-secondary-700 dark:text-white`}
                    placeholder="Your message"
                  ></textarea>
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-500">{errors.message}</p>
                  )}
                </div>
                
                {submitStatus === 'error' && (
                  <div className="mb-6 p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
                    <div className="flex items-center">
                      <AlertCircle size={20} className="text-red-500 mr-2" />
                      <p className="text-red-700 dark:text-red-400">
                        There was an error sending your message. Please try again.
                      </p>
                    </div>
                  </div>
                )}
                
                <button 
                  type="submit" 
                  className="btn btn-primary w-full flex items-center justify-center"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={18} className="mr-2" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
          
          <div className="mt-8 text-center animate-on-scroll">
            <p className="text-secondary-600 dark:text-secondary-300">
              Prefer direct contact? Reach me at <a 
                href={`mailto:${personal.email}`} 
                className="text-primary-600 dark:text-primary-400 font-medium hover:underline"
              >
                {personal.email}
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;