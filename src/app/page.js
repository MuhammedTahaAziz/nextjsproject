import Booking from "@/components/Booking";
import Description from "@/components/Description";
import Destination from "@/components/Destination";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";


export default function Home() {
  return (
    <div className="w-10/12 h-full mx-auto my-10 relative">
      <Navbar />
      <Description />
      <Services/>
      <Destination/>
      <Booking/>
    </div>
  );
}
