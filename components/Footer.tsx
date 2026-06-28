import { Github, Linkedin, Mail, Phone } from "lucide-react";
import { PERSON } from "@/data/portfolio";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative overflow-hidden pb-8 pt-2">
      <div className="container mx-auto px-6">
        <div className="frosted rounded-3xl px-8 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <p className="font-black text-white text-xl">
                <span className="text-[#a3e635]">{PERSON.name.split(" ")[0]}</span>{" "}
                {PERSON.name.split(" ")[1]}
              </p>
              <p className="text-white/30 text-sm">{PERSON.role}</p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-5">
              <a href={`tel:${PERSON.phone}`}
                className="flex items-center gap-1.5 text-white/35 hover:text-[#a3e635] text-sm transition-colors">
                <Phone className="w-3.5 h-3.5" />{PERSON.phone}
              </a>
              <a href={`mailto:${PERSON.email}`}
                className="flex items-center gap-1.5 text-white/35 hover:text-[#a3e635] text-sm transition-colors">
                <Mail className="w-3.5 h-3.5" />{PERSON.email}
              </a>
            </div>

            <div className="flex items-center gap-3">
              {[
                { href: PERSON.social.github, icon: Github },
                { href: PERSON.social.linkedin, icon: Linkedin },
                { href: `mailto:${PERSON.email}`, icon: Mail },
              ].filter(s => s.href).map(({ href, icon: Icon }) => (
                <a key={href} href={href} target="_blank" rel="noopener noreferrer"
                  className="w-9 h-9 frosted frosted-hover rounded-xl flex items-center justify-center text-white/30 hover:text-[#a3e635] transition-colors">
                  <Icon className="w-3.5 h-3.5" />
                </a>
              ))}
            </div>
          </div>

          <div className="mt-6 pt-5 border-t border-white/8 flex flex-col md:flex-row items-center justify-between gap-2">
            <p className="text-white/20 text-xs">© {year} {PERSON.name} · Built with Next.js 14 & Framer Motion</p>
            <p className="text-white/20 text-xs">Surat, India · Open to global opportunities</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
