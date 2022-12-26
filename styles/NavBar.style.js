import styled from "styled-components";



export const NavBar = styled.div`
   background:${(pros)=>pros.bg};
   margin:0 auto;
   
   .nav{
      display:flex;
      justify-content:space-between;
   }
   .logo{
      color:skyblue;
      font-size:40px;
   }
   .logospan{
      font-size:30px;
      color:white;
   }
   .links{
      display:flex;
      justify-content:space-between;
      gap:60px
   }
   .item{
      font-size:35px;
      color:white;
      cursor:pointer;
      list-style:none;
   }
   .item:hover{
      color:skyblue;
   }
   .bar{
      display:hidden;
      width:30px;
      height:3px;
      margin:5px;
      background:white;}
   .search{
      width:100%
      height:100%;
      font-size:30px;
   }
   .searchContainer{
      display:flex;
   }
   .searchBar{
      margin-top:4px;
   }
   .searchBtn{
      width:74px;
      margin-top:2px;
      height:38px;
      font-size:20px;
      text-align:center;
      color:blue;
      font-weight:bold;
   }
   @media(max-width:1000px){
      .bar{
         display:block;
         width:30px;
         height:3px;
         margin:5px;
         background:white;
      }
      .menu.active :nth-child(1){
         transform: translateX(1px)translateY(17px)rotate(45deg);
         transition:.3s ease-in-out;
      }
      .menu.active :nth-child(2){
         transition:.3s ease-in-out;
         opacity:0;
      }
      .menu.active :nth-child(3){
         transition:.3s ease-in-out;
         transform: translateX(1px)translateY(1px)rotate(-45deg);
      }
      .links{
         flex-direction:column;
         position:fixed;
         background:gray;
         width:100%;
         top:47px;
         right:-100%;
         text-align:center;
         justify-content:center;
         transition:.3s ease-in-out;
      }
      .links.active{
         right:0;
      }
      .searchContainer{
         display:flex;
      }
      .searchBar{
         margin-top:4px;
      }
      .search{
         width:100%;
         font-size:20px;
         height:90%;
      }
      .searchBtn{
         width:74px;
         margin-top:2px;
         height:38px;
         font-size:20px;
         text-align:center;
         color:blue;
         font-weight:bold;
      }

      @media(max-width:400px){
         .bar{
            display:block;
            width:30px;
            height:3px;
            margin:5px;
            background:white;
         }
         .menu.active :nth-child(1){
            transform: translateX(1px)translateY(17px)rotate(45deg);
            transition:.3s ease-in-out;
         }
         .menu.active :nth-child(2){
            transition:.3s ease-in-out;
            opacity:0;
         }
         .menu.active :nth-child(3){
            transition:.3s ease-in-out;
            transform: translateX(1px)translateY(1px)rotate(-45deg);
         }
         .links{
            flex-direction:column;
            position:fixed;
            background:gray;
            width:100%;
            top:47px;
            right:-100%;
            text-align:center;
            justify-content:center;
            transition:.3s ease-in-out;
         }
         .links.active{
            right:0;
         }
         .searchContainer{
            display:flex;
         }
         .searchBar{
            margin-top:4px;
         }
         .search{
            width:100%;
            font-size:20px;
            height:43%;
         }
         .searchBtn{
            width:74px;
            margin-top:2px;
            height:38px;
            font-size:20px;
            text-align:center;
            color:blue;
            font-weight:bold;
         }
     
   }
   `