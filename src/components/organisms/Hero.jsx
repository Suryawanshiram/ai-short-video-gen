import { Button } from "../ui/button";
import Auth from "../molecules/Auth";

const Hero = () => {
  return (
    <div className="p-10 flex flex-col items-center justify-center w-full md:px-20 lg:px-36 xl:px-48">
      <h1 className="text-6xl font-bold text-amber-500 text-center mt-24">
        AI Youtube Short Video Generator
      </h1>
      <p className="p-4 mt-4 text-center text-gray-400">
        AI generated script videos voice-chart in seconds Create edit and push
        engaging short with ease!
      </p>
      <div className="mt-6 flex gap-5">
        <Button size="lg" variant="outline">
          Explore
        </Button>
        <Auth>
          <Button size="lg">Get Started</Button>
        </Auth>
      </div>
    </div>
  );
};

export default Hero;
