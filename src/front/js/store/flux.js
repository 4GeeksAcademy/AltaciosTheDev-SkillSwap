
const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			message: null,
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			openSidebar: false,

			token: localStorage.getItem("token") || null,
			profile: JSON.parse(localStorage.getItem("profile")) || null,
			userSkillsAssociations: null,
			tutorProfile: null
		},
		actions: {

			login: async (email, password) => {
				const opts = {
					method: 'POST',
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify({
						"email": email,
						"password": password
					})
				}
				
				try{ 
					const resp = await fetch(process.env.BACKEND_URL + "/api/login", opts)
					if(resp.status !== 200){
						alert("Bad Email or Password")
						return false;
					} 

					const data = await resp.json();
					localStorage.setItem("token", data.access_token);
					setStore({ token: data.access_token })
					getActions().getProfile()
					return true;

				} 
				catch(error) {
					console.error("there was a error");
				}
		
			},

			logout: () => {
				localStorage.removeItem("token");
				localStorage.removeItem("profile");
			    setStore({ token: null, profile: null });
			},
			
			getProfile: async (user) => {
				const store = getStore()
				
				try{ 
					const resp = await fetch(process.env.BACKEND_URL + "/api/protected", {
						method: 'GET',
						headers: {
							"Content-Type": "application/json",
							"Authorization": "Bearer " + store.token 
						},
					})
					if(resp.status !== 200){
						alert("there has been some error")
						return false;
					} 

					const data = await resp.json();
					localStorage.setItem("profile", JSON.stringify(data));
					setStore({ profile: data })

				}
				catch(error) {
					console.error("there was an error getting the profile");
				}
		
			},
			getAssociations: async () => {
				const store = getStore()

				try{
					//fetch the associations from the back end
					const resp = await fetch(process.env.BACKEND_URL + "api/associations",{
						method: 'GET',
						headers: {
							"Content-Type": "application/json",
							"Authorization": `Bearer ${store.token}`
						},
					})
					const data = await resp.json()

					if(!resp.ok){
						throw new Error(data.msg)
					}
					setStore({userSkillsAssociations: data})
					return true
				}

				catch(error){
					console.log("Error from backend", error)
					return false
				}
			},
			getTutorProfile: async (id) => {
				const store = getStore()

				try{
					//fetch the associations from the back end
					const resp = await fetch(process.env.BACKEND_URL + `api/users/${id}`,{
						method: 'GET',
						headers: {
							"Content-Type": "application/json",
							"Authorization": `Bearer ${store.token}`
						},
					})
					const data = await resp.json()

					if(!resp.ok){
						throw new Error(data.msg)
					}
					console.log(data)
					setStore({tutorProfile: data})
					return id
				}

				catch(error){
					console.log("Error from backend", error)
					return false
				}
			},













			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			getMessage: async () => {
				try{
					// fetching data from the backend
					const resp = await fetch(process.env.BACKEND_URL + "/api/hello")
					const data = await resp.json()
					setStore({ message: data.message })
					// don't forget to return something, that is how the async resolves
					return data;
				}catch(error){
					console.log("Error loading message from backend", error)
				}
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},
			openSidebarToggle: () => {
				const store = getStore()
				setStore({openSidebar: !store.openSidebar})
			}
		}
	};
};

export default getState;
