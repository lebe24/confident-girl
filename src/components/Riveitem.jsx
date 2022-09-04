import { useRive, Layout, Fit } from "rive-react";
import ep from '../assets/elps.svg'
import uni from '../assets/uni.svg'


export const Planet = () =>{
    const params = {
        src: 'rivefile.riv',
        autoplay: true,
        artboard: 'bluePlanet',
    }

    const { RiveComponent, rive, canvas } = useRive(params);

    console.log(canvas);

    return (
        <>
            <RiveComponent  style={{
                width: "400px", height: "400px" }} />
         </>
    );

}

export const Planet2 = () =>{
    const params = {
        src: 'gb.riv',
        autoplay: true
    }

    const { RiveComponent, rive, canvas } = useRive(params);

    console.log(canvas);

    return (
        <>
            <img className="absolute translate-x-[80px]" style={{
                width: "150px", height: "300px" }} src={ep} alt="" />
            <RiveComponent  style={{
                width: "300px", height: "400px" }} />
         </>
    );

}
export const Coffee = () =>{
    const params = {
        src: 'coffee.riv',
        autoplay: true,
    }

    const { RiveComponent, rive, canvas } = useRive(params);

    console.log(canvas);

    return (
        <>
            <RiveComponent  style={{width: "300px", height: "400px" }} />
         </>
    );

}

export const Girls = () =>{
    const params = {
        src: 'rivefile.riv',
        autoplay: true,
        artboard: 'girl',
    }

    const { RiveComponent, rive, canvas } = useRive(params);

    console.log(canvas);

    return (
        <>
            <RiveComponent  style={{
                miniWidth:'300px',
                width: "350px", height: "500px" }} />
         </>
    );

}
export const GirlsComputer = () =>{
    const params = {
        src: 'rivefile.riv',
        autoplay: true,
        artboard: 'working.svg',
    }

    const { RiveComponent, rive, canvas } = useRive(params);

    console.log(canvas);

    return (
        <>
            <RiveComponent  style={{
                miniWidth:'300px',
                width: "350px", height: "500px" }} />
         </>
    );

}


export const Univ =() =>{
    return(
        <div className="">
            <img src={uni} alt=""  style={{
                width: "100%", height: "100%" }}/>
        </div>
    )
}