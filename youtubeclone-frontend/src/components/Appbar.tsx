import { Searchbar } from "./Searchbar"

export const Appbar=()=>{
    return <div className="flex justify-between pt-1 p-3" >
      
      <div className="text-md inline-flex items-center pb-2 ">
        youtube
      </div>
      <div>
        <Searchbar />
      </div>

      <div className="text-md inline-flex items-center pb-2 pr-5">
        Sign in
      </div>
    </div>
}