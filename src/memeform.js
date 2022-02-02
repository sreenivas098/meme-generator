import {useState, useEffect} from "react";
const MemeForm = () => {
    const [top, setTop] = useState("");
    const [bottom, setBottom] = useState("");
    const [imgs, setImgs] = useState([]);
    const [randomImage, setRandomImage] = useState("")
    useEffect(()=>{
       const  loadData = () => {
            fetch("https://api.imgflip.com/get_memes")
            .then(images => images.json())
            .then(json => setImgs([...json.data.memes]))
            .catch(e => console.log(e))
        }
        loadData();
        
    },[]);
    const onSubmit = (e) =>{
        e.preventDefault();
        setTop(e.target.topName.value)
        setBottom(e.target.bottomName.value)
        if(imgs.length > 0){
            setRandomImage(imgs[Math.floor(Math.random()*imgs.length)].url)
        }
        
    }
    return(
        <div  style={{marginTop:"50px",marginLeft:'420px'}} >
            <div >
                <form onSubmit={onSubmit}>
                <label>Text at the Top:<input type="text" name="topName"  /></label>
                <label>Text at the Bottom:<input type="text" name="bottomName"  /></label><br/>
                <input style={{marginLeft:"220px",marginTop:'20px'}} className="btn btn-sm bg-primary" type="submit" />
                </form>
            </div>
            <div >
                <h6 style={{width:'380px',height:'50px', position:'relative',left:"20px", top:'80px', color:'red', fontSize:'1.5em'}}>{top}</h6>
              {top && bottom  && <img src={randomImage} width="420" height="320" alt="Meme image" /> }  
              <h6 style={{width:'380px',height:'50px',position:'relative',left:"20px", bottom:'70px', color:'red', fontSize:'1.5em'}}>{bottom}</h6>
              
            </div>
            
        </div>
    );
}
export default MemeForm;