import React, { useState } from 'react'
import './style.css'
import Menu from './menuApi'
import MenuCard from './MenuCard';
import Navbar from './Navbar';

const uniqueList = [...new Set(Menu.map((curElem)=>{
    return curElem.category;
})),"All"];
console.log(uniqueList);
const Restaurant = () => {
    const [menuData,setMenuData]=useState(Menu);
    const [menuList, setMenuList] = useState(uniqueList);
    console.log("menuList",menuList);
    console.log(menuData);
    const filterItem=(category)=>{
        if(category==="All"){
            setMenuData(Menu);
            return;
        }
        const updatedList = Menu.filter((curElem)=>{
            return curElem.category===category;
        });
        console.log(updatedList);
        setMenuData(updatedList);
    };
    return (

        <>
         <h2 className='dynamic'><marquee>Welcome welcome!</marquee></h2>
         <h1 className='title'>Radhe Restaurant</h1>
         <Navbar filterItem={filterItem} menuList={menuList}/>
         <MenuCard menudata={menuData}/>  
        </>
    )
}

export default Restaurant
