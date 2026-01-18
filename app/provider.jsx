"use client";

import { ConvexProvider, ConvexReactClient } from "convex/react";
import { ReactNode, Suspense } from "react";
import AuthProvider from './AuthProvider'; // Adjust the path if necessary


const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL);

 function Provider({ children }) {
   return (
    <Suspense fallback={<div>Loading...</div>}>

   <ConvexProvider client={convex}>
      <AuthProvider>
           {children}
      </AuthProvider>   
    </ConvexProvider>
    </Suspense>
   );
}

export default Provider;