"use client";

import { useState, useEffect } from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "./ui/label";
import { Slider } from "./ui/slider";
import Bike from "./Bike";

const BikeCategories = ({ bikes }) => {
  const [category, setCategory] = useState("all");
  const [filteredBikes, setFilteredBikes] = useState([]);
  const [price, setPrice] = useState(60000);

  useEffect(() => {
    const filtered = bikes.filter((bike) => {
      const categoryMatch =
        category === "all"
          ? bikes
          : bike.categories.some((categ) => categ.name === category);
      const priceMatch = bike.price <= price;
      return categoryMatch && priceMatch;
    });
    setFilteredBikes(filtered);
  }, [category, price, bikes]);

  return (
    <section className="min-h-[1200px] py-10">
      <div className="container mx-auto">
        <div className="flex flex-col">
          <aside className="w-full p-4 mb-8 xl:w-[300px] xl:h-[84vh] xl:fixed">
            <RadioGroup
              defaultValue="all"
              className="flex flex-col gap-6 mb-12"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem
                  value="all"
                  id="all"
                  onClick={() => setCategory("all")}
                />
                <Label htmlFor="all">All</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem
                  value="road"
                  id="road"
                  onClick={() => setCategory("road")}
                />
                <Label htmlFor="road">Road</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem
                  value="professional"
                  id="professional"
                  onClick={() => setCategory("professional")}
                />
                <Label htmlFor="professional">Professional</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem
                  value="extreme"
                  id="extreme"
                  onClick={() => setCategory("extreme")}
                />
                <Label htmlFor="extreme">Extreme</Label>
              </div>
            </RadioGroup>
            <div className="max-w-56">
              <div className="text-lg mb-4 font-medium">
                Max Price:{" "}
                <span className="text-accent font-semibold ml-2">
                  ₹ {price}
                </span>
                <span className="ml-2">
                  ({filteredBikes?.length}
                  {filteredBikes?.length > 1 ? " items" : " item"})
                </span>
                <Slider
                  defaultValue={[45000]}
                  max={70000}
                  step={1000}
                  onValueChange={(val) => setPrice(val[0])}
                />
              </div>
            </div>
          </aside>
          <div className="w-full xl:w-[780px] ml-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-3 gap-[30px]">
              {filteredBikes.map((bike) => (
                <Bike key={bike.id} bike={bike} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BikeCategories;
