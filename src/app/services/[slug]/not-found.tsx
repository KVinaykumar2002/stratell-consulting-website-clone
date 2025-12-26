import { Link } from "react-router-dom";
import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <div className="flex flex-col items-center justify-center min-h-[60vh] px-6">
        <h1 className="text-4xl font-bold mb-4">Service Not Found</h1>
        <p className="text-muted-foreground mb-8 text-center max-w-md">
          The service you're looking for doesn't exist or may have been moved.
        </p>
        <Link
          to="/services"
          className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-xl font-medium hover:bg-primary/90 transition-colors"
        >
          Back to Services
        </Link>
      </div>
      <Footer />
    </main>
  );
}

