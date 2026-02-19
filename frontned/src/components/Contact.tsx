import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowRight, Loader2 } from "lucide-react";
import { sendEmail } from "@/services/emailService";
import { toast } from "sonner";

const Contact = () => {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        emailOrPhone: "",
        message: "",
        acceptPrivacy: false,
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!formData.acceptPrivacy) return;

        setIsSubmitting(true);
        try {
            await sendEmail({
                name: formData.name,
                email: formData.emailOrPhone,
                message: formData.message,
            });
            toast.success("Message sent successfully! We'll get back to you soon.");
            setFormData({
                name: "",
                emailOrPhone: "",
                message: "",
                acceptPrivacy: false,
            });
        } catch (error) {
            toast.error("Failed to send message. Please try again later.");
            console.error(error);
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value, type } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
        }));
    };

    return (
        <section id="contact" className="relative bg-[#1a1d2e] py-20 md:py-24">
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
                    {/* Left side - Contact Info */}
                    <motion.div
                        ref={ref}
                        initial={{ opacity: 0, x: -30 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6 }}
                        className="flex flex-col justify-center"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                            ANY<span className="text-[#ff0044]"> QUERIES?</span>
                        </h2>
                        <p className="text-white/80 text-base mb-12">
                            Feel free to contact us and we will respond as early as possible
                        </p>

                        <div className="space-y-8">
                            <div>
                                <p className="text-[#ff0044] text-sm font-bold uppercase tracking-wider mb-2">
                                    INFO@FERRETTECHNOLOGIES.COM
                                </p>
                                {/* <a
                                    href="mailto:info@ferrettechnologies.com"
                                    className="text-white text-2xl md:text-3xl font-bold hover:text-[#ff0044] transition-colors"
                                >
                                    +12147443666
                                </a> */}
                            </div>
                        </div>
                    </motion.div>

                    {/* Right side - Form */}
                    <motion.form
                        onSubmit={handleSubmit}
                        initial={{ opacity: 0, x: 30 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="space-y-6"
                    >
                        {/* Name and Email/Phone in same row */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-white text-sm font-medium mb-3">
                                    Name <span className="text-[#ff0044]">*</span>
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    required
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3.5 rounded-md bg-[#252838] border border-[#3a3d52] text-white text-sm focus:outline-none focus:border-[#ff0044] transition-colors placeholder:text-white/30"
                                    placeholder=""
                                />
                            </div>
                            <div>
                                <label className="block text-white text-sm font-medium mb-3">
                                    Email or phone <span className="text-[#ff0044]">*</span>
                                </label>
                                <input
                                    type="text"
                                    name="emailOrPhone"
                                    required
                                    value={formData.emailOrPhone}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3.5 rounded-md bg-[#252838] border border-[#3a3d52] text-white text-sm focus:outline-none focus:border-[#ff0044] transition-colors placeholder:text-white/30"
                                    placeholder=""
                                />
                            </div>
                        </div>

                        {/* Message field */}
                        <div>
                            <label className="block text-white text-sm font-medium mb-3">
                                A few words about your project
                            </label>
                            <textarea
                                name="message"
                                rows={5}
                                value={formData.message}
                                onChange={handleChange}
                                className="w-full px-4 py-3.5 rounded-md bg-[#252838] border border-[#3a3d52] text-white text-sm focus:outline-none focus:border-[#ff0044] transition-colors resize-none placeholder:text-white/30"
                                placeholder=""
                            />
                        </div>

                        {/* Privacy checkbox */}
                        <div className="flex items-start gap-3">
                            <input
                                type="checkbox"
                                name="acceptPrivacy"
                                id="privacy"
                                required
                                checked={formData.acceptPrivacy}
                                onChange={handleChange}
                                className="mt-1 w-4 h-4 rounded border-[#3a3d52] bg-[#252838] text-[#ff0044] focus:ring-[#ff0044] focus:ring-offset-0"
                            />
                            <label htmlFor="privacy" className="text-white/70 text-sm leading-relaxed">
                                I accept the Privacy Policy and consent to personal data processing.
                            </label>
                        </div>

                        {/* Submit button */}
                        <button
                            type="submit"
                            disabled={!formData.acceptPrivacy || isSubmitting}
                            className="inline-flex w-full md:w-auto items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#ff0044] text-white font-bold text-base hover:bg-[#ff1a57] transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-[0_8px_20px_rgba(255,0,68,0.3)]"
                        >
                            {isSubmitting ? (
                                <>
                                    Sending...
                                    <Loader2 size={18} className="animate-spin" />
                                </>
                            ) : (
                                <>
                                    Next
                                    <ArrowRight size={18} />
                                </>
                            )}
                        </button>
                    </motion.form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
