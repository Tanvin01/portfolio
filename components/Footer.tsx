import { Github, Linkedin, Mail } from "lucide-react";
import { PERSON } from "@/data/portfolio";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-slate-800/60 bg-slate-950">
      <div className="container mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <p className="font-bold text-white">{PERSON.name}</p>
            <p className="text-slate-500 text-sm">{PERSON.role}</p>
          </div>
          <div className="flex items-center gap-4">
            {[
              { href: PERSON.social.github, icon: Github },
              { href: PERSON.social.linkedin, icon: Linkedin },
              { href: `mailto:${PERSON.email}`, icon: Mail },
            ].filter(s => s.href).map(({ href, icon: Icon }) => (
              <a key={href} href={href} target="_blank" rel="noopener noreferrer"
                className="text-slate-500 hover:text-violet-400 transition-colors">
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
          <p className="text-slate-600 text-sm">
            © {year} {PERSON.name}. Built with Next.js
          </p>
        </div>
      </div>
    </footer>
  );
}
