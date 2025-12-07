"use client";

import { useEffect, useState } from "react";
import Lottie from "lottie-react";
import Link from "next/link";
import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";

export default function NotFound() {
  const [animationData, setAnimationData] = useState<any>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    // Dynamically import the JSON file
    import("./404_error_page_with_cat.json").then((data) => {
      setAnimationData(data.default);
    });
  }, []);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className="flex-1 flex flex-col items-center justify-center px-4 py-16 pt-32">
        <div className="max-w-2xl w-full text-center space-y-8">
          {/* Lottie Animation */}
          <div className="flex justify-center items-center">
            <div className="w-full max-w-md">
              {animationData ? (
                <Lottie 
                  animationData={animationData} 
                  loop={true}
                  autoplay={true}
                  className="w-full h-auto"
                />
              ) : (
                <div className="w-full h-64 flex items-center justify-center">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
                </div>
              )}
            </div>
          </div>

          {/* Error Message */}
          <div className="space-y-4">
            <h1 className="text-6xl md:text-8xl font-bold text-foreground">
              404
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
              Page Not Found
            </h2>
            <p className="text-muted-foreground text-lg max-w-md mx-auto">
              Oops! The page you're looking for seems to have wandered off. 
              Let's get you back on track.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Link
              href="/"
              className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              Go Home
            </Link>
            <button
              onClick={() => window.history.back()}
              className="inline-flex items-center justify-center px-6 py-3 border border-border rounded-lg font-medium hover:bg-accent transition-colors"
            >
              Go Back
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

