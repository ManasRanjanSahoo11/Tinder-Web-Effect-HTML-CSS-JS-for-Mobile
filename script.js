// get the data
let users = [
    {
        profilePic: "https://images.unsplash.com/photo-1567022296806-d2d37b715647?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        displayPic: "https://images.unsplash.com/photo-1577922230314-d74a26a8a501?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE3fHx8ZW58MHx8fHx8",
        pendingMsg: 10,
        location: "Delhi, IND",
        name: "Manasi",
        age: 23,
        interests: [{
            icon: `<i class="text-sm ri-disc-line"></i>`,
            interest: "music"
        }, {
            icon: `<i class="text-sm ri-gamepad-line"></i>`,
            interest: "gaming"
        }],
        bio: "I am passionate front web developer.",
        isFriend: null
    },
    {
        profilePic: "https://plus.unsplash.com/premium_photo-1674069719766-9e44c2751cf7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MnxXbmVfVjViXzV5TXx8ZW58MHx8fHx8",
        displayPic: "https://plus.unsplash.com/premium_photo-1674069719882-6c361938c0b3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE2fHx8ZW58MHx8fHx8",
        pendingMsg: 0,
        location: "BBSR, IND",
        name: "Delta",
        age: 24,
        interests: [{
            icon: `<i class="text-sm ri-terminal-box-line"></i>`,
            interest: "coding"
        }, {
            icon: `<i class="text-sm ri-disc-line"></i>`,
            interest: "music"
        }],
        bio: "I am passionate android developer.",
        isFriend: null
    },
    {
        profilePic: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        displayPic: "https://images.unsplash.com/photo-1571513722275-4b41940f54b8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEzfHx8ZW58MHx8fHx8",
        pendingMsg: 5,
        location: "Hydrabad, IND",
        name: "Alpha",
        age: 26,
        interests: [{
            icon: `<i class="text-sm ri-gamepad-line"></i>`,
            interest: "gaming"
        }],
        bio: "I am passionate full stack web developer.",
        isFriend: null
    },
    {
        profilePic: "https://plus.unsplash.com/premium_photo-1673781991836-3a655398b6f0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MnwzMFRmRU1HS1pfY3x8ZW58MHx8fHx8",
        displayPic: "https://plus.unsplash.com/premium_photo-1711189389454-d3ec683b0400?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        pendingMsg: 8,
        location: "Bengaluru, IND",
        name: "Gamma",
        age: 24,
        interests: [{
            icon: `<i class="ri-quill-pen-line"></i>`,
            interest: "writing"
        }, {
            icon: `<i class="text-sm ri-gamepad-line"></i>`,
            interest: "gaming"
        }],
        bio: "I am passionate web3 developer.",
        isFriend: null
    },
]

function select(elem) {
    return document.querySelector(elem)
}


function setData(index){
    select(".profile img").src = users[index].profilePic;
    select(".badge h2").innerText = users[index].pendingMsg
    select(".location h3").innerText = users[index].location
    select(".name h1:nth-child(1)").innerText = users[index].name
    select(".name h1:nth-child(2)").innerText = users[index].age


    let clutter = ""
    users[index].interests.forEach((interest) => {
        clutter += `<div class="tag flex gap-1 items-center bg-white/10 px-3 py-1 rounded-full ">
                            ${interest.icon}
                            <h4 class="text-sm font-medium tracking-tight capitalize">${interest.interest}</h4>
                    </div>`
    })

    select('.tags').innerHTML = clutter;

    select('.bio p').textContent = users[index].bio
}



// set Initial
let curr = 0;

(function setInitial() {
    select('.maincard img').src = users[curr].displayPic;
    select('.incomingcard img').src = users[curr + 1]?.displayPic;

    setData(curr)

    curr = 2;
})();



function imageChange() {

    let tl = gsap.timeline({
        onComplete: function () {
            let main = select('.maincard')
            let incoming = select('.incomingcard')

            incoming.classList.remove('z-[2]')
            incoming.classList.add('z-[3]')
            incoming.classList.remove('incomingcard')

            main.classList.remove('z-[3]')
            main.classList.add('z-[2]')
            gsap.set(main, {
                scale: 1,
                opacity: 1
            })

            if (curr === users.length) curr = 0;
            select(".maincard img").src = users[curr].displayPic;
            curr++;
            main.classList.remove('maincard')

            incoming.classList.add("maincard")   //<---    Flip karo
            main.classList.add('incomingcard')
        }
    })

    tl.to(".maincard", {
        scale: "1.3",
        opacity: 0,
        ease: Circ,
        duration: .9
    }, "start")
    tl.from(".incomingcard", {
        scale: ".9",
        opacity: 0,
        ease: Circ,
        duration: .7
    }, "start")

}


let deny = select(".deny")
let accept = select(".accept")

deny.addEventListener("click", () => {
    imageChange()
    setData(curr - 1)
    gsap.from('.details .element', {
        y: "100%",
        opacity: 0,
        stagger: .06,
        ease: Power4.easeInOut,
        duration: 1.2
    })
    
})

accept.addEventListener("click", () => {
    imageChange()
    setData(curr - 1)
    gsap.from('.details .element', {
        y: "100%",
        opacity: 0,
        stagger: .06,
        ease: Power4.easeInOut,
        duration: 1.2
    })
    
})



function containerCreator() {
    document.querySelectorAll('.element').forEach((elem) => {
        let div = document.createElement('div')
        div.classList.add(`${elem.classList[1]}container`, 'overflow-hidden')
        div.appendChild(elem)
        select('.details').appendChild(div)
    })
}
containerCreator()
