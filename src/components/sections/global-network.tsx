"use client";

import { WorldMap } from "@/components/ui/map";
import { motion } from "framer-motion";

export default function GlobalNetworkSection() {
  return (
    <div className="py-40 bg-gradient-to-b from-white to-gray-50 w-full">
      <div className="max-w-7xl mx-auto text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center justify-center gap-2 rounded-full border border-[#14B8A6]/30 bg-[#14B8A6]/10 px-4 py-2 mb-6"
        >
          <div className="h-2 w-2 rounded-full bg-[#14B8A6] animate-pulse" />
          <span className="text-sm font-medium text-[#14B8A6] tracking-wide">Worldwide Presence</span>
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-bold text-xl md:text-4xl text-[#1E3A5F]"
        >
          Global <span className="text-[#14B8A6]">Network</span>
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-sm md:text-lg text-zinc-400 max-w-2xl mx-auto py-4"
        >
          Connect with teams and clients worldwide. Our platform enables seamless
          collaboration across continents, bringing the world to your workspace.
        </motion.p>
      </div>
      <div className="max-w-7xl mx-auto px-6">
        <WorldMap
          dots={[
            {
              start: {
                lat: 64.2008,
                lng: -149.4937,
                label: "Fairbanks",
              },
              end: {
                lat: 34.0522,
                lng: -118.2437,
                label: "Los Angeles",
              },
            },
            {
              start: {
                lat: 64.2008,
                lng: -149.4937,
                label: "Fairbanks",
              },
              end: {
                lat: -15.7975,
                lng: -47.8919,
                label: "Brasília",
              },
            },
            {
              start: {
                lat: -15.7975,
                lng: -47.8919,
                label: "Brasília",
              },
              end: {
                lat: 38.7223,
                lng: -9.1393,
                label: "Lisbon",
              },
            },
            {
              start: {
                lat: 51.5074,
                lng: -0.1278,
                label: "London",
              },
              end: {
                lat: 28.6139,
                lng: 77.209,
                label: "New Delhi",
              },
            },
            {
              start: {
                lat: 28.6139,
                lng: 77.209,
                label: "New Delhi",
              },
              end: {
                lat: 43.1332,
                lng: 131.9113,
                label: "Vladivostok",
              },
            },
            {
              start: {
                lat: 28.6139,
                lng: 77.209,
                label: "New Delhi",
              },
              end: {
                lat: -1.2921,
                lng: 36.8219,
                label: "Nairobi",
              },
            },
          ]}
          lineColor="#14B8A6"
        />
      </div>
    </div>
  );
}

