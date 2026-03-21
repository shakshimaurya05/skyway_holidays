

import { useParams } from "react-router-dom"
import Navbar from "../components/navbar"
import Footer from "../components/footer"

import {
FaPlane,
FaHotel,
FaUtensils,
FaBus,
FaMapMarkedAlt,
FaMoneyBillWave
} from "react-icons/fa"

function PackageDetails(){

const { slug } = useParams()

const pkg = {

title: "Spiritual Sojourn to Gujarat",

category: "Family, Religious",

destinations: "2N Dwarka, 1N Somnath",

price: "₹27,999",

images:[
"https://images.unsplash.com/photo-1627894483216-2138af692e32",
"https://images.unsplash.com/photo-1548013146-72479768bada",
"https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
"https://images.unsplash.com/photo-1464822759023-fed622ff2c3b",
"https://images.unsplash.com/photo-1501785888041-af3ef285b470"
],

overview:

"Gujarat is famous for its diversity. In this package visit Dwarkadhish Temple (Dwarka), Somnath Temple (Somnath), Kirti Mandir, the Hari Temple and Sudama Temple in Porbandar. Our short tour packages are ideal for travelers who have limited time but want to explore the historical, religious and scenic beauty of Gujarat.",

flights:{
onward:"Delhi Airport → Rajkot Airport",
return:"Rajkot Airport → Delhi Airport"
},

hotel:{
name:"The Divine Resort",
location:"Dwarka & Somnath",
nights:"3 Nights"
},

meals:"Breakfast & Dinner Included",

transfers:[
"Airport to Hotel Transfer",
"Hotel to Airport Transfer"
],

sightseeing:[
"Dwarkadhish Temple",
"Somnath Temple",
"Sudama Temple",
"Kirti Mandir"
],

taxes:"All presently applicable Hotel & Airline taxes.",

itinerary:[

{
day:"Day 1 – Arrival Dwarka",
text:"Arrival at Rajkot Airport and transfer to Dwarka. Visit Dwarkadhish Temple and evening aarti."
},

{
day:"Day 2 – Dwarka Sightseeing",
text:"Explore Rukmini Temple, Nageshwar Jyotirlinga and Bet Dwarka island."
},

{
day:"Day 3 – Dwarka to Somnath",
text:"Drive to Somnath. Visit Somnath Temple and Triveni Sangam."
},

{
day:"Day 4 – Departure",
text:"Breakfast at hotel. Transfer to airport for return journey."
}

]

}

return(

<>

<Navbar/>

{/* STICKY BOOKING BAR */}
      {/* STICKY BOOKING BAR */}

<div className="sticky top-0 z-50 bg-white shadow-md border-b">

<div className="w-[85%] mx-auto py-4 flex items-center justify-between">

<div>

<h1 className="text-xl font-semibold">
{pkg.title}
</h1>

<p className="text-sm text-gray-500">
Package Category: {pkg.category}
</p>

<p className="text-sm text-gray-500">
Destinations Covered: {pkg.destinations}
</p>

</div>

<div className="flex items-center gap-6">

<div className="text-right">

<p className="text-sm text-gray-500">
Starting From
</p>

<p className="text-2xl font-semibold text-green-600">
{pkg.price}
</p>

<p className="text-xs text-gray-500">
Per person twin sharing
</p>

</div>

<button className="bg-teal-500 text-white px-6 py-2 rounded-lg hover:bg-teal-600 transition">
Book Now
</button>

<button className="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600 transition">
Send Enquiry
</button>

</div>

</div>

</div>

<section className="bg-gray-100 py-12">

<div className="w-[85%] mx-auto">


{/* IMAGE GALLERY */}

<div className="grid grid-cols-4 gap-4 my-10">

<img
src={pkg.images[0]}
className="col-span-2 row-span-2 h-[400px] w-full object-cover rounded-xl transition duration-500 hover:scale-105"
/>

{pkg.images.slice(1).map((img,index)=>(

<img
key={index}
src={img}
className="h-[190px] w-full object-cover rounded-xl transition duration-500 hover:scale-105"
/>

))}

</div>



{/* OVERVIEW */}

<div className="bg-white p-8 rounded-xl shadow mb-10">

<h2 className="text-2xl font-semibold mb-4">
Overview
</h2>

<p className="text-gray-600 leading-relaxed">
{pkg.overview}
</p>

</div>



{/* PACKAGE INCLUDES */}

<div className="bg-white p-8 rounded-xl shadow mb-12">

<h2 className="text-2xl font-semibold mb-8">
Package Includes
</h2>

<div className="grid md:grid-cols-3 gap-6">


<div className="backdrop-blur-sm bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition">

<FaPlane className="text-black text-2xl mb-3"/>

<h3 className="font-semibold">
Flights
</h3>

<p>{pkg.flights.onward}</p>

<p>{pkg.flights.return}</p>

</div>


<div className="backdrop-blur-sm bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition">

<FaHotel className="text-black text-2xl mb-3"/>

<h3 className="font-semibold">
Hotel
</h3>

<p>{pkg.hotel.name}</p>

<p>{pkg.hotel.location}</p>

<p>{pkg.hotel.nights}</p>

</div>


<div className="backdrop-blur-sm bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition">

<FaUtensils className="text-black text-2xl mb-3"/>

<h3 className="font-semibold">
Meals
</h3>

<p>{pkg.meals}</p>

</div>


<div className="backdrop-blur-sm bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition">

<FaBus className="text-black text-2xl mb-3"/>

<h3 className="font-semibold">
Transfers
</h3>

{pkg.transfers.map((t,i)=>(

<p key={i}>{t}</p>

))}

</div>


<div className="backdrop-blur-sm bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition">

<FaMapMarkedAlt className="text-black text-2xl mb-3"/>

<h3 className="font-semibold">
Sightseeing
</h3>

{pkg.sightseeing.map((s,i)=>(

<p key={i}>{s}</p>

))}

</div>


<div className="backdrop-blur-sm bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition">

<FaMoneyBillWave className="text-black text-2xl mb-3"/>

<h3 className="font-semibold">
Taxes
</h3>

<p>{pkg.taxes}</p>

</div>

</div>

</div>



{/* ITINERARY */}

<div className="bg-white p-8 rounded-xl shadow mb-12">

<h2 className="text-2xl font-semibold mb-8">
Detailed Itinerary
</h2>

<div className="relative">

{/* vertical line */}

<div className="absolute left-6 top-0 bottom-0 w-[2px] bg-gray-300"></div>

<div className="space-y-10">

{pkg.itinerary.map((day,index)=>(

<div key={index} className="flex gap-6 items-start">

<div className="relative z-10 w-12 h-12 rounded-full bg-teal-500 text-white flex items-center justify-center font-semibold">

{index+1}

</div>

<div className="bg-gray-50 p-6 rounded-xl flex-1 shadow-sm hover:shadow-md transition">

<h3 className="font-semibold text-lg">
{day.day}
</h3>

<p className="text-gray-600 mt-2">
{day.text}
</p>

</div>

</div>

))}

</div>

</div>

</div>

</div>

</section>

<Footer/>

</>

)

}

export default PackageDetails