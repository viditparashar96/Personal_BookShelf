import { deleteFromLocalStorage } from "@/lib/utils";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";

const BooksCard = ({ book }: any) => {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>
          <h2>{book.title}</h2>
        </CardTitle>
        <CardDescription className=" mt-2">
          author : <span className="font-semibold">{book.author_name[0]}</span>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div>
          <img
            src={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`}
            alt={book.title}
            className="w-full h-48 object-cover"
          />
          <h1 className=" mt-2">
            <span className="font-semibold">Rating:</span>{" "}
            {book.ratings_average ? book.ratings_average.toFixed(1) : "N/A"}
          </h1>
          <h1>
            Edition Count :{" "}
            <span className="font-semibold">{book.edition_count}</span>
          </h1>
        </div>
      </CardContent>
      <CardFooter className="flex justify-end">
        <Button
          variant="destructive"
          onClick={() => deleteFromLocalStorage(book.cover_i)}
        >
          Remove
        </Button>
      </CardFooter>
    </Card>
  );
};

export default BooksCard;
