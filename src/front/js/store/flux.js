import { Register } from "../pages/register";
import Swal from 'sweetalert2'


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
			tutorProfile: null,
			skills: null,
			categories: null,
			userSessions: null,
			achievements: null



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

				try {
					const resp = await fetch(process.env.BACKEND_URL + "/api/login", opts)
					if (!resp.ok) {
						alert("Bad Email or Password")
						return false;
					}

					const data = await resp.json();
					localStorage.setItem("token", data.access_token);
					setStore({ token: data.access_token })
					getActions().getProfile()
					getActions().getAchievements()
					return true;

				}
				catch (error) {
					console.error("there was a error");
				}

			},

			logout: () => {
				localStorage.removeItem("token");
				localStorage.removeItem("profile");
				setStore({ token: null, profile: null });
			},

			getProfile: async () => {
				const store = getStore()

				try {
					const resp = await fetch(process.env.BACKEND_URL + "/api/protected", {
						method: 'GET',
						headers: {
							"Content-Type": "application/json",
							"Authorization": "Bearer " + localStorage.getItem("token")
						},
					})
					if (!resp.ok) {
						alert("there has been some error")
						return false;
					}

					const data = await resp.json();
					localStorage.setItem("profile", JSON.stringify(data));
					console.log(data)
					setStore({ profile: data })

				}
				catch (error) {
					console.error("there was an error getting the profile");
				}

			},
			getAssociations: async (level, role, category) => {
				const store = getStore()

				try {
					// Construct URL with query parameters
					const url = new URL(process.env.BACKEND_URL + "api/skills-joined-table");
					url.searchParams.append("level", level);
					url.searchParams.append("role", role);
					url.searchParams.append("category", category);


					// Fetch the associations from the backend
					const resp = await fetch(url, {
						method: 'GET',
						headers: {
							"Content-Type": "application/json",
							"Authorization": `Bearer ${store.token}`
						}
					});

					const data = await resp.json();

					if (!resp.ok) {
						throw new Error(data.msg);
					}

					setStore({ userSkillsAssociations: data });
					return true;
				} catch (error) {
					console.log("Error from backend", error);
					return false;
				}
			},
			getTutorProfile: async (id) => {
				const store = getStore()

				try {
					//fetch the associations from the back end
					const resp = await fetch(process.env.BACKEND_URL + `api/users/${id}`, {
						method: 'GET',
						headers: {
							"Content-Type": "application/json",
							"Authorization": `Bearer ${localStorage.getItem("token")}`
						},
					})
					const data = await resp.json()

					if (!resp.ok) {
						throw new Error(data.msg)
					}
					console.log(data)
					setStore({ tutorProfile: data })
					return id
				}

				catch (error) {
					console.log("Error from backend", error)
					return false
				}
			},
			getCategories: 	async () => {
				const store = getStore()

				try {
					//fetch the associations from the back end
					const resp = await fetch(process.env.BACKEND_URL + `api/categories`, {
						method: 'GET',
						headers: {
							"Content-Type": "application/json",
							"Authorization": `Bearer ${store.token}`
						},
					})
					const data = await resp.json()

					if (!resp.ok) {
						throw new Error(data.msg)
					}
					console.log(data)
					setStore({ categories: data })
					return true
				}

				catch (error) {
					console.log("Error from backend", error)
					return false
				}
			},

			getSkills: async () => {
				const store = getStore()
				try {
					//fetch the associations from the back end
					const resp = await fetch(`${process.env.BACKEND_URL}/api/skills`, {
						method: 'GET',
						headers: {
							"Content-Type": "application/json",
							"Authorization": `Bearer ${store.token}`

						},
					})
					const data = await resp.json()
					if (!resp.ok) {
						throw new Error(data.msg)
					}
					console.log(data)
					setStore({ skills: data })
					return true
				}
				catch (error) {
					console.log("Error from backend", error)
					return false
				}
			},

			editProfile: async (newUser, id) => {
				const store = getStore()
				try {
					const res = await fetch(process.env.BACKEND_URL + `/api/profile`, {
						method: 'PUT',
						body: JSON.stringify(
							newUser
						),
						headers: {
							'Content-Type': 'application/json',
							"Authorization": `Bearer ${localStorage.getItem("token")}`
						},
					})
					const data = await res.json();
					if (res.ok) {
						getActions().getProfile()
						setStore({ profile: newUser })
						localStorage.setItem("profile", JSON.stringify(newUser));
						Swal.fire({
							position: "center",
							icon: "success",
							title: data.mensaje,
							background: "#263043",
							color: "#FFFFFF",
							showConfirmButton: false,
							timer: 1500
						});

					}
				} catch (error) {
					return false

				}

			},
			editAssociation: async (id, skill_id, role, level) => {
				const store = getStore()
				try {
					const res = await fetch(process.env.BACKEND_URL + `/api/associations/${id}`, {
						method: 'PUT',
						body: JSON.stringify({
							"skill_id": parseInt(skill_id),
							"role": role,
							"level": level
						}

						),
						headers: {
							'Content-Type': 'application/json',
							"Authorization": `Bearer ${localStorage.getItem("token")}`
						},
					})
					const data = await res.json()
					if (res.ok) {
						await getActions().getProfile()
						Swal.fire({
							position: "center",
							icon: "success",
							title: data.mensaje,
							background: "#263043",
							color: "#FFFFFF",
							showConfirmButton: false,
							timer: 1500
						});

					}
				} catch (error) {
					return false

				}

			},
			scheduleSession: async (sessionDetails) => {
				try {
					const resp = await fetch(process.env.BACKEND_URL + "/api/sessions", {
						method: 'POST',
						headers: {
							"Content-Type": "application/json"
						},
						body: JSON.stringify(sessionDetails)
					})
					const data = await resp.json();
					if (!resp.ok) {
						throw new Error(data.msg)
					}

					// setStore({ token: data.access_token })
					// getActions().getProfile()
					Swal.fire({
						position: "center",
						icon: "success",
						title: data.msg,
						background: "#263043",
						color: "#FFFFFF",
						showConfirmButton: false,
						timer: 1500
					});
					return true

				}
				catch (error) {
					alert(error)
					return false
				}

			},

			getUserSessions: async (status="") => {
				const store = getStore()

				try {
					// Construct URL with query parameters
					const url = new URL(process.env.BACKEND_URL + "api/user-sessions");
					url.searchParams.append("status", status);
					// url.searchParams.append("role", role);
					// url.searchParams.append("category", category);


					// Fetch the sessions from the backend
					const resp = await fetch(url, {
						method: 'GET',
						headers: {
							"Content-Type": "application/json",
							"Authorization": `Bearer ${store.token}`
						}
					});

					const data = await resp.json();

					if (!resp.ok) {
						throw new Error(data.msg);
					}
					setStore({ userSessions: data.sessions });
					return true;
				} catch (error) {
					console.log("Error from backend", error);
					return false;
				}
			},
			editSession: async (status, id) => {
				const store = getStore()
				try {
					const res = await fetch(process.env.BACKEND_URL + `/api/sessions/${id}`, {
						method: 'PUT',
						body: JSON.stringify({
							"status": status
						}

						),
						headers: {
							'Content-Type': 'application/json',
							"Authorization": `Bearer ${store.token}`
						},
					})
					const data = await res.json()
					if (!res.ok) {
						throw new Error(data.msg);
					}

					Swal.fire({
						position: "center",
						icon: "success",
						title: data.msg,
						background: "#263043",
						color: "#FFFFFF",
						showConfirmButton: false,
						timer: 1500
					});
					getActions().getUserSessions()
					getActions().getAchievements()
					return true

				} catch (error) {
					console.error(error)
					return false

				}

			},
			getAchievements: async () => {
				const store = getStore()
				try {
					const res = await fetch(process.env.BACKEND_URL + "/api/achievements", {
						method: 'GET',
						headers: {
							"Content-Type": "application/json",
							"Authorization": `Bearer ${store.token}`
						},
					})
					const data = await res.json();
					if (!res.ok) {
						throw new Error(data.msg);
					}
					console.log(data.details)
					setStore({ achievements: data.details })

				}
				catch (error) {
					console.error(error);
				}

			},

			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			getMessage: async () => {
				try {
					// fetching data from the backend
					const resp = await fetch(process.env.BACKEND_URL + "/api/hello")
					const data = await resp.json()
					setStore({ message: data.message })
					// don't forget to return something, that is how the async resolves
					return data;
				} catch (error) {
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
				setStore({ openSidebar: !store.openSidebar })
			},

			register: async (name,email,number,password,gender,country,city) => {

				try{
					let datos={
						email:email,
						name:name,
						password:password,
						number:number,
						gender:gender,
						country:country,
						city:city
					};
					const resp =await fetch(process.env.BACKEND_URL + "/api/signup",{
						method:"POST",
						headers:{"Content-Type":"application/json",
						},
						body:JSON.stringify(datos),
					});
					const data = await resp.json();
					if (!resp.ok) {
						throw new Error(data.msg);
					}
					Swal.fire({
						position: "center",
						icon: "success",
						title: data.msg,
						background: "#263043",
						color: "#FFFFFF",
						showConfirmButton: false,
						timer: 1500
					});
					return true

				}catch(error){
					Swal.fire({
						position: "center",
						icon: "error",
						title: error,
						background: "#263043",
						color: "#FFFFFF",
						showConfirmButton: false,
						timer: 1500
					});
					console.error(error)
					return false;
				}


			}
		}
	};
};

export default getState;
