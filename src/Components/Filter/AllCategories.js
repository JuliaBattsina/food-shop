import Filter from "./Filter";

const AllCategories =() => {
    return (
        <div >
        <h1>What Kind of Food do You Like</h1>

{['ITALIAN','SEAFOOD','APPETIZERS','SALADS', 'ALL']
.map(category => <Filter category={category}/>
)}
        </div>
    )
}
export default  AllCategories;