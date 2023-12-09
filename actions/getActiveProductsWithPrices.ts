import { ProductWithPrice, Song } from "@/types";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies, headers } from "next/headers";

const getActiveProductWithPrices = async (): Promise<ProductWithPrice[]> => {

    // Promise for async process like fetch data, and 
    // It returns fulfilled or fails 

    const supabase = createServerComponentClient({
        cookies: cookies
    });

    const { data, error } = await supabase
        .from('products')
        .select('*, prices(*)')
        .eq('active', true)
        .eq('prices.active', true)
        .order('metadata->index')
        .order('unit_amount', { foreignTable: 'prices' });

    if (error) {
        console.log(error);
    }

    return (data as any) || [];
}

export default getActiveProductWithPrices;