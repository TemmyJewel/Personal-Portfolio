import { Button } from "@/components/Button";
import { Menu, X } from 'lucide-react'
import { useEffect, useState } from "react";

const navLinks = [
    {href: '#about', label: 'About' },
    {href: '#projects', label: 'Projects' },
    {href: '#experience', label: 'Experience' },
    {href: '#testimonials', label: 'Testimonials' }
]

export const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'glass-strong py-3' : 'bg-transparent py-5'}`}>
            <nav className="container mx-auto px-6 flex items-center justify-between">
                <a href="#" className="text-xl font-bold tracking-tight hover:text-primary"> 
                    TemJewel<span className="text-primary">™</span>
                </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
                <div className="glass rounded-full px-2 py-1 flex items-center gap-1">
                    {navLinks.map((link) => (
                        <a key={link.href} href={link.href} className="px-4 py-2 text-base text-muted-foreground hover:text-foreground hover:bg-surface">
                            {link.label}
                        </a>
                    ))}
                </div>
            </div>

            {/* Call to action */}
            <div className="hidden md:block">
                <Button size="sm">
                    Contact Me
                </Button>
            </div>

            {/* Mobile menu button */}
            <button 
                className="md:hidden p-2 text-foreground cursor-pointer"
                onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            >
                {/* Menu component is a component from lucide */}
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            </nav>

             {/* Mobile Menu */}
            { isMobileMenuOpen && (<div className="md:hidden glass-strong animate-fade-in">  
                <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
                    {navLinks.map((link) => (
                        <a 
                            key={link.href} 
                            href={link.href} 
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="py-2 text-lg text-muted-foreground hover:text-foreground"
                        >
                            {link.label}
                        </a>
                    ))}
                    
                    <Button className="w-full" onClick={() => setIsMobileMenuOpen(false)}>
                        Contact Me
                    </Button>
                </div>
            </div>)}
        </header>);
}