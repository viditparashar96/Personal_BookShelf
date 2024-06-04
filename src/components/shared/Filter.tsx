import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useData } from "@/providers/DataProvider";
import { useEffect, useState } from "react";

import { Input } from "../ui/input";
import { Label } from "../ui/label";
const Filter = () => {
  // const [localSearchTerm, setLocalSearchTerm] = useState(
  //   "The lord of the rings"
  // );

  const { limit, setSearchParam, q }: any = useData();
  const [localSearchTerm, setLocalSearchTerm] = useState(q);
  const handleBookSearch = (e: any) => {
    const value = e.target.value;
    if (value === "")
      setSearchParam((prev: any) => {
        const newParams = new URLSearchParams(prev);
        newParams.delete("q");
        return newParams;
      });
    setLocalSearchTerm(value);
  };

  // Debounce search For Books
  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      console.log("Loalaoalalaolaoalasodasdasd");
      setSearchParam((prev: any) => {
        const newParams = new URLSearchParams(prev);
        newParams.set("q", localSearchTerm);
        // newParams.set("page", "1");
        return newParams;
      });
      // fecthBooks();
    }, 800);
    return () => clearTimeout(delayDebounceFn);
  }, [localSearchTerm, setSearchParam]);

  return (
    <div className=" w-full flex gap-6 items-center">
      {/* Search for Books */}
      <div>
        <Label>Search for book</Label>
        <Input
          value={localSearchTerm}
          name="localSearchTerm"
          onChange={handleBookSearch}
          type="text"
          className=" mt-2 w-[220px]"
          placeholder="Search anything...."
        />
      </div>

      {/* Books Per Page */}
      <div>
        <Label>Books per Page</Label>
        <Select
          value={limit}
          onValueChange={(value) => {
            setSearchParam((prev: any) => {
              const newParams = new URLSearchParams(prev);
              newParams.set("limit", value);
              newParams.set("page", "1");
              return newParams;
            });
          }}
        >
          <SelectTrigger className="w-[180px] mt-2">
            <SelectValue placeholder="Books per Page" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Number</SelectLabel>
              <SelectItem value="10">10</SelectItem>
              <SelectItem value="50">50</SelectItem>
              <SelectItem value="100">100</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      {/* Search Books by Author */}
    </div>
  );
};

export default Filter;
