import DoctorCard from "@/components/cards/doctor";
import CallToActionSection from "@/components/sections/call-to-action";
import CarouselSection from "@/components/sections/carousel";
import HeroSection from "@/components/sections/hero";
import TestimonialsSection from "@/components/sections/testimonials";
import IDoctor from "@/types/doctor";
import ITestimonial from "@/types/testimonial";
import getAverageRating from "@/utilities/get-average-ratings";
import { getTestimonials } from "./api/testimonials/route";
import { getDoctors } from "./api/users/route";

export default async function Home() {
  const testimonials: ITestimonial[] = await getTestimonials();
  const doctors: IDoctor[] = await getDoctors();

  function getTopRatedDoctors(): IDoctor[] {
    const topRatedDoctors: IDoctor[] = [];
    doctors.filter((doctor) => {
      if (!doctor.reviews) return;
      getAverageRating(doctor.reviews!.map((review) => review.rate)) >= 4 && topRatedDoctors.push(doctor);
    });
    return topRatedDoctors;
  }

  function getBudgetFriendlyDoctors(): IDoctor[] {
    const budgetFriendlyDoctors: IDoctor[] = [];
    doctors.filter((doctor) => ((doctor.priceRange.to + (doctor.priceRange.to - doctor.priceRange.from)) / 2) <= 3000 && budgetFriendlyDoctors.push(doctor));
    return budgetFriendlyDoctors;
  }

  return (
    <>
      <HeroSection />
      {getTopRatedDoctors().length > 0 &&
        <CarouselSection title="Top Rated Doctors">
          {getTopRatedDoctors().map((doctor) => <DoctorCard doctor={doctor} key={`DoctorCard(${doctor.id})`} />)}
        </CarouselSection>
      }
      <CarouselSection title="Budget Friendly Doctors">
        {doctors.map((doctor) => <DoctorCard doctor={doctor} key={`DoctorCard(${doctor.id})`} />)}
      </CarouselSection>
      <TestimonialsSection testimonials={testimonials} />
      <CallToActionSection />
    </>
  );
}
