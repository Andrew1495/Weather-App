import ListItem from "./ListItem";

const ForcastList =(({forcast}) =>{

    const removeIndex = forcast.daily.slice(1)
    
    const forcastDays = removeIndex.map((day, index) => {
        return <ListItem day={day} key={index}/>
        })

    return(
        <ol>
            {forcastDays}
        </ol>
    )

});












export default ForcastList;