import z from "zod"

export  const UserSchemaSignUp=z.object({
    name:z.string().trim().min(3,{message:"Name must be should be 3 min characters"}),
    email:z.string().trim().email({message:"Provide a valid email"}),
    phoneNumber:z.coerce.number().gte(1111111111,{message:"Phone Number must be of 10 digits (do not add +91 )"}),
    password:z.string().min(6,{message:"Password must be atleast 6 characters"})
})

export const UserSchemaSign=UserSchemaSignUp.omit({
    name:true,
    email:true
})