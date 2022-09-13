import './All.css';
import { BiFootball } from "react-icons/bi";
import { FaDribbble } from "react-icons/fa";
import { FaVolleyballBall } from "react-icons/fa";
import Slider from '../Slider/Slider.js';
import News from '../News/News';
import MatchEnd from '../MatchEnd/MatchEnd';

const All = () => {
    return (
        <div>
            <div className='back'>
                <span className='items'>
                    <span className='item'><BiFootball className='ball' /><a href="#">Football</a></span>
                    <span className='item'><FaDribbble className='ball' /><a href="#">Basketball</a></span>
                    <span className='item'><FaVolleyballBall className='ball' /><a href="#">Volleyball</a></span>
                </span>
                <span className='header_img'>
                    <img src='../../log.png'></img>
                </span>
                <div className='two_back'>
                    <Slider />
                    <div className='back_three'>
                        <p className='title'>News</p>
                        <News time="9:34" text="Lorem Защитник Шахтера Сергей Кривцов поделился эмоциями " />
                        <News time="9:37" text="Lorem Защитник Шахтера ddmd Кривцов поделился эмоциями " />
                        <News time="10:04" text="Lorem Защитник Шахтера almdkwfg Кривцов поделился эмоциями от " />
                        <News time="11:14" text="Lorem Защитник Шахтера nssfkeheй Кривцов поделился эмоциями от " />
                    </div>
                    <div className='back_four'>
                        <div className='frame'>
                            <p className='frame_text'>Match End</p>

                            <div className='item_text'>
                                <p className='frame_text_under'>teams </p>
                                <p className='frame_text_under'>score </p>
                            </div>
                            
                            <div className='inFrame'>
                                <MatchEnd/>
                            </div>
                        </div>
                            
                    </div>
                </div>
            </div>
        </div>
    );

}

export default All;