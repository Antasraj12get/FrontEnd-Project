let data = fetch('https://dummyjson.com/users')  // Added `/1` to get a single user
    .then(res => res.json())
    .then(data => {
        console.log(data);            // Full data
        console.log(data.firstName);  // Specific property
        const users = document.getElementsByClassName("users")[0];

        let handleSearch = (e) => {
            console.log(e.target.value)
            let targeted = e.target.value;
            let filteredVal = data.users.filter(obj => {
                console.log(obj.firstName.includes(targeted))
                return (
                    obj.firstName.toLowerCase().includes(targeted.toLowerCase()) || obj.email.toLowerCase().includes(targeted.toLowerCase())
                )
            })
            renderUser(filteredVal)
        }

        const input = document.getElementById("input");
        input.addEventListener("input", handleSearch)
        function renderUser(arr) {
            users.innerHTML = ' ';
            arr.forEach(element => {

                const { firstName, image, email } = element;

                let userContainer = document.createElement("div");
                userContainer.innerHTML = `
                        <img src=${image} alt="">
                        <div class="con-box">
                            <div class="heading">${firstName}</div>
                            <div class="email">${email}</div>
                        </div>`
                users.appendChild(userContainer);
            });
        }
        renderUser(data.users);



    })

    .catch(err => console.error(err));  // Always good to catch errors

console.log(data);  // Will log: Promise { <pending> }  

