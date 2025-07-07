import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'

import { 
  GraduationCap, 
  BookOpen, 
  Brain, 
  Award, 
  Users, 
  Calculator, 
  Globe, 
  Mail,
  Phone,
  MapPin,
  Check,
  X
} from 'lucide-react'

function App() {
  const [showBanner, setShowBanner] = useState(true)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const services = [
    {
      title: "Standard Tutoring",
      price: "$45/hour",
      description: "Individual sessions focused on specific subjects",
      features: ["One-on-one sessions", "Homework help", "Test preparation", "Progress tracking"],
      gradient: "from-blue-500/20 to-purple-500/20",
      border: "border-blue-500/30",
      icon: BookOpen
    },
    {
      title: "Premium Mentoring",
      price: "$85/hour",
      description: "Comprehensive academic guidance and career coaching",
      features: ["All Standard features", "College prep assistance", "Study strategy development", "Monthly progress reports", "Parent consultations"],
      gradient: "from-purple-500/20 to-pink-500/20",
      border: "border-purple-500/50",
      icon: Award,
      highlight: true
    },
    {
      title: "Group Sessions",
      price: "$30/hour",
      description: "Small group learning with peer collaboration",
      features: ["Small groups (2-4 students)", "Collaborative learning", "Interactive exercises", "Shared resources"],
      gradient: "from-green-500/20 to-blue-500/20",
      border: "border-green-500/30",
      icon: Users
    }
  ]

  const subjects = [
    { name: "Mathematics", icon: Calculator, color: "text-blue-500" },
    { name: "Science", icon: Brain, color: "text-green-500" },
    { name: "English", icon: BookOpen, color: "text-purple-500" },
    { name: "History", icon: Globe, color: "text-orange-500" },
    { name: "Languages", icon: Globe, color: "text-pink-500" },
    { name: "Computer Science", icon: Brain, color: "text-cyan-500" }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-slate-900 to-black text-white">
      {/* Promo Banner */}
      {showBanner && (
        <div className="sticky top-0 z-50 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-center py-2.5 px-4 text-sm">
          <span>Save $10 on your first session with code <strong className="font-bold">FIRSTSESSION</strong></span>
          <button onClick={() => setShowBanner(false)} className="absolute top-1/2 right-4 -translate-y-1/2">
            <X className="h-5 w-5" />
          </button>
        </div>
      )}

      {/* Header */}
      <header className="sticky top-0 w-full bg-black/30 backdrop-blur-lg border-b border-white/10 z-40">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <GraduationCap className="h-8 w-8 text-purple-400" />
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Eduvance Tutors
              </span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#mission" className="text-gray-300 hover:text-purple-400 transition-colors">Mission</a>
              <a href="#services" className="text-gray-300 hover:text-purple-400 transition-colors">Services</a>
              <a href="#subjects" className="text-gray-300 hover:text-purple-400 transition-colors">Subjects</a>
              <a href="#contact" className="text-gray-300 hover:text-purple-400 transition-colors">Contact</a>
            </nav>
            <div className="w-24"></div> {/* Placeholder to balance the header */}
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-24 pb-20 px-4">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
              Empower Education Through Private, 1:1 Tutoring, Tailored Just For You
            </h1>
            {/* Removed: Unlock your potential with personalized tutoring that adapts to your unique learning style */}
            {/* Removed: Start Learning Today and Learn More buttons */}
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
                At Eduvance Tutors, we are dedicated to providing exceptional tutoring services for students in grades K-9. Our mission is to assist young learners in achieving academic success by offering personalized support, engaging lessons, and a positive learning environment. With our team of experienced educators, we strive to make a difference in every child's educational journey.
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
                <Card className={`relative overflow-hidden bg-gradient-to-br ${service.gradient} backdrop-blur-sm border-2 ${service.border} h-full ${service.highlight ? 'shadow-2xl shadow-purple-500/25' : ''}`}>
                  {service.highlight && (
                    <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-center py-2 text-sm font-semibold">
                      MOST POPULAR
                    </div>
                  )}
                  <CardHeader className={`text-center ${service.highlight ? 'pt-12' : ''}`}>
                    <div className="mx-auto mb-4 p-3 rounded-full bg-white/10 w-fit">
                      <service.icon className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-2xl font-bold text-white mb-2">{service.title}</CardTitle>
                    <div className="text-3xl font-bold text-white mb-2">{service.price}</div>
                    <CardDescription className="text-gray-300">{service.description}</CardDescription>
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
                    <Button 
                      className={`w-full mt-6 ${service.highlight 
                        ? 'bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600' 
                        : 'bg-white/10 hover:bg-white/20 border border-white/20'
                      }`}
                    >
                      Choose {service.title}
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
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
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Master any subject with our comprehensive tutoring programs
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {subjects.map((subject, index) => (
              <motion.div
                key={subject.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-purple-400/50 transition-all duration-300 cursor-pointer group"
              >
                <div className="flex items-center space-x-4">
                  <div className={`p-3 rounded-full bg-white/10 group-hover:bg-white/20 transition-colors ${subject.color}`}>
                    <subject.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-1">{subject.name}</h3>
                    <p className="text-gray-400">Expert guidance available</p>
                  </div>
                </div>
              </motion.div>
            ))}
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
                    <span className="text-gray-300">hello@eduvancetutors.com</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-purple-400" />
                    <span className="text-gray-300">+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5 text-purple-400" />
                    <span className="text-gray-300">123 Education St, Learning City, LC 12345</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/5 backdrop-blur-sm border border-white/10">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-white">Newsletter Subscription</CardTitle>
                  <CardDescription className="text-gray-300">
                    Stay updated with learning tips and educational resources
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-gray-300 text-sm">
                      Subscribe to our newsletter for exclusive learning tips, study strategies, and updates on new programs.
                    </p>
                    <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-4">
                      <p className="text-yellow-300 text-sm">
                        📧 <strong>Newsletter Integration:</strong> This is where you would embed your newsletter subscription code. 
                        Replace this section with your email marketing platform's embed code (Mailchimp, ConvertKit, etc.).
                      </p>
                    </div>
                    <Button className="w-full bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600">
                      Subscribe to Newsletter
                    </Button>
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
            <GraduationCap className="h-8 w-8 text-purple-400" />
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Eduvance Tutors
            </span>
          </div>
          <p className="text-gray-400">2024 Eduvance Tutors. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default App