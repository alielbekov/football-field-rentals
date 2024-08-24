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
    phoneNumber: "+998913416660",
  },
  {
    _id: "2",
    name: "Yangiobod arena",
    address: "Yangiobod",
    location: {
      type: "Point",
      coordinates: [71.6587, 41.0089],
    },
    phoneNumber: "+998905556592",
  },
  {
    _id: "3",
    name: "6 - Mikrorayon arena",
    address: "6 - Mikrorayon",
    location: {
      type: "Point",
      coordinates: [71.6732, 41.0012],
    },
    phoneNumber: "+998934091174",
  },
  {
    _id: "4",
    name: "Yoshlar Majmuasi 1 - arena",
    address: "Yoshlar Majmuasi 1",
    location: {
      type: "Point",
      coordinates: [71.6591, 41.0103],
    },
    phoneNumber: "+998902192121",
  },
  {
    _id: "5",
    name: "Yoshlar Majmuasi 2 - arena",
    address: "Yoshlar Majmuasi 2",
    location: {
      type: "Point",
      coordinates: [71.6611, 41.0091],
    },
    phoneNumber: "+998934952009",
  },
  {
    _id: "6",
    name: "Zarbdor arena",
    address: "Zarbdor",
    location: {
      type: "Point",
      coordinates: [71.667, 41.0075],
    },
    phoneNumber: "+998972313434",
  },
  {
    _id: "7",
    name: "G'irvon, 82 - Maktab arena",
    address: "G'irvon, 82",
    location: {
      type: "Point",
      coordinates: [71.6702, 41.0021],
    },
    phoneNumber: "+998939430900",
  },
  {
    _id: "8",
    name: "IDEAL arena",
    address: "IDEAL",
    location: {
      type: "Point",
      coordinates: [71.6633, 41.0062],
    },
    phoneNumber: "+998912810018",
  },
  {
    _id: "9",
    name: "Vokzal, Ucell arena (Usti yopiq)",
    address: "Vokzal",
    location: {
      type: "Point",
      coordinates: [71.6651, 41.0044],
    },
    phoneNumber: "+998913403040",
  },
  {
    _id: "10",
    name: "G'ozal arena (Usti yopiq)",
    address: "G'ozal",
    location: {
      type: "Point",
      coordinates: [71.669, 41.0028],
    },
    phoneNumber: "+998911837070",
  },
  {
    _id: "11",
    name: "Shishaki arena (Usti yopiq)",
    address: "Shishaki",
    location: {
      type: "Point",
      coordinates: [71.6678, 41.0097],
    },
    phoneNumber: "+998993989190",
  },
  {
    _id: "12",
    name: "Sarbon arena (Usti yopiq)",
    address: "Sarbon",
    location: {
      type: "Point",
      coordinates: [71.6623, 41.007],
    },
    phoneNumber: "+998902791137",
  },
  {
    _id: "13",
    name: "Oromgoh ohiri (Usti yopiq)",
    address: "Oromgoh",
    location: {
      type: "Point",
      coordinates: [71.6602, 41.0056],
    },
    phoneNumber: "+998902194004",
  },
  {
    _id: "14",
    name: "Xamza kolsovoy (Usti yopiq)",
    address: "Xamza kolsovoy",
    location: {
      type: "Point",
      coordinates: [71.6682, 41.0037],
    },
    phoneNumber: "+998993967057",
  },
  {
    _id: "15",
    name: "G'alcha, Oq Yer arena",
    address: "G'alcha, Oq Yer",
    location: {
      type: "Point",
      coordinates: [71.6713, 41.0049],
    },
    phoneNumber: "+998972576886",
  },
  {
    _id: "16",
    name: "11 - Maktab arena",
    address: "11 - Maktab",
    location: {
      type: "Point",
      coordinates: [71.6637, 41.0092],
    },
    phoneNumber: "+998939700704",
  },
  {
    _id: "17",
    name: "Qurama arena",
    address: "Qurama",
    location: {
      type: "Point",
      coordinates: [71.6699, 41.0083],
    },
    phoneNumber: "+998902141819",
  },
  {
    _id: "18",
    name: "27 - Maktab arena",
    address: "27 - Maktab",
    location: {
      type: "Point",
      coordinates: [71.6629, 41.0067],
    },
    phoneNumber: "+998939274343",
  },
  {
    _id: "19",
    name: "Paxlavon arena",
    address: "Paxlavon",
    location: {
      type: "Point",
      coordinates: [71.6644, 41.0079],
    },
    phoneNumber: "+998936774777",
  },
  {
    _id: "20",
    name: "Irvadon Garaj arena",
    address: "Irvadon Garaj",
    location: {
      type: "Point",
      coordinates: [71.6615, 41.0086],
    },
    phoneNumber: "+998994003176",
  },
  {
    _id: "21",
    name: "G'uncha ohiri  arena",
    address: "G'uncha ohiri",
    location: {
      type: "Point",
      coordinates: [71.6706, 41.0059],
    },
    phoneNumber: "+998996175005",
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
