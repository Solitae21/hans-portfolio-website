import { Mail, MapPin } from 'lucide-react';
import { ScrollReveal, SectionHeader, GlassCard } from '@/components/ui';
import ContactForm from './ContactForm';
import SocialLinks from './SocialLinks';
import { personal } from '@/data/personal';

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 md:py-32 bg-bg-secondary">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 100%, rgba(52,211,153,0.08) 0%, transparent 60%)' }}
      />

      <div className="section-container relative">
        <ScrollReveal>
          <SectionHeader
            tag="06. Contact"
            title="Get In Touch"
            subtitle="Have a project in mind or want to chat? I'd love to hear from you."
          />
        </ScrollReveal>

        <div className="grid lg:grid-cols-[1fr_1.5fr] gap-12 max-w-5xl mx-auto">
          {/* Left — info */}
          <ScrollReveal direction="left">
            <div className="flex flex-col gap-8">
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Let's work together</h3>
                <p className="text-gray-400 leading-relaxed">
                  I'm currently open to full-time remote positions and freelance projects.
                  If you have an exciting opportunity or project, don't hesitate to reach out.
                </p>
              </div>

              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3 text-gray-400">
                  <div className="w-10 h-10 glass rounded-xl flex items-center justify-center text-accent-indigo shrink-0">
                    <Mail size={18} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 mb-0.5">Email</p>
                    <a href={`mailto:${personal.email}`} className="hover:text-white transition-colors">
                      {personal.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-gray-400">
                  <div className="w-10 h-10 glass rounded-xl flex items-center justify-center text-accent-cyan shrink-0">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 mb-0.5">Location</p>
                    <span>{personal.location}</span>
                  </div>
                </div>
              </div>

              <div>
                <p className="text-gray-500 text-sm mb-3">Find me on</p>
                <SocialLinks />
              </div>
            </div>
          </ScrollReveal>

          {/* Right — form */}
          <ScrollReveal direction="right">
            <GlassCard className="p-8">
              <ContactForm />
            </GlassCard>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
