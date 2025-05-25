import Link from "next/link"
import { Linkedin, Mail, Github } from "lucide-react"

interface FooterProps {
  largeFontEnabled: boolean
}

export default function Footer({ largeFontEnabled }: FooterProps) {
  return (
    <footer
      id="contact"
      className="relative bg-gradient-to-br from-purple-900 via-purple-800 to-purple-900 text-white py-12 overflow-hidden"
    >
      {/* Curved top border */}
      <div className="absolute top-0 left-0 w-full overflow-hidden">
        <svg
          className="relative block w-full h-12"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            opacity=".25"
            className="fill-current text-purple-200"
          />
          <path
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
            opacity=".5"
            className="fill-current text-purple-300"
          />
          <path
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
            className="fill-current text-white"
          />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className={`font-bold mb-4 ${largeFontEnabled ? "text-3xl" : "text-2xl"}`}>Coriano Harris</h3>
            <p className={`text-purple-100 max-w-md ${largeFontEnabled ? "text-lg" : "text-base"}`}>
              Full-stack UX designer and developer creating intuitive, engaging, and accessible digital solutions.
            </p>
          </div>

          <div className="flex flex-col md:items-end">
            <h3 className={`font-bold mb-4 ${largeFontEnabled ? "text-3xl" : "text-2xl"}`}>Get in Touch</h3>
            <div className="flex gap-4 mb-6">
              <Link
                href="https://www.linkedin.com/in/corianoharris/"
                target="_blank"
                rel="noopener noreferrer"
                tabIndex={0}
                className="p-2 rounded-full bg-purple-700 hover:bg-purple-600 transition-colors focus:outline-none focus:ring-2 focus:ring-purple-300 focus:ring-offset-2"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="h-6 w-6" />
              </Link>
              <Link
                href="https://github.com/corianoharris"
                target="_blank"
                rel="noopener noreferrer"
                tabIndex={0}
                className="p-2 rounded-full bg-purple-700 hover:bg-purple-600 transition-colors focus:outline-none focus:ring-2 focus:ring-purple-300 focus:ring-offset-2"
                aria-label="GitHub Profile"
              >
                <Github className="h-6 w-6" />
              </Link>
              <Link
                href="mailto:corianoharrispro@gmail.com"
                tabIndex={0}
                className="p-2 rounded-full bg-purple-700 hover:bg-purple-600 transition-colors focus:outline-none focus:ring-2 focus:ring-purple-300 focus:ring-offset-2"
                aria-label="Email Contact"
              >
                <Mail className="h-6 w-6" />
              </Link>
            </div>
            <p className={`text-purple-100 ${largeFontEnabled ? "text-lg" : "text-base"}`}>
              Available for freelance projects and full-time opportunities.
            </p>
          </div>
        </div>

        <div className="border-t border-purple-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className={`text-purple-200 ${largeFontEnabled ? "text-base" : "text-sm"}`}>
            © {new Date().getFullYear()} Powered by Coriano Harris. All rights reserved.
          </p>
          { /* Privacy Policy and Terms of Service links styles: flex gap-6 mt-4 md:mt-0  */}
          <div className="hidden">
            <Link
              href="#"
              tabIndex={0}
              className={`text-purple-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-purple-300 focus:ring-offset-2 rounded ${largeFontEnabled ? "text-base" : "text-sm"}`}
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              tabIndex={0}
              className={`text-purple-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-purple-300 focus:ring-offset-2 rounded ${largeFontEnabled ? "text-base" : "text-sm"}`}
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
