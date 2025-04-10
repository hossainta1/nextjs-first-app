import Link from "next/link";
import React from "react";

export default function Servicespage() {
  const data = [
    {
      _id: 1,
      name: "Web Development",
      description:
        "Building responsive and scalable websites using modern frameworks.",
      price: 1200,
      category: "IT & Software",
      duration: "2-4 weeks",
      available: true,
    },
    {
      _id: 2,
      name: "Graphic Design",
      description:
        "Creating visually appealing designs for branding and marketing.",
      price: 800,
      category: "Design",
      duration: "1-2 weeks",
      available: true,
    },
    {
      _id: 3,
      name: "SEO Optimization",
      description:
        "Improving website ranking on search engines with optimized strategies.",
      price: 500,
      category: "Marketing",
      duration: "3-6 weeks",
      available: true,
    },
  ];

  return (
    <div>
      <p className="text-3xl">Services page</p>
      {data.map((d) => {
        return (
          <div>
            <Link href={`/services/${d._id}`}>
              <p>{d.name}</p>
            </Link>
          </div>
        );
      })}
    </div>
  );
}
