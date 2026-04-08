import Image from "next/image";

const stats = [
  {
    icon: "user-countries.png",
  },
  {
    icon: "values-teachers.png",
  },
  {
    icon: "happy-students.png",
  },
];

export default function Reach() {
  return (
    <section className="w-full bg-[#0f172a] py-14 md:py-20">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-around gap-12 px-6 md:flex-row md:gap-6">
        {stats.map((stat, i) => (
          <div
            key={i}
            className="flex flex-col items-center gap-4 text-center"
          >
            {/* Icon */}
            <div className="h-100 w-100">
              <Image
                src={stat.icon}
                alt={""}
                width={200}
                height={200}
                className="h-full w-full object-contain"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}