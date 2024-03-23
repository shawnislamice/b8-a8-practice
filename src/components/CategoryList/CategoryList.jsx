import useDonationData from "../../Hooks/useDonationData";
import CardDeafault from "../Card/CardDeafault";

const CategoryList = () => {
  const { data, loading } = useDonationData();
console.log(data);
   return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {
            data.map((item,index)=><CardDeafault item={item} key={index}></CardDeafault>)
        }
    </div>
   )
};

export default CategoryList;
