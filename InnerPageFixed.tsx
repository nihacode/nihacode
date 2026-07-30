"use client";

import React, { useState, Suspense } from "react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { MapPin, Globe, Phone, Map } from "lucide-react";

// Create a separate component for the content that uses useSearchParams
function InnerPageContent() {
  const searchParams = useSearchParams();
  const name = searchParams.get("name") || "Gugs & Hugs salons";

  // Active tab state
  const [activeTab, setActiveTab] = useState("About");

  //GALLERY TAB STATE
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % galleryImages.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  // Dummy events data
  const events = [
    {
      title: "30-Minute walk",
      date: "$25",
      description: "Perfect for daily exercise and bathroom breaks",
      time: "30min",
    },
    {
      title: "30-Minute walk",
      date: "$25",
      description: "Perfect for daily exercise and bathroom breaks",
      time: "30min",
    },
    {
      title: "30-Minute walk",
      date: "$25",
      description: "Perfect for daily exercise and bathroom breaks",
      time: "30min",
    },
    {
      title: "30-Minute walk",
      date: "$25",
      description: "Perfect for daily exercise and bathroom breaks",
      time: "30min",
    },
    {
      title: "30-Minute walk",
      date: "$25",
      description: "Perfect for daily exercise and bathroom breaks",
      time: "30min",
    },
    {
      title: "30-Minute walk",
      date: "$25",
      description: "Perfect for daily exercise and bathroom breaks",
      time: "30min",
    },
  ];

  //GALLERY TAB
  const galleryImages = [
    "/images/innerpage_images (1).png",
    "/images/innerpage_images (2).png",
    "/images/innerpage_images (3).png",
    "/images/innerpage_images (4).png",
    "/images/innerpage_images (5).png",
    "/images/innerpage_images (6).png",
  ];

  return (
    <main className="min-h-screen bg-gray-50 text-gray-900 flex justify-center py-10 px-4">
      <section className="w-full max-w-[90rem] bg-white shadow-lg rounded-xl overflow-hidden">

        {/* Hero Image */}
        <div className="relative w-full h-64 md:h-80">
          <Image
            src="/images/inner_page banner.jpg"
            alt={`${name} banner`}
            fill
            className="object-cover"
            priority
          />
          <button
            className="absolute bottom-4 right-4 text-white font-medium py-2 px-[3.25rem] rounded-lg shadow-lg border-2 border-white"
            style={{ backgroundColor: "rgba(236, 44, 85, 1)" }}
          >
            Book Now
          </button>
        </div>

        {/* Store Info */}
        <div className="p-6 md:p-8">
          <div className="flex flex-col md:flex-row md:items-center gap-5">
            {/* Logo */}
            <Image
              src="/images/inner_page profile.png"
              alt="Store logo"
              width={70}
              height={70}
              className="rounded-full object-cover"
            />

            {/* Details */}
            <div className="flex-1">
              <h1 className="text-2xl font-bold">{name}</h1>
              <div className="flex items-center gap-2 text-sm mt-1">
                <span className="text-black font-medium">⭐ 4.8</span>
                <span style={{ color: "rgba(87, 42, 123, 1)" }}>(234 reviews)</span>
              </div>
              <div
                className="mt-2 flex flex-col gap-1 text-sm"
                style={{ color: "rgba(87, 42, 123, 1)" }}
              >
                <p>🕒 Open now until 9 pm · Mon to Sat 10 am - 9 pm</p>
                <p className="flex items-center gap-1">
                  <MapPin size={16} /> Near city hospital, 2nd cross, Bangalore · 1.2 km
                </p>
                <p className="flex items-center gap-1">
                  <Globe size={16} /> www.website.com
                </p>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col gap-3 w-full md:w-64">
              <button
                className="border font-medium px-8 py-3 rounded-full flex items-center justify-center gap-2 w-full hover:opacity-80 text-purple-800"
                style={{
                  borderColor: "rgba(0, 113, 227, 1)",
                }}
              >
                Enquire Now <Phone size={16} />
              </button>

              <button
                className="text-white font-medium px-8 py-3 rounded-full flex items-center justify-center gap-2 w-full hover:opacity-90"
                style={{ backgroundColor: "rgba(0, 113, 227, 1)" }}
              >
                View on Map <Map size={16} />
              </button>
            </div>
          </div>

          {/* Tabs */}
          <div className="flex gap-6 border-b mt-6">
            {["Services", "About", "Gallery", "Reviews"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-[1.75rem] py-1 rounded-md font-medium transition-colors ${activeTab === tab
                  ? "bg-purple-800 text-white"
                  : "text-purple-800 hover:bg-purple-100"
                  }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="mt-6 leading-relaxed text-gray-700 space-y-4">
            {activeTab === "About" && (
              <p>
                Tucked into a bustling neighborhood market, Whisker & Wag Pet Store is more
                than just a place to buy pet food — it's a go-to hub for pet parents and
                animal lovers. From the moment customers walk in, they're greeted by neatly
                stocked shelves of premium pet foods, treats, grooming essentials, toys, and
                quirky accessories. The soft chirping of lovebirds in the aviary section and
                the gentle bubbling from aquariums add a soothing charm to the space.
                The store caters to a wide range of pets — dogs, cats, birds, fish, hamsters,
                and sometimes even exotic reptiles. What makes the store stand out is its
                knowledgeable staff — most are pet owners themselves and happy to guide
                first-time buyers on what food suits their puppy's breed or which cage setup
                is best for a new parrot.
                The store also collaborates with local vets and trainers, often hosting free
                weekend sessions on pet care and nutrition. Recently, they introduced a small
                adoption corner in partnership with a nearby shelter — encouraging ethical
                adoption while still selling responsibly sourced pets with proper
                documentation.
                For the community, Whisker & Wag isn't just a retail store — it's a trusted
                resource where pets are treated like family.
              </p>
            )}

            {activeTab === "Services" && (
              <div className="grid md:grid-cols-3 gap-4">
                {events.map((event, idx) => (
                  <div key={idx} className="border rounded-lg p-4 shadow-sm">
                    <div className="flex justify-between items-center">
                      <h3 className="font-bold">{event.title}</h3>
                      <span className="text-sm font-medium text-purple-800">{event.date}</span>
                    </div>
                    <p className="text-sm mt-1">{event.description}</p>
                    <p className="flex items-center gap-1 text-sm text-gray-600">
                      🕒 {event.time}
                    </p>
                  </div>
                ))}
              </div>
            )}

            {activeTab === "Gallery" && (
              <div className="w-full flex flex-col items-center mt-6">
                {/* Main Image with arrows */}
                <div className="relative w-full max-w-4xl">
                  <img
                    src={galleryImages[currentImage]}
                    alt="Gallery"
                    className="w-full h-96 object-cover rounded-lg"
                  />

                  {/* Left Button */}
                  <button
                    onClick={prevImage}
                    className="absolute top-1/2 -left-6 transform -translate-y-1/2 bg-white shadow rounded-full p-2"
                  >
                    ◀
                  </button>

                  {/* Right Button */}
                  <button
                    onClick={nextImage}
                    className="absolute top-1/2 -right-6 transform -translate-y-1/2 bg-white shadow rounded-full p-2"
                  >
                    ▶
                  </button>
                </div>

                {/* Thumbnails */}
                <div className="flex gap-4 mt-4">
                  {galleryImages.map((img, idx) => (
                    <img
                      key={idx}
                      src={img}
                      alt={`Thumbnail ${idx}`}
                      className={`w-20 h-20 object-cover rounded-lg cursor-pointer border-2 ${currentImage === idx ? "border-orange-500" : "border-transparent"
                        }`}
                      onClick={() => setCurrentImage(idx)}
                    />
                  ))}
                </div>
              </div>
            )}

            {activeTab === "Reviews" && (
              <p>⭐ Customer reviews will be displayed here...</p>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}

// Loading component to show while Suspense is loading
function LoadingFallback() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900 flex justify-center py-10 px-4">
      <section className="w-full max-w-[90rem] bg-white shadow-lg rounded-xl overflow-hidden">
        <div className="p-6 md:p-8">
          <div className="animate-pulse">
            <div className="h-64 md:h-80 bg-gray-300 rounded mb-6"></div>
            <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
            <div className="h-4 bg-gray-300 rounded w-1/2 mb-4"></div>
            <div className="space-y-2">
              <div className="h-4 bg-gray-300 rounded"></div>
              <div className="h-4 bg-gray-300 rounded w-5/6"></div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

// Main component that wraps the content in Suspense
export default function InnerPage() {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <InnerPageContent />
    </Suspense>
  );
}