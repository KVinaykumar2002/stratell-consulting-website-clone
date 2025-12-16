"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { ArrowRight } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FormProgress } from "./form-progress";

interface ContactFormData {
  fullName: string;
  email: string;
  company: string;
  phone: string;
  service: string;
  message: string;
}

interface ContactFormProps {
  heading?: string;
  description?: string;
  buttonText?: string;
  reassuranceText?: string;
  onSubmit?: (data: ContactFormData) => void;
}

const IT_SERVICES = [
  "Cloud Migration",
  "DevOps",
  "Cybersecurity",
  "Software Development",
  "Data Analytics",
  "AI & Machine Learning",
  "Cloud Infrastructure",
  "API Development",
  "Database Management",
  "UI/UX Design",
  "Digital Transformation",
  "IT Strategy",
  "System Integration",
  "Mobile Development",
  "Quality Assurance",
  "Web Development",
  "General Inquiry",
];

export function ContactForm({
  heading = "Get in Touch with Our IT Experts",
  description = "Tell us about your project and we'll get back to you with a tailored solution.",
  buttonText = "Send Message",
  reassuranceText = "",
  onSubmit,
}: ContactFormProps) {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: "",
    email: "",
    company: "",
    phone: "",
    service: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleServiceChange = (value: string) => {
    setFormData((prev) => ({ ...prev, service: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.fullName.trim() || !formData.email.trim() || !formData.service) {
      return;
    }

    setIsSubmitting(true);

    // Call custom onSubmit handler if provided
    if (onSubmit) {
      await onSubmit(formData);
    } else {
      // Default behavior - you can replace this with your API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
    }

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset form
    setFormData({
      fullName: "",
      email: "",
      company: "",
      phone: "",
      service: "",
      message: "",
    });

    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  // Calculate form completion
  const requiredFields = [formData.fullName, formData.email, formData.service];
  const optionalFields = [formData.company, formData.phone, formData.message];
  const completedRequired = requiredFields.filter(f => f.trim()).length;
  const completedOptional = optionalFields.filter(f => f.trim()).length;
  const totalCompleted = completedRequired + completedOptional;
  const totalFields = 6;

  return (
    <div className="w-full max-w-3xl mx-auto">
      {heading && (
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-white text-center mb-3 sm:mb-4 px-4">
          {heading}
        </h2>
      )}

      {description && (
        <p className="text-sm sm:text-base md:text-lg text-white/80 text-center mb-6 sm:mb-8 md:mb-10 max-w-xl mx-auto px-4">
          {description}
        </p>
      )}

      <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5 px-4 sm:px-0">
        <FormProgress completed={totalCompleted} total={totalFields} />
        {/* Name and Email Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
          <div>
            <Input
              type="text"
              name="fullName"
              placeholder="Full Name *"
              value={formData.fullName}
              onChange={handleChange}
              required
              className="h-11 sm:h-12 md:h-14 bg-white text-black placeholder:text-gray-500 border-0 rounded-lg px-3 sm:px-4 text-sm sm:text-base"
              disabled={isSubmitting || isSubmitted}
            />
          </div>
          <div>
            <Input
              type="email"
              name="email"
              placeholder="Email Address *"
              value={formData.email}
              onChange={handleChange}
              required
              className="h-11 sm:h-12 md:h-14 bg-white text-black placeholder:text-gray-500 border-0 rounded-lg px-3 sm:px-4 text-sm sm:text-base"
              disabled={isSubmitting || isSubmitted}
            />
          </div>
        </div>

        {/* Company and Phone Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
          <div>
            <Input
              type="text"
              name="company"
              placeholder="Company Name"
              value={formData.company}
              onChange={handleChange}
              className="h-11 sm:h-12 md:h-14 bg-white text-black placeholder:text-gray-500 border-0 rounded-lg px-3 sm:px-4 text-sm sm:text-base"
              disabled={isSubmitting || isSubmitted}
            />
          </div>
          <div>
            <Input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              className="h-11 sm:h-12 md:h-14 bg-white text-black placeholder:text-gray-500 border-0 rounded-lg px-3 sm:px-4 text-sm sm:text-base"
              disabled={isSubmitting || isSubmitted}
            />
          </div>
        </div>

        {/* Service Selection */}
        <div>
          <Select
            value={formData.service}
            onValueChange={handleServiceChange}
            disabled={isSubmitting || isSubmitted}
          >
            <SelectTrigger className="h-11 sm:h-12 md:h-14 bg-white text-black border-0 rounded-lg px-3 sm:px-4 text-sm sm:text-base w-full">
              <SelectValue placeholder="Select a Service *" />
            </SelectTrigger>
            <SelectContent className="bg-white">
              {IT_SERVICES.map((service) => (
                <SelectItem
                  key={service}
                  value={service}
                  className="text-sm sm:text-base text-black hover:bg-gray-100"
                >
                  {service}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Message */}
        <div>
          <Textarea
            name="message"
            placeholder="Tell us about your project, requirements, or any questions you have..."
            value={formData.message}
            onChange={handleChange}
            rows={5}
            className="min-h-28 sm:min-h-32 bg-white text-black placeholder:text-gray-500 border-0 rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base resize-none"
            disabled={isSubmitting || isSubmitted}
          />
        </div>

        {/* Submit Button */}
        <div className="flex justify-center pt-2">
          <button
            type="submit"
            disabled={
              isSubmitting ||
              isSubmitted ||
              !formData.fullName.trim() ||
              !formData.email.trim() ||
              !formData.service
            }
            className="group relative inline-flex items-center h-12 sm:h-14 px-8 sm:px-10 md:px-12 bg-[#E5B800] text-[#1E3A5F] rounded-xl overflow-hidden transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-[0_0_30px_rgba(229,184,0,0.3)] text-sm sm:text-base font-semibold"
          >
            {/* Overlay animation from left to right */}
            <span className="absolute inset-0 bg-[#1E3A5F] transform origin-left -translate-x-full transition-transform duration-500 ease-in-out group-hover:translate-x-0 rounded-xl"></span>
            
            {/* Text - changes to gold on hover */}
            <span className="relative z-10 font-semibold text-base leading-none transition-colors duration-300 delay-100 group-hover:text-[#E5B800] mr-3">
              {isSubmitting
                ? "Sending..."
                : isSubmitted
                ? "Message Sent!"
                : buttonText}
            </span>
            
            {/* Navy circle with arrow */}
            <div className="relative z-10 flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 bg-[#1E3A5F] rounded-full transition-all duration-300 group-hover:bg-[#E5B800] group-hover:translate-x-1">
              <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 text-white group-hover:text-[#1E3A5F] transition-colors" />
            </div>
          </button>
        </div>

        {reassuranceText && (
          <p className="text-xs sm:text-sm text-white/60 text-center px-4">
            {reassuranceText}
          </p>
        )}
      </form>
    </div>
  );
}

