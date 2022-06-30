export type user = {
   id: number,
   name: string,
   email: string,
   type: string
};

export enum TYPE {
   OPERATIONS = "OPERATIONS",
   TEACHER = "TEACHER",
   CX = "CX"
};