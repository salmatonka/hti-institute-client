import React, { useEffect, useState } from 'react';

const ServiceCards = () => {
    // const [users, setAllUsers] = useState([])
    // useEffect(()=>{
    //     fetch('http://localhost:5000/users')
    //     .then(res =>res.json())
    //     .then(data =>setAllUsers(data))
    // },[])


    const handleAddUser = (event) => {
      event.preventDefault();
      const name = event.target.name.value;
      const email = event.target.email.value;
      const user = {name, email}
      console.log(user)
// post method
      // fetch('http://localhost:5000/users',{
      //   method: 'POST',
      //   headers:{'content-type':'application/json'},
      //   body: JSON.stringify(user)
      // })
      // .then(res => res.json())
      // .then(data => {
      //   console.log(data)
      //   const newUsers = [...users, data];
      //   // console.log(newUsers)
      //   setAllUsers(newUsers)
      // })
      // .catch(err =>console.error(err))

      event.target.reset();
    }


    return (
        <div className='py-24 text-center'>
           <h1 className='py-6 '>hellllll</h1>

           <div className='py-6 '>
           <section className="p-6 bg-gray-800 text-gray-100">
	<div className="container grid gap-6 mx-auto text-center lg:grid-cols-2 xl:grid-cols-5">
		<div className="w-full px-6 py-16 rounded-md sm:px-12 md:px-16 xl:col-span-2 bg-gray-900">
			<span className="block mb-2 text-violet-400">Mamba design system</span>
			<h1 className="text-5xl font-extrabold dark:text-gray-50">Build it with Mamba</h1>
			<p className="my-8">
				<span className="font-medium dark:text-gray-50">Modular and versatile.</span>Fugit vero facilis dolor sit neque cupiditate minus esse accusamus cumque at.
			</p>
			<form onSubmit={handleAddUser} novalidate="" action="" className="self-stretch space-y-3">
				<div>
					<label for="name" className="text-sm sr-only">Your name</label>
					<input id="name" type="text"  name="name" placeholder="Your name" className="w-full rounded-md focus:ring focus:ri dark:border-gray-700" />
				</div>
				<div>
					<label for="email" className="text-sm sr-only">Email address</label>
					<input id="email" type="email" name="email" placeholder="Email address" className="w-full rounded-md focus:ring focus:ri dark:border-gray-700" />
				</div>
				<button type="submit" className="w-full py-2 font-semibold rounded bg-violet-400 dark:text-gray-900">AddUsers</button>
			</form>
		</div>
		<img src="https://source.unsplash.com/random/480x360" alt="" className="object-cover w-full rounded-md xl:col-span-3 dark:bg-gray-500" />
	</div>
</section>
           </div>
           {/* <div>
            {
              users.map(user =>  <div key={user.id}>
                <h2>{user.name}</h2>
                <p>{user.email}</p>
              </div> )
            }
            </div>  */}
        </div>
    );
};

export default ServiceCards;