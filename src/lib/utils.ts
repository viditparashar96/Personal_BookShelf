import { clsx, type ClassValue } from "clsx";
import { toast } from "sonner";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const saveToLocalStorage = (bookData: any) => {
  const prevsBooks = JSON.parse(localStorage.getItem("books") || "[]");
  const isBookExist = prevsBooks.some(
    (book: any) => book.cover_i === bookData.cover_i
  );
  if (isBookExist) {
    toast.error("Book already exist in your library");
    return;
  }
  const newBooks = [...prevsBooks, bookData];
  localStorage.setItem("books", JSON.stringify(newBooks));
  toast.success("Book added to your library");
};

export const deleteFromLocalStorage = (id: any) => {
  const prevsBooks = JSON.parse(localStorage.getItem("books") || "[]");
  const newBooks = prevsBooks.filter((book: any) => book.cover_i !== id);
  localStorage.setItem("books", JSON.stringify(newBooks));
  toast.success("Book removed from your library");
  window.location.reload();
};

export const getFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem("books") || "[]");
};

export const checkifBookExist = (id: any) => {
  const prevsBooks = JSON.parse(localStorage.getItem("books") || "[]");
  return prevsBooks.some((book: any) => book.cover_i === id);
};
