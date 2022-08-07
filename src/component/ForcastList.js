import LeafletMap from "./LeafletMap";
import ListItem from "./ListItem";


const ForcastList =(({forcast}) =>{


    if(forcast){
    const removeIndex = forcast.daily.slice(1)
    
    const forcastDays = removeIndex.map((day, index) => {

        return (
        <>
       
        <ListItem day={day} key={index}/>
        </>
        )
        })

    return(
        <>
        <LeafletMap forcast={forcast}></LeafletMap>

        <ol className="list-days">
            {forcastDays}
        </ol>
        </>
    )}else{
        return (<p></p>)
    }
    
})












export default ForcastList;