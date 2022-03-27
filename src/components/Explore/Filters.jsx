import { useVideos } from "../../context"

const Filters = () => {
    const {categoriesData, videosState} = useVideos();
    return (
        <div class="chip-container flex-row flex-wrap flex-gap-1 w-100">
            {
                (categoriesData.length !== 0 && Object.keys(videosState).length !== 0) && 
                categoriesData.map(({categoryName}) => 
                    <section class="basic-chip flex-row align-center flex-wrap flex-gap-1">
                        <p class="basic-chip-content">{categoryName}</p>
                    </section>  
                )
            }
        </div>
    );
}

export {Filters};