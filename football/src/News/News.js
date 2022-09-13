import './News.css';

const News = (props) => {
   return(
    <div >
        <div className='MyNews'>
            <a href="#" className='new'><span className='new_time'>{props.time}</span><p className='new_text'>{props.text}</p></a>
        </div>
        
    </div>
   );


}

export default News;