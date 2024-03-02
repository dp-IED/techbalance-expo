/*
"birthdate",
"email",
"family_name",
"gender",
"name"
*/

export type AuthType = {
  email: string;
  password: string;
  name: string;
  family_name: string;

  birthdate: string;
  gender: "Male" | "Female" | "Other" | "I'd rather not say";
};
