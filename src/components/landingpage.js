import React, {useState} from 'react';
import './landingpage.css'

function LandingPage(){
    const [roles,setRoles] = useState([
       {
           title: 'Sói Trùm',
           qty: 1,
           assignee: []
       },
       {
            title: 'Sói Thường',
            qty: 1,
            assignee: []
        },
        {
            title: 'Bán Sói',
            qty: 1,
            assignee: []
            },
        {
            title: 'Phù Thủy',
            qty: 1,
            assignee: []
        },
        {
            title: 'Tiên Tri',
            qty: 1,
            assignee: []
            },
        {
            title: 'Cổ Hoặc Sư',
            qty: 1,
            assignee: []
        },
        {
            title: 'Bảo Vệ',
            qty: 1,
            assignee: []
        },
        {
            title: 'Dân Làng',
            qty: 1,
            assignee: []
            },
    ])

    const [players,setPlayer] = useState('')

    const add = function(e){
      roles[e].qty += 1
      setRoles([...roles])
    }

    const minus = function(e){
        if(roles[e].qty <=1){
            return
        } else{
            roles[e].qty -=1;
            setRoles([...roles])
        }
        

    }

    const getRole = ()=>{
        for(let k = 0; k < roles.length; k++){
            roles[k].assignee = []
        }
        let playersArr = players.split(',')
        let i = 0
        while(playersArr.length > 0 && i < roles.length ){
            let random = Math.floor(Math.random()*playersArr.length)
            let num = roles[i].qty;
            while(num > 0){
                let newRandom = Math.floor(Math.random()*playersArr.length)
                roles[i].assignee.push(playersArr[newRandom])
                playersArr.splice(newRandom,1)
                console.log(roles[i])
                num--
            }
            i++;
        }
        setRoles([...roles])
    }
    return(
        <div>
            Welcome To Ma Sói !!!
            <div className='container'>
                {roles.map((role,i) =>{
                    return(
                    <div className='card'>
                        <div className='title'>{role.title}</div> <br/>
                        
                        {role.assignee.map(e =>{
                            return(
                                <div>
                                {e}
                                </div>
                                
                            )
                        })}
                        <div className='btn-container'>
                            <button onClick={()=>{minus(i)}}>-</button>
                            {role.qty}
                            <button onClick={()=>{add(i)}}>+</button>
                        </div>
                    </div>)
                })}
            </div>
            
            <div className='form'>
                Tên Người Chơi : 
                <input onChange={(e)=>setPlayer(e.target.value)}></input> 
            </div>
            <button onClick={getRole}>Get Role</button>
        </div>
    )
}

export default LandingPage;