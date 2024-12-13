import prisma from "@repo/db/db"
import bcrypt from "bcrypt"
import NextAuth from "next-auth/next"
import CredentialsProvider  from "next-auth/providers/credentials"

console.log(process.env.NEXTAUTH_SECRET)

export const NEXT_AUTH={
   
        providers:[
            CredentialsProvider({
                name:"Email",
                credentials:{
                    phoneNumber:{
                        label:'PhoneNumber', type: 'number',placeholder:'PhoneNumber'
                    },
                    password:{
                        label:'Password', type:'password' , placeholder:'Password'
                    }
                },
                async authorize(credentials:any){
                    console.log(credentials)
                    try{
                        const res=await prisma.user.findFirst({
                            where:{
                                phoneNumber:credentials.phoneNumber

                            },
                            select:{
                                userid:true,
                                email:true,
                                password:true,
                            }
                        }) 
                        
                        if(!res){
                            console.log(res)
                            
                            throw new Error("User not found")
                            
                        }
                        console.log(res)
                        const isVerified:boolean=await bcrypt.compare(credentials.password,res.password)
                        if(isVerified){
                            const user={
                                id:res.userid,
                                userid:res.userid,
                                email:res.email,
                                phoneNumber:credentials.phoneNumber
                            }
                            return user;
                        }else{
                             throw new Error("User not found")
                        }
                        
                    }catch(error){
                        throw new Error("Authorization failed");
                    }
                    
                }
            })
        ],
        secret:process.env.NEXTAUTH_SECRET,
        
        pages:{
            signIn:"/signin"
        },
        callbacks: {
            async jwt({ token, user }:any) {
                console.log(user)
              if (user) {
                token.userid = user.userid;
                token.phoneNumber = user.phoneNumber;
                token.email = user.email;
              }
              return token;
            },
          
            async session({ session, token,user }:any) {
             
                session.user.userid = token.userid;
                session.user.phoneNumber = token.phoneNumber;
                session.user.email = token.email;
                console.log(session)
              
              return session;
            },
          }

    
    }

