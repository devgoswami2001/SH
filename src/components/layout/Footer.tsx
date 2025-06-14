
import Link from 'next/link';
import { Linkedin, Twitter, Instagram, Briefcase } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary/50 border-t border-border/40">
      <div className="container py-12 px-4 sm:px-6 lg:px-8"> {/* Changed max-w-7xl to container */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
               <Briefcase className="h-8 w-8 text-primary" />
              <span className="text-2xl font-bold text-foreground">HyreSence</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Revolutionizing how you find and hire talent with AI-powered job matching.
            </p>
          </div>
          
          <div className="md:col-span-2 grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div>
              <h3 className="text-sm font-semibold text-foreground tracking-wider uppercase">Quick Links</h3>
              <ul role="list" className="mt-4 space-y-2">
                <li><Link href="#features" className="text-sm text-muted-foreground hover:text-foreground">Features</Link></li>
                <li><Link href="/pricing" className="text-sm text-muted-foreground hover:text-foreground">Pricing</Link></li>
                <li><Link href="/blog" className="text-sm text-muted-foreground hover:text-foreground">Blog</Link></li>
                <li><Link href="/contact" className="text-sm text-muted-foreground hover:text-foreground">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-foreground tracking-wider uppercase">Company</h3>
              <ul role="list" className="mt-4 space-y-2">
                <li><Link href="/about" className="text-sm text-muted-foreground hover:text-foreground">About Us</Link></li>
                <li><Link href="/careers" className="text-sm text-muted-foreground hover:text-foreground">Careers</Link></li>
                <li><Link href="/press" className="text-sm text-muted-foreground hover:text-foreground">Press</Link></li>
              </ul>
            </div>
             <div>
              <h3 className="text-sm font-semibold text-foreground tracking-wider uppercase">Legal</h3>
              <ul role="list" className="mt-4 space-y-2">
                <li><Link href="/privacy" className="text-sm text-muted-foreground hover:text-foreground">Privacy Policy</Link></li>
                <li><Link href="/terms" className="text-sm text-muted-foreground hover:text-foreground">Terms of Use</Link></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-border/60 pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm text-muted-foreground md:order-1">
            &copy; {currentYear} HyreSence. All rights reserved.
          </p>
          <div className="flex space-x-6 md:order-2 mt-4 md:mt-0">
            <Link href="#" className="text-muted-foreground hover:text-foreground">
              <span className="sr-only">LinkedIn</span>
              <Linkedin className="h-6 w-6" />
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground">
              <span className="sr-only">Twitter</span>
              <Twitter className="h-6 w-6" />
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground">
              <span className="sr-only">Instagram</span>
              <Instagram className="h-6 w-6" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
