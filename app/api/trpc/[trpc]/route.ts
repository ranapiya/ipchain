import { appRouter } from "@/lib/trpc";
import { createTRPCContext } from "@/lib/trpc/trpc";
import { fetchRequestHandler } from "@trpc/server/adapters/fetch";

// API Route Handler
const handler = (req: Request) =>
  fetchRequestHandler({
    endpoint: "/api/trpc",
    req,
    router: appRouter,
    createContext: createTRPCContext,
  });

export { handler as GET, handler as POST };

async function normalFunction  (){
  
  function1()  
  function2() //  a
  function5()  
  await function3() // a        
  fucntion4()
  

}