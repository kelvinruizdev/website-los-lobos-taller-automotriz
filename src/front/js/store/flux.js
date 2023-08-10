const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			services: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
			}
		}
	};
};

export default getState;
