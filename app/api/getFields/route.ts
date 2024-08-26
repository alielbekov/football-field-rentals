import { NextResponse } from "next/server";

const allFields = [
  {
    _id: "1",
    name: "Xamza, 21 - maktab arena",
    address: "Xamza, 21",
    location: {
      type: "Point",
      coordinates: [71.6675, 41.0053], // Coordinates near Namangan
    },
    shower: false,
    parking: true,
    pricing: 100000,
  },
  {
    _id: "2",
    name: "Yangiobod arena",
    address: "Yangiobod",
    location: {
      type: "Point",
      coordinates: [71.6587, 41.0089],
    },
    shower: true,
    parking: false,
    pricing: 70000,
  },
];

export async function GET(request: Request) {
  const url = new URL(request.url);
  const page = parseInt(url.searchParams.get("page") || "1");
  const limit = parseInt(url.searchParams.get("limit") || "4");
  const search = url.searchParams.get("search") || "";

  const filteredFields = allFields.filter((field) =>
    field.name.toLowerCase().includes(search.toLowerCase()),
  );

  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;

  const paginatedFields = filteredFields.slice(startIndex, endIndex);

  const response = {
    fields: paginatedFields,
    totalPages: Math.ceil(filteredFields.length / limit),
    currentPage: page,
  };

  return NextResponse.json(response);
}
