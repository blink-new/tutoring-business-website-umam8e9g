import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { blink } from '@/blink/client'

import { Mail, Phone, X, Menu, Check } from 'lucide-react'

const services = [
  {
    title: '30 Minute Tutoring Session',
    price: '$25/session',
    description: 'A 30-minute, 1-on-1 private tutoring session for students in 1st grade and above.',
    features: [
      'One-on-one session',
      'Homework help',
      'Test preparation',
      'Project work',
      'Tailored to each individual student',
      'Multiple subjects offered*',
    ],
    button: { label: 'Book Now', link: undefined },
    highlight: false,
    badge: undefined,
  },
  {
    title: '1-Hour Tutoring Session',
    price: '$40 / session',
    description: 'A 1-hour, 1-on-1 private tutoring session for students in 1st grade and above.',
    features: [
      'One-on-one session',
      'Homework help',
      'Test preparation',
      'Project work',
      'Tailored to each individual student',
      'Multiple subjects offered*',
    ],
    button: { label: 'Book Now', link: 'https://eduvancetutors.neetocal.com/1hour' },
    highlight: true,
    badge: 'Best Deal',
  },
  {
    title: '45-Minute Tutoring Session',
    price: '$35 / session',
    description: 'A 45-minute, 1-on-1 private tutoring session for students in 1st grade and above',
    features: [
      'One-on-one session',
      'Homework help',
      'Test preparation',
      'Project work',
      'Tailored to each individual student',
      'Multiple subjects offered*',
    ],
    button: { label: 'Book Now', link: undefined },
    highlight: false,
    badge: undefined,
  },
]

const subjects = [
  {
    name: 'Mathematics',
    description:
      'Enrich foundational concepts, prepare for exams, and strengthen problem-solving skills across all levels of 1st–11th grade math—including Algebra I & II, Geometry, and Trigonometry. Get support with homework, test prep, or overall subject comprehension.',
    color: 'text-blue-500',
  },
  {
    name: 'Science',
    description:
      'Explore Biology, Chemistry, Physics, and more while building a strong understanding of how the world works through the scientific method. Sessions can focus on homework, research papers, lab reports, test prep, or general comprehension.',
    color: 'text-green-500',
  },
  {
    name: 'English',
    description:
      'Enhance reading comprehension, vocabulary, grammar and both argumentative and creative writing skills. Sessions can address specific reading or writing assignments or support overall mastery of the subject.',
    color: 'text-purple-500',
  },
  {
    name: 'History',
    description:
      'Build confidence and understanding of historical topics and critical thinking. Sessions can include help with study guides, test prep, homework, or writing assignments such as DBQs, essays, or creative responses. Improve overall comprehension and written communication within historical contexts.',
    color: 'text-orange-500',
  },
  {
    name: 'Spanish',
    description:
      'Strengthen speaking, listening, reading, and writing skills in Spanish. Each session is tailored to your needs, promoting consistent progress and real-world language confidence. Focus on homework, grammar, conversational skills, or overall language development.',
    color: 'text-pink-500',
  },
]

export default function App() {
  const [showBanner, setShowBanner] = useState(true)
  const [mobileNavOpen, setMobileNavOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      await blink.notifications.email({
        to: 'eduvancetutors@gmail.com',
        subject: 'New Contact Form Submission',
        html: `<div><b>Name:</b> ${formData.name}<br/><b>Email:</b> ${formData.email}<br/><b>Phone:</b> ${formData.phone}<br/><b>Message:</b> ${formData.message}</div>`,
        text: `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nMessage: ${formData.message}`,
      })
      alert('Thank you for reaching out! We will get back to you soon.')
      setFormData({ name: '', email: '', phone: '', message: '' })
    } catch {
      alert('There was an error sending your message. Please try again later.')
    }
  }
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }
  // Responsive nav links
  const navLinks = [
    { label: 'Mission', href: '#mission' },
    { label: 'Services', href: '#services' },
    { label: 'Subjects', href: '#subjects' },
    { label: 'Contact', href: '#contact' },
  ]

  // Calculate dynamic padding for main content
  const bannerHeight = showBanner ? 42 : 0; // Approx. height of banner (py-2.5 + text-sm line-height)
  const headerHeight = 64; // Approx. height of header (py-4 + h-8 logo)
  const totalOffset = bannerHeight + headerHeight;

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-slate-900 to-black text-white">
      {/* Sticky Header Container */}
      <div className="sticky top-0 z-50">
        {/* Promo Banner */}
        {showBanner && (
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white text-center py-2.5 px-4 text-sm flex items-center justify-center">
            <span>Save $10 on your first session with code <strong className="font-bold">FIRSTSESSION</strong></span>
            <button onClick={() => setShowBanner(false)} className="absolute right-4 top-1/2 -translate-y-1/2">
              <X className="h-5 w-5" />
            </button>
          </div>
        )}
        {/* Header */}
        <header className="w-full bg-black/30 backdrop-blur-lg border-b border-white/10">
          <div className="container mx-auto px-4 py-4 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <img src="/eduvance-tutors-logo.png" alt="Eduvance Tutors Logo" className="h-8 w-auto" />
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Eduvance Tutors
              </span>
            </div>
            {/* Desktop nav */}
            <nav className="hidden md:flex space-x-8">
              {navLinks.map(link => (
                <a key={link.href} href={link.href} className="text-gray-300 hover:text-purple-400 transition-colors">{link.label}</a>
              ))}
            </nav>
            {/* Mobile hamburger */}
            <button className="md:hidden p-2" onClick={() => setMobileNavOpen(true)} aria-label="Open menu">
              <Menu className="h-7 w-7 text-purple-400" />
            </button>
          </div>
        </header>
      </div>
      {/* Mobile sidebar nav */}
      {mobileNavOpen && (
        <div className="fixed inset-0 z-[100] bg-black/95 flex flex-col">
          <div className="flex items-center justify-between px-4 py-4 border-b border-white/10 bg-black/90">
            <div className="flex items-center space-x-2">
              <img src="/eduvance-tutors-logo.png" alt="Eduvance Tutors Logo" className="h-7 w-auto" />
              <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Eduvance Tutors
              </span>
            </div>
            <button onClick={() => setMobileNavOpen(false)} aria-label="Close menu">
              <X className="h-7 w-7 text-white" />
            </button>
          </div>
          <nav className="flex flex-col gap-6 px-8 py-8 text-lg">
            {navLinks.map(link => (
              <a key={link.href} href={link.href} className="text-gray-200 hover:text-purple-400 transition-colors" onClick={() => setMobileNavOpen(false)}>{link.label}</a>
            ))}
          </nav>
        </div>
      )}

      {/* Main content wrapper to push content below fixed/sticky elements */}
      <div style={{ paddingTop: `${totalOffset}px` }}>
        {/* Hero Section */}
        <section className="pb-20 px-4">
          <div className="container mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto"
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
                Empowering Education Through Personalized 1:1 Tutoring, Tailored Just for You.
              </h1>
            </motion.div>
          </div>
        </section>
        {/* Mission Section */}
        <section id="mission" className="py-20 px-4">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto text-center"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Our Mission
              </h2>
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-6">
                  At Eduvance Tutors, we are dedicated to providing exceptional tutoring services for students in grades 1–9. Our mission is to help young learners achieve academic success through personalized support, engaging lessons, and a positive learning environment. With a team of experienced educators, we strive to make a meaningful difference in every child’s educational journey.
                </p>
              </div>
            </motion.div>
          </div>
        </section>
        {/* Services Section */}
        <section id="services" className="py-20 px-4">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Our Services
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                Choose the perfect learning solution tailored to your needs and goals
              </p>
            </motion.div>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className={`relative ${service.highlight ? 'md:-translate-y-8' : ''}`}
                >
                  <Card className={`relative overflow-hidden bg-gradient-to-br ${service.highlight ? 'from-purple-500/20 to-pink-500/20 border-purple-500/50 shadow-2xl shadow-purple-500/25' : 'from-blue-500/20 to-purple-500/20 border-blue-500/30'} backdrop-blur-sm border-2 h-full`}>
                    {service.badge && (
                      <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-center py-2 text-sm font-semibold">
                        {service.badge}
                      </div>
                    )}
                    <CardHeader className={`text-center ${service.highlight ? 'pt-12' : ''}`}>
                      <CardTitle className="text-2xl font-bold text-white mb-2">{service.title}</CardTitle>
                      <div className="text-3xl font-bold text-white mb-2">{service.price}</div>
                      <CardDescription className="text-gray-300 mb-4">{service.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <ul className="space-y-3">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-gray-300">
                            <Check className="h-5 w-5 text-green-400 mr-3 flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                      {service.button.link ? (
                        <a href={service.button.link} target="_blank" rel="noopener noreferrer">
                          <Button className="w-full mt-6 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600">
                            {service.button.label}
                          </Button>
                        </a>
                      ) : (
                        <Button className="w-full mt-6 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600">
                          {service.button.label}
                        </Button>
                      )}
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
            <div className="text-center mt-6">
              <span className="text-gray-400 text-sm md:text-base">*Please See Subjects Offered Below</span>
            </div>
          </div>
        </section>
        {/* Subjects Section */}
        <section id="subjects" className="py-20 px-4">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Subjects We Offer
              </h2>
            </motion.div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {subjects.slice(0, 4).map((subject, index) => (
                <motion.div
                  key={subject.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-purple-400/50 transition-all duration-300 cursor-pointer group"
                >
                  <h3 className={`text-xl font-semibold text-white mb-2 ${subject.color}`}>{subject.name}</h3>
                  <p className="text-gray-400 text-sm md:text-base">{subject.description}</p>
                </motion.div>
              ))}
            </div>
            {/* Center Spanish card below */}
            <div className="flex justify-center mt-8">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-purple-400/50 transition-all duration-300 cursor-pointer group w-full max-w-md"
              >
                <h3 className="text-xl font-semibold text-white mb-2 text-pink-500">Spanish</h3>
                <p className="text-gray-400 text-sm md:text-base">{subjects[4].description}</p>
              </motion.div>
            </div>
          </div>
        </section>
        {/* Contact Section */}
        <section id="contact" className="py-20 px-4">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Get In Touch
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                Ready to start your learning journey? Contact us today for a free consultation
              </p>
            </motion.div>
            <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Card className="bg-white/5 backdrop-blur-sm border border-white/10">
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold text-white">Send us a message</CardTitle>
                    <CardDescription className="text-gray-300">
                      We'll get back to you within 24 hours
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="name" className="text-gray-300">Full Name</Label>
                          <Input
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                            placeholder="Your name"
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="email" className="text-gray-300">Email</Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                            placeholder="your@email.com"
                            required
                          />
                        </div>
                      </div>
                      <div>
                        <Label htmlFor="phone" className="text-gray-300">Phone Number</Label>
                        <Input
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                          placeholder="Your phone number"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="message" className="text-gray-300">Message</Label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 h-32"
                          placeholder="Tell us about your learning goals..."
                          required
                        />
                      </div>
                      <Button type="submit" className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600">
                        Send Message
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </motion.div>
              {/* Contact Info & Newsletter */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-8"
              >
                <Card className="bg-white/5 backdrop-blur-sm border border-white/10">
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold text-white">Contact Information</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Mail className="h-5 w-5 text-purple-400" />
                      <a href="mailto:eduvancetutors@gmail.com" className="text-gray-300 hover:text-purple-400 transition-colors">eduvancetutors@gmail.com</a>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Phone className="h-5 w-5 text-purple-400" />
                      <a href="tel:+12243000855" className="text-gray-300 hover:text-purple-400 transition-colors">+1 224-300-0855</a>
                    </div>
                  </CardContent>
                </Card>
                <Card className="bg-white/5 backdrop-blur-sm border border-white/10">
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold text-white">Newsletter Subscription</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex justify-center">
                        <iframe width="540" height="305" src="https://300c1986.sibforms.com/serve/MUIFAFQ1vOjaikgyomwPUxoSH-o4VQyWVfT_ogG64FBaAPSEr2Nz9l86pCTkcNrlSm88G2-AAGDwKPHx3ZQ88RMOz_KYkYIMhoVg1bxH9b09GOjOqDwYRJY8QCYAy7DcLxSzt8Iqj6BU6LsTqsr-kjCT2l1_PWXRt37SiFV46oLmfyL1Tzs9DZcf2uBan2FPrNjgfBTqpvTu9_dw" frameBorder="0" scrolling="auto" allowFullScreen style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto', maxWidth: '100%' }}></iframe>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>
        {/* Footer */}
        <footer className="bg-black/20 backdrop-blur-sm border-t border-white/10 py-12 px-4">
          <div className="container mx-auto text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <img src="/eduvance-tutors-logo.png" alt="Eduvance Tutors Logo" className="h-8 w-auto" />
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Eduvance Tutors
              </span>
            </div>
            <p className="text-gray-400">2025 Eduvance Tutors. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </div>
  )
}