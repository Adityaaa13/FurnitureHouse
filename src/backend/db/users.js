import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * Every user will have cart (Quantity of all Products in Cart is set to 1 by default), wishList by default
 * */

export const users = [
  {
    _id: uuid(),
    username: "Aditya",
    email: "aditya@gmail.com",
    password: "123@",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    username: "John Doe",
    email: "john@example.com",
    password: "password123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    username: "Jane Smith",
    email: "jane@example.com",
    password: "password456",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    username: "Admin User",
    email: "admin@furniturehouse.com",
    password: "admin123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
