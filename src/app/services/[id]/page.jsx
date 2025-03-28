import React from "react";

export default function ServiceDetailPage({ params }) {
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

  const id = params.id;
  const singleData = data.find(d => d._id == id)
  return (
    <div>
      <h2 className="text-3xl font-bold">Service Details</h2>
      <p className="font-bold">Service Name: {singleData.name}</p>
      <p>Service price: {singleData.price}</p>
      <p>ID: {id}</p>
    </div>
  );
}
