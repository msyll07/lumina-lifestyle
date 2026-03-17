import { Instagram, Twitter, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-stone-100 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-3 gap-10 mb-10">
        
        {/* Brand */}
        <div>
          <h3 className="text-xl font-light tracking-widest mb-4">
            LUMINA
          </h3>
          <p className="text-stone-500 text-sm">
            Curating moments of peace and luxury through natural wellness products.
          </p>
        </div>

        {/* Links */}
        <div>
          <h4 className="text-sm uppercase tracking-widest mb-4">
            Explore
          </h4>
          <ul className="space-y-2 text-stone-500 text-sm">
            <li><a href="#products">Shop</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#">Journal</a></li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h4 className="text-sm uppercase tracking-widest mb-4">
            Follow
          </h4>
          <div className="flex gap-4 text-stone-500">
            <Instagram />
            <Twitter />
            <Facebook />
          </div>
        </div>

      </div>

      <div className="text-center text-xs text-stone-400">
        © {new Date().getFullYear()} Lumina. All rights reserved.
      </div>
    </footer>
  );
}