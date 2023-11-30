import Header from "../components/Header";
import ListItem from "../components/ListItem";


export default function Home() {
  return (
    <div className="
      bg-neutral-900
      rounded-lg
      w-full
      overflow-hidden
      overflow-y-auto
    ">
        <Header>
            <div className="mb-2">
              <h1 className="text-white font-semibold text-3xl">
                Welcome Back
              </h1>
              <div
                className="
                  grid
                  grid-cols-1
                  sm:grid-cols-2
                  xl:grid-cols-5
                  2xl:grid-cols-6
                  mt-4
                  gap-3
                "
              >
                <ListItem  
                  image="/images/liked.png"
                  name="Liked Songs"
                  href="Liked"
                />

              </div>
            </div>
        </Header>
        <div className="mt-2 mb-7 px-6">
          <div className="flex justify-between items-center">
            <h1 className="text-white text-2xl font-semibold">
              Newest Songs
            </h1>
          </div>
          <div>
            List of Songs!
          </div>

        </div>
    </div>  
  )
}
