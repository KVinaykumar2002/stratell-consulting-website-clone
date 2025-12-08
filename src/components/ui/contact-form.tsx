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

  return (
    <div className="w-full max-w-3xl mx-auto">
      {heading && (
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white text-center mb-4">
          {heading}
        </h2>
      )}

      {description && (
        <p className="text-base md:text-lg text-white/80 text-center mb-10 max-w-xl mx-auto">
          {description}
        </p>
      )}

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Name and Email Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <Input
              type="text"
              name="fullName"
              placeholder="Full Name *"
              value={formData.fullName}
              onChange={handleChange}
              required
              className="h-12 md:h-14 bg-white text-black placeholder:text-gray-500 border-0 rounded-lg px-4 text-base"
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
              className="h-12 md:h-14 bg-white text-black placeholder:text-gray-500 border-0 rounded-lg px-4 text-base"
              disabled={isSubmitting || isSubmitted}
            />
          </div>
        </div>

        {/* Company and Phone Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <Input
              type="text"
              name="company"
              placeholder="Company Name"
              value={formData.company}
              onChange={handleChange}
              className="h-12 md:h-14 bg-white text-black placeholder:text-gray-500 border-0 rounded-lg px-4 text-base"
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
              className="h-12 md:h-14 bg-white text-black placeholder:text-gray-500 border-0 rounded-lg px-4 text-base"
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
            <SelectTrigger className="h-12 md:h-14 bg-white text-black border-0 rounded-lg px-4 text-base w-full">
              <SelectValue placeholder="Select a Service *" />
            </SelectTrigger>
            <SelectContent className="bg-white">
              {IT_SERVICES.map((service) => (
                <SelectItem
                  key={service}
                  value={service}
                  className="text-black hover:bg-gray-100"
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
            className="min-h-32 bg-white text-black placeholder:text-gray-500 border-0 rounded-lg px-4 py-3 text-base resize-none"
            disabled={isSubmitting || isSubmitted}
          />
        </div>

        {/* Submit Button */}
        <div className="flex justify-center">
          <button
            type="submit"
            disabled={
              isSubmitting ||
              isSubmitted ||
              !formData.fullName.trim() ||
              !formData.email.trim() ||
              !formData.service
            }
            className="group relative inline-flex items-center h-14 px-12 bg-white text-black rounded-2xl overflow-hidden transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {/* Overlay animation from left to right - using primary blue */}
            <span className="absolute inset-0 bg-[#2639ED] transform origin-left -translate-x-full transition-transform duration-500 ease-in-out group-hover:translate-x-0 rounded-2xl"></span>
            
            {/* Text - changes to white on hover */}
            <span className="relative z-10 font-medium text-base leading-none transition-colors duration-300 delay-100 group-hover:text-white mr-3">
              {isSubmitting
                ? "Sending..."
                : isSubmitted
                ? "Message Sent!"
                : buttonText}
            </span>
            
            {/* Blue circle with arrow - aligned next to text */}
            <div className="relative z-10 flex items-center justify-center w-10 h-10 bg-[#2639ED] rounded-full transition-all duration-300 group-hover:bg-[#1B28C3] group-hover:translate-x-1">
              <ArrowRight className="w-4 h-4 text-white" />
            </div>
          </button>
        </div>

        {reassuranceText && (
          <p className="text-sm text-white/60 text-center">
            {reassuranceText}
          </p>
        )}
      </form>
    </div>
  );
}

