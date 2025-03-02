"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import Link from "next/link";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-8 py-4 bg-white shadow-md fixed w-full top-0 z-10">
        <h1 className="text-2xl font-bold text-gray-900">Oxygene Tasks</h1>
        <div className="space-x-4">
          <Link href="/login">
            <Button variant="outline">Sign In</Button>
          </Link>
          <Link href="/register">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">Get Started</Button>
          </Link>
        </div>
      </nav>

      {/* Hero Section with Background Image */}
      <section className="relative flex flex-col items-center justify-center h-screen text-center px-6 text-white">
        <div className="absolute inset-0 w-full h-full bg-black/50 z-10"></div>
        <img
          src="/assets/hero.jpg"
          alt="Hero Background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20">
          <motion.h2
            className="text-5xl font-extrabold leading-tight"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Effortless Task & Mentor Management
          </motion.h2>
          <p className="mt-4 text-lg max-w-lg mx-auto">
            Streamline your tasks, collaborate with mentors, and achieve your goals faster.
          </p>
          <Link href="/register">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button className="mt-6 bg-blue-600 text-white hover:bg-blue-700 px-6 py-3 text-lg shadow-lg">
                Get Started for Free
              </Button>
            </motion.div>
          </Link>
        </div>
      </section>

      {/* Features Section with Images */}
      <section className="px-8 py-16 bg-white">
        <h3 className="text-3xl font-semibold text-center text-gray-900">Why Choose Oxygene Tasks?</h3>
        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {[
            {
              title: "Task Management",
              desc: "Easily create, track, and manage tasks with deadlines.",
              img: "/assets/task-management.jpg"
            },
            {
              title: "Mentor Collaboration",
              desc: "Connect with mentors to get guidance and improve skills.",
              img: "/assets/colab.jpg"
            },
            {
              title: "Real-time Notifications",
              desc: "Stay updated with important messages and deadlines.",
              img: "/assets/hour-glass.jpg"
            }
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-gray-50 p-4 rounded-lg shadow hover:shadow-lg transition-shadow duration-300"
            >
              <img src={feature.img} alt={feature.title} className="w-full h-40 object-cover rounded-t-lg" />
              <Card>
                <CardContent className="p-6">
                  <h4 className="text-xl font-semibold text-gray-800">{feature.title}</h4>
                  <p className="text-gray-600 mt-2">{feature.desc}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials Section with Avatars */}
      <section className="px-8 py-16 text-center bg-gray-100">
        <h3 className="text-3xl font-semibold text-gray-900">What Our Users Say</h3>
        <div className="mt-8 flex flex-col items-center md:flex-row md:justify-center gap-6">
          {[
            {
              text: "This app transformed the way I manage my work. The mentor feature is a game changer!",
              name: "Jane Doe",
              avatar: "/assets/jane-smith.jpg"
            },
            {
              text: "Simple, effective, and keeps me on track. Highly recommend!",
              name: "John Smith",
              avatar: "/assets/john-smith.jpg"
            }
          ].map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.3 }}
            >
              <Card className="max-w-sm hover:shadow-xl transition-shadow duration-300 p-4">
                <img src={testimonial.avatar} alt={testimonial.name} className="w-16 h-16 rounded-full mx-auto mb-4" />
                <CardContent className="p-6">
                  <p className="text-gray-600 italic">"{testimonial.text}"</p>
                  <h4 className="mt-2 font-semibold">{testimonial.name}</h4>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section with Background Image */}
      <section className="relative px-8 py-16 text-center text-white">
        <div className="absolute inset-0 w-full h-full bg-blue-600/70 z-10"></div>
        <img
          src="/assets/cta.jpg"
          alt="CTA Background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20">
          <h3 className="text-3xl font-semibold">Ready to Get Started?</h3>
          <p className="mt-4 text-lg">Sign up today and take control of your productivity!</p>
          <Link href="/register">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button className="mt-6 bg-white text-blue-600 hover:bg-gray-200 px-6 py-3 text-lg shadow-lg">
                Sign Up Now
              </Button>
            </motion.div>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center text-gray-600 bg-white">
        &copy; {new Date().getFullYear()} Oxygene Tasks. All rights reserved.
      </footer>
    </div>
  );
}
