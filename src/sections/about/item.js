import styled from "styled-components";

export default styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 250px;
  width: 100%;
  background-color: transparent;
  color: #fff;
  margin: 15px;
  font-size: 4em;

  .card{
    height: 310px;
    width: 310px;
    background-color: white;
    transform: scale(0.7);
    border-radius: 8px;
    box-shadow: 0 0 10px 0.5px white;
}
.card .info{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
}
.card .info .name{
    font-size: 35px;
    font-weight: 600;
    color: #f79f08;
    position: absolute;
    top: 50px;
    letter-spacing: 2px;
}
.divider{
    background-color: #e85a0c;
    height: 1.5px;
    width: 100px;
    position: absolute;
    top: 100px;
}
.bio{
    position: absolute;
    top: 110px;
    color: #000000;
    line-height: 28px;
    font-size: 18px;
    text-align: center;
}
.button{
    position: absolute;
    bottom: 30px;
    background-color: #f79f08;
    border: none;
    font-size: 20px;
    padding: 13px 25px;
    cursor: pointer;
    color: white;
    text-decoration: none;
}
.photo{
    height: 100%;
    width: 100%;
    background-repeat: no-repeat;
    position: absolute;
    bottom: 0;
    background-size: 100% 100%;
    border-radius: 8px;
    transition: 1s;
}       
.card:hover .name{
    display: inline;
}

.card:hover .photo{
    transform: scale(0.5, 0.35) translateY(-450px);
    border-radius: 50%;
    background-size: 100% 100%;
    background-position: 0 0;
 }     
 .card .a2{
    position: absolute;
    bottom: -70px;
    font-size: 25px;
    color: whitesmoke;
    background-color: #ff6e20;
    width: 100%;
    padding: 5px 0;
    font-size: 27px;
    font-family: 'Poppins';
    font-weight: 600;
    text-align: center;
    letter-spacing: 2px;
    text-decoration: none;
}

@media (max-width:1400px) and (min-width: 1001px) {
    .card{
        height: 210px;
        width: 210px;
        background-color: white;
        transform: scale(0.7);
        border-radius: 8px;
        box-shadow: 0 0 10px 0.5px white;
    }
    .card .info{
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
    }
    .card .info .name{
        font-size: 15px;
        font-weight: 600;
        color: #f79f08;
        position: absolute;
        top: 20px;
        letter-spacing: 2px;
    }
    .divider{
        background-color: #e85a0c;
        height: 1.5px;
        width: 100px;
        position: absolute;
        top: 40px;
    }
    .bio{
        position: absolute;
        top: 60px;
        color: #000000;
        line-height: 28px;
        font-size: 15px;
        text-align: center;
    }
    .button{
        position: absolute;
        bottom: 15px;
        background-color: #f79f08;
        border: none;
        font-size: 15px;
        cursor: pointer;
        color: white;
        text-decoration: none;
    }
    .photo{
        height: 100%;
        width: 100%;
        background-repeat: no-repeat;
        position: absolute;
        bottom: 0;
        background-size: 100% 100%;
        border-radius: 8px;
        transition: 1s;
    }       
    .card:hover .name{
        display: inline;
    }
    
    .card:hover .photo{
        transform: scale(0.5, 0.35) translateY(-350px);
        border-radius: 50%;
        background-size: 100% 100%;
        background-position: 0 0;
     }     
     .card .a2{
        position: absolute;
        bottom: -70px;
        font-size: 25px;
        color: whitesmoke;
        background-color: #ff6e20;
        width: 100%;
        padding: 5px 0;
        font-size: 27px;
        font-family: 'Poppins';
        font-weight: 600;
        text-align: center;
        letter-spacing: 2px;
        text-decoration: none;
    }       
    @media (max-width:500px) {
        .card{
            height: 210px;
            width: 210px;
            background-color: white;
            transform: scale(0.7);
            border-radius: 8px;
            box-shadow: 0 0 10px 0.5px white;
        }
        .card .info{
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
        }
        .card .info .name{
            font-size: 15px;
            font-weight: 600;
            color: #f79f08;
            position: absolute;
            top: 20px;
            letter-spacing: 2px;
        }
        .divider{
            background-color: #e85a0c;
            height: 1.5px;
            width: 100px;
            position: absolute;
            top: 40px;
        }
        .bio{
            position: absolute;
            top: 60px;
            color: #000000;
            line-height: 28px;
            font-size: 15px;
            text-align: center;
        }
        .button{
            position: absolute;
            bottom: 15px;
            background-color: #f79f08;
            border: none;
            font-size: 15px;
            cursor: pointer;
            color: white;
            text-decoration: none;
        }
        .photo{
            height: 100%;
            width: 100%;
            background-repeat: no-repeat;
            position: absolute;
            bottom: 0;
            background-size: 100% 100%;
            border-radius: 8px;
            transition: 1s;
        }       
        .card:hover .name{
            display: inline;
        }
        
        .card:hover .photo{
            transform: scale(0.5, 0.35) translateY(-350px);
            border-radius: 50%;
            background-size: 100% 100%;
            background-position: 0 0;
         }     
         .card .a2{
            position: absolute;
            bottom: -70px;
            font-size: 25px;
            color: whitesmoke;
            background-color: #ff6e20;
            width: 100%;
            padding: 5px 0;
            font-size: 27px;
            font-family: 'Poppins';
            font-weight: 600;
            text-align: center;
            letter-spacing: 2px;
            text-decoration: none;
        }       
}


`;
