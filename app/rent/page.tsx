"use client";
import { useEffect, useState } from "react";
import NextLink from "next/link";
import {
  Input,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
} from "@nextui-org/react";

type Field = {
  _id: string;
  name: string;
  address: string;
  location: {
    type: string;
    coordinates: [number, number];
  };
  phoneNumber: string;
};

export default function RentPage() {
  const [fields, setFields] = useState<Field[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchFields = async () => {
      try {
        const response = await fetch(
          `/api/getFields?page=${currentPage}&limit=4&search=${encodeURIComponent(searchTerm)}`,
        );
        const data = await response.json();

        setFields(data.fields);
        setTotalPages(data.totalPages);
      } catch (error) {
        console.error("Error fetching fields:", error);
      }
    };

    fetchFields();
  }, [currentPage, searchTerm]);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <main className="flex flex-col items-center justify-start min-h-screen p-8">
      <h1 className="text-4xl font-bold mb-6 text-white">
        Find a Football Field
      </h1>

      <Input
        fullWidth
        className="mb-8"
        placeholder="Search for a field..."
        value={searchTerm}
        onChange={(e) => {
          setSearchTerm(e.target.value);
          setCurrentPage(1); // Reset to first page on search
        }}
      />

      <div className="w-full max-w-6xl bg-white bg-opacity-5 p-8 rounded-lg shadow-lg">
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2">
          {fields.length > 0 ? (
            fields.map((field) => (
              <Card key={field._id} className="h-[300px]">
                <CardHeader className="flex-col items-start">
                  <h4 className="text-lg font-semibold">{field.name}</h4>
                  <p className="text-gray-500">{field.address}</p>
                </CardHeader>
                <CardBody>
                  <p>
                    Coordinates: [{field.location.coordinates[1]},{" "}
                    {field.location.coordinates[0]}]
                  </p>
                  <p>Phone: {field.phoneNumber}</p>
                </CardBody>
                <CardFooter>
                  <NextLink href={`/fields/${field._id}`}>
                    <Button as="a">View Details</Button>
                  </NextLink>
                </CardFooter>
              </Card>
            ))
          ) : (
            <p className="text-red-500">No fields found.</p>
          )}
        </div>
        <div className="flex justify-between mt-8">
          <Button disabled={currentPage === 1} onClick={handlePreviousPage}>
            Previous
          </Button>
          <Button
            disabled={currentPage === totalPages}
            onClick={handleNextPage}
          >
            Next
          </Button>
        </div>
      </div>
    </main>
  );
}
