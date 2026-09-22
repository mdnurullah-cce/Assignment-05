


const Footer = () => {
  return (
    <footer className="bg-white px-4 pt-12 pb-7 text-slate-800 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-7xl">
        {/* Footer Main Content */}
        <div className="grid gap-10 border-b border-slate-100 pb-10 sm:grid-cols-2 lg:grid-cols-[2.25fr_repeat(3,1fr)] lg:gap-14">
          {/* Brand and Social Links */}
          <div className="max-w-sm sm:col-span-2 lg:col-span-1">
            <a
              href="#home"
              className="inline-flex items-center gap-2 font-bold tracking-tight text-slate-900"
            >
              <span className="grid size-[22px] place-items-center rounded-md bg-gradient-to-br from-purple-500 to-pink-500 text-[10px] font-extrabold text-white">
                DS
              </span>

              <span>
                Dev <span className="text-pink-500">Stack</span>
              </span>
            </a>

            <p className="mt-4 text-[13px] leading-relaxed text-slate-500">
              Curated tools, technologies, and resources for developers
              building modern software.
            </p>

            {/* Social Links */}
            <div className="mt-5 flex flex-wrap gap-x-5 gap-y-3 text-xs font-semibold text-slate-600">
              <a
                className="transition hover:text-pink-500"
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>

              <a
                className="transition hover:text-pink-500"
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
              >
                Twitter
              </a>

              <a
                className="transition hover:text-pink-500"
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </div>
          </div>

          {/* Product Links */}
          <FooterLinks
            title="PRODUCT"
            links={[
              ["Home", "#home"],
              ["Technologies", "#technologies"],
              ["Projects", "#projects"],
            ]}
          />

          {/* Company Links */}
          <FooterLinks
            title="COMPANY"
            links={[
              ["About", "#about"],
              ["Contact", "#contact"],
              ["Careers", "#careers"],
            ]}
          />

          {/* Legal Links */}
          <FooterLinks
            title="LEGAL"
            links={[
              ["Privacy Policy", "#privacy"],
              ["Terms of Service", "#terms"],
            ]}
          />
        </div>

        {/* Copyright and Bottom Links */}
        <div className="flex flex-col gap-5 pt-7 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Dev Stack. All rights reserved.</p>

          <div className="flex gap-7">
            <a
              className="transition hover:text-pink-500"
              href="#privacy"
            >
              Privacy
            </a>

            <a
              className="transition hover:text-pink-500"
              href="#terms"
            >
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};



export default Footer;