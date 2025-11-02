import Image from "next/image";
import Link from "next/link";
import { ContactForm } from "./components/contact-form";
import { ScrollReveal } from "./components/scroll-reveal";
// TODO: Replace with Tina CMS data fetching
// import { getSiteContent, getContactInfo } from "@/lib/cms-connector";

export default async function Home() {
  // TODO: Replace with Tina CMS data fetching
  // Get content from CMS
  // const cmsContent = await getSiteContent();
  // const contactInfo = await getContactInfo();
  const cmsContent: any = {};
  const contactInfo = {
    address: "1234 Main Street\nWashington, DC 20001",
    phone: "(202) 555-0100",
    email: "info@federalworkinggroup.com"
  };

  // Use CMS content with fallbacks
  const hero = cmsContent.hero || {
    title: "Welcome to Federal Working Group",
    subtitle:
      "Empowering Excellence Through Innovation, Collaboration, and Execution",
    buttonText: "Access Portal",
    secondButtonText: "Explore Services",
  };

  const stats = cmsContent.stats || [
    { value: "20+", label: "Years of Excellence" },
    { value: "500+", label: "Expert Professionals" },
    { value: "1000+", label: "Projects Completed" },
    { value: "150+", label: "Government Partners" },
  ];

  const services = cmsContent.services || [
    {
      title: "Business Performance Management",
      description:
        "Strategic planning, process optimization, and performance analytics to drive organizational excellence.",
      image: "/assets/service-bpm.jpg",
    },
    {
      title: "IT Infrastructure, Technologies & Solutions",
      description:
        "Cloud computing, data center management, network architecture, and IT modernization services.",
      image: "/assets/service-cloud.png",
    },
    {
      title: "Enterprise Architecture",
      description:
        "Comprehensive enterprise architecture planning, design, and implementation aligned with business goals.",
      image: "/assets/service-enterprise.jpg",
    },
    {
      title: "IT Strategy, Operations & Security",
      description:
        "Cybersecurity, IT governance, risk management, and operational excellence frameworks.",
      image: "/assets/service-security.jpg",
    },
  ];

  const coreValues = cmsContent.coreValues || [
    {
      title: "INNOVATE",
      description:
        "At FWG, innovation is at the heart of everything we do. We leverage cutting-edge technologies and forward-thinking strategies.",
    },
    {
      title: "COLLABORATE",
      description:
        "Collaboration is the cornerstone of our success. We believe that the best solutions emerge from diverse perspectives.",
    },
    {
      title: "EXECUTE",
      description:
        "We are dedicated to the successful execution of projects and the achievement of our clients' missions.",
    },
  ];

  const testimonials = cmsContent.testimonials || [
    {
      quote:
        "Federal Working Group's expertise in cybersecurity and cloud migration was instrumental in our successful transition.",
      author: "John Stevens",
      role: "CIO, Department of Defense",
    },
    {
      quote:
        "The enterprise architecture solutions provided by FWG transformed our IT landscape.",
      author: "Sarah Martinez",
      role: "IT Director, Homeland Security",
    },
    {
      quote:
        "FWG's business performance management solutions helped us optimize operations and achieve measurable results.",
      author: "Michael Chen",
      role: "Program Manager, Veterans Affairs",
    },
  ];

  const certifications = cmsContent.certifications || [
    { title: "FedRAMP Authorized", subtitle: "Moderate Impact Level" },
    { title: "ISO 27001", subtitle: "Information Security" },
    { title: "CMMI Level 3", subtitle: "Process Maturity" },
    { title: "NIST 800-53", subtitle: "Security Controls" },
    { title: "FISMA Compliant", subtitle: "Federal Standards" },
    { title: "8(a) Certified", subtitle: "Small Business" },
  ];

  const aboutSection = cmsContent.about || {
    title: "About Federal Working Group",
    content:
      "Federal Working Group (FWG) is a premier provider of innovative IT solutions and management consulting services to federal agencies and commercial clients.\n\nSince 2004, we have been at the forefront of delivering cutting-edge technology solutions that drive mission success and operational excellence.",
  };

  return (
    <div className="bg-white text-slate-900">
      <main>
        {/* Hero Section - Modern with Background Image */}
        <section id="home" className="relative overflow-hidden text-white" style={{
          backgroundImage: 'url(https://i.imgur.com/85EwS5X.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}>
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/40"></div>
          <div className="relative mx-auto grid max-w-6xl gap-10 px-6 py-20 md:grid-cols-[1.15fr_0.85fr] md:items-center md:py-32">
            <ScrollReveal direction="left">
              <div className="space-y-6">
                <h1 className="text-5xl font-bold leading-tight md:text-6xl lg:text-7xl">
                  {hero.title}
                </h1>
                <p className="text-xl text-blue-100 md:text-2xl">{hero.subtitle}</p>
                <div className="flex flex-col gap-4 sm:flex-row">
                  <Link
                    href="/employee-portal"
                    className="btn-primary inline-flex items-center justify-center rounded-full px-8 py-4 text-base font-semibold text-white transition"
                  >
                    {hero.buttonText}
                  </Link>
                  <Link
                    href="#services"
                    className="inline-flex items-center justify-center rounded-full border-2 border-white/30 bg-white/10 px-8 py-4 text-base font-semibold text-white backdrop-blur-sm transition hover:bg-white/20"
                  >
                    {hero.secondButtonText || "Explore Services"}
                  </Link>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <div className="relative flex items-center justify-center">
                <div className="animate-float relative h-64 w-64 overflow-hidden rounded-3xl bg-white/10 p-4 backdrop-blur-sm md:h-80 md:w-80">
                  <div className="relative h-full w-full overflow-hidden rounded-2xl">
                    <Image
                      src="/assets/20-years-badge.jpg"
                      alt="20 Years of Excellence"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Stats Section - Animated */}
        <section className="relative -mt-20 pb-24">
          <div className="mx-auto max-w-6xl px-6">
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat: any, index: number) => (
                <ScrollReveal key={stat.label} delay={index * 100} direction="up">
                  <div className="card-hover group rounded-2xl bg-white p-8 text-center shadow-xl">
                    <p className="gradient-text text-5xl font-bold">
                      {stat.value}
                    </p>
                    <p className="mt-3 text-base font-medium text-slate-600">{stat.label}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="bg-white py-24">
          <div className="mx-auto max-w-4xl px-6 text-center">
            <ScrollReveal>
              <h2 className="text-4xl font-bold text-slate-900 md:text-5xl">
                {aboutSection.title}
              </h2>
              <div className="mx-auto mt-4 h-1.5 w-24 rounded-full bg-gradient-to-r from-blue-600 to-purple-600" />
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <div className="mt-10 space-y-6 text-left text-lg leading-relaxed text-slate-600">
                {aboutSection.content.split("\n\n").map((paragraph: string, index: number) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Services Section - Card Grid with Hover Effects */}
        <section id="services" className="bg-gradient-to-br from-slate-50 to-blue-50 py-24">
          <div className="mx-auto max-w-6xl px-6">
            <ScrollReveal>
              <div className="text-center">
                <h2 className="text-4xl font-bold text-slate-900 md:text-5xl">
                  Services &amp; Solutions
                </h2>
                <div className="mx-auto mt-4 h-1.5 w-24 rounded-full bg-gradient-to-r from-blue-600 to-purple-600" />
                <p className="mt-6 text-xl text-slate-600">
                  Comprehensive technology solutions tailored to your mission
                </p>
              </div>
            </ScrollReveal>
            <div className="mt-16 grid gap-8 md:grid-cols-2">
              {services.map((service: any, index: number) => (
                <ScrollReveal key={service.title} delay={index * 100} direction="up">
                  <div className="card-hover group overflow-hidden rounded-3xl bg-white shadow-lg">
                    <div className="relative h-56 w-full overflow-hidden">
                      <Image
                        src={service.image || "/assets/placeholder.jpg"}
                        alt={service.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                        sizes="(min-width: 768px) 50vw, 90vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    </div>
                    <div className="space-y-4 p-8">
                      <h3 className="text-2xl font-bold text-slate-900">
                        {service.title}
                      </h3>
                      <p className="text-base leading-relaxed text-slate-600">
                        {service.description}
                      </p>
                      <button
                        type="button"
                        className="inline-flex items-center gap-2 text-base font-semibold text-blue-600 transition group-hover:gap-3"
                      >
                        Learn More
                        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Core Values - Modern Cards */}
        <section className="bg-white py-24">
          <div className="mx-auto max-w-6xl px-6">
            <ScrollReveal>
              <div className="text-center">
                <h2 className="text-4xl font-bold text-slate-900 md:text-5xl">
                  Our Core Values
                </h2>
                <div className="mx-auto mt-4 h-1.5 w-24 rounded-full bg-gradient-to-r from-blue-600 to-purple-600" />
              </div>
            </ScrollReveal>
            <div className="mt-16 grid gap-8 md:grid-cols-3">
              {coreValues.map((value: any, index: number) => (
                <ScrollReveal key={value.title} delay={index * 150} direction="up">
                  <div className="card-hover group relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-600 to-purple-700 p-8 text-white shadow-xl">
                    <div className="shimmer absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    <h3 className="relative text-2xl font-bold tracking-wide">
                      {value.title}
                    </h3>
                    <p className="relative mt-4 text-base leading-relaxed text-blue-100">
                      {value.description}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="bg-gradient-to-br from-slate-50 to-blue-50 py-24">
          <div className="mx-auto max-w-6xl px-6">
            <ScrollReveal>
              <div className="text-center">
                <h2 className="text-4xl font-bold text-slate-900 md:text-5xl">
                  Client Success Stories
                </h2>
                <div className="mx-auto mt-4 h-1.5 w-24 rounded-full bg-gradient-to-r from-blue-600 to-purple-600" />
                <p className="mt-6 text-xl text-slate-600">
                  Hear from the agencies we&apos;ve partnered with
                </p>
              </div>
            </ScrollReveal>
            <div className="mt-16 grid gap-8 md:grid-cols-3">
              {testimonials.map((testimonial: any, index: number) => (
                <ScrollReveal key={testimonial.author} delay={index * 100}>
                  <div className="card-hover flex h-full flex-col rounded-3xl bg-white p-8 shadow-lg">
                    <div className="mb-6 text-4xl text-blue-600">"</div>
                    <p className="flex-1 text-base leading-relaxed text-slate-600">
                      {testimonial.quote}
                    </p>
                    <div className="mt-8 border-t border-slate-100 pt-6">
                      <p className="text-lg font-bold text-slate-900">
                        {testimonial.author}
                      </p>
                      <p className="mt-1 text-sm font-medium text-slate-500">{testimonial.role}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section className="bg-white py-24">
          <div className="mx-auto max-w-6xl px-6">
            <ScrollReveal>
              <div className="text-center">
                <h2 className="text-4xl font-bold text-slate-900 md:text-5xl">
                  Certifications &amp; Compliance
                </h2>
                <div className="mx-auto mt-4 h-1.5 w-24 rounded-full bg-gradient-to-r from-blue-600 to-purple-600" />
                <p className="mt-6 text-xl text-slate-600">
                  Trusted certifications and compliance standards
                </p>
              </div>
            </ScrollReveal>
            <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {certifications.map((cert: any, index: number) => (
                <ScrollReveal key={cert.title} delay={index * 80}>
                  <div className="card-hover group rounded-2xl border-2 border-blue-100 bg-gradient-to-br from-white to-blue-50 p-8 text-center shadow-md">
                    <div className="mb-3 inline-flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 text-2xl text-white">
                      ✓
                    </div>
                    <h4 className="text-xl font-bold text-slate-900">
                      {cert.title}
                    </h4>
                    <p className="mt-2 text-base font-medium text-slate-600">{cert.subtitle}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section - Modern */}
        <section id="contact" className="bg-gradient-to-br from-slate-900 to-blue-900 py-24 text-white">
          <div className="mx-auto max-w-4xl px-6">
            <ScrollReveal>
              <div className="text-center">
                <h2 className="text-4xl font-bold md:text-5xl">
                  Contact Us
                </h2>
                <div className="mx-auto mt-4 h-1.5 w-24 rounded-full bg-gradient-to-r from-blue-400 to-purple-400" />
              </div>
            </ScrollReveal>

            {/* Contact Info Boxes */}
            <div className="mt-20">
              <ScrollReveal direction="up">
                <div className="grid gap-6 sm:grid-cols-3">
                  <div className="glass rounded-3xl p-6 text-center">
                    <h4 className="text-lg font-bold text-blue-900">
                      Address
                    </h4>
                    <p className="mt-3 whitespace-pre-line text-sm text-slate-700">
                      {contactInfo.address}
                    </p>
                  </div>
                  <div className="glass rounded-3xl p-6 text-center">
                    <h4 className="text-lg font-bold text-blue-900">
                      Phone
                    </h4>
                    <p className="mt-3 text-sm text-slate-700">
                      {contactInfo.phone}
                    </p>
                  </div>
                  <div className="glass rounded-3xl p-6 text-center">
                    <h4 className="text-lg font-bold text-blue-900">
                      Email
                    </h4>
                    <p className="mt-3 text-sm text-slate-700">
                      {contactInfo.email}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Contact Form */}
            <div className="mt-12">
              <ScrollReveal direction="up" delay={200}>
                <div className="glass rounded-3xl p-8">
                  <ContactForm />
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-700 py-24 text-center text-white">
          <ScrollReveal>
            <div className="mx-auto max-w-4xl px-6">
              <h3 className="text-3xl font-bold md:text-4xl">
                Discover Our Full Capabilities
              </h3>
              <p className="mt-6 text-xl text-blue-100">
                Download our comprehensive capabilities statement to learn more
                about how FWG can support your mission.
              </p>
              <a
                href="/assets/FWGCap.pdf"
                download="FWG-Capabilities-Statement.pdf"
                className="mt-8 inline-flex items-center justify-center rounded-full bg-white px-10 py-4 text-lg font-bold text-blue-600 shadow-2xl transition hover:scale-105 hover:shadow-blue-500/50"
              >
                Download Capabilities Statement
              </a>
            </div>
          </ScrollReveal>
        </section>
      </main>
    </div>
  );
}
