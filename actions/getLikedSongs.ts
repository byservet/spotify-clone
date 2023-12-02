import { Song } from "@/types";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies, headers } from "next/headers";

const getLikedSongs = async (): Promise<Song[]> => {

    // Promise for async process like fetch data, and 
    // It returns fulfilled or fails 

    const supabase = createServerComponentClient({
        cookies: cookies
    });

    const {
        data: {
            session
        }
    } = await supabase.auth.getSession();

    const { data, error } = await supabase
        .from('liked_songs')
        .select("*, songs(*)")
        .order('created_at', { ascending: false });

    if (error) {
        console.log(error);
        return [];
    }

    if (!data) {
        return [];
    }

    return data.map((item)=> ({
        ...item.songs
    }))
}

export default getLikedSongs;