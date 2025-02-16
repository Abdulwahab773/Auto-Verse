let cars = {
    suzuki: {
        cultus: {
            carName: "Suzuki cultus",
            price: "PKR 2,749,000",
            picture: "https://cache4.pakwheels.com/system/car_generation_pictures/6014/original/Suzuki_Cultus_-_PNG.png?1635945515",
            mileage: "13 to 16",
            isAvail: true,
        },
        "wagon-R": {
            carName: "Suzuki wagonR",
            price: "PKR 3,241,000",
            picture: "https://cache4.pakwheels.com/system/car_generation_pictures/7314/original/Wagon-R.jpg?1677147187",
            mileage: "14 to 18",
        },
        swift: {
            carName: "Suzuki swift",
            price: "PKR 4,336,000",
            picture: "https://cache1.pakwheels.com/system/car_generation_pictures/7441/original/SWIFT.jpg?1677750438",
            mileage: "12 to 14",
        },
        alto: {
            carName: "Suzuki alto",
            price: "PKR 2,331,000",
            picture: "https://cache4.pakwheels.com/system/car_generation_pictures/6013/original/Suzuki_Alto_-_PNG.png?1635945100",
            mileage: "19 to 22",
        },
        every: {
            carName: "Suzuki every",
            price: "PKR 2,749,000",
            picture: "https://cache1.pakwheels.com/system/car_generation_pictures/6511/original/EVERY.jpg?1659341930",
            mileage: "16 to 18",
        },
    },
    toyota: {
        yaris: {
            carName: "toyota yaris",
            price: "PKR 4,336,000",
            picture: "https://tyrepoint.pk/wp-content/uploads/2020/11/Toyota-Yaris-tyrepoint.pk-1-3-wpv_600x_center_center.jpg",
            mileage: "12 to 15",
        },
        revo: {
            carName: "Toyota Revo",
            price: "PKR 9,399,000",
            picture: "https://cache2.pakwheels.com/system/car_generation_pictures/6006/original/Revo_-_PNG.png?1635483853",
            mileage: "8 to 10",
        },
        corolla: {
            carName: "Toyota Corolla",
            price: "PKR 4,569,000",
            picture: "https://cache1.pakwheels.com/system/car_generation_pictures/5361/original/Corolla-X-Cars-Cropped-Pictures-for-Website.jpg?1606903674",
            mileage: "12 to 16",
        },
        prius: {
            carName: "Toyota Prius",
            price: "PKR 9,276,000",
            picture: "https://cache1.pakwheels.com/system/car_generation_pictures/5262/original/prius.jpg?1595598083",
            mileage: "20 to 24",
        },
        aqua: {
            carName: "Toyota Aqua",
            price: "PKR 6,230,000",
            picture: "https://cdn.motor1.com/images/mgl/P3o2OX/s1/4x3/2023-toyota-aqua-gr-sport.webp",
            mileage: "24 to 28",
        }
    },
    honda: {
        city: {
            carName: "Honda City",
            price: "PKR 4,649,000",
            picture: "https://cache1.pakwheels.com/system/car_generation_pictures/6425/original/Honda_City_Front.jpg?1651424945",
            mileage: "12 to 16",
        },
        civic: {
            carName: "Honda Civic",
            price: "PKR 8,659,000",
            picture: "https://cache4.pakwheels.com/system/car_generation_pictures/7370/original/Cover.jpg?1677570254",
            mileage: "12 to 14",
        },
        "br-v": {
            carName: "Honda BR-V",
            price: "PKR 6,299,000",
            picture: "https://tyrepoint.pk/wp-content/uploads/2019/03/Honda-BRV-2-wpv_600x_center_center.jpg",
            mileage: "11 to 15",
        },
        "hr-v": {
            carName: "Honda HR-V",
            price: "PKR 7,650,000",
            picture: "https://cache1.pakwheels.com/system/car_generation_pictures/7250/original/f.jpg?1667212296",
            mileage: "12 to 15",
        },
        accord: {
            carName: "Honda Accord",
            price: "PKR 22,990,000",
            picture: "https://cache2.pakwheels.com/system/car_generation_pictures/6831/original/Honda_Accord_Front_Right_angled_.jpg?1663243625",
            mileage: "12 to 14",
        }
    },
    hyundai: {
        tucson: {
            carName: "Hyundai Tucson",
            price: "PKR 8,709,000",
            picture: "https://cache3.pakwheels.com/system/car_generation_pictures/6022/original/Tucson_-_PNG.png?1635948541",
            mileage: "10 to 12",
        },
        sonata: {
            carName: "Hyundai-Sonata-N-Line",
            price: "PKR 15,890,000",
            picture: "https://cache2.pakwheels.com/system/car_generation_pictures/8025/original/Cover.jpg?1737612526",
            mileage: "9 to 13",
        },
        staria: {
            carName: "Hyundai Staria",
            price: "PKR 11,009,000",
            picture: "https://cache1.pakwheels.com/system/car_generation_pictures/6085/original/Staria_-_PNG.png?1642404349",
            mileage: "8 to 10",
        },
        elantra: {
            carName: "Hyundai Elantra",
            price: "PKR 7,180,000",
            picture: "https://cache2.pakwheels.com/system/car_generation_pictures/7778/original/Front_Left_View.jpg?1729860896",
            mileage: "12 to 15",
        },
        "santa fe": {
            carName: "Hyundai Santa Fe",
            price: "PKR 12,990,000",
            picture: "https://cache4.pakwheels.com/system/car_generation_pictures/7593/original/Santa--fe-cover.jpg?1696188476",
            mileage: "9 to 12",
        }
    },
    kia: {
        sportage: {
            carName: "Kia Sportage",
            price: "PKR 8,770,000",
            picture: "https://cache3.pakwheels.com/system/car_generation_pictures/8102/original/Cover.jpg?1738231817",
            mileage: "10 to 12",
        },
        stonic: {
            carName: "Kia Stonic",
            price: "PKR 5,550,000",
            picture: "https://www.instacar.gr/cdn-cgi/image/format=webp,metadata=none,width=1208,height=907,fit=pad,background=transparent/https%3A%2F%2Fd10ax2wcinhk08.cloudfront.net%2Fvehicles-catalog%2F35c72140-6a38-4078-b254-ca13c7211055_kia-stonic-2020.png",
            mileage: "12 to 16",
        },
        picanto: {
            carName: "Kia Picanto",
            price: "PKR 3,850,000",
            picture: "https://cache3.pakwheels.com/system/car_generation_pictures/6017/original/Picanto_-_PNG.png?1635946684",
            mileage: "12 to 15",
        },
        carnival: {
            carName: "Kia Carnival",
            price: "PKR 16,000,000",
            picture: "https://cache3.pakwheels.com/system/car_generation_pictures/7988/original/Cover.jpg?1737101800",
            mileage: "8 to 10",
        },
        "EV-5": {
            carName: "Kia EV5",
            price: "PKR 23,500,000",
            picture: "https://cache3.pakwheels.com/system/car_generation_pictures/7884/original/Kia_EV5.jpg?1735285514",
            mileage: "N/A",
        }
    },
    audi: {

        "e-tron-gt": {
            carName: "Audi e-tron GT",
            price: "PKR 81,000,000",
            picture: "https://cache4.pakwheels.com/system/car_generation_pictures/5519/original/audi-gt-etron.jpg?1626680748",
            mileage: "N/A",
            fuelType: "Electric"
        },
        a5: {
            carName: "Audi A5",
            price: "PKR 80,000,000",
            picture: "https://cache3.pakwheels.com/system/car_generation_pictures/4394/original/Audi_A5_2017.jpg?1482500056",
            mileage: "10 to 13",
        },
        q3: {
            carName: "Audi Q3",
            price: "PKR 7,050,000",
            picture: "https://cache1.pakwheels.com/system/car_generation_pictures/7812/original/Cover.jpg?1732025336",
            mileage: "12 to 15",
        },
        a7: {
            carName: "Audi A7",
            price: "PKR 23,000,000",
            picture: "https://cache2.pakwheels.com/system/car_generation_pictures/6396/original/Audi_A7_Front.jpg?1650614916",
            mileage: "11 to 13",
        }
    },
    changan: {
        "oshan x7": {
            carName: "Changan Oshan X7",
            price: "PKR 9,099,000",
            picture: "https://cache3.pakwheels.com/system/car_generation_pictures/7963/original/Front_Left_View.jpg?1737093773",
            mileage: "10 to 12",
        },
        alsvin: {
            carName: "Changan Alsvin",
            price: "PKR 4,549,000",
            picture: "https://cache2.pakwheels.com/system/car_generation_pictures/6015/original/Alsvin_-_PNG.png?1635945771",
            mileage: "12 to 15",
        },
        karvaan: {
            carName: "Changan Karvaan",
            price: "PKR 2,779,000",
            picture: "https://cache4.pakwheels.com/system/car_generation_pictures/4835/original/Changan_Karvaan_.jpg?1536237811",
            mileage: "9 to 11",
        }
    }
}


let brands = document.getElementById("brands");
let models = document.getElementById("models");
let card = document.getElementById("card");

function loadAllCars() {
    card.innerHTML = "";
    brands.innerHTML = `<option value="" selected>Select Brand</option>`;
    for (let brand in cars) {
        brands.innerHTML += `<option value="${brand}">${brand.toUpperCase()}</option>`;
        for (let model in cars[brand]) {
            let details = cars[brand][model];
            card.innerHTML += `<div class="relative h-[450px] w-76 bg-white drop-shadow-xl mt-8  rounded-lg overflow-hidden">
                <div
                    class="absolute top-0 left-0 bg-blue-900 text-white text-md font-bold px-4 py-1 rounded-br-lg shadow-lg animate-fadeIn">
                    <span class="inline-block">Available</span>
                </div>
                <div class="flex flex-col items-end mr-4">
                    <div>
                        <span class="text-gray-600 text-xs">STARTING FROM</span>
                    </div>
                    <div>
                        <span id="price" class="text-2xl font-bold font-sans"> ${details.price} </span>
                    </div>
                </div>
                <div class="flex justify-center">
                    <img id="picture" src=" ${details.picture} " alt="">
                </div>
                <div class="flex justify-center mb-5">
                    <span class="text-2xl font-semibold font"><span id="carName"> ${details.carName.toUpperCase()}</span>
                </div>
                <div class="h-16 w-full flex">
                    <div class="h-20 w-[50%] ml-0.5 flex">
                        <div class="w[30%]">
                            <img src="speedometre.png" width="80%">
                        </div>
                        <div class="w-[60%] mt-0.5">
                            <span class="text-gray-600 text-xs">MILEAGE(KM/LITER)</span>
                            <span id="mileage" class="text-xl"> ${details.mileage} </span>
                        </div>
                    </div>
                    <div class="h-20 w-[50%] ml-0.5 flex ">
                        <div class="w-[30%] mt-1 ml-6 ">
                            <img src="gas-station.png" width="90%">
                        </div>
                        <div class="w-[60%] ml-2">
                            <span class="text-gray-600 text-sm">Fuel Type:</span>
                            <span class="text-xl">Petrol </span>
                        </div>
                    </div>
                </div>
                <div class="flex justify-between mx-5 mt-2">
                    <button
                        class=" book-now-btn cursor-pointer px-4 py-1 text-sm bg-white text-blue-900 border-2 border-blue-900 rounded-3xl hover:bg-blue-900 hover:text-white">
                        Book Now
                    </button>
                    <button
                        class="cursor-pointer px-4 py-1 text-sm bg-blue-900 text-white rounded-2xl hover:bg-white hover:text-blue-900 hover:outline-2 ">
                        Explore
                    </button>
                </div>
            </div>`
        }
    }         
}

loadAllCars();



function handleChange() {
    models.innerHTML = `<option>Select Model</option>`;
    for (let model in cars[brands.value]) {
        models.innerHTML += `<option value="${model}">${model.toUpperCase()}</option>`
    }
    let details = cars[brands.value];
}


function searchCar() {
    if (brands.value && cars[brands.value][models.value]) {
        card.innerHTML = "";    
        let details = cars[brands.value][models.value];
        card.innerHTML = `<div class="relative h-[500px] w-92 bg-white drop-shadow-xl mt-8 rounded-lg overflow-hidden">
            <div class="absolute top-0 left-0 bg-blue-900 text-white text-md font-bold px-4 py-1 rounded-br-lg shadow-lg animate-fadeIn">
                <span class="inline-block">Available</span>
            </div>
            <div class="flex flex-col items-end mr-4">
                <div>
                    <span class="text-gray-600 text-xs">STARTING FROM</span>
                </div>
                <div>
                    <span id="price" class="text-2xl font-bold font-sans">${details.price}</span>
                </div>
            </div>
            <div class="flex justify-center">
                <img id="picture" src="${details.picture}" alt="">
            </div>
            <div class="flex justify-center mb-5">
                <span class="text-2xl font-semibold font"><span id="carName">${details.carName.toUpperCase()}</span>
            </div>
            <div class="h-16 w-full flex">
                <div class="h-20 w-[50%] ml-0.5 flex">
                    <div class="w-[30%]">
                        <img src="speedometre.png" width="80%">
                    </div>
                    <div class="w-[60%] mt-0.5">
                        <span class="text-gray-600 text-xs">MILEAGE(KM/LITER)</span>
                        <span id="mileage" class="text-xl">${details.mileage}</span>
                    </div>
                </div>
                <div class="h-20 w-[50%] ml-0.5 flex">
                    <div class="w-[30%] mt-1 ml-6">
                        <img src="gas-station.png" width="90%">
                    </div>
                    <div class="w-[60%] ml-2">
                        <span class="text-gray-600 text-sm">Fuel Type:</span>
                        <span class="text-xl">Petrol</span>
                    </div>
                </div>
            </div>
            <div class="flex justify-between mx-5 mt-2">
                <button class="book-now-btn cursor-pointer px-4 py-1 text-sm bg-white text-blue-900 border-2 border-blue-900 rounded-3xl hover:bg-blue-900 hover:text-white">
                    Book Now
                </button>
                <button class="cursor-pointer px-4 py-1 text-sm bg-blue-900 text-white rounded-2xl hover:bg-white hover:text-blue-900 hover:outline-2">
                    Explore
                </button>
            </div>
        </div>`;
    } else if (brands.value) {
        card.innerHTML = "";
        for (let model in cars[brands.value]) {
            let details = cars[brands.value][model];
            card.innerHTML += `<div class="relative h-[450px] w-76 bg-white drop-shadow-xl mt-8 rounded-lg overflow-hidden">
            <div class="absolute top-0 left-0 bg-blue-900 text-white text-md font-bold px-4 py-1 rounded-br-lg shadow-lg animate-fadeIn">
                <span class="inline-block">Available</span>
            </div>
            <div class="flex flex-col items-end mr-4">
                <div>
                    <span class="text-gray-600 text-xs">STARTING FROM</span>
                </div>
                <div>
                    <span id="price" class="text-2xl font-bold font-sans">${details.price}</span>
                </div>
            </div>
            <div class="flex justify-center">
                <img id="picture" src="${details.picture}" alt="">
            </div>
            <div class="flex justify-center mb-5">
                <span class="text-2xl font-semibold font"><span id="carName">${details.carName.toUpperCase()}</span>
            </div>
            <div class="h-16 w-full flex">
                <div class="h-20 w-[50%] ml-0.5 flex">
                    <div class="w-[30%]">
                        <img src="speedometre.png" width="80%">
                    </div>
                    <div class="w-[60%] mt-0.5">
                        <span class="text-gray-600 text-xs">MILEAGE(KM/LITER)</span>
                        <span id="mileage" class="text-xl">${details.mileage}</span>
                    </div>
                </div>
                <div class="h-20 w-[50%] ml-0.5 flex">
                    <div class="w-[30%] mt-1 ml-6">
                        <img src="gas-station.png" width="90%">
                    </div>
                    <div class="w-[60%] ml-2">
                        <span class="text-gray-600 text-sm">Fuel Type:</span>
                        <span class="text-xl">Petrol</span>
                    </div>
                </div>
            </div>
            <div class="flex justify-between mx-5 mt-2">
                <button class="book-now-btn cursor-pointer px-4 py-1 text-sm bg-white text-blue-900 border-2 border-blue-900 rounded-3xl hover:bg-blue-900 hover:text-white">
                    Book Now
                </button>
                <button class="cursor-pointer px-4 py-1 text-sm bg-blue-900 text-white rounded-2xl hover:bg-white hover:text-blue-900 hover:outline-2">
                    Explore
                </button>
            </div>
        </div>`;
        }
    } else {
        loadAllCars();
    }
}





// Mobile Menu Toggle with Smooth Animation & Icon Change:
const menuBtn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");
const content = document.getElementById("content");

menuBtn.addEventListener("click", function () {
    if (menu.classList.contains("hidden")) {
        menu.classList.remove("hidden");
        setTimeout(() => {
            menu.classList.add("max-h-[500px]", "opacity-100");
            content.style.marginTop = menu.scrollHeight + "px";
        }, 10);
    } else {
        menu.classList.remove("max-h-[500px]", "opacity-100");
        setTimeout(() => {
            menu.classList.add("hidden");
            content.style.marginTop = "0px";
        }, 500);
    }

});

document.addEventListener("DOMContentLoaded", function () {
    const bookNowButtons = document.querySelectorAll(".book-now-btn");

    bookNowButtons.forEach((button) => {
        button.addEventListener("click", function () {
            window.location.href = "booking.html";
        });
    });
});