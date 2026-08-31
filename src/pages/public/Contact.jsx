import React, { useState } from 'react'
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react'
import { Input, Select, Textarea, Button } from '../../components/ui.jsx'

export default function Contact() {
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
    setForm({ name: '', email: '', subject: '', message: '' })
    setTimeout(() => setSent(false), 4000)
  }

  return (
    <div>
      <section className="bg-gradient-to-br from-brand-600 to-indigo-700 py-16">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-white sm:text-4xl">Contact Us</h1>
          <p className="mt-3 text-brand-100">Get in touch with our team for support, inquiries, or to learn more about our platform.</p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
          <div>
            <h2 className="text-xl font-bold text-ink-900">Get in Touch</h2>
            <p className="mt-3 text-sm text-slate-600">
              We're here to help you make the most of our project management platform. Whether
              you have questions, need support, or want to discuss implementation, our team is
              ready to assist you.
            </p>
            <div className="mt-8 space-y-6">
              {[
                { icon: MapPin, title: 'Address', lines: ['123 University Avenue', 'Education City, EC 12345', 'United States'] },
                { icon: Phone, title: 'Phone', lines: ['Main: +1 (555) 123-4567', 'Support: +1 (555) 123-4568'] },
                { icon: Mail, title: 'Email', lines: ['General: info@smartfyp.edu', 'Support: support@smartfyp.edu'] },
                { icon: Clock, title: 'Office Hours', lines: ['Monday - Friday: 9:00 AM - 6:00 PM', 'Saturday: 10:00 AM - 4:00 PM', 'Sunday: Closed'] },
              ].map((item) => (
                <div key={item.title} className="flex gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand-50 text-brand-600">
                    <item.icon size={16} />
                  </div>
                  <div>
                    <p className="font-medium text-ink-900">{item.title}</p>
                    {item.lines.map((l) => <p key={l} className="text-sm text-slate-500">{l}</p>)}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="rounded-xl border border-slate-200 p-6 shadow-card sm:p-8">
              <h2 className="text-xl font-bold text-ink-900">Send us a Message</h2>
              {sent && (
                <div className="mt-4 rounded-lg bg-emerald-50 px-4 py-3 text-sm font-medium text-emerald-700">
                  Message sent — our team will get back to you shortly.
                </div>
              )}
              <form className="mt-6 space-y-5" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <Input label="Full Name" placeholder="Enter your full name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required />
                  <Input label="Email Address" type="email" placeholder="Enter your email address" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required />
                </div>
                <Select label="Subject" value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })} required>
                  <option value="">Select a subject</option>
                  <option>General Inquiry</option>
                  <option>Technical Support</option>
                  <option>Partnership</option>
                  <option>Feedback</option>
                </Select>
                <Textarea label="Message" rows={5} placeholder="Tell us how we can help you..." value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} required />
                <Button type="submit" className="w-full sm:w-auto">
                  <Send size={16} /> Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="mb-5 text-xl font-bold text-ink-900">Find Us Here</h2>
          <div className="flex h-72 items-center justify-center rounded-xl border border-slate-200 bg-slate-100 text-slate-400">
            Map placeholder — embed Google Maps here
          </div>
        </div>
      </section>
    </div>
  )
}
