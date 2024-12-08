import CredentialsProvider from "next-auth/providers/credentials"

export const NEXT_AUTH={
   
        providers:[
            CredentialsProvider({
                name:"Email",
                credentials:{
                    PhoneNumber:{
                        label:'PhoneNumber', type: 'number',placeholder:'PhoneNumber'
                    },
                    Password:{
                        label:'Password', type:'password' , placeholder:'Password'
                    }
                },
                async authorize(credentials:any){
                    try{
                        
                    }catch(error){

                    }
                    return {
                        id: "user1",
                        name:"akjkfjadk",
                        PhoneNumber:"akjkfjadk",
                        Password:"akjdkfjakdsjf"
                    }
                }
            })
        ],
        secret:process.env.NEXTAUTH_SECRET,
        callbacks:{
            
            session:({session,token,user}:any)=>{
                if(session && session.user){
                    session.user.PhoneNumber="token.PhoneNumber"
                    
                }
                return session
            }
        },
        pages:{
            signIn:"./signin"
        }

    
    }

