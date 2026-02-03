import {AlertCircle, CheckCircle, Linkedin, Mail, Send} from "lucide-react";
import {Button} from "@/components/Button";
import { useState } from "react";
import emailjs from '@emailjs/browser'

const contactInfo = [
    {
        icon: Mail,
        label: "Email",
        value: "temmyjewel22@gmail.com",
        href: "mailto:temmyjewel22@gmail.com"
    },
    {
        icon: Linkedin,
        label: ""
    }

]


export const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email:"",
        message: ""
    });

    const [isLoading, setIsLoading] = useState(false);
    const [submitStatus, setSubmitStatus] = useState({
        type: null, // 'success' or 'error
        message: "",
    });

    const handleSubmit = async (e) => {
        e.preventDefault();

        setIsLoading(true);
        setSubmitStatus({type: null, message: ""});

        try {
            const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
            const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
            const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

            if (!serviceId || !templateId || !publicKey) {
                throw new Error (
                    "EmailJS configuration is missing. Please check your environment variables"
                );
            }

            await emailjs.send(serviceId, templateId, {
                name: formData.name,
                email: formData.email,
                message: formData.message,
            }, publicKey);

            setSubmitStatus({
                type: "success",
                message: "Message sent successfully! I'll get back to you soon."
            });
            setFormData({name: "", email:"", message: ""})
        }catch(err) {
            console.error("EmailJs error", err);
            setSubmitStatus({
                type: "error",
                message: 
                    err.text || "Failed to send message, please try again later."
            })
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <section id="contact" className="py-32 relative overflow-hidden">
             {/* Bg glow */}
            <div className="absolute top-0 w-full h-full">
                <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"/>
            <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl"/>
            </div>
            
            <div className="container mx-auto px-6 relative z-10">
                {/* Section Header */}
                <div className="text-center mx-auto max-w-3xl mb-16">
                    <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
                        GET IN TOUCH
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
                        Let's build
                        <span className="font-serif italic font-normal text-white"> 
                            {" "}
                            something great
                        </span>
                    </h2>
                    <p className="text-muted-foreground animate-fade-in animation-delay-200">
                        Have a project in mind? I'd love to hear about it. Send me a message and let's discuss it together.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
                    <div className="glass p-8 rounded-3xl border border-primary/30 animate-fade-in animation-delay animate-fade-in animation-delay-300">
                        <form className="space-y-6" onSubmit={handleSubmit}>
                            <div>
                                <label 
                                    htmlFor="name" 
                                    className="block text-sm font mb-2"
                                >
                                    Name
                                </label>
                                <input 
                                    type="text" 
                                    id="name"
                                    required
                                    placeholder="What are you called?"
                                    value={formData.name}
                                    onChange={((e) => setFormData({...formData, name: e.target.value}))}
                                    className="w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" 
                                />
                            </div>

                            <div>
                                <label 
                                    htmlFor="email" 
                                    className="block text-sm font mb-2"
                                >
                                    Email
                                </label>
                                <input 
                                    type="email" 
                                    id="email"
                                    required
                                    placeholder="your@email.com"
                                    value={formData.email}
                                    onChange={((e) => setFormData({...formData, email: e.target.value}))}
                                    className="w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" 
                                />
                            </div>

                            <div>
                                <label 
                                    htmlFor="message" 
                                    className="block text-sm font mb-2"
                                >
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    rows={5}
                                    required
                                    placeholder="What would you like to say?"
                                    value={formData.message}
                                    onChange={((e) => setFormData({...formData, message: e.target.value}))}
                                    className="w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none" 
                                />
                            </div>

                            <Button 
                                className="w-full" 
                                type="submit" 
                                size="lg" 
                                disabled={isLoading}
                            >
                                {isLoading ? (
                                    <>
                                        Sending...
                                    </>
                                
                                ) : (
                                    <>
                                        Send Message 
                                        <Send className="w-5 h-5"/>
                                    </>
                                
                                )
                                }
                            </Button>

                            {submitStatus.type && (
                                <div
                                    className={`flex items-center gap-3 p-4 rounded-xl ${
                                        submitStatus.type === "success"
                                            ?  "bg-green-500/10 border border-green-500/20 text-green-400"
                                            : "bg-red-500/10 border border-red-500/20 text-red-400"
                                    }`}
                                >
                                    {submitStatus.type === "success" ? (
                                        <CheckCircle className="w-5 h-5 flex-shrink-0"/>
                                    ): (
                                        <AlertCircle className="w-5 h-5 flex-shrink-0"/>
                                    )}
                                    <p className="text-sm">{submitStatus.message}</p>

                                </div>
                            )

                            }
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}