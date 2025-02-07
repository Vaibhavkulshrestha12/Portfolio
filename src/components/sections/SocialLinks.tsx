import { FaEnvelope, FaGithub, FaLinkedin, FaTwitter, FaWhatsapp, FaDiscord } from 'react-icons/fa';

export const SocialLinks = () => {
  return (
    <div className="fixed left-6 top-1/2 -translate-y-1/2 z-50 hidden md:block">
      <div className="flex flex-col gap-6">
        <SocialLink href="https://github.com/Vaibhavkulshrestha12" icon={<FaGithub size={24} />} />
        <SocialLink href="https://www.linkedin.com/in/vaibhav-kulshrestha-053924283/" icon={<FaLinkedin size={24} />} />
        <SocialLink href="https://x.com/Vaibhav_1208" icon={<FaTwitter size={24} />} />
        <SocialLink href="mailto:vaibhavkulshrestha55@gmail.com" icon={<FaEnvelope size={24} />} />
        <SocialLink href="https://wa.me/+917355479199" icon={<FaWhatsapp size={24} />} />
        <SocialLink href="https://discord.com/users/idk_alpha_" icon={<FaDiscord size={24} />} />
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