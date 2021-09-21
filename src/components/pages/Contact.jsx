import React, {useState} from 'react'
const Contact = () => {
    const [data, setData] = useState({
        fullname:"",
        phone:"",
        email:"",
        msg:""
    })
    const InputEvent=(event)=>{
        const {name, value}= event.target;
        setData((preVal)=>{
            return{
                ...preVal, 
                [name] : value,
            }
        })
    }
const formSubmit=(e)=>{
    e.preventDefault();
    alert(`
    Name : ${data.fullname} 
    Phone : ${data.phone} 
    E-mail : ${data.email} 
    Messege : ${data.msg} `)
}
    return (
        <>
        <section className="contact section" id="contact">
           <div className="">
           <h2 className="section-title">Contact</h2>
           </div>
           <div className="container contact_div">
               <div className="row">
                   <div className="col-md-6 col-10 mx-auto">
                      <form onSubmit={formSubmit} className="border rounded p-4 shadow">
                        <div className="mb-3">
                            <label for="exampleFormControlInput1" className="form-label">FullName</label>
                            <input 
                            type="name" 
                            className="contact__input" 
                            id="exampleFormControlInput1" 
                            name="fullname"
                            value={data.fullname}
                            onChange={InputEvent}
                            placeholder="Enter your name"/>
                        </div>
                        <div className="mb-3">
                            <label for="exampleFormControlInput1" className="form-label"> Phone </label>
                            <input 
                            type="number" 
                            className="contact__input" 
                            id="exampleFormControlInput1" 
                            name="phone"
                            value={data.phone}
                            onChange={InputEvent}
                            placeholder="Mobile Number"/>
                        </div>
                        <div className="mb-3">
                            <label for="exampleFormControlInput1" className="form-label">Email address</label>
                            <input 
                            type="email" 
                            className="contact__input" 
                            id="exampleFormControlInput1" 
                            name="email"
                            value={data.email}
                            onChange={InputEvent}
                            placeholder="name@example.com"/>
                        </div>
                        <div className="mb-3">
                                <label for="exampleFormControlTextarea1" className="form-label">Messege</label>
                                <textarea 
                                className="contact__input" 
                                id="exampleFormControlTextarea1" 
                                name="msg"
                                value={data.msg}
                                onChange={InputEvent}
                                rows="3"></textarea>
                        </div>
                         <div className="col-12">
                            <button className="btn btn-outline-primary" type="submit">Submit form</button>
                        </div>
                      </form>
                   </div>
               </div>
           </div>
           
           </section>
           <svg className="getwaves" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
  <path fill="#273036" fill-opacity="0.2" d="M0,64L8.6,101.3C17.1,139,34,213,51,213.3C68.6,213,86,139,103,122.7C120,107,137,149,154,165.3C171.4,181,189,171,206,144C222.9,117,240,75,257,90.7C274.3,107,291,181,309,192C325.7,203,343,149,360,144C377.1,139,394,181,411,218.7C428.6,256,446,288,463,256C480,224,497,128,514,74.7C531.4,21,549,11,566,53.3C582.9,96,600,192,617,197.3C634.3,203,651,117,669,80C685.7,43,703,53,720,80C737.1,107,754,149,771,176C788.6,203,806,213,823,197.3C840,181,857,139,874,149.3C891.4,160,909,224,926,245.3C942.9,267,960,245,977,208C994.3,171,1011,117,1029,96C1045.7,75,1063,85,1080,117.3C1097.1,149,1114,203,1131,218.7C1148.6,235,1166,213,1183,192C1200,171,1217,149,1234,122.7C1251.4,96,1269,64,1286,80C1302.9,96,1320,160,1337,202.7C1354.3,245,1371,267,1389,266.7C1405.7,267,1423,245,1431,234.7L1440,224L1440,320L1431.4,320C1422.9,320,1406,320,1389,320C1371.4,320,1354,320,1337,320C1320,320,1303,320,1286,320C1268.6,320,1251,320,1234,320C1217.1,320,1200,320,1183,320C1165.7,320,1149,320,1131,320C1114.3,320,1097,320,1080,320C1062.9,320,1046,320,1029,320C1011.4,320,994,320,977,320C960,320,943,320,926,320C908.6,320,891,320,874,320C857.1,320,840,320,823,320C805.7,320,789,320,771,320C754.3,320,737,320,720,320C702.9,320,686,320,669,320C651.4,320,634,320,617,320C600,320,583,320,566,320C548.6,320,531,320,514,320C497.1,320,480,320,463,320C445.7,320,429,320,411,320C394.3,320,377,320,360,320C342.9,320,326,320,309,320C291.4,320,274,320,257,320C240,320,223,320,206,320C188.6,320,171,320,154,320C137.1,320,120,320,103,320C85.7,320,69,320,51,320C34.3,320,17,320,9,320L0,320Z"></path>
</svg>
        </>
    )
}

export default Contact
 


// import React, {useState} from 'react'

// const Contact = () => {
//     const [input, setInput] = useState({
//         name:"",
//         phone:"",
//         email:"",
//         msg:""
//     })
//     const InputEvent=(event)=>{
//         const {name, value} = event.target;
//         setInput((prevData)=>{
//             return{
//                 ...prevData,
//                 [name] : value
//             }
//         })
//     }
//     const dataSubmit=(e)=>{
//         e.preventDefault()
//         alert(`
//         name:${input.name}
//         phone:${input.phone}
//         email:${input.email}
//         messege:${input.msg}
//         `)
//     }

//     return (
//         <>
//             <section className="contact section" id="contact">
//                 <h2 className="section-title">Contact</h2>

//                 <div className="contact__container bd-grid border p-4 rounded shadow">
//                     <form onSubmit={dataSubmit} action="" className="contact__form">

//                         <input 
//                         type="text" 
//                         name="name"
//                         value={input.name}
//                         onChange={InputEvent}
//                         placeholder="Name" 
//                         className="contact__input"/>

//                         <input 
//                         type="number" 
//                         name="phone"
//                         value={input.phone}
//                         onChange={InputEvent}
//                         placeholder="Phone" 
//                         className="contact__input"/>

//                         <input 
//                         type="email" 
//                         name="email"
//                         value={input.email}
//                         onChange={InputEvent}
//                         placeholder="Email" 
//                         className="contact__input"/>

//                         <textarea 
//                         name="msg" 
//                         value={input.msg}
//                         onChange={InputEvent}
//                         id="" 
//                         cols="0" 
//                         rows="10" 
//                         className="contact__input"/>

//                         <input type="button" 
//                         value="Submit" 
//                         className="contact__button button"/>

//                     </form>
//                 </div>
//             </section>
//         </>
//     )
// }

// export default Contact
