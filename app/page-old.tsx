import Image from "next/image";
import Link from "next/link";
import { ContactForm } from "./components/contact-form";
import { getSiteContent, getContactInfo } from "@/lib/cms-connector";

export default async function Home() {
  // Get content from CMS
  const cmsContent = await getSiteContent();
  const contactInfo = await getContactInfo();

  // Use CMS content with fallbacks
  const hero = cmsContent.hero || {
    title: "Welcome to Federal Working Group",
    subtitle:
      "Empowering Excellence Through Innovation, Collaboration, and Execution",
    buttonText: "Access Portal",
    secondButtonText: "Explore Services",
  };

  const stats = cmsContent.stats || [
    { value: "20", label: "Years of Excellence" },
    { value: "500", label: "Expert Professionals" },
    { value: "1000", label: "Projects Completed" },
    { value: "150", label: "Government Partners" },
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
        "At FWG, innovation is at the heart of everything we do. We leverage cutting-edge technologies and forward-thinking strategies to create tailored solutions that meet the evolving needs of our clients.",
    },
    {
      title: "COLLABORATE",
      description:
        "At FWG, collaboration is the cornerstone of our success. We believe that the best solutions emerge from diverse perspectives and collective expertise.",
    },
    {
      title: "EXECUTE",
      description:
        "At FWG, we are dedicated to the successful execution of projects and the achievement of our clients' missions.",
    },
  ];

  const testimonials = cmsContent.testimonials || [
    {
      quote:
        "Federal Working Group's expertise in cybersecurity and cloud migration was instrumental in our successful transition to a modern, secure infrastructure. Their team's professionalism and technical knowledge exceeded our expectations.",
      author: "John Stevens",
      role: "CIO, Department of Defense",
    },
    {
      quote:
        "The enterprise architecture solutions provided by FWG transformed our IT landscape. They delivered on time, within budget, and with exceptional quality. A true partner in our digital transformation journey.",
      author: "Sarah Martinez",
      role: "IT Director, Homeland Security",
    },
    {
      quote:
        "FWG's business performance management solutions helped us optimize operations and achieve measurable results. Their consultative approach and deep understanding of federal requirements set them apart.",
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

  const contractVehicles = [
    {
      title: "GSA Schedule",
      description:
        "Streamlined procurement through GSA Multiple Award Schedule",
    },
    {
      title: "IDIQ Contracts",
      description:
        "Indefinite Delivery/Indefinite Quantity vehicles for flexible engagement",
    },
    {
      title: "SBA 8(a) Program",
      description: "Small business set-aside opportunities",
    },
  ];

  const careerBenefits = [
    {
      title: "Career Growth",
      description: "Professional development opportunities",
    },
    {
      title: "Benefits Package",
      description: "Comprehensive health and wellness",
    },
    {
      title: "Great Culture",
      description: "Collaborative and inclusive environment",
    },
    {
      title: "Learning & Development",
      description: "Continuous training and certifications",
    },
  ];

  const aboutSection = cmsContent.about || {
    title: "About Federal Working Group",
    content:
      "Federal Working Group (FWG) is a premier provider of innovative IT solutions and management consulting services to federal agencies and commercial clients.\n\nSince 2004, we have been at the forefront of delivering cutting-edge technology solutions that drive mission success and operational excellence.",
  };

  return (
    <div className="bg-white text-slate-900">
      <main>
        <section id="home" className="border-b border-slate-200 bg-slate-50">
          <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-[1.15fr_0.85fr] md:items-center">
            <div className="space-y-6">
              <h1 className="text-4xl font-semibold text-slate-900 md:text-5xl">
                {hero.title}
              </h1>
              <p className="text-lg text-slate-600">{hero.subtitle}</p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/employee-portal"
                  className="inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-700"
                >
                  {hero.buttonText}
                </Link>
                <Link
                  href="#services"
                  className="inline-flex items-center justify-center rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
                >
                  {hero.secondButtonText || "Explore Services"}
                </Link>
              </div>
            </div>
            <div className="relative flex items-center justify-center">
              <div className="relative h-56 w-56 overflow-hidden rounded-full border border-slate-200 bg-white shadow-sm md:h-64 md:w-64">
                <Image
                  src="/assets/20-years-badge.jpg"
                  alt="20 Years of Excellence"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-slate-200 bg-white">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-6 text-center shadow-sm"
                >
                  <p className="text-3xl font-semibold text-slate-900">
                    {stat.value}
                  </p>
                  <p className="mt-2 text-sm text-slate-600">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="border-b border-slate-200 bg-white">
          <div className="mx-auto max-w-4xl px-6 py-16 text-center">
            <h2 className="text-3xl font-semibold text-slate-900">
              {aboutSection.title}
            </h2>
            <div className="mx-auto mt-3 h-1 w-16 rounded-full bg-slate-900" />
            <div className="mt-8 space-y-5 text-left text-base leading-relaxed text-slate-600">
              {aboutSection.content.split("\n\n").map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
        </section>

        <section
          id="services"
          className="border-b border-slate-200 bg-slate-50"
        >
          <div className="mx-auto max-w-6xl px-6 py-16">
            <div className="text-center">
              <h2 className="text-3xl font-semibold text-slate-900">
                Services &amp; Solutions
              </h2>
              <div className="mx-auto mt-3 h-1 w-16 rounded-full bg-slate-900" />
              <p className="mt-4 text-base text-slate-600">
                Comprehensive technology solutions tailored to your mission
              </p>
            </div>
            <div className="mt-12 grid gap-8 md:grid-cols-2">
              {services.map((service) => (
                <div
                  key={service.title}
                  className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:shadow-md"
                >
                  <div className="relative h-48 w-full">
                    <Image
                      src={service.image || "/assets/placeholder.jpg"}
                      alt={service.title}
                      fill
                      className="object-cover"
                      sizes="(min-width: 768px) 50vw, 90vw"
                    />
                  </div>
                  <div className="space-y-3 p-6">
                    <h3 className="text-xl font-semibold text-slate-900">
                      {service.title}
                    </h3>
                    <p className="text-sm text-slate-600">
                      {service.description}
                    </p>
                    <button
                      type="button"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-slate-900"
                    >
                      Details
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-b border-slate-200 bg-white">
          <div className="mx-auto max-w-6xl px-6 py-16">
            <div className="text-center">
              <h2 className="text-3xl font-semibold text-slate-900">
                Our Core Values
              </h2>
              <div className="mx-auto mt-3 h-1 w-16 rounded-full bg-slate-900" />
            </div>
            <div className="mt-12 grid gap-8 md:grid-cols-3">
              {coreValues.map((value) => (
                <div
                  key={value.title}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm"
                >
                  <h3 className="text-lg font-semibold text-slate-900">
                    {value.title}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-slate-600">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-b border-slate-200 bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-16">
            <div className="text-center">
              <h2 className="text-3xl font-semibold text-slate-900">
                Client Success Stories
              </h2>
              <div className="mx-auto mt-3 h-1 w-16 rounded-full bg-slate-900" />
              <p className="mt-4 text-base text-slate-600">
                Hear from the agencies we&apos;ve partnered with
              </p>
            </div>
            <div className="mt-12 grid gap-8 md:grid-cols-3">
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.author}
                  className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
                >
                  <p className="text-sm leading-relaxed text-slate-600">
                    &quot;{testimonial.quote}&quot;
                  </p>
                  <div className="mt-6">
                    <p className="text-base font-semibold text-slate-900">
                      {testimonial.author}
                    </p>
                    <p className="text-sm text-slate-500">{testimonial.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-b border-slate-200 bg-white">
          <div className="mx-auto max-w-6xl px-6 py-16">
            <div className="text-center">
              <h2 className="text-3xl font-semibold text-slate-900">
                Certifications &amp; Compliance
              </h2>
              <div className="mx-auto mt-3 h-1 w-16 rounded-full bg-slate-900" />
              <p className="mt-4 text-base text-slate-600">
                Trusted certifications and compliance standards
              </p>
            </div>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {certifications.map((cert) => (
                <div
                  key={cert.title}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-6 text-center shadow-sm"
                >
                  <h4 className="text-lg font-semibold text-slate-900">
                    {cert.title}
                  </h4>
                  <p className="mt-2 text-sm text-slate-600">{cert.subtitle}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="contracts"
          className="border-b border-slate-200 bg-slate-50"
        >
          <div className="mx-auto max-w-6xl px-6 py-16">
            <div className="text-center">
              <h2 className="text-3xl font-semibold text-slate-900">
                Contract Vehicles
              </h2>
              <div className="mx-auto mt-3 h-1 w-16 rounded-full bg-slate-900" />
              <p className="mt-4 text-base text-slate-600">
                Flexible contracting options for seamless engagement
              </p>
            </div>
            <div className="mt-12 grid gap-8 md:grid-cols-3">
              {contractVehicles.map((vehicle) => (
                <div
                  key={vehicle.title}
                  className="rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm"
                >
                  <h3 className="text-lg font-semibold text-slate-900">
                    {vehicle.title}
                  </h3>
                  <p className="mt-3 text-sm text-slate-600">
                    {vehicle.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="careers" className="border-b border-slate-200 bg-white">
          <div className="mx-auto max-w-6xl px-6 py-16">
            <div className="text-center">
              <h2 className="text-3xl font-semibold text-slate-900">
                Join Our Team
              </h2>
              <div className="mx-auto mt-3 h-1 w-16 rounded-full bg-slate-900" />
              <p className="mt-4 text-base text-slate-600">
                Build your career with a leader in federal IT solutions
              </p>
            </div>
            <div className="mt-12 grid gap-10 md:grid-cols-[1.25fr_0.75fr] md:items-center">
              <div className="grid gap-6 sm:grid-cols-2">
                {careerBenefits.map((benefit) => (
                  <div
                    key={benefit.title}
                    className="rounded-2xl border border-slate-200 bg-slate-50 p-6 text-center shadow-sm"
                  >
                    <h4 className="text-base font-semibold text-slate-900">
                      {benefit.title}
                    </h4>
                    <p className="mt-2 text-sm text-slate-600">
                      {benefit.description}
                    </p>
                  </div>
                ))}
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8 text-center shadow-sm">
                <Link
                  href="/careers/current-openings"
                  className="inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-700"
                >
                  View Open Positions
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="border-b border-slate-200 bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-16">
            <div className="text-center">
              <h2 className="text-3xl font-semibold text-slate-900">
                Contact Us
              </h2>
              <div className="mx-auto mt-3 h-1 w-16 rounded-full bg-slate-900" />
            </div>
            <div className="mt-12 grid gap-12 md:grid-cols-2">
              <div className="space-y-6">
                <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                  <h4 className="text-base font-semibold text-slate-900">
                    Address
                  </h4>
                  <p className="mt-2 text-sm text-slate-600 whitespace-pre-line">
                    {contactInfo.address}
                  </p>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                  <h4 className="text-base font-semibold text-slate-900">
                    Phone
                  </h4>
                  <p className="mt-2 text-sm text-slate-600">
                    {contactInfo.phone}
                  </p>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                  <h4 className="text-base font-semibold text-slate-900">
                    Email
                  </h4>
                  <p className="mt-2 text-sm text-slate-600">
                    {contactInfo.email}
                  </p>
                </div>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <ContactForm />
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-slate-200 bg-white">
          <div className="mx-auto max-w-4xl px-6 py-16 text-center">
            <h3 className="text-2xl font-semibold text-slate-900">
              Discover Our Full Capabilities
            </h3>
            <p className="mt-4 text-base text-slate-600">
              Download our comprehensive capabilities statement to learn more
              about how FWG can support your mission.
            </p>
            <a
              href="/assets/FWGCap.pdf"
              download="FWG-Capabilities-Statement.pdf"
              className="mt-6 inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-700"
            >
              Download Capabilities Statement
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
