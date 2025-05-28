import { Search } from "lucide-react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

export default function SearchBar() {
  return (
    <div className="flex items-center bg-background h-10 py-3 rounded-md custom-border w-full max-w-90 ">
      <Button variant="ghost" className="p-2">
        <Search />
      </Button>
      <Input
        placeholder="Search"
        className="border-none pl-1 outline-none ring-0 focus:outline-none focus:ring-0 focus-visible:outline-none focus-visible:ring-0 !bg-transparent"
      />
    </div>
  );
}
