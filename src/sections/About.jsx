import { Lightbulb, Code2, Rocket, Users } from "lucide-react";

const highlights = [
    {
        icon: Code2,
        title: "Clean Code",
        description: "I write clean, maintainable code following best practices."
    },
    {
        icon: Rocket,
        title: "Fast Performance",
        description: "Optimized for speed and efficiency to ensure quick load times."
    },
    {
        icon: Users,
        title: "User-Centric",
        description: "Focused on delivering the best user experience possible."
    },
    {
        icon: Lightbulb,
        title: "Innovative Solutions",
        description: "Constantly exploring new technologies to solve problems creatively."
    }
]

export const About = () => {
    return (
        <section id="about" className="py-32 relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left Column */}
                    <div className="space-y-8">
                        <div className="animate-fade-in">
                            <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">About Me</span>
                        </div>

                        <h2 className="text-4xl md:text-5xl font-bold leading-tight animation-delay-100 text-secondary-foreground">
                            Building the future,
                            <span className="font-serif italic font-normal text-white"> 
                                {" "}
                                one line at a time.
                            </span>
                        </h2>

                        <div className="space-y-6 text-lg text-muted-foreground animate-fade-in animation-delay-200">
                            <p>
                                I'm a <span className="text-primary">Fullstack Developer</span> focused on building functional, user-centered web applications end to end.
                            </p>

                            <p>
                                I use <span className="text-primary">React</span> develop intuitive and interactive interfaces;with <span className="text-primary">PHP</span>, I handle backend logic, data flow, and system structure. I enjoy turning complex ideas into clean, maintainable solutions that scale.
                            </p>

                            
                        </div>

                        <div className="glass rounded-2xl p-6 glow-border animate-fade-in animate-delay-300">
                            <p className="text-lg font-medium italic text-foreground">
                                My goal is to design and build fullstack applications that are structured, performant, and built with clarity, always learning and refining along the way.</p>
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="grid sm:grid-cols-2 gap-6">
                        {highlights.map((item, index) => (
                            <div 
                                key={index} 
                                className="glass p-6 rounded-2xl animate-fade-in"
                                style={{ animationDelay: `${(index + 1) * 100}ms` }}
                            >
                                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center p-3 mb-4 hover:bg-primary/20">
                                        <item.icon className="w-6 h-6 text-primary" />
                                    </div>
                                    <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                                    <p className="text-sm text-muted-foreground">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
    </section>
);
}