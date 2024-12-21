import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

export const SocialLinks = () => {
  return (
    <div className="fixed left-6 top-1/2 -translate-y-1/2 z-50">
      <div className="flex flex-col gap-6">
        <SocialLink href="https://github.com" icon={<Github size={24} />} />
        <SocialLink href="https://linkedin.com" icon={<Linkedin size={24} />} />
        <SocialLink href="https://twitter.com" icon={<Twitter size={24} />} />
        <SocialLink href="mailto:contact@example.com" icon={<Mail size={24} />} />
      </div>
    </div>
  );
};

const SocialLink = ({ href, icon }: { href: string; icon: React.ReactNode }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-400 hover:text-violet-400 transition-colors transform hover:scale-110"
  >
    {icon}
  </a>
);