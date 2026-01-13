import CTAFooterSection from "@/components/home/CTAFooterSection";
import CustomerSupportSection from "@/components/home/CustomerSupportSection";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import HomeHero from "@/components/home/HomeHero";
import LatestNews from "@/components/home/LatestNews";
import MobileFriendlySection from "@/components/home/MobileFriendlySection";
import ProductShowcaseSection from "@/components/home/ProductShowcaseSection";
import QualityCommitmentSection from "@/components/home/QualityCommitmentSection";
import Image from "next/image";

export default function Home() {
  return (
    // <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
    <div>
      {/* <h1>Rifatuzzamn Rifat</h1> */}
      <HomeHero></HomeHero>

      <FeaturedProducts></FeaturedProducts>

      {/* Mobile Friendly Section */}
      <MobileFriendlySection></MobileFriendlySection>

      {/* Quality Commitment Section */}
      <QualityCommitmentSection></QualityCommitmentSection>

      {/* Featured Product Showcase Section */}
      <ProductShowcaseSection></ProductShowcaseSection>

      {/* Latest News Section */}
      <LatestNews></LatestNews>

      {/* Customer Support Section */}
      <CustomerSupportSection></CustomerSupportSection>

      {/* CTA Footer Section */}
      <CTAFooterSection></CTAFooterSection>
    </div>
  );
}
