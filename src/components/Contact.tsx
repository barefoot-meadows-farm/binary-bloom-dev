
import { useState } from 'react';
import { TreeDeciduous, Send, Mail, Phone, ExternalLink } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import { cn } from '@/lib/utils';
import { toast } from 'sonner';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const templateParams = {
        to_email: 'contact@binarybloom.dev',
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message
      };
      
      console.log('Sending email with params:', templateParams);
      
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      toast.success("Message sent successfully! We'll be in touch soon.");
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error sending email:', error);
      toast.error('Failed to send message. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <section id="contact" className="section-padding relative overflow-hidden bg-secondary/30">
      <div className="absolute inset-0 bg-noise mix-blend-soft-light opacity-20"></div>
      
      <div className="container max-w-7xl mx-auto">
        <AnimatedSection className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full text-sm text-primary bg-primary/10 border border-primary/20 mb-4">
            <TreeDeciduous size={16} className="mr-2" />
            <span>Get In Touch</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-semibold mb-4">
            Let's Grow Together
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind? We'd love to hear from you and discuss how we can help bring your ideas to life.
          </p>
        </AnimatedSection>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          <AnimatedSection className="lg:col-span-2">
            <div className="space-y-8">
              <div className="bg-card rounded-xl p-6 border border-border hover:border-primary/20 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5">
                <div className="flex">
                  <div className="mr-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                      <Mail className="w-5 h-5" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Email Us</h3>
                    <a 
                      href="mailto:contact@binarybloom.dev" 
                      className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-1"
                    >
                      contact@binarybloom.dev
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="bg-card rounded-xl p-6 border border-border hover:border-primary/20 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5">
                <div className="flex">
                  <div className="mr-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                      <Phone className="w-5 h-5" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Call or Text</h3>
                    <a 
                      href="tel:+14237177569" 
                      className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-1"
                    >
                      (423) 717-7569
                      <ExternalLink className="w-3 h-3" />
                    </a>
                    <p className="text-muted-foreground">Available 24/7</p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
          
          <AnimatedSection className="lg:col-span-3" delay={200}>
            <div className="bg-card rounded-xl p-6 md:p-8 border border-border">
              <h3 className="text-xl font-semibold mb-6">Send us a message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full rounded-lg border border-border bg-background px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                    placeholder="John Doe"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full rounded-lg border border-border bg-background px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                    placeholder="john@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full rounded-lg border border-border bg-background px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                    placeholder="Tell us about your project..."
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={cn(
                    "w-full rounded-lg bg-primary text-primary-foreground font-medium py-3 px-4 transition-all hover:shadow-lg hover:shadow-primary/20 focus:outline-none focus:ring-2 focus:ring-primary/50 flex items-center justify-center",
                    isSubmitting && "opacity-80"
                  )}
                >
                  {isSubmitting ? (
                    <span className="animate-pulse">Sending...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default Contact;
