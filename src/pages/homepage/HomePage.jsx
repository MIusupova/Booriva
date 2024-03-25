import NewItems from "./new_items/new_items"
import NewCollectionBox from "./new_collection/new_collection"

const HomePage = () => {
    return (
        <div className="homepage">
            <NewItems/>
            <NewCollectionBox/>
        </div>
    )
    
}
export default HomePage