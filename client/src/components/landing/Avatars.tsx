import { AnimatedTooltip } from "@/components/ui/animated-tooltip";

const people = [
  {
    id: 1,
    name: "Labhanshi Bhatia",
    designation: "ML and Backend Developer",
    image: "https://avatars.githubusercontent.com/u/34826479?v=4",
  },
  {
    id: 2,
    name: "Lavanya Yadav",
    designation: "Full Stack Developer",
    image:
      "https://media.licdn.com/dms/image/C4D03AQHcZ-NpTjvO5w/profile-displayphoto-shrink_400_400/0/1656002128364?e=1715212800&v=beta&t=GlM0OYqExabFBVeusu4RjmZcA-G_vIl4sEg2kNC_hxA",
  },
  {
    id: 3,
    name: "KM Yogita",
    designation: "ML and Backend Developer",
    image: "https://avatars.githubusercontent.com/u/75358720?v=4",
  },
  {
    id: 4,
    name: "Kanika",
    designation: "Full Stack Developer",
    image: "https://avatars.githubusercontent.com/u/88616188?v=4",
  }
];

export function AnimatedTooltipPreview() {
  return (
    <div className="flex flex-row items-center justify-center mb-10 w-full">
      <AnimatedTooltip items={people} />
    </div>
  );
}
