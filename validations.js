import { body } from "express-validator";

export const loginValidation = [
  body("email", "Incorrect Email format").isEmail(),
  body("password", "Password must contain minimum 5 symbols").isLength({
    min: 5,
  }),
];

export const registerValidation = [
  body("email", "Incorrect Email format").isEmail(),
  body("password", "Password must contain minimum 5 symbols").isLength({
    min: 5,
  }),
  body("fullName", "Write you name within minimum 3 symbols").isLength({
    min: 3,
  }),
  body("avatarUrl", "Incorrect URL").optional().isURL(),
];

export const postCreateValidation = [
  body("title", "Enter title").isLength({ min: 3 }).isString(),
  body("text", "Enter text")
    .isLength({
      min: 10,
    })
    .isString(),
  body("tags", "Incorrect tags format").optional().isString(),
  body("imageUrl", "Incorrect image URL").optional().isString(),
];
