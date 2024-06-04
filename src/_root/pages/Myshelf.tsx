import BooksCard from "@/components/Myshelf/BooksCard";
import { getFromLocalStorage } from "@/lib/utils";

const Myshelf = () => {
  const books = getFromLocalStorage();
  console.log(books);
  return (
    <>
      {books.length > 0 ? (
        <div>
          <h1 className="text-2xl font-semibold mb-6 ">My Shelf</h1>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {books.map((book: any) => (
              <BooksCard key={book.cover_i} book={book} />
            ))}
          </div>
        </div>
      ) : (
        <div>
          <h1 className="text-2xl font-semibold ">No Books in Shelf</h1>
        </div>
      )}
    </>
  );
};
export default Myshelf;
