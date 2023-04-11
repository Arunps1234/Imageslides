import React,{useState} from 'react'
import { Data } from './Data'
import { BsChevronLeft, BsChevronRight} from "react-icons/bs";



const Display = () =>{
    const[index, setIndex] = useState(0)
    console.log(Data)
    const [val, setval]=useState(Data)
    const[disabledfirst, setDisabled] =useState(true)

    

    const Previouse  = () =>{
        let indexZero = index===0
        let PreviouseSlide =  indexZero ? Data.length-1 : index-1
        setIndex(PreviouseSlide)

    }


    const moveRight = () =>{
        let indexLast = index==Data.length-1;
        let NextSlide = indexLast ? 0 : index+1

        setIndex(NextSlide)
    
    }
    (
        function(){
            console.log("Hii")
        }
    )()


    return(
        <>
            <div >
            <BsChevronLeft style={{fontSize:"100px", position:"absolute", top:"500px", left:"350px", color:"white", cursor:"pointer"}} onClick={Previouse}  ></BsChevronLeft>

<img src={Data[index].Images} style={{width:"500px", height:"400px", margin:"350px" }}/>

<small style={{position:"absolute", top:"380px", left:"810px", color:"white", fontSize:"20px"}}> {index+1}/{Data.length} </small>
<BsChevronRight style={{fontSize:"100px", position:"absolute", top:"500px", left:"750px", color:"white", cursor:"pointer"}} onClick={moveRight}/>

</div>
</>
        
    )
}

export default Display