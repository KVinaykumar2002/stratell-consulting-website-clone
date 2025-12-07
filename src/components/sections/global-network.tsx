"use client";

import { WorldMap } from "@/components/ui/map";
import { motion } from "framer-motion";

export default function GlobalNetworkSection() {
  return (
    <div className="py-40 dark:bg-black bg-white w-full">
      <div className="max-w-7xl mx-auto text-center px-6">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-bold text-xl md:text-4xl dark:text-white text-black"
        >
          Global Network
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-sm md:text-lg text-neutral-500 max-w-2xl mx-auto py-4"
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
          lineColor="#2639ED"
        />
      </div>
    </div>
  );
}

